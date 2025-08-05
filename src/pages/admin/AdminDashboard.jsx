import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import {
  Users, BookOpen, Brain, Settings, AlertTriangle, Award, Bell,
  FileText, Activity, BarChart3, UserCheck, Download, Eye, Edit, ArrowUp, CheckCircle
} from "lucide-react";

const AdminDashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");

  // Mock data for dashboard
  const dashboardStats = {
    totalUsers: 15420,
    activeUsers: 8934,
    totalResources: 2847,
    aiToolUsage: 45623,
    newUsersToday: 127,
    resourcesUploaded: 23,
    supportTickets: 8,
    systemHealth: 98.5
  };

  const recentActivity = [
    {
      type: "user_registration",
      message: "New user registered: Rahul Kumar (CSE)",
      time: "2 minutes ago",
      icon: UserCheck,
      color: "text-green-600"
    },
    {
      type: "resource_upload",
      message: "New resource uploaded: Data Structures Notes",
      time: "5 minutes ago",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      type: "ai_tool_usage",
      message: "High usage spike in AKTU Syllabus Generator",
      time: "10 minutes ago",
      icon: Brain,
      color: "text-purple-600"
    }
  ];

  const quickActions = [
    {
      title: "User Management",
      description: "Manage users, roles, and permissions",
      icon: Users,
      route: "/admin/users",
      color: "bg-blue-500"
    },
    {
      title: "Content Management",
      description: "Manage resources, subjects, and branches",
      icon: BookOpen,
      route: "/admin/content",
      color: "bg-green-500"
    },
    {
      title: "AI Tools Control",
      description: "Monitor and configure AI tools",
      icon: Brain,
      route: "/admin/ai-tools",
      color: "bg-purple-500"
    },
    {
      title: "Analytics & Reports",
      description: "View detailed analytics and reports files",
      icon: BarChart3,
      route: "/admin/analytics",
      color: "bg-orange-500"
    },
    {
      title: "System Settings",
      description: "Configure system settings and preferences",
      icon: Settings,
      route: "/admin/settings",
      color: "bg-gray-500"
    },
    {
      title: "Notifications",
      description: "Manage notifications and announcements",
      icon: Bell,
      route: "/admin/notifications",
      color: "bg-red-500"
    }
  ];

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-sm text-gray-600">Welcome to AKTU Admin Dashboard</p>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              System Healthy
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalUsers.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  +{dashboardStats.newUsersToday} today
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.activeUsers.toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {Math.round((dashboardStats.activeUsers / dashboardStats.totalUsers) * 100)}% of total
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Resources</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalResources.toLocaleString()}</p>
                <p className="text-sm text-blue-600 flex items-center mt-1">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  +{dashboardStats.resourcesUploaded} today
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">AI Tool Usage</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.aiToolUsage.toLocaleString()}</p>
                <p className="text-sm text-purple-600 flex items-center mt-1">
                  <Brain className="h-4 w-4 mr-1" />
                  High demand
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.route}>
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.color} bg-opacity-10`}>
                  <activity.icon className={`h-4 w-4 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;