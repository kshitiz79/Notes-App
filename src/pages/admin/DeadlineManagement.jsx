import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Filter, Calendar, Clock, AlertTriangle, DollarSign } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const DeadlineManagement = () => {
  const [deadlines, setDeadlines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingDeadline, setEditingDeadline] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline_date: '',
    category: 'exam',
    priority: 'medium',
    applicable_semesters: '',
    requirements: '',
    fee_amount: '',
    is_recurring: false,
    is_active: true
  });

  const categories = [
    { value: 'exam', label: 'Exam', icon: '📝', color: 'bg-blue-100 text-blue-800' },
    { value: 'fee', label: 'Fee', icon: '💰', color: 'bg-green-100 text-green-800' },
    { value: 'project', label: 'Project', icon: '🚀', color: 'bg-purple-100 text-purple-800' },
    { value: 'scholarship', label: 'Scholarship', icon: '🎓', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'internship', label: 'Internship', icon: '💼', color: 'bg-orange-100 text-orange-800' }
  ];

  const priorities = [
    { value: 'low', label: 'Low', color: 'bg-gray-100 text-gray-800' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'high', label: 'High', color: 'bg-red-100 text-red-800' }
  ];

  // Mock data
  useEffect(() => {
    setDeadlines([
      {
        id: 1,
        title: 'Semester Fee Payment',
        description: 'Payment deadline for odd semester 2024',
        deadline_date: '2024-02-15',
        category: 'fee',
        priority: 'high',
        applicable_semesters: [1, 3, 5, 7],
        requirements: ['Fee challan', 'Previous semester marksheet'],
        fee_amount: 45000,
        is_recurring: true,
        is_active: true,
        affected_students: 1250,
        created_at: '2024-01-01'
      },
      {
        id: 2,
        title: 'Mid-Semester Examinations',
        description: 'Mid-semester exams for all branches',
        deadline_date: '2024-03-01',
        category: 'exam',
        priority: 'high',
        applicable_semesters: [1, 2, 3, 4, 5, 6, 7, 8],
        requirements: ['Admit card', 'Valid ID proof'],
        fee_amount: 0,
        is_recurring: true,
        is_active: true,
        affected_students: 2500,
        created_at: '2024-01-05'
      },
      {
        id: 3,
        title: 'Final Year Project Submission',
        description: 'Final submission deadline for B.Tech projects',
        deadline_date: '2024-04-30',
        category: 'project',
        priority: 'high',
        applicable_semesters: [8],
        requirements: ['Project report', 'Source code', 'Presentation slides'],
        fee_amount: 0,
        is_recurring: false,
        is_active: true,
        affected_students: 320,
        created_at: '2024-01-10'
      }
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const deadlineData = {
      ...formData,
      id: editingDeadline ? editingDeadline.id : Date.now(),
      applicable_semesters: formData.applicable_semesters.split(',').map(s => parseInt(s.trim())).filter(s => s),
      requirements: formData.requirements.split(',').map(r => r.trim()).filter(r => r),
      fee_amount: parseFloat(formData.fee_amount) || 0,
      affected_students: editingDeadline ? editingDeadline.affected_students : 0,
      created_at: editingDeadline ? editingDeadline.created_at : new Date().toISOString().split('T')[0]
    };

    if (editingDeadline) {
      setDeadlines(deadlines.map(deadline => 
        deadline.id === editingDeadline.id ? deadlineData : deadline
      ));
    } else {
      setDeadlines([...deadlines, deadlineData]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      deadline_date: '',
      category: 'exam',
      priority: 'medium',
      applicable_semesters: '',
      requirements: '',
      fee_amount: '',
      is_recurring: false,
      is_active: true
    });
    setEditingDeadline(null);
    setShowModal(false);
  };

  const handleEdit = (deadline) => {
    setEditingDeadline(deadline);
    setFormData({
      ...deadline,
      applicable_semesters: deadline.applicable_semesters.join(', '),
      requirements: deadline.requirements.join(', ')
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this deadline?')) {
      setDeadlines(deadlines.filter(deadline => deadline.id !== id));
    }
  };

  const toggleActive = (id) => {
    setDeadlines(deadlines.map(deadline => 
      deadline.id === id ? { ...deadline, is_active: !deadline.is_active } : deadline
    ));
  };

  const getDaysUntilDeadline = (deadlineDate) => {
    const today = new Date();
    const deadline = new Date(deadlineDate);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredDeadlines = deadlines.filter(deadline => {
    const matchesSearch = deadline.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deadline.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || deadline.category === selectedCategory;
    const matchesPriority = selectedPriority === '' || deadline.priority === selectedPriority;
    return matchesSearch && matchesCategory && matchesPriority;
  });

  return (
    <AdminLayout>
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Deadline Management</h1>
          <p className="text-gray-600">Manage AKTU important dates and deadlines</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Deadline
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Deadlines</p>
              <p className="text-2xl font-bold text-gray-900">{deadlines.length}</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Upcoming (7 days)</p>
              <p className="text-2xl font-bold text-gray-900">
                {deadlines.filter(d => getDaysUntilDeadline(d.deadline_date) <= 7 && getDaysUntilDeadline(d.deadline_date) >= 0).length}
              </p>
            </div>
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">High Priority</p>
              <p className="text-2xl font-bold text-gray-900">{deadlines.filter(d => d.priority === 'high').length}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Fee Amount</p>
              <p className="text-2xl font-bold text-gray-900">₹{deadlines.reduce((sum, d) => sum + d.fee_amount, 0).toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
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
                placeholder="Search deadlines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Priorities</option>
              {priorities.map(priority => (
                <option key={priority.value} value={priority.value}>{priority.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Deadlines Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDeadlines.map((deadline) => {
          const daysUntil = getDaysUntilDeadline(deadline.deadline_date);
          const isUrgent = daysUntil <= 7 && daysUntil >= 0;
          const isPast = daysUntil < 0;
          
          return (
            <div key={deadline.id} className={`bg-white rounded-lg shadow-sm border p-6 ${
              isUrgent ? 'border-orange-200 bg-orange-50' : isPast ? 'border-red-200 bg-red-50' : ''
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">
                    {categories.find(c => c.value === deadline.category)?.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{deadline.title}</h3>
                    <p className="text-sm text-gray-600">{deadline.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleActive(deadline.id)}
                    className={`p-1 rounded ${deadline.is_active ? 'text-green-600' : 'text-gray-400'}`}
                    title={deadline.is_active ? 'Active' : 'Inactive'}
                  >
                    <Calendar size={16} />
                  </button>
                  <button
                    onClick={() => handleEdit(deadline)}
                    className="text-blue-600 hover:text-blue-900 p-1"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(deadline.id)}
                    className="text-red-600 hover:text-red-900 p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Deadline:</span>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{deadline.deadline_date}</div>
                    <div className={`text-xs ${
                      isPast ? 'text-red-600' : isUrgent ? 'text-orange-600' : 'text-gray-500'
                    }`}>
                      {isPast ? `${Math.abs(daysUntil)} days overdue` : 
                       daysUntil === 0 ? 'Today' : 
                       `${daysUntil} days left`}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Category:</span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    categories.find(c => c.value === deadline.category)?.color
                  }`}>
                    {categories.find(c => c.value === deadline.category)?.label}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Priority:</span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    priorities.find(p => p.value === deadline.priority)?.color
                  }`}>
                    {priorities.find(p => p.value === deadline.priority)?.label}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Applicable Semesters:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {deadline.applicable_semesters.join(', ')}
                  </span>
                </div>

                {deadline.fee_amount > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Fee Amount:</span>
                    <span className="font-semibold text-green-600">₹{deadline.fee_amount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Affected Students:</span>
                  <span className="font-semibold text-gray-900">{deadline.affected_students}</span>
                </div>

                {deadline.requirements.length > 0 && (
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-600 mb-1">Requirements:</p>
                    <div className="flex flex-wrap gap-1">
                      {deadline.requirements.map((req, index) => (
                        <span key={index} className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
                  <span>
                    {deadline.is_recurring ? '🔄 Recurring' : '📅 One-time'}
                  </span>
                  <span className={`px-2 py-1 rounded-full ${
                    deadline.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {deadline.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editingDeadline ? 'Edit Deadline' : 'Add New Deadline'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deadline Date</label>
                  <input
                    type="date"
                    value={formData.deadline_date}
                    onChange={(e) => setFormData({...formData, deadline_date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>{category.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    {priorities.map(priority => (
                      <option key={priority.value} value={priority.value}>{priority.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fee Amount (₹)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.fee_amount}
                    onChange={(e) => setFormData({...formData, fee_amount: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Applicable Semesters (comma-separated)</label>
                  <input
                    type="text"
                    value={formData.applicable_semesters}
                    onChange={(e) => setFormData({...formData, applicable_semesters: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 1, 3, 5, 7"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Requirements (comma-separated)</label>
                  <textarea
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Fee challan, Previous semester marksheet"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="is_recurring"
                      checked={formData.is_recurring}
                      onChange={(e) => setFormData({...formData, is_recurring: e.target.checked})}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="is_recurring" className="ml-2 block text-sm text-gray-900">Recurring</label>
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
                  {editingDeadline ? 'Update' : 'Create'}
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

export default DeadlineManagement;