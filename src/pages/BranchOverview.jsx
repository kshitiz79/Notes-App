import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Users, BookOpen, FileText, TrendingUp, Filter, Grid, List, ArrowRight, Star, Clock } from "lucide-react";

const BranchOverview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const branches = [
    {
      code: "CSE",
      name: "Computer Science Engineering",
      description: "Programming, algorithms, software development, and computer systems",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/20",
      students: 15420,
      resources: 8934,
      subjects: ["Data Structures", "Algorithms", "Database Systems", "Computer Networks", "Operating Systems", "Software Engineering"]
    },
    {
      code: "ECE",
      name: "Electronics & Communication Engineering",
      description: "Circuit design, communication systems, and electronic devices",
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/20",
      students: 12350,
      resources: 6721,
      subjects: ["Digital Electronics", "Analog Circuits", "Communication Systems", "Signal Processing", "Microprocessors", "VLSI Design"]
    },
    {
      code: "ME",
      name: "Mechanical Engineering",
      description: "Design, manufacturing, thermodynamics, and mechanical systems",
      color: "from-green-500 to-teal-500",
      borderColor: "border-green-500/20",
      students: 11200,
      resources: 5843,
      subjects: ["Thermodynamics", "Fluid Mechanics", "Machine Design", "Manufacturing", "Heat Transfer", "Mechanics of Materials"]
    },
    {
      code: "EE",
      name: "Electrical Engineering",
      description: "Power systems, electrical machines, and control systems",
      color: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-500/20",
      students: 9800,
      resources: 4567,
      subjects: ["Power Systems", "Electrical Machines", "Control Systems", "Power Electronics", "Circuit Analysis", "Electromagnetic Theory"]
    },
    {
      code: "CE",
      name: "Civil Engineering",
      description: "Structural design, construction, and infrastructure development",
      color: "from-red-500 to-pink-500",
      borderColor: "border-red-500/20",
      students: 8900,
      resources: 4123,
      subjects: ["Structural Analysis", "Concrete Technology", "Geotechnical Engineering", "Transportation", "Environmental Engineering", "Construction Management"]
    },
    {
      code: "IT",
      name: "Information Technology",
      description: "Information systems, web development, and IT management",
      color: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-500/20",
      students: 7650,
      resources: 3890,
      subjects: ["Web Development", "Database Management", "Network Security", "System Administration", "Cloud Computing", "IT Project Management"]
    }
  ];

  const filteredBranches = branches.filter(branch =>
    branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50  relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100  rounded-full mb-6">
              <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800 ">Explore All Disciplines</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Engineering Branches
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Discover comprehensive study materials and resources across all major engineering disciplines. 
              Join thousands of students in your field of study.
            </p>
            
            {/* Enhanced Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="Search branches, subjects, or specializations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-primary/20 focus:border-primary/50 bg-white/80 backdrop-blur-sm"
                />
                <Button 
                  size="lg" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
                  variant="academic"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Engineering Branches", value: "6+", icon: BookOpen },
              { label: "Active Students", value: "67K+", icon: Users },
              { label: "Study Resources", value: "34K+", icon: FileText },
              { label: "Success Rate", value: "94%", icon: TrendingUp }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50  shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Filter and View Controls */}
      <section className="py-8 bg-white/50  backdrop-blur-sm border-y border-gray-200/50 ">
        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold">
                {filteredBranches.length} Branches Found
              </h2>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                All Disciplines
              </Badge>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 rounded-md border border-gray-300  text-sm"
                >
                  <option value="popularity">Popularity</option>
                  <option value="name">Name</option>
                  <option value="students">Students</option>
                  <option value="resources">Resources</option>
                </select>
              </div>
              
              <div className="flex items-center border border-gray-300  rounded-lg p-1">
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
      </section>

      {/* Branches Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className={`${
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-6"
          }`}>
            {filteredBranches.map((branch, index) => (
              <div
                key={branch.code}
                className={`${
                  viewMode === "grid" 
                    ? `bg-gradient-card rounded-2xl p-8 border ${branch.borderColor} hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-2` 
                    : `bg-gradient-card rounded-xl p-6 border ${branch.borderColor} hover:shadow-xl transition-all duration-300 group cursor-pointer flex items-center gap-6`
                } ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => window.location.href = `/branch/${branch.code}`}
              >
                {viewMode === "grid" ? (
                  <>
                    {/* Grid View */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${branch.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-white font-bold text-xl">{branch.code}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {branch.name}
                          </h3>
                          <div className="flex items-center mt-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                            <span className="text-sm text-muted-foreground">4.8 rating</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {branch.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/50  rounded-xl p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="h-5 w-5 text-primary mr-2" />
                          <span className="text-2xl font-bold text-primary">
                            {(branch.students / 1000).toFixed(1)}K
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                      <div className="bg-white/50  rounded-xl p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <FileText className="h-5 w-5 text-primary mr-2" />
                          <span className="text-2xl font-bold text-primary">
                            {(branch.resources / 1000).toFixed(1)}K
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">Resources</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Popular Subjects
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {branch.subjects.slice(0, 3).map((subject) => (
                          <Badge key={subject} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                            {subject}
                          </Badge>
                        ))}
                        {branch.subjects.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{branch.subjects.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button 
                      variant="academic" 
                      className="w-full group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Explore {branch.code}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </>
                ) : (
                  <>
                    {/* List View */}
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${branch.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                        <span className="text-white font-bold text-sm">{branch.code}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {branch.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {branch.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {(branch.students / 1000).toFixed(1)}K students
                          </span>
                          <span className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            {(branch.resources / 1000).toFixed(1)}K resources
                          </span>
                          <span className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                            4.8 rating
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-wrap gap-1">
                          {branch.subjects.slice(0, 2).map((subject) => (
                            <Badge key={subject} variant="secondary" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredBranches.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50  rounded-3xl p-12 max-w-md mx-auto">
                <BookOpen className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">No branches found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any branches matching your search. Try different keywords or browse all available branches.
                </p>
                <Button 
                  variant="academic" 
                  onClick={() => setSearchTerm("")}
                  className="w-full"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Clear Search
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Popular Resources Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 ">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100  rounded-full mb-6">
              <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-800 ">Trending This Week</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600  bg-clip-text text-transparent">
              Most Popular Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most downloaded and highly-rated study materials across all engineering branches
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Structures & Algorithms Complete Guide",
                branch: "CSE",
                downloads: "15.2K",
                rating: "4.9",
                color: "from-blue-500 to-cyan-500",
                icon: BookOpen
              },
              {
                title: "Circuit Analysis & Design Papers",
                branch: "ECE", 
                downloads: "12.8K",
                rating: "4.8",
                color: "from-orange-500 to-red-500",
                icon: FileText
              },
              {
                title: "Thermodynamics Study Guide",
                branch: "ME",
                downloads: "10.5K", 
                rating: "4.7",
                color: "from-green-500 to-teal-500",
                icon: BookOpen
              }
            ].map((resource, index) => (
              <div 
                key={resource.title}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50  shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center`}>
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <Badge variant="secondary" className="bg-green-100 text-green-800 ">
                      Trending
                    </Badge>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                
                <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      {resource.branch}
                    </Badge>
                    {resource.downloads} downloads
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    {resource.rating}
                  </span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Resource
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="academic" size="lg" className="px-8">
              <TrendingUp className="mr-2 h-5 w-5" />
              View All Trending Resources
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BranchOverview;