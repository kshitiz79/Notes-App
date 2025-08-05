import { Link } from "react-router-dom";
import { Users, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EngineeringBranches = () => {
  const branches = [
    {
      code: "CSE",
      name: "Computer Science Engineering",
      papers: 85,
      students: 240,
      resources: 85,
      color: "bg-blue-50 border-blue-200"
    },
    {
      code: "IT",
      name: "Information Technology",
      papers: 72,
      students: 180,
      resources: 72,
      color: "bg-green-50 border-green-200"
    },
    {
      code: "ECE",
      name: "Electronics & Communication",
      papers: 78,
      students: 200,
      resources: 78,
      color: "bg-purple-50 border-purple-200"
    },
    {
      code: "ME",
      name: "Mechanical Engineering",
      papers: 69,
      students: 220,
      resources: 69,
      color: "bg-orange-50 border-orange-200"
    },
    {
      code: "CE",
      name: "Civil Engineering",
      papers: 58,
      students: 160,
      resources: 58,
      color: "bg-teal-50 border-teal-200"
    },
    {
      code: "EE",
      name: "Electrical Engineering",
      papers: 52,
      students: 140,
      resources: 52,
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Engineering Branches</h2>
          <Link to="/branches">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              View All Branches
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.code}
              className={`p-6 rounded-lg border-2 ${branch.color} hover:shadow-lg transition-shadow`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{branch.code}</h3>
                  <p className="text-sm text-gray-600">{branch.name}</p>
                </div>
                <span className="text-sm font-medium text-gray-500">{branch.papers} Papers</span>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-1 text-blue-600">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">{branch.students} Students</span>
                </div>
                <div className="flex items-center space-x-1 text-green-600">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm font-medium">{branch.resources} Resources</span>
                </div>
              </div>
              
              <Link to={`/branch/${branch.code}`}>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Explore Branch
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringBranches;