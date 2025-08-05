import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Zap, ArrowLeft, Brain, Download, Share2, Copy,
  Clock, CheckCircle, Star, Target, BookOpen,
  Calculator, FileText, Award, TrendingUp
} from "lucide-react";

const AKTUCrashCourse = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Data-Structures");
  const [selectedDays, setSelectedDays] = useState("7");
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

  const crashCourseData = {
    revisionNotes: `# Data Structures - 7-Day Crash Course

## Day 1-2: Arrays & Linked Lists (40% weightage)
### Must-Know Concepts:
- Array operations: insertion, deletion, traversal
- Linked List types: Singly, Doubly, Circular
- **AKTU Favorite**: Linked List implementation in C++

### Quick Revision Points:
✓ Array indexing starts from 0
✓ Linked List: Dynamic memory allocation
✓ Time complexity: Array access O(1), LL access O(n)

### Expected Questions:
1. Write a program to implement singly linked list
2. Compare arrays vs linked lists
3. Reverse a linked list

## Day 3-4: Stacks & Queues (35% weightage)
### Must-Know Concepts:
- Stack: LIFO principle, push/pop operations
- Queue: FIFO principle, enqueue/dequeue
- **AKTU Favorite**: Infix to Postfix conversion

### Quick Revision Points:
✓ Stack applications: Expression evaluation, recursion
✓ Queue types: Simple, Circular, Priority
✓ Implementation using arrays and linked lists

### Expected Questions:
1. Convert infix to postfix expression
2. Implement stack using arrays
3. Applications of stack and queue

## Day 5: Trees (20% weightage)
### Must-Know Concepts:
- Binary tree properties and traversals
- Binary Search Tree operations
- **AKTU Favorite**: Tree traversals (Inorder, Preorder, Postorder)

### Quick Revision Points:
✓ Tree traversal algorithms
✓ BST: Left < Root < Right
✓ Height vs Depth concepts

## Day 6: Graphs & Sorting (15% weightage)
### Must-Know Concepts:
- Graph representation: Adjacency matrix/list
- BFS and DFS traversals
- Basic sorting algorithms

### Quick Revision Points:
✓ Graph traversal algorithms
✓ Sorting: Bubble, Selection, Insertion
✓ Time complexity analysis

## Day 7: Revision & Practice
### Focus Areas:
- Previous year questions
- Important algorithms implementation
- Time complexity analysis`,

    flashcards: [
      {
        front: "What is the time complexity of accessing an element in an array?",
        back: "O(1) - Constant time, as we can directly access using index",
        category: "Arrays",
        difficulty: "Easy"
      },
      {
        front: "What is the difference between Stack and Queue?",
        back: "Stack: LIFO (Last In First Out)\nQueue: FIFO (First In First Out)",
        category: "Data Structures",
        difficulty: "Easy"
      },
      {
        front: "How do you convert Infix to Postfix?",
        back: "1. Scan from left to right\n2. If operand, add to output\n3. If operator, check precedence\n4. Use stack for operators",
        category: "Stacks",
        difficulty: "Medium"
      },
      {
        front: "What are the three tree traversal methods?",
        back: "1. Inorder: Left → Root → Right\n2. Preorder: Root → Left → Right\n3. Postorder: Left → Right → Root",
        category: "Trees",
        difficulty: "Medium"
      }
    ],

    formulaSheets: {
      "Time Complexity": [
        "Array Access: O(1)",
        "Linear Search: O(n)",
        "Binary Search: O(log n)",
        "Bubble Sort: O(n²)",
        "Quick Sort: O(n log n)",
        "Merge Sort: O(n log n)"
      ],
      "Space Complexity": [
        "Array: O(n)",
        "Linked List: O(n)",
        "Stack: O(n)",
        "Queue: O(n)",
        "Binary Tree: O(n)"
      ],
      "Important Formulas": [
        "Tree Height: log₂(n+1) - 1 (complete binary tree)",
        "Array Size: n elements = n * sizeof(datatype) bytes",
        "Linked List Memory: n * (data + pointer) bytes"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-orange-50 via-white to-red-50 border-b border-gray-200">
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
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                <Zap className="h-3 w-3 mr-1" />
                AKTU Crash Course
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                AKTU Exam Crash Course Generator
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                AI creates last-minute revision notes based on past 5 years' papers, smart flashcards for quick revision, 
                and unit-wise important formula sheets automatically extracted from notes.
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
                  Crash Course Setup
                </h2>

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

                {/* Days Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Study Duration</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["3", "7", "15"].map((days) => (
                      <button
                        key={days}
                        onClick={() => setSelectedDays(days)}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          selectedDays === days
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold">{days}</div>
                        <div className="text-xs text-muted-foreground">Days</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Course Features */}
                <div className="mb-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="font-semibold mb-3 text-orange-800">Course Features</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Last-minute revision notes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Smart flashcards (Anki-style)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Formula sheets</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Practice questions</span>
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
                      Creating Crash Course...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-5 w-5" />
                      Generate Crash Course
                    </>
                  )}
                </Button>
              </div>

              {/* Course Stats */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Success Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Students Helped</span>
                    <Badge variant="secondary">10K+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Score Improvement</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">+15%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Success Rate</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">92%</Badge>
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
                    <h3 className="text-lg font-semibold mb-2">Creating Your Crash Course...</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Analyzing 5 years of AKTU papers to create optimized study plan
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Analyzed previous year patterns
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Identified high-weightage topics
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        Creating revision notes...
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        Generating flashcards...
                      </div>
                    </div>
                  </div>
                </div>
              ) : generationComplete ? (
                <Tabs defaultValue="notes" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="notes" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Revision Notes
                    </TabsTrigger>
                    <TabsTrigger value="flashcards" className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Flashcards
                    </TabsTrigger>
                    <TabsTrigger value="formulas" className="flex items-center gap-2">
                      <Calculator className="h-4 w-4" />
                      Formulas
                    </TabsTrigger>
                  </TabsList>

                  {/* Revision Notes */}
                  <TabsContent value="notes" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <FileText className="h-6 w-6 mr-2 text-primary" />
                          Last-Minute Revision Notes
                        </h2>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
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
                            {crashCourseData.revisionNotes}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Flashcards */}
                  <TabsContent value="flashcards" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Brain className="h-6 w-6 mr-2 text-primary" />
                        Smart Flashcards (Anki-Style)
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {crashCourseData.flashcards.map((card, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                {card.category}
                              </Badge>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${
                                  card.difficulty === 'Easy' ? 'border-green-500 text-green-700' :
                                  card.difficulty === 'Medium' ? 'border-yellow-500 text-yellow-700' :
                                  'border-red-500 text-red-700'
                                }`}
                              >
                                {card.difficulty}
                              </Badge>
                            </div>
                            
                            <div className="mb-4">
                              <h3 className="font-semibold mb-2 text-blue-800">Question:</h3>
                              <p className="text-sm">{card.front}</p>
                            </div>
                            
                            <div className="border-t pt-4">
                              <h3 className="font-semibold mb-2 text-green-800">Answer:</h3>
                              <p className="text-sm whitespace-pre-line">{card.back}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                        <h3 className="font-bold text-lg mb-4 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          Spaced Repetition Schedule
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <strong>Day 1-2:</strong> Review all cards
                          </div>
                          <div>
                            <strong>Day 3-4:</strong> Focus on difficult cards
                          </div>
                          <div>
                            <strong>Day 5-7:</strong> Quick review of all cards
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Formula Sheets */}
                  <TabsContent value="formulas" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Calculator className="h-6 w-6 mr-2 text-primary" />
                        Important Formula Sheets
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Object.entries(crashCourseData.formulaSheets).map(([category, formulas], index) => (
                          <div key={category} className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-gray-50 to-blue-50">
                            <h3 className="font-bold text-lg mb-4 flex items-center">
                              <Star className="h-5 w-5 text-yellow-500 mr-2" />
                              {category}
                            </h3>
                            <div className="space-y-3">
                              {formulas.map((formula, idx) => (
                                <div key={idx} className="bg-white rounded-lg p-3 border border-gray-200">
                                  <code className="text-sm font-mono text-blue-800">{formula}</code>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h3 className="font-bold text-lg mb-4 flex items-center text-yellow-800">
                          <Target className="h-5 w-5 mr-2" />
                          Quick Revision Tips
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
                          <div>
                            <strong>Memory Techniques:</strong>
                            <ul className="mt-2 space-y-1">
                              <li>• Use mnemonics for formulas</li>
                              <li>• Practice with real examples</li>
                              <li>• Create visual associations</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Exam Strategy:</strong>
                            <ul className="mt-2 space-y-1">
                              <li>• Memorize high-frequency formulas first</li>
                              <li>• Practice derivations for complex formulas</li>
                              <li>• Keep a quick reference sheet</li>
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
                    <Zap className="h-20 w-20 text-gray-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Create Crash Course</h3>
                    <p className="text-muted-foreground max-w-md">
                      Select your subject and study duration to generate a personalized crash course with revision notes, flashcards, and formula sheets.
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

export default AKTUCrashCourse;