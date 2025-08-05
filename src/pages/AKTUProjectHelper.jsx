import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Rocket, ArrowLeft, Brain, Download, Share2, Copy,
  Lightbulb, FileText, Video, CheckCircle, Clock,
  Code, Award, Target, TrendingUp, Star
} from "lucide-react";

const AKTUProjectHelper = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedYear, setSelectedYear] = useState("4");
  const [projectType, setProjectType] = useState("major");
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
    }, 4000);
  };

  const projectIdeas = {
    "CSE": {
      "major": [
        {
          title: "AI-Powered Student Performance Prediction System",
          description: "Machine learning system to predict student performance and suggest improvement strategies",
          technologies: ["Python", "Flask", "Scikit-learn", "MySQL", "React"],
          difficulty: "High",
          duration: "6 months",
          aktuApproved: true
        },
        {
          title: "Smart Campus Management System",
          description: "IoT-based system for managing campus resources, attendance, and security",
          technologies: ["Java", "Spring Boot", "Arduino", "MySQL", "Android"],
          difficulty: "Medium",
          duration: "5 months",
          aktuApproved: true
        },
        {
          title: "Blockchain-Based Certificate Verification System",
          description: "Secure certificate verification using blockchain technology",
          technologies: ["Solidity", "Web3.js", "Node.js", "MongoDB", "React"],
          difficulty: "High",
          duration: "6 months",
          aktuApproved: true
        }
      ],
      "minor": [
        {
          title: "Online Quiz Management System",
          description: "Web-based quiz platform with automatic evaluation",
          technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
          difficulty: "Low",
          duration: "2 months",
          aktuApproved: true
        },
        {
          title: "Library Management System",
          description: "Digital library system with book tracking and user management",
          technologies: ["Java", "MySQL", "Swing", "JDBC"],
          difficulty: "Medium",
          duration: "3 months",
          aktuApproved: true
        }
      ]
    }
  };

  const sampleProjectReport = {
    title: "AI-Powered Student Performance Prediction System",
    abstract: `This project presents an AI-powered system designed to predict student performance and provide personalized recommendations for academic improvement. The system utilizes machine learning algorithms to analyze historical academic data, attendance records, and engagement metrics to forecast student outcomes.

The system is built using Python with Flask framework for the backend, React for the frontend, and MySQL for data storage. Machine learning models including Random Forest, SVM, and Neural Networks are implemented using Scikit-learn library.

Key features include real-time performance tracking, early warning systems for at-risk students, personalized study recommendations, and comprehensive analytics dashboards for educators. The system achieved 87% accuracy in predicting student performance with a precision of 0.85 and recall of 0.82.

The project follows AKTU guidelines for major project development and includes comprehensive documentation, testing, and deployment procedures.`,

    chapters: [
      "1. Introduction",
      "2. Literature Review", 
      "3. System Analysis and Design",
      "4. Implementation",
      "5. Testing and Validation",
      "6. Results and Discussion",
      "7. Conclusion and Future Work",
      "8. References",
      "9. Appendices"
    ],

    timeline: [
      { phase: "Requirement Analysis", duration: "2 weeks", status: "completed" },
      { phase: "System Design", duration: "3 weeks", status: "completed" },
      { phase: "Database Design", duration: "1 week", status: "completed" },
      { phase: "Frontend Development", duration: "4 weeks", status: "in-progress" },
      { phase: "Backend Development", duration: "4 weeks", status: "pending" },
      { phase: "ML Model Training", duration: "3 weeks", status: "pending" },
      { phase: "Integration & Testing", duration: "2 weeks", status: "pending" },
      { phase: "Documentation", duration: "1 week", status: "pending" }
    ]
  };

  const demoScript = `# Demo Video Script: AI-Powered Student Performance Prediction System

## Opening (0:00 - 0:30)
**[Screen: Title slide with project name]**
"Hello, I'm [Your Name], and today I'll be presenting my major project: AI-Powered Student Performance Prediction System, developed as part of my B.Tech curriculum at AKTU."

**[Screen: Problem statement slide]**
"The problem we're addressing is the lack of early intervention systems to identify at-risk students and provide timely support."

## System Overview (0:30 - 1:30)
**[Screen: System architecture diagram]**
"Our system uses machine learning algorithms to analyze student data and predict performance outcomes. The architecture consists of three main components:"

1. **Data Collection Module**: Gathers academic records, attendance, and engagement data
2. **ML Processing Engine**: Implements Random Forest and Neural Network models
3. **Visualization Dashboard**: Provides insights to students and faculty

## Live Demo (1:30 - 4:00)
**[Screen: Login page]**
"Let me demonstrate the system. First, I'll log in as an administrator."

**[Screen: Dashboard]**
"Here's the main dashboard showing overall student performance metrics. We can see that 78% of students are performing well, 15% need attention, and 7% are at risk."

**[Screen: Individual student profile]**
"Let's look at a specific student. The system shows their current performance score of 72%, attendance rate of 85%, and predicts a final grade of B+."

**[Screen: Recommendations panel]**
"Based on the analysis, the system recommends focusing on Database Systems and improving lab attendance."

## Technical Implementation (4:00 - 5:00)
**[Screen: Code snippets]**
"The machine learning model is implemented using Python and Scikit-learn. We trained the model on 5 years of historical data with features including:"
- Previous semester grades
- Attendance percentage  
- Assignment submission rates
- Quiz performance

**[Screen: Model performance metrics]**
"Our model achieved 87% accuracy with precision of 0.85 and recall of 0.82."

## Results & Impact (5:00 - 5:30)
**[Screen: Results summary]**
"The system has been tested with real data and shows promising results. Early intervention based on predictions can improve student success rates by up to 23%."

## Conclusion (5:30 - 6:00)
**[Screen: Conclusion slide]**
"This project demonstrates the potential of AI in education. Future enhancements include mobile app development and integration with LMS platforms."

**[Screen: Thank you slide]**
"Thank you for your attention. I'm happy to answer any questions."

## Q&A Preparation
**Common Questions:**
1. **"What algorithms did you use?"** - Random Forest, SVM, and Neural Networks
2. **"How did you handle data privacy?"** - Data anonymization and encryption
3. **"What's the system's scalability?"** - Designed for 10,000+ students
4. **"Future improvements?"** - Mobile app, real-time notifications, advanced analytics`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-purple-50 via-white to-pink-50 border-b border-gray-200">
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
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <Rocket className="h-3 w-3 mr-1" />
                AKTU Project Helper
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                AKTU Mini-Project Helper
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Suggests project ideas approved by AKTU guidelines, generates project reports in AKTU format, 
                and creates demo video scripts for project presentations.
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
                  Project Configuration
                </h2>

                {/* Branch Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Engineering Branch</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["CSE", "ECE", "ME", "EE", "CE", "IT"].map((branch) => (
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

                {/* Year Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Academic Year</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["3", "4"].map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          selectedYear === year
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold">{year}rd/th Year</div>
                        <div className="text-xs text-muted-foreground">
                          {year === "3" ? "Minor Project" : "Major Project"}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Type */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Project Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["minor", "major"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          projectType === type
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold capitalize">{type}</div>
                        <div className="text-xs text-muted-foreground">
                          {type === "minor" ? "3rd Year" : "4th Year"}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generation Options */}
                <div className="mb-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold mb-3 text-purple-800">Project Components</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Project ideas (AKTU approved)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Project report in AKTU format</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Demo video script</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Implementation timeline</span>
                    </label>
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
                      Generating Project...
                    </>
                  ) : (
                    <>
                      <Rocket className="mr-2 h-5 w-5" />
                      Generate Project Helper
                    </>
                  )}
                </Button>
              </div>

              {/* AKTU Guidelines */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  AKTU Project Guidelines
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Original and innovative idea</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Proper documentation format</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Working prototype/demo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Faculty supervisor approval</span>
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
                    <h3 className="text-lg font-semibold mb-2">Generating Project Helper...</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Creating AKTU-approved project ideas and documentation
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Analyzed AKTU project guidelines
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Generated project ideas
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        Creating project report...
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        Generating demo script...
                      </div>
                    </div>
                  </div>
                </div>
              ) : generationComplete ? (
                <Tabs defaultValue="ideas" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="ideas" className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      Project Ideas
                    </TabsTrigger>
                    <TabsTrigger value="report" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Report Format
                    </TabsTrigger>
                    <TabsTrigger value="demo" className="flex items-center gap-2">
                      <Video className="h-4 w-4" />
                      Demo Script
                    </TabsTrigger>
                  </TabsList>

                  {/* Project Ideas */}
                  <TabsContent value="ideas" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <Lightbulb className="h-6 w-6 mr-2 text-primary" />
                          AKTU-Approved Project Ideas
                        </h2>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <Award className="h-3 w-3 mr-1" />
                          AKTU Approved
                        </Badge>
                      </div>

                      <div className="space-y-6">
                        {projectIdeas[selectedBranch]?.[projectType]?.map((project, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="font-bold text-xl mb-2 flex items-center">
                                  {project.aktuApproved && (
                                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                                  )}
                                  {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                  {project.description}
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <strong className="text-sm">Technologies:</strong>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {project.technologies.map((tech, idx) => (
                                        <Badge key={idx} variant="outline" className="text-xs">
                                          {tech}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                  <div>
                                    <strong className="text-sm">Duration:</strong> {project.duration}
                                    <br />
                                    <strong className="text-sm">Difficulty:</strong> 
                                    <Badge 
                                      variant="secondary" 
                                      className={`ml-2 text-xs ${
                                        project.difficulty === 'Low' ? 'bg-green-100 text-green-800' :
                                        project.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                      }`}
                                    >
                                      {project.difficulty}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                {project.aktuApproved && (
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    AKTU Approved
                                  </Badge>
                                )}
                              </div>
                              <Button variant="outline" size="sm">
                                <Target className="h-4 w-4 mr-2" />
                                Select This Project
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Report Format */}
                  <TabsContent value="report" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <FileText className="h-6 w-6 mr-2 text-primary" />
                          AKTU Project Report Format
                        </h2>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download Template
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Abstract */}
                        <div className="border border-gray-200 rounded-lg p-6">
                          <h3 className="font-bold text-lg mb-3">Abstract</h3>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm leading-relaxed">{sampleProjectReport.abstract}</p>
                          </div>
                        </div>

                        {/* Chapter Structure */}
                        <div className="border border-gray-200 rounded-lg p-6">
                          <h3 className="font-bold text-lg mb-3">Chapter Structure</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {sampleProjectReport.chapters.map((chapter, index) => (
                              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                                <span className="text-sm font-medium">{chapter}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Timeline */}
                        <div className="border border-gray-200 rounded-lg p-6">
                          <h3 className="font-bold text-lg mb-3">Implementation Timeline</h3>
                          <div className="space-y-3">
                            {sampleProjectReport.timeline.map((phase, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                  <div className={`w-3 h-3 rounded-full mr-3 ${
                                    phase.status === 'completed' ? 'bg-green-500' :
                                    phase.status === 'in-progress' ? 'bg-yellow-500' :
                                    'bg-gray-300'
                                  }`}></div>
                                  <span className="font-medium">{phase.phase}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <span className="text-sm text-muted-foreground">{phase.duration}</span>
                                  <Badge 
                                    variant="secondary" 
                                    className={`text-xs ${
                                      phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                                      phase.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-gray-100 text-gray-800'
                                    }`}
                                  >
                                    {phase.status.replace('-', ' ')}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Demo Script */}
                  <TabsContent value="demo" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <Video className="h-6 w-6 mr-2 text-primary" />
                          Demo Video Script
                        </h2>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Script
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>

                      <div className="prose max-w-none">
                        <div className="bg-gray-50 rounded-lg p-6 border">
                          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                            {demoScript}
                          </pre>
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                        <h3 className="font-bold text-lg mb-4 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          Demo Presentation Tips
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Before Recording:</strong>
                            <ul className="mt-2 space-y-1">
                              <li>• Practice the script multiple times</li>
                              <li>• Test all system functionalities</li>
                              <li>• Prepare backup slides</li>
                            </ul>
                          </div>
                          <div>
                            <strong>During Recording:</strong>
                            <ul className="mt-2 space-y-1">
                              <li>• Speak clearly and at moderate pace</li>
                              <li>• Show actual working system</li>
                              <li>• Keep demo under 6 minutes</li>
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
                    <Rocket className="h-20 w-20 text-gray-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Generate Project Helper</h3>
                    <p className="text-muted-foreground max-w-md">
                      Select your branch, year, and project type to get AKTU-approved project ideas, report format, and demo script.
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

export default AKTUProjectHelper;