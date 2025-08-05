import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLayout from "@/components/AdminLayout";
import { 
  BookOpen, Search, Filter, Plus, Edit, Trash2, Eye, 
  GraduationCap, Code, Beaker, Calculator, Globe,
  CheckCircle, AlertTriangle, Clock, BarChart3, FileText
} from "lucide-react";

const SubjectManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedBranch, setSelectedBranch] = useState("all");

  // Mock subjects data
  const subjects = [
    {
      id: 1,
      code: "KCS301",
      name: "Data Structures",
      branch: "CSE",
      semester: 3,
      credits: 4,
      subjectType: "theory",
      isElective: false,
      description: "Introduction to data structures, algorithms, and their applications",
      syllabus: "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs",
      totalResources: 45,
      totalStudents: 420,
      avgRating: 4.7,
      faculty: "Dr. Rajesh Kumar",
      isActive: true,
      createdAt: "2023-01-15"
    },
    {
      id: 2,
      code: "KCS302",
      name: "Data Structures Lab",
      branch: "CSE",
      semester: 3,
      credits: 2,
      subjectType: "practical",
      isElective: false,
      description: "Practical implementation of data structures concepts",
      syllabus: "Programming exercises on arrays, linked lists, stacks, queues",
      totalResources: 28,
      totalStudents: 420,
      avgRating: 4.5,
      faculty: "Prof. Priya Sharma",
      isActive: true,
      createdAt: "2023-01-15"
    },
    {
      id: 3,
      code: "KCS401",
      name: "Operating Systems",
      branch: "CSE",
      semester: 4,
      credits: 4,
      subjectType: "theory",
      isElective: false,
      description: "Concepts of operating systems, process management, memory management",
      syllabus: "Process Management, Memory Management, File Systems, I/O Systems",
      totalResources: 38,
      totalStudents: 385,
      avgRating: 4.6,
      faculty: "Dr. Amit Singh",
      isActive: true,
      createdAt: "2023-01-15"
    },
    {
      id: 4,
      code: "KCS701",
      name: "Machine Learning",
      branch: "CSE",
      semester: 7,
      credits: 4,
      subjectType: "theory",
      isElective: true,
      description: "Introduction to machine learning algorithms and applications",
      syllabus: "Supervised Learning, Unsupervised Learning, Neural Networks, Deep Learning",
      totalResources: 32,
      totalStudents: 156,
      avgRating: 4.8,
      faculty: "Dr. Neha Gupta",
      isActive: true,
      createdAt: "2023-01-15"
    },
    {
      id: 5,
      code: "KEC301",
      name: "Analog Electronics",
      branch: "ECE",
      semester: 3,
      credits: 4,
      subjectType: "theory",
      isElective: false,
      description: "Analog electronic circuits and their applications",
      syllabus: "Diodes, Transistors, Amplifiers, Oscillators, Power Supplies",
      totalResources: 25,
      totalStudents: 298,
      avgRating: 4.4,
      faculty: "Dr. Suresh Patel",
      isActive: true,
      createdAt: "2023-01-15"
    },
    {
      id: 6,
      code: "KME301",
      name: "Thermodynamics",
      branch: "ME",
      semester: 3,
      credits: 4,
      subjectType: "theory",
      isElective: false,
      description: "Laws of thermodynamics and their engineering applications",
      syllabus: "First Law, Second Law, Entropy, Cycles, Heat Engines",
      totalResources: 22,
      totalStudents: 245,
      avgRating: 4.3,
      faculty: "Dr. Kavya Agarwal",
      isActive: true,
      createdAt: "2023-01-15"
    }
  ];

  const subjectStats = {
    totalSubjects: 168,
    theorySubjects: 112,
    practicalSubjects: 45,
    electiveSubjects: 28,
    totalResources: 2847,
    avgRating: 4.5
  };

  const branches = ["CSE", "ECE", "ME", "EE", "CE", "IT"];

  const getSubjectTypeIcon = (type) => {
    switch (type) {
      case "theory": return BookOpen;
      case "practical": return Code;
      case "project": return Beaker;
      default: return BookOpen;
    }
  };

  const getSubjectTypeColor = (type) => {
    switch (type) {
      case "theory": return "bg-blue-100 text-blue-800";
      case "practical": return "bg-green-100 text-green-800";
      case "project": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.faculty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBranch = selectedBranch === "all" || subject.branch === selectedBranch;
    
    const matchesFilter = selectedFilter === "all" || 
                         (selectedFilter === "theory" && subject.subjectType === "theory") ||
                         (selectedFilter === "practical" && subject.subjectType === "practical") ||
                         (selectedFilter === "elective" && subject.isElective) ||
                         (selectedFilter === "core" && !subject.isElective);
    
    return matchesSearch && matchesBranch && matchesFilter;
  });

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Subject Management</h1>
            <p className="text-sm text-gray-600">Manage subjects, syllabus, and academic content</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-2" />
              Subject Analytics
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Subject
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{subjectStats.totalSubjects}</p>
            <p className="text-sm text-gray-600">Total Subjects</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{subjectStats.theorySubjects}</p>
            <p className="text-sm text-gray-600">Theory</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{subjectStats.practicalSubjects}</p>
            <p className="text-sm text-gray-600">Practical</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{subjectStats.electiveSubjects}</p>
            <p className="text-sm text-gray-600">Electives</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">{subjectStats.totalResources.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Resources</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{subjectStats.avgRating}</p>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </div>
        </div>

        <Tabs defaultValue="subjects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Subjects Tab */}
          <TabsContent value="subjects" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200">
              {/* Search and Filters */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search subjects by name, code, or faculty..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">All Branches</option>
                    {branches.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">All Types</option>
                    <option value="theory">Theory</option>
                    <option value="practical">Practical</option>
                    <option value="elective">Electives</option>
                    <option value="core">Core</option>
                  </select>
                </div>
              </div>

              {/* Subjects Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Subject</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Academic Info</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Faculty</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Stats</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubjects.map((subject) => {
                      const TypeIcon = getSubjectTypeIcon(subject.subjectType);
                      return (
                        <tr key={subject.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <TypeIcon className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{subject.name}</p>
                                <p className="text-sm text-gray-600">{subject.code}</p>
                                <p className="text-xs text-gray-500 line-clamp-1">{subject.description}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline">{subject.branch}</Badge>
                                <Badge variant="outline">Sem {subject.semester}</Badge>
                                <Badge variant="outline">{subject.credits} Credits</Badge>
                              </div>
                              <Badge variant="secondary" className={getSubjectTypeColor(subject.subjectType)}>
                                {subject.subjectType}
                              </Badge>
                              {subject.isElective && (
                                <Badge variant="secondary" className="bg-purple-100 text-purple-800 ml-2">
                                  Elective
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-medium text-gray-900">{subject.faculty}</p>
                              <p className="text-sm text-gray-600">{subject.totalStudents} students</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="space-y-1 text-sm">
                              <div className="flex items-center space-x-1">
                                <FileText className="h-3 w-3 text-gray-400" />
                                <span>{subject.totalResources} resources</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-xs ${i < Math.floor(subject.avgRating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                      ★
                                    </span>
                                  ))}
                                </div>
                                <span className="text-xs">{subject.avgRating}</span>
                              </div>
                            </div>
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
                                <FileText className="h-4 w-4" />
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

          {/* Syllabus Tab */}
          <TabsContent value="syllabus" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Syllabus Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubjects.slice(0, 6).map((subject) => (
                  <div key={subject.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                      <Badge variant="outline">{subject.code}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{subject.syllabus}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{subject.branch} - Sem {subject.semester}</span>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Syllabus
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Type Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Theory Subjects</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                      </div>
                      <span className="font-semibold text-gray-900">{subjectStats.theorySubjects}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Practical Subjects</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '27%' }}></div>
                      </div>
                      <span className="font-semibold text-gray-900">{subjectStats.practicalSubjects}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Elective Subjects</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '17%' }}></div>
                      </div>
                      <span className="font-semibold text-gray-900">{subjectStats.electiveSubjects}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Rated Subjects</h3>
                <div className="space-y-3">
                  {subjects
                    .sort((a, b) => b.avgRating - a.avgRating)
                    .slice(0, 5)
                    .map((subject, index) => (
                      <div key={subject.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{subject.name}</p>
                          <p className="text-sm text-gray-600">{subject.code} - {subject.branch}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-sm ${i < Math.floor(subject.avgRating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="font-semibold text-gray-900">{subject.avgRating}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default SubjectManagement;