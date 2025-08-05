import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import { 
  Brain, Search, Filter, Plus, Edit, Trash2, Eye, 
  Settings, TrendingUp, BarChart3, Activity, Power,
  MoreVertical, CheckCircle, AlertTriangle,
  Clock, Users, Zap, Target, Briefcase, Rocket,
  HelpCircle, Calendar, Code, BookOpen, PieChart,
  LineChart, Monitor, Cpu, Database, Server
} from "lucide-react";

const AIToolsControl = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mock AI tools data
  const aiTools = [
    {
      id: 1,
      name: "AKTU Syllabus Generator",
      slug: "aktu-syllabus",
      category: "aktu_specific",
      status: "active",
      usage: 15420,
      users: 3456,
      avgRating: 4.8,
      lastUsed: "2 minutes ago",
      cpuUsage: 45,
      memoryUsage: 67,
      responseTime: 1.2,
      successRate: 98.5,
      description: "AI-curated notes based on AKTU syllabus"
    },
    {
      id: 2,
      name: "AKTU Exam Predictor",
      slug: "aktu-exam-predictor",
      category: "aktu_specific",
      status: "active",
      usage: 12890,
      users: 2834,
      avgRating: 4.6,
      lastUsed: "5 minutes ago",
      cpuUsage: 38,
      memoryUsage: 52,
      responseTime: 0.9,
      successRate: 97.2,
      description: "Predict exam patterns and questions"
    },
    {
      id: 3,
      name: "GPA Improvement Advisor",
      slug: "aktu-gpa-advisor",
      category: "aktu_specific",
      status: "active",
      usage: 9876,
      users: 2156,
      avgRating: 4.7,
      lastUsed: "1 hour ago",
      cpuUsage: 32,
      memoryUsage: 48,
      responseTime: 1.5,
      successRate: 96.8,
      description: "Academic performance improvement"
    },
    {
      id: 4,
      name: "Lab Assistant",
      slug: "aktu-lab-assistant",
      category: "aktu_specific",
      status: "maintenance",
      usage: 8234,
      users: 1892,
      avgRating: 4.9,
      lastUsed: "2 hours ago",
      cpuUsage: 0,
      memoryUsage: 0,
      responseTime: 0,
      successRate: 0,
      description: "Lab file generation and debugging"
    },
    {
      id: 5,
      name: "Placement Prep AI",
      slug: "aktu-placement-prep",
      category: "aktu_specific",
      status: "active",
      usage: 6789,
      users: 1567,
      avgRating: 4.5,
      lastUsed: "30 minutes ago",
      cpuUsage: 28,
      memoryUsage: 41,
      responseTime: 2.1,
      successRate: 95.3,
      description: "Company-wise preparation materials"
    },
    {
      id: 6,
      name: "Smart Note Generator",
      slug: "note-generator",
      category: "general",
      status: "active",
      usage: 5432,
      users: 1234,
      avgRating: 4.4,
      lastUsed: "15 minutes ago",
      cpuUsage: 35,
      memoryUsage: 55,
      responseTime: 1.8,
      successRate: 94.7,
      description: "AI-powered note generation"
    }
  ];

  const toolStats = {
    totalTools: 12,
    activeTools: 9,
    maintenanceTools: 2,
    inactiveTools: 1,
    totalUsage: 58641,
    totalUsers: 12139,
    avgResponseTime: 1.4,
    systemHealth: 96.8
  };

  const usageAnalytics = {
    dailyUsage: [
      { day: "Mon", usage: 8234, efficiency: 96.2 },
      { day: "Tue", usage: 9456, efficiency: 97.1 },
      { day: "Wed", usage: 7892, efficiency: 95.8 },
      { day: "Thu", usage: 10234, efficiency: 98.3 },
      { day: "Fri", usage: 11567, efficiency: 97.9 },
      { day: "Sat", usage: 6789, efficiency: 94.5 },
      { day: "Sun", usage: 4569, efficiency: 93.2 }
    ],
    topTools: [
      { name: "Syllabus Generator", usage: 15420, percentage: 26.3 },
      { name: "Exam Predictor", usage: 12890, percentage: 22.0 },
      { name: "GPA Advisor", usage: 9876, percentage: 16.8 },
      { name: "Lab Assistant", usage: 8234, percentage: 14.0 },
      { name: "Others", usage: 12221, percentage: 20.9 }
    ]
  };

  const systemMetrics = [
    { name: "CPU Usage", value: 34, unit: "%", status: "good", icon: Cpu },
    { name: "Memory Usage", value: 67, unit: "%", status: "warning", icon: Database },
    { name: "Response Time", value: 1.4, unit: "s", status: "good", icon: Clock },
    { name: "Success Rate", value: 96.8, unit: "%", status: "excellent", icon: CheckCircle },
    { name: "Active Users", value: 2847, unit: "", status: "good", icon: Users },
    { name: "Requests/min", value: 234, unit: "", status: "good", icon: Activity }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "maintenance": return "bg-yellow-100 text-yellow-800";
      case "inactive": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getMetricColor = (status) => {
    switch (status) {
      case "excellent": return "text-green-600";
      case "good": return "text-blue-600";
      case "warning": return "text-yellow-600";
      case "critical": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getToolIcon = (slug) => {
    switch (slug) {
      case "aktu-syllabus": return BookOpen;
      case "aktu-exam-predictor": return TrendingUp;
      case "aktu-gpa-advisor": return Target;
      case "aktu-lab-assistant": return Code;
      case "aktu-placement-prep": return Briefcase;
      case "aktu-project-helper": return Rocket;
      case "aktu-query-bot": return HelpCircle;
      case "aktu-deadline-tracker": return Calendar;
      default: return Brain;
    }
  };

  const filteredTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" || tool.category === selectedFilter || tool.status === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Tools Control</h1>
              <p className="text-sm text-gray-600">Monitor and configure AI tools</p>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              System Healthy
            </Badge>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Deploy Tool
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{toolStats.totalTools}</p>
            <p className="text-sm text-gray-600">Total Tools</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{toolStats.activeTools}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{toolStats.maintenanceTools}</p>
            <p className="text-sm text-gray-600">Maintenance</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-red-600">{toolStats.inactiveTools}</p>
            <p className="text-sm text-gray-600">Inactive</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{toolStats.totalUsage.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Usage</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{toolStats.totalUsers.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Users</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">{toolStats.avgResponseTime}s</p>
            <p className="text-sm text-gray-600">Avg Response</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{toolStats.systemHealth}%</p>
            <p className="text-sm text-gray-600">Health</p>
          </div>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {systemMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <metric.icon className={`h-5 w-5 ${getMetricColor(metric.status)}`} />
                <Badge variant="outline" className={`text-xs ${
                  metric.status === 'excellent' ? 'border-green-500 text-green-700' :
                  metric.status === 'good' ? 'border-blue-500 text-blue-700' :
                  metric.status === 'warning' ? 'border-yellow-500 text-yellow-700' :
                  'border-red-500 text-red-700'
                }`}>
                  {metric.status}
                </Badge>
              </div>
              <p className={`text-2xl font-bold ${getMetricColor(metric.status)}`}>
                {metric.value}{metric.unit}
              </p>
              <p className="text-sm text-gray-600">{metric.name}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Tools List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200">
              {/* Search and Filters */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search AI tools..."
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
                    <option value="all">All Tools</option>
                    <option value="aktu_specific">AKTU Specific</option>
                    <option value="general">General</option>
                    <option value="active">Active</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Tools List */}
              <div className="divide-y divide-gray-200">
                {filteredTools.map((tool) => {
                  const ToolIcon = getToolIcon(tool.slug);
                  return (
                    <div key={tool.id} className="p-6 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <ToolIcon className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                              <Badge variant="secondary" className={getStatusColor(tool.status)}>
                                {tool.status === "active" && <Power className="h-3 w-3 mr-1" />}
                                {tool.status === "maintenance" && <Settings className="h-3 w-3 mr-1" />}
                                {tool.status === "inactive" && <AlertTriangle className="h-3 w-3 mr-1" />}
                                {tool.status}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {tool.category.replace('_', ' ')}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500">Usage</p>
                                <p className="font-semibold text-gray-900">{tool.usage.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Users</p>
                                <p className="font-semibold text-gray-900">{tool.users.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Rating</p>
                                <div className="flex items-center space-x-1">
                                  <span className="font-semibold text-gray-900">{tool.avgRating}</span>
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <span key={i} className={`text-xs ${i < Math.floor(tool.avgRating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                        ★
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <p className="text-gray-500">Last Used</p>
                                <p className="font-semibold text-gray-900">{tool.lastUsed}</p>
                              </div>
                            </div>

                            {tool.status === "active" && (
                              <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  <span className="text-gray-500">CPU: {tool.cpuUsage}%</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-gray-500">Memory: {tool.memoryUsage}%</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                  <span className="text-gray-500">Response: {tool.responseTime}s</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                  <span className="text-gray-500">Success: {tool.successRate}%</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <BarChart3 className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Analytics Sidebar */}
          <div className="space-y-6">
            {/* Usage Analytics */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Usage</h3>
              <div className="space-y-3">
                {usageAnalytics.dailyUsage.map((day, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{day.day}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${(day.usage / 12000) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">{day.usage.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Tools */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Tools</h3>
              <div className="space-y-3">
                {usageAnalytics.topTools.map((tool, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{tool.name}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${tool.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="text-sm font-semibold text-gray-900">{tool.usage.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{tool.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-green-600">96.8%</p>
                  <p className="text-sm text-gray-600">Overall Health</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>API Uptime</span>
                    <span className="font-semibold text-green-600">99.9%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Database Health</span>
                    <span className="font-semibold text-green-600">98.5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cache Hit Rate</span>
                    <span className="font-semibold text-blue-600">94.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Error Rate</span>
                    <span className="font-semibold text-yellow-600">0.8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Monitor className="h-4 w-4 mr-2" />
                  System Monitor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Server className="h-4 w-4 mr-2" />
                  Server Logs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Configuration
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="h-4 w-4 mr-2" />
                  Performance Metrics
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AIToolsControl;