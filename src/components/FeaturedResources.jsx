import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ResourceCard from "./ResourceCard";
import { Search, TrendingUp } from "lucide-react";

const FeaturedResources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedSemester, setSelectedSemester] = useState("all");

  // Sample data - in real app this would come from API
  const resources = [
    {
      id: 1,
      title: "Data Structures and Algorithms Complete Notes",
      subject: "Data Structures & Algorithms",
      semester: "3",
      branch: "CSE",
      type: "notes" ,
      downloads: 12548,
      rating: 4.8,
      uploadDate: "2 days ago",
      fileSize: "2.4 MB"
    },
    {
      id: 2,
      title: "Digital Electronics Previous Year Papers 2020-2023",
      subject: "Digital Electronics",
      semester: "4",
      branch: "ECE",
      type: "paper" ,
      downloads: 8936,
      rating: 4.6,
      uploadDate: "1 week ago",
      fileSize: "1.8 MB"
    },
    {
      id: 3,
      title: "Engineering Mathematics III Syllabus",
      subject: "Engineering Mathematics",
      semester: "3",
      branch: "ME",
      type: "syllabus" ,
      downloads: 5674,
      rating: 4.9,
      uploadDate: "3 days ago",
      fileSize: "845 KB"
    },
    {
      id: 4,
      title: "Computer Networks Comprehensive Study Material",
      subject: "Computer Networks",
      semester: "5",
      branch: "CSE",
      type: "notes" ,
      downloads: 15420,
      rating: 4.7,
      uploadDate: "5 days ago",
      fileSize: "3.2 MB"
    },
    {
      id: 5,
      title: "Thermodynamics End Term Papers Collection",
      subject: "Thermodynamics",
      semester: "4",
      branch: "ME",
      type: "paper"  ,
      downloads: 7832,
      rating: 4.5,
      uploadDate: "1 week ago",
      fileSize: "2.1 MB"
    },
    {
      id: 6,
      title: "Circuit Analysis and Design Notes",
      subject: "Circuit Analysis",
      semester: "2",
      branch: "EE",
      type: "notes" ,
      downloads: 9654,
      rating: 4.8,
      uploadDate: "4 days ago",
      fileSize: "2.8 MB"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = selectedBranch === "all" || resource.branch === selectedBranch;
    const matchesSemester = selectedSemester === "all" || resource.semester === selectedSemester;
    
    return matchesSearch && matchesBranch && matchesSemester;
  });

  const handleDownload = (id) => {
    console.log("Downloading resource", id);
    // In real app, this would trigger actual download
  };

  const handleView = (id) => {
    console.log("Viewing resource", id);
    // In real app, this would open preview modal
  };

  const handleBookmark = (id) => {
    console.log("Bookmarking resource", id);
    // In real app, this would save to user's bookmarks
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Study Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover top-rated notes, papers, and study materials curated by fellow students
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-card rounded-xl p-6 shadow-card border border-blue-500/10 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium">Search Resources</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search by title or subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Branch</label>
                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="CSE">CSE</SelectItem>
                    <SelectItem value="ECE">ECE</SelectItem>
                    <SelectItem value="ME">ME</SelectItem>
                    <SelectItem value="EE">EE</SelectItem>
                    <SelectItem value="CE">CE</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Semester</label>
                <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="1">Sem 1</SelectItem>
                    <SelectItem value="2">Sem 2</SelectItem>
                    <SelectItem value="3">Sem 3</SelectItem>
                    <SelectItem value="4">Sem 4</SelectItem>
                    <SelectItem value="5">Sem 5</SelectItem>
                    <SelectItem value="6">Sem 6</SelectItem>
                    <SelectItem value="7">Sem 7</SelectItem>
                    <SelectItem value="8">Sem 8</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Sections */}
        <div className="space-y-12 mb-12">
          {/* CSE Section */}
          <div className="bg-gradient-card rounded-xl p-8 border border-blue-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">CSE</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Computer Science Engineering</h3>
                <p className="text-muted-foreground">Latest programming and computer science resources</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources
                .filter(r => r.branch === "CSE")
                .slice(0, 3)
                .map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    {...resource}
                    onDownload={() => handleDownload(resource.id)}
                    onView={() => handleView(resource.id)}
                    onBookmark={() => handleBookmark(resource.id)}
                  />
                ))}
            </div>
          </div>

          {/* ECE Section */}
          <div className="bg-gradient-card rounded-xl p-8 border border-orange-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">ECE</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Electronics & Communication</h3>
                <p className="text-muted-foreground">Circuit design and communication systems materials</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources
                .filter(r => r.branch === "ECE")
                .slice(0, 3)
                .map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    {...resource}
                    onDownload={() => handleDownload(resource.id)}
                    onView={() => handleView(resource.id)}
                    onBookmark={() => handleBookmark(resource.id)}
                  />
                ))}
            </div>
          </div>

          {/* ME Section */}
          <div className="bg-gradient-card rounded-xl p-8 border border-green-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">ME</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Mechanical Engineering</h3>
                <p className="text-muted-foreground">Design and manufacturing study materials</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources
                .filter(r => r.branch === "ME")
                .slice(0, 3)
                .map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    {...resource}
                    onDownload={() => handleDownload(resource.id)}
                    onView={() => handleView(resource.id)}
                    onBookmark={() => handleBookmark(resource.id)}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Resource Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5 mb-8">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              All
            </TabsTrigger>
            <TabsTrigger value="CSE" className="flex items-center gap-2">
              CSE
            </TabsTrigger>
            <TabsTrigger value="ECE" className="flex items-center gap-2">
              ECE
            </TabsTrigger>
            <TabsTrigger value="ME" className="flex items-center gap-2">
              ME
            </TabsTrigger>
            <TabsTrigger value="EE" className="flex items-center gap-2">
              EE
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  {...resource}
                  onDownload={() => handleDownload(resource.id)}
                  onView={() => handleView(resource.id)}
                  onBookmark={() => handleBookmark(resource.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="CSE" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources
                .filter(r => r.branch === "CSE")
                .map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    {...resource}
                    onDownload={() => handleDownload(resource.id)}
                    onView={() => handleView(resource.id)}
                    onBookmark={() => handleBookmark(resource.id)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="ECE" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources
                .filter(r => r.branch === "ECE")
                .map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    {...resource}
                    onDownload={() => handleDownload(resource.id)}
                    onView={() => handleView(resource.id)}
                    onBookmark={() => handleBookmark(resource.id)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="ME" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources
                .filter(r => r.branch === "ME")
                .map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    {...resource}
                    onDownload={() => handleDownload(resource.id)}
                    onView={() => handleView(resource.id)}
                    onBookmark={() => handleBookmark(resource.id)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="EE" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources
                .filter(r => r.branch === "EE")
                .map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    {...resource}
                    onDownload={() => handleDownload(resource.id)}
                    onView={() => handleView(resource.id)}
                    onBookmark={() => handleBookmark(resource.id)}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Load More */}
        <div className="text-center pt-8">
          <Button variant="academic" size="lg">
            Load More Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;