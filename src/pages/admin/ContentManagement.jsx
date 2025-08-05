import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import { 
  BookOpen, Search, Filter, Plus, Edit, Trash2, Eye, 
  Upload, Download, Star, FileText, Video, Image,
  Calendar, User, MoreVertical, CheckCircle,
  AlertTriangle, Clock, TrendingUp, BarChart3, Folder,
  GraduationCap, Code, Beaker, FileImage, PlayCircle
} from "lucide-react";

const ContentManagement = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTab, setSelectedTab] = useState("resources");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mock data for resources
  const resources = [
    {
      id: 1,
      title: "Data Structures Complete Notes",
      type: "notes",
      subject: "Data Structures",
      branch: "CSE",
      semester: 3,
      uploadedBy: "Dr. Amit Singh",
      uploadDate: "2024-11-15",
      downloads: 1247,
      rating: 4.8,
      size: "2.5 MB",
      status: "approved",
      views: 3421
    },
    {
      id: 2,
      title: "AKTU Previous Year Papers 2024",
      type: "previous_paper",
      subject: "Operating Systems",
      branch: "CSE",
      semester: 4,
      uploadedBy: "Admin",
      uploadDate: "2024-12-01",
      downloads: 892,
      rating: 4.6,
      size: "1.8 MB",
      status: "approved",
      views: 2156
    },
    {
      id: 3,
      title: "Java Programming Lab Manual",
      type: "lab_manual",
      subject: "Java Programming",
      branch: "CSE",
      semester: 2,
      uploadedBy: "Prof. Priya Sharma",
      uploadDate: "2024-11-28",
      downloads: 734,
      rating: 4.7,
      size: "3.2 MB",
      status: "pending",
      views: 1834
    },
    {
      id: 4,
      title: "Machine Learning Tutorial Video",
      type: "video",
      subject: "Machine Learning",
      branch: "CSE",
      semester: 7,
      uploadedBy: "Rahul Kumar",
      uploadDate: "2024-12-05",
      downloads: 234,
      rating: 4.9,
      size: "45.6 MB",
      status: "under_review",
      views: 567
    },
    {
      id: 5,
      title: "Circuit Analysis Diagrams",
      type: "image",
      subject: "Circuit Analysis",
      branch: "ECE",
      semester: 3,
      uploadedBy: "Dr. Neha Gupta",
      uploadDate: "2024-12-03",
      downloads: 456,
      rating: 4.4,
      size: "5.1 MB",
      status: "approved",
      views: 1123
    }
  ];

  // Mock data for subjects and branches
  const subjects = [
    { id: 1, code: "KCS301", name: "Data Structures", branch: "CSE", semester: 3, credits: 4, resources: 45 },
    { id: 2, code: "KCS401", name: "Operating Systems", branch: "CSE", semester: 4, credits: 4, resources: 38 },
    { id: 3, code: "KEC301", name: "Circuit Analysis", branch: "ECE", semester: 3, credits: 4, resources: 32 },
    { id: 4, code: "KCS701", name: "Machine Learning", branch: "CSE", semester: 7, credits: 4, resources: 28 },
    { id: 5, code: "KME301", name: "Thermodynamics", branch: "ME", semester: 3, credits: 4, resources: 25 }
  ];

  const branches = [
    { code: "CSE", name: "Computer Science Engineering", students: 3420, subjects: 32, resources: 1247 },
    { code: "ECE", name: "Electronics & Communication", students: 2890, subjects: 28, resources: 892 },
    { code: "ME", name: "Mechanical Engineering", students: 2156, subjects: 30, resources: 734 },
    { code: "EE", name: "Electrical Engineering", students: 1834, subjects: 26, resources: 623 },
    { code: "CE", name: "Civil Engineering", students: 1567, subjects: 24, resources: 456 },
    { code: "IT", name: "Information Technology", students: 1234, subjects: 28, resources: 389 }
  ];

  const contentStats = {
    totalResources: 2847,
    approved: 2456,
    pending: 234,
    underReview: 157,
    totalDownloads: 145623,
    avgRating: 4.6,
    totalViews: 892456
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "notes": return FileText;
      case "previous_paper": return FileText;
      case "lab_manual": return Code;
      case "video": return PlayCircle;
      case "image": return FileImage;
      case "book": return BookOpen;
      default: return FileText;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "under_review": return "bg-blue-100 text-blue-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" || resource.type === selectedFilter || resource.status === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
            <p className="text-sm text-gray-600">Manage resources, subjects, and branches</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Content
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{contentStats.totalResources.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Resources</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{contentStats.approved.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Approved</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{contentStats.pending}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{contentStats.underReview}</p>
            <p className="text-sm text-gray-600">Under Review</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{contentStats.totalDownloads.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Downloads</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">{contentStats.avgRating}</p>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-red-600">{contentStats.totalViews.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Views</p>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Resources
            </TabsTrigger>
            <TabsTrigger value="subjects" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Subjects
            </TabsTrigger>
            <TabsTrigger value="branches" className="flex items-center gap-2">
              <Folder className="h-4 w-4" />
              Branches
            </TabsTrigger>
          </TabsList>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200">
              {/* Search and Filters */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search resources by title, subject, or author..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">All Types</option>
                    <option value="notes">Notes</option>
                    <option value="previous_paper">Previous Papers</option>
                    <option value="lab_manual">Lab Manuals</option>
                    <option value="video">Videos</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="under_review">Under Review</option>
                  </select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>

              {/* Resources Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        <input type="checkbox" className="rounded" />
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Resource</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Academic Info</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Stats</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResources.map((resource) => {
                      const TypeIcon = getTypeIcon(resource.type);
                      return (
                        <tr key={resource.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <input type="checkbox" className="rounded" />
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <TypeIcon className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{resource.title}</p>
                                <p className="text-sm text-gray-600">by {resource.uploadedBy}</p>
                                <p className="text-xs text-gray-500">{resource.size} • {resource.uploadDate}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="space-y-1">
                              <p className="font-medium text-gray-900">{resource.subject}</p>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline">{resource.branch}</Badge>
                                <Badge variant="outline">Sem {resource.semester}</Badge>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {resource.type.replace('_', ' ')}
                              </Badge>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="space-y-1 text-sm">
                              <div className="flex items-center space-x-1">
                                <Download className="h-3 w-3 text-gray-400" />
                                <span>{resource.downloads.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3 text-gray-400" />
                                <span>{resource.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 text-yellow-400" />
                                <span>{resource.rating}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge variant="secondary" className={getStatusColor(resource.status)}>
                              {resource.status === "approved" && <CheckCircle className="h-3 w-3 mr-1" />}
                              {resource.status === "pending" && <Clock className="h-3 w-3 mr-1" />}
                              {resource.status === "under_review" && <AlertTriangle className="h-3 w-3 mr-1" />}
                              {resource.status.replace('_', ' ')}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Subjects Tab */}
          <TabsContent value="subjects" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Subject Management</h3>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Subject
                  </Button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Subject Code</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Subject Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Branch</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Semester</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Credits</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Resources</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((subject) => (
                      <tr key={subject.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <span className="font-mono text-sm font-semibold">{subject.code}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-medium text-gray-900">{subject.name}</span>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant="outline">{subject.branch}</Badge>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-gray-900">{subject.semester}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-gray-900">{subject.credits}</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-blue-600">{subject.resources}</span>
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Branches Tab */}
          <TabsContent value="branches" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branches.map((branch) => (
                <div key={branch.code} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {branch.code}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{branch.name}</h3>
                        <p className="text-sm text-gray-600">{branch.code}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Students</span>
                      <span className="font-semibold text-gray-900">{branch.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Subjects</span>
                      <span className="font-semibold text-gray-900">{branch.subjects}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Resources</span>
                      <span className="font-semibold text-blue-600">{branch.resources}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Button variant="outline" className="w-full" size="sm">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default ContentManagement;