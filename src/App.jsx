import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BranchOverview from "./pages/BranchOverview";
import BranchResources from "./pages/BranchResources";
import SubjectDetail from "./pages/SubjectDetail";
import SemesterView from "./pages/SemesterView";
import ResourceViewer from "./pages/ResourceViewer";
import SearchResults from "./pages/SearchResults";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Chatbot from "./pages/Chatbot";
import AITools from "./pages/AITools";
import SmartNoteGenerator from "./pages/SmartNoteGenerator";
import AIQuestionSolver from "./pages/AIQuestionSolver";
import PreviousPaperAnalyzer from "./pages/PreviousPaperAnalyzer";
import VideoTranscriber from "./pages/VideoTranscriber";
import AKTUSyllabusGenerator from "./pages/AKTUSyllabusGenerator";
import AKTUExamPredictor from "./pages/AKTUExamPredictor";
import AKTUCrashCourse from "./pages/AKTUCrashCourse";
import AKTUGPAAdvisor from "./pages/AKTUGPAAdvisor";
import AKTUPlacementPrep from "./pages/AKTUPlacementPrep";
import AKTUProjectHelper from "./pages/AKTUProjectHelper";
import AKTULabAssistant from "./pages/AKTULabAssistant";
import AKTUQueryBot from "./pages/AKTUQueryBot";
import AKTUDeadlineTracker from "./pages/AKTUDeadlineTracker";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import ContentManagement from "./pages/admin/ContentManagement";
import AIToolsControl from "./pages/admin/AIToolsControl";
import AnalyticsReports from "./pages/admin/AnalyticsReports";
import SystemSettings from "./pages/admin/SystemSettings";
import NotificationManagement from "./pages/admin/NotificationManagement";
import DepartmentManagement from "./pages/admin/DepartmentManagement";
import SubjectManagement from "./pages/admin/SubjectManagement";
import SemesterManagement from "./pages/admin/SemesterManagement";
import NotesManagement from "./pages/admin/NotesManagement";
import QuestionPaperManagement from "./pages/admin/QuestionPaperManagement";
import AchievementManagement from "./pages/admin/AchievementManagement";
import CompanyManagement from "./pages/admin/CompanyManagement";
import DeadlineManagement from "./pages/admin/DeadlineManagement";
import StudyAnalytics from "./pages/admin/StudyAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/branches" element={<BranchOverview />} />
          <Route path="/branch/:branchCode" element={<BranchResources />} />
          <Route path="/branch/:branchCode/semester/:semesterNumber" element={<SemesterView />} />
          <Route path="/branch/:branchCode/subject/:subjectCode" element={<SubjectDetail />} />
          <Route path="/resource/:resourceId" element={<ResourceViewer />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/ai-tools/aktu-syllabus" element={<AKTUSyllabusGenerator />} />
          <Route path="/ai-tools/aktu-exam-predictor" element={<AKTUExamPredictor />} />
          <Route path="/ai-tools/aktu-crash-course" element={<AKTUCrashCourse />} />
          <Route path="/ai-tools/aktu-gpa-advisor" element={<AKTUGPAAdvisor />} />
          <Route path="/ai-tools/aktu-placement-prep" element={<AKTUPlacementPrep />} />
          <Route path="/ai-tools/aktu-project-helper" element={<AKTUProjectHelper />} />
          <Route path="/ai-tools/aktu-lab-assistant" element={<AKTULabAssistant />} />
          <Route path="/ai-tools/aktu-query-bot" element={<AKTUQueryBot />} />
          <Route path="/ai-tools/aktu-deadline-tracker" element={<AKTUDeadlineTracker />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/departments" element={<DepartmentManagement />} />
          <Route path="/admin/subjects" element={<SubjectManagement />} />
          <Route path="/admin/semesters" element={<SemesterManagement />} />
          <Route path="/admin/notes" element={<NotesManagement />} />
          <Route path="/admin/question-papers" element={<QuestionPaperManagement />} />
          <Route path="/admin/content" element={<ContentManagement />} />
          <Route path="/admin/companies" element={<CompanyManagement />} />
          <Route path="/admin/achievements" element={<AchievementManagement />} />
          <Route path="/admin/deadlines" element={<DeadlineManagement />} />
          <Route path="/admin/ai-tools" element={<AIToolsControl />} />
          <Route path="/admin/study-analytics" element={<StudyAnalytics />} />
          <Route path="/admin/analytics" element={<AnalyticsReports />} />
          <Route path="/admin/notifications" element={<NotificationManagement />} />




          
          <Route path="/admin/settings" element={<SystemSettings />} />
          <Route path="/ai-tools/note-generator" element={<SmartNoteGenerator />} />
          <Route path="/ai-tools/question-solver" element={<AIQuestionSolver />} />
          <Route path="/ai-tools/paper-analyzer" element={<PreviousPaperAnalyzer />} />
          <Route path="/ai-tools/video-transcriber" element={<VideoTranscriber />} />
          <Route path="/ai-tools/ai-tutor" element={<Chatbot />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
