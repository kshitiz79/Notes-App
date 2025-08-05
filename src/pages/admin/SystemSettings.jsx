import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import { 
  Settings, Save, Shield, Database, 
  Mail, Bell, Globe, Lock, Key, Server,
  Upload, Download, Trash2, RefreshCw, AlertTriangle
} from "lucide-react";

const SystemSettings = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [settings, setSettings] = useState({
    appName: "AKTU Notes Hub",
    appVersion: "1.0.0",
    maintenanceMode: false,
    maxFileSize: "10",
    aiToolsEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
    backupFrequency: "daily",
    sessionTimeout: "30",
    maxLoginAttempts: "5"
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSave = () => {
    // Save settings logic
    alert("Settings saved successfully!");
  };

  const systemInfo = {
    serverUptime: "15 days, 4 hours",
    databaseSize: "2.4 GB",
    totalFiles: "15,420",
    lastBackup: "2024-12-07 02:00 AM",
    phpVersion: "8.2.0",
    mysqlVersion: "8.0.35",
    diskSpace: "78% used"
  };

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
            <p className="text-sm text-gray-600">Configure system preferences</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset to Default
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="ai-config">AI Config</TabsTrigger>
            <TabsTrigger value="system">System Info</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Application Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Application Name</label>
                  <Input
                    value={settings.appName}
                    onChange={(e) => setSettings({...settings, appName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Version</label>
                  <Input
                    value={settings.appVersion}
                    onChange={(e) => setSettings({...settings, appVersion: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Max File Size (MB)</label>
                  <Input
                    type="number"
                    value={settings.maxFileSize}
                    onChange={(e) => setSettings({...settings, maxFileSize: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Session Timeout (minutes)</label>
                  <Input
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => setSettings({...settings, sessionTimeout: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Maintenance Mode</p>
                    <p className="text-sm text-gray-600">Enable to temporarily disable the application</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={settings.maintenanceMode}
                    onChange={(e) => setSettings({...settings, maintenanceMode: e.target.checked})}
                    className="rounded" 
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">AI Tools Enabled</p>
                    <p className="text-sm text-gray-600">Enable/disable AI functionality</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={settings.aiToolsEnabled}
                    onChange={(e) => setSettings({...settings, aiToolsEnabled: e.target.checked})}
                    className="rounded" 
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Security Configuration</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Max Login Attempts</label>
                    <Input
                      type="number"
                      value={settings.maxLoginAttempts}
                      onChange={(e) => setSettings({...settings, maxLoginAttempts: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Password Policy</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Strong (8+ chars, mixed case, numbers, symbols)</option>
                      <option>Medium (6+ chars, mixed case, numbers)</option>
                      <option>Basic (6+ chars)</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                      <span className="font-medium text-red-800">Security Actions</span>
                    </div>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="mr-3">
                        <Key className="h-4 w-4 mr-2" />
                        Regenerate API Keys
                      </Button>
                      <Button variant="outline" size="sm" className="mr-3">
                        <Shield className="h-4 w-4 mr-2" />
                        Clear All Sessions
                      </Button>
                      <Button variant="outline" size="sm">
                        <Lock className="h-4 w-4 mr-2" />
                        Force Password Reset
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* System Info */}
          <TabsContent value="system" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">System Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(systemInfo).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default SystemSettings;