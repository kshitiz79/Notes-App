-- AKTU Notes App - Complete Database Schema
-- This SQL file contains all tables needed to make the website fully dynamic

-- =====================================================
-- USER MANAGEMENT TABLES
-- =====================================================

-- Users table for authentication and basic info
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    enrollment_no VARCHAR(20) UNIQUE,
    phone VARCHAR(15),
    location VARCHAR(100),
    linkedin_url VARCHAR(255),
    github_url VARCHAR(255),
    bio TEXT,
    profile_picture VARCHAR(255),
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    role ENUM('admin', 'student', 'teacher', 'coordinator') NOT NULL DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- User academic information
CREATE TABLE user_academic_info (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    university VARCHAR(100) DEFAULT 'AKTU',
    college VARCHAR(150),
    branch_code VARCHAR(10) NOT NULL,
    current_semester INT NOT NULL,
    admission_year YEAR NOT NULL,
    current_cgpa DECIMAL(3,2),
    target_cgpa DECIMAL(3,2),
    total_backlogs INT DEFAULT 0,
    cleared_backlogs INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- User sessions for authentication
CREATE TABLE user_sessions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    session_token VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- =====================================================
-- ACADEMIC STRUCTURE TABLES
-- =====================================================

-- Branches/Departments
CREATE TABLE branches (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    full_name VARCHAR(200),
    description TEXT,
    total_semesters INT DEFAULT 8,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subjects for each branch and semester
CREATE TABLE subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(20) NOT NULL,
    name VARCHAR(150) NOT NULL,
    branch_code VARCHAR(10) NOT NULL,
    semester INT NOT NULL,
    credits INT DEFAULT 4,
    subject_type ENUM('theory', 'practical', 'project') DEFAULT 'theory',
    is_elective BOOLEAN DEFAULT FALSE,
    syllabus_url VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (branch_code) REFERENCES branches(code) ON DELETE CASCADE
);

-- CGPA tracking for each semester
CREATE TABLE user_cgpa_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    semester INT NOT NULL,
    cgpa DECIMAL(3,2) NOT NULL,
    sgpa DECIMAL(3,2),
    total_credits INT,
    year YEAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Backlog subjects tracking
CREATE TABLE user_backlogs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    subject_id INT NOT NULL,
    semester INT NOT NULL,
    status ENUM('pending', 'cleared') DEFAULT 'pending',
    attempts INT DEFAULT 1,
    cleared_date DATE NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
);

-- =====================================================
-- RESOURCES AND CONTENT TABLES
-- =====================================================

-- Study resources (notes, papers, etc.)
CREATE TABLE resources (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    subject_id INT NOT NULL,
    resource_type ENUM('notes', 'previous_paper', 'lab_manual', 'syllabus', 'book', 'video') NOT NULL,
    file_url VARCHAR(500),
    file_size INT, -- in bytes
    file_type VARCHAR(50),
    uploaded_by INT NOT NULL,
    download_count INT DEFAULT 0,
    rating DECIMAL(2,1) DEFAULT 0.0,
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    tags JSON, -- for search functionality
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE,
    FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE CASCADE
);

-- Resource downloads tracking
CREATE TABLE resource_downloads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    resource_id INT NOT NULL,
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE
);

-- Resource bookmarks/favorites
CREATE TABLE resource_bookmarks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    resource_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE,
    UNIQUE KEY unique_bookmark (user_id, resource_id)
);

-- Resource ratings and reviews
CREATE TABLE resource_ratings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    resource_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE,
    UNIQUE KEY unique_rating (user_id, resource_id)
);

-- =====================================================
-- AI TOOLS USAGE TRACKING TABLES
-- =====================================================

-- AI tools available in the system
CREATE TABLE ai_tools (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    category ENUM('aktu_specific', 'general') DEFAULT 'general',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- AI tool usage tracking
CREATE TABLE ai_tool_usage (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    tool_id INT NOT NULL,
    session_duration INT, -- in seconds
    input_data JSON, -- store input parameters
    output_generated BOOLEAN DEFAULT FALSE,
    efficiency_score INT, -- 1-100
    used_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (tool_id) REFERENCES ai_tools(id) ON DELETE CASCADE
);

-- Generated content from AI tools
CREATE TABLE ai_generated_content (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    tool_id INT NOT NULL,
    content_type ENUM('notes', 'lab_file', 'questions', 'report', 'flashcards') NOT NULL,
    title VARCHAR(200),
    content LONGTEXT NOT NULL,
    metadata JSON, -- store additional info like subject, parameters used
    is_saved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (tool_id) REFERENCES ai_tools(id) ON DELETE CASCADE
);

-- =====================================================
-- AKTU SPECIFIC FEATURES TABLES
-- =====================================================

-- AKTU exam patterns and predictions
CREATE TABLE aktu_exam_patterns (
    id INT PRIMARY KEY AUTO_INCREMENT,
    subject_id INT NOT NULL,
    year YEAR NOT NULL,
    semester_type ENUM('odd', 'even') NOT NULL,
    mcq_percentage INT DEFAULT 30,
    subjective_percentage INT DEFAULT 70,
    pattern_analysis JSON, -- store detailed pattern data
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
);

-- AKTU previous year questions
CREATE TABLE aktu_previous_questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    subject_id INT NOT NULL,
    question TEXT NOT NULL,
    question_type ENUM('mcq', 'short_answer', 'long_answer') NOT NULL,
    marks INT NOT NULL,
    year YEAR NOT NULL,
    semester_type ENUM('odd', 'even') NOT NULL,
    unit_number INT,
    topic VARCHAR(100),
    difficulty ENUM('easy', 'medium', 'hard') DEFAULT 'medium',
    frequency_score INT DEFAULT 1, -- how often this type appears
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
);

-- AKTU companies and placement data
CREATE TABLE aktu_companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    package_range VARCHAR(50), -- e.g., "3.5-7 LPA"
    hiring_pattern VARCHAR(200),
    difficulty ENUM('easy', 'medium', 'hard') DEFAULT 'medium',
    annual_hiring INT, -- number of students hired annually
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Company-specific questions
CREATE TABLE company_questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company_id INT NOT NULL,
    question TEXT NOT NULL,
    question_type ENUM('aptitude', 'technical', 'coding', 'hr') NOT NULL,
    answer TEXT,
    explanation TEXT,
    difficulty ENUM('easy', 'medium', 'hard') DEFAULT 'medium',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES aktu_companies(id) ON DELETE CASCADE
);

-- AKTU deadlines and important dates
CREATE TABLE aktu_deadlines (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    deadline_date DATE NOT NULL,
    category ENUM('exam', 'fee', 'project', 'scholarship', 'internship') NOT NULL,
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    applicable_semesters JSON, -- which semesters this applies to
    requirements JSON, -- list of requirements
    fee_amount DECIMAL(10,2),
    is_recurring BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User deadline tracking
CREATE TABLE user_deadlines (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    deadline_id INT NOT NULL,
    status ENUM('pending', 'completed', 'missed') DEFAULT 'pending',
    reminder_sent BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (deadline_id) REFERENCES aktu_deadlines(id) ON DELETE CASCADE
);

-- =====================================================
-- STUDY ANALYTICS AND TRACKING TABLES
-- =====================================================

-- Daily study sessions
CREATE TABLE study_sessions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    subject_id INT,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP,
    duration_minutes INT,
    session_type ENUM('study', 'revision', 'practice', 'ai_tool') DEFAULT 'study',
    efficiency_score INT, -- 1-100
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE SET NULL
);

-- Learning streaks
CREATE TABLE learning_streaks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    streak_date DATE NOT NULL,
    study_minutes INT DEFAULT 0,
    ai_tools_used INT DEFAULT 0,
    resources_accessed INT DEFAULT 0,
    is_active_day BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_date (user_id, streak_date)
);

-- User productivity insights
CREATE TABLE productivity_insights (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    focus_time_minutes INT DEFAULT 0,
    distraction_time_minutes INT DEFAULT 0,
    peak_hour INT, -- 0-23
    efficiency_score INT, -- 1-100
    goals_completed INT DEFAULT 0,
    insights_data JSON, -- store detailed analytics
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_date (user_id, date)
);

-- =====================================================
-- ACHIEVEMENTS AND GAMIFICATION TABLES
-- =====================================================

-- Available achievements
CREATE TABLE achievements (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(10), -- emoji or icon code
    category ENUM('study', 'ai_tools', 'academic', 'social', 'streak') NOT NULL,
    rarity ENUM('common', 'uncommon', 'rare', 'epic', 'legendary') DEFAULT 'common',
    points INT DEFAULT 0,
    criteria JSON, -- conditions to unlock achievement
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User achievements
CREATE TABLE user_achievements (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    achievement_id INT NOT NULL,
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    progress_data JSON, -- track progress towards achievement
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (achievement_id) REFERENCES achievements(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_achievement (user_id, achievement_id)
);

-- User points and levels
CREATE TABLE user_points (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_points INT DEFAULT 0,
    level INT DEFAULT 1,
    points_this_week INT DEFAULT 0,
    points_this_month INT DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- =====================================================
-- NOTIFICATIONS AND COMMUNICATION TABLES
-- =====================================================

-- Notification templates
CREATE TABLE notification_templates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    type ENUM('deadline', 'achievement', 'study_reminder', 'ai_update', 'general') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User notifications
CREATE TABLE user_notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    type ENUM('deadline', 'achievement', 'study_reminder', 'ai_update', 'general') NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    action_url VARCHAR(500),
    scheduled_for TIMESTAMP NULL,
    sent_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- User notification preferences
CREATE TABLE user_notification_preferences (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    notification_type ENUM('deadline', 'achievement', 'study_reminder', 'ai_update', 'general') NOT NULL,
    email_enabled BOOLEAN DEFAULT TRUE,
    push_enabled BOOLEAN DEFAULT TRUE,
    sms_enabled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_notification_type (user_id, notification_type)
);

-- =====================================================
-- SYSTEM CONFIGURATION TABLES
-- =====================================================

-- System settings
CREATE TABLE system_settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Activity logs for audit trail
CREATE TABLE activity_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50), -- table name
    entity_id INT,
    old_values JSON,
    new_values JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

-- User-related indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_enrollment ON users(enrollment_no);
CREATE INDEX idx_user_academic_info_user_id ON user_academic_info(user_id);

-- Resource-related indexes
CREATE INDEX idx_resources_subject_id ON resources(subject_id);
CREATE INDEX idx_resources_type ON resources(resource_type);
CREATE INDEX idx_resources_uploaded_by ON resources(uploaded_by);
CREATE INDEX idx_resource_downloads_user_id ON resource_downloads(user_id);
CREATE INDEX idx_resource_bookmarks_user_id ON resource_bookmarks(user_id);

-- AI tools indexes
CREATE INDEX idx_ai_tool_usage_user_id ON ai_tool_usage(user_id);
CREATE INDEX idx_ai_tool_usage_tool_id ON ai_tool_usage(tool_id);
CREATE INDEX idx_ai_tool_usage_date ON ai_tool_usage(used_at);

-- Study analytics indexes
CREATE INDEX idx_study_sessions_user_id ON study_sessions(user_id);
CREATE INDEX idx_study_sessions_date ON study_sessions(start_time);
CREATE INDEX idx_learning_streaks_user_id ON learning_streaks(user_id);
CREATE INDEX idx_productivity_insights_user_id ON productivity_insights(user_id);

-- Notification indexes
CREATE INDEX idx_user_notifications_user_id ON user_notifications(user_id);
CREATE INDEX idx_user_notifications_read ON user_notifications(is_read);

-- =====================================================
-- INITIAL DATA INSERTION
-- =====================================================

-- Insert branches
INSERT INTO branches (code, name, full_name, description) VALUES
('CSE', 'Computer Science', 'Computer Science and Engineering', 'Software development, algorithms, and computer systems'),
('ECE', 'Electronics', 'Electronics and Communication Engineering', 'Electronics, communication systems, and signal processing'),
('ME', 'Mechanical', 'Mechanical Engineering', 'Mechanical systems, thermodynamics, and manufacturing'),
('EE', 'Electrical', 'Electrical Engineering', 'Electrical systems, power generation, and control systems'),
('CE', 'Civil', 'Civil Engineering', 'Construction, infrastructure, and structural engineering'),
('IT', 'Information Technology', 'Information Technology', 'IT systems, networks, and software applications');

-- Insert AI tools
INSERT INTO ai_tools (name, slug, description, category) VALUES
('AKTU Syllabus Generator', 'aktu-syllabus', 'AI-curated notes based on AKTU syllabus', 'aktu_specific'),
('AKTU Exam Predictor', 'aktu-exam-predictor', 'Predict exam patterns and questions', 'aktu_specific'),
('AKTU Crash Course', 'aktu-crash-course', 'Last-minute revision materials', 'aktu_specific'),
('GPA Improvement Advisor', 'aktu-gpa-advisor', 'Academic performance improvement', 'aktu_specific'),
('Placement Prep AI', 'aktu-placement-prep', 'Company-wise preparation materials', 'aktu_specific'),
('Project Helper', 'aktu-project-helper', 'Project ideas and report generation', 'aktu_specific'),
('Lab Assistant', 'aktu-lab-assistant', 'Lab file generation and debugging', 'aktu_specific'),
('Query Bot', 'aktu-query-bot', 'AKTU-specific FAQ assistant', 'aktu_specific'),
('Deadline Tracker', 'aktu-deadline-tracker', 'Important dates and reminders', 'aktu_specific'),
('Smart Note Generator', 'note-generator', 'AI-powered note generation', 'general'),
('Question Solver', 'question-solver', 'Step-by-step problem solving', 'general'),
('Video Transcriber', 'video-transcriber', 'YouTube video transcription', 'general');

-- Insert sample achievements
INSERT INTO achievements (name, description, icon, category, rarity, points) VALUES
('AKTU AI Pioneer', 'First 100 users to try all AKTU AI tools', '🚀', 'ai_tools', 'rare', 500),
('GPA Improver', 'Increased CGPA by 0.5+ points using AI advisor', '📈', 'academic', 'common', 200),
('Lab Master', 'Generated 50+ lab files using AI assistant', '⚗️', 'ai_tools', 'uncommon', 300),
('Placement Ready', 'Completed placement prep with 90%+ mock score', '💼', 'study', 'epic', 1000),
('Study Streak Champion', '30-day continuous learning streak', '🔥', 'streak', 'legendary', 1500),
('Knowledge Seeker', 'Downloaded 500+ AKTU resources', '📚', 'study', 'common', 150),
('Early Adopter', 'Joined StudyHub in the first month', '🌟', 'social', 'rare', 300),
('Community Helper', 'Helped 50+ students with resources', '🤝', 'social', 'uncommon', 400);

-- Insert notification templates
INSERT INTO notification_templates (name, title, message, type) VALUES
('deadline_reminder', 'Deadline Reminder', 'Don\'t forget: {deadline_title} is due in {days_left} days!', 'deadline'),
('achievement_unlocked', 'Achievement Unlocked!', 'Congratulations! You\'ve earned the "{achievement_name}" achievement and {points} points!', 'achievement'),
('study_reminder', 'Study Reminder', 'Time for your daily study session! Keep your streak going!', 'study_reminder'),
('ai_tool_update', 'AI Tool Update', 'New features available in {tool_name}. Check them out now!', 'ai_update'),
('gpa_alert', 'GPA Alert', 'Your current CGPA is {cgpa}. {recommendation}', 'general');

-- Insert system settings
INSERT INTO system_settings (setting_key, setting_value, description, is_public) VALUES
('app_name', 'AKTU Notes Hub', 'Application name', TRUE),
('app_version', '1.0.0', 'Current application version', TRUE),
('maintenance_mode', 'false', 'Enable/disable maintenance mode', FALSE),
('max_file_size', '10485760', 'Maximum file upload size in bytes (10MB)', FALSE),
('ai_tools_enabled', 'true', 'Enable/disable AI tools functionality', FALSE),
('notification_batch_size', '100', 'Number of notifications to process in batch', FALSE);

-- =====================================================
-- VIEWS FOR COMMON QUERIES
-- =====================================================

-- User dashboard summary view
CREATE VIEW user_dashboard_summary AS
SELECT 
    u.id,
    u.name,
    u.email,
    uai.branch_code,
    uai.current_semester,
    uai.current_cgpa,
    uai.target_cgpa,
    uai.total_backlogs,
    up.total_points,
    up.level,
    (SELECT COUNT(*) FROM resource_downloads rd WHERE rd.user_id = u.id) as total_downloads,
    (SELECT COUNT(*) FROM resource_bookmarks rb WHERE rb.user_id = u.id) as total_bookmarks,
    (SELECT COUNT(*) FROM ai_tool_usage atu WHERE atu.user_id = u.id) as ai_tools_used,
    (SELECT COUNT(*) FROM user_achievements ua WHERE ua.user_id = u.id) as achievements_earned,
    (SELECT MAX(streak_date) FROM learning_streaks ls WHERE ls.user_id = u.id AND ls.is_active_day = TRUE) as last_active_date
FROM users u
LEFT JOIN user_academic_info uai ON u.id = uai.user_id
LEFT JOIN user_points up ON u.id = up.user_id
WHERE u.is_active = TRUE;

-- AI tools usage analytics view
CREATE VIEW ai_tools_analytics AS
SELECT 
    u.id as user_id,
    u.name as user_name,
    at.name as tool_name,
    at.slug as tool_slug,
    COUNT(atu.id) as usage_count,
    AVG(atu.efficiency_score) as avg_efficiency,
    MAX(atu.used_at) as last_used,
    SUM(atu.session_duration) as total_duration
FROM users u
JOIN ai_tool_usage atu ON u.id = atu.user_id
JOIN ai_tools at ON atu.tool_id = at.id
GROUP BY u.id, at.id;

-- Subject-wise resource count view
CREATE VIEW subject_resources_summary AS
SELECT 
    s.id as subject_id,
    s.code as subject_code,
    s.name as subject_name,
    s.branch_code,
    s.semester,
    COUNT(r.id) as total_resources,
    SUM(CASE WHEN r.resource_type = 'notes' THEN 1 ELSE 0 END) as notes_count,
    SUM(CASE WHEN r.resource_type = 'previous_paper' THEN 1 ELSE 0 END) as papers_count,
    SUM(CASE WHEN r.resource_type = 'lab_manual' THEN 1 ELSE 0 END) as lab_manuals_count,
    AVG(r.rating) as avg_rating,
    SUM(r.download_count) as total_downloads
FROM subjects s
LEFT JOIN resources r ON s.id = r.subject_id AND r.is_active = TRUE
GROUP BY s.id;

-- =====================================================
-- STORED PROCEDURES FOR COMMON OPERATIONS
-- =====================================================

DELIMITER //

-- Procedure to update user streak
CREATE PROCEDURE UpdateUserStreak(IN p_user_id INT)
BEGIN
    DECLARE v_today DATE DEFAULT CURDATE();
    DECLARE v_yesterday DATE DEFAULT DATE_SUB(CURDATE(), INTERVAL 1 DAY);
    DECLARE v_streak_exists INT DEFAULT 0;
    
    -- Check if today's streak already exists
    SELECT COUNT(*) INTO v_streak_exists 
    FROM learning_streaks 
    WHERE user_id = p_user_id AND streak_date = v_today;
    
    -- If today's streak doesn't exist, create it
    IF v_streak_exists = 0 THEN
        INSERT INTO learning_streaks (user_id, streak_date, study_minutes, ai_tools_used, resources_accessed, is_active_day)
        VALUES (p_user_id, v_today, 0, 0, 0, TRUE);
    END IF;
    
    -- Update today's streak with activity
    UPDATE learning_streaks 
    SET 
        study_minutes = study_minutes + 1,
        is_active_day = TRUE
    WHERE user_id = p_user_id AND streak_date = v_today;
END //

-- Procedure to award achievement
CREATE PROCEDURE AwardAchievement(IN p_user_id INT, IN p_achievement_id INT)
BEGIN
    DECLARE v_points INT DEFAULT 0;
    DECLARE v_exists INT DEFAULT 0;
    
    -- Check if user already has this achievement
    SELECT COUNT(*) INTO v_exists 
    FROM user_achievements 
    WHERE user_id = p_user_id AND achievement_id = p_achievement_id;
    
    -- If user doesn't have achievement, award it
    IF v_exists = 0 THEN
        -- Get achievement points
        SELECT points INTO v_points 
        FROM achievements 
        WHERE id = p_achievement_id;
        
        -- Award achievement
        INSERT INTO user_achievements (user_id, achievement_id) 
        VALUES (p_user_id, p_achievement_id);
        
        -- Update user points
        UPDATE user_points 
        SET 
            total_points = total_points + v_points,
            points_this_week = points_this_week + v_points,
            points_this_month = points_this_month + v_points
        WHERE user_id = p_user_id;
        
        -- Create notification
        INSERT INTO user_notifications (user_id, title, message, type)
        VALUES (p_user_id, 'Achievement Unlocked!', 
                CONCAT('You earned "', (SELECT name FROM achievements WHERE id = p_achievement_id), '" and ', v_points, ' points!'), 
                'achievement');
    END IF;
END //

-- Procedure to calculate and update CGPA
CREATE PROCEDURE UpdateUserCGPA(IN p_user_id INT, IN p_semester INT, IN p_sgpa DECIMAL(3,2))
BEGIN
    DECLARE v_total_points DECIMAL(10,2) DEFAULT 0;
    DECLARE v_total_credits INT DEFAULT 0;
    DECLARE v_new_cgpa DECIMAL(3,2) DEFAULT 0;
    
    -- Insert/Update semester CGPA
    INSERT INTO user_cgpa_history (user_id, semester, sgpa, year)
    VALUES (p_user_id, p_semester, p_sgpa, YEAR(CURDATE()))
    ON DUPLICATE KEY UPDATE sgpa = p_sgpa;
    
    -- Calculate new CGPA
    SELECT 
        SUM(sgpa * 4), -- assuming 4 credits per semester
        COUNT(*) * 4
    INTO v_total_points, v_total_credits
    FROM user_cgpa_history 
    WHERE user_id = p_user_id;
    
    IF v_total_credits > 0 THEN
        SET v_new_cgpa = v_total_points / v_total_credits;
        
        -- Update user academic info
        UPDATE user_academic_info 
        SET current_cgpa = v_new_cgpa 
        WHERE user_id = p_user_id;
    END IF;
END //

DELIMITER ;

-- =====================================================
-- TRIGGERS FOR AUTOMATIC UPDATES
-- =====================================================

DELIMITER //

-- Trigger to update resource rating when new rating is added
CREATE TRIGGER update_resource_rating 
AFTER INSERT ON resource_ratings
FOR EACH ROW
BEGIN
    UPDATE resources 
    SET rating = (
        SELECT AVG(rating) 
        FROM resource_ratings 
        WHERE resource_id = NEW.resource_id
    )
    WHERE id = NEW.resource_id;
END //

-- Trigger to increment download count
CREATE TRIGGER increment_download_count 
AFTER INSERT ON resource_downloads
FOR EACH ROW
BEGIN
    UPDATE resources 
    SET download_count = download_count + 1 
    WHERE id = NEW.resource_id;
END //

-- Trigger to log user activity
CREATE TRIGGER log_user_activity 
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    INSERT INTO activity_logs (user_id, action, entity_type, entity_id, old_values, new_values)
    VALUES (NEW.id, 'UPDATE', 'users', NEW.id, 
            JSON_OBJECT('name', OLD.name, 'email', OLD.email),
            JSON_OBJECT('name', NEW.name, 'email', NEW.email));
END //

-- Trigger to update AI tool usage stats
CREATE TRIGGER update_ai_usage_stats 
AFTER INSERT ON ai_tool_usage
FOR EACH ROW
BEGIN
    -- Update user streak
    CALL UpdateUserStreak(NEW.user_id);
    
    -- Update learning streak AI tools count
    UPDATE learning_streaks 
    SET ai_tools_used = ai_tools_used + 1 
    WHERE user_id = NEW.user_id AND streak_date = CURDATE();
END //

DELIMITER ;


INSERT INTO subjects (code, name, branch_code, semester, credits, subject_type) VALUES
('KCS101', 'Programming Fundamentals', 'CSE', 1, 4, 'theory'),
('KCS102', 'Programming Lab', 'CSE', 1, 2, 'practical'),
('KCS201', 'Data Structures', 'CSE', 2, 4, 'theory'),
('KCS202', 'Data Structures Lab', 'CSE', 2, 2, 'practical'),
('KCS301', 'Database Systems', 'CSE', 3, 4, 'theory'),
('KCS302', 'Database Lab', 'CSE', 3, 2, 'practical'),
('KCS401', 'Operating Systems', 'CSE', 4, 4, 'theory'),
('KCS402', 'OS Lab', 'CSE', 4, 2, 'practical'),
('KCS501', 'Computer Networks', 'CSE', 5, 4, 'theory'),
('KCS502', 'Networks Lab', 'CSE', 5, 2, 'practical'),
('KCS601', 'Software Engineering', 'CSE', 6, 4, 'theory'),
('KCS602', 'SE Lab', 'CSE', 6, 2, 'practical'),
('KCS701', 'Machine Learning', 'CSE', 7, 4, 'theory'),
('KCS702', 'ML Lab', 'CSE', 7, 2, 'practical'),
('KCS801', 'Major Project', 'CSE', 8, 8, 'project');


INSERT INTO aktu_companies (name, package_range, hiring_pattern, difficulty, annual_hiring) VALUES
('Tata Consultancy Services', '3.5-7 LPA', 'Aptitude + Technical + HR', 'medium', 500),
('Wipro Technologies', '3.5-6 LPA', 'Aptitude + Technical + HR', 'medium', 300),
('Cognizant Technology Solutions', '4-6.5 LPA', 'Aptitude + Coding + HR', 'medium', 400),
('Infosys Limited', '3.5-6 LPA', 'Aptitude + Technical + HR', 'medium', 350),
('HCL Technologies', '3.2-5.5 LPA', 'Aptitude + Technical + HR', 'easy', 250),
('Tech Mahindra', '3.8-6 LPA', 'Aptitude + Technical + HR', 'medium', 200);


INSERT INTO aktu_deadlines (title, description, deadline_date, category, priority, fee_amount) VALUES
('Semester Exam Form Submission', 'Submit examination form for current semester', '2024-12-15', 'exam', 'high', 800.00),
('Fee Payment - Winter Session', 'Pay semester fee for winter session', '2024-12-30', 'fee', 'high', 45000.00),
('Project Synopsis Submission', 'Submit final year project synopsis', '2025-01-15', 'project', 'medium', 500.00),
('Scholarship Application', 'Apply for UP State Scholarship', '2025-01-31', 'scholarship', 'medium', 0.00),
('Internship Report Submission', 'Submit summer internship report', '2025-02-15', 'internship', 'medium', 0.00);

