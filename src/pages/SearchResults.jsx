import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import { searchResources, branches } from "@/data/resources";
import { 
  Search, Filter, Grid, List, SortAsc, Clock, 
  TrendingUp, BookOpen, FileText, Star
} from "lucide-react";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedBranch, setSelectedBranch] = useState(searchParams.get('branch') || 'all');
  const [selectedSemester, setSelectedSemester] = useState(searchParams.get('semester') || 'all');
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('q', searchTerm);
    if (selectedBranch !== 'all') params.set('branch', selectedBranch);
    if (selectedSemester !== 'all') params.set('semester', selectedSemester);
    if (selectedType !== 'all') params.set('type', selectedType);
    setSearchParams(params);
  }, [searchTerm, selectedBranch, selectedSemester, selectedType, setSearchParams]);

  const filters = {
    branch: selectedBranch !== 'all' ? selectedBranch : null,
    semester: selectedSemester !== 'all' ? selectedSemester : null,
    type: selectedType !== 'all' ? selectedType : null
  };

  const results = searchResources(searchTerm, filters);

  // Sort results
  const sortedResults = [...results].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      case 'rating':
        return parseFloat(b.rating) - parseFloat(a.rating);
      case 'downloads':
        return b.downloads - a.downloads;
      case 'popularity':
      default:
        return b.downloads - a.downloads;
    }
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled by the useEffect above
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Search Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Search Results
              </h1>
              {searchTerm && (
                <p className="text-xl text-muted-foreground mb-8">
                  Showing results for "<span className="font-semibold text-primary">{searchTerm}</span>"
                </p>
              )}
            </div>

            {/* Enhanced Search Bar */}
            <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-8">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="Search for notes, papers, subjects, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-primary/20 focus:border-primary/50 bg-white/80 backdrop-blur-sm"
                />
                <Button 
                  type="submit"
                  size="lg" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
                  variant="academic"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* Results Summary */}
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg">
                <BookOpen className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">
                  {results.length} resources found
                  {Object.values(filters).some(f => f) && (
                    <span className="text-muted-foreground ml-2">
                      (filtered)
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-gray-200/50 sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-end">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="space-y-2">
                <label className="text-sm font-medium">Branch</label>
                <select 
                  value={selectedBranch} 
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="px-3 py-2 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-sm w-36"
                >
                  <option value="all">All Branches</option>
                  {Object.keys(branches).map(branchCode => (
                    <option key={branchCode} value={branchCode}>{branchCode}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Semester</label>
                <select 
                  value={selectedSemester} 
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="px-3 py-2 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-sm w-36"
                >
                  <option value="all">All Semesters</option>
                  {[1,2,3,4,5,6,7,8].map(sem => (
                    <option key={sem} value={sem}>Semester {sem}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Resource Type</label>
                <select 
                  value={selectedType} 
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-sm w-36"
                >
                  <option value="all">All Types</option>
                  <option value="notes">Study Notes</option>
                  <option value="papers">Question Papers</option>
                  <option value="solutions">Solutions</option>
                  <option value="books">Reference Books</option>
                  <option value="lab">Lab Manuals</option>
                  <option value="syllabus">Syllabus</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-sm w-36"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="recent">Most Recent</option>
                  <option value="rating">Highest Rated</option>
                  <option value="downloads">Most Downloaded</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">View</label>
                <div className="flex items-center border border-gray-300 rounded-lg p-1 bg-white/80 backdrop-blur-sm">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="h-8 w-8 p-0"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="h-8 w-8 p-0"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {Object.values(filters).some(f => f) && (
                <div className="space-y-2">
                  <label className="text-sm font-medium opacity-0">Clear</label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedBranch('all');
                      setSelectedSemester('all');
                      setSelectedType('all');
                    }}
                    className="h-10"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Active Filters */}
      {Object.values(filters).some(f => f) && (
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
              {filters.branch && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Branch: {filters.branch}
                  <button 
                    onClick={() => setSelectedBranch('all')}
                    className="ml-2 hover:text-blue-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {filters.semester && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Semester: {filters.semester}
                  <button 
                    onClick={() => setSelectedSemester('all')}
                    className="ml-2 hover:text-green-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {filters.type && (
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Type: {filters.type}
                  <button 
                    onClick={() => setSelectedType('all')}
                    className="ml-2 hover:text-purple-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto">
          {sortedResults.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Search Results</h2>
                  <p className="text-muted-foreground">
                    {sortedResults.length} resources found
                    {searchTerm && ` for "${searchTerm}"`}
                  </p>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
                  {sortedResults.length} Results
                </Badge>
              </div>

              <div className={`${
                viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-4"
              }`}>
                {sortedResults.map((resource, index) => (
                  <div
                    key={resource.id}
                    className={`transition-all duration-500 ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <ResourceCard
                      {...resource}
                      onDownload={() => window.open(`/public/${resource.fileName}`, '_blank')}
                      onView={() => window.location.href = `/resource/${resource.id}`}
                      onBookmark={() => console.log('Bookmarked:', resource.id)}
                    />
                  </div>
                ))}
              </div>

              {/* Load More */}
              {sortedResults.length >= 20 && (
                <div className="text-center pt-12">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-md mx-auto">
                    <h3 className="text-lg font-semibold mb-4">More results available</h3>
                    <p className="text-muted-foreground mb-6 text-sm">
                      Refine your search or load more results to find exactly what you need
                    </p>
                    <Button variant="academic" size="lg" className="w-full">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Load More Results
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* No Results */
            <div className="text-center py-20">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 max-w-lg mx-auto">
                <Search className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">No results found</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {searchTerm ? (
                    <>We couldn't find any resources matching "<strong>{searchTerm}</strong>". Try different keywords or adjust your filters.</>
                  ) : (
                    <>No resources match your current filters. Try adjusting your search criteria.</>
                  )}
                </p>
                
                <div className="space-y-4">
                  <div className="text-left">
                    <h4 className="font-semibold mb-2">Try these suggestions:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Check your spelling</li>
                      <li>• Use more general keywords</li>
                      <li>• Remove some filters</li>
                      <li>• Browse by branch or semester</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Button 
                      variant="academic" 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedBranch("all");
                        setSelectedSemester("all");
                        setSelectedType("all");
                      }}
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Clear All Filters
                    </Button>
                    <Button variant="outline" onClick={() => window.location.href = '/branches'}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Browse All Branches
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Popular Searches */}
      {!searchTerm && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Popular Searches
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover what other students are looking for
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { term: "Data Structures", count: "2.5K searches", icon: BookOpen },
                { term: "Previous Year Papers", count: "1.8K searches", icon: FileText },
                { term: "Machine Learning", count: "1.2K searches", icon: TrendingUp },
                { term: "Thermodynamics", count: "950 searches", icon: Star }
              ].map((search, index) => (
                <button
                  key={search.term}
                  onClick={() => setSearchTerm(search.term)}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-left group ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <search.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {search.term}
                  </h3>
                  <p className="text-sm text-muted-foreground">{search.count}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default SearchResults;