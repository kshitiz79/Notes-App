import React, { useState, useEffect } from 'react';
import { Search, Filter, BarChart3, TrendingUp, Clock, Users, Calendar, Award } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const StudyAnalytics = () => {
    const [analytics, setAnalytics] = useState({});
    const [studySessions, setStudySessions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTimeframe, setSelectedTimeframe] = useState('week');
    const [selectedBranch, setSelectedBranch] = useState('');

    const timeframes = [
        { value: 'week', label: 'This Week' },
        { value: 'month', label: 'This Month' },
        { value: 'semester', label: 'This Semester' },
        { value: 'year', label: 'This Year' }
    ];

    const branches = [
        { code: 'CSE', name: 'Computer Science' },
        { code: 'ECE', name: 'Electronics' },
        { code: 'ME', name: 'Mechanical' },
        { code: 'EE', name: 'Electrical' },
        { code: 'CE', name: 'Civil' },
        { code: 'IT', name: 'Information Technology' }
    ];

    // Mock data
    useEffect(() => {
        setAnalytics({
            totalStudyHours: 12450,
            activeUsers: 1250,
            avgSessionDuration: 45,
            completionRate: 78,
            topSubjects: [
                { name: 'Data Structures', hours: 2340, users: 450 },
                { name: 'Digital Electronics', hours: 1890, users: 380 },
                { name: 'Thermodynamics', hours: 1560, users: 320 },
                { name: 'Mathematics', hours: 1420, users: 290 },
                { name: 'Physics', hours: 1180, users: 250 }
            ],
            weeklyTrend: [
                { day: 'Mon', hours: 1800, sessions: 320 },
                { day: 'Tue', hours: 2100, sessions: 380 },
                { day: 'Wed', hours: 1950, sessions: 350 },
                { day: 'Thu', hours: 2250, sessions: 420 },
                { day: 'Fri', hours: 1750, sessions: 310 },
                { day: 'Sat', hours: 1400, sessions: 280 },
                { day: 'Sun', hours: 1200, sessions: 240 }
            ],
            branchWiseData: [
                { branch: 'CSE', users: 450, hours: 4200, avgScore: 85 },
                { branch: 'ECE', users: 380, hours: 3600, avgScore: 82 },
                { branch: 'ME', users: 320, hours: 2800, avgScore: 79 },
                { branch: 'EE', users: 290, hours: 2400, avgScore: 81 },
                { branch: 'CE', users: 250, hours: 2100, avgScore: 77 },
                { branch: 'IT', users: 210, hours: 1900, avgScore: 83 }
            ]
        });

        setStudySessions([
            {
                id: 1,
                user_name: 'Rahul Sharma',
                subject: 'Data Structures',
                duration: 120,
                efficiency_score: 85,
                session_type: 'study',
                date: '2024-02-08',
                branch: 'CSE',
                semester: 4
            },
            {
                id: 2,
                user_name: 'Priya Singh',
                subject: 'Digital Electronics',
                duration: 90,
                efficiency_score: 92,
                session_type: 'revision',
                date: '2024-02-08',
                branch: 'ECE',
                semester: 3
            },
            {
                id: 3,
                user_name: 'Amit Kumar',
                subject: 'Thermodynamics',
                duration: 75,
                efficiency_score: 78,
                session_type: 'practice',
                date: '2024-02-07',
                branch: 'ME',
                semester: 2
            }
        ]);
    }, []);

    const filteredSessions = studySessions.filter(session => {
        const matchesSearch = session.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            session.subject.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBranch = selectedBranch === '' || session.branch === selectedBranch;
        return matchesSearch && matchesBranch;
    });

    const formatDuration = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
    };

    return (
        <AdminLayout>
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Study Analytics</h1>
                    <p className="text-gray-600">Monitor student learning patterns and performance metrics</p>
                </div>
                <div className="flex items-center gap-2">
                    <select
                        value={selectedTimeframe}
                        onChange={(e) => setSelectedTimeframe(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        {timeframes.map(timeframe => (
                            <option key={timeframe.value} value={timeframe.value}>{timeframe.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Study Hours</p>
                            <p className="text-2xl font-bold text-gray-900">{analytics.totalStudyHours?.toLocaleString()}</p>
                        </div>
                        <Clock className="h-8 w-8 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Users</p>
                            <p className="text-2xl font-bold text-gray-900">{analytics.activeUsers?.toLocaleString()}</p>
                        </div>
                        <Users className="h-8 w-8 text-green-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Avg Session</p>
                            <p className="text-2xl font-bold text-gray-900">{analytics.avgSessionDuration}min</p>
                        </div>
                        <BarChart3 className="h-8 w-8 text-purple-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                            <p className="text-2xl font-bold text-gray-900">{analytics.completionRate}%</p>
                        </div>
                        <Award className="h-8 w-8 text-orange-600" />
                    </div>
                </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Weekly Trend Chart */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Study Trend</h3>
                    <div className="space-y-3">
                        {analytics.weeklyTrend?.map((day, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700 w-12">{day.day}</span>
                                <div className="flex-1 mx-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full"
                                            style={{ width: `${(day.hours / 2500) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-600 w-16 text-right">{day.hours}h</span>
                                <span className="text-xs text-gray-500 w-12 text-right">{day.sessions}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Subjects */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Subjects</h3>
                    <div className="space-y-3">
                        {analytics.topSubjects?.map((subject, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">{subject.name}</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-gray-900">{subject.hours}h</div>
                                    <div className="text-xs text-gray-500">{subject.users} users</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Branch-wise Performance */}
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Branch-wise Performance</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Branch</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Active Users</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Study Hours</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Avg Score</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Performance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {analytics.branchWiseData?.map((branch, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">
                                        <div className="font-medium text-gray-900">{branch.branch}</div>
                                        <div className="text-sm text-gray-500">{branches.find(b => b.code === branch.branch)?.name}</div>
                                    </td>
                                    <td className="py-3 px-4 text-gray-900">{branch.users}</td>
                                    <td className="py-3 px-4 text-gray-900">{branch.hours}h</td>
                                    <td className="py-3 px-4">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${branch.avgScore >= 85 ? 'bg-green-100 text-green-800' :
                                            branch.avgScore >= 80 ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                            {branch.avgScore}%
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${branch.avgScore >= 85 ? 'bg-green-600' :
                                                    branch.avgScore >= 80 ? 'bg-yellow-600' :
                                                        'bg-red-600'
                                                    }`}
                                                style={{ width: `${branch.avgScore}%` }}
                                            ></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Recent Study Sessions */}
            <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">Recent Study Sessions</h3>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search sessions..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                />
                            </div>
                            <select
                                value={selectedBranch}
                                onChange={(e) => setSelectedBranch(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            >
                                <option value="">All Branches</option>
                                {branches.map(branch => (
                                    <option key={branch.code} value={branch.code}>{branch.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredSessions.map((session) => (
                                <tr key={session.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{session.user_name}</div>
                                            <div className="text-sm text-gray-500">{session.branch} - Sem {session.semester}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.subject}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatDuration(session.duration)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${session.session_type === 'study' ? 'bg-blue-100 text-blue-800' :
                                            session.session_type === 'revision' ? 'bg-green-100 text-green-800' :
                                                'bg-purple-100 text-purple-800'
                                            }`}>
                                            {session.session_type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                                <div
                                                    className={`h-2 rounded-full ${session.efficiency_score >= 85 ? 'bg-green-600' :
                                                        session.efficiency_score >= 70 ? 'bg-yellow-600' :
                                                            'bg-red-600'
                                                        }`}
                                                    style={{ width: `${session.efficiency_score}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-gray-900">{session.efficiency_score}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </AdminLayout>
    );
};

export default StudyAnalytics;