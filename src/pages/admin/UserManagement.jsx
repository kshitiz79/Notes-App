import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import { 
  Users, Search, Filter, Plus, Edit, Trash2, Eye, 
  Shield, UserCheck, UserX, Mail, Phone, GraduationCap,
  Calendar, Activity, Award, Brain, Download,
  MoreVertical, Ban, CheckCircle, AlertTriangle, Clock
} from "lucide-react";

const UserManagement = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mock user data
  const users = [
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul.kumar@aktu.ac.in",
      enrollmentNo: "2100290120001",
      branch: "CSE",
      semester: 6,
      cgpa: 7.8,
      status: "active",
      joinDate: "2023-01-15",
      lastActive: "2 hours ago",
      totalDownloads: 234,
      aiToolsUsed: 12,
      achievements: 8,
      role: "student"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@aktu.ac.in",
      enrollmentNo: "2100290120002",
      branch: "ECE",
      semester: 4,
      cgpa: 8.2,
      status: "active",
      joinDate: "2023-02-20",
      lastActive: "1 day ago",
      totalDownloads: 156,
      aiToolsUsed: 8,
      achievements: 5,
      role: "student"
    },
    {
      id: 3,
      name: "Dr. Amit Singh",
      email: "amit.singh@aktu.ac.in",
      enrollmentNo: "FAC001",
      branch: "CSE",
      semester: null,
      cgpa: null,
      status: "active",
      joinDate: "2022-08-10",
      lastActive: "30 minutes ago",
      totalDownloads: 45,
      aiToolsUsed: 15,
      achievements: 12,
      role: "faculty"
    },
    {
      id: 4,
      name: "Ankit Verma",
      email: "ankit.verma@aktu.ac.in",
      enrollmentNo: "2100290120003",
      branch: "ME",
      semester: 8,
      cgpa: 6.9,
      status: "suspended",
      joinDate: "2023-01-25",
      lastActive: "1 week ago",
      totalDownloads: 89,
      aiToolsUsed: 3,
      achievements: 2,
      role: "student"
    },
    {
      id: 5,
      name: "Sneha Gupta",
      email: "sneha.gupta@aktu.ac.in",
      enrollmentNo: "2100290120004",
      branch: "IT",
      semester: 2,
      cgpa: 8.5,
      status: "pending",
      joinDate: "2024-12-01",
      lastActive: "5 minutes ago",
      totalDownloads: 12,
      aiToolsUsed: 2,
      achievements: 1,
      role: "student"
    }
  ];

  const userStats = {
    total: 15420,
    active: 14892,
    suspended: 234,
    pending: 294,
    faculty: 156,
    students: 15264
  };

  const recentRegistrations = [
    { name: "Rohit Sharma", branch: "CSE", time: "5 minutes ago" },
    { name: "Kavya Patel", branch: "ECE", time: "12 minutes ago" },
    { name: "Arjun Singh", branch: "ME", time: "25 minutes ago" },
    { name: "Neha Agarwal", branch: "IT", time: "1 hour ago" }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.enrollmentNo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" || user.status === selectedFilter || user.role === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "suspended": return "bg-red-100 text-red-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "faculty": return "bg-purple-100 text-purple-800";
      case "student": return "bg-blue-100 text-blue-800";
      case "admin": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <p className="text-sm text-gray-600">Manage users, roles, and permissions</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Users
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{userStats.total.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Users</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{userStats.active.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-red-600">{userStats.suspended}</p>
            <p className="text-sm text-gray-600">Suspended</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{userStats.pending}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{userStats.faculty}</p>
            <p className="text-sm text-gray-600">Faculty</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{userStats.students.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Students</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main User List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200">
              {/* Search and Filters */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users by name, email, or enrollment..."
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
                    <option value="all">All Users</option>
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                    <option value="pending">Pending</option>
                    <option value="student">Students</option>
                    <option value="faculty">Faculty</option>
                  </select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>

              {/* User Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        <input type="checkbox" className="rounded" />
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">User</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Academic Info</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Activity</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <input type="checkbox" className="rounded" />
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{user.name}</p>
                              <p className="text-sm text-gray-600">{user.email}</p>
                              <p className="text-xs text-gray-500">{user.enrollmentNo}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className={getRoleColor(user.role)}>
                                {user.role}
                              </Badge>
                              <Badge variant="outline">
                                {user.branch}
                              </Badge>
                            </div>
                            {user.semester && (
                              <p className="text-sm text-gray-600">
                                Semester {user.semester} • CGPA: {user.cgpa}
                              </p>
                            )}
                            <p className="text-xs text-gray-500">
                              Joined: {new Date(user.joinDate).toLocaleDateString()}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-2">
                            <Badge variant="secondary" className={getStatusColor(user.status)}>
                              {user.status === "active" && <CheckCircle className="h-3 w-3 mr-1" />}
                              {user.status === "suspended" && <Ban className="h-3 w-3 mr-1" />}
                              {user.status === "pending" && <Clock className="h-3 w-3 mr-1" />}
                              {user.status}
                            </Badge>
                            <p className="text-xs text-gray-500">
                              Last active: {user.lastActive}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center space-x-1">
                              <Download className="h-3 w-3 text-gray-400" />
                              <span>{user.totalDownloads} downloads</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Brain className="h-3 w-3 text-gray-400" />
                              <span>{user.aiToolsUsed} AI tools</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Award className="h-3 w-3 text-gray-400" />
                              <span>{user.achievements} achievements</span>
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
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing {filteredUsers.length} of {users.length} users
                </p>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-600 text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Registrations */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Registrations</h3>
              <div className="space-y-3">
                {recentRegistrations.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.branch}</p>
                    </div>
                    <p className="text-xs text-gray-500">{user.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Approve Pending Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Bulk Email
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export User Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Manage Permissions
                </Button>
              </div>
            </div>

            {/* User Analytics */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Analytics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Active Users</span>
                    <span>96.6%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '96.6%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>CSE Students</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>AI Tool Users</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserManagement;