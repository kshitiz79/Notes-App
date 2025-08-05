import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calculator, Upload, Camera, ArrowLeft, Brain, Code, 
  CheckCircle, Clock, Zap, BookOpen, Image, Copy, 
  Share2, Download, Lightbulb, Target, TrendingUp
} from "lucide-react";

const AIQuestionSolver = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [question, setQuestion] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("mathematics");
  const [isProcessing, setIsProcessing] = useState(false);
  const [solution, setSolution] = useState("");
  const [activeTab, setActiveTab] = useState("text");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSolveQuestion = async () => {
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      const sampleSolution = `# Solution: Differential Equations

## Problem Analysis
**Given**: dy/dx + 2y = 4x
**Type**: First-order linear differential equation
**Method**: Integrating factor method

## Step-by-Step Solution

### Step 1: Identify the standard form
The equation is already in standard form: dy/dx + P(x)y = Q(x)
Where:
- P(x) = 2
- Q(x) = 4x

### Step 2: Find the integrating factor
μ(x) = e^(∫P(x)dx) = e^(∫2dx) = e^(2x)

### Step 3: Multiply the equation by integrating factor
e^(2x) · dy/dx + 2e^(2x) · y = 4x · e^(2x)

### Step 4: Recognize the left side as a derivative
d/dx[y · e^(2x)] = 4x · e^(2x)

### Step 5: Integrate both sides
∫d/dx[y · e^(2x)]dx = ∫4x · e^(2x)dx

Left side: y · e^(2x)

Right side (using integration by parts):
Let u = 4x, dv = e^(2x)dx
du = 4dx, v = (1/2)e^(2x)

∫4x · e^(2x)dx = 2x · e^(2x) - ∫2 · e^(2x)dx
                = 2x · e^(2x) - e^(2x) + C
                = e^(2x)(2x - 1) + C

### Step 6: Solve for y
y · e^(2x) = e^(2x)(2x - 1) + C
y = 2x - 1 + C · e^(-2x)

## Final Answer
**y = 2x - 1 + Ce^(-2x)**

## Verification
Let's verify by substituting back:
dy/dx = 2 - 2Ce^(-2x)
dy/dx + 2y = 2 - 2Ce^(-2x) + 2(2x - 1 + Ce^(-2x))
            = 2 - 2Ce^(-2x) + 4x - 2 + 2Ce^(-2x)
            = 4x ✓

## Key Concepts Used
- Linear differential equations
- Integrating factor method
- Integration by parts
- Verification of solutions

## Similar Problems
1. dy/dx + 3y = 6x²
2. dy/dx - y = e^x
3. x·dy/dx + y = x²`;

      setSolution(sampleSolution);
      setIsProcessing(false);
    }, 4000);
  };

  const subjects = [
    { id: "mathematics", name: "Mathematics", icon: "📐" },
    { id: "physics", name: "Physics", icon: "⚡" },
    { id: "chemistry", name: "Chemistry", icon: "🧪" },
    { id: "circuits", name: "Electrical Circuits", icon: "🔌" },
    { id: "programming", name: "Programming", icon: "💻" },
    { id: "mechanics", name: "Mechanics", icon: "⚙️" },
    { id: "thermodynamics", name: "Thermodynamics", icon: "🌡️" },
    { id: "signals", name: "Signals & Systems", icon: "📊" }
  ];

  const features = [
    {
      icon: Brain,
      title: "Step-by-Step Solutions",
      description: "Detailed breakdown of every solution with clear explanations"
    },
    {
      icon: Code,
      title: "Code Debugging",
      description: "Find and fix errors in your programming assignments"
    },
    {
      icon: Target,
      title: "Multiple Approaches",
      description: "Learn different methods to solve the same problem"
    },
    {
      icon: Lightbulb,
      title: "Concept Explanation",
      description: "Understand the underlying principles and formulas"
    }
  ];

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
                <Calculator className="h-3 w-3 mr-1" />
                Question Solver
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Question Solver
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get step-by-step solutions for engineering problems including Mathematics, Physics, Circuits, Programming, and more. 
                Our AI explains every step clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Input Section */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Calculator className="h-6 w-6 mr-2 text-primary" />
                  Enter Your Question
                </h2>

                {/* Subject Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Select Subject</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {subjects.map((subject) => (
                      <button
                        key={subject.id}
                        onClick={() => setSelectedSubject(subject.id)}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          selectedSubject === subject.id
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-lg mb-1">{subject.icon}</div>
                        <div className="text-xs font-medium">{subject.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="text" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Text
                    </TabsTrigger>
                    <TabsTrigger value="image" className="flex items-center gap-2">
                      <Camera className="h-4 w-4" />
                      Image
                    </TabsTrigger>
                    <TabsTrigger value="file" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      File
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="text" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Type or paste your question</label>
                      <textarea
                        placeholder="Enter your question here... For example:
- Solve the differential equation: dy/dx + 2y = 4x
- Find the Thevenin equivalent circuit
- Debug this Python code: def factorial(n): return n * factorial(n-1)
- Calculate the heat transfer rate through a wall"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="image" className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Upload Question Image</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Take a photo or upload an image of your question
                      </p>
                      <Button variant="outline">
                        Choose Image
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="file" className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Upload Question File</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Supports PDF, DOCX, code files (.py, .java, .cpp)
                      </p>
                      <Button variant="outline">
                        Choose File
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Solution Options */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-4">Solution Preferences</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Show step-by-step solution</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Include concept explanations</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Show alternative methods</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Generate similar practice problems</span>
                    </label>
                  </div>
                </div>

                <Button 
                  onClick={handleSolveQuestion}
                  disabled={!question.trim() || isProcessing}
                  variant="academic" 
                  size="lg" 
                  className="w-full mt-6"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Solving Question...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-2 h-5 w-5" />
                      Solve with AI
                    </>
                  )}
                </Button>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">AI Solver Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Lightbulb className="h-6 w-6 mr-2 text-primary" />
                    AI Solution
                  </h2>
                  {solution && (
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  )}
                </div>

                {isProcessing ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">AI is solving your question...</h3>
                    <p className="text-muted-foreground text-center">
                      Analyzing the problem and generating step-by-step solution
                    </p>
                    <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Problem analysis complete
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Solution method identified
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        Generating step-by-step solution...
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        Adding explanations...
                      </div>
                    </div>
                  </div>
                ) : solution ? (
                  <div className="prose max-w-none">
                    <div className="bg-gray-50 rounded-lg p-6 border">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                        {solution}
                      </pre>
                    </div>
                    
                    {/* Solution Actions */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        What's Next?
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Button variant="outline" size="sm" className="justify-start">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Practice Similar Problems
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <Brain className="h-4 w-4 mr-2" />
                          Explain Concepts
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <Calculator className="h-4 w-4 mr-2" />
                          Try Different Method
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <Share2 className="h-4 w-4 mr-2" />
                          Ask Follow-up
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <Calculator className="h-20 w-20 text-gray-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Solve</h3>
                    <p className="text-muted-foreground max-w-md">
                      Enter your question above and our AI will provide a detailed, step-by-step solution with clear explanations.
                    </p>
                  </div>
                )}
              </div>

              {/* Example Problems */}
              {!solution && !isProcessing && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Example Problems
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Solve: ∫(x² + 2x + 1)dx from 0 to 2",
                      "Find the current through R2 in the given circuit",
                      "Debug: Why does this recursive function cause stack overflow?",
                      "Calculate the efficiency of a Carnot engine"
                    ].map((example, index) => (
                      <button
                        key={index}
                        onClick={() => setQuestion(example)}
                        className="w-full text-left p-3 bg-white rounded-lg border hover:border-primary transition-colors text-sm"
                      >
                        {example}
                      </button>
                    ))}
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

export default AIQuestionSolver;