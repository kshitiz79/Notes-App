import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import { branches, getResourcesBySubject, resourceTypes } from "@/data/resources";
import { 
  ArrowLeft, BookOpen, FileText, Download, Star, Clock, 
  Users, TrendingUp, Eye, CheckCircle, Settings, File
} from "lucide-react";

const SubjectDetail = () => {
  const { branchCode, subjectCode } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const branch = branches[branchCode];
  const subjectName = subjectCode?.replace(/-/g, ' ');
  const subjectResources = getResourcesBySubject(branchCode, subjectCode);

  // Group resources by type
  const resourcesByType = subjectResources.reduce((acc, resource) => {
    if (!acc[resource.type]) {
      acc[resource.type] = [];
    }
    acc[resource.type].push(resource);
    return acc;
  }, {});

  if (!branch) {
    return <div>Branch not found</div>;
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'notes': return <FileText className="h-4 w-4" />;
      case 'papers': return <Eye className="h-4 w-4" />;
      case 'solutions': return <CheckCircle className="h-4 w-4" />;
      case 'books': return <BookOpen className="h-4 w-4" />;
      case 'lab': return <Settings className="h-4 w-4" />;
      case 'syllabus': return <File className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Subject Header */}
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
                  {branch.name}
                </Badge>
                <Badge variant="outline" className="bg-white/50 backdrop-blur-sm">
                  <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                  Subject Resources
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
              <div className="flex items-center gap-6">
                <div className={`w-24 h-24 bg-gradient-to-br ${branch.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {subjectName}
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
                    Complete study resources and materials
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {Math.floor(Math.random() * 5000) + 2000} students enrolled
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Last updated: {new Date().toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  icon: FileText, 
                  label: "Total Resources", 
                  value: subjectResources.length, 
                  color: "text-blue-600",
                  bg: "bg-blue-50"
                },
                { 
                  icon: Download, 
                  label: "Total Downloads", 
                  value: `${Math.floor(subjectResources.reduce((sum, r) => sum + r.downloads, 0) / 1000)}K`, 
                  color: "text-green-600",
                  bg: "bg-green-50"
                },
                { 
                  icon: Star, 
                  label: "Average Rating", 
                  value: subjectResources.length > 0 ? (subjectResources.reduce((sum, r) => sum + parseFloat(r.rating), 0) / subjectResources.length).toFixed(1) : "0", 
                  color: "text-yellow-600",
                  bg: "bg-yellow-50"
                },
                { 
                  icon: TrendingUp, 
                  label: "Resource Types", 
                  value: Object.keys(resourcesByType).length, 
                  color: "text-purple-600",
                  bg: "bg-purple-50"
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

      {/* Subject Description */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About {subjectName}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              This subject covers fundamental concepts and advanced topics essential for {branch.name} students. 
              Our comprehensive collection includes study notes, previous year papers, solved solutions, and reference materials 
              to help you excel in your examinations and build a strong foundation in {subjectName.toLowerCase()}.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Comprehensive Coverage",
                  description: "Complete syllabus coverage with detailed explanations",
                  icon: BookOpen,
                  color: "text-blue-600"
                },
                {
                  title: "Updated Content",
                  description: "Latest curriculum and examination patterns",
                  icon: TrendingUp,
                  color: "text-green-600"
                },
                {
                  title: "Expert Curated",
                  description: "Resources reviewed by subject matter experts",
                  icon: Star,
                  color: "text-yellow-600"
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 500}ms` }}
                >
                  <feature.icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources by Type */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Study Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore resources organized by type for better learning experience
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-7 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg mb-8">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                All
              </TabsTrigger>
              {Object.keys(resourceTypes).map(type => (
                <TabsTrigger key={type} value={type} className="flex items-center gap-2">
                  {getTypeIcon(type)}
                  {resourceTypes[type].name.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjectResources.map((resource, index) => (
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
            </TabsContent>

            {Object.keys(resourceTypes).map(type => (
              <TabsContent key={type} value={type} className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    {getTypeIcon(type)}
                    <div>
                      <h3 className="text-xl font-bold">{resourceTypes[type].name}</h3>
                      <p className="text-muted-foreground">{resourceTypes[type].description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{resourcesByType[type]?.length || 0} resources available</span>
                    <span>•</span>
                    <span>Updated regularly</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(resourcesByType[type] || []).map((resource, index) => (
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

                {(!resourcesByType[type] || resourcesByType[type].length === 0) && (
                  <div className="text-center py-20">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 max-w-lg mx-auto">
                      {getTypeIcon(type)}
                      <h3 className="text-2xl font-bold mb-4 mt-6">No {resourceTypes[type].name.toLowerCase()} found</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        We're working on adding more {resourceTypes[type].name.toLowerCase()} for this subject. 
                        Check back soon or explore other resource types.
                      </p>
                      <Button variant="academic">
                        <FileText className="mr-2 h-4 w-4" />
                        Browse All Resources
                      </Button>
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Related Subjects */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Related Subjects
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore other subjects from the same semester
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Find the semester this subject belongs to and show other subjects */}
            {Object.entries(branch.subjects).map(([semester, subjects]) => {
              if (subjects.includes(subjectCode)) {
                return subjects
                  .filter(subject => subject !== subjectCode)
                  .slice(0, 6)
                  .map((subject, index) => {
                    const relatedResources = getResourcesBySubject(branchCode, subject);
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
                            Semester {semester}
                          </Badge>
                        </div>
                        
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {subject.replace(/-/g, ' ')}
                        </h3>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            {relatedResources.length} resources
                          </span>
                          <span className="flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            {Math.floor(relatedResources.reduce((sum, r) => sum + r.downloads, 0) / 1000)}K
                          </span>
                        </div>
                      </Link>
                    );
                  });
              }
              return null;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubjectDetail;