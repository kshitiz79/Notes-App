import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Send, Bot, User, BookOpen, Search, Lightbulb, 
  MessageCircle, Sparkles, ArrowUp, Copy, ThumbsUp, ThumbsDown
} from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm StudyBot, your AI study assistant. I can help you find resources, answer questions about your subjects, and provide study guidance. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const quickActions = [
    { icon: BookOpen, text: "AKTU Syllabus Help", query: "Help me understand AKTU syllabus for my subject" },
    { icon: Search, text: "AKTU Exam Pattern", query: "What's the latest AKTU exam pattern and marking scheme?" },
    { icon: Lightbulb, text: "AKTU Study Strategy", query: "Give me AKTU-specific study tips and strategies" },
    { icon: MessageCircle, text: "AKTU Query Bot", query: "I have questions about AKTU exam forms and procedures" }
  ];

  const sampleResponses = [
    "I can help you with AKTU-specific queries! The latest AKTU syllabus for B.Tech follows the NEP 2020 guidelines. Which year and branch are you asking about?",
    "For AKTU exams, here are effective study techniques: 1) Focus on previous year patterns 2) Unit-wise weightage analysis 3) AKTU-recommended books 4) Practice with AKTU question format. Would you like specific guidance for your subject?",
    "AKTU exam pattern typically includes 70% theory (subjective + MCQ) and 30% internal assessment. The MCQ percentage has been increasing - currently around 30-35%. Which subject's pattern do you need?",
    "I can help with AKTU procedures! Whether it's exam forms, revaluation process, scholarship rules, or backlog clearance - just ask me your specific question.",
    "Based on AKTU's latest syllabus and previous year analysis, I recommend focusing on high-weightage topics first. Which branch and semester are you in?",
    "Great AKTU-specific question! Let me provide you with the most updated information based on recent AKTU guidelines...",
    "I found several AKTU-approved resources and previous year papers for your query. Here are the most relevant ones based on recent exam patterns."
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: sampleResponses[Math.floor(Math.random() * sampleResponses.length)],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (query) => {
    setInputMessage(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyMessage = (content) => {
    navigator.clipboard.writeText(content);
    // You could show a toast here
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Chat Header */}
      <section className="py-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b border-gray-200">
        <div className="container mx-auto">
          <div className={`text-center transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <Bot className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">AI Study Assistant</span>
            </div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              StudyBot
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your intelligent study companion. Ask questions, get recommendations, and receive personalized study guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col">
        <div className="container mx-auto flex-1 flex flex-col py-8">
          <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-lg flex flex-col max-h-[600px]">
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[80%] ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500' 
                        : 'bg-gradient-to-br from-green-500 to-teal-500'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>

                    {/* Message Content */}
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className={`text-xs ${
                          message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        
                        {message.type === 'bot' && (
                          <div className="flex items-center space-x-2 ml-4">
                            <button
                              onClick={() => copyMessage(message.content)}
                              className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <Copy className="h-3 w-3" />
                            </button>
                            <button className="text-gray-400 hover:text-green-600 transition-colors">
                              <ThumbsUp className="h-3 w-3" />
                            </button>
                            <button className="text-gray-400 hover:text-red-600 transition-colors">
                              <ThumbsDown className="h-3 w-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-6 py-4 border-t border-gray-200">
                <p className="text-sm text-muted-foreground mb-3">Quick actions:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.query)}
                      className="flex items-center space-x-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
                    >
                      <action.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{action.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about your studies..."
                    className="pr-12 py-3 text-base"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                StudyBot can make mistakes. Please verify important information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-800">AI Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What StudyBot Can Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover all the ways our AI assistant can enhance your learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Smart Resource Search",
                description: "Find exactly what you need with intelligent search and recommendations",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: BookOpen,
                title: "Study Guidance",
                description: "Get personalized study plans and learning strategies for your subjects",
                color: "text-green-600",
                bg: "bg-green-50"
              },
              {
                icon: Lightbulb,
                title: "Concept Explanations",
                description: "Understand complex topics with clear, step-by-step explanations",
                color: "text-yellow-600",
                bg: "bg-yellow-50"
              },
              {
                icon: MessageCircle,
                title: "24/7 Availability",
                description: "Get help anytime, anywhere with our always-available AI assistant",
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                icon: ArrowUp,
                title: "Progress Tracking",
                description: "Monitor your learning progress and get insights on improvement areas",
                color: "text-red-600",
                bg: "bg-red-50"
              },
              {
                icon: Sparkles,
                title: "Personalized Learning",
                description: "Receive customized recommendations based on your branch and semester",
                color: "text-pink-600",
                bg: "bg-pink-50"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`${feature.bg} rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <feature.icon className={`h-8 w-8 ${feature.color} mb-4`} />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chatbot;