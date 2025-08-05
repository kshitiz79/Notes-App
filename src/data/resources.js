// Comprehensive data structure for BTech resources
export const branches = {
  CSE: {
    name: "Computer Science Engineering",
    description: "Programming, algorithms, software development, and computer systems",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/20",
    students: 15420,
    resources: 8934,
    subjects: {
      1: ["Mathematics-I", "Physics", "Chemistry", "English", "Engineering-Graphics", "Programming-Fundamentals"],
      2: ["Mathematics-II", "Physics-II", "Chemistry-II", "Environmental-Science", "Workshop-Practice", "Data-Structures"],
      3: ["Mathematics-III", "Digital-Logic", "Computer-Organization", "Database-Systems", "Object-Oriented-Programming", "Discrete-Mathematics"],
      4: ["Computer-Networks", "Operating-Systems", "Software-Engineering", "Algorithm-Analysis", "Web-Technologies", "Computer-Graphics"],
      5: ["Machine-Learning", "Compiler-Design", "Distributed-Systems", "Information-Security", "Mobile-Computing", "Artificial-Intelligence"],
      6: ["Data-Mining", "Cloud-Computing", "Network-Security", "Human-Computer-Interaction", "Project-Management", "Advanced-Algorithms"],
      7: ["Big-Data-Analytics", "Blockchain-Technology", "IoT-Systems", "Advanced-Database", "Capstone-Project-I", "Industry-Training"],
      8: ["Advanced-AI", "Quantum-Computing", "Research-Methodology", "Entrepreneurship", "Capstone-Project-II", "Thesis-Work"]
    }
  },
  ECE: {
    name: "Electronics & Communication Engineering",
    description: "Circuit design, communication systems, and electronic devices",
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/20",
    students: 12350,
    resources: 6721,
    subjects: {
      1: ["Mathematics-I", "Physics", "Chemistry", "English", "Engineering-Graphics", "Basic-Electronics"],
      2: ["Mathematics-II", "Physics-II", "Chemistry-II", "Environmental-Science", "Workshop-Practice", "Circuit-Analysis"],
      3: ["Mathematics-III", "Electronic-Devices", "Digital-Electronics", "Network-Analysis", "Electromagnetic-Theory", "Signals-Systems"],
      4: ["Analog-Circuits", "Communication-Systems", "Microprocessors", "Control-Systems", "VLSI-Design", "Antenna-Theory"],
      5: ["Digital-Signal-Processing", "Microwave-Engineering", "Optical-Communication", "Embedded-Systems", "Power-Electronics", "RF-Engineering"],
      6: ["Satellite-Communication", "Mobile-Communication", "Digital-Image-Processing", "Biomedical-Electronics", "Nano-Electronics", "Project-Work"],
      7: ["Advanced-Communication", "MEMS-Technology", "Wireless-Networks", "Speech-Processing", "Capstone-Project-I", "Industry-Training"],
      8: ["5G-Technology", "AI-in-Electronics", "Research-Project", "Entrepreneurship", "Capstone-Project-II", "Thesis-Work"]
    }
  },
  ME: {
    name: "Mechanical Engineering",
    description: "Design, manufacturing, thermodynamics, and mechanical systems",
    color: "from-green-500 to-teal-500",
    borderColor: "border-green-500/20",
    students: 11200,
    resources: 5843,
    subjects: {
      1: ["Mathematics-I", "Physics", "Chemistry", "English", "Engineering-Graphics", "Workshop-Technology"],
      2: ["Mathematics-II", "Physics-II", "Chemistry-II", "Environmental-Science", "Material-Science", "Thermodynamics-I"],
      3: ["Mathematics-III", "Strength-of-Materials", "Fluid-Mechanics", "Manufacturing-Processes", "Machine-Drawing", "Thermodynamics-II"],
      4: ["Heat-Transfer", "Machine-Design", "Production-Technology", "Fluid-Machinery", "Metrology", "Industrial-Engineering"],
      5: ["IC-Engines", "Refrigeration-AC", "Finite-Element-Analysis", "Operations-Research", "Automation", "Power-Plant-Engineering"],
      6: ["CAD-CAM", "Robotics", "Renewable-Energy", "Quality-Control", "Project-Management", "Advanced-Manufacturing"],
      7: ["Mechatronics", "Composite-Materials", "Additive-Manufacturing", "Energy-Management", "Capstone-Project-I", "Industry-Training"],
      8: ["Advanced-Robotics", "Sustainable-Engineering", "Research-Methodology", "Entrepreneurship", "Capstone-Project-II", "Thesis-Work"]
    }
  },
  EE: {
    name: "Electrical Engineering",
    description: "Power systems, electrical machines, and control systems",
    color: "from-yellow-500 to-orange-500",
    borderColor: "border-yellow-500/20",
    students: 9800,
    resources: 4567,
    subjects: {
      1: ["Mathematics-I", "Physics", "Chemistry", "English", "Engineering-Graphics", "Basic-Electrical"],
      2: ["Mathematics-II", "Physics-II", "Chemistry-II", "Environmental-Science", "Workshop-Practice", "Circuit-Theory"],
      3: ["Mathematics-III", "Electrical-Machines-I", "Electronic-Devices", "Network-Analysis", "Electromagnetic-Fields", "Measurements"],
      4: ["Electrical-Machines-II", "Power-Systems-I", "Control-Systems", "Power-Electronics", "Digital-Electronics", "Microprocessors"],
      5: ["Power-Systems-II", "Protection-Switchgear", "Electric-Drives", "Renewable-Energy", "HVDC-Transmission", "Industrial-Automation"],
      6: ["Smart-Grid", "Power-Quality", "Electric-Vehicles", "Energy-Management", "Project-Work", "Advanced-Control"],
      7: ["Distributed-Generation", "Power-System-Optimization", "AI-in-Power", "Energy-Storage", "Capstone-Project-I", "Industry-Training"],
      8: ["Future-Grid-Technologies", "Sustainable-Power", "Research-Project", "Entrepreneurship", "Capstone-Project-II", "Thesis-Work"]
    }
  },
  CE: {
    name: "Civil Engineering",
    description: "Structural design, construction, and infrastructure development",
    color: "from-red-500 to-pink-500",
    borderColor: "border-red-500/20",
    students: 8900,
    resources: 4123,
    subjects: {
      1: ["Mathematics-I", "Physics", "Chemistry", "English", "Engineering-Graphics", "Building-Materials"],
      2: ["Mathematics-II", "Physics-II", "Chemistry-II", "Environmental-Science", "Surveying", "Mechanics-of-Solids"],
      3: ["Mathematics-III", "Structural-Analysis-I", "Fluid-Mechanics", "Geotechnical-Engineering", "Construction-Technology", "Concrete-Technology"],
      4: ["Structural-Analysis-II", "Design-of-Concrete", "Transportation-Engineering", "Water-Resources", "Environmental-Engineering", "Estimation-Costing"],
      5: ["Design-of-Steel", "Foundation-Engineering", "Highway-Engineering", "Hydrology", "Construction-Management", "Advanced-Surveying"],
      6: ["Earthquake-Engineering", "Bridge-Engineering", "Urban-Planning", "Water-Treatment", "Project-Management", "GIS-Remote-Sensing"],
      7: ["Advanced-Structural", "Sustainable-Construction", "Smart-Cities", "Disaster-Management", "Capstone-Project-I", "Industry-Training"],
      8: ["Green-Building", "Infrastructure-Management", "Research-Project", "Entrepreneurship", "Capstone-Project-II", "Thesis-Work"]
    }
  },
  IT: {
    name: "Information Technology",
    description: "Information systems, web development, and IT management",
    color: "from-purple-500 to-indigo-500",
    borderColor: "border-purple-500/20",
    students: 7650,
    resources: 3890,
    subjects: {
      1: ["Mathematics-I", "Physics", "Chemistry", "English", "Engineering-Graphics", "Computer-Fundamentals"],
      2: ["Mathematics-II", "Physics-II", "Chemistry-II", "Environmental-Science", "Programming-C", "Data-Structures"],
      3: ["Mathematics-III", "Object-Oriented-Programming", "Database-Systems", "Computer-Networks", "Web-Technologies", "Digital-Logic"],
      4: ["Software-Engineering", "Operating-Systems", "System-Analysis", "Network-Security", "Mobile-Computing", "E-Commerce"],
      5: ["Data-Warehousing", "Distributed-Systems", "Information-Security", "Web-Services", "Cloud-Computing", "IT-Project-Management"],
      6: ["Big-Data-Analytics", "Machine-Learning", "Blockchain", "DevOps", "Quality-Assurance", "Advanced-Networking"],
      7: ["AI-Applications", "IoT-Systems", "Cyber-Security", "Digital-Forensics", "Capstone-Project-I", "Industry-Training"],
      8: ["Advanced-Analytics", "Enterprise-Architecture", "Research-Methodology", "Entrepreneurship", "Capstone-Project-II", "Thesis-Work"]
    }
  }
};

// Resource types and their properties
export const resourceTypes = {
  notes: {
    name: "Study Notes",
    icon: "FileText",
    color: "bg-blue-100 text-blue-800",
    description: "Comprehensive study materials and lecture notes"
  },
  papers: {
    name: "Question Papers",
    icon: "FileImage", 
    color: "bg-green-100 text-green-800",
    description: "Previous year question papers and sample papers"
  },
  solutions: {
    name: "Solutions",
    icon: "CheckCircle",
    color: "bg-purple-100 text-purple-800", 
    description: "Solved question papers and answer keys"
  },
  books: {
    name: "Reference Books",
    icon: "Book",
    color: "bg-orange-100 text-orange-800",
    description: "Recommended textbooks and reference materials"
  },
  syllabus: {
    name: "Syllabus",
    icon: "File",
    color: "bg-gray-100 text-gray-800",
    description: "Course syllabus and curriculum details"
  },
  lab: {
    name: "Lab Manuals",
    icon: "Settings",
    color: "bg-red-100 text-red-800",
    description: "Laboratory manuals and practical guides"
  }
};

// Sample resources using the PDFs in public folder
export const sampleResources = [
  {
    id: 1,
    title: "Data Structures and Algorithms Complete Guide",
    subject: "Data-Structures",
    semester: 2,
    branch: "CSE",
    type: "notes",
    fileName: "notes1.pdf",
    downloads: 12548,
    rating: 4.8,
    uploadDate: "2024-01-15",
    fileSize: "2.4 MB",
    description: "Comprehensive guide covering all data structures with examples and implementations",
    tags: ["arrays", "linked-lists", "trees", "graphs", "algorithms"],
    university: "Generic University",
    year: 2023
  },
  {
    id: 2,
    title: "Computer Networks Previous Year Papers 2020-2023",
    subject: "Computer-Networks",
    semester: 4,
    branch: "CSE",
    type: "papers",
    fileName: "notes2.pdf",
    downloads: 8936,
    rating: 4.6,
    uploadDate: "2024-01-10",
    fileSize: "1.8 MB",
    description: "Collection of previous year question papers with marking schemes",
    tags: ["networking", "protocols", "OSI", "TCP-IP"],
    university: "Generic University",
    year: 2023
  },
  {
    id: 3,
    title: "Operating Systems Lab Manual",
    subject: "Operating-Systems",
    semester: 4,
    branch: "CSE",
    type: "lab",
    fileName: "notes3.pdf",
    downloads: 5674,
    rating: 4.9,
    uploadDate: "2024-01-08",
    fileSize: "845 KB",
    description: "Complete lab manual with practical exercises and solutions",
    tags: ["processes", "threads", "scheduling", "memory-management"],
    university: "Generic University",
    year: 2023
  },
  {
    id: 4,
    title: "Digital Electronics Circuit Design Notes",
    subject: "Digital-Electronics",
    semester: 3,
    branch: "ECE",
    type: "notes",
    fileName: "notes4.pdf",
    downloads: 7832,
    rating: 4.5,
    uploadDate: "2024-01-05",
    fileSize: "3.2 MB",
    description: "Detailed notes on digital circuit design and analysis",
    tags: ["logic-gates", "combinational", "sequential", "flip-flops"],
    university: "Generic University",
    year: 2023
  },
  {
    id: 5,
    title: "Thermodynamics Solved Problems",
    subject: "Thermodynamics-I",
    semester: 2,
    branch: "ME",
    type: "solutions",
    fileName: "notes5.pdf",
    downloads: 6543,
    rating: 4.7,
    uploadDate: "2024-01-03",
    fileSize: "2.1 MB",
    description: "Solved problems and numerical examples in thermodynamics",
    tags: ["heat", "work", "entropy", "cycles"],
    university: "Generic University",
    year: 2023
  },
  {
    id: 6,
    title: "Power Systems Analysis Reference Book",
    subject: "Power-Systems-I",
    semester: 4,
    branch: "EE",
    type: "books",
    fileName: "notes6.pdf",
    downloads: 9654,
    rating: 4.8,
    uploadDate: "2024-01-01",
    fileSize: "2.8 MB",
    description: "Comprehensive reference book for power system analysis",
    tags: ["transmission", "distribution", "load-flow", "fault-analysis"],
    university: "Generic University",
    year: 2023
  },
  {
    id: 7,
    title: "Structural Analysis Question Papers 2019-2023",
    subject: "Structural-Analysis-I",
    semester: 3,
    branch: "CE",
    type: "papers",
    fileName: "notes7.pdf",
    downloads: 4321,
    rating: 4.4,
    uploadDate: "2023-12-28",
    fileSize: "1.9 MB",
    description: "Previous year question papers for structural analysis",
    tags: ["beams", "trusses", "frames", "deflection"],
    university: "Generic University",
    year: 2023
  }
];

// Generate more resources for each branch and semester
export const generateResources = () => {
  const allResources = [...sampleResources];
  let resourceId = 8;

  Object.keys(branches).forEach(branchCode => {
    const branch = branches[branchCode];
    
    Object.keys(branch.subjects).forEach(semester => {
      branch.subjects[semester].forEach(subject => {
        // Generate 2-3 resources per subject
        const resourceCount = Math.floor(Math.random() * 2) + 2;
        
        for (let i = 0; i < resourceCount; i++) {
          const types = Object.keys(resourceTypes);
          const randomType = types[Math.floor(Math.random() * types.length)];
          const pdfFiles = ["notes1.pdf", "notes2.pdf", "notes3.pdf", "notes4.pdf", "notes5.pdf", "notes6.pdf", "notes7.pdf"];
          const randomPdf = pdfFiles[Math.floor(Math.random() * pdfFiles.length)];
          
          allResources.push({
            id: resourceId++,
            title: `${subject.replace(/-/g, ' ')} ${resourceTypes[randomType].name}`,
            subject: subject,
            semester: parseInt(semester),
            branch: branchCode,
            type: randomType,
            fileName: randomPdf,
            downloads: Math.floor(Math.random() * 10000) + 1000,
            rating: (Math.random() * 1.5 + 3.5).toFixed(1),
            uploadDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
            fileSize: `${(Math.random() * 3 + 0.5).toFixed(1)} MB`,
            description: `${resourceTypes[randomType].description} for ${subject.replace(/-/g, ' ')}`,
            tags: subject.toLowerCase().split('-'),
            university: "Generic University",
            year: 2023
          });
        }
      });
    });
  });

  return allResources;
};

export const allResources = generateResources();

// Helper functions
export const getResourcesByBranch = (branchCode) => {
  return allResources.filter(resource => resource.branch === branchCode);
};

export const getResourcesBySemester = (branchCode, semester) => {
  return allResources.filter(resource => 
    resource.branch === branchCode && resource.semester === parseInt(semester)
  );
};

export const getResourcesBySubject = (branchCode, subject) => {
  return allResources.filter(resource => 
    resource.branch === branchCode && resource.subject === subject
  );
};

export const getResourceById = (id) => {
  return allResources.find(resource => resource.id === parseInt(id));
};

export const searchResources = (query, filters = {}) => {
  let filtered = allResources;

  // Apply text search
  if (query) {
    const searchTerm = query.toLowerCase();
    filtered = filtered.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm) ||
      resource.subject.toLowerCase().includes(searchTerm) ||
      resource.description.toLowerCase().includes(searchTerm) ||
      resource.tags.some(tag => tag.includes(searchTerm))
    );
  }

  // Apply filters
  if (filters.branch) {
    filtered = filtered.filter(resource => resource.branch === filters.branch);
  }
  
  if (filters.semester) {
    filtered = filtered.filter(resource => resource.semester === parseInt(filters.semester));
  }
  
  if (filters.type) {
    filtered = filtered.filter(resource => resource.type === filters.type);
  }

  return filtered;
};