import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { branches } from "@/data/resources";
import { Link } from "react-router-dom";
import { 
  User, Mail, GraduationCap, BookOpen, Download, Star, 
  Settings, Bell, Shield, Edit, Save, Camera, Award,
  TrendingUp, Calendar, FileText, Heart, Share2, Brain,
  Target, Calculator, Code, Zap, Briefcase, Rocket,
  HelpCircle, AlertTriangle, CheckCircle, Clock, BarChart3,
  MessageCircle, Plus, ArrowRight, Activity, Bookmark,
  Trophy, Flame, Users, Globe, Lock, Eye, Smartphone,
  PieChart, LineChart, BarChart, TrendingDown, MousePointer,
  Timer, BookMarked, Lightbulb, Cpu, Database, Network,
  Monitor, Headphones, Coffee, Moon, Sun, Wifi, Battery
} from "lucide-react";

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Rahul Kumar",
    email: "rahul.kumar@aktu.ac.in",
    enrollmentNo: "2100290120001",
    branch: "CSE",
    semester: "6",
    university: "AKTU (Dr. A.P.J. Abdul Kalam Technical University)",
    college: "ABES Engineering College",
    currentCGPA: "7.8",
    targetCGPA: "8.5",
    bio: "Computer Science student at AKTU passionate about AI and machine learning. Active user of AKTU AI tools for academic excellence.",
    joinDate: "2023-01-15",
    location: "Ghaziabad, UP",
    phone: "+91 9876543210",
    linkedIn: "linkedin.com/in/rahulkumar",
    github: "github.com/rahulkumar"
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  // Enhanced stats with AKTU-specific metrics
  const stats = [
    { icon: Brain, label: "AI Tools Used", value: "12", color: "text-blue-600", description: "AKTU AI features accessed" },
    { icon: Target, label: "Current CGPA", value: "7.8", color: "text-green-600", description: "Academic performance" },
    { icon: Download, label: "Resources Downloaded", value: "234", color: "text-purple-600", description: "Study materials accessed" },
    { icon: Award, label: "Achievements", value: "8", color: "text-orange-600", description: "Milestones unlocked" },
    { icon: Calendar, label: "Study Streak", value: "15", color: "text-red-600", description: "Days of continuous learning" },
    { icon: Users, label: "Study Groups", value: "3", color: "text-teal-600", description: "Active collaborations" }
  ];

  // AKTU AI Tools usage tracking
  const aiToolsUsage = [
    {
      tool: "AKTU Syllabus Generator",
      icon: BookOpen,
      lastUsed: "2 hours ago",
      usageCount: 15,
      route: "/ai-tools/aktu-syllabus",
      status: "active"
    },
    {
      tool: "GPA Improvement Advisor",
      icon: Target,
      lastUsed: "1 day ago",
      usageCount: 8,
      route: "/ai-tools/aktu-gpa-advisor",
      status: "active"
    },
    {
      tool: "Exam Predictor",
      icon: TrendingUp,
      lastUsed: "3 days ago",
      usageCount: 12,
      route: "/ai-tools/aktu-exam-predictor",
      status: "active"
    },
    {
      tool: "Lab Assistant",
      icon: Code,
      lastUsed: "5 days ago",
      usageCount: 22,
      route: "/ai-tools/aktu-lab-assistant",
      status: "active"
    },
    {
      tool: "Placement Prep",
      icon: Briefcase,
      lastUsed: "1 week ago",
      usageCount: 6,
      route: "/ai-tools/aktu-placement-prep",
      status: "inactive"
    },
    {
      tool: "Crash Course Generator",
      icon: Zap,
      lastUsed: "2 weeks ago",
      usageCount: 4,
      route: "/ai-tools/aktu-crash-course",
      status: "inactive"
    }
  ];

  // Academic progress tracking
  const academicProgress = {
    currentSemester: 6,
    completedSemesters: 5,
    totalSemesters: 8,
    cgpaHistory: [
      { semester: 1, cgpa: 7.2 },
      { semester: 2, cgpa: 7.5 },
      { semester: 3, cgpa: 7.8 },
      { semester: 4, cgpa: 7.6 },
      { semester: 5, cgpa: 7.9 },
      { semester: 6, cgpa: 7.8 }
    ],
    backlogStatus: {
      total: 1,
      cleared: 0,
      pending: 1,
      subjects: ["Computer Networks"]
    }
  };

  // Recent activity with AKTU context
  const recentActivity = [
    {
      type: "ai_tool",
      title: "Generated AKTU syllabus notes for Data Structures",
      description: "Used AI Syllabus Generator",
      date: "2 hours ago",
      icon: Brain,
      color: "text-blue-600"
    },
    {
      type: "gpa_check",
      title: "Checked GPA improvement roadmap",
      description: "Target CGPA: 8.5 by semester 8",
      date: "1 day ago",
      icon: Target,
      color: "text-green-600"
    },
    {
      type: "lab_file",
      title: "Generated lab file for Java Programming",
      description: "Experiment 5: Exception Handling",
      date: "2 days ago",
      icon: Code,
      color: "text-purple-600"
    },
    {
      type: "deadline",
      title: "Set reminder for exam form submission",
      description: "Due in 8 days",
      date: "3 days ago",
      icon: Calendar,
      color: "text-orange-600"
    },
    {
      type: "query",
      title: "Asked AKTU Query Bot about revaluation",
      description: "Got instant answer about process",
      date: "5 days ago",
      icon: HelpCircle,
      color: "text-teal-600"
    }
  ];

  // Enhanced achievements with AKTU focus
  const achievements = [
    {
      title: "AKTU AI Pioneer",
      description: "First 100 users to try all AKTU AI tools",
      icon: "🚀",
      earned: true,
      rarity: "rare",
      points: 500
    },
    {
      title: "GPA Improver",
      description: "Increased CGPA by 0.5+ points using AI advisor",
      icon: "📈",
      earned: true,
      rarity: "common",
      points: 200
    },
    {
      title: "Lab Master",
      description: "Generated 50+ lab files using AI assistant",
      icon: "⚗️",
      earned: true,
      rarity: "uncommon",
      points: 300
    },
    {
      title: "Placement Ready",
      description: "Completed placement prep with 90%+ mock score",
      icon: "💼",
      earned: false,
      rarity: "epic",
      points: 1000
    },
    {
      title: "Study Streak Champion",
      description: "30-day continuous learning streak",
      icon: "🔥",
      earned: false,
      rarity: "legendary",
      points: 1500
    },
    {
      title: "Knowledge Seeker",
      description: "Downloaded 500+ AKTU resources",
      icon: "📚",
      earned: true,
      rarity: "common",
      points: 150
    }
  ];

  // Upcoming deadlines and reminders
  const upcomingDeadlines = [
    {
      title: "Semester Exam Form",
      dueDate: "2024-12-15",
      daysLeft: 8,
      priority: "high",
      category: "exam"
    },
    {
      title: "Project Submission",
      dueDate: "2024-12-25",
      daysLeft: 18,
      priority: "high",
      category: "project"
    },
    {
      title: "Fee Payment",
      dueDate: "2024-12-30",
      daysLeft: 23,
      priority: "medium",
      category: "fee"
    }
  ];

  // AI Tools Analytics Data
  const aiToolsAnalytics = {
    weeklyUsage: [
      { day: "Mon", usage: 12, efficiency: 85 },
      { day: "Tue", usage: 18, efficiency: 92 },
      { day: "Wed", usage: 15, efficiency: 78 },
      { day: "Thu", usage: 22, efficiency: 95 },
      { day: "Fri", usage: 20, efficiency: 88 },
      { day: "Sat", usage: 8, efficiency: 70 },
      { day: "Sun", usage: 5, efficiency: 65 }
    ],
    monthlyTrends: [
      { month: "Aug", tools: 45, performance: 72 },
      { month: "Sep", tools: 68, performance: 78 },
      { month: "Oct", tools: 89, performance: 82 },
      { month: "Nov", tools: 112, performance: 85 },
      { month: "Dec", tools: 95, performance: 88 }
    ],
    toolDistribution: [
      { tool: "Syllabus Generator", usage: 25, color: "#3B82F6" },
      { tool: "Lab Assistant", usage: 22, color: "#10B981" },
      { tool: "GPA Advisor", usage: 18, color: "#F59E0B" },
      { tool: "Exam Predictor", usage: 15, color: "#EF4444" },
      { tool: "Placement Prep", usage: 12, color: "#8B5CF6" },
      { tool: "Others", usage: 8, color: "#6B7280" }
    ],
    learningPatterns: {
      peakHours: [
        { hour: "6-8 AM", intensity: 15 },
        { hour: "10-12 PM", intensity: 35 },
        { hour: "2-4 PM", intensity: 45 },
        { hour: "6-8 PM", intensity: 85 },
        { hour: "8-10 PM", intensity: 95 },
        { hour: "10-12 AM", intensity: 25 }
      ],
      subjectFocus: [
        { subject: "Data Structures", hours: 45, progress: 85 },
        { subject: "Operating Systems", hours: 38, progress: 72 },
        { subject: "Computer Networks", hours: 32, progress: 68 },
        { subject: "Database Systems", hours: 28, progress: 75 },
        { subject: "Software Engineering", hours: 25, progress: 80 }
      ]
    }
  };

  // Study Analytics
  const studyAnalytics = {
    dailyStudyTime: [
      { date: "Dec 1", hours: 4.5, efficiency: 78 },
      { date: "Dec 2", hours: 6.2, efficiency: 85 },
      { date: "Dec 3", hours: 3.8, efficiency: 72 },
      { date: "Dec 4", hours: 7.1, efficiency: 92 },
      { date: "Dec 5", hours: 5.5, efficiency: 88 },
      { date: "Dec 6", hours: 4.2, efficiency: 75 },
      { date: "Dec 7", hours: 6.8, efficiency: 90 }
    ],
    resourceUsage: {
      downloads: 234,
      bookmarks: 89,
      shares: 45,
      uploads: 12,
      totalTime: "156 hours"
    },
    performanceMetrics: {
      averageScore: 78.5,
      improvement: "+12%",
      consistency: 85,
      engagement: 92
    }
  };

  // Productivity Insights
  const productivityInsights = {
    focusTime: {
      today: 4.2,
      thisWeek: 28.5,
      thisMonth: 112.3,
      average: 4.1
    },
    distractionAnalysis: [
      { source: "Social Media", time: 45, impact: "High" },
      { source: "Gaming", time: 30, impact: "Medium" },
      { source: "YouTube", time: 25, impact: "Low" },
      { source: "Other Apps", time: 15, impact: "Low" }
    ],
    goalProgress: [
      { goal: "Complete Data Structures", progress: 85, target: 100 },
      { goal: "Improve CGPA to 8.5", progress: 60, target: 100 },
      { goal: "Clear Backlogs", progress: 40, target: 100 },
      { goal: "Placement Preparation", progress: 25, target: 100 }
    ]
  };

  // Learning Streaks and Habits
  const learningHabits = {
    currentStreak: 15,
    longestStreak: 42,
    totalDays: 156,
    weeklyPattern: [
      { day: "Mon", active: true, hours: 5.2 },
      { day: "Tue", active: true, hours: 6.1 },
      { day: "Wed", active: true, hours: 4.8 },
      { day: "Thu", active: true, hours: 7.2 },
      { day: "Fri", active: true, hours: 5.9 },
      { day: "Sat", active: false, hours: 2.1 },
      { day: "Sun", active: false, hours: 1.5 }
    ],
    studyMilestones: [
      { milestone: "First AI Tool Used", date: "2024-01-15", achieved: true },
      { milestone: "100 Hours Studied", date: "2024-03-20", achieved: true },
      { milestone: "CGPA Above 7.5", date: "2024-05-15", achieved: true },
      { milestone: "50 Lab Files Generated", date: "2024-08-10", achieved: true },
      { milestone: "Placement Ready", date: "2024-12-31", achieved: false }
    ]
  };

  // Simple Chart Components
  const SimpleBarChart = ({ data, height = 200, color = "#3B82F6" }) => {
    const maxValue = Math.max(...data.map(d => d.value || d.usage || d.hours || d.intensity));
    
    return (
      <div className="flex items-end justify-between" style={{ height }}>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 mx-1">
            <div 
              className="w-full rounded-t-md transition-all duration-500 hover:opacity-80"
              style={{ 
                height: `${((item.value || item.usage || item.hours || item.intensity) / maxValue) * (height - 40)}px`,
                backgroundColor: item.color || color,
                minHeight: '4px'
              }}
            ></div>
            <span className="text-xs mt-2 text-center">{item.label || item.day || item.month || item.hour || item.subject}</span>
          </div>
        ))}
      </div>
    );
  };

  const SimpleLineChart = ({ data, height = 200, color = "#10B981" }) => {
    const maxValue = Math.max(...data.map(d => d.value || d.cgpa || d.hours || d.efficiency));
    const minValue = Math.min(...data.map(d => d.value || d.cgpa || d.hours || d.efficiency));
    const range = maxValue - minValue;
    
    return (
      <div className="relative" style={{ height }}>
        <svg width="100%" height={height} className="overflow-visible">
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={data.map((item, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = 100 - (((item.value || item.cgpa || item.hours || item.efficiency) - minValue) / range) * 80;
              return `${x}%,${y}%`;
            }).join(' ')}
          />
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - (((item.value || item.cgpa || item.hours || item.efficiency) - minValue) / range) * 80;
            return (
              <circle
                key={index}
                cx={`${x}%`}
                cy={`${y}%`}
                r="4"
                fill={color}
                className="hover:r-6 transition-all duration-200"
              />
            );
          })}
        </svg>
        <div className="flex justify-between mt-2">
          {data.map((item, index) => (
            <span key={index} className="text-xs text-muted-foreground">
              {item.label || item.semester || item.date || item.month}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const SimplePieChart = ({ data, size = 200 }) => {
    const total = data.reduce((sum, item) => sum + item.usage, 0);
    let currentAngle = 0;
    
    return (
      <div className="flex items-center">
        <svg width={size} height={size} className="transform -rotate-90">
          {data.map((item, index) => {
            const percentage = (item.usage / total) * 100;
            const angle = (percentage / 100) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            
            const x1 = size/2 + (size/2 - 10) * Math.cos((startAngle * Math.PI) / 180);
            const y1 = size/2 + (size/2 - 10) * Math.sin((startAngle * Math.PI) / 180);
            const x2 = size/2 + (size/2 - 10) * Math.cos((endAngle * Math.PI) / 180);
            const y2 = size/2 + (size/2 - 10) * Math.sin((endAngle * Math.PI) / 180);
            
            const largeArcFlag = angle > 180 ? 1 : 0;
            
            const pathData = [
              `M ${size/2} ${size/2}`,
              `L ${x1} ${y1}`,
              `A ${size/2 - 10} ${size/2 - 10} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z'
            ].join(' ');
            
            currentAngle += angle;
            
            return (
              <path
                key={index}
                d={pathData}
                fill={item.color}
                className="hover:opacity-80 transition-opacity duration-200"
              />
            );
          })}
        </svg>
        <div className="ml-6 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm">{item.tool}: {item.usage}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "common": return "border-gray-300 bg-gray-50";
      case "uncommon": return "border-green-300 bg-green-50";
      case "rare": return "border-blue-300 bg-blue-50";
      case "epic": return "border-purple-300 bg-purple-50";
      case "legendary": return "border-yellow-300 bg-yellow-50";
      default: return "border-gray-300 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Profile Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                
                {/* Enhanced Profile Picture */}
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md">
                    <Camera className="h-4 w-4 text-gray-600" />
                  </button>
                  {/* Online status indicator */}
                  <div className="absolute top-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>

                {/* Enhanced Profile Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{profileData.name}</h1>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                        <span className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          {profileData.email}
                        </span>
                        <span className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          {profileData.branch} - Semester {profileData.semester}
                        </span>
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {profileData.enrollmentNo}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>📍 {profileData.location}</span>
                        <span>•</span>
                        <span>🏛️ {profileData.college}</span>
                      </div>
                    </div>
                    <Button 
                      variant={isEditing ? "academic" : "outline"}
                      onClick={isEditing ? handleSave : () => setIsEditing(true)}
                    >
                      {isEditing ? (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </>
                      ) : (
                        <>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Profile
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Enhanced Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      <Award className="h-3 w-3 mr-1" />
                      {branches[profileData.branch]?.name}
                    </Badge>
                    <Badge variant="outline" className="border-green-200 text-green-800">
                      <Target className="h-3 w-3 mr-1" />
                      CGPA: {profileData.currentCGPA}
                    </Badge>
                    <Badge variant="outline" className="border-orange-200 text-orange-800">
                      <Calendar className="h-3 w-3 mr-1" />
                      Joined {new Date(profileData.joinDate).toLocaleDateString()}
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      <Brain className="h-3 w-3 mr-1" />
                      AI Power User
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {profileData.bio}
                  </p>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-2">
                    <Link to="/ai-tools/aktu-gpa-advisor">
                      <Button variant="outline" size="sm">
                        <Target className="h-4 w-4 mr-2" />
                        Check GPA Progress
                      </Button>
                    </Link>
                    <Link to="/ai-tools/aktu-deadline-tracker">
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        View Deadlines
                      </Button>
                    </Link>
                    <Link to="/ai-tools/aktu-query-bot">
                      <Button variant="outline" size="sm">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Ask AKTU Bot
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 pt-8 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className={`h-6 w-6 ${stat.color} mr-2`} />
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <div className="text-sm font-medium mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Profile Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-white border border-gray-200 shadow-sm">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="ai-tools" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                AI Tools
              </TabsTrigger>
              <TabsTrigger value="study-insights" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                Study Insights
              </TabsTrigger>
              <TabsTrigger value="academic" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Academic
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6 mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${activity.color} bg-opacity-10`}>
                          <activity.icon className={`h-5 w-5 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                          <span className="text-xs text-muted-foreground">{activity.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Deadlines */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Upcoming Deadlines
                  </h3>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className={`p-4 rounded-lg border-l-4 ${
                        deadline.priority === 'high' ? 'border-red-500 bg-red-50' :
                        deadline.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                        'border-green-500 bg-green-50'
                      }`}>
                        <h4 className="font-medium mb-1">{deadline.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Due: {new Date(deadline.dueDate).toLocaleDateString()}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {deadline.daysLeft} days left
                          </Badge>
                          <Badge variant="secondary" className={`text-xs ${
                            deadline.priority === 'high' ? 'bg-red-100 text-red-800' :
                            deadline.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {deadline.priority}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/ai-tools/aktu-deadline-tracker">
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      View All Deadlines
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6 mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* AI Tools Usage Analytics */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Brain className="h-5 w-5 mr-2" />
                    AI Tools Usage Analytics
                  </h3>
                  
                  {/* Weekly Usage Chart */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 flex items-center">
                      <BarChart className="h-4 w-4 mr-2" />
                      Weekly Usage Pattern
                    </h4>
                    <SimpleBarChart 
                      data={aiToolsAnalytics.weeklyUsage.map(d => ({ ...d, value: d.usage, label: d.day }))} 
                      color="#3B82F6"
                    />
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">
                          {aiToolsAnalytics.weeklyUsage.reduce((sum, d) => sum + d.usage, 0)}
                        </p>
                        <p className="text-sm text-muted-foreground">Total Uses</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">
                          {Math.round(aiToolsAnalytics.weeklyUsage.reduce((sum, d) => sum + d.efficiency, 0) / aiToolsAnalytics.weeklyUsage.length)}%
                        </p>
                        <p className="text-sm text-muted-foreground">Avg Efficiency</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-2xl font-bold text-purple-600">
                          {Math.max(...aiToolsAnalytics.weeklyUsage.map(d => d.usage))}
                        </p>
                        <p className="text-sm text-muted-foreground">Peak Day</p>
                      </div>
                    </div>
                  </div>

                  {/* Tool Distribution */}
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center">
                      <PieChart className="h-4 w-4 mr-2" />
                      Tool Usage Distribution
                    </h4>
                    <SimplePieChart data={aiToolsAnalytics.toolDistribution} size={180} />
                  </div>
                </div>

                {/* Study Performance Analytics */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Study Performance Analytics
                  </h3>
                  
                  {/* Daily Study Time */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 flex items-center">
                      <LineChart className="h-4 w-4 mr-2" />
                      Daily Study Time (Last 7 Days)
                    </h4>
                    <SimpleLineChart 
                      data={studyAnalytics.dailyStudyTime.map(d => ({ ...d, value: d.hours, label: d.date }))} 
                      color="#10B981"
                    />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="p-3 bg-green-50 rounded-lg text-center">
                        <p className="text-xl font-bold text-green-600">
                          {(studyAnalytics.dailyStudyTime.reduce((sum, d) => sum + d.hours, 0) / studyAnalytics.dailyStudyTime.length).toFixed(1)}h
                        </p>
                        <p className="text-sm text-muted-foreground">Daily Average</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg text-center">
                        <p className="text-xl font-bold text-blue-600">
                          {Math.round(studyAnalytics.dailyStudyTime.reduce((sum, d) => sum + d.efficiency, 0) / studyAnalytics.dailyStudyTime.length)}%
                        </p>
                        <p className="text-sm text-muted-foreground">Efficiency</p>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div>
                    <h4 className="font-semibold mb-4">Performance Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">Average Score</span>
                        <div className="flex items-center">
                          <span className="font-bold mr-2">{studyAnalytics.performanceMetrics.averageScore}%</span>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {studyAnalytics.performanceMetrics.improvement}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">Consistency</span>
                        <div className="flex items-center">
                          <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${studyAnalytics.performanceMetrics.consistency}%` }}
                            ></div>
                          </div>
                          <span className="font-bold">{studyAnalytics.performanceMetrics.consistency}%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">Engagement</span>
                        <div className="flex items-center">
                          <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${studyAnalytics.performanceMetrics.engagement}%` }}
                            ></div>
                          </div>
                          <span className="font-bold">{studyAnalytics.performanceMetrics.engagement}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Trends */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Monthly Learning Trends
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">AI Tools Usage Growth</h4>
                    <SimpleLineChart 
                      data={aiToolsAnalytics.monthlyTrends.map(d => ({ ...d, value: d.tools, label: d.month }))} 
                      color="#8B5CF6"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Academic Performance Trend</h4>
                    <SimpleLineChart 
                      data={aiToolsAnalytics.monthlyTrends.map(d => ({ ...d, value: d.performance, label: d.month }))} 
                      color="#F59E0B"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* AI Tools Tab */}
            <TabsContent value="ai-tools" className="space-y-6 mt-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Brain className="h-5 w-5 mr-2" />
                  AKTU AI Tools Usage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aiToolsUsage.map((tool, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                            <tool.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{tool.tool}</h4>
                            <p className="text-sm text-muted-foreground">Used {tool.usageCount} times</p>
                          </div>
                        </div>
                        <Badge variant={tool.status === 'active' ? 'secondary' : 'outline'} className={
                          tool.status === 'active' ? 'bg-green-100 text-green-800' : ''
                        }>
                          {tool.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Last used: {tool.lastUsed}</span>
                        <Link to={tool.route}>
                          <Button variant="outline" size="sm">
                            Open Tool
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Study Insights Tab */}
            <TabsContent value="study-insights" className="space-y-6 mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Learning Patterns */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Learning Patterns & Habits
                  </h3>
                  
                  {/* Peak Learning Hours */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 flex items-center">
                      <Sun className="h-4 w-4 mr-2" />
                      Peak Learning Hours
                    </h4>
                    <SimpleBarChart 
                      data={aiToolsAnalytics.learningPatterns.peakHours.map(d => ({ ...d, value: d.intensity, label: d.hour }))} 
                      color="#F59E0B"
                      height={150}
                    />
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Peak Performance:</strong> 8-10 PM (95% intensity)
                      </p>
                      <p className="text-sm text-yellow-700 mt-1">
                        Consider scheduling important study sessions during this time for maximum efficiency.
                      </p>
                    </div>
                  </div>

                  {/* Subject Focus Distribution */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Subject Focus Time
                    </h4>
                    <div className="space-y-3">
                      {aiToolsAnalytics.learningPatterns.subjectFocus.map((subject, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{subject.subject}</span>
                              <span className="text-sm text-muted-foreground">{subject.hours}h</span>
                            </div>
                            <div className="flex items-center">
                              <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                                  style={{ width: `${subject.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{subject.progress}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weekly Study Pattern */}
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Weekly Study Pattern
                    </h4>
                    <div className="grid grid-cols-7 gap-2">
                      {learningHabits.weeklyPattern.map((day, index) => (
                        <div key={index} className="text-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                            day.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {day.active ? <CheckCircle className="h-6 w-6" /> : <Clock className="h-6 w-6" />}
                          </div>
                          <p className="text-xs font-medium">{day.day}</p>
                          <p className="text-xs text-muted-foreground">{day.hours}h</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Productivity Insights */}
                <div className="space-y-6">
                  
                  {/* Focus Time Stats */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Timer className="h-5 w-5 mr-2" />
                      Focus Time
                    </h3>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600">{productivityInsights.focusTime.today}h</p>
                        <p className="text-sm text-muted-foreground">Today</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="text-lg font-bold text-green-600">{productivityInsights.focusTime.thisWeek}h</p>
                          <p className="text-xs text-muted-foreground">This Week</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <p className="text-lg font-bold text-purple-600">{productivityInsights.focusTime.thisMonth}h</p>
                          <p className="text-xs text-muted-foreground">This Month</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Daily Average</span>
                        <span className="font-bold">{productivityInsights.focusTime.average}h</span>
                      </div>
                    </div>
                  </div>

                  {/* Learning Streaks */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Flame className="h-5 w-5 mr-2" />
                      Learning Streaks
                    </h3>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="flex items-center justify-center mb-2">
                          <Flame className="h-8 w-8 text-orange-500" />
                        </div>
                        <p className="text-2xl font-bold text-orange-600">{learningHabits.currentStreak}</p>
                        <p className="text-sm text-muted-foreground">Current Streak</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <p className="text-lg font-bold text-yellow-600">{learningHabits.longestStreak}</p>
                          <p className="text-xs text-muted-foreground">Longest</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-lg font-bold text-blue-600">{learningHabits.totalDays}</p>
                          <p className="text-xs text-muted-foreground">Total Days</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Goal Progress */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Goal Progress
                    </h3>
                    <div className="space-y-3">
                      {productivityInsights.goalProgress.map((goal, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{goal.goal}</span>
                            <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${
                                goal.progress >= 80 ? 'bg-green-600' :
                                goal.progress >= 50 ? 'bg-yellow-600' :
                                'bg-red-600'
                              }`}
                              style={{ width: `${goal.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Distraction Analysis */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MousePointer className="h-5 w-5 mr-2" />
                  Distraction Analysis & Recommendations
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Top Distractions</h4>
                    <div className="space-y-3">
                      {productivityInsights.distractionAnalysis.map((distraction, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">{distraction.source}</p>
                            <p className="text-sm text-muted-foreground">{distraction.time} min/day</p>
                          </div>
                          <Badge variant={
                            distraction.impact === 'High' ? 'destructive' :
                            distraction.impact === 'Medium' ? 'secondary' : 'outline'
                          }>
                            {distraction.impact} Impact
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Productivity Recommendations</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center mb-2">
                          <Lightbulb className="h-4 w-4 text-green-600 mr-2" />
                          <span className="font-medium text-green-800">Focus Tip</span>
                        </div>
                        <p className="text-sm text-green-700">
                          Use the Pomodoro technique during your peak hours (8-10 PM) for maximum efficiency.
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center mb-2">
                          <Smartphone className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="font-medium text-blue-800">Digital Wellness</span>
                        </div>
                        <p className="text-sm text-blue-700">
                          Consider using app blockers during study sessions to reduce social media distractions.
                        </p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-center mb-2">
                          <Coffee className="h-4 w-4 text-purple-600 mr-2" />
                          <span className="font-medium text-purple-800">Break Strategy</span>
                        </div>
                        <p className="text-sm text-purple-700">
                          Take 5-minute breaks every 25 minutes to maintain high concentration levels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Academic Tab */}
            <TabsContent value="academic" className="space-y-6 mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* CGPA Progress */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    CGPA Progress
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-semibold">Current CGPA</p>
                        <p className="text-2xl font-bold text-blue-600">{profileData.currentCGPA}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Target CGPA</p>
                        <p className="text-2xl font-bold text-green-600">{profileData.targetCGPA}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="font-semibold">Semester-wise CGPA</p>
                      {academicProgress.cgpaHistory.map((sem, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span>Semester {sem.semester}</span>
                          <Badge variant="outline">{sem.cgpa}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to="/ai-tools/aktu-gpa-advisor">
                    <Button variant="academic" className="w-full mt-4">
                      <Target className="h-4 w-4 mr-2" />
                      Get GPA Improvement Plan
                    </Button>
                  </Link>
                </div>

                {/* Backlog Status */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Backlog Status
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-red-50 rounded-lg">
                        <p className="text-2xl font-bold text-red-600">{academicProgress.backlogStatus.total}</p>
                        <p className="text-sm text-muted-foreground">Total</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">{academicProgress.backlogStatus.cleared}</p>
                        <p className="text-sm text-muted-foreground">Cleared</p>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <p className="text-2xl font-bold text-yellow-600">{academicProgress.backlogStatus.pending}</p>
                        <p className="text-sm text-muted-foreground">Pending</p>
                      </div>
                    </div>
                    
                    {academicProgress.backlogStatus.subjects.length > 0 && (
                      <div>
                        <p className="font-semibold mb-2">Pending Subjects:</p>
                        {academicProgress.backlogStatus.subjects.map((subject, index) => (
                          <Badge key={index} variant="secondary" className="bg-red-100 text-red-800 mr-2">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link to="/ai-tools/aktu-gpa-advisor">
                    <Button variant="outline" className="w-full mt-4">
                      <Target className="h-4 w-4 mr-2" />
                      Get Backlog Clearance Plan
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* Enhanced Achievements Tab */}
            <TabsContent value="achievements" className="space-y-6 mt-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    Your Achievements
                  </h3>
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      <Star className="h-3 w-3 mr-1" />
                      {achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0)} Points
                    </Badge>
                    <Badge variant="outline">
                      {achievements.filter(a => a.earned).length}/{achievements.length} Unlocked
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                        achievement.earned 
                          ? `${getRarityColor(achievement.rarity)} shadow-md` 
                          : 'border-gray-200 bg-gray-50 opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl">{achievement.icon}</span>
                        <div className="text-right">
                          <Badge variant="outline" className={`text-xs mb-1 ${
                            achievement.rarity === 'legendary' ? 'border-yellow-400 text-yellow-700' :
                            achievement.rarity === 'epic' ? 'border-purple-400 text-purple-700' :
                            achievement.rarity === 'rare' ? 'border-blue-400 text-blue-700' :
                            achievement.rarity === 'uncommon' ? 'border-green-400 text-green-700' :
                            'border-gray-400 text-gray-700'
                          }`}>
                            {achievement.rarity}
                          </Badge>
                          <p className="text-sm font-bold">{achievement.points} pts</p>
                        </div>
                      </div>
                      <h4 className="font-bold mb-2">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                      {achievement.earned ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Earned
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          In Progress
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Enhanced Settings Tab */}
            <TabsContent value="settings" className="space-y-6 mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Personal Information */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information
                  </h3>
                  
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Full Name</label>
                          <Input
                            value={profileData.name}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email</label>
                          <Input
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone</label>
                          <Input
                            value={profileData.phone}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Location</label>
                          <Input
                            value={profileData.location}
                            onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Bio</label>
                        <textarea
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          rows="4"
                          value={profileData.bio}
                          onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                          <p className="text-lg">{profileData.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Email</label>
                          <p className="text-lg">{profileData.email}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Phone</label>
                          <p className="text-lg">{profileData.phone}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Location</label>
                          <p className="text-lg">{profileData.location}</p>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Bio</label>
                        <p className="text-lg leading-relaxed">{profileData.bio}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Privacy & Security */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Privacy & Security
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Eye className="h-5 w-5 mr-3 text-gray-600" />
                        <div>
                          <p className="font-medium">Profile Visibility</p>
                          <p className="text-sm text-muted-foreground">Control who can see your profile</p>
                        </div>
                      </div>
                      <select className="px-3 py-2 border border-gray-300 rounded-md">
                        <option>Public</option>
                        <option>AKTU Students Only</option>
                        <option>Private</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Activity className="h-5 w-5 mr-3 text-gray-600" />
                        <div>
                          <p className="font-medium">Activity Tracking</p>
                          <p className="text-sm text-muted-foreground">Allow tracking of your study activity</p>
                        </div>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Brain className="h-5 w-5 mr-3 text-gray-600" />
                        <div>
                          <p className="font-medium">AI Data Usage</p>
                          <p className="text-sm text-muted-foreground">Allow AI tools to learn from your usage</p>
                        </div>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Lock className="h-5 w-5 mr-3 text-gray-600" />
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Enhanced Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6 mt-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notification Preferences
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "AKTU Deadlines",
                      description: "Get notified about exam forms, fee payments, and important deadlines",
                      enabled: true,
                      icon: Calendar
                    },
                    {
                      title: "AI Tool Updates",
                      description: "New features and improvements to AKTU AI tools",
                      enabled: true,
                      icon: Brain
                    },
                    {
                      title: "GPA Alerts",
                      description: "Notifications about your academic progress and improvement suggestions",
                      enabled: true,
                      icon: Target
                    },
                    {
                      title: "Study Reminders",
                      description: "Daily study reminders and streak notifications",
                      enabled: false,
                      icon: BookOpen
                    },
                    {
                      title: "Placement Updates",
                      description: "Job opportunities and placement preparation reminders",
                      enabled: true,
                      icon: Briefcase
                    },
                    {
                      title: "Community Activity",
                      description: "Updates about discussions and activities in your study groups",
                      enabled: false,
                      icon: Users
                    }
                  ].map((notification, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <notification.icon className="h-5 w-5 mr-3 text-gray-600" />
                        <div>
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                        </div>
                      </div>
                      <input 
                        type="checkbox" 
                        defaultChecked={notification.enabled} 
                        className="rounded"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold mb-4 flex items-center">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Notification Methods
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        <span className="text-sm">Email</span>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Bell className="h-4 w-4 mr-2" />
                        <span className="text-sm">Push</span>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm">SMS</span>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;