import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, ArrowLeft, Search, HelpCircle, Mail, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";

const NotFound = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      window.location.href = `/?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  const popularSuggestions = [
    { label: "Computer Science Notes", href: "/branch/CSE" },
    { label: "Previous Year Papers", href: "/resources?type=papers" },
    { label: "Engineering Mathematics", href: "/resources?subject=math" },
    { label: "Data Structures", href: "/resources?subject=dsa" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className={`text-center max-w-2xl mx-auto px-4 relative z-10 transition-all duration-1000 ${
        isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* 404 Illustration */}
        <div className="mb-12">
          <div className="relative">
            <div className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="h-20 w-20 text-primary animate-bounce" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry though – we'll help you find what you need!
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
          <div className="flex items-center mb-4">
            <Search className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Search for Resources</h3>
          </div>
          <div className="flex gap-3">
            <Input
              placeholder="Try searching for notes, papers, or subjects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1"
            />
            <Button onClick={handleSearch} variant="academic">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="academic" 
            size="lg"
            onClick={() => window.history.back()}
            className="flex items-center group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/'}
            className="flex items-center group"
          >
            <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Home Page
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => window.location.reload()}
            className="flex items-center group"
          >
            <RefreshCw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
            Refresh
          </Button>
        </div>

        {/* Popular Suggestions */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-600/50">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Popular Resources</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularSuggestions.map((suggestion, index) => (
              <Button 
                key={suggestion.label}
                variant="ghost" 
                className="justify-start hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = suggestion.href}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                {suggestion.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <p className="text-muted-foreground mb-4">
            Still can't find what you're looking for?
          </p>
          <Button 
            variant="link" 
            className="text-primary hover:text-primary/80"
            onClick={() => window.location.href = '/contact'}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;