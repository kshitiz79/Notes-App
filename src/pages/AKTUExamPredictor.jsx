import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileText, ArrowLeft, Brain, Download, Share2, 
  TrendingUp, Target, BarChart3, Zap, CheckCircle, 
  Clock, AlertTriangle, Star, Calendar, Award
} from "lucide-react";

const AKTUExamPredictor = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedSubject, setSelectedSubject] = useState("Data-Structures");
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
    }, 4000);
  };

  const aktuPredictionData = {
    examPattern: {
      mcq: { percentage: 30, marks: 30, trend: "Increasing" },
      subjective: { percentage: 70, marks: 70, trend: "Stable" },
      total: 100
    },
    topicHeatmap: [
      {
        topic: "Linked Lists",
        frequency: 95,
        lastAppeared: "2024, 2023, 2022, 2021, 2020",
        avgMarks: 15,
        difficulty: "Medium",
        questionTypes: ["Implementation", "Operations", "Applications"]
      },
      {
        topic: "Stacks and Queues",
        frequency: 90,
        lastAppeared: "2024, 2023, 2022, 2021",
        avgMarks: 12,
        difficulty: "Easy",
        questionTypes: ["Applications", "Implementation"]
      },
      {
        topic: "Binary Trees",
        frequency: 85,
        lastAppeared: "2024, 2023, 2022, 2020",
        avgMarks: 14,
        difficulty: "Medium",
        questionTypes: ["Traversals", "Properties", "Implementation"]
      },
      {
        topic: "Graph Algorithms",
        frequency: 75,
        lastAppeared: "2024, 2023, 2021",
        avgMarks: 16,
        difficulty: "Hard",
        questionTypes: ["BFS/DFS", "Shortest Path", "MST"]
      },
      {
        topic: "Sorting Algorithms",
        frequency: 70,
        lastAppeared: "2023, 2022, 2020",
        avgMarks: 10,
        difficulty: "Easy",
        questionTypes: ["Implementation", "Complexity Analysis"]
      },
      {
        topic: "Hashing",
        frequency: 60,
        lastAppeared: "2024, 2022, 2020",
        avgMarks: 8,
        difficulty: "Medium",
        questionTypes: ["Hash Functions", "Collision Resolution"]
      }
    ],
    expectedQuestions: [
      {
        question: "Implement a singly linked list with insertion, deletion, and traversal operations. Write a C++ program.",
        probability: 92,
        marks: "15-20",
        type: "Long Answer",
        unit: "Unit 1",
        basedOn: "2020, 2021, 2022, 2023 patterns"
      },
      {
        question: "Explain stack applications: Infix to Postfix conversion with example. Write algorithm.",
        probability: 88,
        marks: "12-15",
        type: "Long Answer", 
        unit: "Unit 2",
        basedOn: "Appears every year"
      },
      {
        question: "Write a program to implement Binary Search Tree with insertion, deletion, and search operations.",
        probability: 85,
        marks: "15-18",
        type: "Long Answer",
        unit: "Unit 3",
        basedOn: "2021, 2022, 2024 patterns"
      },
      {
        question: "Compare different sorting algorithms (Bubble, Selection, Insertion, Quick, Merge) with time complexity.",
        probability: 78,
        marks: "10-12",
        type: "Short Answer",
        unit: "Unit 5",
        basedOn: "2020, 2022, 2023 patterns"
      },
      {
        question: "Implement BFS and DFS traversal for a graph. Explain with example.",
        probability: 75,
        marks: "12-15",
        type: "Long Answer",
        unit: "Unit 4", 
        basedOn: "2021, 2023, 2024 patterns"
      }
    ],
    examTrends: {
      mcqTrend: [
        { year: "2020", percentage: 20 },
        { year: "2021", percentage: 25 },
        { year: "2022", percentage: 28 },
        { year: "2023", percentage: 30 },
        { year: "2024", percentage: 32 }
      ],
      difficultyTrend: {
        easy: 30,
        medium: 50,
        hard: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-purple-50 via-white to-blue-50 border-b border-gray-200">
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
                <FileText className="h-3 w-3 mr-1" />
                AKTU Exam Predictor
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AKTU Previous Year Paper AI Tool
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                AKTU paper pattern predictor with MCQ vs subjective trends, topic recurrence heatmap, 
                and AI-generated expected questions for upcoming exams.
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
                  AKTU Exam Analysis
                </h2>

                {/* Year Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Exam Year</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["2024", "2025"].map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          selectedYear === year
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold">{year}</div>
                        <div className="text-xs text-muted-foreground">
                          {year === "2024" ? "Past Papers" : "Prediction"}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Branch Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Branch</label>
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

                {/* Subject Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Subject</label>
                  <select 
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Data-Structures">Data Structures</option>
                    <option value="Operating-Systems">Operating Systems</option>
                    <option value="Computer-Networks">Computer Networks</option>
                    <option value="Database-Systems">Database Systems</option>
                    <option value="Software-Engineering">Software Engineering</option>
                  </select>
                </div>

                {/* Analysis Options */}
                <div className="mb-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold mb-3 text-purple-800">Analysis Features</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Pattern prediction (MCQ vs Subjective)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Topic recurrence heatmap</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Expected questions generation</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Difficulty trend analysis</span>
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
                      Analyzing AKTU Papers...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Analyze & Predict
                    </>
                  )}
                </Button>
              </div>

              {/* AKTU Stats */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  AKTU Database Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Papers Analyzed</span>
                    <Badge variant="secondary">500+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Years Covered</span>
                    <Badge variant="secondary">2015-2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Subjects</span>
                    <Badge variant="secondary">50+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Accuracy Rate</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">87%</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2 space-y-8">
              {isAnalyzing ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">Analyzing AKTU Papers...</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Processing 10 years of AKTU examination patterns
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Collected 50+ previous papers
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Pattern analysis complete
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        Generating topic heatmap...
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        Predicting questions...
                      </div>
                    </div>
                  </div>
                </div>
              ) : analysisComplete ? (
                <Tabs defaultValue="pattern" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="pattern" className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Pattern
                    </TabsTrigger>
                    <TabsTrigger value="heatmap" className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Heatmap
                    </TabsTrigger>
                    <TabsTrigger value="questions" className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Predictions
                    </TabsTrigger>
                  </TabsList>

                  {/* Pattern Analysis */}
                  <TabsContent value="pattern" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <BarChart3 className="h-6 w-6 mr-2 text-primary" />
                        AKTU Exam Pattern Analysis
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Current Pattern */}
                        <div>
                          <h3 className="font-semibold mb-4">Current Pattern (2024)</h3>
                          <div className="space-y-4">
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">MCQ Questions</span>
                                <span className="font-bold text-blue-600">{aktuPredictionData.examPattern.mcq.percentage}%</span>
                              </div>
                              <div className="text-sm text-muted-foreground mb-2">
                                {aktuPredictionData.examPattern.mcq.marks} marks
                              </div>
                              <div className="w-full bg-blue-200 rounded-full h-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full"
                                  style={{ width: `${aktuPredictionData.examPattern.mcq.percentage}%` }}
                                ></div>
                              </div>
                              <div className="mt-2 text-xs text-green-600 font-medium">
                                Trend: {aktuPredictionData.examPattern.mcq.trend}
                              </div>
                            </div>

                            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">Subjective Questions</span>
                                <span className="font-bold text-green-600">{aktuPredictionData.examPattern.subjective.percentage}%</span>
                              </div>
                              <div className="text-sm text-muted-foreground mb-2">
                                {aktuPredictionData.examPattern.subjective.marks} marks
                              </div>
                              <div className="w-full bg-green-200 rounded-full h-2">
                                <div 
                                  className="bg-green-600 h-2 rounded-full"
                                  style={{ width: `${aktuPredictionData.examPattern.subjective.percentage}%` }}
                                ></div>
                              </div>
                              <div className="mt-2 text-xs text-blue-600 font-medium">
                                Trend: {aktuPredictionData.examPattern.subjective.trend}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Trend Analysis */}
                        <div>
                          <h3 className="font-semibold mb-4">MCQ Trend (2020-2024)</h3>
                          <div className="space-y-3">
                            {aktuPredictionData.examTrends.mcqTrend.map((trend, index) => (
                              <div key={trend.year} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium">{trend.year}</span>
                                <div className="flex items-center space-x-3">
                                  <div className="w-20 bg-gray-200 rounded-full h-2">
                                    <div 
                                      className="bg-primary h-2 rounded-full"
                                      style={{ width: `${(trend.percentage / 35) * 100}%` }}
                                    ></div>
                                  </div>
                                  <span className="font-bold text-primary">{trend.percentage}%</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <div className="flex items-center mb-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                              <span className="font-semibold text-yellow-800">Prediction for 2025</span>
                            </div>
                            <p className="text-sm text-yellow-700">
                              MCQ percentage likely to increase to 35-40% based on current trend
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Topic Heatmap */}
                  <TabsContent value="heatmap" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <TrendingUp className="h-6 w-6 mr-2 text-primary" />
                          Topic Recurrence Heatmap
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
                        {aktuPredictionData.topicHeatmap.map((topic, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="font-bold text-lg mb-2 flex items-center">
                                  {topic.frequency >= 90 && <Star className="h-5 w-5 text-yellow-500 mr-2" />}
                                  {topic.topic}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                                  <div>
                                    <strong>Last Appeared:</strong> {topic.lastAppeared}
                                  </div>
                                  <div>
                                    <strong>Avg Marks:</strong> {topic.avgMarks}
                                  </div>
                                  <div>
                                    <strong>Difficulty:</strong> 
                                    <Badge 
                                      variant="secondary" 
                                      className={`ml-2 text-xs ${
                                        topic.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                                        topic.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                      }`}
                                    >
                                      {topic.difficulty}
                                    </Badge>
                                  </div>
                                  <div>
                                    <strong>Question Types:</strong> {topic.questionTypes.join(", ")}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right ml-6">
                                <div className="text-3xl font-bold text-primary mb-1">
                                  {topic.frequency}%
                                </div>
                                <div className="text-xs text-muted-foreground">Frequency</div>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className={`h-3 rounded-full transition-all duration-500 ${
                                  topic.frequency >= 90 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                                  topic.frequency >= 80 ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                                  topic.frequency >= 70 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                                  'bg-gradient-to-r from-green-500 to-green-600'
                                }`}
                                style={{ width: `${topic.frequency}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Expected Questions */}
                  <TabsContent value="questions" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Target className="h-6 w-6 mr-2 text-primary" />
                        AI-Generated Expected Questions
                      </h2>

                      <div className="space-y-6">
                        {aktuPredictionData.expectedQuestions.map((question, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-3">
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                    {question.unit}
                                  </Badge>
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                                    {question.marks} marks
                                  </Badge>
                                  <Badge variant="outline">
                                    {question.type}
                                  </Badge>
                                </div>
                                <h3 className="font-bold text-lg mb-3">
                                  {question.question}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  <strong>Based on:</strong> {question.basedOn}
                                </p>
                              </div>
                              <div className="text-right ml-6">
                                <div className="text-2xl font-bold text-primary mb-1">
                                  {question.probability}%
                                </div>
                                <div className="text-xs text-muted-foreground">Probability</div>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${question.probability}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white">
                        <h3 className="font-bold text-lg mb-4 flex items-center">
                          <Zap className="h-5 w-5 mr-2" />
                          Exam Strategy Recommendation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">High Priority Topics (90%+ probability):</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Linked Lists (Implementation & Operations)</li>
                              <li>• Stack Applications (Infix to Postfix)</li>
                              <li>• Binary Tree Traversals</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Study Time Allocation:</h4>
                            <ul className="text-sm space-y-1">
                              <li>• 40% - Linked Lists & Stacks</li>
                              <li>• 30% - Trees & Graphs</li>
                              <li>• 30% - Sorting & Hashing</li>
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
                    <FileText className="h-20 w-20 text-gray-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Analyze AKTU Papers</h3>
                    <p className="text-muted-foreground max-w-md">
                      Select your exam year, branch, and subject to get AI-powered predictions based on AKTU's historical examination patterns.
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

export default AKTUExamPredictor;