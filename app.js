// Enhanced QuizMaster Application with Fixed Navigation
class EnhancedQuizApp {
    constructor() {
        // Quiz data (same as before)
        this.quizData = {
            "Computer Networks": [
                {
                    "id": 1,
                    "question": "What is a computer network?",
                    "options": {
                        "A": "A device used to display information on a computer screen",
                        "B": "A collection of interconnected computers and devices that can communicate and share resources",
                        "C": "A type of software used to create documents and presentations",
                        "D": "The physical casing that protects a computer's internal components"
                    },
                    "correct_answer": "B",
                    "explanation": "A computer network refers to a collection of computers and devices linked together to share information, resources, and services.",
                    "difficulty": "easy"
                },
                {
                    "id": 2,
                    "question": "What is the Internet?",
                    "options": {
                        "A": "A single network",
                        "B": "A collection of unrelated computers",
                        "C": "Interconnection of wide area networks",
                        "D": "A network of interconnected local area networks"
                    },
                    "correct_answer": "C",
                    "explanation": "The Internet is a global network formed by connecting wide area networks (WANs), enabling worldwide communication and data sharing.",
                    "difficulty": "medium"
                },
                {
                    "id": 3,
                    "question": "Which of the following is an example of Bluetooth?",
                    "options": {
                        "A": "Wide area network",
                        "B": "Virtual private network",
                        "C": "Local area network",
                        "D": "Personal area network"
                    },
                    "correct_answer": "D",
                    "explanation": "Bluetooth is a wireless technology used to create a wireless personal area network for data transfer up to a distance of 10 meters.",
                    "difficulty": "easy"
                },
                {
                    "id": 4,
                    "question": "Which device forwards packets between networks by processing the routing information included in the packet?",
                    "options": {
                        "A": "Hub",
                        "B": "Router",
                        "C": "Bridge",
                        "D": "Firewall"
                    },
                    "correct_answer": "B",
                    "explanation": "A router is a networking device that forwards data packets between computer networks using routing protocols to find the optimal path.",
                    "difficulty": "medium"
                },
                {
                    "id": 5,
                    "question": "What are nodes in a computer network?",
                    "options": {
                        "A": "The computer that routes the data",
                        "B": "The computer that terminates the data",
                        "C": "The computer that originates the data",
                        "D": "All of the mentioned"
                    },
                    "correct_answer": "D",
                    "explanation": "In a computer network, a node can be anything that is capable of sending, receiving, or routing data. This includes routers, computers, and smartphones.",
                    "difficulty": "hard"
                },
                {
                    "id": 6,
                    "question": "Which topology requires a central controller or hub?",
                    "options": {
                        "A": "Ring",
                        "B": "Bus",
                        "C": "Star",
                        "D": "Mesh"
                    },
                    "correct_answer": "C",
                    "explanation": "In star topology, all computers are connected to a central hub, and every message goes through the hub to reach its destination.",
                    "difficulty": "easy"
                },
                {
                    "id": 7,
                    "question": "What is the full form of OSI?",
                    "options": {
                        "A": "Optical service implementation",
                        "B": "Open service Internet",
                        "C": "Open system interconnection",
                        "D": "Operating system interface"
                    },
                    "correct_answer": "C",
                    "explanation": "OSI stands for Open System Interconnection, a reference model that provides a structured plan for network communication.",
                    "difficulty": "medium"
                },
                {
                    "id": 8,
                    "question": "How many layers are there in the ISO OSI reference model?",
                    "options": {
                        "A": "7",
                        "B": "5",
                        "C": "4",
                        "D": "6"
                    },
                    "correct_answer": "A",
                    "explanation": "The OSI model has 7 layers: Application, Presentation, Session, Transport, Network, Data Link, and Physical layer.",
                    "difficulty": "easy"
                },
                {
                    "id": 9,
                    "question": "Which layer provides the services to user?",
                    "options": {
                        "A": "Physical layer",
                        "B": "Presentation layer",
                        "C": "Session layer",
                        "D": "Application layer"
                    },
                    "correct_answer": "D",
                    "explanation": "The Application layer provides the interface between applications and the network, directly serving the user.",
                    "difficulty": "medium"
                },
                {
                    "id": 10,
                    "question": "Which protocol is commonly used for transmitting web pages over the internet?",
                    "options": {
                        "A": "SMTP",
                        "B": "FTP",
                        "C": "HTTP",
                        "D": "SNMP"
                    },
                    "correct_answer": "C",
                    "explanation": "HTTP (Hypertext Transfer Protocol) is the foundation protocol for transmitting web pages and other data on the World Wide Web.",
                    "difficulty": "easy"
                }
            ],
            "Network Security": [
                {
                    "id": 1,
                    "question": "What is the primary purpose of a firewall in network security?",
                    "options": {
                        "A": "Data encryption",
                        "B": "To filter incoming and outgoing network traffic",
                        "C": "To speed up network traffic",
                        "D": "To monitor employee activity"
                    },
                    "correct_answer": "B",
                    "explanation": "A firewall acts as a barrier that filters network traffic based on security rules to prevent unauthorized access.",
                    "difficulty": "easy"
                },
                {
                    "id": 2,
                    "question": "Which of the following is NOT an objective of network security?",
                    "options": {
                        "A": "Confidentiality",
                        "B": "Integrity",
                        "C": "Availability",
                        "D": "Broadcasting"
                    },
                    "correct_answer": "D",
                    "explanation": "The CIA triad (Confidentiality, Integrity, Availability) forms the core objectives of network security. Broadcasting is not a security objective.",
                    "difficulty": "medium"
                },
                {
                    "id": 3,
                    "question": "What does VPN stand for and what is its primary purpose?",
                    "options": {
                        "A": "Virtual Public Network - To speed up network traffic",
                        "B": "Virtual Private Network - To provide secure communication over public networks",
                        "C": "Variable Packet Network - To distribute packets evenly",
                        "D": "Verified Protocol Network - To authenticate users"
                    },
                    "correct_answer": "B",
                    "explanation": "A VPN creates a secure encrypted tunnel over a public network to ensure privacy and data integrity.",
                    "difficulty": "easy"
                },
                {
                    "id": 4,
                    "question": "What type of attack attempts to make a network resource unavailable by flooding it with traffic?",
                    "options": {
                        "A": "Phishing",
                        "B": "Denial of Service (DoS)",
                        "C": "Man-in-the-Middle",
                        "D": "SQL Injection"
                    },
                    "correct_answer": "B",
                    "explanation": "DoS attacks overwhelm network resources with excessive traffic to deny service to legitimate users.",
                    "difficulty": "medium"
                },
                {
                    "id": 5,
                    "question": "What does DDoS stand for?",
                    "options": {
                        "A": "Distributed Data of Service",
                        "B": "Distributed Denial of Service",
                        "C": "Data Denial of Service",
                        "D": "Dynamic Denial of Service"
                    },
                    "correct_answer": "B",
                    "explanation": "DDoS attacks use multiple compromised systems to flood a target network, overwhelming its resources.",
                    "difficulty": "hard"
                },
                {
                    "id": 6,
                    "question": "Which of the following best defines phishing?",
                    "options": {
                        "A": "Sending unsolicited bulk email",
                        "B": "Stealing confidential info by pretending to be a trustworthy entity",
                        "C": "A software to scan networks",
                        "D": "Redirecting network traffic"
                    },
                    "correct_answer": "B",
                    "explanation": "Phishing is a cyberattack that attempts to steal sensitive information by impersonating a trustworthy entity.",
                    "difficulty": "easy"
                },
                {
                    "id": 7,
                    "question": "What is the primary function of an Intrusion Detection System (IDS)?",
                    "options": {
                        "A": "Prevent unauthorized access",
                        "B": "Detect and alert on suspicious activities",
                        "C": "Encrypt network traffic",
                        "D": "Backup network data"
                    },
                    "correct_answer": "B",
                    "explanation": "IDS monitors network traffic to detect potential security breaches and triggers alerts.",
                    "difficulty": "medium"
                },
                {
                    "id": 8,
                    "question": "What type of encryption uses the same key for both encryption and decryption?",
                    "options": {
                        "A": "Asymmetric encryption",
                        "B": "Symmetric encryption",
                        "C": "Hashing",
                        "D": "Public key encryption"
                    },
                    "correct_answer": "B",
                    "explanation": "Symmetric encryption uses the same key for encrypting and decrypting data, requiring secure key exchange.",
                    "difficulty": "hard"
                },
                {
                    "id": 9,
                    "question": "What does the 'Zero Trust' security model imply?",
                    "options": {
                        "A": "Trust all devices within the corporate network",
                        "B": "No device or user is trusted by default",
                        "C": "Trust devices based on IP addresses",
                        "D": "Allow all traffic inside the firewall"
                    },
                    "correct_answer": "B",
                    "explanation": "Zero Trust assumes no entity is trusted by default and requires verification for every access request.",
                    "difficulty": "hard"
                },
                {
                    "id": 10,
                    "question": "What is two-factor authentication (2FA)?",
                    "options": {
                        "A": "Using two passwords",
                        "B": "Authentication using password and additional verification",
                        "C": "Authentication from two separate devices",
                        "D": "Biometric authentication only"
                    },
                    "correct_answer": "B",
                    "explanation": "2FA requires something the user knows (password) and something they have or are (e.g., OTP, biometric) to increase security.",
                    "difficulty": "medium"
                }
            ],
            "OOPs": [
                {
                    "id": 1,
                    "question": "What does OOP stand for?",
                    "options": {
                        "A": "Objective Operation Procedure",
                        "B": "Object-Oriented Programming",
                        "C": "Oriented Object Programming",
                        "D": "Operational Object Programming"
                    },
                    "correct_answer": "B",
                    "explanation": "OOP stands for Object-Oriented Programming, a programming paradigm based on the concept of 'objects' which contain data and methods.",
                    "difficulty": "easy"
                },
                {
                    "id": 2,
                    "question": "Which of the following is NOT a basic concept of OOP?",
                    "options": {
                        "A": "Classes",
                        "B": "Objects",
                        "C": "Functions",
                        "D": "Inheritance"
                    },
                    "correct_answer": "C",
                    "explanation": "Functions are part of programming languages generally, but are not one of the fundamental OOP concepts which are classes, objects, inheritance, polymorphism, abstraction, and encapsulation.",
                    "difficulty": "medium"
                },
                {
                    "id": 3,
                    "question": "Which principle of OOP allows the same function to be used in different ways?",
                    "options": {
                        "A": "Inheritance",
                        "B": "Polymorphism",
                        "C": "Encapsulation",
                        "D": "Abstraction"
                    },
                    "correct_answer": "B",
                    "explanation": "Polymorphism allows methods to do different things based on the object they are acting upon, enabling function overloading and overriding.",
                    "difficulty": "medium"
                },
                {
                    "id": 4,
                    "question": "Which concept of OOP binds data and functions together?",
                    "options": {
                        "A": "Inheritance",
                        "B": "Encapsulation",
                        "C": "Polymorphism",
                        "D": "Abstraction"
                    },
                    "correct_answer": "B",
                    "explanation": "Encapsulation wraps data and methods into a single unit or class and restricts access to some of the object's components.",
                    "difficulty": "easy"
                },
                {
                    "id": 5,
                    "question": "Which OOP concept is used to hide internal details and show only functionalities?",
                    "options": {
                        "A": "Encapsulation",
                        "B": "Abstraction",
                        "C": "Inheritance",
                        "D": "Polymorphism"
                    },
                    "correct_answer": "B",
                    "explanation": "Abstraction hides complex reality while exposing only the necessary parts, emphasizing the interface rather than implementation details.",
                    "difficulty": "hard"
                },
                {
                    "id": 6,
                    "question": "Which OOP feature indicates reusability?",
                    "options": {
                        "A": "Abstraction",
                        "B": "Polymorphism",
                        "C": "Inheritance",
                        "D": "Encapsulation"
                    },
                    "correct_answer": "C",
                    "explanation": "Inheritance allows new objects to take on properties of existing objects, promoting code reuse and hierarchical classification.",
                    "difficulty": "easy"
                },
                {
                    "id": 7,
                    "question": "What is an object in OOP?",
                    "options": {
                        "A": "A function",
                        "B": "An instance of a class",
                        "C": "A variable",
                        "D": "A data type"
                    },
                    "correct_answer": "B",
                    "explanation": "Objects are instances of classes encapsulating data and behavior defined by the class.",
                    "difficulty": "medium"
                },
                {
                    "id": 8,
                    "question": "What does the 'this' keyword refer to in OOP?",
                    "options": {
                        "A": "The current class",
                        "B": "The current object",
                        "C": "The parent class",
                        "D": "None of the above"
                    },
                    "correct_answer": "B",
                    "explanation": "The 'this' keyword refers to the current object instance within a class method.",
                    "difficulty": "easy"
                },
                {
                    "id": 9,
                    "question": "Which keyword is used to inherit a class in Java?",
                    "options": {
                        "A": "this",
                        "B": "extends",
                        "C": "implements",
                        "D": "super"
                    },
                    "correct_answer": "B",
                    "explanation": "In Java, 'extends' is used for inheritance to create a subclass from a superclass.",
                    "difficulty": "hard"
                },
                {
                    "id": 10,
                    "question": "What is method overriding?",
                    "options": {
                        "A": "Having two methods with the same name but different parameters",
                        "B": "Replacing a parent class method in a subclass with new implementation",
                        "C": "Combining two methods into one",
                        "D": "Changing data members of a class"
                    },
                    "correct_answer": "B",
                    "explanation": "Method overriding means redefining a parent class method in a child class to provide specific implementation.",
                    "difficulty": "medium"
                }
            ],
            "DBMS": [
                {
                    "id": 1,
                    "question": "What does DBMS stand for?",
                    "options": {
                        "A": "Data Binary Management System",
                        "B": "Database Management System",
                        "C": "Database Management Service",
                        "D": "Data Backup Management System"
                    },
                    "correct_answer": "B",
                    "explanation": "DBMS stands for Database Management System, which stores the data and allows authorized users to manipulate and modify the data.",
                    "difficulty": "easy"
                },
                {
                    "id": 2,
                    "question": "What is a database?",
                    "options": {
                        "A": "Organized collection of information that cannot be accessed, updated, and managed",
                        "B": "Collection of data or information without organizing",
                        "C": "Organized collection of data or information that can be accessed, updated, and managed",
                        "D": "Organized collection of data that cannot be updated"
                    },
                    "correct_answer": "C",
                    "explanation": "A database is defined as an organized collection of data or information for easy access, updating, and management in a computer.",
                    "difficulty": "easy"
                },
                {
                    "id": 3,
                    "question": "Which of the following is NOT a function of the database?",
                    "options": {
                        "A": "Managing stored data",
                        "B": "Manipulating data",
                        "C": "Security for stored data",
                        "D": "Analysing code"
                    },
                    "correct_answer": "D",
                    "explanation": "Analysing code is not a function of the database. DBMS allows authorized users to update, store, manipulate, or access data.",
                    "difficulty": "medium"
                },
                {
                    "id": 4,
                    "question": "Which of the following is a type of DBMS model?",
                    "options": {
                        "A": "Relational",
                        "B": "Network",
                        "C": "Hierarchical",
                        "D": "All of the above"
                    },
                    "correct_answer": "D",
                    "explanation": "All three - Relational, Network, and Hierarchical - are types of DBMS models used to organize data.",
                    "difficulty": "medium"
                },
                {
                    "id": 5,
                    "question": "What SQL statement retrieves data from a database?",
                    "options": {
                        "A": "SELECT",
                        "B": "INSERT",
                        "C": "UPDATE",
                        "D": "DELETE"
                    },
                    "correct_answer": "A",
                    "explanation": "The SELECT statement is used to query and retrieve data from one or more tables in a database.",
                    "difficulty": "easy"
                },
                {
                    "id": 6,
                    "question": "What is a primary key used for?",
                    "options": {
                        "A": "Uniquely identify a record in a table",
                        "B": "Enforce relationships between tables",
                        "C": "Prevent data duplication",
                        "D": "All of the above"
                    },
                    "correct_answer": "D",
                    "explanation": "A primary key serves all these purposes: uniquely identifies records, enforces relationships, and prevents data duplication.",
                    "difficulty": "hard"
                },
                {
                    "id": 7,
                    "question": "What does normalization in a relational database help with?",
                    "options": {
                        "A": "Avoiding redundancy",
                        "B": "Increasing performance",
                        "C": "Reducing query time",
                        "D": "All of the above"
                    },
                    "correct_answer": "A",
                    "explanation": "The primary purpose of normalization is to eliminate data redundancy and reduce data anomalies.",
                    "difficulty": "hard"
                },
                {
                    "id": 8,
                    "question": "Which normal form ensures that non-key attributes are fully functionally dependent on the primary key?",
                    "options": {
                        "A": "First Normal Form (1NF)",
                        "B": "Second Normal Form (2NF)",
                        "C": "Third Normal Form (3NF)",
                        "D": "Fourth Normal Form (4NF)"
                    },
                    "correct_answer": "B",
                    "explanation": "Second Normal Form (2NF) requires that all non-key attributes are fully functionally dependent on the primary key.",
                    "difficulty": "hard"
                },
                {
                    "id": 9,
                    "question": "What is a foreign key?",
                    "options": {
                        "A": "A key from another database",
                        "B": "A key that references the primary key of another table",
                        "C": "An encrypted key",
                        "D": "A backup key"
                    },
                    "correct_answer": "B",
                    "explanation": "A foreign key is a field that references the primary key of another table, establishing relationships between tables.",
                    "difficulty": "medium"
                },
                {
                    "id": 10,
                    "question": "Which of the following is a DDL command?",
                    "options": {
                        "A": "SELECT",
                        "B": "INSERT",
                        "C": "CREATE",
                        "D": "UPDATE"
                    },
                    "correct_answer": "C",
                    "explanation": "CREATE is a Data Definition Language (DDL) command used to create database objects like tables, indexes, etc.",
                    "difficulty": "medium"
                }
            ]
        };

        // Subject icons mapping
        this.subjectIcons = {
            "Computer Networks": "🌐",
            "Network Security": "🔒",
            "OOPs": "⚡",
            "DBMS": "🗄️"
        };

        // Quiz state
        this.currentSubject = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.quizQuestions = [];
        this.selectedAnswer = null;
        this.selectedDifficulty = 3; // Mixed by default
        this.currentTheme = 'light';
        
        // Chart instance
        this.resultsChart = null;
        
        // Current page reference
        this.currentPage = 'subjectSelection';

        this.initializeApp();
    }

    initializeApp() {
        this.setupThemeToggle();
        this.bindSubjectCardEvents();
        this.setupKeyboardShortcuts();
        this.animateBackground();
        this.setupLogoNavigation();
    }

    // Logo navigation
    setupLogoNavigation() {
        const navBrand = document.querySelector('.nav-brand');
        if (navBrand) {
            navBrand.style.cursor = 'pointer';
            navBrand.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSubjectSelection();
            });
        }
    }

    // Theme Management
    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                document.body.setAttribute('data-theme', this.currentTheme);
                this.animateThemeTransition();
            });
        }
    }

    animateThemeTransition() {
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    // Background Animation
    animateBackground() {
        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const randomDelay = Math.random() * 2;
            orb.style.animationDelay = `${randomDelay}s`;
        });
    }

    // Subject Selection
    bindSubjectCardEvents() {
        const subjectCards = document.querySelectorAll('.subject-card');
        subjectCards.forEach(card => {
            this.addCardHoverEffect(card);
            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const subject = card.getAttribute('data-subject');
                this.selectSubject(subject);
            });
        });
    }

    addCardHoverEffect(card) {
        let isAnimating = false;
        
        card.addEventListener('mousemove', (e) => {
            if (isAnimating) return;
            isAnimating = true;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            
            setTimeout(() => {
                isAnimating = false;
            }, 100);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    }

    // Navigation and View Management
    selectSubject(subject) {
        this.currentSubject = subject;
        this.showInstructions();
    }

    showInstructions() {
        this.currentPage = 'instructions';
        this.renderInstructionsPage();
    }

    renderInstructionsPage() {
        // Hide subject selection
        const subjectPage = document.getElementById('subjectSelection');
        if (subjectPage) {
            subjectPage.classList.remove('page--active');
        }

        // Create instructions page
        const instructionsHTML = `
            <section class="page page--active" id="instructionsPage">
                <div class="container">
                    <div class="instructions-panel glass-card">
                        <div class="panel-header">
                            <button class="back-btn" id="backToSubjectsBtn" aria-label="Back to subjects">
                                <span class="back-arrow">←</span>
                            </button>
                            <h2 class="panel-title">Quiz Instructions</h2>
                        </div>
                        
                        <div class="instructions-content">
                            <div class="selected-subject-info">
                                <h3 id="selectedSubject">${this.currentSubject}</h3>
                                <div class="subject-icon" id="selectedSubjectIcon">${this.subjectIcons[this.currentSubject]}</div>
                            </div>

                            <ul class="instructions-list">
                                <li>You will be presented with 10 multiple choice questions</li>
                                <li>Points awarded: Easy (1 pt), Medium (2 pts), Hard (3 pts)</li>
                                <li>There is no negative marking for incorrect answers</li>
                                <li>You can use keyboard shortcuts (A, B, C, D) to select answers</li>
                                <li>Once you proceed to the next question, you cannot go back</li>
                                <li>Questions cover both fundamental concepts and cybersecurity aspects</li>
                            </ul>

                            <div class="difficulty-selector">
                                <h4 class="difficulty-title">Select Difficulty Level</h4>
                                <div class="difficulty-controls">
                                    <div class="difficulty-options">
                                        <label class="difficulty-option" data-value="0">
                                            <input type="radio" name="difficulty" value="0">
                                            <span class="option-content">
                                                <span class="option-label">Easy</span>
                                                <span class="option-points">1 point</span>
                                            </span>
                                            <div class="option-indicator"></div>
                                        </label>
                                        
                                        <label class="difficulty-option" data-value="1">
                                            <input type="radio" name="difficulty" value="1">
                                            <span class="option-content">
                                                <span class="option-label">Medium</span>
                                                <span class="option-points">2 points</span>
                                            </span>
                                            <div class="option-indicator"></div>
                                        </label>
                                        
                                        <label class="difficulty-option" data-value="2">
                                            <input type="radio" name="difficulty" value="2">
                                            <span class="option-content">
                                                <span class="option-label">Hard</span>
                                                <span class="option-points">3 points</span>
                                            </span>
                                            <div class="option-indicator"></div>
                                        </label>
                                        
                                        <label class="difficulty-option active" data-value="3">
                                            <input type="radio" name="difficulty" value="3" checked>
                                            <span class="option-content">
                                                <span class="option-label">Mixed</span>
                                                <span class="option-points">All levels</span>
                                            </span>
                                            <div class="option-indicator"></div>
                                        </label>
                                    </div>
                                    <div class="difficulty-tooltip" id="difficultyTooltip">
                                        <span id="tooltipText">Random blend of all difficulty levels for comprehensive practice</span>
                                    </div>
                                </div>
                            </div>

                            <div class="instructions-actions">
                                <button class="btn btn--primary btn--large pulse-btn" id="startQuizBtn">
                                    <span class="btn-text">Start Quiz</span>
                                    <span class="btn-icon">🚀</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        // Remove existing instructions if any
        const existingInstructions = document.getElementById('instructionsPage');
        if (existingInstructions) {
            existingInstructions.remove();
        }

        document.body.insertAdjacentHTML('beforeend', instructionsHTML);
        
        this.setupInstructionsEvents();
    }

    setupInstructionsEvents() {
        const backBtn = document.getElementById('backToSubjectsBtn');
        const startBtn = document.getElementById('startQuizBtn');

        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSubjectSelection();
            });
        }

        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        this.setupDifficultySelector();
    }

    setupDifficultySelector() {
        const difficultyOptions = document.querySelectorAll('.difficulty-option');
        const tooltipText = document.getElementById('tooltipText');
        
        const tooltipTexts = {
            '0': 'Focus on fundamental concepts - perfect for beginners (1 point each)',
            '1': 'Intermediate level questions with moderate complexity (2 points each)',
            '2': 'Advanced topics requiring deep understanding (3 points each)',
            '3': 'Random blend of all difficulty levels for comprehensive practice'
        };

        difficultyOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                difficultyOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                this.selectedDifficulty = parseInt(option.getAttribute('data-value'));
                
                if (tooltipText) {
                    tooltipText.textContent = tooltipTexts[this.selectedDifficulty];
                }
            });

            option.addEventListener('mouseenter', () => {
                const value = option.getAttribute('data-value');
                if (tooltipText) {
                    tooltipText.textContent = tooltipTexts[value];
                }
            });
        });
    }

    startQuiz() {
        this.resetQuizState();
        this.prepareQuizQuestions();
        this.showQuiz();
    }

    resetQuizState() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.selectedAnswer = null;
    }

    prepareQuizQuestions() {
        let questions = [...this.quizData[this.currentSubject]];
        
        if (this.selectedDifficulty !== 3) {
            const difficultyMap = { 0: 'easy', 1: 'medium', 2: 'hard' };
            const targetDifficulty = difficultyMap[this.selectedDifficulty];
            questions = questions.filter(q => q.difficulty === targetDifficulty);
        }
        
        this.quizQuestions = this.shuffleArray(questions).slice(0, 10); // Limit to 10 questions
    }

    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    showQuiz() {
        this.currentPage = 'quiz';
        this.renderQuizPage();
    }

    renderQuizPage() {
        // Hide instructions page
        const instructionsPage = document.getElementById('instructionsPage');
        if (instructionsPage) {
            instructionsPage.remove();
        }

        // Create quiz page
        const quizHTML = `
            <section class="page page--active" id="quizPage">
                <div class="quiz-container">
                    <div class="quiz-header glass-card">
                        <div class="quiz-progress-section">
                            <div class="progress-ring-container">
                                <svg class="progress-ring" width="60" height="60">
                                    <circle class="progress-ring-bg" cx="30" cy="30" r="26" stroke-width="4"/>
                                    <circle class="progress-ring-fill" cx="30" cy="30" r="26" stroke-width="4" id="progressRingFill"/>
                                </svg>
                                <div class="progress-avatar">👤</div>
                            </div>
                            <div class="progress-info">
                                <span class="progress-text" id="progressText">Question 1 of 10</span>
                                <span class="subject-name" id="currentSubject">${this.currentSubject}</span>
                            </div>
                        </div>
                        
                        <div class="score-badge pulse-score" id="scoreBadge">
                            <span class="score-label">Score</span>
                            <span class="score-value" id="currentScore">0</span>
                        </div>
                    </div>

                    <div class="question-container">
                        <div class="question-card glass-card slide-card" id="questionCard">
                            <div class="question-header">
                                <span class="question-number" id="questionNumber">Question 1</span>
                                <span class="question-difficulty-badge" id="questionDifficultyBadge">Mixed</span>
                            </div>
                            
                            <h3 class="question-text" id="questionText"></h3>
                            
                            <div class="options-grid" id="optionsContainer">
                                <!-- Options will be dynamically inserted -->
                            </div>

                            <div class="question-actions">
                                <button class="btn btn--outline" id="quitQuizBtn">
                                    <span class="btn-icon">❌</span>
                                    <span class="btn-text">Quit Quiz</span>
                                </button>
                                <button class="btn btn--primary disabled" id="nextQuestionBtn" disabled>
                                    <span class="btn-text">Next Question</span>
                                    <span class="btn-icon">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        document.body.insertAdjacentHTML('beforeend', quizHTML);
        
        this.setupQuizEvents();
        this.displayQuestion();
    }

    setupQuizEvents() {
        const nextBtn = document.getElementById('nextQuestionBtn');
        const quitBtn = document.getElementById('quitQuizBtn');

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextQuestion();
            });
        }

        if (quitBtn) {
            quitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.quitQuiz();
            });
        }
    }

    displayQuestion() {
        if (this.currentQuestionIndex >= this.quizQuestions.length) {
            this.showResults();
            return;
        }

        const question = this.quizQuestions[this.currentQuestionIndex];
        const questionNum = this.currentQuestionIndex + 1;
        const totalQuestions = this.quizQuestions.length;

        // Update progress ring
        this.updateProgressRing(questionNum, totalQuestions);

        // Update UI elements
        this.updateQuestionDisplay(question, questionNum, totalQuestions);
        this.createOptionButtons(question);
        this.resetQuestionState();
        
        // Add slide animation
        const questionCard = document.getElementById('questionCard');
        if (questionCard) {
            questionCard.classList.remove('slide-card');
            void questionCard.offsetWidth; // Trigger reflow
            questionCard.classList.add('slide-card');
        }
    }

    updateProgressRing(current, total) {
        const progressRing = document.getElementById('progressRingFill');
        const progressText = document.getElementById('progressText');
        
        if (progressRing) {
            const circumference = 163.36; // 2 * π * 26
            const progress = (current / total);
            const offset = circumference - (progress * circumference);
            progressRing.style.strokeDashoffset = offset;
        }
        
        if (progressText) {
            progressText.textContent = `Question ${current} of ${total}`;
        }
    }

    updateQuestionDisplay(question, questionNum, totalQuestions) {
        const questionNumber = document.getElementById('questionNumber');
        const questionText = document.getElementById('questionText');
        const difficultyBadge = document.getElementById('questionDifficultyBadge');
        const currentScore = document.getElementById('currentScore');

        if (questionNumber) {
            questionNumber.textContent = `Question ${questionNum}`;
        }
        
        if (questionText) {
            questionText.textContent = question.question;
        }
        
        if (difficultyBadge) {
            difficultyBadge.textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
            difficultyBadge.className = `question-difficulty-badge ${question.difficulty}`;
        }
        
        if (currentScore) {
            currentScore.textContent = this.score;
        }
    }

    createOptionButtons(question) {
        const optionsContainer = document.getElementById('optionsContainer');
        if (!optionsContainer) return;

        optionsContainer.innerHTML = '';
        
        Object.entries(question.options).forEach(([key, value]) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-pill';
            optionDiv.setAttribute('data-option', key);
            
            optionDiv.innerHTML = `
                <span class="option-label">${key}</span>
                <span class="option-text">${value}</span>
            `;
            
            optionDiv.addEventListener('click', () => this.selectOption(key, optionDiv));
            optionsContainer.appendChild(optionDiv);
        });
    }

    selectOption(optionKey, optionElement) {
        // Remove previous selection
        const options = document.querySelectorAll('.option-pill');
        options.forEach(opt => opt.classList.remove('selected'));

        // Add selection and ripple effect
        optionElement.classList.add('selected');
        this.selectedAnswer = optionKey;

        // Enable next button
        const nextBtn = document.getElementById('nextQuestionBtn');
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.classList.remove('disabled');
        }
    }

    resetQuestionState() {
        this.selectedAnswer = null;
        const nextBtn = document.getElementById('nextQuestionBtn');
        if (nextBtn) {
            nextBtn.disabled = true;
            nextBtn.classList.add('disabled');
        }
    }

    nextQuestion() {
        if (!this.selectedAnswer) return;

        const question = this.quizQuestions[this.currentQuestionIndex];
        const isCorrect = this.selectedAnswer === question.correct_answer;
        
        // Store user answer
        this.userAnswers.push({
            question: question,
            userAnswer: this.selectedAnswer,
            correct: isCorrect
        });

        // Update score with animation
        if (isCorrect) {
            const pointsMap = { easy: 1, medium: 2, hard: 3 };
            const points = pointsMap[question.difficulty] || 2;
            this.score += points;
            this.animateScoreChange();
        }

        this.currentQuestionIndex++;
        this.displayQuestion();
    }

    animateScoreChange() {
        const scoreBadge = document.getElementById('scoreBadge');
        if (scoreBadge) {
            scoreBadge.classList.add('pulse-score');
            setTimeout(() => {
                scoreBadge.classList.remove('pulse-score');
            }, 500);
        }
    }

    quitQuiz() {
        if (confirm('Are you sure you want to quit the quiz? Your progress will be lost.')) {
            this.showSubjectSelection();
        }
    }

    showResults() {
        this.currentPage = 'results';
        this.renderResultsPage();
    }

    renderResultsPage() {
        // Hide quiz page
        const quizPage = document.getElementById('quizPage');
        if (quizPage) {
            quizPage.remove();
        }

        // Create results page
        const resultsHTML = `
            <section class="page page--active" id="resultsPage">
                <div class="container">
                    <div class="results-panel glass-card">
                        <div class="confetti-container" id="confettiContainer">
                            <canvas id="confettiCanvas"></canvas>
                        </div>
                        
                        <div class="results-header">
                            <h2 class="results-title">Quiz Complete!</h2>
                            <div class="score-display">
                                <div class="final-score">
                                    <span class="score-number" id="finalScore">${this.score}</span>
                                    <span class="score-total">/ <span id="maxPossibleScore">${this.calculateMaxScore()}</span></span>
                                </div>
                                <div class="percentage-score" id="percentageScore">${Math.round((this.score / this.calculateMaxScore()) * 100)}%</div>
                            </div>
                        </div>

                        <div class="results-chart-container">
                            <div class="chart-wrapper" style="position: relative; height: 300px;">
                                <canvas id="resultsChart"></canvas>
                            </div>
                        </div>

                        <div class="results-breakdown">
                            <div class="breakdown-grid">
                                <div class="breakdown-item">
                                    <span class="breakdown-label">Subject</span>
                                    <span class="breakdown-value" id="resultSubject">${this.currentSubject}</span>
                                </div>
                                <div class="breakdown-item">
                                    <span class="breakdown-label">Difficulty</span>
                                    <span class="breakdown-value" id="resultDifficulty">${this.getDifficultyText()}</span>
                                </div>
                                <div class="breakdown-item">
                                    <span class="breakdown-label">Correct</span>
                                    <span class="breakdown-value correct-color" id="correctAnswers">${this.userAnswers.filter(a => a.correct).length}</span>
                                </div>
                                <div class="breakdown-item">
                                    <span class="breakdown-label">Incorrect</span>
                                    <span class="breakdown-value incorrect-color" id="incorrectAnswers">${this.userAnswers.length - this.userAnswers.filter(a => a.correct).length}</span>
                                </div>
                                <div class="breakdown-item">
                                    <span class="breakdown-label">Accuracy</span>
                                    <span class="breakdown-value" id="accuracyScore">${Math.round((this.userAnswers.filter(a => a.correct).length / this.userAnswers.length) * 100)}%</span>
                                </div>
                            </div>
                        </div>

                        <div class="results-actions">
                            <button class="btn btn--primary" id="reviewAnswersBtn">
                                <span class="btn-icon">📝</span>
                                <span class="btn-text">Review Answers</span>
                            </button>
                            <button class="btn btn--secondary" id="retakeQuizBtn">
                                <span class="btn-icon">🔄</span>
                                <span class="btn-text">Retake Quiz</span>
                            </button>
                            <button class="btn btn--outline" id="backToSubjectsFromResultsBtn">
                                <span class="btn-icon">🏠</span>
                                <span class="btn-text">Try Another Subject</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;

        document.body.insertAdjacentHTML('beforeend', resultsHTML);
        
        this.setupResultsEvents();
        this.createResultsChart();
        this.checkForConfetti();
    }

    setupResultsEvents() {
        const reviewBtn = document.getElementById('reviewAnswersBtn');
        const retakeBtn = document.getElementById('retakeQuizBtn');
        const backBtn = document.getElementById('backToSubjectsFromResultsBtn');

        if (reviewBtn) {
            reviewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showReview();
            });
        }

        if (retakeBtn) {
            retakeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSubjectSelection();
            });
        }
    }

    calculateMaxScore() {
        return this.quizQuestions.reduce((max, question) => {
            const pointsMap = { easy: 1, medium: 2, hard: 3 };
            return max + (pointsMap[question.difficulty] || 2);
        }, 0);
    }

    getDifficultyText() {
        const difficultyMap = { 0: 'Easy', 1: 'Medium', 2: 'Hard', 3: 'Mixed' };
        return difficultyMap[this.selectedDifficulty];
    }

    createResultsChart() {
        const canvas = document.getElementById('resultsChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const correctCount = this.userAnswers.filter(a => a.correct).length;
        const incorrectCount = this.userAnswers.length - correctCount;

        if (this.resultsChart) {
            this.resultsChart.destroy();
        }

        this.resultsChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Correct', 'Incorrect'],
                datasets: [{
                    data: [correctCount, incorrectCount],
                    backgroundColor: ['#1FB8CD', '#B4413C'],
                    borderWidth: 0,
                    cutout: '70%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 14,
                                weight: '600'
                            },
                            color: this.currentTheme === 'dark' ? '#ffffff' : '#1f3439'
                        }
                    }
                }
            }
        });
    }

    checkForConfetti() {
        const percentage = Math.round((this.score / this.calculateMaxScore()) * 100);
        if (percentage > 70) {
            setTimeout(() => this.triggerConfetti(), 500);
        }
    }

    triggerConfetti() {
        const canvas = document.getElementById('confettiCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const confetti = [];
        const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];

        // Create confetti pieces
        for (let i = 0; i < 100; i++) {
            confetti.push({
                x: Math.random() * canvas.width,
                y: -10,
                width: Math.random() * 8 + 4,
                height: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 3 + 2,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 5 + 2
            });
        }

        let animationFrame;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            confetti.forEach((piece, index) => {
                ctx.save();
                ctx.translate(piece.x + piece.width/2, piece.y + piece.height/2);
                ctx.rotate(piece.rotation * Math.PI / 180);
                ctx.fillStyle = piece.color;
                ctx.fillRect(-piece.width/2, -piece.height/2, piece.width, piece.height);
                ctx.restore();
                
                piece.y += piece.speed;
                piece.rotation += piece.rotationSpeed;
                
                if (piece.y > canvas.height) {
                    confetti.splice(index, 1);
                }
            });
            
            if (confetti.length > 0) {
                animationFrame = requestAnimationFrame(animate);
            }
        };
        
        animate();
        
        // Clean up after 5 seconds
        setTimeout(() => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 5000);
    }

    showReview() {
        this.currentPage = 'review';
        this.renderReviewPage();
    }

    renderReviewPage() {
        // Hide results page
        const resultsPage = document.getElementById('resultsPage');
        if (resultsPage) {
            resultsPage.remove();
        }

        // Create review page
        const reviewHTML = `
            <section class="page page--active" id="reviewPage">
                <div class="container">
                    <div class="review-header glass-card">
                        <button class="back-btn" id="backToResultsBtn" aria-label="Back to results">
                            <span class="back-arrow">←</span>
                        </button>
                        <h2 class="page-title">Answer Review</h2>
                    </div>
                    
                    <div class="review-content" id="reviewContent">
                        ${this.generateReviewContent()}
                    </div>
                </div>
            </section>
        `;

        document.body.insertAdjacentHTML('beforeend', reviewHTML);
        
        this.setupReviewEvents();
    }

    setupReviewEvents() {
        const backBtn = document.getElementById('backToResultsBtn');
        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showResults();
            });
        }
    }

    generateReviewContent() {
        return this.userAnswers.map((answer, index) => {
            const statusClass = answer.correct ? 'status--correct' : 'status--incorrect';
            const statusText = answer.correct ? 'Correct' : 'Incorrect';

            return `
                <div class="review-item">
                    <div class="review-item__header">
                        <span class="question-number">Question ${index + 1}</span>
                        <span class="status ${statusClass}">${statusText}</span>
                    </div>
                    <div class="review-item__question">${answer.question.question}</div>
                    <div class="review-item__answers">
                        <div class="review-answer review-answer--${answer.correct ? 'correct' : 'incorrect'}">
                            <strong>Your Answer:</strong> ${answer.userAnswer}) ${answer.question.options[answer.userAnswer]}
                        </div>
                        ${!answer.correct ? `
                            <div class="review-answer review-answer--correct">
                                <strong>Correct Answer:</strong> ${answer.question.correct_answer}) ${answer.question.options[answer.question.correct_answer]}
                            </div>
                        ` : ''}
                    </div>
                    <div class="review-item__explanation">
                        <h4>Explanation:</h4>
                        <p>${answer.question.explanation}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    showSubjectSelection() {
        this.currentPage = 'subjectSelection';
        
        // Remove all other pages
        const pages = ['instructionsPage', 'quizPage', 'resultsPage', 'reviewPage'];
        pages.forEach(pageId => {
            const page = document.getElementById(pageId);
            if (page) {
                page.remove();
            }
        });

        // Show subject selection
        const subjectPage = document.getElementById('subjectSelection');
        if (subjectPage) {
            subjectPage.classList.add('page--active');
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (this.currentPage !== 'quiz') return;

            const key = e.key.toLowerCase();
            if (['a', 'b', 'c', 'd'].includes(key)) {
                e.preventDefault();
                const optionElement = document.querySelector(`[data-option="${key.toUpperCase()}"]`);
                if (optionElement) {
                    this.selectOption(key.toUpperCase(), optionElement);
                }
            }
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedQuizApp();
});