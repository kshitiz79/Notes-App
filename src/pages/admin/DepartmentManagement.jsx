import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLayout from "@/components/AdminLayout";
import { 
  Building, Search, Filter, Plus, Edit, Trash2, Eye, 
  Users, BookOpen, GraduationCap, BarChart3, Settings,
  CheckCircle, AlertTriangle, Clock, TrendingUp
} from "lucide-react";

const DepartmentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Mock departments data
  const departments = [
    {
      id: 1,
      code: "CSE",
      name: "Computer Science Engineering",
      fullName: "Computer Science and Engineering",
      description: "Software development, algorithms, and computer systems",
      totalSemesters: 8,
      totalStudents: 3420,
      totalSubjects: 32,
      totalResources: 1247,
      totalFaculty: 45,
      hodName: "Dr. Rajesh Kumar",
      hodEmail: "rajesh.kumar@aktu.ac.in",
      isActive: true,
      createdAt: "2022-08-15"
    },
    {
      id: 2,
      code: "ECE",
      name: "Electronics & Communication",
      fullName: "Electronics and Communication Engineering",
      description: "Electronics, communication systems, and signal processing",
      totalSemesters: 8,
      totalStudents: 2890,
      totalSubjects: 28,
      totalResources: 892,
      totalFaculty: 38,
      hodName: "Dr. Priya Sharma",
      hodEmail: "priya.sharma@aktu.ac.in",
      isActive: true,
      createdAt: "2022-08-15"
    },
    {
      id: 3,
      code: "ME",
      name: "Mechanical Engineering",
      fullName: "Mechanical Engineering",
      description: "Mechanical systems, thermodynamics, and manufacturing",
      totalSemesters: 8,
      totalStudents: 2156,
      totalSubjects: 30,
      totalResources: 734,
      totalFaculty: 42,
      hodName: "Dr. Amit Singh",
      hodEmail: "amit.singh@aktu.ac.in",
      isActive: true,
      createdAt: "2022-08-15"
    },
    {
      id: 4,
      code: "EE",
      name: "Electrical Engineering",
      fullName: "Electrical Engineering",
      description: "Electrical systems, power generation, and control systems",
      totalSemesters: 8,
      totalStudents: 1834,
      totalSubjects: 26,
      totalResources: 623,
      totalFaculty: 35,
      hodName: "Dr. Neha Gupta",
      hodEmail: "neha.gupta@aktu.ac.in",
      isActive: true,
      createdAt: "2022-08-15"
    },
    {
      id: 5,
      code: "CE",
      name: "Civil Engineering",
      fullName: "Civil Engineering",
      description: "Construction, infrastructure, and structural engineering",
      totalSemesters: 8,
      totalStudents: 1567,
      totalSubjects: 24,
      totalResources: 456,
      totalFaculty: 32,
      hodName: "Dr. Suresh Patel",
      hodEmail: "suresh.patel@aktu.ac.in",
      isActive: true,
      createdAt: "2022-08-15"
    },
    {
      id: 6,
      code: "IT",
      name: "Information Technology",
      fullName: "Information Technology",
      description: "IT systems, networks, and software applications",
      totalSemesters: 8,
      totalStudents: 1234,
      totalSubjects: 28,
      totalResources: 389,
      totalFaculty: 28,
      hodName: "Dr. Kavya Agarwal",
      hodEmail: "kavya.agarwal@aktu.ac.in",
      isActive: true,
      createdAt: "2022-08-15"
    }
  ];

  const departmentStats = {
    totalDepartments: 6,
    activeDepartments: 6,
    totalStudents: 12101,
    totalFaculty: 220,
    totalSubjects: 168,
    totalResources: 4341
  };

  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dept.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dept.hodName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" || 
                         (selectedFilter === "active" && dept.isActive) ||
                         (selectedFilter === "inactive" && !dept.isActive);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Department Management</h1>
            <p className="text-sm text-gray-600">Manage engineering departments and branches</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-2" />
              Department Analytics
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Department
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{departmentStats.totalDepartments}</p>
            <p className="text-sm text-gray-600">Total Departments</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{departmentStats.activeDepartments}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{departmentStats.totalStudents.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Students</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{departmentStats.totalFaculty}</p>
            <p className="text-sm text-gray-600">Faculty Members</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">{departmentStats.totalSubjects}</p>
            <p className="text-sm text-gray-600">Total Subjects</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-red-600">{departmentStats.totalResources.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Resources</p>
          </div>
        </div>

        <Tabs defaultValue="departments" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Departments Tab */}
          <TabsContent value="departments" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200">
              {/* Search and Filters */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search departments by name, code, or HOD..."
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
                    <option value="all">All Departments</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>

              {/* Departments Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDepartments.map((dept) => (
                    <div key={dept.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            {dept.code}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{dept.name}</h3>
                            <p className="text-sm text-gray-600">{dept.code}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{dept.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Students</span>
                          <span className="font-semibold text-blue-600">{dept.totalStudents.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Faculty</span>
                          <span className="font-semibold text-purple-600">{dept.totalFaculty}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Subjects</span>
                          <span className="font-semibold text-orange-600">{dept.totalSubjects}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Resources</span>
                          <span className="font-semibold text-green-600">{dept.totalResources}</span>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="mb-3">
                          <p className="text-sm font-medium text-gray-700">Head of Department</p>
                          <p className="text-sm text-gray-900">{dept.hodName}</p>
                          <p className="text-xs text-gray-500">{dept.hodEmail}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Created: {new Date(dept.createdAt).toLocaleDateString()}
                          </span>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Distribution</h3>
                <div className="space-y-3">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          {dept.code}
                        </div>
                        <span className="font-medium text-gray-900">{dept.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(dept.totalStudents / departmentStats.totalStudents) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-16 text-right">
                          {dept.totalStudents.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Distribution</h3>
                <div className="space-y-3">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          {dept.code}
                        </div>
                        <span className="font-medium text-gray-900">{dept.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${(dept.totalResources / departmentStats.totalResources) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-16 text-right">
                          {dept.totalResources}
                        </span>
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

export default DepartmentManagement;