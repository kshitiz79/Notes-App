import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Users, Download, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 ">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Your Ultimate
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Study Resource Hub
            </span>
          </h1>
          
          {/* Hero Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access thousands of study materials, previous year papers, and notes shared by students across all engineering branches.
          </p>

          {/* Search Bar */}


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="academic" className="text-lg px-8 py-4">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Resources
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Study Materials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25K+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              <Download className="h-8 w-8 mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Free Downloads</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <span className="text-3xl md:text-4xl font-bold text-primary ml-1">4.9</span>
              </div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;