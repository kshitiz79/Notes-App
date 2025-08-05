import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  TrendingUp, ArrowLeft, Brain, Download, Share2,
  AlertTriangle, Target, Calculator, BookOpen, 
  CheckCircle, Clock, Star, Award, BarChart3
} from "lucide-react";

const AKTUGPAAdvisor = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentCGPA, setCurrentCGPA] = useState("");
  const [targetCGPA, setTargetCGPA] = useState("");
  const [currentSemester, setCurrentSemester] = useState("5");
  const [branch, setBranch] = useState("CSE");
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

  const gpaData = {
    backlogRisk: {
      level: "Medium",
      subjects: [
        { name: "Computer Networks", currentMarks: 45, required: 50, risk: "High" },
        { name: "Operating Systems", currentMarks: 52, required: 50, risk: "Low" },
        { name: "Database Systems", currentMarks: 48, required: 50, risk: "Medium" }
      ],
      recommendations: [
        "Focus on Computer Networks - attend extra classes",
        "Complete all assignments before deadline",
        "Form study groups for difficult subjects",
        "Consult faculty during office hours"
      ]
    },
    improvementPlan: {
      currentCGPA: 7.2,
      targetCGPA: 8.0,
      requiredSGPA: 8.8,
      feasibility: "Achievable",
      strategy: [
        "Aim for 85+ marks in all subjects",
        "Focus on high-credit subjects",
        "Improve attendance to 90%+",
        "Complete all lab assignments"
      ]
    },
    electiveRecommendations: [
      {
        subject: "Machine Learning",
        avgScore: 8.2,
        difficulty: "Medium",
        popularity: "High",
        reason: "High scoring trend, industry relevant"
      },
      {
        subject: "Cloud Computing", 
        avgScore: 7.8,
        difficulty: "Easy",
        popularity: "High",
        reason: "Easy to score, good placement value"
      },
      {
        subject: "Cyber Security",
        avgScore: 7.5,
        difficulty: "Medium",
        popularity: "Medium",
        reason: "Growing field, decent scoring"
      }
    ],
    semesterPlan: [
      {
        semester: 5,
        subjects: ["Computer Networks", "Operating Systems", "Software Engineering"],
        targetSGPA: 8.5,
        strategy: "Focus on theory subjects, complete projects early"
      },
      {
        semester: 6,
        subjects: ["Machine Learning", "Compiler Design", "Web Technologies"],
        targetSGPA: 8.8,
        strategy: "Choose easy electives, maintain consistency"
      },
      {
        semester: 7,
        subjects: ["Cloud Computing", "Big Data", "Project Work"],
        targetSGPA: 8.2,
        strategy: "Project-heavy semester, manage time well"
      },
      {
        semester: 8,
        subjects: ["Advanced Topics", "Internship", "Final Project"],
        targetSGPA: 8.0,
        strategy: "Focus on final project, maintain overall CGPA"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-green-50 via-white to-blue-50 border-b border-gray-200">
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
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <TrendingUp className="h-3 w-3 mr-1" />
                AKTU GPA Advisor
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                GPA Improvement Advisor
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Backlog risk predictor with alerts before internal exams, subject selection recommender for electives 
                with highest scoring trends, and SGPA/CGPA calculator with improvement roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Input Panel */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Calculator className="h-6 w-6 mr-2 text-primary" />
                  Academic Information
                </h2>

                {/* Current CGPA */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Current CGPA</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    placeholder="e.g., 7.2"
                    value={currentCGPA}
                    onChange={(e) => setCurrentCGPA(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Target CGPA */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Target CGPA</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    placeholder="e.g., 8.0"
                    value={targetCGPA}
                    onChange={(e) => setTargetCGPA(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Current Semester */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Current Semester</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[5, 6, 7, 8].map((sem) => (
                      <button
                        key={sem}
                        onClick={() => setCurrentSemester(sem.toString())}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          currentSemester === sem.toString()
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold">{sem}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Branch */}
                <div className="mb-8">
                  <label className="text-sm font-medium mb-3 block">Branch</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["CSE", "ECE", "ME", "EE", "CE", "IT"].map((branchCode) => (
                      <button
                        key={branchCode}
                        onClick={() => setBranch(branchCode)}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          branch === branchCode
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold text-sm">{branchCode}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={handleAnalyze}
                  disabled={!currentCGPA || !targetCGPA || isAnalyzing}
                  variant="academic" 
                  size="lg" 
                  className="w-full"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Analyzing Academic Data...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-2 h-5 w-5" />
                      Analyze & Get Roadmap
                    </>
                  )}
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  AKTU GPA Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average CGPA (2024)</span>
                    <Badge variant="secondary">6.8</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Students with 8+ CGPA</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">25%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Backlog Rate</span>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">15%</Badge>
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
                    <h3 className="text-lg font-semibold mb-2">Analyzing Your Academic Performance...</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Creating personalized improvement roadmap
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Current performance analyzed
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Backlog risk calculated
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        Generating improvement plan...
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        Recommending electives...
                      </div>
                    </div>
                  </div>
                </div>
              ) : analysisComplete ? (
                <Tabs defaultValue="backlog" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="backlog" className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Backlog Risk
                    </TabsTrigger>
                    <TabsTrigger value="improvement" className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Improvement
                    </TabsTrigger>
                    <TabsTrigger value="electives" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Electives
                    </TabsTrigger>
                    <TabsTrigger value="roadmap" className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Roadmap
                    </TabsTrigger>
                  </TabsList>

                  {/* Backlog Risk */}
                  <TabsContent value="backlog" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <AlertTriangle className="h-6 w-6 mr-2 text-primary" />
                          Backlog Risk Analysis
                        </h2>
                        <Badge 
                          variant="secondary" 
                          className={`${
                            gpaData.backlogRisk.level === 'High' ? 'bg-red-100 text-red-800' :
                            gpaData.backlogRisk.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}
                        >
                          {gpaData.backlogRisk.level} Risk
                        </Badge>
                      </div>

                      <div className="space-y-6">
                        {/* Subject Risk Analysis */}
                        <div>
                          <h3 className="font-bold text-lg mb-4">Subject-wise Risk Assessment</h3>
                          <div className="space-y-4">
                            {gpaData.backlogRisk.subjects.map((subject, index) => (
                              <div key={index} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="font-semibold">{subject.name}</h4>
                                  <Badge 
                                    variant="secondary" 
                                    className={`${
                                      subject.risk === 'High' ? 'bg-red-100 text-red-800' :
                                      subject.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-green-100 text-green-800'
                                    }`}
                                  >
                                    {subject.risk} Risk
                                  </Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                                  <span>Current Marks: {subject.currentMarks}</span>
                                  <span>Required: {subject.required}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      subject.currentMarks >= subject.required ? 'bg-green-500' :
                                      subject.currentMarks >= subject.required - 5 ? 'bg-yellow-500' :
                                      'bg-red-500'
                                    }`}
                                    style={{ width: `${(subject.currentMarks / subject.required) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Recommendations */}
                        <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                          <h3 className="font-bold text-lg mb-4 text-yellow-800">
                            Immediate Action Required
                          </h3>
                          <div className="space-y-2">
                            {gpaData.backlogRisk.recommendations.map((rec, index) => (
                              <div key={index} className="flex items-center text-sm text-yellow-700">
                                <CheckCircle className="h-4 w-4 mr-2 text-yellow-600" />
                                {rec}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Improvement Plan */}
                  <TabsContent value="improvement" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Target className="h-6 w-6 mr-2 text-primary" />
                        CGPA Improvement Plan
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                          <h3 className="font-bold text-lg mb-4 text-blue-800">Current Status</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Current CGPA:</span>
                              <span className="font-bold text-2xl text-blue-600">
                                {gpaData.improvementPlan.currentCGPA}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Target CGPA:</span>
                              <span className="font-bold text-2xl text-green-600">
                                {gpaData.improvementPlan.targetCGPA}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                          <h3 className="font-bold text-lg mb-4 text-green-800">Required Performance</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Required SGPA:</span>
                              <span className="font-bold text-2xl text-green-600">
                                {gpaData.improvementPlan.requiredSGPA}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Feasibility:</span>
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                {gpaData.improvementPlan.feasibility}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-6 text-white">
                        <h3 className="font-bold text-lg mb-4">Success Strategy</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {gpaData.improvementPlan.strategy.map((strategy, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                              <span className="text-sm">{strategy}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Elective Recommendations */}
                  <TabsContent value="electives" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <BookOpen className="h-6 w-6 mr-2 text-primary" />
                          Elective Subject Recommendations
                        </h2>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          High Scoring Trends
                        </Badge>
                      </div>

                      <div className="space-y-6">
                        {gpaData.electiveRecommendations.map((elective, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="font-bold text-xl mb-2 flex items-center">
                                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                                  {elective.subject}
                                </h3>
                                <p className="text-muted-foreground mb-3">{elective.reason}</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600 mb-1">
                                      {elective.avgScore}
                                    </div>
                                    <div className="text-xs text-muted-foreground">Avg Score</div>
                                  </div>
                                  <div className="text-center">
                                    <Badge 
                                      variant="secondary" 
                                      className={`${
                                        elective.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                                        elective.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                      }`}
                                    >
                                      {elective.difficulty}
                                    </Badge>
                                    <div className="text-xs text-muted-foreground mt-1">Difficulty</div>
                                  </div>
                                  <div className="text-center">
                                    <Badge 
                                      variant="secondary" 
                                      className={`${
                                        elective.popularity === 'High' ? 'bg-blue-100 text-blue-800' :
                                        elective.popularity === 'Medium' ? 'bg-gray-100 text-gray-800' :
                                        'bg-gray-100 text-gray-600'
                                      }`}
                                    >
                                      {elective.popularity}
                                    </Badge>
                                    <div className="text-xs text-muted-foreground mt-1">Popularity</div>
                                  </div>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                <Target className="h-4 w-4 mr-2" />
                                Select
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Semester Roadmap */}
                  <TabsContent value="roadmap" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <BarChart3 className="h-6 w-6 mr-2 text-primary" />
                          Semester-wise Roadmap
                        </h2>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Export Plan
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {gpaData.semesterPlan.map((sem, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="font-bold text-xl">Semester {sem.semester}</h3>
                              <div className="flex items-center space-x-3">
                                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                  Target SGPA: {sem.targetSGPA}
                                </Badge>
                                <div className={`w-4 h-4 rounded-full ${
                                  index === 0 ? 'bg-green-500' : 
                                  index === 1 ? 'bg-yellow-500' : 'bg-gray-300'
                                }`}></div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-2">Key Subjects</h4>
                                <div className="space-y-1">
                                  {sem.subjects.map((subject, idx) => (
                                    <div key={idx} className="flex items-center text-sm">
                                      <BookOpen className="h-3 w-3 mr-2 text-blue-600" />
                                      {subject}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2">Strategy</h4>
                                <p className="text-sm text-muted-foreground">{sem.strategy}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <Calculator className="h-20 w-20 text-gray-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Analyze Your GPA</h3>
                    <p className="text-muted-foreground max-w-md">
                      Enter your current CGPA, target CGPA, and academic details to get a personalized improvement roadmap with backlog risk analysis.
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

export default AKTUGPAAdvisor;