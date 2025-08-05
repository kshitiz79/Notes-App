import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Video, ArrowLeft, Brain, Download, Share2, Copy,
  Play, Pause, SkipForward, SkipBack, Clock,
  FileText, Bookmark, Search, Zap, CheckCircle,
  Link as LinkIcon, Upload, Mic, Eye
} from "lucide-react";

const VideoTranscriber = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcriptionComplete, setTranscriptionComplete] = useState(false);
  const [activeTab, setActiveTab] = useState("url");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleTranscribe = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setTranscriptionComplete(true);
    }, 4000);
  };

  const sampleTranscription = {
    title: "Introduction to Machine Learning - Lecture 1",
    duration: "45:32",
    transcript: [
      {
        timestamp: "00:00",
        text: "Welcome to Introduction to Machine Learning. Today we'll cover the fundamental concepts of machine learning and its applications in engineering."
      },
      {
        timestamp: "00:45",
        text: "Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed."
      },
      {
        timestamp: "01:30",
        text: "There are three main types of machine learning: supervised learning, unsupervised learning, and reinforcement learning."
      },
      {
        timestamp: "02:15",
        text: "Supervised learning uses labeled data to train models. Examples include classification and regression problems."
      },
      {
        timestamp: "03:00",
        text: "Let's look at a simple example of linear regression. The equation is y = mx + b, where m is the slope and b is the y-intercept."
      }
    ],
    keyMoments: [
      {
        timestamp: "01:30",
        title: "Types of Machine Learning",
        description: "Introduction to supervised, unsupervised, and reinforcement learning"
      },
      {
        timestamp: "02:15",
        title: "Supervised Learning",
        description: "Explanation of supervised learning with examples"
      },
      {
        timestamp: "03:00",
        title: "Linear Regression",
        description: "Mathematical foundation of linear regression"
      }
    ],
    generatedNotes: `# Machine Learning - Lecture 1 Notes

## Overview
- Machine Learning is a subset of AI
- Enables computers to learn from data without explicit programming
- Key applications in engineering and technology

## Types of Machine Learning

### 1. Supervised Learning
- Uses labeled data for training
- Examples: Classification, Regression
- Goal: Predict outcomes for new data

### 2. Unsupervised Learning
- Works with unlabeled data
- Finds hidden patterns
- Examples: Clustering, Dimensionality reduction

### 3. Reinforcement Learning
- Learns through interaction with environment
- Uses rewards and penalties
- Applications: Game playing, robotics

## Linear Regression
**Equation**: y = mx + b
- m = slope (rate of change)
- b = y-intercept (starting point)
- Used for predicting continuous values

## Key Takeaways
- ML is data-driven approach to problem solving
- Different types suit different problem categories
- Mathematical foundations are crucial for understanding`
  };

  const features = [
    {
      icon: Brain,
      title: "AI Transcription",
      description: "Accurate speech-to-text conversion with technical term recognition"
    },
    {
      icon: Clock,
      title: "Timestamp Linking",
      description: "Click any text to jump to that moment in the video"
    },
    {
      icon: FileText,
      title: "Smart Notes",
      description: "Auto-generated structured notes from video content"
    },
    {
      icon: Bookmark,
      title: "Key Moments",
      description: "AI identifies and highlights important concepts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-red-50 via-white to-orange-50 border-b border-gray-200">
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
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                <Video className="h-3 w-3 mr-1" />
                Video Transcriber
              </Badge>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Video Transcriber & Note Generator
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform educational videos into searchable transcripts and structured notes. 
                Perfect for lectures, tutorials, and online courses.
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
                  <Video className="h-6 w-6 mr-2 text-primary" />
                  Add Video Source
                </h2>
                
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="url" className="flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" />
                      URL
                    </TabsTrigger>
                    <TabsTrigger value="upload" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload
                    </TabsTrigger>
                    <TabsTrigger value="record" className="flex items-center gap-2">
                      <Mic className="h-4 w-4" />
                      Record
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="url" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Video URL</label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            placeholder="https://youtube.com/watch?v=... or any video URL"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                        <Button variant="outline">
                          Load
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Supports YouTube, Vimeo, and direct video links
                      </p>
                    </div>

                    {/* Sample URLs */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-3">Try these sample videos:</h4>
                      <div className="space-y-2">
                        {[
                          "Machine Learning Basics - Stanford CS229",
                          "Data Structures Tutorial - MIT OpenCourseWare", 
                          "Circuit Analysis - Khan Academy"
                        ].map((title, index) => (
                          <button
                            key={index}
                            onClick={() => setVideoUrl(`https://youtube.com/sample-${index + 1}`)}
                            className="w-full text-left p-2 bg-white rounded border hover:border-primary transition-colors text-sm"
                          >
                            {title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="upload" className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Upload Video File</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Supports MP4, AVI, MOV, WebM (max 500MB)
                      </p>
                      <Button variant="outline">
                        Choose Video File
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="record" className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Mic className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Record Audio/Video</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Record directly from your microphone or camera
                      </p>
                      <div className="flex gap-2 justify-center">
                        <Button variant="outline">
                          <Mic className="h-4 w-4 mr-2" />
                          Audio Only
                        </Button>
                        <Button variant="outline">
                          <Video className="h-4 w-4 mr-2" />
                          Video + Audio
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Processing Options */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-4">Processing Options</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Generate transcript with timestamps</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Create structured notes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Identify key moments</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Generate quiz questions</span>
                    </label>
                  </div>
                </div>

                <Button 
                  onClick={handleTranscribe}
                  disabled={!videoUrl.trim() || isProcessing}
                  variant="academic" 
                  size="lg" 
                  className="w-full mt-6"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing Video...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-2 h-5 w-5" />
                      Start Transcription
                    </>
                  )}
                </Button>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Transcription Features</h3>
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
              {isProcessing ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">Processing Video...</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Extracting audio, transcribing speech, and generating notes
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Audio extraction complete
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Speech recognition in progress
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        Generating timestamps...
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        Creating structured notes...
                      </div>
                    </div>
                  </div>
                </div>
              ) : transcriptionComplete ? (
                <Tabs defaultValue="transcript" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="transcript" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Transcript
                    </TabsTrigger>
                    <TabsTrigger value="notes" className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Notes
                    </TabsTrigger>
                    <TabsTrigger value="moments" className="flex items-center gap-2">
                      <Bookmark className="h-4 w-4" />
                      Key Moments
                    </TabsTrigger>
                  </TabsList>

                  {/* Transcript Tab */}
                  <TabsContent value="transcript" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h2 className="text-2xl font-bold">{sampleTranscription.title}</h2>
                          <p className="text-muted-foreground">Duration: {sampleTranscription.duration}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Search className="h-4 w-4 mr-2" />
                            Search
                          </Button>
                          <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {sampleTranscription.transcript.map((segment, index) => (
                          <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <div className="flex-shrink-0">
                              <Badge variant="outline" className="text-xs">
                                {segment.timestamp}
                              </Badge>
                            </div>
                            <p className="text-sm leading-relaxed">{segment.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Notes Tab */}
                  <TabsContent value="notes" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                          <Brain className="h-6 w-6 mr-2 text-primary" />
                          Generated Notes
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
                            {sampleTranscription.generatedNotes}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Key Moments Tab */}
                  <TabsContent value="moments" className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Bookmark className="h-6 w-6 mr-2 text-primary" />
                        Key Moments
                      </h2>

                      <div className="space-y-4">
                        {sampleTranscription.keyMoments.map((moment, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <Badge variant="outline" className="text-xs">
                                    {moment.timestamp}
                                  </Badge>
                                  <h3 className="font-bold">{moment.title}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">{moment.description}</p>
                              </div>
                              <Button variant="outline" size="sm">
                                <Play className="h-4 w-4 mr-2" />
                                Jump to
                              </Button>
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
                    <Video className="h-20 w-20 text-gray-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Transcribe</h3>
                    <p className="text-muted-foreground max-w-md">
                      Add a video URL, upload a file, or record directly to get started with AI-powered transcription and note generation.
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

export default VideoTranscriber;