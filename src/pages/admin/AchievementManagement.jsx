import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Filter, Award, Trophy, Star } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const AchievementManagement = () => {
  const [achievements, setAchievements] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingAchievement, setEditingAchievement] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: '🏆',
    category: 'study',
    rarity: 'common',
    points: '',
    criteria: '',
    is_active: true
  });

  const categories = [
    { value: 'study', label: 'Study' },
    { value: 'ai_tools', label: 'AI Tools' },
    { value: 'academic', label: 'Academic' },
    { value: 'social', label: 'Social' },
    { value: 'streak', label: 'Streak' }
  ];

  const rarities = [
    { value: 'common', label: 'Common', color: 'bg-gray-100 text-gray-800' },
    { value: 'uncommon', label: 'Uncommon', color: 'bg-green-100 text-green-800' },
    { value: 'rare', label: 'Rare', color: 'bg-blue-100 text-blue-800' },
    { value: 'epic', label: 'Epic', color: 'bg-purple-100 text-purple-800' },
    { value: 'legendary', label: 'Legendary', color: 'bg-yellow-100 text-yellow-800' }
  ];

  // Mock data
  useEffect(() => {
    setAchievements([
      {
        id: 1,
        name: 'AKTU AI Pioneer',
        description: 'First 100 users to try all AKTU AI tools',
        icon: '🚀',
        category: 'ai_tools',
        rarity: 'rare',
        points: 500,
        criteria: 'Use all 9 AKTU AI tools at least once',
        is_active: true,
        earned_count: 45,
        created_at: '2024-01-01'
      },
      {
        id: 2,
        name: 'GPA Improver',
        description: 'Increased CGPA by 0.5+ points using AI advisor',
        icon: '📈',
        category: 'academic',
        rarity: 'common',
        points: 200,
        criteria: 'Improve CGPA by 0.5 points in one semester',
        is_active: true,
        earned_count: 128,
        created_at: '2024-01-05'
      },
      {
        id: 3,
        name: 'Study Streak Champion',
        description: '30-day continuous learning streak',
        icon: '🔥',
        category: 'streak',
        rarity: 'legendary',
        points: 1500,
        criteria: 'Maintain 30-day study streak',
        is_active: true,
        earned_count: 12,
        created_at: '2024-01-10'
      }
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const achievementData = {
      ...formData,
      id: editingAchievement ? editingAchievement.id : Date.now(),
      points: parseInt(formData.points),
      earned_count: editingAchievement ? editingAchievement.earned_count : 0,
      created_at: editingAchievement ? editingAchievement.created_at : new Date().toISOString().split('T')[0]
    };

    if (editingAchievement) {
      setAchievements(achievements.map(achievement => 
        achievement.id === editingAchievement.id ? achievementData : achievement
      ));
    } else {
      setAchievements([...achievements, achievementData]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      icon: '🏆',
      category: 'study',
      rarity: 'common',
      points: '',
      criteria: '',
      is_active: true
    });
    setEditingAchievement(null);
    setShowModal(false);
  };

  const handleEdit = (achievement) => {
    setEditingAchievement(achievement);
    setFormData(achievement);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      setAchievements(achievements.filter(achievement => achievement.id !== id));
    }
  };

  const toggleActive = (id) => {
    setAchievements(achievements.map(achievement => 
      achievement.id === id ? { ...achievement, is_active: !achievement.is_active } : achievement
    ));
  };

  const filteredAchievements = achievements.filter(achievement => {
    const matchesSearch = achievement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || achievement.category === selectedCategory;
    const matchesRarity = selectedRarity === '' || achievement.rarity === selectedRarity;
    return matchesSearch && matchesCategory && matchesRarity;
  });

  return (
    <AdminLayout>
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Achievement Management</h1>
          <p className="text-gray-600">Manage user achievements and gamification rewards</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Achievement
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Achievements</p>
              <p className="text-2xl font-bold text-gray-900">{achievements.length}</p>
            </div>
            <Award className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Achievements</p>
              <p className="text-2xl font-bold text-gray-900">{achievements.filter(a => a.is_active).length}</p>
            </div>
            <Trophy className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Earned</p>
              <p className="text-2xl font-bold text-gray-900">{achievements.reduce((sum, a) => sum + a.earned_count, 0)}</p>
            </div>
            <Star className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Points</p>
              <p className="text-2xl font-bold text-gray-900">{achievements.reduce((sum, a) => sum + a.points, 0)}</p>
            </div>
            <Award className="h-8 w-8 text-orange-600" />
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
                placeholder="Search achievements..."
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
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Rarities</option>
              {rarities.map(rarity => (
                <option key={rarity.value} value={rarity.value}>{rarity.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement) => (
          <div key={achievement.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{achievement.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{achievement.name}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleActive(achievement.id)}
                  className={`p-1 rounded ${achievement.is_active ? 'text-green-600' : 'text-gray-400'}`}
                  title={achievement.is_active ? 'Active' : 'Inactive'}
                >
                  <Award size={16} />
                </button>
                <button
                  onClick={() => handleEdit(achievement)}
                  className="text-blue-600 hover:text-blue-900 p-1"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(achievement.id)}
                  className="text-red-600 hover:text-red-900 p-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Category:</span>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {categories.find(c => c.value === achievement.category)?.label}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Rarity:</span>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  rarities.find(r => r.value === achievement.rarity)?.color
                }`}>
                  {rarities.find(r => r.value === achievement.rarity)?.label}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Points:</span>
                <span className="font-semibold text-gray-900">{achievement.points}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Earned by:</span>
                <span className="font-semibold text-gray-900">{achievement.earned_count} users</span>
              </div>

              <div className="pt-2 border-t">
                <p className="text-xs text-gray-500">
                  <strong>Criteria:</strong> {achievement.criteria}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Created: {achievement.created_at}</span>
                <span className={`px-2 py-1 rounded-full ${
                  achievement.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {achievement.is_active ? 'Active' : 'Inactive'}
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
              {editingAchievement ? 'Edit Achievement' : 'Add New Achievement'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon (Emoji)</label>
                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) => setFormData({...formData, icon: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="🏆"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Points</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.points}
                    onChange={(e) => setFormData({...formData, points: e.target.value})}
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rarity</label>
                  <select
                    value={formData.rarity}
                    onChange={(e) => setFormData({...formData, rarity: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    {rarities.map(rarity => (
                      <option key={rarity.value} value={rarity.value}>{rarity.label}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Criteria</label>
                  <textarea
                    value={formData.criteria}
                    onChange={(e) => setFormData({...formData, criteria: e.target.value})}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the conditions to unlock this achievement"
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
                  {editingAchievement ? 'Update' : 'Create'}
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

export default AchievementManagement;