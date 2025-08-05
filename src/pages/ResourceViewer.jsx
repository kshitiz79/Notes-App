import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getResourceById, branches, allResources } from "@/data/resources";
import { 
  ArrowLeft, Download, Share2, Bookmark, Star, Clock, 
  FileText, Eye, Users, TrendingUp, ThumbsUp, MessageCircle,
  Calendar, Tag, University, Award
} from "lucide-react";

const ResourceViewer = () => {
  const { resourceId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const resource = getResourceById(resourceId);
  const branch = resource ? branches[resource.branch] : null;
  
  // Get related resources (same subject, different resources)
  const relatedResources = resource ? 
    allResources
      .filter(r => r.subject === resource.subject && r.id !== resource.id)
      .slice(0, 3) : [];

  if (!resource || !branch) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Resource Not Found</h1>
          <p className="text-muted-foreground mb-8">The resource you're looking for doesn't exist.</p>
          <Button variant="academic" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleDownload = () => {
    window.open(`/public/${resource.fileName}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: resource.title,
        text: resource.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast here
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Resource Header */}
      <section className={`py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b ${branch.borderColor} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center mb-8">
              <Button 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="mr-4 hover:bg-white/50 backdrop-blur-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {resource.branch} - {resource.subject.replace(/-/g, ' ')}
                </Badge>
                <Badge variant="outline" className="bg-white/50 backdrop-blur-sm">
                  Semester {resource.semester}
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${branch.color} rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0`}>
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      {resource.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    {/* Resource Meta */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Download className="h-4 w-4" />
                        <span>{resource.downloads.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{resource.rating} rating</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(resource.uploadDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="h-4 w-4" />
                        <span>{resource.fileSize}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {resource.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        variant="academic" 
                        size="lg"
                        onClick={handleDownload}
                        className="flex-1 sm:flex-none"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download PDF
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => window.open(`/public/${resource.fileName}`, '_blank')}
                      >
                        <Eye className="mr-2 h-5 w-5" />
                        Preview
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={handleBookmark}
                        className={isBookmarked ? "bg-primary/10 text-primary" : ""}
                      >
                        <Bookmark className={`mr-2 h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                        {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={handleShare}
                      >
                        <Share2 className="mr-2 h-5 w-5" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>

                {/* PDF Preview */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Document Preview
                  </h3>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <FileText className="h-20 w-20 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">
                      PDF preview will be displayed here
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => window.open(`/public/${resource.fileName}`, '_blank')}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Open Full Preview
                    </Button>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Reviews & Comments
                  </h3>
                  
                  {/* Sample Comments */}
                  <div className="space-y-6">
                    {[
                      {
                        name: "Student A",
                        rating: 5,
                        comment: "Excellent resource! Very comprehensive and well-organized. Helped me a lot in my exams.",
                        date: "2 days ago"
                      },
                      {
                        name: "Student B", 
                        rating: 4,
                        comment: "Good quality notes. Could use more examples but overall very helpful.",
                        date: "1 week ago"
                      },
                      {
                        name: "Student C",
                        rating: 5,
                        comment: "Perfect for exam preparation. Clear explanations and good coverage of topics.",
                        date: "2 weeks ago"
                      }
                    ].map((comment, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-bold">
                                {comment.name.charAt(comment.name.length - 1)}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium">{comment.name}</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-3 w-3 ${i < comment.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">{comment.date}</span>
                        </div>
                        <p className="text-muted-foreground">{comment.comment}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            Helpful
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Add Your Review
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Resource Info */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold mb-4">Resource Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Branch</span>
                      <Badge variant="secondary">{resource.branch}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Semester</span>
                      <span className="font-medium">{resource.semester}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subject</span>
                      <span className="font-medium">{resource.subject.replace(/-/g, ' ')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Type</span>
                      <Badge variant="outline" className="capitalize">{resource.type}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">University</span>
                      <span className="font-medium flex items-center">
                        <University className="h-4 w-4 mr-1" />
                        {resource.university}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Year</span>
                      <span className="font-medium">{resource.year}</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Statistics
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Downloads
                      </span>
                      <span className="font-bold text-lg">{resource.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center">
                        <Star className="h-4 w-4 mr-2" />
                        Rating
                      </span>
                      <span className="font-bold text-lg">{resource.rating}/5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        Views
                      </span>
                      <span className="font-bold text-lg">{Math.floor(resource.downloads * 1.5).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Students
                      </span>
                      <span className="font-bold text-lg">{Math.floor(resource.downloads * 0.8).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Related Resources */}
                {relatedResources.length > 0 && (
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-lg font-bold mb-4">Related Resources</h3>
                    <div className="space-y-4">
                      {relatedResources.map(related => (
                        <Link
                          key={related.id}
                          to={`/resource/${related.id}`}
                          className="block p-3 rounded-lg border border-gray-100 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
                        >
                          <h4 className="font-medium text-sm mb-1 group-hover:text-primary line-clamp-2">
                            {related.title}
                          </h4>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center">
                              <Download className="h-3 w-3 mr-1" />
                              {related.downloads.toLocaleString()}
                            </span>
                            <span className="flex items-center">
                              <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                              {related.rating}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Report Issue
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share with Friends
                    </Button>
                    <Link to={`/branch/${resource.branch}/subject/${resource.subject}`}>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <BookOpen className="h-4 w-4 mr-2" />
                        More from Subject
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourceViewer;