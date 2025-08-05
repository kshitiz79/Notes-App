import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileText, Upload, Link as LinkIcon, Sparkles, Download, 
  Eye, Copy, Share2, ArrowLeft, Brain, Image, 
  CheckCircle, Clock, Zap, BookOpen, Video, Mic
} from "lucide-react";

const SmartNoteGenerator = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputText, setInputText] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedNotes, setGeneratedNotes] = useState("");
  const [activeTab, setActiveTab] = useState("text");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleGenerateNotes = async () => {
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      const sampleNotes = `# Data Structures - Linked Lists

## Key Concepts
- **Definition**: A linear data structure where elements are stored in nodes
- **Components**: Each node contains data and a pointer to the next node
- **Memory**: Dynamic memory allocation, non-contiguous storage

## Types of Linked Lists
1. **Singly Linked List**
   - Each node points to the next node
   - Last node points to NULL
   - Traversal: One direction only

2. **Doubly Linked List**
   - Each node has two pointers (next and previous)
   - Bidirectional traversal possible
   - Extra memory overhead

3. **Circular Linked List**
   - Last node points back to the first node
   - No NULL pointers
   - Useful for round-robin scheduling

## Operations & Time Complexity
| Operation | Time Complexity |
|-----------|----------------|
| Insertion at beginning | O(1) |
| Insertion at end | O(n) |
| Deletion | O(n) |
| Search | O(n) |

## Advantages
✓ Dynamic size
✓ Efficient insertion/deletion
✓ Memory efficient (no wasted space)

## Disadvantages
✗ No random access
✗ Extra memory for pointers
✗ Not cache friendly

## Implementation Example
\`\`\`c
struct Node {
    int data;
    struct Node* next;
};
\`\`\`

## Applications
- Implementation of stacks and queues
- Music playlist (circular linked list)
- Browser history (doubly linked list)
- Memory management in operating systems`;

      setGeneratedNotes(sampleNotes);
      setIsGenerating(false);
    }, 3000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Simulate file processing
      setInputText(`Uploaded file: ${file.name}\n\nProcessing content...`);
    }
  };

  const features = [
    {
      icon: Brain,
      title: "AI Summarization",
      description: "Advanced NLP models extract key concepts and create concise summaries"
    },
    {
      icon: Image,
      title: "Diagram Generation",
      description: "Automatically creates visual diagrams from technical descriptions"
    },
    {
      icon: BookOpen,
      title: "Structure Optimization",
      description: "Organizes content with proper headings, bullet points, and formatting"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Generate comprehensive notes in seconds, not hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b border-gray-200">
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
                <FileText className="h-3 w-3 mr-1" />
                Note Generator
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Smart Note Generator
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform lectures, textbooks, and videos into comprehensive, well-structured notes with AI-powered summarization and automatic diagram creation.
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
                  <Sparkles className="h-6 w-6 mr-2 text-primary" />
                  Input Content
                </h2>
                
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="text" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Text
                    </TabsTrigger>
                    <TabsTrigger value="file" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      File
                    </TabsTrigger>
                    <TabsTrigger value="youtube" className="flex items-center gap-2">
                      <Video className="h-4 w-4" />
                      YouTube
                    </TabsTrigger>
                    <TabsTrigger value="audio" className="flex items-center gap-2">
                      <Mic className="h-4 w-4" />
                      Audio
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="text" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Paste your content</label>
                      <textarea
                        placeholder="Paste lecture notes, textbook content, or any educational material here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="file" className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Upload your files</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Supports PDF, DOCX, TXT, and image files
                      </p>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.docx,.txt,.jpg,.png"
                      />
                      <label htmlFor="file-upload">
                        <Button variant="outline" className="cursor-pointer">
                          Choose Files
                        </Button>
                      </label>
                    </div>
                  </TabsContent>

                  <TabsContent value="youtube" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">YouTube Video URL</label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            placeholder="https://youtube.com/watch?v=..."
                            value={youtubeUrl}
                            onChange={(e) => setYoutubeUrl(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                        <Button variant="outline">
                          Load Video
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        We'll extract audio, transcribe, and generate notes from the video content
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="audio" className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Mic className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Upload Audio Recording</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Supports MP3, WAV, M4A files
                      </p>
                      <Button variant="outline">
                        Choose Audio File
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Generation Options */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-4">Generation Options</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Include diagrams and visual aids</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Generate key formulas and equations</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Create practice questions</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Add related topics suggestions</span>
                    </label>
                  </div>
                </div>

                <Button 
                  onClick={handleGenerateNotes}
                  disabled={!inputText.trim() || isGenerating}
                  variant="academic" 
                  size="lg" 
                  className="w-full mt-6"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating Notes...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Smart Notes
                    </>
                  )}
                </Button>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Why Use Smart Note Generator?</h3>
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
                    <FileText className="h-6 w-6 mr-2 text-primary" />
                    Generated Notes
                  </h2>
                  {generatedNotes && (
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
                  )}
                </div>

                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">AI is working its magic...</h3>
                    <p className="text-muted-foreground text-center">
                      Analyzing content, extracting key concepts, and generating structured notes
                    </p>
                    <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Content analysis complete
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        Generating structure...
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        Creating diagrams...
                      </div>
                    </div>
                  </div>
                ) : generatedNotes ? (
                  <div className="prose max-w-none">
                    <div className="bg-gray-50 rounded-lg p-6 border">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                        {generatedNotes}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <FileText className="h-20 w-20 text-gray-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Generate Notes</h3>
                    <p className="text-muted-foreground max-w-md">
                      Add your content using any of the input methods above, then click "Generate Smart Notes" to see the AI in action.
                    </p>
                  </div>
                )}
              </div>

              {/* Sample Output Preview */}
              {!generatedNotes && !isGenerating && (
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Sample Output Preview
                  </h3>
                  <div className="bg-white rounded-lg p-4 border text-sm">
                    <div className="font-bold text-blue-600 mb-2"># Machine Learning - Neural Networks</div>
                    <div className="text-gray-600 mb-2">## Key Concepts</div>
                    <div className="text-gray-800 mb-2">- **Artificial Neuron**: Basic processing unit...</div>
                    <div className="text-gray-600 mb-2">## Architecture Types</div>
                    <div className="text-gray-800 mb-2">1. **Feedforward Networks**</div>
                    <div className="text-gray-800 mb-2">2. **Recurrent Networks**</div>
                    <div className="text-gray-600 mb-2">## Mathematical Foundation</div>
                    <div className="bg-gray-100 p-2 rounded text-xs font-mono">
                      y = σ(Σ(wi * xi) + b)
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    This is just a preview. Your actual notes will be much more comprehensive and tailored to your content.
                  </p>
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

export default SmartNoteGenerator;