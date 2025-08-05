import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import { branches, getResourcesBySemester } from "@/data/resources";
import { 
  Search, ArrowLeft, BookOpen, Users, FileText, Clock, 
  TrendingUp, Filter, Grid, List, Star, Download 
} from "lucide-react";

const SemesterView = () => {
  const { branchCode, semesterNumber } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const branch = branches[branchCode];
  const semesterSubjects = branch?.subjects[semesterNumber] || [];
  const semesterResources = getResourcesBySemester(branchCode, semesterNumber);

  const filteredResources = semesterResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || resource.type === selectedType;
    return matchesSearch && matchesType;
  });

  if (!branch) {
    return <div>Branch not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Semester Header */}
      <section className={`py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b ${branch.borderColor} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center mb-8">
              <Button 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="mr-4 hover:bg-white/50 backdrop-blur-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to {branchCode}
              </Button>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Semester {semesterNumber}
                </Badge>
                <Badge variant="outline" className="bg-white/50 backdrop-blur-sm">
                  {semesterSubjects.length} Subjects
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
              <div className="flex items-center gap-6">
                <div className={`w-24 h-24 bg-gradient-to-br ${branch.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                  <span className="text-white font-bold text-2xl">{semesterNumber}</span>
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Semester {semesterNumber}
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
                    {branch.name} - Academic Resources
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  icon: BookOpen, 
                  label: "Subjects", 
                  value: semesterSubjects.length, 
                  color: "text-blue-600",
                  bg: "bg-blue-50"
                },
                { 
                  icon: FileText, 
                  label: "Resources", 
                  value: semesterResources.length, 
                  color: "text-green-600",
                  bg: "bg-green-50"
                },
                { 
                  icon: Download, 
                  label: "Downloads", 
                  value: `${Math.floor(semesterResources.reduce((sum, r) => sum + r.downloads, 0) / 1000)}K`, 
                  color: "text-purple-600",
                  bg: "bg-purple-50"
                },
                { 
                  icon: Star, 
                  label: "Avg Rating", 
                  value: (semesterResources.reduce((sum, r) => sum + parseFloat(r.rating), 0) / semesterResources.length).toFixed(1), 
                  color: "text-orange-600",
                  bg: "bg-orange-50"
                }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`${stat.bg} backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
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
      </section>

      {/* Subjects Overview */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Semester {semesterNumber} Subjects
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore all subjects and their resources for this semester
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semesterSubjects.map((subject, index) => {
              const subjectResources = semesterResources.filter(r => r.subject === subject);
              return (
                <Link
                  key={subject}
                  to={`/branch/${branchCode}/subject/${subject}`}
                  className={`bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-105 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${branch.color} rounded-xl flex items-center justify-center`}>
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {subjectResources.length} Resources
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {subject.replace(/-/g, ' ')}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {subjectResources.length} files
                    </span>
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {Math.floor(subjectResources.reduce((sum, r) => sum + r.downloads, 0) / 1000)}K
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-gray-200/50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-end">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Search Resources
              </label>
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="Search by title, subject, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 focus:border-primary/50"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Resource Type</label>
                <select 
                  value={selectedType} 
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-sm w-36"
                >
                  <option value="all">All Types</option>
                  <option value="notes">Study Notes</option>
                  <option value="papers">Question Papers</option>
                  <option value="solutions">Solutions</option>
                  <option value="books">Reference Books</option>
                  <option value="lab">Lab Manuals</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-sm w-36"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="recent">Most Recent</option>
                  <option value="rating">Highest Rated</option>
                  <option value="downloads">Most Downloaded</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">View</label>
                <div className="flex items-center border border-gray-300 rounded-lg p-1 bg-white/80 backdrop-blur-sm">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="h-8 w-8 p-0"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="h-8 w-8 p-0"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">All Resources</h2>
              <p className="text-muted-foreground">
                {filteredResources.length} resources found for Semester {semesterNumber}
              </p>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
              {filteredResources.length} Resources
            </Badge>
          </div>

          <div className={`${
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
          }`}>
            {filteredResources.map((resource, index) => (
              <div
                key={resource.id}
                className={`transition-all duration-500 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ResourceCard
                  {...resource}
                  onDownload={() => window.open(`/public/${resource.fileName}`, '_blank')}
                  onView={() => window.location.href = `/resource/${resource.id}`}
                  onBookmark={() => console.log('Bookmarked:', resource.id)}
                />
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 max-w-lg mx-auto">
                <BookOpen className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">No resources found</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We couldn't find any resources matching your criteria. Try adjusting your search terms or filters.
                </p>
                <Button 
                  variant="academic" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedType("all");
                  }}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SemesterView;