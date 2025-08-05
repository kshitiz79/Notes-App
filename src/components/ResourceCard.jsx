import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Bookmark, Star, Clock, FileText, FileImage, File } from "lucide-react";

const ResourceCard = ({
  title,
  subject,
  semester,
  branch,
  type,
  downloads,
  rating,
  uploadDate,
  fileSize,
  onDownload,
  onView,
  onBookmark
}) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'notes':
        return <FileText className="h-4 w-4" />;
      case 'paper':
        return <FileImage className="h-4 w-4" />;
      case 'syllabus':
        return <File className="h-4 w-4" />;
      default:
        return <File className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'notes':
        return 'bg-blue-100 text-blue-800 ';
      case 'paper':
        return 'bg-green-100 text-green-800 ';
      case 'syllabus':
        return 'bg-purple-100 text-purple-800 ';
      default:
        return 'bg-gray-100 text-gray-800 ';
    }
  };

  const getBranchColor = (branch) => {
    switch (branch) {
      case 'CSE':
        return 'bg-blue-500';
      case 'ECE':
        return 'bg-orange-500';
      case 'ME':
        return 'bg-green-500';
      case 'EE':
        return 'bg-yellow-500';
      case 'CE':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white  rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-lg ${getBranchColor(branch)} flex items-center justify-center`}>
            <span className="text-white text-xs font-bold">{branch}</span>
          </div>
          <Badge variant="secondary" className={getTypeColor(type)}>
            {getTypeIcon(type)}
            <span className="ml-1 capitalize">{type}</span>
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onBookmark}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      {/* Title and Subject */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{subject}</p>
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <span>Semester {semester}</span>
          <span>•</span>
          <span>{fileSize}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Download className="h-4 w-4" />
            <span>{downloads.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" />
          <span>{uploadDate}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onView}
          className="flex-1"
        >
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
        <Button
          variant="academic"
          size="sm"
          onClick={onDownload}
          className="flex-1"
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default ResourceCard;