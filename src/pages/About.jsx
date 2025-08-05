import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BookOpen, Users, Star, TrendingUp, Target, Heart, 
  Award, Zap, Shield, Globe, ArrowRight, CheckCircle,
  Mail, Phone, MapPin, Github, Twitter, Linkedin
} from "lucide-react";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { icon: Users, label: "Active Students", value: "25K+", color: "text-blue-600" },
    { icon: BookOpen, label: "Study Resources", value: "50K+", color: "text-green-600" },
    { icon: TrendingUp, label: "Downloads", value: "1M+", color: "text-purple-600" },
    { icon: Award, label: "Universities", value: "500+", color: "text-orange-600" }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Access to complete study materials, notes, and previous year papers for all engineering branches.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Student Community",
      description: "Connect with thousands of students, share knowledge, and collaborate on projects.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All resources are verified by experts and updated regularly to ensure accuracy.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "Lightning-fast downloads and reliable access to materials whenever you need them.",
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    },
    {
      icon: Globe,
      title: "Accessible Anywhere",
      description: "Access your study materials from any device, anywhere in the world.",
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      icon: Heart,
      title: "Student-Focused",
      description: "Built by students, for students. We understand your academic needs and challenges.",
      color: "text-pink-600",
      bg: "bg-pink-50"
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      description: "Computer Science graduate passionate about education technology.",
      image: "👨‍💻"
    },
    {
      name: "Sarah Chen",
      role: "Head of Content",
      description: "Ensures quality and accuracy of all study materials on the platform.",
      image: "👩‍🎓"
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Developer",
      description: "Full-stack developer focused on creating seamless user experiences.",
      image: "👨‍💼"
    },
    {
      name: "Emily Davis",
      role: "Community Manager",
      description: "Builds and nurtures our vibrant student community.",
      image: "👩‍💼"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <Heart className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">About StudyHub</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Empowering Student Success
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              We're on a mission to democratize access to quality education resources and help every engineering student achieve their academic goals.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6">
                <Target className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-800">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Making Quality Education Accessible
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                StudyHub was born from a simple belief: every student deserves access to quality educational resources, 
                regardless of their background or circumstances. We've built a platform that brings together the best 
                study materials, connects students with peers, and provides the tools needed for academic success.
              </p>
              <div className="space-y-4">
                {[
                  "Democratize access to quality study materials",
                  "Foster collaborative learning communities",
                  "Support students throughout their academic journey",
                  "Bridge the gap between students and resources"
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold mb-2">94%</div>
                  <div className="text-blue-200">Student Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4.8/5</div>
                  <div className="text-blue-200">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-200">Partner Universities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <Star className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-800">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Built for Student Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature we build is designed with one goal in mind: helping you succeed in your academic journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6">
              <Users className="h-4 w-4 text-orange-600 mr-2" />
              <span className="text-sm font-medium text-orange-800">Meet Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              The People Behind StudyHub
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of educators, developers, and student advocates work tirelessly to improve your learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-center ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Have questions, suggestions, or just want to say hello? We'd love to hear from you. 
                Our team is always here to help and support your academic journey.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-200 mr-4" />
                  <span>contact@studyhub.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-200 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-200 mr-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
                <textarea 
                  rows="4" 
                  placeholder="Your Message" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 resize-none"
                ></textarea>
                <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;