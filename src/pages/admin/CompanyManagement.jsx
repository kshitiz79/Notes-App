import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Filter, Building, DollarSign, Users, TrendingUp } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    package_range: '',
    hiring_pattern: '',
    difficulty: 'medium',
    annual_hiring: '',
    is_active: true,
    description: '',
    requirements: '',
    interview_rounds: ''
  });

  const difficulties = [
    { value: 'easy', label: 'Easy', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'hard', label: 'Hard', color: 'bg-red-100 text-red-800' }
  ];

  // Mock data
  useEffect(() => {
    setCompanies([
      {
        id: 1,
        name: 'TCS',
        package_range: '3.5-7 LPA',
        hiring_pattern: 'Mass recruitment, focuses on aptitude and basic programming',
        difficulty: 'easy',
        annual_hiring: 150,
        is_active: true,
        description: 'Leading IT services company with global presence',
        requirements: 'No active backlogs, 60% throughout academics',
        interview_rounds: 'Aptitude Test, Technical Interview, HR Interview',
        questions_count: 45,
        created_at: '2024-01-01'
      },
      {
        id: 2,
        name: 'Infosys',
        package_range: '4-8 LPA',
        hiring_pattern: 'Technical assessment followed by interviews',
        difficulty: 'medium',
        annual_hiring: 120,
        is_active: true,
        description: 'Global leader in consulting and IT services',
        requirements: 'No backlogs, good communication skills',
        interview_rounds: 'Online Test, Technical Interview, HR Interview',
        questions_count: 38,
        created_at: '2024-01-05'
      },
      {
        id: 3,
        name: 'Microsoft',
        package_range: '15-25 LPA',
        hiring_pattern: 'Highly competitive, focuses on problem-solving and system design',
        difficulty: 'hard',
        annual_hiring: 8,
        is_active: true,
        description: 'Technology giant with focus on innovation',
        requirements: 'Excellent academic record, strong programming skills',
        interview_rounds: 'Online Assessment, 4-5 Technical Rounds, HR Round',
        questions_count: 25,
        created_at: '2024-01-10'
      }
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const companyData = {
      ...formData,
      id: editingCompany ? editingCompany.id : Date.now(),
      annual_hiring: parseInt(formData.annual_hiring),
      questions_count: editingCompany ? editingCompany.questions_count : 0,
      created_at: editingCompany ? editingCompany.created_at : new Date().toISOString().split('T')[0]
    };

    if (editingCompany) {
      setCompanies(companies.map(company => 
        company.id === editingCompany.id ? companyData : company
      ));
    } else {
      setCompanies([...companies, companyData]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      package_range: '',
      hiring_pattern: '',
      difficulty: 'medium',
      annual_hiring: '',
      is_active: true,
      description: '',
      requirements: '',
      interview_rounds: ''
    });
    setEditingCompany(null);
    setShowModal(false);
  };

  const handleEdit = (company) => {
    setEditingCompany(company);
    setFormData(company);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      setCompanies(companies.filter(company => company.id !== id));
    }
  };

  const toggleActive = (id) => {
    setCompanies(companies.map(company => 
      company.id === id ? { ...company, is_active: !company.is_active } : company
    ));
  };

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.package_range.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === '' || company.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <AdminLayout>
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Company Management</h1>
          <p className="text-gray-600">Manage placement companies and their hiring patterns</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Company
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Companies</p>
              <p className="text-2xl font-bold text-gray-900">{companies.length}</p>
            </div>
            <Building className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Companies</p>
              <p className="text-2xl font-bold text-gray-900">{companies.filter(c => c.is_active).length}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Hiring</p>
              <p className="text-2xl font-bold text-gray-900">{companies.reduce((sum, c) => sum + c.annual_hiring, 0)}</p>
            </div>
            <Users className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Package</p>
              <p className="text-2xl font-bold text-gray-900">8.5 LPA</p>
            </div>
            <DollarSign className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Difficulties</option>
              {difficulties.map(difficulty => (
                <option key={difficulty.value} value={difficulty.value}>{difficulty.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCompanies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Building className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{company.name}</h3>
                  <p className="text-sm text-gray-600">{company.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleActive(company.id)}
                  className={`p-1 rounded ${company.is_active ? 'text-green-600' : 'text-gray-400'}`}
                  title={company.is_active ? 'Active' : 'Inactive'}
                >
                  <Building size={16} />
                </button>
                <button
                  onClick={() => handleEdit(company)}
                  className="text-blue-600 hover:text-blue-900 p-1"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(company.id)}
                  className="text-red-600 hover:text-red-900 p-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Package Range</p>
                  <p className="font-semibold text-gray-900">{company.package_range}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Annual Hiring</p>
                  <p className="font-semibold text-gray-900">{company.annual_hiring} students</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-600 mb-1">Hiring Pattern</p>
                <p className="text-sm text-gray-900">{company.hiring_pattern}</p>
              </div>

              <div>
                <p className="text-xs text-gray-600 mb-1">Requirements</p>
                <p className="text-sm text-gray-900">{company.requirements}</p>
              </div>

              <div>
                <p className="text-xs text-gray-600 mb-1">Interview Process</p>
                <p className="text-sm text-gray-900">{company.interview_rounds}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t">
                <div className="flex items-center gap-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    difficulties.find(d => d.value === company.difficulty)?.color
                  }`}>
                    {difficulties.find(d => d.value === company.difficulty)?.label}
                  </span>
                  <span className="text-xs text-gray-500">
                    {company.questions_count} questions
                  </span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  company.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {company.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editingCompany ? 'Edit Company' : 'Add New Company'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Package Range</label>
                  <input
                    type="text"
                    value={formData.package_range}
                    onChange={(e) => setFormData({...formData, package_range: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 3.5-7 LPA"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Annual Hiring</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.annual_hiring}
                    onChange={(e) => setFormData({...formData, annual_hiring: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                  <select
                    value={formData.difficulty}
                    onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    {difficulties.map(difficulty => (
                      <option key={difficulty.value} value={difficulty.value}>{difficulty.label}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hiring Pattern</label>
                  <textarea
                    value={formData.hiring_pattern}
                    onChange={(e) => setFormData({...formData, hiring_pattern: e.target.value})}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                  <textarea
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interview Rounds</label>
                  <textarea
                    value={formData.interview_rounds}
                    onChange={(e) => setFormData({...formData, interview_rounds: e.target.value})}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Aptitude Test, Technical Interview, HR Interview"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="is_active"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">Active</label>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingCompany ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </AdminLayout>
  );
};

export default CompanyManagement;