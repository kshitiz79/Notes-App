import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Brain, FileText, Image, Video, Calculator, Code, 
  BookOpen, MessageCircle, Sparkles, ArrowRight, 
  Zap, Star, TrendingUp, Users, Clock, CheckCircle, Award,
  Target, Briefcase, Rocket, HelpCircle, Calendar
} from "lucide-react";

const AITools = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiTools = [
    {
      id: "aktu-syllabus",
      title: "AKTU Smart Syllabus & Notes Generator",
      description: "AI-curated notes based on AKTU's latest syllabus with topic-wise weightage analyzer",
      features: ["AKTU syllabus-based", "Topic weightage analysis", "Book summaries", "Exam strategy"],
      icon: BookOpen,
      color: "from-blue-500 to-green-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      route: "/ai-tools/aktu-syllabus",
      popular: true,
      aktu: true
    },
    {
      id: "aktu-exam-predictor",
      title: "AKTU Previous Year Paper AI Tool",
      description: "AKTU paper pattern predictor with MCQ vs subjective trends and topic recurrence heatmap",
      features: ["Pattern prediction", "Topic heatmap", "Expected questions", "AKTU-specific analysis"],
      icon: TrendingUp,
      color: "from-purple-500 to-blue-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      route: "/ai-tools/aktu-exam-predictor",
      popular: true,
      aktu: true
    },
    {
      id: "aktu-crash-course",
      title: "AKTU Exam Crash Course Generator",
      description: "AI creates last-minute revision notes with smart flashcards and formula sheets",
      features: ["Last-minute revision", "Smart flashcards", "Formula sheets", "Spaced repetition"],
      icon: Zap,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      route: "/ai-tools/aktu-crash-course",
      popular: true,
      aktu: true
    },
    {
      id: "aktu-gpa-advisor",
      title: "GPA Improvement Advisor",
      description: "Backlog risk predictor with alerts and SGPA/CGPA calculator with improvement roadmap",
      features: ["Backlog risk prediction", "Subject recommendations", "CGPA calculator", "Study roadmap"],
      icon: Target,
      color: "from-green-500 to-blue-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      route: "/ai-tools/aktu-gpa-advisor",
      popular: false,
      aktu: true
    },
    {
      id: "aktu-placement-prep",
      title: "AKTU Placement Prep AI",
      description: "Company-wise question bank, resume builder, and AI mock interviews with alumni feedback",
      features: ["Company question banks", "Resume optimization", "Mock interviews", "Alumni insights"],
      icon: Briefcase,
      color: "from-blue-500 to-teal-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      route: "/ai-tools/aktu-placement-prep",
      popular: true,
      aktu: true
    },
    {
      id: "aktu-project-helper",
      title: "AKTU Mini-Project Helper",
      description: "Project ideas, report generation in AKTU format, and demo video scripts",
      features: ["AKTU-approved ideas", "Report templates", "Demo scripts", "Implementation guide"],
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      route: "/ai-tools/aktu-project-helper",
      popular: false,
      aktu: true
    },
    {
      id: "aktu-lab-assistant",
      title: "AKTU Lab File Assistant",
      description: "Complete lab file generation with theory, code, outputs, and viva Q&A",
      features: ["Complete lab files", "Code debugging", "Viva questions", "Multi-language support"],
      icon: Code,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      route: "/ai-tools/aktu-lab-assistant",
      popular: false,
      aktu: true
    },
    {
      id: "aktu-query-bot",
      title: "AKTU Query Bot",
      description: "24/7 assistant for AKTU FAQs about exam forms, revaluation, scholarships, and backlogs",
      features: ["Instant answers", "AKTU procedures", "24/7 availability", "Multi-topic support"],
      icon: HelpCircle,
      color: "from-blue-500 to-green-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      route: "/ai-tools/aktu-query-bot",
      popular: false,
      aktu: true
    },
    {
      id: "aktu-deadline-tracker",
      title: "AKTU Deadline Tracker",
      description: "Smart reminders for exam registration, project submissions, fee payments, and internships",
      features: ["Smart reminders", "Deadline tracking", "Automated alerts", "Calendar integration"],
      icon: Calendar,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      route: "/ai-tools/aktu-deadline-tracker",
      popular: false,
      aktu: true
    },
    {
      id: "note-generator",
      title: "Smart Note Generator",
      description: "AI that summarizes lectures/textbooks into concise notes with automatic diagram creation",
      features: ["Text summarization", "Diagram generation", "Key point extraction", "Visual learning aids"],
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      route: "/ai-tools/note-generator",
      popular: false
    },
    {
      id: "question-solver",
      title: "AI Question Solver",
      description: "Step-by-step solutions for engineering problems including Math, Circuits, and Coding",
      features: ["Step-by-step solutions", "Code debugging", "Formula derivation", "Multiple approaches"],
      icon: Calculator,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      route: "/ai-tools/question-solver",
      popular: false
    },
    {
      id: "paper-analyzer",
      title: "Previous Paper Analyzer",
      description: "Predicts exam questions and generates personalized practice tests based on patterns",
      features: ["Question prediction", "Mark distribution", "Weak area analysis", "Practice tests"],
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      route: "/ai-tools/paper-analyzer",
      popular: false
    },
    {
      id: "video-transcriber",
      title: "Video Transcriber",
      description: "YouTube video transcription and note generation from educational content",
      features: ["Video transcription", "Key moment extraction", "Note generation", "Timestamp linking"],
      icon: Video,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      route: "/ai-tools/video-transcriber",
      popular: false
    },
    {
      id: "ai-tutor",
      title: "AI Tutor Chatbot",
      description: "24/7 subject matter assistant with context-aware explanations and multilingual support",
      features: ["24/7 availability", "Context-aware", "Multilingual support", "Adaptive learning"],
      icon: MessageCircle,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      route: "/ai-tools/ai-tutor",
      popular: false
    }
  ];

  const stats = [
    { icon: Users, label: "Active Users", value: "15K+", color: "text-blue-600" },
    { icon: Brain, label: "AI Models", value: "12", color: "text-green-600" },
    { icon: Zap, label: "Problems Solved", value: "500K+", color: "text-purple-600" },
    { icon: Star, label: "Accuracy Rate", value: "94%", color: "text-orange-600" }
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
              <Brain className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">Powered by Advanced AI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Study Tools
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Supercharge your learning with cutting-edge AI tools designed specifically for engineering students. 
              From smart note generation to problem solving, we've got you covered.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="academic" className="text-lg px-8 py-4">
                <Sparkles className="mr-2 h-5 w-5" />
                Try AI Tools Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <Video className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6">
              <Zap className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-800">Intelligent Learning Tools</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Choose Your AI Assistant
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each tool is specifically designed to tackle different aspects of your engineering studies
            </p>
          </div>
          
          {/* AKTU-Specific Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6">
                <Award className="h-4 w-4 text-orange-600 mr-2" />
                <span className="text-sm font-medium text-orange-800">AKTU-Specific AI Tools</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Built for AKTU Students
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized AI tools designed specifically for AKTU examination patterns and syllabus
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTools.filter(tool => tool.aktu).map((tool, index) => (
                <Link
                  key={tool.id}
                  to={tool.route}
                  className={`block transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`${tool.bgColor} rounded-2xl p-8 border-2 ${tool.borderColor} hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}>
                    
                    {/* AKTU Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-gradient-to-r from-orange-400 to-red-400 text-white border-0">
                        <Award className="h-3 w-3 mr-1 fill-current" />
                        AKTU
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Button variant="academic" className="group-hover:shadow-lg transition-all duration-300">
                        Try Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Free</span>
                      </div>
                    </div>

                    {/* Background decoration */}
                    <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${tool.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* General AI Tools */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              General AI Study Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Universal AI tools for all engineering students and educational content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.filter(tool => !tool.aktu).map((tool, index) => (
              <Link
                key={tool.id}
                to={tool.route}
                className={`block transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`${tool.bgColor} rounded-2xl p-8 border-2 ${tool.borderColor} hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}>
                  
                  {/* Popular Badge */}
                  {tool.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <Button variant="academic" className="group-hover:shadow-lg transition-all duration-300">
                      Try Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Free</span>
                    </div>
                  </div>

                  {/* Background decoration */}
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${tool.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <Brain className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-800">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              AI-Powered Learning in 3 Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI models understand your learning needs and provide personalized assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Input Your Content",
                description: "Upload documents, paste text, or provide YouTube links. Our AI processes multiple formats.",
                icon: FileText,
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                step: "2",
                title: "AI Analysis",
                description: "Advanced algorithms analyze content, identify key concepts, and understand context.",
                icon: Brain,
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                step: "3",
                title: "Get Results",
                description: "Receive personalized notes, solutions, or explanations tailored to your learning level.",
                icon: Sparkles,
                color: "text-green-600",
                bg: "bg-green-50"
              }
            ].map((step, index) => (
              <div 
                key={step.step}
                className={`text-center ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 ${step.bg} rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who are already using AI to accelerate their academic success. 
              Start with any tool for free today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100">
                <Brain className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to AI Tutor
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      <Footer />
    </div>
  );
};

export default AITools;