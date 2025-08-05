import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import { 
  Bell, Plus, Send, Edit, Trash2, 
  Users, Mail, MessageSquare, Calendar, Clock,
  CheckCircle, AlertTriangle, Eye, Filter, Search
} from "lucide-react";

const NotificationManagement = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: "Semester Exam Form Deadline",
      message: "Reminder: Submit your semester exam form by December 15th",
      type: "deadline",
      status: "sent",
      recipients: 3456,
      sentAt: "2024-12-07 10:00 AM",
      openRate: 78.5,
      clickRate: 23.4
    },
    {
      id: 2,
      title: "New AI Tool Available",
      message: "Check out the new AKTU Project Helper tool",
      type: "ai_update",
      status: "scheduled",
      recipients: 5678,
      scheduledFor: "2024-12-08 09:00 AM",
      openRate: 0,
      clickRate: 0
    },
    {
      id: 3,
      title: "Achievement Unlocked",
      message: "Congratulations! You've earned the Study Streak Champion badge",
      type: "achievement",
      status: "draft",
      recipients: 0,
      createdAt: "2024-12-07 02:30 PM",
      openRate: 0,
      clickRate: 0
    }
  ];

  const notificationStats = {
    totalSent: 45623,
    totalRecipients: 15420,
    avgOpenRate: 72.3,
    avgClickRate: 18.7,
    scheduled: 12,
    drafts: 8
  };

  const templates = [
    {
      id: 1,
      name: "Deadline Reminder",
      type: "deadline",
      subject: "Important Deadline Approaching",
      usage: 234,
      lastUsed: "2 hours ago"
    },
    {
      id: 2,
      name: "Achievement Notification",
      type: "achievement",
      subject: "Achievement Unlocked!",
      usage: 156,
      lastUsed: "1 day ago"
    },
    {
      id: 3,
      name: "AI Tool Update",
      type: "ai_update",
      subject: "New AI Feature Available",
      usage: 89,
      lastUsed: "3 days ago"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "sent": return "bg-green-100 text-green-800";
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "draft": return "bg-gray-100 text-gray-800";
      case "failed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "deadline": return "bg-orange-100 text-orange-800";
      case "achievement": return "bg-purple-100 text-purple-800";
      case "ai_update": return "bg-blue-100 text-blue-800";
      case "general": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Notification Management</h1>
            <p className="text-sm text-gray-600">Manage notifications and alerts</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Create Notification
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{notificationStats.totalSent.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Sent</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{notificationStats.totalRecipients.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Recipients</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{notificationStats.avgOpenRate}%</p>
            <p className="text-sm text-gray-600">Open Rate</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{notificationStats.avgClickRate}%</p>
            <p className="text-sm text-gray-600">Click Rate</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">{notificationStats.scheduled}</p>
            <p className="text-sm text-gray-600">Scheduled</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-gray-600">{notificationStats.drafts}</p>
            <p className="text-sm text-gray-600">Drafts</p>
          </div>
        </div>

        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200">
              {/* Search and Filters */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search notifications..."
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
                    <option value="all">All Status</option>
                    <option value="sent">Sent</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              {/* Notifications List */}
              <div className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                          <Badge variant="secondary" className={getStatusColor(notification.status)}>
                            {notification.status === "sent" && <CheckCircle className="h-3 w-3 mr-1" />}
                            {notification.status === "scheduled" && <Clock className="h-3 w-3 mr-1" />}
                            {notification.status === "draft" && <Edit className="h-3 w-3 mr-1" />}
                            {notification.status}
                          </Badge>
                          <Badge variant="outline" className={getTypeColor(notification.type)}>
                            {notification.type.replace('_', ' ')}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{notification.message}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Recipients</p>
                            <p className="font-semibold text-gray-900">{notification.recipients.toLocaleString()}</p>
                          </div>
                          {notification.status === "sent" && (
                            <>
                              <div>
                                <p className="text-gray-500">Open Rate</p>
                                <p className="font-semibold text-green-600">{notification.openRate}%</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Click Rate</p>
                                <p className="font-semibold text-blue-600">{notification.clickRate}%</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Sent At</p>
                                <p className="font-semibold text-gray-900">{notification.sentAt}</p>
                              </div>
                            </>
                          )}
                          {notification.status === "scheduled" && (
                            <div>
                              <p className="text-gray-500">Scheduled For</p>
                              <p className="font-semibold text-blue-600">{notification.scheduledFor}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {notification.status === "scheduled" && (
                          <Button variant="outline" size="sm">
                            <Send className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Notification Templates</h3>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Template
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <div key={template.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">{template.name}</h4>
                      <Badge variant="outline" className={getTypeColor(template.type)}>
                        {template.type.replace('_', ' ')}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{template.subject}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Usage</span>
                        <span className="font-semibold text-gray-900">{template.usage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Last Used</span>
                        <span className="font-semibold text-gray-900">{template.lastUsed}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Performance</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Analytics charts would be rendered here</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default NotificationManagement;