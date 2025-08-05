import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { branches, getResourcesBySemester } from "@/data/resources";
import { ArrowLeft, BookOpen, Users, FileText, TrendingUp, Download, Star, Calendar, GraduationCap, ChevronRight } from "lucide-react";

const BranchResources = () => {
  const { branchCode } = useParams();
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentBranch = branches[branchCode];

  if (!currentBranch) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Branch Not Found</h1>
          <p className="text-muted-foreground mb-8">The branch you're looking for doesn't exist.</p>
          <Button variant="academic" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSemesterSelect = (semester) => {
    window.location.href = `/branch/${branchCode}/semester/${semester}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Branch Header */}
      <section className={`py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b ${currentBranch.borderColor} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            <div className="flex items-center mb-8">
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
                className="mr-4 hover:bg-white/50 backdrop-blur-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Branches
              </Button>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Engineering Branch
                </Badge>
                <Badge variant="outline" className="bg-white/50 backdrop-blur-sm">
                  <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                  4.8 Rating
                </Badge>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
              <div className="flex items-center gap-6">
                <div className={`w-24 h-24 bg-gradient-to-br ${currentBranch.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                  <span className="text-white font-bold text-3xl">{branchCode}</span>
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {currentBranch.name}
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
                    {currentBranch.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  label: "Active Students",
                  value: currentBranch.students.toLocaleString(),
                  color: "text-blue-600",
                  bg: "bg-blue-50"
                },
                {
                  icon: FileText,
                  label: "Study Resources",
                  value: currentBranch.resources.toLocaleString(),
                  color: "text-green-600",
                  bg: "bg-green-50"
                },
                {
                  icon: Download,
                  label: "Total Downloads",
                  value: "2.4M+",
                  color: "text-purple-600",
                  bg: "bg-purple-50"
                },
                {
                  icon: TrendingUp,
                  label: "Success Rate",
                  value: "94%",
                  color: "text-orange-600",
                  bg: "bg-orange-50"
                }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`${stat.bg} backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Semester Selection Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <GraduationCap className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">Choose Your Academic Level</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Select Your Semester
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose your current semester to access tailored study materials, notes, previous year papers,
              and resources specifically designed for your academic level in {currentBranch.name}.
            </p>
          </div>

          {/* Semester Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((semester, index) => {
              const semesterSubjects = currentBranch.subjects[semester] || [];
              const semesterResources = getResourcesBySemester(branchCode, semester);

              return (
                <div
                  key={semester}
                  onClick={() => handleSemesterSelect(semester)}
                  className={`bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-2 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Semester Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${currentBranch.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-2xl">{semester}</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Semester Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Semester {semester}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {semester <= 2 ? 'Foundation Level' :
                        semester <= 4 ? 'Intermediate Level' :
                          semester <= 6 ? 'Advanced Level' : 'Specialization Level'}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <BookOpen className="h-4 w-4 text-primary mr-2" />
                        <span className="text-lg font-bold text-primary">
                          {semesterSubjects.length}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">Subjects</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <FileText className="h-4 w-4 text-primary mr-2" />
                        <span className="text-lg font-bold text-primary">
                          {semesterResources.length}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">Resources</div>
                    </div>
                  </div>

                  {/* Popular Subjects Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Key Subjects
                    </h4>
                    <div className="space-y-2">
                      {semesterSubjects.slice(0, 3).map((subject) => (
                        <div key={subject} className="text-xs text-muted-foreground bg-gray-50 rounded-lg px-3 py-2">
                          {subject.replace(/-/g, ' ')}
                        </div>
                      ))}
                      {semesterSubjects.length > 3 && (
                        <div className="text-xs text-muted-foreground text-center py-1">
                          +{semesterSubjects.length - 3} more subjects
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="academic"
                    className="w-full group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Semester {semester}
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Comprehensive Content</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete study materials for all subjects in each semester
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground">
                    All resources are verified and updated regularly
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Easy Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Download and access materials anytime, anywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BranchResources;