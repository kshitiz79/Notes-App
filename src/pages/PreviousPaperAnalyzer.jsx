import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { branches } from "@/data/resources";
import { 
  BookOpen, ArrowLeft, Brain, TrendingUp, Target, 
  BarChart3, PieChart, Download, Share2, Clock,
  CheckCircle, AlertTriangle, Lightbulb, Star,
  FileText, Calculator, Zap, Users
} from "lucide-react";

const PreviousPaperAnalyzer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedSemester, setSelectedSemester] = useState("6");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const currentBranch = branches[selectedBranch];
  const semesterSubjects = currentBranch?.subjects[selectedSemester] || [];

  // Sample analysis data
  const analysisData = {
    questionPredictions: [
      {
        topic: "Machine Learning Algorithms",
        probability: 95,
        marks: "15-20",
        frequency: "Appears in 9/10 papers",
        type: "Long Answer",
        difficulty: "Medium"
      },
      {
        topic: "Neural Networks",
        probability: 88,
        marks: "10-15",
        frequency: "Appears in 8/10 papers", 
        type: "Short Answer",
        difficulty: "Hard"
      },
      {
        topic: "Data Preprocessing",
        probability: 82,
        marks: "8-12",
        frequency: "Appears in 7/10 papers",
        type: "Numerical",
        difficulty: "Easy"
      },
      {
        topic: "Support Vector Machines",
        probability: 75,
        marks: "10-15",
        frequency: "Appears in 6/10 papers",
        type: "Long Answer", 
        difficulty: "Medium"
      },
      {
        topic: "Decision Trees",
        probability: 68,
        marks: "5-10",
        frequency: "Appears in 5/10 papers",
        type: "Short Answer",
        difficulty: "Easy"
      }
    ],
    markDistribution: [
      { unit: "Unit 1: Introduction to ML", marks: 18, percentage: 18 },
      { unit: "Unit 2: Supervised Learning", marks: 25, percentage: 25 },
      { unit: "Unit 3: Unsupervised Learning", marks: 20, percentage: 20 },
      { unit: "Unit 4: Neural Networks", marks: 22, percentage: 22 },
      { unit: "Unit 5: Advanced Topics", marks: 15, percentage: 15 }
    ],
    weakAreas: [
      {
        topic: "Deep Learning Concepts",
        score: 45,
        recommendation: "Focus on backpropagation and gradient descent",
        resources: 3
      },
      {
        topic: "Mathematical Foundations",
        score: 52,
        recommendation: "Review linear algebra and calculus basics",
        resources: 5
      },
      {
        topic: "Algorithm Implementation",
        score: 38,
        recommendation: "Practice coding ML algorithms from scratch",
        resources: 4
      }
    ]
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Question Prediction",
      description: "AI analyzes 5+ years of papers to predict likely exam questions"
    },
    {
      icon: PieChart,
      title: "Mark Distribution",
      description: "Understand how marks are distributed across different units"
    },
    {
      icon: Target,
      title: "Weak Area Analysis",
      description: "Identify your weak areas and get personalized study recommendations"
    },
    {
      icon: FileText,
      title: "Practice Tests",
      description: "Generate custom practice tests based on historical patterns"
    }
  ];

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
                <BookOpen className="h-3 w-3 mr-1" />
                Paper Analyzer
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Previous Paper Analyzer
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Predict likely exam questions, analyze mark distribution patterns, and identify your weak areas 
                with AI-powered analysis of previous year papers.
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
                  Analysis Configuration
                </h2>

                {/* Branch Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Engineering Branch</label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(branches).map(([code, branch]) => (
                      <button
                        key={code}
                        onClick={() => setSelectedBranch(code)}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          selectedBranch === code
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold text-sm">{code}</div>
                        <div className="text-xs text-muted-foreground">{branch.name.split(' ')[0]}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Semester Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Semester</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1,2,3,4,5,6,7,8].map((sem) => (
                      <button
                        key={sem}
                        onClick={() => setSelectedSemester(sem.toString())}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          selectedSemester === sem.toString()
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold">{sem}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Subject (Optional)</label>
                  <select 
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">All Subjects</option>
                    {semesterSubjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject.replace(/-/g, ' ')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Analysis Options */}
                <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-3">Analysis Options</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Question prediction</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Mark distribution analysis</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Weak area identification</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Generate practice test</span>
                    </label>
                  </div>
                </div>

                <Button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  variant="academic" 
                  size="lg" 
                  className="w-full"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Analyzing Papers...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Start Analysis
                    </>
                  )}
                </Button>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Analysis Features</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2 space-y-8">
              {isAnalyzing ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">Analyzing Previous Papers...</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Processing 50+ previous year papers to identify patterns
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Collected papers from 2019-2024
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Extracted question patterns
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        Analyzing mark distribution...
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        Generating predictions...
                      </div>
                    </div>
                  </div>
                </div>
              ) : analysisComplete ? (
                <Tabs defaultValue="predictions" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="predictions" className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Predictions
                    </TabsTrigger>
                    <TabsTrigger value="distribution" className="flex items-center gap-2">
                      <PieChart className="h-4 w-4" />
                      Distribution
                    </TabsTrigger>
                    <TabsTrigger value="weak-areas" className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Weak Areas
                    </TabsTrigger>
                  </TabsList>

                  {/* Question Predictions */}
                  <TabsContent value="predictions" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <TrendingUp className="h-6 w-6 mr-2 text-primary" />
                          Question Predictions
                        </h2>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Export
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {analysisData.questionPredictions.map((prediction, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="font-bold text-lg mb-2">{prediction.topic}</h3>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <span className="flex items-center">
                                    <BarChart3 className="h-4 w-4 mr-1" />
                                    {prediction.frequency}
                                  </span>
                                  <span className="flex items-center">
                                    <Calculator className="h-4 w-4 mr-1" />
                                    {prediction.marks} marks
                                  </span>
                                  <Badge variant="outline" className="text-xs">
                                    {prediction.type}
                                  </Badge>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-primary mb-1">
                                  {prediction.probability}%
                                </div>
                                <Badge 
                                  variant="secondary" 
                                  className={`text-xs ${
                                    prediction.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                                    prediction.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'
                                  }`}
                                >
                                  {prediction.difficulty}
                                </Badge>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${prediction.probability}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Mark Distribution */}
                  <TabsContent value="distribution" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <PieChart className="h-6 w-6 mr-2 text-primary" />
                        Mark Distribution Analysis
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-semibold mb-4">Unit-wise Distribution</h3>
                          <div className="space-y-3">
                            {analysisData.markDistribution.map((unit, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{unit.unit}</div>
                                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div 
                                      className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full"
                                      style={{ width: `${unit.percentage}%` }}
                                    ></div>
                                  </div>
                                </div>
                                <div className="ml-4 text-right">
                                  <div className="font-bold text-primary">{unit.marks}</div>
                                  <div className="text-xs text-muted-foreground">{unit.percentage}%</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-4">Question Type Distribution</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                              <span className="font-medium">Long Answer (15-20 marks)</span>
                              <span className="font-bold text-blue-600">40%</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                              <span className="font-medium">Short Answer (5-10 marks)</span>
                              <span className="font-bold text-green-600">35%</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                              <span className="font-medium">Numerical (8-12 marks)</span>
                              <span className="font-bold text-purple-600">25%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Weak Areas */}
                  <TabsContent value="weak-areas" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Target className="h-6 w-6 mr-2 text-primary" />
                        Weak Area Analysis
                      </h2>

                      <div className="space-y-6">
                        {analysisData.weakAreas.map((area, index) => (
                          <div key={index} className="border border-red-200 rounded-lg p-6 bg-red-50">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="font-bold text-lg mb-2 flex items-center">
                                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                                  {area.topic}
                                </h3>
                                <p className="text-muted-foreground mb-3">{area.recommendation}</p>
                                <div className="flex items-center space-x-4">
                                  <span className="text-sm text-muted-foreground">
                                    {area.resources} study resources available
                                  </span>
                                  <Button variant="outline" size="sm">
                                    <BookOpen className="h-4 w-4 mr-2" />
                                    View Resources
                                  </Button>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-red-600 mb-1">
                                  {area.score}%
                                </div>
                                <div className="text-xs text-muted-foreground">Current Score</div>
                              </div>
                            </div>
                            <div className="w-full bg-red-200 rounded-full h-2">
                              <div 
                                className="bg-red-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${area.score}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                          <h3 className="font-bold text-lg mb-4 flex items-center">
                            <Lightbulb className="h-5 w-5 mr-2" />
                            Personalized Study Plan
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Button variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                              <FileText className="h-4 w-4 mr-2" />
                              Generate Practice Test
                            </Button>
                            <Button variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                              <Users className="h-4 w-4 mr-2" />
                              Join Study Group
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <BookOpen className="h-20 w-20 text-gray-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Analyze</h3>
                    <p className="text-muted-foreground max-w-md">
                      Select your branch, semester, and subject, then click "Start Analysis" to get AI-powered insights from previous year papers.
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

export default PreviousPaperAnalyzer;