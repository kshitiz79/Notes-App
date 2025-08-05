import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Briefcase, ArrowLeft, Brain, Download, Share2, Copy,
  Users, FileText, Mic, CheckCircle, Clock, Target,
  TrendingUp, Star, Award, Building, Code
} from "lucide-react";

const AKTUPlacementPrep = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("TCS");
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationComplete, setGenerationComplete] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerationComplete(true);
    }, 3000);
  };

  const companies = {
    "TCS": {
      name: "Tata Consultancy Services",
      package: "3.5-7 LPA",
      pattern: "Aptitude + Technical + HR",
      difficulty: "Medium",
      aktuHiring: "500+ annually"
    },
    "Wipro": {
      name: "Wipro Technologies",
      package: "3.5-6 LPA",
      pattern: "Aptitude + Technical + HR",
      difficulty: "Medium",
      aktuHiring: "300+ annually"
    },
    "Cognizant": {
      name: "Cognizant Technology Solutions",
      package: "4-6.5 LPA",
      pattern: "Aptitude + Coding + HR",
      difficulty: "Medium",
      aktuHiring: "400+ annually"
    },
    "Infosys": {
      name: "Infosys Limited",
      package: "3.5-6 LPA",
      pattern: "Aptitude + Technical + HR",
      difficulty: "Medium",
      aktuHiring: "350+ annually"
    }
  };

  const questionBank = {
    "TCS": {
      aptitude: [
        {
          question: "If a train travels 60 km in 45 minutes, what is its speed in km/hr?",
          options: ["75", "80", "85", "90"],
          answer: "80",
          explanation: "Speed = Distance/Time = 60/(45/60) = 60/(3/4) = 80 km/hr"
        },
        {
          question: "A can complete a work in 12 days, B in 18 days. Together they can complete in:",
          options: ["6.5 days", "7.2 days", "8 days", "9 days"],
          answer: "7.2 days",
          explanation: "Combined rate = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days"
        }
      ],
      technical: [
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
          answer: "O(log n)",
          explanation: "Binary search divides the search space in half each time"
        },
        {
          question: "Which data structure uses LIFO principle?",
          options: ["Queue", "Stack", "Array", "Tree"],
          answer: "Stack",
          explanation: "Stack follows Last In First Out (LIFO) principle"
        }
      ],
      coding: [
        {
          question: "Write a program to find the factorial of a number",
          language: "C++",
          solution: `#include<iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    cout << "Factorial of " << num << " is " << factorial(num);
    return 0;
}`
        }
      ]
    }
  };

  const resumeTemplate = {
    sections: [
      "Personal Information",
      "Career Objective", 
      "Educational Qualifications",
      "Technical Skills",
      "Projects",
      "Internships/Training",
      "Achievements",
      "Extra-curricular Activities",
      "Personal Details"
    ],
    aktuOptimized: {
      objective: "To secure a challenging position in a reputed organization where I can utilize my technical skills and knowledge gained during my B.Tech from AKTU to contribute to organizational growth while enhancing my professional development.",
      skills: [
        "Programming Languages: C, C++, Java, Python",
        "Web Technologies: HTML, CSS, JavaScript, React",
        "Database: MySQL, MongoDB",
        "Tools: Git, VS Code, Eclipse",
        "Operating Systems: Windows, Linux"
      ],
      projects: [
        {
          title: "Student Management System",
          duration: "Jan 2024 - Mar 2024",
          description: "Developed a web-based system for managing student records using PHP and MySQL",
          technologies: "PHP, MySQL, HTML, CSS, JavaScript"
        }
      ]
    }
  };

  const mockInterviewQuestions = [
    {
      category: "Technical",
      question: "Explain the difference between abstract class and interface in Java",
      sampleAnswer: "Abstract class can have both abstract and concrete methods, while interface can only have abstract methods (until Java 8). A class can implement multiple interfaces but extend only one abstract class.",
      tips: "Draw diagrams if needed, give practical examples"
    },
    {
      category: "HR",
      question: "Why do you want to join our company?",
      sampleAnswer: "I'm impressed by your company's innovation in technology and commitment to employee growth. The role aligns with my career goals and I believe I can contribute effectively to your team.",
      tips: "Research the company beforehand, be specific about their values"
    },
    {
      category: "Behavioral",
      question: "Tell me about a challenging project you worked on",
      sampleAnswer: "During my final year project, I faced issues with database optimization. I researched various indexing techniques, consulted with my mentor, and implemented B-tree indexing which improved query performance by 40%.",
      tips: "Use STAR method (Situation, Task, Action, Result)"
    }
  ];

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
                <Briefcase className="h-3 w-3 mr-1" />
                AKTU Placement Prep
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                AKTU Placement Prep AI
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                AKTU company-wise question bank (TCS, Wipro, Cognizant patterns), resume builder optimized for AKTU student profiles, 
                and AI mock interviews with AKTU alumni voice feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Configuration Panel */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Brain className="h-6 w-6 mr-2 text-primary" />
                  Placement Configuration
                </h2>

                {/* Company Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Target Company</label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.keys(companies).map((company) => (
                      <button
                        key={company}
                        onClick={() => setSelectedCompany(company)}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          selectedCompany === company
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold text-sm">{company}</div>
                        <div className="text-xs text-muted-foreground">
                          {companies[company].package}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Branch Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Your Branch</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["CSE", "IT", "ECE", "ME", "EE", "CE"].map((branch) => (
                      <button
                        key={branch}
                        onClick={() => setSelectedBranch(branch)}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          selectedBranch === branch
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold text-sm">{branch}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Company Info */}
                <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold mb-3 text-blue-800">
                    {companies[selectedCompany].name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {companies[selectedCompany].package}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Pattern:</span>
                      <span className="font-medium">{companies[selectedCompany].pattern}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AKTU Hiring:</span>
                      <span className="font-medium">{companies[selectedCompany].aktuHiring}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  variant="academic" 
                  size="lg" 
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Preparing Resources...
                    </>
                  ) : (
                    <>
                      <Target className="mr-2 h-5 w-5" />
                      Start Placement Prep
                    </>
                  )}
                </Button>
              </div>

              {/* Success Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  AKTU Placement Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Students Placed (2024)</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">15K+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Package</span>
                    <Badge variant="secondary">4.2 LPA</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Highest Package</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">45 LPA</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Success Rate</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">78%</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2 space-y-8">
              {isGenerating ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">Preparing Placement Resources...</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Customizing content for {companies[selectedCompany].name}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Company pattern analyzed
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Question bank loaded
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        Generating resume template...
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        Preparing mock interview...
                      </div>
                    </div>
                  </div>
                </div>
              ) : generationComplete ? (
                <Tabs defaultValue="questions" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="questions" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Question Bank
                    </TabsTrigger>
                    <TabsTrigger value="resume" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Resume Builder
                    </TabsTrigger>
                    <TabsTrigger value="interview" className="flex items-center gap-2">
                      <Mic className="h-4 w-4" />
                      Mock Interview
                    </TabsTrigger>
                  </TabsList>

                  {/* Question Bank */}
                  <TabsContent value="questions" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <FileText className="h-6 w-6 mr-2 text-primary" />
                          {selectedCompany} Question Bank
                        </h2>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            <Building className="h-3 w-3 mr-1" />
                            Company Specific
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-8">
                        {/* Aptitude Questions */}
                        <div>
                          <h3 className="text-lg font-bold mb-4 flex items-center">
                            <Brain className="h-5 w-5 mr-2 text-blue-600" />
                            Aptitude Questions
                          </h3>
                          <div className="space-y-4">
                            {questionBank[selectedCompany]?.aptitude?.map((q, index) => (
                              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-blue-50">
                                <h4 className="font-semibold mb-3">Q{index + 1}: {q.question}</h4>
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                  {q.options.map((option, idx) => (
                                    <div 
                                      key={idx} 
                                      className={`p-2 rounded border text-sm ${
                                        option === q.answer 
                                          ? 'bg-green-100 border-green-300 text-green-800' 
                                          : 'bg-white border-gray-200'
                                      }`}
                                    >
                                      {String.fromCharCode(65 + idx)}. {option}
                                    </div>
                                  ))}
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded p-3">
                                  <strong className="text-green-800">Answer: {q.answer}</strong>
                                  <p className="text-sm text-green-700 mt-1">{q.explanation}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technical Questions */}
                        <div>
                          <h3 className="text-lg font-bold mb-4 flex items-center">
                            <Code className="h-5 w-5 mr-2 text-green-600" />
                            Technical Questions
                          </h3>
                          <div className="space-y-4">
                            {questionBank[selectedCompany]?.technical?.map((q, index) => (
                              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-green-50">
                                <h4 className="font-semibold mb-3">Q{index + 1}: {q.question}</h4>
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                  {q.options.map((option, idx) => (
                                    <div 
                                      key={idx} 
                                      className={`p-2 rounded border text-sm ${
                                        option === q.answer 
                                          ? 'bg-green-100 border-green-300 text-green-800' 
                                          : 'bg-white border-gray-200'
                                      }`}
                                    >
                                      {String.fromCharCode(65 + idx)}. {option}
                                    </div>
                                  ))}
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded p-3">
                                  <strong className="text-green-800">Answer: {q.answer}</strong>
                                  <p className="text-sm text-green-700 mt-1">{q.explanation}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Coding Questions */}
                        <div>
                          <h3 className="text-lg font-bold mb-4 flex items-center">
                            <Code className="h-5 w-5 mr-2 text-purple-600" />
                            Coding Questions
                          </h3>
                          <div className="space-y-4">
                            {questionBank[selectedCompany]?.coding?.map((q, index) => (
                              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-purple-50">
                                <h4 className="font-semibold mb-3">Q{index + 1}: {q.question}</h4>
                                <div className="bg-gray-900 rounded-lg p-4 mb-3">
                                  <pre className="text-green-400 text-sm overflow-x-auto">
                                    <code>{q.solution}</code>
                                  </pre>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  Language: {q.language}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Resume Builder */}
                  <TabsContent value="resume" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <Users className="h-6 w-6 mr-2 text-primary" />
                          AKTU-Optimized Resume Builder
                        </h2>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Template
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Resume Structure */}
                        <div className="border border-gray-200 rounded-lg p-6">
                          <h3 className="font-bold text-lg mb-4">Resume Structure (AKTU Format)</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {resumeTemplate.sections.map((section, index) => (
                              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                                <span className="text-sm font-medium">{section}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sample Content */}
                        <div className="border border-gray-200 rounded-lg p-6">
                          <h3 className="font-bold text-lg mb-4">Sample Content</h3>
                          
                          <div className="space-y-4">
                            <div className="bg-blue-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2 text-blue-800">Career Objective</h4>
                              <p className="text-sm text-blue-700">{resumeTemplate.aktuOptimized.objective}</p>
                            </div>

                            <div className="bg-green-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2 text-green-800">Technical Skills</h4>
                              <ul className="text-sm text-green-700 space-y-1">
                                {resumeTemplate.aktuOptimized.skills.map((skill, idx) => (
                                  <li key={idx}>• {skill}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-purple-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2 text-purple-800">Project Example</h4>
                              <div className="text-sm text-purple-700">
                                <strong>{resumeTemplate.aktuOptimized.projects[0].title}</strong>
                                <span className="text-xs ml-2">({resumeTemplate.aktuOptimized.projects[0].duration})</span>
                                <p className="mt-1">{resumeTemplate.aktuOptimized.projects[0].description}</p>
                                <p className="mt-1"><strong>Technologies:</strong> {resumeTemplate.aktuOptimized.projects[0].technologies}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Mock Interview */}
                  <TabsContent value="interview" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Mic className="h-6 w-6 mr-2 text-primary" />
                        AI Mock Interview
                      </h2>

                      <div className="space-y-6">
                        {mockInterviewQuestions.map((q, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-green-50">
                            <div className="flex items-center justify-between mb-4">
                              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                {q.category}
                              </Badge>
                              <Button variant="outline" size="sm">
                                <Mic className="h-4 w-4 mr-2" />
                                Practice Answer
                              </Button>
                            </div>
                            
                            <h3 className="font-bold text-lg mb-3">{q.question}</h3>
                            
                            <div className="bg-white rounded-lg p-4 mb-3 border border-gray-200">
                              <h4 className="font-semibold mb-2 text-green-800">Sample Answer:</h4>
                              <p className="text-sm text-gray-700">{q.sampleAnswer}</p>
                            </div>
                            
                            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                              <h4 className="font-semibold mb-1 text-yellow-800">💡 Tips:</h4>
                              <p className="text-sm text-yellow-700">{q.tips}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white">
                        <h3 className="font-bold text-lg mb-4 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          Interview Success Tips
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Before Interview:</strong>
                            <ul className="mt-2 space-y-1">
                              <li>• Research the company thoroughly</li>
                              <li>• Practice common questions</li>
                              <li>• Prepare your own questions</li>
                              <li>• Review your resume</li>
                            </ul>
                          </div>
                          <div>
                            <strong>During Interview:</strong>
                            <ul className="mt-2 space-y-1">
                              <li>• Maintain eye contact</li>
                              <li>• Be confident and honest</li>
                              <li>• Ask clarifying questions</li>
                              <li>• Show enthusiasm</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <Briefcase className="h-20 w-20 text-gray-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-2">Ready for Placement Preparation</h3>
                    <p className="text-muted-foreground max-w-md">
                      Select your target company and branch to get customized question banks, resume templates, and mock interview practice.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AKTUPlacementPrep;