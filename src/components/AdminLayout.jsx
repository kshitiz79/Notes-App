import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    LayoutDashboard, Users, BookOpen, Brain, Settings,
    Bell, BarChart3, Shield, Menu, X, LogOut,
    ChevronLeft, ChevronRight, Activity, Database,
    FileText, Calendar, Award, Eye
} from "lucide-react";

const AdminLayout = ({ children }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navigationItems = [
        {
            title: "Dashboard",
            href: "/admin",
            icon: LayoutDashboard,
            badge: null,
            description: "Overview and statistics"
        },
        {
            title: "User Management",
            href: "/admin/users",
            icon: Users,
            badge: "15.4K",
            description: "Manage users and permissions"
        },
        {
            title: "Academic Structure",
            href: "/admin/academic-structure",
            icon: Database,
            badge: null,
            description: "Academic management",
            isSection: true,
            children: [
                {
                    title: "Departments",
                    href: "/admin/departments",
                    icon: Database,
                    description: "Manage branches and departments"
                },
                {
                    title: "Subjects",
                    href: "/admin/subjects",
                    icon: BookOpen,
                    description: "Manage subjects and curriculum"
                },
                {
                    title: "Semesters",
                    href: "/admin/semesters",
                    icon: Calendar,
                    description: "Manage semester configurations"
                }
            ]
        },
        {
            title: "Content Management",
            href: "/admin/content-management",
            icon: FileText,
            badge: "2.8K",
            description: "Educational content",
            isSection: true,
            children: [
                {
                    title: "Notes & Resources",
                    href: "/admin/notes",
                    icon: FileText,
                    description: "Manage study materials"
                },
                {
                    title: "Question Papers",
                    href: "/admin/question-papers",
                    icon: FileText,
                    description: "Previous year questions"
                },
                {
                    title: "Content Library",
                    href: "/admin/content",
                    icon: BookOpen,
                    description: "General content management"
                }
            ]
        },
        {
            title: "Placement & Career",
            href: "/admin/placement-career",
            icon: Award,
            badge: null,
            description: "Career services",
            isSection: true,
            children: [
                {
                    title: "Companies",
                    href: "/admin/companies",
                    icon: Award,
                    description: "Manage placement companies"
                },
                {
                    title: "Achievements",
                    href: "/admin/achievements",
                    icon: Award,
                    description: "Manage user achievements"
                }
            ]
        },
        {
            title: "AKTU Services",
            href: "/admin/aktu-services",
            icon: Calendar,
            badge: null,
            description: "University services",
            isSection: true,
            children: [
                {
                    title: "Deadlines",
                    href: "/admin/deadlines",
                    icon: Calendar,
                    description: "Important dates and deadlines"
                }
            ]
        },
        {
            title: "AI Tools Control",
            href: "/admin/ai-tools",
            icon: Brain,
            badge: "12",
            description: "Monitor and configure AI tools"
        },
        {
            title: "Analytics & Reports",
            href: "/admin/analytics-reports",
            icon: BarChart3,
            badge: null,
            description: "Analytics and insights",
            isSection: true,
            children: [
                {
                    title: "Study Analytics",
                    href: "/admin/study-analytics",
                    icon: Activity,
                    description: "Student learning patterns"
                },
                {
                    title: "System Reports",
                    href: "/admin/analytics",
                    icon: BarChart3,
                    description: "Detailed system analytics"
                }
            ]
        },
        {
            title: "Notifications",
            href: "/admin/notifications",
            icon: Bell,
            badge: "8",
            description: "Manage notifications and alerts"
        },
        {
            title: "System Settings",
            href: "/admin/settings",
            icon: Settings,
            badge: null,
            description: "Configure system preferences"
        }
    ];

    const isActive = (href) => {
        if (href === "/admin") {
            return location.pathname === "/admin";
        }
        return location.pathname.startsWith(href);
    };

    return (
        <div className="h-screen bg-gray-50 flex overflow-hidden">
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed lg:static inset-y-0 left-0 z-50 
                ${sidebarCollapsed ? 'w-16' : 'w-72'} 
                ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                bg-white border-r border-gray-200 transition-all duration-300 ease-in-out
                flex flex-col h-full
            `}>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                    {!sidebarCollapsed && (
                        <div className="flex items-center space-x-2">
                            <Shield className="h-8 w-8 text-blue-600" />
                            <div>
                                <h1 className="text-lg font-bold text-gray-900">Admin Panel</h1>
                                <p className="text-xs text-gray-500">AKTU Notes Hub</p>
                            </div>
                        </div>
                    )}

                    <div className="flex items-center space-x-2">
                        {/* Mobile Close Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>

                        {/* Desktop Collapse Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="hidden lg:flex"
                            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        >
                            {sidebarCollapsed ? (
                                <ChevronRight className="h-4 w-4" />
                            ) : (
                                <ChevronLeft className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto min-h-0">
                    {navigationItems.map((item) => (
                        <div key={item.title}>
                            {item.isSection ? (
                                <div className="space-y-1">
                                    {/* Section Header */}
                                    <div className="flex items-center space-x-3 px-3 py-2 text-gray-600">
                                        <item.icon className="h-4 w-4 text-gray-400" />
                                        {!sidebarCollapsed && (
                                            <>
                                                <span className="text-xs font-semibold uppercase tracking-wider">{item.title}</span>
                                                {item.badge && (
                                                    <Badge variant="secondary" className="text-xs">
                                                        {item.badge}
                                                    </Badge>
                                                )}
                                            </>
                                        )}
                                    </div>

                                    {/* Section Children */}
                                    {!sidebarCollapsed && item.children && (
                                        <div className="ml-4 space-y-1">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    to={child.href}
                                                    className={`
                                                        flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200
                                                        ${isActive(child.href)
                                                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                                        }
                                                    `}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <child.icon className={`h-4 w-4 flex-shrink-0 ${isActive(child.href) ? 'text-blue-600' : 'text-gray-500'
                                                        }`} />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium truncate">{child.title}</p>
                                                        <p className="text-xs text-gray-500 truncate">{child.description}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to={item.href}
                                    className={`
                                        flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200
                                        ${isActive(item.href)
                                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }
                                    `}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <item.icon className={`h-5 w-5 flex-shrink-0 ${isActive(item.href) ? 'text-blue-600' : 'text-gray-500'
                                        }`} />

                                    {!sidebarCollapsed && (
                                        <>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium truncate">{item.title}</p>
                                                <p className="text-xs text-gray-500 truncate">{item.description}</p>
                                            </div>

                                            {item.badge && (
                                                <Badge variant="secondary" className="text-xs">
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </>
                                    )}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-gray-200 space-y-2 flex-shrink-0">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <Eye className="h-5 w-5 text-gray-500" />
                        {!sidebarCollapsed && <span className="font-medium">View Site</span>}
                    </Link>

                    <Link
                        to="/signin"
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <LogOut className="h-5 w-5 text-gray-500" />
                        {!sidebarCollapsed && <span className="font-medium">Sign Out</span>}
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 h-full">
                {/* Mobile Header */}
                <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex-shrink-0">
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu className="h-5 w-5" />
                        </Button>

                        <div className="flex items-center space-x-2">
                            <Shield className="h-6 w-6 text-blue-600" />
                            <span className="font-bold text-gray-900">Admin Panel</span>
                        </div>

                        <div className="w-8" /> {/* Spacer for centering */}
                    </div>
                </div>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto min-h-0">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;