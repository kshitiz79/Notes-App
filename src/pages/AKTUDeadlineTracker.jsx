import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar, ArrowLeft, Bell, Clock, AlertTriangle,
  FileText, DollarSign, Briefcase, GraduationCap,
  CheckCircle, Plus, Settings, Filter
} from "lucide-react";

const AKTUDeadlineTracker = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const deadlines = [
    {
      id: 1,
      title: "Semester Exam Form Submission",
      description: "Submit examination form for odd semester 2024",
      dueDate: "2024-12-15",
      category: "exam",
      priority: "high",
      status: "upcoming",
      daysLeft: 8,
      requirements: ["Enrollment Number", "Fee Payment", "Subject Selection"],
      fee: "₹800",
      link: "https://aktu.ac.in/exam-form"
    },
    {
      id: 2,
      title: "Scholarship Application Deadline",
      description: "UP State Scholarship application for academic year 2024-25",
      dueDate: "2024-12-20",
      category: "scholarship",
      priority: "medium",
      status: "upcoming",
      daysLeft: 13,
      requirements: ["Income Certificate", "Caste Certificate", "Bank Details"],
      fee: "Free",
      link: "https://scholarship.up.gov.in"
    },
    {
      id: 3,
      title: "Project Submission",
      description: "Final year major project submission deadline",
      dueDate: "2024-12-25",
      category: "project",
      priority: "high",
      status: "upcoming",
      daysLeft: 18,
      requirements: ["Project Report", "Source Code", "Demo Video"],
      fee: "₹500",
      link: "#"
    },
    {
      id: 4,
      title: "Internship Report Submission",
      description: "Summer internship report submission for 6th semester",
      dueDate: "2024-12-10",
      category: "internship",
      priority: "medium",
      status: "due_soon",
      daysLeft: 3,
      requirements: ["Internship Certificate", "Report (Min 20 pages)", "Supervisor Signature"],
      fee: "Free",
      link: "#"
    },
    {
      id: 5,
      title: "Fee Payment - Winter Session",
      description: "Semester fee payment for winter session 2024",
      dueDate: "2024-12-08",
      category: "fee",
      priority: "high",
      status: "overdue",
      daysLeft: -1,
      requirements: ["Fee Challan", "Previous Semester Marksheet"],
      fee: "₹45,000",
      link: "#"
    },
    {
      id: 6,
      title: "Revaluation Application",
      description: "Apply for revaluation of semester exam results",
      dueDate: "2024-12-30",
      category: "exam",
      priority: "low",
      status: "upcoming",
      daysLeft: 23,
      requirements: ["Original Marksheet", "Revaluation Fee"],
      fee: "₹500 per subject",
      link: "#"
    }
  ];

  const categories = [
    { id: "all", label: "All Deadlines", icon: Calendar, count: deadlines.length },
    { id: "exam", label: "Exams", icon: FileText, count: deadlines.filter(d => d.category === "exam").length },
    { id: "fee", label: "Fee Payments", icon: DollarSign, count: deadlines.filter(d => d.category === "fee").length },
    { id: "project", label: "Projects", icon: GraduationCap, count: deadlines.filter(d => d.category === "project").length },
    { id: "scholarship", label: "Scholarships", icon: Briefcase, count: deadlines.filter(d => d.category === "scholarship").length },
    { id: "internship", label: "Internships", icon: Briefcase, count: deadlines.filter(d => d.category === "internship").length }
  ];

  const upcomingReminders = [
    {
      title: "Exam Form Due Tomorrow",
      message: "Don't forget to submit your semester exam form by tomorrow!",
      time: "2 hours ago",
      type: "urgent"
    },
    {
      title: "Fee Payment Reminder",
      message: "Your semester fee payment is overdue. Please pay immediately to avoid penalties.",
      time: "1 day ago",
      type: "warning"
    },
    {
      title: "Scholarship Deadline Approaching",
      message: "Only 13 days left to apply for UP State Scholarship.",
      time: "3 hours ago",
      type: "info"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200";
      case "due_soon":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredDeadlines = selectedFilter === "all" 
    ? deadlines 
    : deadlines.filter(d => d.category === selectedFilter);

  const sortedDeadlines = filteredDeadlines.sort((a, b) => {
    if (a.status === "overdue" && b.status !== "overdue") return -1;
    if (b.status === "overdue" && a.status !== "overdue") return 1;
    if (a.status === "due_soon" && b.status === "upcoming") return -1;
    if (b.status === "due_soon" && a.status === "upcoming") return 1;
    return a.daysLeft - b.daysLeft;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-orange-50 via-white to-red-50 border-b border-gray-200">
        <div className="container mx-auto">
          <div className={`transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center mb-6">
              <Button 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="mr-4 hover:bg-white/50 backdrop-blur-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to AI Tools
              </Button>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                <Calendar className="h-3 w-3 mr-1" />
                AKTU Deadline Tracker
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                AKTU Deadline Tracker
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Never miss important AKTU deadlines! Smart reminders for exam registration, project submissions, 
                fee payments, and internship deadlines with automated notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Categories</h3>
                  <Button variant="ghost" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedFilter(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                        selectedFilter === category.id
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center">
                        <category.icon className="h-4 w-4 mr-3" />
                        <span className="text-sm font-medium">{category.label}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Deadline
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Notification Settings
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Export Calendar
                  </Button>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  Notifications
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      checked={notifications}
                      onChange={(e) => setNotifications(e.target.checked)}
                      className="rounded" 
                    />
                    <span className="text-sm">Email Reminders</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">SMS Alerts</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Push Notifications</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="deadlines" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="deadlines" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Deadlines
                  </TabsTrigger>
                  <TabsTrigger value="reminders" className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    Reminders
                  </TabsTrigger>
                </TabsList>

                {/* Deadlines Tab */}
                <TabsContent value="deadlines" className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold flex items-center">
                        <Calendar className="h-6 w-6 mr-2 text-primary" />
                        Upcoming Deadlines
                      </h2>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-red-100 text-red-800">
                          {deadlines.filter(d => d.status === "overdue").length} Overdue
                        </Badge>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          {deadlines.filter(d => d.status === "due_soon").length} Due Soon
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {sortedDeadlines.map((deadline) => (
                        <div
                          key={deadline.id}
                          className={`border rounded-lg p-6 hover:shadow-md transition-shadow ${
                            deadline.status === "overdue" ? "border-red-200 bg-red-50" :
                            deadline.status === "due_soon" ? "border-yellow-200 bg-yellow-50" :
                            "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <div className={`w-3 h-3 rounded-full ${getPriorityColor(deadline.priority)}`}></div>
                                <h3 className="font-bold text-lg">{deadline.title}</h3>
                                <Badge variant="secondary" className={getStatusColor(deadline.status)}>
                                  {deadline.status.replace("_", " ").toUpperCase()}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground mb-3">{deadline.description}</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <strong>Due Date:</strong> {new Date(deadline.dueDate).toLocaleDateString()}
                                </div>
                                <div>
                                  <strong>Fee:</strong> {deadline.fee}
                                </div>
                                <div className="md:col-span-2">
                                  <strong>Requirements:</strong>
                                  <ul className="mt-1 space-y-1">
                                    {deadline.requirements.map((req, idx) => (
                                      <li key={idx} className="flex items-center text-xs">
                                        <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-right ml-6">
                              <div className={`text-2xl font-bold mb-1 ${
                                deadline.daysLeft < 0 ? "text-red-600" :
                                deadline.daysLeft <= 3 ? "text-yellow-600" :
                                "text-blue-600"
                              }`}>
                                {deadline.daysLeft < 0 ? `${Math.abs(deadline.daysLeft)}` : deadline.daysLeft}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {deadline.daysLeft < 0 ? "days overdue" : "days left"}
                              </div>
                              <Button variant="outline" size="sm" className="mt-3">
                                {deadline.status === "overdue" ? "Submit Now" : "View Details"}
                              </Button>
                            </div>
                          </div>
                          
                          {deadline.status === "overdue" && (
                            <div className="bg-red-100 border border-red-200 rounded-lg p-3 flex items-center">
                              <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                              <span className="text-sm text-red-700">
                                This deadline has passed. Please submit immediately to avoid penalties.
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Reminders Tab */}
                <TabsContent value="reminders" className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <Bell className="h-6 w-6 mr-2 text-primary" />
                      Recent Reminders
                    </h2>

                    <div className="space-y-4">
                      {upcomingReminders.map((reminder, index) => (
                        <div
                          key={index}
                          className={`border rounded-lg p-4 ${
                            reminder.type === "urgent" ? "border-red-200 bg-red-50" :
                            reminder.type === "warning" ? "border-yellow-200 bg-yellow-50" :
                            "border-blue-200 bg-blue-50"
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              reminder.type === "urgent" ? "bg-red-100" :
                              reminder.type === "warning" ? "bg-yellow-100" :
                              "bg-blue-100"
                            }`}>
                              {reminder.type === "urgent" ? (
                                <AlertTriangle className="h-4 w-4 text-red-600" />
                              ) : reminder.type === "warning" ? (
                                <Clock className="h-4 w-4 text-yellow-600" />
                              ) : (
                                <Bell className="h-4 w-4 text-blue-600" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold mb-1">{reminder.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">{reminder.message}</p>
                              <p className="text-xs text-muted-foreground">{reminder.time}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Mark as Read
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Reminder Settings */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                      <h3 className="font-bold text-lg mb-4">Reminder Schedule</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <strong>7 Days Before:</strong>
                          <p className="opacity-90">Initial reminder sent</p>
                        </div>
                        <div>
                          <strong>3 Days Before:</strong>
                          <p className="opacity-90">Urgent reminder sent</p>
                        </div>
                        <div>
                          <strong>1 Day Before:</strong>
                          <p className="opacity-90">Final reminder sent</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AKTUDeadlineTracker;