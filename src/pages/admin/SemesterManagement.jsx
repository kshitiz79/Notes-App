import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Filter, BookOpen, Calendar, Users } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const SemesterManagement = () => {
  const [semesters, setSemesters] = useState([]);
  const [branches, setBranches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingSemester, setEditingSemester] = useState(null);
  const [formData, setFormData] = useState({
    semester_number: '',
    branch_code: '',
    subjects_count: '',
    total_credits: '',
    is_active: true
  });

  // Mock data - replace with API calls
  useEffect(() => {
    setSemesters([
      { id: 1, semester_number: 1, branch_code: 'CSE', subjects_count: 8, total_credits: 24, is_active: true, students_enrolled: 120 },
      { id: 2, semester_number: 2, branch_code: 'CSE', subjects_count: 8, total_credits: 26, is_active: true, students_enrolled: 115 },
      { id: 3, semester_number: 3, branch_code: 'ECE', subjects_count: 7, total_credits: 22, is_active: true, students_enrolled: 95 },
      { id: 4, semester_number: 4, branch_code: 'ME', subjects_count: 8, total_credits: 25, is_active: true, students_enrolled: 80 }
    ]);

    setBranches([
      { code: 'CSE', name: 'Computer Science' },
      { code: 'ECE', name: 'Electronics' },
      { code: 'ME', name: 'Mechanical' },
      { code: 'EE', name: 'Electrical' },
      { code: 'CE', name: 'Civil' },
      { code: 'IT', name: 'Information Technology' }
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingSemester) {
      setSemesters(semesters.map(sem => 
        sem.id === editingSemester.id ? { ...formData, id: editingSemester.id } : sem
      ));
    } else {
      setSemesters([...semesters, { ...formData, id: Date.now() }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      semester_number: '',
      branch_code: '',
      subjects_count: '',
      total_credits: '',
      is_active: true
    });
    setEditingSemester(null);
    setShowModal(false);
  };

  const handleEdit = (semester) => {
    setEditingSemester(semester);
    setFormData(semester);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this semester?')) {
      setSemesters(semesters.filter(sem => sem.id !== id));
    }
  };

  const filteredSemesters = semesters.filter(semester => {
    const matchesSearch = semester.semester_number.toString().includes(searchTerm) ||
                         semester.branch_code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = selectedBranch === '' || semester.branch_code === selectedBranch;
    return matchesSearch && matchesBranch;
  });

  return ( 
    <AdminLayout>
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Semester Management</h1>
          <p className="text-gray-600">Manage academic semesters and their configurations</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Semester
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Semesters</p>
              <p className="text-2xl font-bold text-gray-900">{semesters.length}</p>
            </div>
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Semesters</p>
              <p className="text-2xl font-bold text-gray-900">{semesters.filter(s => s.is_active).length}</p>
            </div>
            <Calendar className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{semesters.reduce((sum, s) => sum + (s.students_enrolled || 0), 0)}</p>
            </div>
            <Users className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Credits/Sem</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round(semesters.reduce((sum, s) => sum + s.total_credits, 0) / semesters.length)}</p>
            </div>
            <BookOpen className="h-8 w-8 text-orange-600" />
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
                placeholder="Search semesters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Branches</option>
              {branches.map(branch => (
                <option key={branch.code} value={branch.code}>{branch.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Semesters Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subjects</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSemesters.map((semester) => (
                <tr key={semester.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Semester {semester.semester_number}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{semester.branch_code}</div>
                    <div className="text-sm text-gray-500">{branches.find(b => b.code === semester.branch_code)?.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{semester.subjects_count}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{semester.total_credits}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{semester.students_enrolled || 0}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      semester.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {semester.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(semester)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(semester.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">
              {editingSemester ? 'Edit Semester' : 'Add New Semester'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Semester Number</label>
                  <input
                    type="number"
                    min="1"
                    max="8"
                    value={formData.semester_number}
                    onChange={(e) => setFormData({...formData, semester_number: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                  <select
                    value={formData.branch_code}
                    onChange={(e) => setFormData({...formData, branch_code: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Branch</option>
                    {branches.map(branch => (
                      <option key={branch.code} value={branch.code}>{branch.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subjects Count</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.subjects_count}
                    onChange={(e) => setFormData({...formData, subjects_count: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total Credits</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.total_credits}
                    onChange={(e) => setFormData({...formData, total_credits: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  {editingSemester ? 'Update' : 'Create'}
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

export default SemesterManagement;