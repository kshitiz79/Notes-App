import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  MessageCircle, ArrowLeft, Brain, Send, User, Bot,
  HelpCircle, FileText, Calendar, DollarSign, 
  GraduationCap, Clock, CheckCircle, AlertCircle
} from "lucide-react";

const AKTUQueryBot = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setIsLoaded(true);
    // Initialize with welcome message
    setMessages([
      {
        id: 1,
        type: "bot",
        content: "Hello! I'm your AKTU Query Bot. I can help you with exam forms, revaluation process, scholarship rules, backlog clearance, and more. What would you like to know?",
        timestamp: new Date(),
        category: "general"
      }
    ]);
  }, []);

  const quickQuestions = [
    {
      category: "exam",
      icon: FileText,
      question: "How to fill AKTU exam form?",
      answer: "To fill AKTU exam form:\n1. Visit AKTU official website\n2. Login with your credentials\n3. Select 'Examination' section\n4. Choose your semester and subjects\n5. Pay the exam fee online\n6. Download and print the form\n\nDeadline: Usually 15 days before exam\nFee: ₹500-1000 depending on subjects"
    },
    {
      category: "revaluation",
      icon: HelpCircle,
      question: "What is the AKTU revaluation process?",
      answer: "AKTU Revaluation Process:\n1. Apply within 15 days of result declaration\n2. Fill revaluation form online\n3. Pay revaluation fee (₹500 per subject)\n4. Submit required documents\n5. Wait for 30-45 days for results\n\nNote: Only theory papers can be revaluated, not practical/internal marks."
    },
    {
      category: "scholarship",
      icon: DollarSign,
      question: "What scholarships are available for AKTU students?",
      answer: "AKTU Scholarships Available:\n\n1. UP Scholarship (State Govt.)\n2. Central Sector Scholarship\n3. Merit-based scholarships\n4. SC/ST/OBC scholarships\n5. Minority scholarships\n\nEligibility: Based on family income, caste, and academic performance\nApplication: Through UP Scholarship portal"
    },
    {
      category: "backlog",
      icon: AlertCircle,
      question: "How to clear AKTU backlogs?",
      answer: "AKTU Backlog Clearance:\n\n1. Register for backlog exam during regular exam form filling\n2. Pay additional fee for each backlog subject\n3. Appear in the next available exam session\n4. No limit on number of attempts\n5. Can appear with regular semester students\n\nFee: ₹300-500 per backlog subject\nOpportunity: Every semester (odd/even)"
    },
    {
      category: "admission",
      icon: GraduationCap,
      question: "AKTU admission process and eligibility?",
      answer: "AKTU Admission Process:\n\n1. UPSEE/JEE Main score required\n2. Online counseling through AKTU\n3. Document verification\n4. Seat allotment based on rank\n5. Fee payment and admission\n\nEligibility:\n- 12th with PCM (45% for General, 40% for SC/ST)\n- Valid entrance exam score\n- UP domicile preferred"
    },
    {
      category: "fee",
      icon: DollarSign,
      question: "AKTU fee structure and payment methods?",
      answer: "AKTU Fee Structure (Approx.):\n\n1. Tuition Fee: ₹60,000-80,000/year\n2. Exam Fee: ₹500-1000/semester\n3. Registration Fee: ₹2,000 (one-time)\n4. Other charges: ₹5,000-10,000/year\n\nPayment Methods:\n- Online payment (preferred)\n- DD in favor of college\n- Bank challan\n\nNote: Fee varies by college and branch"
    }
  ];

  const categories = [
    { id: "all", label: "All Topics", icon: MessageCircle },
    { id: "exam", label: "Exam Forms", icon: FileText },
    { id: "revaluation", label: "Revaluation", icon: HelpCircle },
    { id: "scholarship", label: "Scholarships", icon: DollarSign },
    { id: "backlog", label: "Backlogs", icon: AlertCircle },
    { id: "admission", label: "Admissions", icon: GraduationCap }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    let response = "I understand you're asking about AKTU procedures. Let me help you with that.";

    if (lowerQuery.includes("exam") || lowerQuery.includes("form")) {
      response = "For AKTU exam forms:\n\n1. Visit the official AKTU website\n2. Login with your enrollment number\n3. Fill the examination form\n4. Pay the required fee online\n5. Take a printout for your records\n\nDeadline is usually 15 days before exams. Need help with anything specific about exam forms?";
    } else if (lowerQuery.includes("revaluation") || lowerQuery.includes("rechecking")) {
      response = "AKTU Revaluation Process:\n\n1. Apply within 15 days of result\n2. Pay ₹500 per subject\n3. Only theory papers eligible\n4. Results in 30-45 days\n5. If marks increase, fee refunded\n\nWould you like to know about the online application process?";
    } else if (lowerQuery.includes("scholarship") || lowerQuery.includes("financial")) {
      response = "AKTU students can apply for:\n\n1. UP State Scholarships\n2. Central Government Scholarships\n3. Merit-based scholarships\n4. Category-based scholarships\n\nApplication through UP Scholarship portal. Need details about eligibility criteria?";
    } else if (lowerQuery.includes("backlog") || lowerQuery.includes("clear")) {
      response = "To clear AKTU backlogs:\n\n1. Register during regular exam forms\n2. Pay additional fee per subject\n3. Appear with regular students\n4. No attempt limit\n5. Can clear multiple backlogs together\n\nFee is around ₹300-500 per subject. Need help with registration?";
    }

    return {
      id: messages.length + 2,
      type: "bot",
      content: response,
      timestamp: new Date()
    };
  };

  const handleQuickQuestion = (question) => {
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: question.question,
      timestamp: new Date()
    };

    const botMessage = {
      id: messages.length + 2,
      type: "bot",
      content: question.answer,
      timestamp: new Date(),
      category: question.category
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const filteredQuestions = selectedCategory === "all" 
    ? quickQuestions 
    : quickQuestions.filter(q => q.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-green-50 border-b border-gray-200">
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
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <MessageCircle className="h-3 w-3 mr-1" />
                AKTU Query Bot
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                AKTU Query Bot
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get instant answers to AKTU FAQs about exam forms, revaluation process, scholarship rules, 
                backlog clearance, and more. Available 24/7 to help AKTU students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Categories Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-primary" />
                  Query Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <category.icon className="h-4 w-4 mr-3" />
                      <span className="text-sm font-medium">{category.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Bot Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Queries Answered</span>
                    <Badge variant="secondary">50K+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Time</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">&lt;2s</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Accuracy Rate</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">95%</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="chat" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="chat" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Live Chat
                  </TabsTrigger>
                  <TabsTrigger value="quick" className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4" />
                    Quick Questions
                  </TabsTrigger>
                </TabsList>

                {/* Live Chat */}
                <TabsContent value="chat" className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <Bot className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-bold">AKTU Assistant</h3>
                          <p className="text-sm opacity-90">Online • Ready to help</p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="h-96 overflow-y-auto p-4 space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <div className="flex items-start space-x-2">
                              {message.type === 'bot' && (
                                <Bot className="h-4 w-4 mt-1 flex-shrink-0" />
                              )}
                              {message.type === 'user' && (
                                <User className="h-4 w-4 mt-1 flex-shrink-0" />
                              )}
                              <div>
                                <p className="text-sm whitespace-pre-line">{message.content}</p>
                                <p className={`text-xs mt-1 ${
                                  message.type === 'user' ? 'text-white/70' : 'text-gray-500'
                                }`}>
                                  {message.timestamp.toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl">
                            <div className="flex items-center space-x-2">
                              <Bot className="h-4 w-4" />
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Chat Input */}
                    <div className="border-t p-4">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder="Ask about AKTU procedures..."
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Quick Questions */}
                <TabsContent value="quick" className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <HelpCircle className="h-6 w-6 mr-2 text-primary" />
                      Frequently Asked Questions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredQuestions.map((question, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => handleQuickQuestion(question)}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <question.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold mb-2">{question.question}</h3>
                              <p className="text-sm text-muted-foreground line-clamp-3">
                                {question.answer.split('\n')[0]}...
                              </p>
                              <Button variant="outline" size="sm" className="mt-3">
                                Get Answer
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
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

export default AKTUQueryBot;