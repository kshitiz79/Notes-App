import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import NotificationPopup from "./NotificationPopup";
import { Search, Menu, X, BookOpen, User, Bell, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StudyHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/branches" className="text-sm font-medium hover:text-primary transition-colors">
              Branches
            </Link>
            <Link to="/ai-tools" className="text-sm font-medium hover:text-primary transition-colors">
              AI Tools
            </Link>
            <Link to="/chatbot" className="text-sm font-medium hover:text-primary transition-colors">
              AI Assistant
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>



          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex relative"
              onClick={() => setIsNotificationOpen(true)}
            >
              <Bell className="h-5 w-5" />
              <Badge
                variant="secondary"
                className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center"
              >
                2
              </Badge>
            </Button>

            <Link to="/chatbot">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </Link>

            <Link to="/profile">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            <Link to="/signin">
              <Button variant="academic" className="hidden md:flex">
                Sign In
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container py-4 space-y-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search resources..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Home
                </Link>
                <Link to="/branches" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Branches
                </Link>
                <Link to="/ai-tools" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  AI Tools
                </Link>
                <Link to="/chatbot" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  AI Assistant
                </Link>
                <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  About
                </Link>
              </nav>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/profile">
                  <Button variant="outline" className="justify-start w-full">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="justify-start w-full"
                  onClick={() => setIsNotificationOpen(true)}
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                  <Badge variant="secondary" className="ml-auto bg-red-500 text-white">
                    2
                  </Badge>
                </Button>
                <Link to="/signin">
                  <Button variant="academic" className="justify-start w-full">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Notification Popup */}
      <NotificationPopup
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
    </>
  );
};

export default Header;