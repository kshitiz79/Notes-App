import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    BookOpen, ArrowLeft, Brain, Download, Share2, Copy,
    TrendingUp, Target, BarChart3, FileText, Zap,
    CheckCircle, Clock, Star, Award, Calculator
} from "lucide-react";

const AKTUSyllabusGenerator = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedYear, setSelectedYear] = useState("2");
    const [selectedBranch, setSelectedBranch] = useState("CSE");
    const [selectedSubject, setSelectedSubject] = useState("");
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

    const aktuSubjects = {
        "1": {
            "CSE": ["Mathematics-I", "Physics", "Chemistry", "English", "Engineering-Graphics", "Programming-Fundamentals"],
            "ECE": ["Mathematics-I", "Physics", "Chemistry", "English", "Engineering-Graphics", "Basic-Electronics"],
            "ME": ["Mathematics-I", "Physics", "Chemistry", "English", "Engineering-Graphics", "Workshop-Technology"]
        },
        "2": {
            "CSE": ["Mathematics-II", "Physics-II", "Environmental-Science", "Data-Structures", "Digital-Logic", "Computer-Organization"],
            "ECE": ["Mathematics-II", "Physics-II", "Environmental-Science", "Circuit-Analysis", "Electronic-Devices", "Network-Theory"],
            "ME": ["Mathematics-II", "Physics-II", "Environmental-Science", "Thermodynamics", "Material-Science", "Manufacturing-Processes"]
        },
        "3": {
            "CSE": ["Mathematics-III", "Database-Systems", "Computer-Networks", "Operating-Systems", "Software-Engineering", "Web-Technologies"],
            "ECE": ["Mathematics-III", "Analog-Electronics", "Digital-Electronics", "Signals-Systems", "Microprocessors", "Communication-Systems"],
            "ME": ["Mathematics-III", "Fluid-Mechanics", "Heat-Transfer", "Machine-Design", "Production-Technology", "Industrial-Engineering"]
        },
        "4": {
            "CSE": ["Machine-Learning", "Compiler-Design", "Computer-Graphics", "Artificial-Intelligence", "Distributed-Systems", "Project-Work"],
            "ECE": ["VLSI-Design", "Microwave-Engineering", "Digital-Signal-Processing", "Embedded-Systems", "Optical-Communication", "Project-Work"],
            "ME": ["IC-Engines", "Refrigeration-AC", "CAD-CAM", "Robotics", "Quality-Control", "Project-Work"]
        }
    };

    const sampleSyllabusData = {
        subject: "Data Structures",
        code: "KCS-301",
        credits: 4,
        weightage: {
            "Unit 1": { percentage: 20, topics: ["Arrays", "Linked Lists"], importance: "High" },
            "Unit 2": { percentage: 25, topics: ["Stacks", "Queues"], importance: "Very High" },
            "Unit 3": { percentage: 20, topics: ["Trees", "Binary Trees"], importance: "High" },
            "Unit 4": { percentage: 20, topics: ["Graphs", "Hashing"], importance: "Medium" },
            "Unit 5": { percentage: 15, topics: ["Sorting", "Searching"], importance: "High" }
        },
        recommendedBooks: [
            {
                title: "Data Structures Using C++ by D.S. Malik",
                type: "Primary",
                chapters: ["Ch 1-5", "Ch 8-12"],
                aktuRecommended: true
            },
            {
                title: "Data Structures and Algorithms by Cormen",
                type: "Reference",
                chapters: ["Ch 1-3", "Ch 10-15"],
                aktuRecommended: true
            }
        ],
        generatedNotes: `# Data Structures (KCS-301) - AKTU Syllabus Notes

## Course Overview
- **Credits**: 4
- **Duration**: 16 weeks
- **Exam Pattern**: 70% Theory + 30% Internal Assessment
- **AKTU Code**: KCS-301

## Unit-wise Weightage Analysis

### Unit 1: Introduction to Data Structures (20% weightage)
**Expected Questions**: 1-2 (14-28 marks)
**Topics**:
- Arrays and their operations
- Linked Lists (Singly, Doubly, Circular)
- Memory allocation concepts

**AKTU Pattern**: 
- Arrays: 80% probability in exams
- Linked Lists: 95% probability (appears every year)

### Unit 2: Stacks and Queues (25% weightage) ⭐ MOST IMPORTANT
**Expected Questions**: 2 (35 marks)
**Topics**:
- Stack operations and applications
- Queue types and implementations
- Expression evaluation

**AKTU Pattern**:
- Stack applications: 100% probability
- Queue implementation: 90% probability

### Unit 3: Trees (20% weightage)
**Expected Questions**: 1-2 (14-28 marks)
**Topics**:
- Binary trees and traversals
- Binary Search Trees
- AVL trees basics

**AKTU Pattern**:
- Tree traversals: 85% probability
- BST operations: 75% probability

### Unit 4: Graphs and Hashing (20% weightage)
**Expected Questions**: 1 (14 marks)
**Topics**:
- Graph representation
- BFS and DFS
- Hash tables

**AKTU Pattern**:
- Graph traversals: 70% probability
- Hashing: 60% probability

### Unit 5: Sorting and Searching (15% weightage)
**Expected Questions**: 1 (14 marks)
**Topics**:
- Sorting algorithms
- Searching techniques
- Time complexity analysis

**AKTU Pattern**:
- Sorting algorithms: 65% probability
- Binary search: 80% probability

## AKTU-Recommended Books Summary

### Primary: "Data Structures Using C++ by D.S. Malik"
**Key Chapters for AKTU**:
- Chapter 1: Software Engineering Principles ✓
- Chapter 2: Arrays ✓ (High Priority)
- Chapter 3: Linked Lists ✓ (Very High Priority)
- Chapter 8: Stacks ✓ (Very High Priority)
- Chapter 9: Queues ✓ (Very High Priority)

**Important Examples**:
- Array implementation (Page 45-67)
- Linked list operations (Page 89-120)
- Stack applications (Page 234-256)

### Reference: "Introduction to Algorithms by Cormen"
**AKTU-Relevant Sections**:
- Chapter 10: Elementary Data Structures
- Chapter 12: Binary Search Trees
- Chapter 22: Elementary Graph Algorithms

## Exam Strategy for AKTU
1. **Must-Know Topics** (90%+ probability):
   - Linked List operations
   - Stack applications (Infix to Postfix)
   - Tree traversals
   - Binary search

2. **Important Topics** (70-80% probability):
   - Array operations
   - Queue implementation
   - Graph traversals
   - Sorting algorithms

3. **Good-to-Know Topics** (50-60% probability):
   - AVL trees
   - Hashing techniques
   - Advanced sorting

## Previous Year Analysis (2019-2024)
- **Linked Lists**: Appeared in 6/6 papers
- **Stacks**: Appeared in 6/6 papers  
- **Trees**: Appeared in 5/6 papers
- **Graphs**: Appeared in 4/6 papers
- **Sorting**: Appeared in 4/6 papers

## Time Allocation for Study
- Unit 2 (Stacks/Queues): 30% of study time
- Unit 1 (Arrays/Lists): 25% of study time
- Unit 3 (Trees): 20% of study time
- Unit 4 (Graphs): 15% of study time
- Unit 5 (Sorting): 10% of study time`
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Header */}
            <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-green-50 border-b border-gray-200">
                <div className="container mx-auto">
                    <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
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
                                <BookOpen className="h-3 w-3 mr-1" />
                                AKTU Syllabus Generator
                            </Badge>
                        </div>

                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                                AKTU Smart Syllabus & Notes Generator
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                AI-curated notes based on AKTU's latest syllabus (B.Tech 1st–4th year) with topic-wise weightage analysis
                                and auto-generated summaries of AKTU-recommended books.
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
                                    AKTU Configuration
                                </h2>

                                {/* Year Selection */}
                                <div className="mb-6">
                                    <label className="text-sm font-medium mb-3 block">Academic Year</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {["1", "2", "3", "4"].map((year) => (
                                            <button
                                                key={year}
                                                onClick={() => setSelectedYear(year)}
                                                className={`p-3 rounded-lg border text-center transition-all duration-200 ${selectedYear === year
                                                    ? 'border-primary bg-primary/10 text-primary'
                                                    : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <div className="font-bold">{year}</div>
                                                <div className="text-xs text-muted-foreground">Year</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Branch Selection */}
                                <div className="mb-6">
                                    <label className="text-sm font-medium mb-3 block">Engineering Branch</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {["CSE", "ECE", "ME", "EE", "CE", "IT"].map((branch) => (
                                            <button
                                                key={branch}
                                                onClick={() => setSelectedBranch(branch)}
                                                className={`p-3 rounded-lg border text-center transition-all duration-200 ${selectedBranch === branch
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
                                        <option value="">Select Subject</option>
                                        {(aktuSubjects[selectedYear]?.[selectedBranch] || []).map((subject) => (
                                            <option key={subject} value={subject}>
                                                {subject.replace(/-/g, ' ')}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Generation Options */}
                                <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <h3 className="font-semibold mb-3 text-blue-800">AKTU-Specific Features</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" defaultChecked className="rounded" />
                                            <span className="text-sm">Topic-wise weightage analysis</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" defaultChecked className="rounded" />
                                            <span className="text-sm">AKTU book summaries</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" defaultChecked className="rounded" />
                                            <span className="text-sm">Previous year pattern analysis</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" className="rounded" />
                                            <span className="text-sm">Generate practice questions</span>
                                        </label>
                                    </div>
                                </div>

                                <Button
                                    onClick={handleGenerate}
                                    disabled={!selectedSubject || isGenerating}
                                    variant="academic"
                                    size="lg"
                                    className="w-full"
                                >
                                    {isGenerating ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Generating AKTU Notes...
                                        </>
                                    ) : (
                                        <>
                                            <Brain className="mr-2 h-5 w-5" />
                                            Generate AKTU Notes
                                        </>
                                    )}
                                </Button>
                            </div>

                            {/* AKTU Features */}
                            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6">
                                <h3 className="text-lg font-bold mb-4 flex items-center">
                                    <Award className="h-5 w-5 mr-2 text-primary" />
                                    AKTU-Specific Features
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: TrendingUp, title: "Weightage Analysis", desc: "Unit-wise importance based on past papers" },
                                        { icon: BookOpen, title: "Book Summaries", desc: "Key points from AKTU-recommended books" },
                                        { icon: Target, title: "Exam Strategy", desc: "Topic prioritization for better scores" },
                                        { icon: BarChart3, title: "Pattern Analysis", desc: "5-year question pattern insights" }
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
                                        <h3 className="text-lg font-semibold mb-2">Generating AKTU-Specific Notes...</h3>
                                        <p className="text-muted-foreground text-center mb-6">
                                            Analyzing AKTU syllabus and previous year patterns
                                        </p>
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <div className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                                AKTU syllabus loaded
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                                Previous year papers analyzed
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                                                Calculating topic weightage...
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                                                Generating book summaries...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : generationComplete ? (
                                <Tabs defaultValue="notes" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3 mb-8">
                                        <TabsTrigger value="notes" className="flex items-center gap-2">
                                            <FileText className="h-4 w-4" />
                                            Smart Notes
                                        </TabsTrigger>
                                        <TabsTrigger value="weightage" className="flex items-center gap-2">
                                            <BarChart3 className="h-4 w-4" />
                                            Weightage
                                        </TabsTrigger>
                                        <TabsTrigger value="books" className="flex items-center gap-2">
                                            <BookOpen className="h-4 w-4" />
                                            Book Summary
                                        </TabsTrigger>
                                    </TabsList>

                                    {/* Smart Notes */}
                                    <TabsContent value="notes" className="space-y-6">
                                        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                                            <div className="flex items-center justify-between mb-6">
                                                <h2 className="text-2xl font-bold flex items-center">
                                                    <FileText className="h-6 w-6 mr-2 text-primary" />
                                                    AKTU Smart Notes
                                                </h2>
                                                <div className="flex items-center space-x-2">
                                                    <Button variant="outline" size="sm">
                                                        <Copy className="h-4 w-4 mr-2" />
                                                        Copy
                                                    </Button>
                                                    <Button variant="outline" size="sm">
                                                        <Download className="h-4 w-4 mr-2" />
                                                        Download PDF
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
                                                        {sampleSyllabusData.generatedNotes}
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    {/* Weightage Analysis */}
                                    <TabsContent value="weightage" className="space-y-6">
                                        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                                <BarChart3 className="h-6 w-6 mr-2 text-primary" />
                                                Topic Weightage Analysis
                                            </h2>

                                            <div className="space-y-6">
                                                {Object.entries(sampleSyllabusData.weightage).map(([unit, data], index) => (
                                                    <div key={unit} className="border border-gray-200 rounded-lg p-6">
                                                        <div className="flex items-center justify-between mb-4">
                                                            <div>
                                                                <h3 className="font-bold text-lg">{unit}</h3>
                                                                <p className="text-sm text-muted-foreground">
                                                                    Topics: {data.topics.join(", ")}
                                                                </p>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="text-2xl font-bold text-primary mb-1">
                                                                    {data.percentage}%
                                                                </div>
                                                                <Badge
                                                                    variant="secondary"
                                                                    className={`text-xs ${data.importance === 'Very High' ? 'bg-red-100 text-red-800' :
                                                                        data.importance === 'High' ? 'bg-orange-100 text-orange-800' :
                                                                            'bg-yellow-100 text-yellow-800'
                                                                        }`}
                                                                >
                                                                    {data.importance}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                                            <div
                                                                className={`h-3 rounded-full transition-all duration-500 ${data.importance === 'Very High' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                                                                    data.importance === 'High' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                                                                        'bg-gradient-to-r from-yellow-500 to-yellow-600'
                                                                    }`}
                                                                style={{ width: `${data.percentage}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </TabsContent>

                                    {/* Book Summary */}
                                    <TabsContent value="books" className="space-y-6">
                                        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                                <BookOpen className="h-6 w-6 mr-2 text-primary" />
                                                AKTU-Recommended Books
                                            </h2>

                                            <div className="space-y-6">
                                                {sampleSyllabusData.recommendedBooks.map((book, index) => (
                                                    <div key={index} className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-green-50">
                                                        <div className="flex items-start justify-between mb-4">
                                                            <div className="flex-1">
                                                                <h3 className="font-bold text-lg mb-2 flex items-center">
                                                                    {book.aktuRecommended && (
                                                                        <Award className="h-5 w-5 text-yellow-500 mr-2" />
                                                                    )}
                                                                    {book.title}
                                                                </h3>
                                                                <div className="flex items-center space-x-4 mb-3">
                                                                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                                                        {book.type}
                                                                    </Badge>
                                                                    {book.aktuRecommended && (
                                                                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                                                            AKTU Recommended
                                                                        </Badge>
                                                                    )}
                                                                </div>
                                                                <p className="text-sm text-muted-foreground">
                                                                    <strong>Key Chapters:</strong> {book.chapters.join(", ")}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <Button variant="outline" size="sm">
                                                            <FileText className="h-4 w-4 mr-2" />
                                                            View Chapter Summary
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            ) : (
                                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                                    <div className="flex flex-col items-center justify-center py-20 text-center">
                                        <BookOpen className="h-20 w-20 text-gray-300 mb-6" />
                                        <h3 className="text-xl font-semibold mb-2">Ready to Generate AKTU Notes</h3>
                                        <p className="text-muted-foreground max-w-md">
                                            Select your year, branch, and subject to generate AI-curated notes based on AKTU's latest syllabus with topic-wise weightage analysis.
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

export default AKTUSyllabusGenerator;