import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import {
  BarChart3, Download, Calendar, Users,
  Brain, BookOpen, TrendingUp, PieChart, LineChart,
  Activity, Target, Award, Clock, Eye, Filter
} from "lucide-react";

const AnalyticsReports = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mock analytics data
  const analyticsData = {
    overview: {
      totalUsers: 15420,
      activeUsers: 8934,
      totalSessions: 45623,
      avgSessionDuration: "12m 34s",
      bounceRate: 23.4,
      conversionRate: 67.8
    },
    userGrowth: [
      { month: "Jan", users: 8234, active: 6789 },
      { month: "Feb", users: 9456, active: 7892 },
      { month: "Mar", users: 10789, active: 8456 },
      { month: "Apr", users: 12234, active: 9123 },
      { month: "May", users: 13567, active: 9876 },
      { month: "Jun", users: 15420, active: 8934 }
    ],
    contentPerformance: [
      { type: "Notes", downloads: 45623, views: 123456, rating: 4.7 },
      { type: "Previous Papers", downloads: 34567, views: 89234, rating: 4.5 },
      { type: "Lab Manuals", downloads: 23456, views: 67890, rating: 4.8 },
      { type: "Videos", downloads: 12345, views: 45678, rating: 4.6 }
    ]
  };

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
            <p className="text-sm text-gray-600">Detailed analytics and insights</p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">Last Year</option>
            </select>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.totalUsers.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Users</p>
          </div>
          {/* Add more stat cards here */}
        </div>

        {/* Main Analytics Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="ai-tools">AI Tools</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth Trend</h3>
              {/* Chart component would go here */}
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Chart visualization would be rendered here</p>
              </div>
            </div>
          </TabsContent>

          {/* Other tab contents would be added here */}
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AnalyticsReports;