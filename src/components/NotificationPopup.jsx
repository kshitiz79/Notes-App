import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, X, BookOpen, Download, Star, Users, 
  Clock, CheckCircle, AlertCircle, Info
} from "lucide-react";

const NotificationPopup = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "new_resource",
      title: "New Study Materials Added",
      message: "5 new resources have been added for Computer Networks - Semester 4",
      time: "2 minutes ago",
      read: false,
      icon: BookOpen,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      id: 2,
      type: "download_complete",
      title: "Download Complete",
      message: "Data Structures Complete Notes.pdf has been downloaded successfully",
      time: "10 minutes ago",
      read: false,
      icon: Download,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      id: 3,
      type: "rating_request",
      title: "Rate Your Experience",
      message: "How was the Machine Learning Lab Manual? Your feedback helps other students",
      time: "1 hour ago",
      read: true,
      icon: Star,
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    },
    {
      id: 4,
      type: "community_update",
      title: "New Discussion in CSE Group",
      message: "Sarah started a discussion about 'Best practices for coding interviews'",
      time: "2 hours ago",
      read: true,
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      id: 5,
      type: "reminder",
      title: "Study Reminder",
      message: "Don't forget to review Operating Systems notes for tomorrow's class",
      time: "3 hours ago",
      read: true,
      icon: Clock,
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Notification Panel */}
      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl w-full max-w-md mx-4 max-h-[80vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-primary mr-2" />
            <h2 className="text-xl font-bold">Notifications</h2>
            {unreadCount > 0 && (
              <Badge variant="secondary" className="ml-2 bg-red-100 text-red-800">
                {unreadCount} new
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {unreadCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={markAllAsRead}
                className="text-xs"
              >
                Mark all read
              </Button>
            )}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {notifications.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                    !notification.read ? 'bg-blue-50/50' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 ${notification.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <notification.icon className={`h-5 w-5 ${notification.color}`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {notification.time}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notification.id);
                          }}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bell className="h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
              <p className="text-sm text-gray-500">
                You're all caught up! Check back later for updates.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">
              {notifications.length} total notifications
            </span>
            <Button variant="ghost" size="sm" className="text-primary">
              View all in settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;