import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Code, ArrowLeft, Brain, Download, Share2, Copy,
  Play, Bug, FileText, Lightbulb, CheckCircle,
  Clock, Terminal, BookOpen, Zap, Award
} from "lucide-react";

const AKTULabAssistant = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedLab, setSelectedLab] = useState("Data-Structures");
  const [selectedExperiment, setSelectedExperiment] = useState("");
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

  const aktuLabs = {
    "Data-Structures": [
      "Implementation of Stack using Arrays",
      "Implementation of Queue using Linked List", 
      "Binary Tree Traversals",
      "Graph Traversal (BFS/DFS)",
      "Sorting Algorithms Implementation"
    ],
    "Programming-C": [
      "Basic Input/Output Operations",
      "Control Structures and Loops",
      "Functions and Recursion",
      "Arrays and Pointers",
      "File Handling in C"
    ],
    "Java-Programming": [
      "Classes and Objects",
      "Inheritance and Polymorphism",
      "Exception Handling",
      "Multithreading",
      "GUI Programming with Swing"
    ],
    "Python-Programming": [
      "Basic Python Syntax",
      "Data Structures in Python",
      "Object-Oriented Programming",
      "File I/O and Exception Handling",
      "Web Scraping with BeautifulSoup"
    ]
  };

  const sampleLabFile = {
    theory: `# Experiment 3: Implementation of Stack using Arrays

## Aim:
To implement stack data structure using arrays and perform basic operations like push, pop, and display.

## Theory:
Stack is a linear data structure that follows LIFO (Last In First Out) principle. Elements are added and removed from the same end called the top of the stack.

### Operations:
1. **Push**: Add an element to the top of stack
2. **Pop**: Remove an element from the top of stack  
3. **Peek/Top**: View the top element without removing it
4. **isEmpty**: Check if stack is empty
5. **isFull**: Check if stack is full

### Applications:
- Expression evaluation
- Function call management
- Undo operations in editors
- Browser history management

## Algorithm:

### Push Operation:
1. Check if stack is full
2. If full, display "Stack Overflow"
3. Else, increment top and add element

### Pop Operation:
1. Check if stack is empty
2. If empty, display "Stack Underflow"  
3. Else, return top element and decrement top`,

    code: `#include <stdio.h>
#include <stdlib.h>
#define MAX 100

// Stack structure
struct Stack {
    int arr[MAX];
    int top;
};

// Initialize stack
void initStack(struct Stack* s) {
    s->top = -1;
}

// Check if stack is empty
int isEmpty(struct Stack* s) {
    return s->top == -1;
}

// Check if stack is full
int isFull(struct Stack* s) {
    return s->top == MAX - 1;
}

// Push operation
void push(struct Stack* s, int data) {
    if (isFull(s)) {
        printf("Stack Overflow! Cannot push %d\\n", data);
        return;
    }
    s->arr[++s->top] = data;
    printf("Pushed %d to stack\\n", data);
}

// Pop operation
int pop(struct Stack* s) {
    if (isEmpty(s)) {
        printf("Stack Underflow! Cannot pop\\n");
        return -1;
    }
    return s->arr[s->top--];
}

// Peek operation
int peek(struct Stack* s) {
    if (isEmpty(s)) {
        printf("Stack is empty\\n");
        return -1;
    }
    return s->arr[s->top];
}

// Display stack
void display(struct Stack* s) {
    if (isEmpty(s)) {
        printf("Stack is empty\\n");
        return;
    }
    printf("Stack elements: ");
    for (int i = 0; i <= s->top; i++) {
        printf("%d ", s->arr[i]);
    }
    printf("\\n");
}

// Main function
int main() {
    struct Stack s;
    initStack(&s);
    
    int choice, data;
    
    while (1) {
        printf("\\n--- Stack Operations ---\\n");
        printf("1. Push\\n");
        printf("2. Pop\\n");
        printf("3. Peek\\n");
        printf("4. Display\\n");
        printf("5. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        
        switch (choice) {
            case 1:
                printf("Enter data to push: ");
                scanf("%d", &data);
                push(&s, data);
                break;
            case 2:
                data = pop(&s);
                if (data != -1) {
                    printf("Popped element: %d\\n", data);
                }
                break;
            case 3:
                data = peek(&s);
                if (data != -1) {
                    printf("Top element: %d\\n", data);
                }
                break;
            case 4:
                display(&s);
                break;
            case 5:
                exit(0);
            default:
                printf("Invalid choice!\\n");
        }
    }
    
    return 0;
}`,

    output: `--- Stack Operations ---
1. Push
2. Pop
3. Peek
4. Display
5. Exit
Enter your choice: 1
Enter data to push: 10
Pushed 10 to stack

--- Stack Operations ---
1. Push
2. Pop
3. Peek
4. Display
5. Exit
Enter your choice: 1
Enter data to push: 20
Pushed 20 to stack

--- Stack Operations ---
1. Push
2. Pop
3. Peek
4. Display
5. Exit
Enter your choice: 4
Stack elements: 10 20

--- Stack Operations ---
1. Push
2. Pop
3. Peek
4. Display
5. Exit
Enter your choice: 2
Popped element: 20

--- Stack Operations ---
1. Push
2. Pop
3. Peek
4. Display
5. Exit
Enter your choice: 3
Top element: 10`,

    vivaQuestions: [
      {
        question: "What is the time complexity of push and pop operations in stack?",
        answer: "O(1) - Constant time, as we only access the top element."
      },
      {
        question: "What happens when we try to push an element to a full stack?",
        answer: "Stack Overflow occurs. We should check if stack is full before pushing."
      },
      {
        question: "Difference between stack and queue?",
        answer: "Stack follows LIFO (Last In First Out) while Queue follows FIFO (First In First Out)."
      },
      {
        question: "What are the applications of stack?",
        answer: "Expression evaluation, function calls, undo operations, browser history, recursion."
      },
      {
        question: "How is stack different from array?",
        answer: "Stack has restricted access (only top element), while array allows random access to any element."
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
                <Code className="h-3 w-3 mr-1" />
                AKTU Lab Assistant
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                AKTU Lab File Assistant
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                AI generates complete lab file content including theory, code, outputs, and viva Q&A. 
                Code debugger for AKTU lab programs in C, Java, Python with viva question predictor.
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
                  Lab Configuration
                </h2>

                {/* Lab Subject Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Lab Subject</label>
                  <select 
                    value={selectedLab}
                    onChange={(e) => setSelectedLab(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {Object.keys(aktuLabs).map((lab) => (
                      <option key={lab} value={lab}>
                        {lab.replace(/-/g, ' ')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experiment Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Experiment</label>
                  <select 
                    value={selectedExperiment}
                    onChange={(e) => setSelectedExperiment(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Experiment</option>
                    {aktuLabs[selectedLab]?.map((exp, index) => (
                      <option key={index} value={exp}>
                        Exp {index + 1}: {exp}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Generation Options */}
                <div className="mb-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold mb-3 text-green-800">Lab File Components</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Theory and Algorithm</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Complete Source Code</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Sample Output</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Viva Questions & Answers</span>
                    </label>
                  </div>
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={!selectedExperiment || isGenerating}
                  variant="academic" 
                  size="lg" 
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating Lab File...
                    </>
                  ) : (
                    <>
                      <Code className="mr-2 h-5 w-5" />
                      Generate Lab File
                    </>
                  )}
                </Button>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Lab Assistant Features
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: FileText, title: "Complete Lab Files", desc: "Theory, code, output, viva Q&A" },
                    { icon: Bug, title: "Code Debugger", desc: "Find and fix errors in lab programs" },
                    { icon: Lightbulb, title: "Viva Predictor", desc: "Predict questions based on experiment" },
                    { icon: Terminal, title: "Multi-Language", desc: "Support for C, Java, Python" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2 space-y-8">
              {isGenerating ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">Generating Lab File...</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Creating complete lab file with theory, code, and viva questions
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Theory and algorithm generated
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Source code compiled
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        Generating sample output...
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        Creating viva questions...
                      </div>
                    </div>
                  </div>
                </div>
              ) : generationComplete ? (
                <Tabs defaultValue="theory" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="theory" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Theory
                    </TabsTrigger>
                    <TabsTrigger value="code" className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Code
                    </TabsTrigger>
                    <TabsTrigger value="output" className="flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      Output
                    </TabsTrigger>
                    <TabsTrigger value="viva" className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      Viva Q&A
                    </TabsTrigger>
                  </TabsList>

                  {/* Theory Tab */}
                  <TabsContent value="theory" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <BookOpen className="h-6 w-6 mr-2 text-primary" />
                          Theory & Algorithm
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
                        </div>
                      </div>

                      <div className="prose max-w-none">
                        <div className="bg-gray-50 rounded-lg p-6 border">
                          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                            {sampleLabFile.theory}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Code Tab */}
                  <TabsContent value="code" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <Code className="h-6 w-6 mr-2 text-primary" />
                          Source Code
                        </h2>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Run Code
                          </Button>
                          <Button variant="outline" size="sm">
                            <Bug className="h-4 w-4 mr-2" />
                            Debug
                          </Button>
                          <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                        <pre className="text-green-400 text-sm leading-relaxed">
                          <code>{sampleLabFile.code}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Output Tab */}
                  <TabsContent value="output" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Terminal className="h-6 w-6 mr-2 text-primary" />
                        Sample Output
                      </h2>

                      <div className="bg-black rounded-lg p-6">
                        <pre className="text-green-400 text-sm leading-relaxed font-mono">
                          {sampleLabFile.output}
                        </pre>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Viva Q&A Tab */}
                  <TabsContent value="viva" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Lightbulb className="h-6 w-6 mr-2 text-primary" />
                        Viva Questions & Answers
                      </h2>

                      <div className="space-y-6">
                        {sampleLabFile.vivaQuestions.map((qa, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-green-50">
                            <div className="mb-4">
                              <h3 className="font-bold text-lg mb-2 text-blue-800">
                                Q{index + 1}: {qa.question}
                              </h3>
                            </div>
                            <div className="border-t pt-4">
                              <h4 className="font-semibold mb-2 text-green-800">Answer:</h4>
                              <p className="text-sm leading-relaxed">{qa.answer}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white">
                        <h3 className="font-bold text-lg mb-4 flex items-center">
                          <Zap className="h-5 w-5 mr-2" />
                          Viva Preparation Tips
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Before Viva:</strong>
                            <ul className="mt-2 space-y-1">
                              <li>• Understand the algorithm completely</li>
                              <li>• Practice explaining code line by line</li>
                              <li>• Know time and space complexity</li>
                            </ul>
                          </div>
                          <div>
                            <strong>During Viva:</strong>
                            <ul className="mt-2 space-y-1">
                              <li>• Speak confidently and clearly</li>
                              <li>• Draw diagrams if needed</li>
                              <li>• Admit if you don't know something</li>
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
                    <Code className="h-20 w-20 text-gray-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Generate Lab File</h3>
                    <p className="text-muted-foreground max-w-md">
                      Select your lab subject and experiment to generate a complete lab file with theory, code, output, and viva questions.
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

export default AKTULabAssistant;