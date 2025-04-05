const allQuizData = [
    {
        question: "What does SDLC stand for?",
        a: "Software Design Life Cycle",
        b: "System Development Life Cycle",
        c: "Software Development Life Cycle",
        d: "System Design Level Control",
        correct: "c"
      },
      {
        question: "Which of the following is the first phase of SDLC?",
        a: "Design",
        b: "Testing",
        c: "Requirement Analysis",
        d: "Maintenance",
        correct: "c"
      },
      {
        question: "What is the main purpose of the design phase in SDLC?",
        a: "To test the software",
        b: "To gather user requirements",
        c: "To create system architecture and design",
        d: "To deploy the product",
        correct: "c"
      },
      {
        question: "Which SDLC phase involves checking for bugs and errors?",
        a: "Requirement Analysis",
        b: "Testing",
        c: "Design",
        d: "Maintenance",
        correct: "b"
      },
      {
        question: "What happens during the deployment phase of SDLC?",
        a: "Code is tested",
        b: "The product is delivered to the client or end users",
        c: "System is maintained",
        d: "Requirements are gathered",
        correct: "b"
      },
      {
        question: "Which phase ensures long-term support and enhancements?",
        a: "Deployment",
        b: "Maintenance",
        c: "Design",
        d: "Implementation",
        correct: "b"
      },
      {
        question: "Which SDLC model follows a linear sequential flow?",
        a: "Agile",
        b: "Waterfall",
        c: "V-Model",
        d: "RAD",
        correct: "b"
      },
      {
        question: "What is the purpose of requirement analysis?",
        a: "To test the application",
        b: "To find bugs",
        c: "To understand what the users need",
        d: "To deploy the application",
        correct: "c"
      },
      {
        question: "Which team member typically gathers requirements from stakeholders?",
        a: "Tester",
        b: "Developer",
        c: "Business Analyst",
        d: "Designer",
        correct: "c"
      },
      {
        question: "Which phase in SDLC involves writing code?",
        a: "Planning",
        b: "Implementation",
        c: "Testing",
        d: "Maintenance",
        correct: "b"
      },
      {
        question: "Which model allows early feedback through working software iterations?",
        a: "Waterfall",
        b: "Big Bang",
        c: "Agile",
        d: "Spiral",
        correct: "c"
      },
      {
        question: "Which phase comes immediately after planning in SDLC?",
        a: "Implementation",
        b: "Design",
        c: "Testing",
        d: "Requirement Analysis",
        correct: "d"
      },
      {
        question: "In SDLC, which phase involves drawing diagrams and modeling data flow?",
        a: "Implementation",
        b: "Design",
        c: "Testing",
        d: "Maintenance",
        correct: "b"
      },
      {
        question: "Which SDLC phase is responsible for fixing issues after deployment?",
        a: "Testing",
        b: "Implementation",
        c: "Design",
        d: "Maintenance",
        correct: "d"
      },
      {
        question: "What is the main goal of the SDLC?",
        a: "To avoid writing code",
        b: "To provide structure to the development process",
        c: "To eliminate all bugs",
        d: "To stop user feedback",
        correct: "b"
      },
      {
        question: "Which of the following best describes the main goal of the SDLC process?",
        a: "Develop software without any cost",
        b: "Ensure structured and quality software development",
        c: "Complete software as quickly as possible",
        d: "Create software without testing",
        correct: "b"
      },
      {
        question: "Why is requirement analysis critical in SDLC?",
        a: "It helps write test cases",
        b: "It defines what the system should do",
        c: "It provides the user interface design",
        d: "It manages system errors",
        correct: "b"
      },
      {
        question: "Which of the following roles is mainly responsible for the design phase in SDLC?",
        a: "Test Engineer",
        b: "Database Administrator",
        c: "System Architect",
        d: "End User",
        correct: "c"
      },
      {
        question: "What is one key advantage of using SDLC?",
        a: "It removes all development phases",
        b: "It makes software more expensive",
        c: "It provides a structured approach to software development",
        d: "It increases software bugs",
        correct: "c"
      },
      {
        question: "What happens if a software product skips the design phase?",
        a: "The product is error-free",
        b: "The product becomes cheaper",
        c: "The system lacks structure and may fail",
        d: "It improves performance",
        correct: "c"
      },
      {
        question: "Which document is typically created during the requirement phase?",
        a: "Codebase",
        b: "System Design Document",
        c: "Requirement Specification Document",
        d: "Test Report",
        correct: "c"
      },
      {
        question: "Which activity is performed in both testing and maintenance phases?",
        a: "Coding new features",
        b: "Documenting requirements",
        c: "Bug fixing",
        d: "UI design",
        correct: "c"
      },
      {
        question: "What distinguishes the Agile SDLC model from the Waterfall model?",
        a: "Waterfall is iterative; Agile is linear",
        b: "Agile emphasizes flexibility and customer collaboration",
        c: "Agile doesn’t involve testing",
        d: "Waterfall allows continuous delivery",
        correct: "b"
      },
      {
        question: "How does the SDLC improve software quality?",
        a: "By eliminating all phases",
        b: "By introducing random changes",
        c: "By ensuring each phase is properly completed and verified",
        d: "By skipping deployment",
        correct: "c"
      },
      {
        question: "Which of the following is a risk of not following SDLC practices?",
        a: "Efficient development",
        b: "Clear documentation",
        c: "Missed deadlines and cost overruns",
        d: "Quality assurance",
        correct: "c"
      },
      {
        question: "In which SDLC phase do developers convert design into executable code?",
        a: "Planning",
        b: "Analysis",
        c: "Implementation",
        d: "Deployment",
        correct: "c"
      },
      {
        question: "Which testing type is done in the testing phase of SDLC?",
        a: "Unit Testing",
        b: "Integration Testing",
        c: "System Testing",
        d: "All of the above",
        correct: "d"
      },
      {
        question: "Which of the following is not typically a phase of SDLC?",
        a: "Requirement Gathering",
        b: "Planning",
        c: "Hacking",
        d: "Design",
        correct: "c"
      },
      {
        question: "Which of the following factors is crucial for SDLC model selection?",
        a: "Project budget and timeline",
        b: "User interface colors",
        c: "Number of employees",
        d: "Office location",
        correct: "a"
      },
      {
        question: "Why is documentation important in SDLC?",
        a: "To confuse developers",
        b: "For legal purposes only",
        c: "To serve as a guide for future maintenance and development",
        d: "To increase cost",
        correct: "c"
      },
      {
        question: "Which SDLC model is most suitable for projects with high risk and changing requirements?",
        a: "Waterfall",
        b: "Spiral",
        c: "Big Bang",
        d: "V-Model",
        correct: "b"
      },
      {
        question: "How does the V-Model enhance the traditional Waterfall model?",
        a: "By removing testing",
        b: "By overlapping all phases",
        c: "By integrating testing in each development phase",
        d: "By starting with deployment",
        correct: "c"
      },
      {
        question: "What is a major drawback of the Waterfall model in real-world projects?",
        a: "High customer involvement",
        b: "Late detection of issues due to lack of iteration",
        c: "Too flexible for small projects",
        d: "Too little documentation",
        correct: "b"
      },
      {
        question: "Which SDLC model follows a prototype-first approach?",
        a: "Agile",
        b: "Incremental",
        c: "Prototype Model",
        d: "RAD",
        correct: "c"
      },
      {
        question: "Which metric best evaluates SDLC model effectiveness?",
        a: "Number of developers",
        b: "Lines of code written",
        c: "Defect density and on-time delivery",
        d: "Code complexity",
        correct: "c"
      },
      {
        question: "In Agile SDLC, how are requirement changes handled?",
        a: "Not allowed once the sprint starts",
        b: "Handled flexibly with customer feedback",
        c: "Handled during deployment only",
        d: "Rejected during all phases",
        correct: "b"
      },
      {
        question: "What differentiates the Spiral model from other SDLC models?",
        a: "It’s the fastest model",
        b: "Risk analysis is integrated at every iteration",
        c: "Testing is skipped",
        d: "Used only for mobile apps",
        correct: "b"
      },
      {
        question: "Which SDLC model is best when quick releases and user feedback are critical?",
        a: "Waterfall",
        b: "Spiral",
        c: "Agile",
        d: "V-Model",
        correct: "c"
      },
      {
        question: "How is traceability maintained in SDLC projects?",
        a: "By informal meetings",
        b: "Using traceability matrices to map requirements to test cases",
        c: "Skipping documentation",
        d: "Only by end-user reports",
        correct: "b"
      },
      {
        question: "Which technique ensures that all SDLC requirements are tested?",
        a: "Smoke Testing",
        b: "Code Review",
        c: "Requirement Traceability Matrix (RTM)",
        d: "Functional Testing",
        correct: "c"
      },
      {
        question: "What’s the main risk of skipping the feasibility study in SDLC?",
        a: "Lack of coding guidelines",
        b: "Increased customer satisfaction",
        c: "Project may fail due to undetected business/technical issues",
        d: "Improved design",
        correct: "c"
      },
      {
        question: "In the RAD model, what is a major advantage?",
        a: "Less customer involvement",
        b: "Focus on large monolithic releases",
        c: "Rapid development through reusable components",
        d: "Minimal testing effort",
        correct: "c"
      },
      {
        question: "In SDLC, what does the Maintenance phase primarily deal with?",
        a: "New feature design",
        b: "Refactoring existing software and fixing bugs post-deployment",
        c: "Removing user interface",
        d: "Requirement analysis",
        correct: "b"
      },
      {
        question: "What differentiates Incremental SDLC model from Agile?",
        a: "Incremental delivers in fixed releases; Agile adapts every sprint",
        b: "Agile has no planning phase",
        c: "Incremental is a hybrid model",
        d: "Agile is only for mobile apps",
        correct: "a"
      },
      {
        question: "Which of the following is a hybrid SDLC model combining both iterative and linear approaches?",
        a: "Agile",
        b: "V-Model",
        c: "Spiral",
        d: "Waterfall",
        correct: "c"
      },
      {
        question: "Which of the following is a phase in the Waterfall model?",
        a: "Sprint Planning",
        b: "Requirement Analysis",
        c: "Retrospective",
        d: "Daily Stand-up",
        correct: "b"
      },
      {
        question: "Agile methodology focuses on:",
        a: "Strict documentation",
        b: "Customer collaboration and iterative development",
        c: "Complete design before implementation",
        d: "No changes after requirement gathering",
        correct: "b"
      },
      {
        question: "Which model follows a sequential design process?",
        a: "Agile",
        b: "Hybrid",
        c: "Waterfall",
        d: "Spiral",
        correct: "c"
      },
      {
        question: "In Agile, work is typically divided into:",
        a: "Modules",
        b: "Sprints",
        c: "Releases",
        d: "Milestones",
        correct: "b"
      },
      {
        question: "What is a key feature of the Hybrid model?",
        a: "No testing involved",
        b: "Combines Waterfall and Agile principles",
        c: "Used only in construction projects",
        d: "Only used for startups",
        correct: "b"
      },
      {
        question: "Which project management methodology requires extensive planning at the beginning?",
        a: "Agile",
        b: "Waterfall",
        c: "Scrum",
        d: "Hybrid",
        correct: "b"
      },
      {
        question: "A daily meeting used in Agile to track progress is called:",
        a: "Scrum",
        b: "Review",
        c: "Retrospective",
        d: "Stand-up",
        correct: "d"
      },
      {
        question: "Which of the following is NOT part of the Agile Manifesto?",
        a: "Individuals and interactions over processes and tools",
        b: "Working software over comprehensive documentation",
        c: "Contract negotiation over customer collaboration",
        d: "Responding to change over following a plan",
        correct: "c"
      },
      {
        question: "Waterfall model is best suited for projects that are:",
        a: "Flexible and rapidly changing",
        b: "Experimental and evolving",
        c: "Stable with well-understood requirements",
        d: "UI/UX heavy",
        correct: "c"
      },
      {
        question: "In a Hybrid model, the Agile approach is often used for:",
        a: "Hardware design",
        b: "Requirement gathering only",
        c: "Testing only",
        d: "Flexible and evolving parts of the project",
        correct: "d"
      },
      {
        question: "Which of the following is a popular Agile framework?",
        a: "PERT",
        b: "Scrum",
        c: "CPM",
        d: "RAD",
        correct: "b"
      },
      {
        question: "What is the time-boxed iteration in Scrum called?",
        a: "Phase",
        b: "Sprint",
        c: "Cycle",
        d: "Loop",
        correct: "b"
      },
      {
        question: "Which project management approach is rigid and does not support changes easily?",
        a: "Agile",
        b: "Scrum",
        c: "Waterfall",
        d: "Kanban",
        correct: "c"
      },
      {
        question: "The person responsible for maintaining the product backlog in Scrum is:",
        a: "Scrum Master",
        b: "Product Owner",
        c: "Team Leader",
        d: "Developer",
        correct: "b"
      },
      {
        question: "Which document contains the list of tasks to be completed in a Scrum sprint?",
        a: "Product Roadmap",
        b: "Sprint Backlog",
        c: "Test Plan",
        d: "Business Case",
        correct: "b"
      },{
        question: "Which Agile principle emphasizes delivering working software frequently?",
        a: "Customer satisfaction through early delivery",
        b: "Welcome changing requirements",
        c: "Deliver working software frequently",
        d: "Continuous attention to technical excellence",
        correct: "c"
      },
      {
        question: "What is the primary role of a Scrum Master?",
        a: "Writing code",
        b: "Managing project finances",
        c: "Removing obstacles and facilitating Scrum practices",
        d: "Controlling the team",
        correct: "c"
      },
      {
        question: "Which of these is an advantage of Agile over Waterfall?",
        a: "Better documentation",
        b: "More flexibility and faster feedback",
        c: "No need for customer involvement",
        d: "Longer testing phases",
        correct: "b"
      },
      {
        question: "In the Hybrid model, which process typically follows a sequential path?",
        a: "Agile implementation",
        b: "Scrum review",
        c: "Initial planning and documentation",
        d: "Daily stand-ups",
        correct: "c"
      },
      {
        question: "What is a key limitation of the Waterfall model?",
        a: "Lack of cost estimation",
        b: "Poor scalability",
        c: "Inflexibility to changing requirements",
        d: "No testing phase",
        correct: "c"
      },
      {
        question: "Which tool is commonly used in Agile for tracking tasks?",
        a: "JIRA",
        b: "Oracle",
        c: "MySQL",
        d: "Visio",
        correct: "a"
      },
      {
        question: "What is the result of each sprint in Scrum?",
        a: "A prototype",
        b: "A complete, potentially shippable product increment",
        c: "A new backlog",
        d: "A design document",
        correct: "b"
      },
      {
        question: "Which phase in the Waterfall model involves building the product?",
        a: "Design",
        b: "Implementation",
        c: "Testing",
        d: "Maintenance",
        correct: "b"
      },
      {
        question: "What defines the success of a hybrid project?",
        a: "Strict adherence to Waterfall",
        b: "100% Agile practices",
        c: "Balanced planning and adaptability",
        d: "Reducing documentation",
        correct: "c"
      },
      {
        question: "The 'Product Increment' in Scrum includes:",
        a: "Only features developed in current sprint",
        b: "Features from the last two sprints",
        c: "All completed features to date",
        d: "Unreviewed features",
        correct: "c"
      },
      {
        question: "Scrum roles include all EXCEPT:",
        a: "Scrum Master",
        b: "Product Owner",
        c: "Stakeholder",
        d: "Development Team",
        correct: "c"
      },
      {
        question: "Who decides the priority of items in the Product Backlog?",
        a: "Scrum Master",
        b: "Development Team",
        c: "Product Owner",
        d: "Project Sponsor",
        correct: "c"
      },
      {
        question: "Which model is best when requirements are unclear initially?",
        a: "Waterfall",
        b: "Agile",
        c: "Hybrid",
        d: "V-Model",
        correct: "b"
      },
      {
        question: "When combining Waterfall and Agile, Agile is typically used for:",
        a: "Risk analysis",
        b: "Requirements documentation",
        c: "Customer-facing feature development",
        d: "System architecture design",
        correct: "c"
      },
      {
        question: "Which of these is NOT a benefit of using Agile methodology?",
        a: "Faster product delivery",
        b: "Higher adaptability",
        c: "Customer collaboration",
        d: "Fixed and inflexible planning",
        correct: "d"
      },{
        question: "Which Agile framework includes roles like Release Train Engineer and focuses on scaling Agile for large enterprises?",
        a: "Scrum",
        b: "Kanban",
        c: "SAFe",
        d: "XP",
        correct: "c"
      },
      {
        question: "In Waterfall, what is the typical result of finishing the Design phase?",
        a: "Product backlog",
        b: "Codebase",
        c: "Technical specifications and architecture",
        d: "Test results",
        correct: "c"
      },
      {
        question: "In Agile, what technique is used for estimating the effort required for a user story?",
        a: "PERT Analysis",
        b: "Function Point Analysis",
        c: "Planning Poker",
        d: "Monte Carlo Simulation",
        correct: "c"
      },
      {
        question: "Which document is crucial in a Hybrid model to define where Agile or Waterfall will be applied?",
        a: "Requirement traceability matrix",
        b: "Hybrid model strategy plan",
        c: "Test plan",
        d: "Product vision document",
        correct: "b"
      },
      {
        question: "What is the purpose of a Sprint Retrospective?",
        a: "Reviewing the code",
        b: "Measuring sprint velocity",
        c: "Improving future sprint processes",
        d: "Rewriting the product backlog",
        correct: "c"
      },
      {
        question: "How is scope handled differently in Agile vs. Waterfall?",
        a: "Agile fixes scope, Waterfall allows flexibility",
        b: "Agile welcomes change, Waterfall resists change",
        c: "Agile freezes scope before development, Waterfall does not",
        d: "There is no difference",
        correct: "b"
      },
      {
        question: "What is 'Technical Debt' in Agile terminology?",
        a: "Cost of delayed testing",
        b: "Unfinished documentation",
        c: "Shortcuts in code that need to be fixed later",
        d: "Bugs in released software",
        correct: "c"
      },
      {
        question: "Which is the correct order of phases in Waterfall?",
        a: "Design → Planning → Testing → Deployment",
        b: "Requirements → Design → Implementation → Testing → Deployment → Maintenance",
        c: "Requirements → Implementation → Design → Testing",
        d: "Planning → Coding → Testing → Design",
        correct: "b"
      },
      {
        question: "Which artifact in Scrum defines the work for the current sprint?",
        a: "Product Backlog",
        b: "Sprint Backlog",
        c: "Burndown Chart",
        d: "Definition of Done",
        correct: "b"
      },
      {
        question: "In Agile, velocity is used to:",
        a: "Estimate cost of the project",
        b: "Determine team performance over time",
        c: "Track individual contribution",
        d: "Predict test results",
        correct: "b"
      },
      {
        question: "In Hybrid models, what Agile tool is often paired with traditional Gantt charts?",
        a: "Product Vision Board",
        b: "Burndown Chart",
        c: "User Story Map",
        d: "Sprint Review Document",
        correct: "b"
      },
      {
        question: "What is the expected outcome of a successful sprint?",
        a: "Release planning report",
        b: "High team morale",
        c: "Working, tested increment of product",
        d: "Completed test cases",
        correct: "c"
      },
      {
        question: "Which of the following models is best for projects with evolving requirements and high customer involvement?",
        a: "Waterfall",
        b: "Agile",
        c: "V-Model",
        d: "RAD",
        correct: "b"
      },
      {
        question: "What does a burn-down chart show?",
        a: "Tasks remaining over time",
        b: "Number of bugs in the product",
        c: "Lines of code written",
        d: "Budget consumption rate",
        correct: "a"
      },
      {
        question: "Which Agile framework focuses heavily on pair programming and test-driven development?",
        a: "Scrum",
        b: "SAFe",
        c: "XP",
        d: "DSDM",
        correct: "c"
      },{
        question: "What is the first phase of the Waterfall model?",
        a: "Design",
        b: "Implementation",
        c: "Requirements Gathering",
        d: "Testing",
        correct: "c"
      },
      {
        question: "Which of the following best describes the Waterfall model?",
        a: "Iterative process",
        b: "Parallel development",
        c: "Linear sequential flow",
        d: "Flexible workflow",
        correct: "c"
      },
      {
        question: "In Waterfall, when is testing performed?",
        a: "Before development",
        b: "In parallel with coding",
        c: "After the development phase",
        d: "During planning",
        correct: "c"
      },
      {
        question: "Which document is typically created during the requirement phase?",
        a: "Design document",
        b: "Test plan",
        c: "Software Requirement Specification (SRS)",
        d: "Code repository",
        correct: "c"
      },
      {
        question: "What comes immediately after the requirements phase in Waterfall?",
        a: "Testing",
        b: "Design",
        c: "Maintenance",
        d: "Implementation",
        correct: "b"
      },
      {
        question: "Which of these is a disadvantage of the Waterfall model?",
        a: "Clear documentation",
        b: "Rigid structure",
        c: "Simple management",
        d: "Defined stages",
        correct: "b"
      },
      {
        question: "What is the Waterfall model best suited for?",
        a: "Projects with changing requirements",
        b: "Research-based projects",
        c: "Small, well-defined projects",
        d: "Agile startups",
        correct: "c"
      },
      {
        question: "What is the last phase in Waterfall?",
        a: "Deployment",
        b: "Design",
        c: "Maintenance",
        d: "Testing",
        correct: "c"
      },
      {
        question: "Which of these is not a Waterfall phase?",
        a: "Requirement analysis",
        b: "Iteration planning",
        c: "Implementation",
        d: "Testing",
        correct: "b"
      },
      {
        question: "Why is it called the Waterfall model?",
        a: "It requires a lot of resources",
        b: "It has flexible phase transitions",
        c: "Each phase flows into the next like a waterfall",
        d: "It is based on rainfall patterns",
        correct: "c"
      },
      {
        question: "Which model emphasizes completing one phase before starting the next?",
        a: "Scrum",
        b: "V-Model",
        c: "Waterfall",
        d: "RAD",
        correct: "c"
      },
      {
        question: "What happens if changes are needed after the design phase in Waterfall?",
        a: "They are implemented immediately",
        b: "They are added during the testing phase",
        c: "They are difficult and expensive to implement",
        d: "They are ignored",
        correct: "c"
      },
      {
        question: "Who approves the requirement specifications in the Waterfall model?",
        a: "Developers",
        b: "Testers",
        c: "Stakeholders/Clients",
        d: "Designers",
        correct: "c"
      },
      {
        question: "Which of these roles is responsible for writing code in the implementation phase?",
        a: "Test engineer",
        b: "Project manager",
        c: "Developer",
        d: "Business analyst",
        correct: "c"
      },
      {
        question: "Which one is a benefit of the Waterfall model?",
        a: "Quick delivery",
        b: "Supports changes easily",
        c: "Easy to manage due to its rigid structure",
        d: "Focuses on collaboration",
        correct: "c"
      },{
        question: "In the Waterfall model, what is the main risk of moving to the next phase before finishing the current one?",
        a: "Increased budget",
        b: "Unstable software",
        c: "Incomplete documentation",
        d: "Requirements might not be met",
        correct: "d"
      },
      {
        question: "Which phase involves creating the system architecture and high-level design?",
        a: "Testing",
        b: "Implementation",
        c: "Design",
        d: "Deployment",
        correct: "c"
      },
      {
        question: "What ensures that each Waterfall phase completes before the next begins?",
        a: "Client feedback",
        b: "Phase sign-off or approval",
        c: "Testing framework",
        d: "Sprint retrospectives",
        correct: "b"
      },
      {
        question: "Which of the following is a major drawback of the Waterfall model?",
        a: "Too many meetings",
        b: "Lack of user involvement during development",
        c: "No documentation",
        d: "Constant requirement changes",
        correct: "b"
      },
      {
        question: "What type of testing is mostly used in the Waterfall model?",
        a: "Regression Testing",
        b: "Unit Testing",
        c: "System Testing",
        d: "Exploratory Testing",
        correct: "c"
      },
      {
        question: "How are changes handled in the Waterfall model?",
        a: "Easily implemented anytime",
        b: "Incorporated after user feedback",
        c: "Difficult and costly once the phase is complete",
        d: "Tracked through Kanban board",
        correct: "c"
      },
      {
        question: "What is the primary focus during the implementation phase?",
        a: "Writing test cases",
        b: "Designing system UI",
        c: "Developing code as per specifications",
        d: "Collecting feedback",
        correct: "c"
      },
      {
        question: "Which document helps guide the testing phase in Waterfall?",
        a: "SRS",
        b: "Deployment manual",
        c: "Coding standards",
        d: "Agile manifesto",
        correct: "a"
      },
      {
        question: "What is the biggest risk if testing is only performed at the end?",
        a: "Lower performance",
        b: "Longer maintenance time",
        c: "Late discovery of critical bugs",
        d: "Less user feedback",
        correct: "c"
      },
      {
        question: "Which scenario is ideal for using Waterfall?",
        a: "Unclear goals",
        b: "Long-term evolving projects",
        c: "Projects with stable and clear requirements",
        d: "Rapid prototyping",
        correct: "c"
      },
      {
        question: "In Waterfall, which role usually gathers requirements?",
        a: "Developer",
        b: "Business Analyst",
        c: "Tester",
        d: "UI Designer",
        correct: "b"
      },
      {
        question: "Why is client involvement minimal during Waterfall development?",
        a: "Clients lack technical knowledge",
        b: "Only developers can participate",
        c: "Waterfall model doesn't allow it post-requirement phase",
        d: "Clients don't like regular reviews",
        correct: "c"
      },
      {
        question: "Which technique is commonly used to gather requirements in Waterfall?",
        a: "Pair programming",
        b: "Surveys and Interviews",
        c: "Sprint demos",
        d: "Test-driven development",
        correct: "b"
      },
      {
        question: "How does documentation help in Waterfall?",
        a: "Minimizes need for testing",
        b: "Replaces need for meetings",
        c: "Ensures smooth phase transitions and clarity",
        d: "Reduces cost of deployment",
        correct: "c"
      },
      {
        question: "What happens in the maintenance phase of Waterfall?",
        a: "Writing documentation",
        b: "Updating code for bugs and enhancements",
        c: "Planning the next sprint",
        d: "Collecting requirements",
        correct: "b"
      },{
        question: "What is a key reason why the Waterfall model struggles with adaptive changes?",
        a: "Its strict sequential flow limits flexibility",
        b: "It lacks documentation",
        c: "It uses iterative testing",
        d: "It integrates with Agile",
        correct: "a"
      },
      {
        question: "In Waterfall, if a requirement error is found during testing, what is the impact?",
        a: "Easily fixed with client discussion",
        b: "Causes minor delay only",
        c: "May require going back to the requirement phase, causing cost and time impact",
        d: "Ignored until post-deployment",
        correct: "c"
      },
      {
        question: "Which model is often compared to Waterfall for its flexibility and adaptability?",
        a: "RAD",
        b: "Scrum",
        c: "V-Model",
        d: "Spiral Model",
        correct: "d"
      },
      {
        question: "What is a common approach to mitigate risk in the Waterfall model?",
        a: "Frequent client meetings",
        b: "Rapid prototyping",
        c: "Conducting thorough phase reviews and risk assessments",
        d: "Implementing pair programming",
        correct: "c"
      },
      {
        question: "Which phase is most critical to ensuring Waterfall project success?",
        a: "Coding",
        b: "Testing",
        c: "Requirement Gathering",
        d: "Deployment",
        correct: "c"
      },
      {
        question: "What is a limitation of Waterfall in modern software development environments?",
        a: "Excessive reliance on automation",
        b: "Not suitable for projects with rapidly changing requirements",
        c: "Too much customer collaboration",
        d: "Too iterative",
        correct: "b"
      },
      {
        question: "Which metric best reflects Waterfall’s efficiency?",
        a: "Velocity",
        b: "Phase completion rate",
        c: "Code commit frequency",
        d: "Bug triage time",
        correct: "b"
      },
      {
        question: "In large-scale Waterfall projects, how is change typically controlled?",
        a: "Change Control Board (CCB)",
        b: "Scrum Master",
        c: "Retrospectives",
        d: "Kanban Board",
        correct: "a"
      },
      {
        question: "Which deliverable is most essential before design begins in Waterfall?",
        a: "Prototype",
        b: "User Feedback",
        c: "SRS (Software Requirements Specification)",
        d: "UML Diagrams",
        correct: "c"
      },
      {
        question: "Why is cost estimation easier in Waterfall than in Agile?",
        a: "More flexible budget control",
        b: "Phases are fixed and requirements are known upfront",
        c: "Uses predictive modeling",
        d: "Daily standups improve accuracy",
        correct: "b"
      },
      {
        question: "Which quality attribute is hardest to ensure in Waterfall projects?",
        a: "Performance",
        b: "Security",
        c: "Adaptability",
        d: "Scalability",
        correct: "c"
      },
      {
        question: "What is the biggest consequence of Waterfall’s lack of iteration?",
        a: "Increased team collaboration",
        b: "Faster bug fixes",
        c: "Poor feedback incorporation",
        d: "More stakeholder engagement",
        correct: "c"
      },
      {
        question: "What is a best practice to reduce Waterfall risks in requirements phase?",
        a: "Use agile sprints",
        b: "Daily developer meetings",
        c: "Engage stakeholders with prototypes and mockups early",
        d: "Skip documentation",
        correct: "c"
      },
      {
        question: "Which of the following best describes the documentation process in Waterfall?",
        a: "Dynamic and evolving",
        b: "Minimalistic",
        c: "Comprehensive and phase-specific",
        d: "Entirely skipped if using code comments",
        correct: "c"
      },
      {
        question: "Why is the Waterfall model rarely used in startups and MVP development?",
        a: "Too expensive",
        b: "Too quick to deploy",
        c: "Lacks adaptability and delays feedback-driven iteration",
        d: "Requires a large team",
        correct: "c"
      },{
        question: "What is Scrum?",
        a: "A programming language",
        b: "A software testing tool",
        c: "An Agile framework for managing work",
        d: "A database system",
        correct: "c"
      },
      {
        question: "Who is responsible for maximizing the value of the product in Scrum?",
        a: "Project Manager",
        b: "Scrum Master",
        c: "Product Owner",
        d: "Developer",
        correct: "c"
      },
      {
        question: "Which role facilitates Scrum events and removes impediments?",
        a: "Tester",
        b: "Scrum Master",
        c: "Product Owner",
        d: "Stakeholder",
        correct: "b"
      },
      {
        question: "How long is a typical Sprint?",
        a: "1–4 weeks",
        b: "6 months",
        c: "1 year",
        d: "1 day",
        correct: "a"
      },
      {
        question: "What is the purpose of a Daily Scrum?",
        a: "To assign new tasks",
        b: "To report progress and identify blockers",
        c: "To gather requirements",
        d: "To write code",
        correct: "b"
      },
      {
        question: "What is a Product Backlog?",
        a: "A to-do list for developers",
        b: "A prioritized list of features and requirements",
        c: "A set of bugs",
        d: "Sprint tasks only",
        correct: "b"
      },
      {
        question: "Who creates the Sprint Goal?",
        a: "Tester",
        b: "Stakeholder",
        c: "Scrum Team",
        d: "Product Manager",
        correct: "c"
      },
      {
        question: "What is a Sprint Retrospective?",
        a: "A bug review",
        b: "A product demonstration",
        c: "A meeting to improve team performance",
        d: "A coding session",
        correct: "c"
      },
      {
        question: "Which document contains all the work for the current Sprint?",
        a: "Product Backlog",
        b: "Sprint Backlog",
        c: "Requirement Document",
        d: "Test Plan",
        correct: "b"
      },
      {
        question: "Who is included in the Scrum Team?",
        a: "Only developers",
        b: "Product Owner and Scrum Master",
        c: "Product Owner, Scrum Master, and Developers",
        d: "Testers only",
        correct: "c"
      },
      {
        question: "What is the output of a Sprint?",
        a: "User manual",
        b: "Project plan",
        c: "Working increment of the product",
        d: "Code comments",
        correct: "c"
      },
      {
        question: "Which event starts a Sprint?",
        a: "Sprint Review",
        b: "Sprint Planning",
        c: "Daily Scrum",
        d: "Retrospective",
        correct: "b"
      },
      {
        question: "What is not a Scrum artifact?",
        a: "Sprint Backlog",
        b: "Product Increment",
        c: "Product Backlog",
        d: "Gantt Chart",
        correct: "d"
      },
      {
        question: "What happens in a Sprint Review?",
        a: "Developers review code",
        b: "The team reviews what was built with stakeholders",
        c: "New features are requested",
        d: "Retrospective is held",
        correct: "b"
      },
      {
        question: "What is the time-box for a Daily Scrum?",
        a: "1 hour",
        b: "2 hours",
        c: "15 minutes",
        d: "All day",
        correct: "c"
      },{
        question: "Which of the following best describes the responsibility of a Scrum Master?",
        a: "Assigns tasks to the team",
        b: "Writes code for the team",
        c: "Coaches the team and ensures Scrum is followed",
        d: "Manages the budget",
        correct: "c"
      },
      {
        question: "In Scrum, who owns the Product Backlog?",
        a: "Scrum Master",
        b: "Project Manager",
        c: "Product Owner",
        d: "Developer",
        correct: "c"
      },
      {
        question: "What is the maximum length of a Sprint in Scrum?",
        a: "1 week",
        b: "2 weeks",
        c: "3 weeks",
        d: "1 month",
        correct: "d"
      },
      {
        question: "Which of the following is NOT a valid Scrum event?",
        a: "Sprint Planning",
        b: "Daily Scrum",
        c: "Sprint Review",
        d: "Code Review",
        correct: "d"
      },
      {
        question: "What is the purpose of the Sprint Review?",
        a: "To measure team performance",
        b: "To plan the next Sprint",
        c: "To inspect the increment and adapt the Product Backlog",
        d: "To discuss team salaries",
        correct: "c"
      },
      {
        question: "How are Sprint tasks selected?",
        a: "Random selection by Product Owner",
        b: "Assigned by Scrum Master",
        c: "Chosen collaboratively by Scrum Team during Sprint Planning",
        d: "Voted by stakeholders",
        correct: "c"
      },
      {
        question: "Scrum prescribes time-boxes for which reason?",
        a: "To create stress",
        b: "To limit work",
        c: "To promote focus and efficiency",
        d: "To delay work",
        correct: "c"
      },
      {
        question: "What is the recommended size of a Scrum Team (excluding Product Owner and Scrum Master)?",
        a: "3–9 members",
        b: "10–15 members",
        c: "1–2 members",
        d: "Over 15 members",
        correct: "a"
      },
      {
        question: "Which of the following is a characteristic of a good Product Backlog item (PBI)?",
        a: "Vague and open-ended",
        b: "Clearly defined and testable",
        c: "Assigned to one developer only",
        d: "Estimated after development",
        correct: "b"
      },
      {
        question: "What does the Sprint Goal do?",
        a: "Motivates the Product Owner",
        b: "Provides a single objective for the Sprint",
        c: "Describes the entire backlog",
        d: "Outlines daily Scrum meetings",
        correct: "b"
      },
      {
        question: "What must a Product Increment be at the end of the Sprint?",
        a: "Bug-free",
        b: "Reviewed by stakeholders",
        c: "Usable and potentially releasable",
        d: "Launched to production",
        correct: "c"
      },
      {
        question: "What is meant by a ‘Definition of Done’ in Scrum?",
        a: "The end date of the project",
        b: "The definition used by managers",
        c: "A checklist ensuring the increment is releasable",
        d: "Sprint cancellation process",
        correct: "c"
      },
      {
        question: "Scrum relies heavily on which principle?",
        a: "Extensive documentation",
        b: "Customer contracts",
        c: "Empiricism",
        d: "Micromanagement",
        correct: "c"
      },
      {
        question: "Who decides when to release the Product Increment?",
        a: "Scrum Master",
        b: "Stakeholders",
        c: "Product Owner",
        d: "Team Lead",
        correct: "c"
      },
      {
        question: "What’s a key activity during Sprint Planning?",
        a: "Hiring new team members",
        b: "Deciding on the marketing plan",
        c: "Selecting and committing to Product Backlog Items",
        d: "Conducting interviews",
        correct: "c"
      },{
        question: "Which three pillars uphold every implementation of empirical process control in Scrum?",
        a: "Teamwork, Communication, Delivery",
        b: "Planning, Execution, Review",
        c: "Transparency, Inspection, Adaptation",
        d: "Code, Test, Release",
        correct: "c"
      },
      {
        question: "What is the role of the Scrum Master during the Daily Scrum?",
        a: "To assign tasks to developers",
        b: "To ensure the meeting happens and facilitate only when needed",
        c: "To present yesterday’s performance report",
        d: "To document everything discussed",
        correct: "b"
      },
      {
        question: "How should a Scrum Team respond when the Sprint Goal becomes obsolete?",
        a: "Continue and complete the Sprint anyway",
        b: "Call an emergency meeting with HR",
        c: "Cancel the Sprint if necessary",
        d: "Ignore it and continue the current work",
        correct: "c"
      },
      {
        question: "Which of the following is the correct order of Scrum events during a Sprint?",
        a: "Sprint Planning → Sprint Review → Sprint Retrospective → Daily Scrum",
        b: "Sprint Planning → Daily Scrum → Sprint Review → Sprint Retrospective",
        c: "Daily Scrum → Sprint Planning → Sprint Review → Sprint Retrospective",
        d: "Sprint Retrospective → Sprint Planning → Sprint Review → Daily Scrum",
        correct: "b"
      },
      {
        question: "What is velocity in Scrum?",
        a: "Number of bugs fixed per Sprint",
        b: "Speed of code execution",
        c: "Average amount of work a team completes in a Sprint",
        d: "Rate of requirement changes",
        correct: "c"
      },
      {
        question: "What does a burn-down chart visually represent?",
        a: "Developer availability",
        b: "Remaining work versus time",
        c: "Client engagement levels",
        d: "Code quality metrics",
        correct: "b"
      },
      {
        question: "Who is responsible for maximizing the value of the product in Scrum?",
        a: "Scrum Master",
        b: "Product Owner",
        c: "Stakeholders",
        d: "Project Manager",
        correct: "b"
      },
      {
        question: "When should the Sprint Retrospective be conducted?",
        a: "Before Sprint Planning",
        b: "Immediately after Sprint Review and before the next Sprint Planning",
        c: "Mid-Sprint",
        d: "Once a quarter",
        correct: "b"
      },
      {
        question: "What is a Product Increment?",
        a: "New tool added to the system",
        b: "Completed Product Backlog Items in a Sprint + past increments",
        c: "A new version of the product launched to the market",
        d: "Part of a user interface",
        correct: "b"
      },
      {
        question: "Which artifact provides a forecast of work to be completed during the Sprint?",
        a: "Sprint Backlog",
        b: "Product Backlog",
        c: "Definition of Done",
        d: "Release Plan",
        correct: "a"
      },
      {
        question: "What is meant by timeboxing in Scrum?",
        a: "Limiting budget",
        b: "Restricting team size",
        c: "Fixed maximum duration for Scrum events",
        d: "Blocking changes to Product Backlog",
        correct: "c"
      },
      {
        question: "How is work estimated in Scrum?",
        a: "In hours",
        b: "Using story points or ideal days",
        c: "In dollars",
        d: "Using percentage completion",
        correct: "b"
      },
      {
        question: "Which metric helps monitor the progress of a release?",
        a: "Cycle time chart",
        b: "Burn-up chart",
        c: "Velocity histogram",
        d: "Kanban board",
        correct: "b"
      },
      {
        question: "If the Product Owner is unavailable, who makes decisions on the Product Backlog?",
        a: "Scrum Master",
        b: "Scrum Team by voting",
        c: "No one, it should wait until Product Owner returns",
        d: "Project Manager",
        correct: "c"
      },
      {
        question: "What’s the result of the Sprint Retrospective?",
        a: "Sprint plan for next Sprint",
        b: "Increment definition",
        c: "Improvement plan for the team",
        d: "Code base review",
        correct: "c"
      },{
        question: "What is a key difference between Agile and Waterfall methodologies?",
        a: "Agile is linear; Waterfall is iterative",
        b: "Waterfall requires more coding than Agile",
        c: "Agile delivers projects all at once",
        d: "Agile is iterative; Waterfall is sequential",
        correct: "d"
      },
      {
        question: "In which methodology is client feedback continuous and ongoing?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "b"
      },
      {
        question: "Which model requires full requirement gathering before starting development?",
        a: "Agile",
        b: "Scrum",
        c: "Waterfall",
        d: "Kanban",
        correct: "c"
      },
      {
        question: "Which model is best suited for projects with well-defined requirements?",
        a: "Agile",
        b: "Waterfall",
        c: "RAD",
        d: "XP",
        correct: "b"
      },
      {
        question: "Which methodology follows a sprint-based development cycle?",
        a: "Waterfall",
        b: "Agile",
        c: "Prototype",
        d: "V-Model",
        correct: "b"
      },
      {
        question: "What is the main limitation of the Waterfall model?",
        a: "Too flexible",
        b: "No design phase",
        c: "Late testing phase",
        d: "Uses Scrum",
        correct: "c"
      },
      {
        question: "Which model promotes frequent releases and continuous delivery?",
        a: "Waterfall",
        b: "RAD",
        c: "Agile",
        d: "V-Model",
        correct: "c"
      },
      {
        question: "Which of the following is NOT a characteristic of Agile?",
        a: "Customer collaboration",
        b: "Working software over documentation",
        c: "Contract negotiation over collaboration",
        d: "Responding to change over following a plan",
        correct: "c"
      },
      {
        question: "In Agile, when are changes in requirements welcomed?",
        a: "Never",
        b: "Only in the beginning",
        c: "Throughout the development process",
        d: "After deployment only",
        correct: "c"
      },
      {
        question: "Which of these models follows a rigid, step-by-step approach?",
        a: "Agile",
        b: "Scrum",
        c: "Waterfall",
        d: "Kanban",
        correct: "c"
      },
      {
        question: "Who primarily owns the project in Agile?",
        a: "Project Sponsor",
        b: "Client",
        c: "Product Owner",
        d: "Scrum Master",
        correct: "c"
      },
      {
        question: "Which model is more adaptive to scope changes?",
        a: "Waterfall",
        b: "Agile",
        c: "V-Model",
        d: "RAD",
        correct: "b"
      },
      {
        question: "Which model emphasizes detailed documentation?",
        a: "Agile",
        b: "RAD",
        c: "Waterfall",
        d: "Scrum",
        correct: "c"
      },
      {
        question: "Agile development encourages the involvement of whom throughout the process?",
        a: "Only Project Manager",
        b: "Only Developer",
        c: "All stakeholders",
        d: "Database Admin",
        correct: "c"
      },
      {
        question: "Agile works best in what type of project environment?",
        a: "Stable and fixed",
        b: "Small scale only",
        c: "Dynamic and evolving",
        d: "Hardware projects only",
        correct: "c"
      },{
        question: "In Waterfall, what happens after the testing phase?",
        a: "Design phase",
        b: "Deployment phase",
        c: "Requirement analysis",
        d: "Iteration planning",
        correct: "b"
      },
      {
        question: "Which methodology allows for overlapping development and testing phases?",
        a: "Waterfall",
        b: "Agile",
        c: "Prototype",
        d: "RAD",
        correct: "b"
      },
      {
        question: "Which methodology is less effective when changes are frequent and dynamic?",
        a: "Agile",
        b: "Waterfall",
        c: "Scrum",
        d: "XP",
        correct: "b"
      },
      {
        question: "Which of the following roles is *not* typically found in the Waterfall model?",
        a: "Scrum Master",
        b: "Developer",
        c: "Tester",
        d: "Project Manager",
        correct: "a"
      },
      {
        question: "Which model provides quicker time-to-market?",
        a: "Waterfall",
        b: "V-Model",
        c: "Agile",
        d: "Spiral",
        correct: "c"
      },
      {
        question: "When is client feedback typically incorporated in Waterfall?",
        a: "Continuously",
        b: "At each sprint",
        c: "At the end of development",
        d: "After daily standups",
        correct: "c"
      },
      {
        question: "In Agile, what allows the team to inspect and adapt regularly?",
        a: "Daily Scrum",
        b: "Sprint Review",
        c: "Iteration Planning",
        d: "Retrospective",
        correct: "d"
      },
      {
        question: "Which model is more suitable for regulated industries requiring strict documentation?",
        a: "Agile",
        b: "Waterfall",
        c: "RAD",
        d: "Spiral",
        correct: "b"
      },
      {
        question: "What is the primary driver of Agile methodology?",
        a: "Process compliance",
        b: "Documentation",
        c: "Customer satisfaction",
        d: "Extensive planning",
        correct: "c"
      },
      {
        question: "Agile responds to changes more effectively because it uses:",
        a: "Heavy upfront planning",
        b: "Large batch releases",
        c: "Incremental delivery",
        d: "Strict design guidelines",
        correct: "c"
      },
      {
        question: "Which of the following phases are fixed in Waterfall but flexible in Agile?",
        a: "Requirement and Testing",
        b: "Design and Coding",
        c: "Planning and Deployment",
        d: "Requirement and Design",
        correct: "d"
      },
      {
        question: "Agile teams are expected to be:",
        a: "Hierarchical and rigid",
        b: "Flexible and cross-functional",
        c: "Isolated and large",
        d: "Only developers",
        correct: "b"
      },
      {
        question: "Waterfall development usually assumes:",
        a: "Evolving scope",
        b: "Time-boxed iterations",
        c: "Fixed requirements",
        d: "Daily changes",
        correct: "c"
      },
      {
        question: "Which is an Agile value according to the Agile Manifesto?",
        a: "Processes over people",
        b: "Contract negotiation over collaboration",
        c: "Comprehensive documentation over working software",
        d: "Responding to change over following a plan",
        correct: "d"
      },
      {
        question: "Agile improves risk management by:",
        a: "Delaying testing",
        b: "Waiting till final phase",
        c: "Delivering in large releases",
        d: "Delivering early and often",
        correct: "d"
      }, {
        question: "In Agile, what is the purpose of a Burndown Chart?",
        a: "Track cost vs quality",
        b: "Visualize work completed vs remaining",
        c: "Track project milestones",
        d: "Document team velocity",
        correct: "b"
      },
      {
        question: "Which metric is crucial for tracking Agile team performance?",
        a: "Critical Path",
        b: "Velocity",
        c: "PERT",
        d: "Risk Matrix",
        correct: "b"
      },
      {
        question: "How does Agile handle late-stage requirement changes?",
        a: "Rejects them as scope creep",
        b: "Implements in the next release cycle",
        c: "Accommodates them through sprint planning",
        d: "Refers them to the change control board",
        correct: "c"
      },
      {
        question: "Which Agile framework emphasizes 'pull system' and Work-In-Progress (WIP) limits?",
        a: "Scrum",
        b: "XP",
        c: "Kanban",
        d: "SAFe",
        correct: "c"
      },
      {
        question: "Why is documentation minimal in Agile?",
        a: "To save time",
        b: "It is replaced by frequent communication and working software",
        c: "Documentation is not required",
        d: "It increases project cost",
        correct: "b"
      },
      {
        question: "Which risk is most mitigated by Agile methodology?",
        a: "Cost overrun due to delays",
        b: "Requirements volatility",
        c: "Security threats",
        d: "Infrastructure failures",
        correct: "b"
      },
      {
        question: "Which phase is continuous in Agile but sequential in Waterfall?",
        a: "Requirements gathering",
        b: "Planning",
        c: "Testing",
        d: "Deployment",
        correct: "c"
      },
      {
        question: "In Waterfall, which document is prepared after the requirement phase?",
        a: "Product Backlog",
        b: "Sprint Plan",
        c: "Software Requirements Specification (SRS)",
        d: "Daily Standup Log",
        correct: "c"
      },
      {
        question: "Which Agile role is responsible for maximizing product value?",
        a: "Scrum Master",
        b: "Developer",
        c: "Product Owner",
        d: "Stakeholder",
        correct: "c"
      },
      {
        question: "Agile teams adapt to technical changes using which ceremony?",
        a: "Sprint Retrospective",
        b: "Daily Standup",
        c: "Sprint Review",
        d: "Iteration Planning",
        correct: "a"
      },
      {
        question: "What is the term for delivering usable product chunks in Agile?",
        a: "Big Bang Delivery",
        b: "Incremental Delivery",
        c: "Waterfall Delivery",
        d: "Staged Integration",
        correct: "b"
      },
      {
        question: "Which type of contract suits Agile best?",
        a: "Fixed Price",
        b: "Time and Material",
        c: "Firm-Fixed-Price",
        d: "Cost-Plus-Fixed-Fee",
        correct: "b"
      },
      {
        question: "Which Agile principle encourages face-to-face conversation?",
        a: "Technical excellence",
        b: "Working software as measure of progress",
        c: "Build projects around motivated individuals",
        d: "Best communication is face-to-face",
        correct: "d"
      },
      {
        question: "What is 'scope creep' and how is it handled in Agile?",
        a: "Unapproved changes – ignored",
        b: "Changes without documentation – rejected",
        c: "Frequent scope additions – managed through backlog grooming",
        d: "Budget exceeding features – removed",
        correct: "c"
      },
      {
        question: "Agile promotes sustainable development. What does this imply?",
        a: "Fastest delivery of software",
        b: "Balanced workload for continuous development",
        c: "Frequent deployment without testing",
        d: "Short-term high-pressure releases",
        correct: "b"
      },{
        question: "What is a Functional Requirement?",
        a: "Defines the speed of the system",
        b: "Describes the system’s behavior",
        c: "Mentions the color of the UI",
        d: "Specifies the hardware requirements",
        correct: "b"
      },
      {
        question: "Which of the following is a Non-Functional Requirement?",
        a: "User must be able to login",
        b: "System must respond in 2 seconds",
        c: "Admin should reset passwords",
        d: "User can submit feedback",
        correct: "b"
      },
      {
        question: "What do Functional Requirements describe?",
        a: "System performance",
        b: "Data encryption protocols",
        c: "What the system should do",
        d: "Programming language used",
        correct: "c"
      },
      {
        question: "Which is a characteristic of a Functional Requirement?",
        a: "Security level of the system",
        b: "Describes system functions and features",
        c: "Describes system availability",
        d: "Defines user interface aesthetics",
        correct: "b"
      },
      {
        question: "An example of a Functional Requirement is:",
        a: "System should have 99.9% uptime",
        b: "System allows users to register",
        c: "System encrypts passwords",
        d: "System supports 1 million users",
        correct: "b"
      },
      {
        question: "Non-Functional Requirements are also known as:",
        a: "User Stories",
        b: "Features",
        c: "Quality Attributes",
        d: "Milestones",
        correct: "c"
      },
      {
        question: "Which of the following is NOT a Non-Functional Requirement?",
        a: "Maintainability",
        b: "Reliability",
        c: "Authentication functionality",
        d: "Performance",
        correct: "c"
      },
      {
        question: "The ability to recover from failure is a:",
        a: "Usability requirement",
        b: "Reliability requirement",
        c: "Security requirement",
        d: "Functional requirement",
        correct: "b"
      },
      {
        question: "Functional Requirements are gathered from:",
        a: "System logs",
        b: "Source code",
        c: "Stakeholders and users",
        d: "Hardware specifications",
        correct: "c"
      },
      {
        question: "Which requirement defines ‘how well’ the system works?",
        a: "Functional",
        b: "Non-Functional",
        c: "Business",
        d: "Design",
        correct: "b"
      },
      {
        question: "Which of the following best describes performance requirements?",
        a: "User roles and permissions",
        b: "Time constraints and speed of operations",
        c: "Navigation structure",
        d: "Login workflows",
        correct: "b"
      },
      {
        question: "Which Non-Functional Requirement refers to system's user friendliness?",
        a: "Usability",
        b: "Security",
        c: "Scalability",
        d: "Maintainability",
        correct: "a"
      },
      {
        question: "Which requirement type supports 'legal compliance'?",
        a: "Functional",
        b: "Optional",
        c: "Non-Functional",
        d: "Business",
        correct: "c"
      },
      {
        question: "What is the role of Non-Functional Requirements in testing?",
        a: "Ignored during testing",
        b: "Guides performance, stress, and security testing",
        c: "Defines test data",
        d: "Used only for UI testing",
        correct: "b"
      },
      {
        question: "Which of the following is a Functional Requirement?",
        a: "System must support multiple languages",
        b: "System should perform transactions securely",
        c: "User must be able to update profile",
        d: "System must run on Linux",
        correct: "c"
      },{
        question: "Why is it important to distinguish between Functional and Non-Functional Requirements?",
        a: "To prioritize stakeholders",
        b: "To determine team salaries",
        c: "To better define system behavior and quality",
        d: "To reduce software size",
        correct: "c"
      },
      {
        question: "What happens if Non-Functional Requirements are not clearly defined?",
        a: "Software will not compile",
        b: "User experience may degrade",
        c: "System won't run on Linux",
        d: "Functional requirements will fail",
        correct: "b"
      },
      {
        question: "Which document typically includes Functional and Non-Functional Requirements?",
        a: "Design Document",
        b: "Requirement Specification Document (SRS)",
        c: "Deployment Document",
        d: "Codebase ReadMe",
        correct: "b"
      },
      {
        question: "Who is primarily responsible for gathering Functional Requirements?",
        a: "DevOps Engineer",
        b: "Database Administrator",
        c: "Business Analyst",
        d: "UI Designer",
        correct: "c"
      },
      {
        question: "What is an example of a measurable Non-Functional Requirement?",
        a: "System should log out users after inactivity",
        b: "System must support authentication",
        c: "System should respond within 2 seconds under load",
        d: "System must allow password reset",
        correct: "c"
      },
      {
        question: "Functional Requirements are mostly validated through:",
        a: "Unit Testing",
        b: "System Testing",
        c: "Performance Testing",
        d: "Security Testing",
        correct: "b"
      },
      {
        question: "Non-Functional Requirements are validated through:",
        a: "Unit Testing",
        b: "System Testing only",
        c: "Performance, Load, and Security Testing",
        d: "UI Testing",
        correct: "c"
      },
      {
        question: "Scalability, Security, and Usability fall under:",
        a: "Functional Requirements",
        b: "Programming Constraints",
        c: "Non-Functional Requirements",
        d: "Platform Requirements",
        correct: "c"
      },
      {
        question: "The system must allow users to reset their password. This is an example of:",
        a: "Design Requirement",
        b: "Non-Functional Requirement",
        c: "Functional Requirement",
        d: "Performance Requirement",
        correct: "c"
      },
      {
        question: "A poorly defined Non-Functional Requirement might result in:",
        a: "Misunderstood system features",
        b: "Increased development speed",
        c: "A beautiful UI",
        d: "Clear documentation",
        correct: "a"
      },
      {
        question: "Which of the following is a correct classification?",
        a: "Authentication – Non-Functional",
        b: "User registration – Non-Functional",
        c: "Response time – Functional",
        d: "Data encryption – Non-Functional",
        correct: "d"
      },
      {
        question: "Which attribute is commonly associated with usability?",
        a: "Ease of use and learning",
        b: "Encryption algorithms",
        c: "Transaction throughput",
        d: "Data volume",
        correct: "a"
      },
      {
        question: "Which is a Functional Requirement in an e-commerce application?",
        a: "Ability to add items to cart",
        b: "Application should be accessible to disabled users",
        c: "System should handle 1000 concurrent users",
        d: "Page should load under 3 seconds",
        correct: "a"
      },
      {
        question: "Which is the best approach to define Non-Functional Requirements?",
        a: "Using vague descriptions",
        b: "Making assumptions",
        c: "Quantifiable and testable terms",
        d: "Ignoring them until testing phase",
        correct: "c"
      },
      {
        question: "What is the role of stakeholders in requirement gathering?",
        a: "To fund the project only",
        b: "To test the software",
        c: "To define both functional and non-functional expectations",
        d: "To manage developers",
        correct: "c"
      },{
        question: "How do Non-Functional Requirements influence software architecture?",
        a: "They define class names",
        b: "They guide structural decisions like component distribution and data flow",
        c: "They describe use-case flows",
        d: "They affect only CSS design",
        correct: "b"
      },
      {
        question: "Which model can help define and structure Non-Functional Requirements?",
        a: "MVC",
        b: "NFR Framework (Goal-Softgoal hierarchy)",
        c: "Agile Manifesto",
        d: "TCP/IP Model",
        correct: "b"
      },
      {
        question: "When addressing Security as a Non-Functional Requirement, which aspect is least relevant?",
        a: "Authentication",
        b: "Authorization",
        c: "User Interface design",
        d: "Data Integrity",
        correct: "c"
      },
      {
        question: "Why should Non-Functional Requirements be testable?",
        a: "To satisfy developers’ curiosity",
        b: "To validate system quality attributes effectively",
        c: "To document user stories",
        d: "To avoid refactoring",
        correct: "b"
      },
      {
        question: "Which Non-Functional Requirement ensures the system behaves consistently under different environments?",
        a: "Portability",
        b: "Accuracy",
        c: "Atomicity",
        d: "Throughput",
        correct: "a"
      },
      {
        question: "Maintainability primarily addresses which concern?",
        a: "Ease of use for users",
        b: "Ease of software updates, debugging, and enhancements",
        c: "Speed of performance",
        d: "Reducing UI clicks",
        correct: "b"
      },
      {
        question: "Interoperability as a Non-Functional Requirement ensures:",
        a: "Aesthetic UI",
        b: "Integration with external systems and platforms",
        c: "Memory optimization",
        d: "Code readability",
        correct: "b"
      },
      {
        question: "Which Non-Functional Requirement becomes critical in medical or military systems?",
        a: "Performance",
        b: "Availability",
        c: "Reliability",
        d: "Portability",
        correct: "c"
      },
      {
        question: "Availability is often measured as:",
        a: "CPU usage percentage",
        b: "MTBF (Mean Time Between Failures)",
        c: "Total cost",
        d: "Encryption strength",
        correct: "b"
      },
      {
        question: "Which approach helps in early identification of Non-Functional Requirements?",
        a: "Backlog grooming",
        b: "Quality Attribute Workshops (QAW)",
        c: "Sprint Planning",
        d: "Daily stand-up meetings",
        correct: "b"
      },
      {
        question: "What is the relation between Non-Functional Requirements and SLAs (Service Level Agreements)?",
        a: "No relation at all",
        b: "SLAs are often based on Non-Functional Requirements like uptime, response time, etc.",
        c: "SLAs define coding standards only",
        d: "SLAs relate only to hardware purchases",
        correct: "b"
      },
      {
        question: "Which tool is often used for modeling and documenting quality attributes in Non-Functional Requirements?",
        a: "UML Use Case",
        b: "Quality Attribute Scenarios",
        c: "ER Diagram",
        d: "Gantt Chart",
        correct: "b"
      },
      {
        question: "Which scenario best describes a trade-off in Non-Functional Requirements?",
        a: "Adding a login feature",
        b: "Faster performance causing reduced security",
        c: "More buttons on UI",
        d: "Changing font size",
        correct: "b"
      },
      {
        question: "Which Non-Functional Requirement would best describe: 'System should recover from failure within 10 seconds'?",
        a: "Availability",
        b: "Maintainability",
        c: "Reliability",
        d: "Recoverability",
        correct: "d"
      },
      {
        question: "Why are Non-Functional Requirements often harder to elicit than Functional Requirements?",
        a: "They are not essential",
        b: "Stakeholders often overlook or assume them implicitly",
        c: "They are well-documented already",
        d: "They change frequently",
        correct: "b"
      },{
        question: "What does HTML stand for?",
        a: "Hyper Trainer Marking Language",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Marketing Language",
        d: "High Text Machine Language",
        correct: "b"
      },
      {
        question: "What is the latest version of HTML?",
        a: "HTML 4.01",
        b: "HTML5",
        c: "XHTML",
        d: "HTML 3.2",
        correct: "b"
      },
      {
        question: "Which tag is used to create a hyperlink in HTML?",
        a: "<link>",
        b: "<href>",
        c: "<a>",
        d: "<hyperlink>",
        correct: "c"
      },
      {
        question: "Which tag is used for inserting an image in HTML?",
        a: "<pic>",
        b: "<image>",
        c: "<src>",
        d: "<img>",
        correct: "d"
      },
      {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Computer Styled Sections",
        c: "Creative Style System",
        d: "Colorful Style Syntax",
        correct: "a"
      },
      {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<script>",
        b: "<style>",
        c: "<css>",
        d: "<styles>",
        correct: "b"
      },
      {
        question: "How do you make text bold in HTML?",
        a: "<bold>",
        b: "<strong>",
        c: "<bld>",
        d: "<text-bold>",
        correct: "b"
      },
      {
        question: "Which tag is used for creating a numbered list?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<dl>",
        correct: "b"
      },
      {
        question: "Which property in CSS is used to change the background color?",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "backgroundImage",
        correct: "c"
      },
      {
        question: "Which tag is used to create a table in HTML?",
        a: "<tbl>",
        b: "<table>",
        c: "<tab>",
        d: "<tr>",
        correct: "b"
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<break>",
        b: "<br>",
        c: "<lb>",
        d: "<line>",
        correct: "b"
      },
      {
        question: "Which attribute is used to provide alternate text for an image?",
        a: "title",
        b: "alt",
        c: "src",
        d: "caption",
        correct: "b"
      },
      {
        question: "What is the default alignment of content inside a <div> element?",
        a: "left",
        b: "center",
        c: "right",
        d: "justify",
        correct: "a"
      },
      {
        question: "How can you add a comment in HTML?",
        a: "// this is a comment",
        b: "' this is a comment",
        c: "<!-- this is a comment -->",
        d: "** this is a comment **",
        correct: "c"
      },
      {
        question: "Which HTML tag is used to define a paragraph?",
        a: "<pg>",
        b: "<para>",
        c: "<p>",
        d: "<par>",
        correct: "c"
      },{
        question: "Which HTML5 tag is used to define navigation links?",
        a: "<nav>",
        b: "<navigate>",
        c: "<menu>",
        d: "<ul>",
        correct: "a"
      },
      {
        question: "Which of the following is NOT a valid HTML5 semantic tag?",
        a: "<section>",
        b: "<article>",
        c: "<main>",
        d: "<blink>",
        correct: "d"
      },
      {
        question: "Which input type allows the user to pick a date?",
        a: "input type='text'",
        b: "input type='datetime'",
        c: "input type='calendar'",
        d: "input type='date'",
        correct: "d"
      },
      {
        question: "How do you apply a class to an HTML element?",
        a: "class='classname'",
        b: "style='classname'",
        c: "id='classname'",
        d: "css='classname'",
        correct: "a"
      },
      {
        question: "What is the use of the <canvas> element in HTML5?",
        a: "To draw graphics",
        b: "To create tables",
        c: "To write styles",
        d: "To store data",
        correct: "a"
      },
      {
        question: "How do you select all paragraph elements in CSS?",
        a: "#p",
        b: ".p",
        c: "p",
        d: "*p",
        correct: "c"
      },
      {
        question: "What does the 'z-index' property in CSS control?",
        a: "Text alignment",
        b: "Background color",
        c: "Stacking order",
        d: "Visibility",
        correct: "c"
      },
      {
        question: "Which CSS position value places an element relative to its normal position?",
        a: "fixed",
        b: "absolute",
        c: "relative",
        d: "static",
        correct: "c"
      },
      {
        question: "Which of the following tags is used to embed a video in HTML5?",
        a: "<media>",
        b: "<video>",
        c: "<movie>",
        d: "<embed>",
        correct: "b"
      },
      {
        question: "Which CSS unit is relative to the parent element’s font size?",
        a: "px",
        b: "em",
        c: "%",
        d: "vh",
        correct: "b"
      },
      {
        question: "What is the purpose of the 'placeholder' attribute in input fields?",
        a: "To define a title",
        b: "To show a tooltip",
        c: "To provide a hint",
        d: "To validate input",
        correct: "c"
      },
      {
        question: "Which property is used to make the text italic in CSS?",
        a: "font-decoration",
        b: "text-style",
        c: "font-style",
        d: "style",
        correct: "c"
      },
      {
        question: "Which HTML5 tag is used to define footer content?",
        a: "<bottom>",
        b: "<footer>",
        c: "<end>",
        d: "<base>",
        correct: "b"
      },
      {
        question: "What is the default value of the position property in CSS?",
        a: "absolute",
        b: "relative",
        c: "static",
        d: "fixed",
        correct: "c"
      },
      {
        question: "Which CSS property controls the text size?",
        a: "font-weight",
        b: "text-align",
        c: "font-size",
        d: "text-style",
        correct: "c"
      },{
        question: "What does the 'contenteditable' attribute do in HTML5?",
        a: "Allows user to edit text inside the element",
        b: "Makes the element read-only",
        c: "Links external content",
        d: "Applies animation to the content",
        correct: "a"
      },
      {
        question: "Which HTML5 API is used to store data in key/value pairs on the client side?",
        a: "Storage API",
        b: "Web Storage API",
        c: "Data API",
        d: "Indexed API",
        correct: "b"
      },
      {
        question: "How does 'display: flex' help in layout design?",
        a: "Adds a grid layout",
        b: "Creates a block-level box",
        c: "Creates a flexible box layout",
        d: "Centers text",
        correct: "c"
      },
      {
        question: "Which attribute enables native form validation in HTML5?",
        a: "checked",
        b: "required",
        c: "validate",
        d: "verify",
        correct: "b"
      },
      {
        question: "What does the '::after' selector do in CSS?",
        a: "Selects the element before the specified element",
        b: "Inserts content after an element",
        c: "Applies effect on hover",
        d: "Inserts comment in HTML",
        correct: "b"
      },
      {
        question: "Which HTML5 API allows dragging elements?",
        a: "Drag and Drop API",
        b: "Event API",
        c: "Animation API",
        d: "File API",
        correct: "a"
      },
      {
        question: "What is the role of the 'media' attribute in the <link> tag?",
        a: "Specifies media queries for responsive design",
        b: "Links external media players",
        c: "Embeds media files",
        d: "Sets image resolution",
        correct: "a"
      },
      {
        question: "Which CSS rule ensures an element always stays within the browser window?",
        a: "overflow: hidden",
        b: "position: static",
        c: "position: fixed",
        d: "position: relative",
        correct: "c"
      },
      {
        question: "How do you animate an element using CSS?",
        a: "Using @motion",
        b: "Using keyframes and animation property",
        c: "Using transition only",
        d: "With transform attribute",
        correct: "b"
      },
      {
        question: "What does the 'viewport' meta tag in HTML help with?",
        a: "Improves image loading",
        b: "Enables page scrolling",
        c: "Controls page scaling and responsiveness",
        d: "Adds animations",
        correct: "c"
      },
      {
        question: "How can CSS Grid be initialized on an element?",
        a: "display: inline-grid",
        b: "display: grid",
        c: "display: flex-grid",
        d: "display: block-grid",
        correct: "b"
      },
      {
        question: "Which pseudo-class targets elements when they gain focus?",
        a: ":hover",
        b: ":click",
        c: ":focus",
        d: ":target",
        correct: "c"
      },
      {
        question: "What is the difference between 'em' and 'rem' units in CSS?",
        a: "‘em’ is absolute, ‘rem’ is relative",
        b: "‘rem’ is relative to root, ‘em’ is relative to parent",
        c: "No difference",
        d: "‘rem’ scales based on viewport",
        correct: "b"
      },
      {
        question: "What is the function of the 'object-fit' property in CSS?",
        a: "To align text in an object",
        b: "To define how content of replaced elements like <img> should be resized",
        c: "To position objects absolutely",
        d: "To crop overflow text",
        correct: "b"
      },
      {
        question: "Which HTML5 tag is used for user input progress tracking?",
        a: "<meter>",
        b: "<progress>",
        c: "<input type='range'>",
        d: "<output>",
        correct: "b"
      },{
        question: "What is JavaScript primarily used for?",
        a: "Styling web pages",
        b: "Structuring web pages",
        c: "Adding interactivity to web pages",
        d: "Creating databases",
        correct: "c"
      },
      {
        question: "How do you declare a variable in JavaScript?",
        a: "var name;",
        b: "variable name;",
        c: "let = name;",
        d: "declare name;",
        correct: "a"
      },
      {
        question: "Which symbol is used for single-line comments in JavaScript?",
        a: "#",
        b: "//",
        c: "/* */",
        d: "<!-- -->",
        correct: "b"
      },
      {
        question: "What data type is 'true' in JavaScript?",
        a: "String",
        b: "Boolean",
        c: "Number",
        d: "Undefined",
        correct: "b"
      },
      {
        question: "Which method is used to display something in the browser console?",
        a: "display()",
        b: "console.log()",
        c: "alert()",
        d: "print()",
        correct: "b"
      },
      {
        question: "What will `typeof null` return?",
        a: "null",
        b: "object",
        c: "undefined",
        d: "boolean",
        correct: "b"
      },
      {
        question: "Which keyword is used to define a function?",
        a: "func",
        b: "define",
        c: "function",
        d: "method",
        correct: "c"
      },
      {
        question: "Which one is NOT a JavaScript data type?",
        a: "Number",
        b: "Boolean",
        c: "Float",
        d: "String",
        correct: "c"
      },
      {
        question: "What will `2 + '2'` output in JavaScript?",
        a: "22",
        b: "4",
        c: "NaN",
        d: "Error",
        correct: "a"
      },
      {
        question: "How do you write an if statement in JavaScript?",
        a: "if i == 5 then",
        b: "if (i == 5)",
        c: "if i = 5:",
        d: "if i == 5 {}",
        correct: "b"
      },
      {
        question: "Which method joins two or more strings in JavaScript?",
        a: "add()",
        b: "merge()",
        c: "concat()",
        d: "join()",
        correct: "c"
      },
      {
        question: "Which value is NOT falsy in JavaScript?",
        a: "false",
        b: "0",
        c: "null",
        d: "'0'",
        correct: "d"
      },
      {
        question: "How do you declare a constant variable?",
        a: "constant myVar = 10;",
        b: "const myVar = 10;",
        c: "var constant = 10;",
        d: "let const = 10;",
        correct: "b"
      },
      {
        question: "What does `NaN` stand for?",
        a: "No actual number",
        b: "Not a number",
        c: "No assigned number",
        d: "Negative and Null",
        correct: "b"
      },
      {
        question: "What is the correct syntax to call a function named 'greet'?",
        a: "call greet();",
        b: "greet[];",
        c: "greet();",
        d: "function greet();",
        correct: "c"
      },{
        question: "Which JavaScript method converts a JSON string into an object?",
        a: "JSON.parse()",
        b: "JSON.stringify()",
        c: "JSON.toObject()",
        d: "JSON.convert()",
        correct: "a"
      },
      {
        question: "Which scope is created when a function is invoked?",
        a: "Global Scope",
        b: "Block Scope",
        c: "Local Scope",
        d: "Object Scope",
        correct: "c"
      },
      {
        question: "Which symbol is used for strict equality comparison?",
        a: "==",
        b: "=",
        c: "===",
        d: "!==",
        correct: "c"
      },
      {
        question: "What is the output of `typeof NaN`?",
        a: "NaN",
        b: "undefined",
        c: "object",
        d: "number",
        correct: "d"
      },
      {
        question: "What is a closure in JavaScript?",
        a: "Function having its own scope",
        b: "Function inside an object",
        c: "Function with access to its outer scope even after the outer function has returned",
        d: "A function that doesn't return anything",
        correct: "c"
      },
      {
        question: "What is hoisting in JavaScript?",
        a: "Moving variable declarations to the top of the code",
        b: "Removing all variables",
        c: "Lifting functions out of scope",
        d: "Binding all functions to global scope",
        correct: "a"
      },
      {
        question: "Which method adds a new element at the end of an array?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
        correct: "a"
      },
      {
        question: "Which keyword is used to prevent modification of object properties?",
        a: "lock",
        b: "immutable",
        c: "Object.freeze()",
        d: "const",
        correct: "c"
      },
      {
        question: "What will `Boolean('false')` return?",
        a: "false",
        b: "true",
        c: "undefined",
        d: "NaN",
        correct: "b"
      },
      {
        question: "Which array method removes the first element from an array?",
        a: "shift()",
        b: "pop()",
        c: "splice()",
        d: "slice()",
        correct: "a"
      },
      {
        question: "Which of these is not a loop in JavaScript?",
        a: "for",
        b: "foreach",
        c: "while",
        d: "do...while",
        correct: "b"
      },
      {
        question: "Which function is used to delay execution of code?",
        a: "delay()",
        b: "timeout()",
        c: "setTimeout()",
        d: "setInterval()",
        correct: "c"
      },
      {
        question: "Which method can convert an object to a JSON string?",
        a: "JSON.parse()",
        b: "JSON.convert()",
        c: "JSON.stringify()",
        d: "object.toString()",
        correct: "c"
      },
      {
        question: "What will `0 == false` return?",
        a: "true",
        b: "false",
        c: "undefined",
        d: "error",
        correct: "a"
      },
      {
        question: "How do you check if a variable is an array?",
        a: "typeof arr === 'array'",
        b: "arr instanceof Array",
        c: "arr.isArray()",
        d: "Array(arr)",
        correct: "b"
      },
      {
        question: "What is the main difference between '==' and '===' in JavaScript?",
        a: "'==' checks value, '===' checks value and type",
        b: "'==' checks type, '===' checks only value",
        c: "Both are identical",
        d: "'===' is only for strings",
        correct: "a"
      },
      {
        question: "Which of the following is not a valid JavaScript data type?",
        a: "Symbol",
        b: "Boolean",
        c: "Float",
        d: "Undefined",
        correct: "c"
      },
      {
        question: "What is the result of `[] + []` in JavaScript?",
        a: "NaN",
        b: "[]",
        c: "0",
        d: "Empty string",
        correct: "d"
      },
      {
        question: "What will the following code output? `console.log(typeof null);`",
        a: "null",
        b: "object",
        c: "undefined",
        d: "number",
        correct: "b"
      },
      {
        question: "Which of the following is a characteristic of arrow functions?",
        a: "They have their own 'this'",
        b: "They are always async",
        c: "They do not bind their own 'this'",
        d: "They return objects by default",
        correct: "c"
      },
      {
        question: "How can you deep clone an object in JavaScript?",
        a: "Object.clone(obj)",
        b: "JSON.parse(JSON.stringify(obj))",
        c: "obj.clone()",
        d: "Object.assign({}, obj)",
        correct: "b"
      },
      {
        question: "What is the purpose of the 'use strict' directive?",
        a: "Enable modern syntax",
        b: "Avoid variable hoisting",
        c: "Catch common coding errors and throw exceptions",
        d: "Make JS code faster",
        correct: "c"
      },
      {
        question: "Which of the following is true for promises?",
        a: "They execute synchronously",
        b: "They represent a future value",
        c: "They never reject",
        d: "They are not chainable",
        correct: "b"
      },
      {
        question: "What is the output of `[...'JavaScript']`?",
        a: "['JavaScript']",
        b: "Error",
        c: "['J','a','v','a','S','c','r','i','p','t']",
        d: "['J','avaScript']",
        correct: "c"
      },
      {
        question: "How do you prevent a function from being called too frequently?",
        a: "Looping",
        b: "Throttling or Debouncing",
        c: "Callback chaining",
        d: "setInterval",
        correct: "b"
      },
      {
        question: "What will be the result of `typeof NaN === 'number'`?",
        a: "false",
        b: "true",
        c: "NaN",
        d: "undefined",
        correct: "b"
      },
      {
        question: "How can you create a private variable in JavaScript (ES6+)?",
        a: "Using var",
        b: "Using let",
        c: "Using closures",
        d: "Using window object",
        correct: "c"
      },
      {
        question: "Which built-in function can execute a function repeatedly at a fixed time interval?",
        a: "setTimeout()",
        b: "setInterval()",
        c: "repeat()",
        d: "delay()",
        correct: "b"
      },
      {
        question: "Which of these methods is not mutating the original array?",
        a: "splice()",
        b: "sort()",
        c: "filter()",
        d: "reverse()",
        correct: "c"
      },
      {
        question: "What does `await` keyword do?",
        a: "Pauses the function execution until the promise is settled",
        b: "Skips the promise",
        c: "Rejects the promise",
        d: "Always returns false",
        correct: "a"
      },
      {
        question: "What is the purpose of `bind()` in JavaScript?",
        a: "Clones a function",
        b: "Changes the 'this' context",
        c: "Delays execution",
        d: "Triggers event",
        correct: "b"
      },
      {
        question: "What does destructuring allow in JavaScript?",
        a: "Looping over elements",
        b: "Assigning properties from objects or arrays to variables",
        c: "Removing functions",
        d: "Optimizing memory",
        correct: "b"
      },
      {
        question: "What does the `finally` block do in a promise chain?",
        a: "Executes if promise is resolved only",
        b: "Executes after `then` but before `catch`",
        c: "Executes after success or failure",
        d: "Executes only on error",
        correct: "c"
      },
      {
        question: "What does JSON stand for?",
        a: "JavaScript Object Notation",
        b: "Java Source Object Notation",
        c: "JavaScript Oriented Notation",
        d: "Java Serialized Object Network",
        correct: "a"
      },
      {
        question: "What is JSON primarily used for?",
        a: "Styling websites",
        b: "Structuring and exchanging data",
        c: "Creating animations",
        d: "Web hosting",
        correct: "b"
      },
      {
        question: "Which data structure is used in JSON to represent a collection of key-value pairs?",
        a: "Array",
        b: "Object",
        c: "Function",
        d: "String",
        correct: "b"
      },
      {
        question: "What is the file extension for JSON files?",
        a: ".jsn",
        b: ".json",
        c: ".jdata",
        d: ".txt",
        correct: "b"
      },
      {
        question: "Which of the following is a correct JSON value?",
        a: "undefined",
        b: "function(){}",
        c: `"hello"`,
        d: "NaN",
        correct: "c"
      },
      {
        question: "In JSON, how are arrays defined?",
        a: "Using {}",
        b: "Using <>",
        c: "Using []",
        d: "Using ()",
        correct: "c"
      },
      {
        question: "Which of the following can JSON *not* represent?",
        a: "String",
        b: "Function",
        c: "Number",
        d: "Boolean",
        correct: "b"
      },
      {
        question: "What method is used in JavaScript to convert a JavaScript object to a JSON string?",
        a: "JSON.parse()",
        b: "JSON.decode()",
        c: "JSON.stringify()",
        d: "JSON.convert()",
        correct: "c"
      },
      {
        question: "Which method is used to parse a JSON string into a JavaScript object?",
        a: "JSON.parse()",
        b: "JSON.objectify()",
        c: "JSON.decode()",
        d: "JSON.convert()",
        correct: "a"
      },{
        question: "Which of the following is a valid JSON format?",
        a: `{ "name": "John", "age": 30 }`,
        b: `{ name: "John", age: 30 }`,
        c: `{ 'name': 'John', 'age': 30 }`,
        d: `{ name = "John", age = 30 }`,
        correct: "a"
      },
      {
        question: "Which type of quotes must be used for strings in JSON?",
        a: "Single quotes",
        b: "Double quotes",
        c: "Backticks",
        d: "Any of the above",
        correct: "b"
      },
      {
        question: "How does JSON represent null values?",
        a: `"null"`,
        b: `"None"`,
        c: `null`,
        d: `undefined`,
        correct: "c"
      },
      {
        question: "Which of the following is not allowed as a JSON key?",
        a: "A string with double quotes",
        b: "A number",
        c: "A variable name",
        d: "A string without quotes",
        correct: "d"
      },
      {
        question: "JSON is derived from which programming language?",
        a: "Python",
        b: "C++",
        c: "Java",
        d: "JavaScript",
        correct: "d"
      },
      {
        question: "What does JSON.stringify() do?",
        a: "Parses a JSON string",
        b: "Converts a JavaScript object to a JSON string",
        c: "Validates JSON data",
        d: "Formats JSON for display",
        correct: "b"
      },
      {
        question: "Can JSON keys be numbers?",
        a: "Yes",
        b: "No",
        c: "Only in arrays",
        d: "Only in objects",
        correct: "b"
      },
      {
        question: "Which of these types is not supported directly in JSON?",
        a: "Boolean",
        b: "Date",
        c: "String",
        d: "Array",
        correct: "b"
      },
      {
        question: "What is the MIME type of JSON?",
        a: "application/json",
        b: "text/json",
        c: "application/javascript",
        d: "application/xml",
        correct: "a"
      },
      {
        question: "Which of these is a safe way to check if JSON is valid in JavaScript?",
        a: "JSON.check()",
        b: "try { JSON.parse(str) }",
        c: "JSON.validate()",
        d: "typeof JSON === 'object'",
        correct: "b"
      },
      {
        question: "What is the output of JSON.stringify({name: 'John', age: 25})?",
        a: `'{"name":"John","age":25}'`,
        b: `{name: "John", age: 25}`,
        c: `{name:'John', age:25}`,
        d: `name=John&age=25`,
        correct: "a"
      },
      {
        question: "Which of the following is true about JSON and XML?",
        a: "JSON supports comments; XML does not.",
        b: "XML is easier to parse than JSON.",
        c: "JSON is more human-readable and lightweight than XML.",
        d: "Both are binary formats.",
        correct: "c"
      },{
        question: "Which method is used to safely parse a JSON string in JavaScript?",
        a: "eval()",
        b: "parseJSON()",
        c: "JSON.parse() with try-catch",
        d: "JSON.convert()",
        correct: "c"
      },
      {
        question: "How would you parse a nested JSON object safely?",
        a: "JSON.parse(JSON.stringify(obj))",
        b: "Access using dot notation only",
        c: "Use optional chaining or checks after JSON.parse()",
        d: "Use obj.toJSON()",
        correct: "c"
      },
      {
        question: "Which of the following cannot be serialized using JSON.stringify()?",
        a: "Array",
        b: "Object",
        c: "Function",
        d: "String",
        correct: "c"
      },
      {
        question: "What is the output of JSON.stringify(undefined)?",
        a: `"undefined"`,
        b: `"null"`,
        c: `undefined`,
        d: `undefined is removed`,
        correct: "b"
      },
      {
        question: "How does JSON.stringify handle circular references?",
        a: "Ignores the circular part",
        b: "Throws an error",
        c: "Converts to null",
        d: "Replaces with [Circular]",
        correct: "b"
      },
      {
        question: "Which feature is available in JSON.stringify() to customize output?",
        a: "Filter function",
        b: "Replacer function",
        c: "Pretty print",
        d: "Compressor",
        correct: "b"
      },
      {
        question: "What does the third argument in JSON.stringify(value, replacer, space) control?",
        a: "Output format",
        b: "Indentation for pretty print",
        c: "Minification",
        d: "Object depth",
        correct: "b"
      },
      {
        question: "Which of the following can cause a parsing error in JSON?",
        a: `{"key": null}`,
        b: `{"key": "value"}`,
        c: `{"key": undefined}`,
        d: `{"key": 123}`,
        correct: "c"
      },
      {
        question: "How do you convert a Map object into a valid JSON string?",
        a: "Use JSON.stringify directly on Map",
        b: "Use Object.fromEntries(map) then stringify",
        c: "Use map.toJSON()",
        d: "Use map.toString()",
        correct: "b"
      },
      {
        question: "How do you handle a BigInt in JSON?",
        a: "Convert to Number",
        b: "Use a custom replacer to convert to string",
        c: "JSON handles BigInt by default",
        d: "Wrap in array",
        correct: "b"
      },
      {
        question: "In JSON Schema, what keyword is used to define required fields?",
        a: `"mandatory"`,
        b: `"required"`,
        c: `"needed"`,
        d: `"essential"`,
        correct: "b"
      },
      {
        question: "What is the purpose of a reviver function in JSON.parse()?",
        a: "To modify values during parsing",
        b: "To encode binary",
        c: "To ignore nulls",
        d: "To validate JSON",
        correct: "a"
      },
      {
        question: "Which scenario best suits the use of JSONP?",
        a: "Parsing local JSON files",
        b: "Reading JSON from another domain in legacy browsers",
        c: "Writing JSON to file",
        d: "Validating JSON structure",
        correct: "b"
      },{
        question: "What is a data model?",
        a: "A software testing technique",
        b: "A conceptual representation of data structures",
        c: "A programming language",
        d: "A UI design pattern",
        correct: "b"
      },
      {
        question: "Which of the following is NOT a type of data model?",
        a: "Conceptual",
        b: "Logical",
        c: "Physical",
        d: "Sequential",
        correct: "d"
      },
      {
        question: "What is the main goal of a conceptual data model?",
        a: "Optimize database performance",
        b: "Define data structure at code level",
        c: "Capture business requirements",
        d: "Normalize tables",
        correct: "c"
      },
      {
        question: "Logical data model includes:",
        a: "Platform-specific implementation details",
        b: "Business rules and normalization",
        c: "File system structure",
        d: "API documentation",
        correct: "b"
      },
      {
        question: "Which model is used for actual implementation in a DBMS?",
        a: "Conceptual",
        b: "Logical",
        c: "Physical",
        d: "Abstract",
        correct: "c"
      },
      {
        question: "The physical data model includes:",
        a: "ER diagrams only",
        b: "Platform-independent structure",
        c: "Table names, indexes, and storage details",
        d: "User requirements",
        correct: "c"
      },
      {
        question: "Which data model defines relationships and keys without hardware concerns?",
        a: "Physical",
        b: "Logical",
        c: "Conceptual",
        d: "Relational",
        correct: "b"
      },
      {
        question: "What symbol is commonly used in ER diagrams to represent an entity?",
        a: "Circle",
        b: "Diamond",
        c: "Rectangle",
        d: "Triangle",
        correct: "c"
      },
      {
        question: "Which model is the most abstract?",
        a: "Logical",
        b: "Physical",
        c: "Conceptual",
        d: "Relational",
        correct: "c"
      },
      {
        question: "What does an attribute in a data model represent?",
        a: "An index",
        b: "A relationship",
        c: "A data value or field",
        d: "A database",
        correct: "c"
      },{
        question: "In a conceptual data model, what is primarily represented?",
        a: "Data types and indexes",
        b: "High-level entities and relationships",
        c: "Tables and foreign keys",
        d: "Stored procedures",
        correct: "b"
      },
      {
        question: "Which of the following best describes a logical data model?",
        a: "Represents business goals in plain English",
        b: "Maps user roles to data access",
        c: "Defines data elements and relationships in detail",
        d: "Specifies physical storage devices",
        correct: "c"
      },
      {
        question: "Which model bridges the gap between conceptual and physical models?",
        a: "ER model",
        b: "Logical model",
        c: "Tabular model",
        d: "Hierarchical model",
        correct: "b"
      },
      {
        question: "Which is a key difference between logical and physical models?",
        a: "Physical models define constraints, logical models do not",
        b: "Logical models are implementation-specific",
        c: "Physical models include normalization",
        d: "Logical models consider performance tuning",
        correct: "a"
      },
      {
        question: "Which model includes information like disk partitions and indexing strategy?",
        a: "Logical data model",
        b: "Conceptual data model",
        c: "Physical data model",
        d: "Analytical model",
        correct: "c"
      },
      {
        question: "Which term best represents the link between two entities?",
        a: "Table",
        b: "Attribute",
        c: "Relationship",
        d: "Constraint",
        correct: "c"
      },
      {
        question: "Primary keys and foreign keys are typically defined in which model?",
        a: "Conceptual",
        b: "Physical",
        c: "Logical",
        d: "Design",
        correct: "c"
      },
      {
        question: "Which model abstracts data without technical details?",
        a: "Logical model",
        b: "Physical model",
        c: "Conceptual model",
        d: "Object model",
        correct: "c"
      },
      {
        question: "Which modeling tool is often used for creating logical models?",
        a: "XAMPP",
        b: "MySQL Workbench",
        c: "MS Word",
        d: "Adobe Illustrator",
        correct: "b"
      },
      {
        question: "Normalization is mainly done at which modeling level?",
        a: "Conceptual",
        b: "Logical",
        c: "Physical",
        d: "Dimensional",
        correct: "b"
      },
      {
        question: "Which model uses schemas, such as star schema and snowflake schema?",
        a: "Conceptual model",
        b: "Logical model",
        c: "Data warehouse model",
        d: "Physical model",
        correct: "c"
      },
      {
        question: "Which data modeling level would include column types like INT, VARCHAR, DATE?",
        a: "Logical",
        b: "Conceptual",
        c: "Physical",
        d: "Object-Oriented",
        correct: "c"
      },
      {
        question: "The process of transforming a conceptual model to a logical one involves:",
        a: "Adding constraints and access controls",
        b: "Creating tables and indexes",
        c: "Defining primary keys, data types, and relationships",
        d: "Visualizing business processes",
        correct: "c"
      },
      {
        question: "Which of the following is true for the conceptual model?",
        a: "It includes foreign keys",
        b: "It defines normalization levels",
        c: "It focuses on user perspective and data semantics",
        d: "It includes table indexes",
        correct: "c"
      },
      {
        question: "Why is the physical model important?",
        a: "It helps in requirement gathering",
        b: "It focuses on performance and storage",
        c: "It replaces logical modeling",
        d: "It is used by non-technical stakeholders",
        correct: "b"
      },
      {
        question: "Which of the following best describes the transition from logical to physical data model?",
        a: "Adding new entities",
        b: "Removing business rules",
        c: "Adding indexing strategies, column data types, and storage structures",
        d: "Creating flowcharts",
        correct: "c"
      },
      {
        question: "In which scenario is denormalization commonly applied?",
        a: "Conceptual modeling for ERD creation",
        b: "Logical modeling for schema design",
        c: "Physical modeling to improve query performance",
        d: "During system analysis phase",
        correct: "c"
      },
      {
        question: "Which of the following is a challenge specific to physical data modeling?",
        a: "Identifying entities and attributes",
        b: "Mapping real-world relationships",
        c: "Balancing performance with storage optimization",
        d: "Modeling user roles",
        correct: "c"
      },
      {
        question: "Which advanced concept is crucial when optimizing physical models?",
        a: "Normalization to 3NF",
        b: "Business process modeling",
        c: "Indexing and partitioning strategy",
        d: "User experience design",
        correct: "c"
      },
      {
        question: "What is an advantage of using surrogate keys in logical and physical models?",
        a: "They enhance business understanding",
        b: "They make relationships more human-readable",
        c: "They ensure uniqueness and simplify joins",
        d: "They remove the need for indexes",
        correct: "c"
      },
      {
        question: "Which model typically addresses security constraints like access control?",
        a: "Conceptual",
        b: "Logical",
        c: "Physical",
        d: "Behavioral",
        correct: "c"
      },
      {
        question: "Which strategy is often applied during physical modeling for large-scale databases?",
        a: "Reverse engineering",
        b: "ERD validation",
        c: "Horizontal partitioning",
        d: "SWOT analysis",
        correct: "c"
      },
      {
        question: "Which of the following is used to represent many-to-many relationships in logical models?",
        a: "Foreign key constraints",
        b: "Join tables or associative entities",
        c: "Indexing",
        d: "Trigger-based joins",
        correct: "b"
      },
      {
        question: "In a star schema model, what role does the 'fact table' play?",
        a: "Defines business logic",
        b: "Stores metadata",
        c: "Stores quantitative data linked to dimension tables",
        d: "Acts as a relational view",
        correct: "c"
      },
      {
        question: "Why is referential integrity important in logical data models?",
        a: "It helps design user interfaces",
        b: "It reduces storage size",
        c: "It maintains consistency across related tables",
        d: "It simplifies conceptual modeling",
        correct: "c"
      },
      {
        question: "Which type of model would define how backup strategies are implemented?",
        a: "Conceptual",
        b: "Logical",
        c: "Physical",
        d: "Functional",
        correct: "c"
      },
      {
        question: "What is one risk of overly complex physical data models?",
        a: "Too many high-level entities",
        b: "Slower performance and harder maintenance",
        c: "Limited abstraction",
        d: "Too much focus on relationships",
        correct: "b"
      },
      {
        question: "What kind of attributes would be included only at the physical modeling level?",
        a: "Primary keys",
        b: "User roles",
        c: "Storage engines and data compression",
        d: "Entity-relationship definitions",
        correct: "c"
      },
      {
        question: "What differentiates an entity in conceptual modeling from a table in physical modeling?",
        a: "Entities are unique only by name",
        b: "Tables define storage and technical specifications",
        c: "Entities are always user-defined objects",
        d: "Tables exclude relationships",
        correct: "b"
      },
      {
        question: "Which physical optimization technique is used to avoid full-table scans?",
        a: "Normalization",
        b: "Surrogate key mapping",
        c: "Index creation",
        d: "Adding more columns",
        correct: "c"
      },
      {
        question: "What is the main purpose of data modeling?",
        a: "To define UI layout",
        b: "To represent data and its relationships clearly",
        c: "To create web pages",
        d: "To set up user permissions",
        correct: "b"
      },
      {
        question: "Which of the following is a type of data model?",
        a: "Structural model",
        b: "Architectural model",
        c: "Conceptual model",
        d: "UI model",
        correct: "c"
      },
      {
        question: "What is an entity in data modeling?",
        a: "A type of user interface",
        b: "A business process step",
        c: "A real-world object represented in a database",
        d: "A programming function",
        correct: "c"
      },
      {
        question: "What does a relationship in data modeling describe?",
        a: "The structure of a function",
        b: "A flow of algorithm",
        c: "How entities are associated with each other",
        d: "The type of software license",
        correct: "c"
      },
      {
        question: "Which of the following is NOT a level of data model?",
        a: "Logical",
        b: "Physical",
        c: "Functional",
        d: "Conceptual",
        correct: "c"
      },
      {
        question: "Which component of a data model represents characteristics of an entity?",
        a: "Procedure",
        b: "Attribute",
        c: "Service",
        d: "Node",
        correct: "b"
      },
      {
        question: "Which model gives the highest level overview of data?",
        a: "Physical model",
        b: "ERD diagram",
        c: "Conceptual model",
        d: "Relational schema",
        correct: "c"
      },
      {
        question: "A data model is most useful during which phase of a project?",
        a: "Implementation",
        b: "Design",
        c: "Deployment",
        d: "Maintenance",
        correct: "b"
      },
      {
        question: "Which of these helps prevent data redundancy in databases?",
        a: "Data entry form",
        b: "Normalization",
        c: "User authentication",
        d: "Data logs",
        correct: "b"
      },
      {
        question: "Which modeling tool is commonly used to design data models?",
        a: "Photoshop",
        b: "Draw.io",
        c: "ERwin",
        d: "Blender",
        correct: "c"
      },
      {
        question: "What is a foreign key?",
        a: "A type of primary key",
        b: "A key that links to another table",
        c: "A security feature",
        d: "A type of query",
        correct: "b"
      },
      {
        question: "In a student database, 'Roll Number' is most likely a:",
        a: "Relationship",
        b: "Entity",
        c: "Primary Key",
        d: "Schema",
        correct: "c"
      },
      {
        question: "What is a schema in the context of data modeling?",
        a: "A user manual",
        b: "A set of programming instructions",
        c: "A structure that defines a database",
        d: "A software framework",
        correct: "c"
      },
      {
        question: "Which of these represents a one-to-many relationship?",
        a: "One book to one author",
        b: "One student to one roll number",
        c: "One teacher to many students",
        d: "Many users to one password",
        correct: "c"
      },
      {
        question: "Which term is used for a unique identifier of a record?",
        a: "Attribute",
        b: "Schema",
        c: "Primary Key",
        d: "Label",
        correct: "c"
      },
      {
        question: "Which of the following best describes a conceptual data model?",
        a: "It provides detailed physical storage details.",
        b: "It focuses on the logical structure of the data.",
        c: "It represents the overall structure without implementation details.",
        d: "It shows indexing methods and partitioning strategies.",
        correct: "c"
      },
      {
        question: "What is the main focus of a logical data model?",
        a: "Defining relationships between servers",
        b: "Understanding UI flow",
        c: "Specifying entities, attributes, and relationships",
        d: "Writing SQL queries",
        correct: "c"
      },
      {
        question: "Which of the following terms is used for a field that uniquely identifies each record in a table?",
        a: "Attribute",
        b: "Foreign Key",
        c: "Primary Key",
        d: "Index",
        correct: "c"
      },
      {
        question: "What is the purpose of normalization in data modeling?",
        a: "To make data more complex",
        b: "To reduce redundancy and improve integrity",
        c: "To remove all foreign keys",
        d: "To store UI preferences",
        correct: "b"
      },
      {
        question: "Which of the following is NOT a goal of data modeling?",
        a: "Improve communication between stakeholders",
        b: "Increase data redundancy",
        c: "Establish rules and structure for the database",
        d: "Clarify system requirements",
        correct: "b"
      },
      {
        question: "What is denormalization?",
        a: "Reducing tables by merging them",
        b: "Process of adding redundancy for performance",
        c: "Converting data into raw format",
        d: "Removing all primary keys",
        correct: "b"
      },
      {
        question: "Which of the following is true about an ER diagram?",
        a: "It is used only in physical design.",
        b: "It represents entities and their relationships.",
        c: "It is specific to JavaScript data types.",
        d: "It defines server routes.",
        correct: "b"
      },
      {
        question: "In data modeling, a 'cardinality' refers to:",
        a: "The type of key used",
        b: "The number of columns in a table",
        c: "The number of instances of one entity related to another",
        d: "The weight of data",
        correct: "c"
      },
      {
        question: "Which of these is used to link two tables together?",
        a: "Composite Key",
        b: "Foreign Key",
        c: "Candidate Key",
        d: "Index",
        correct: "b"
      },
      {
        question: "Which type of data model includes constraints like NOT NULL and UNIQUE?",
        a: "Conceptual",
        b: "Logical",
        c: "Physical",
        d: "Semantic",
        correct: "c"
      },
      {
        question: "A candidate key is:",
        a: "An alternative key that can act as a primary key",
        b: "A backup key in case of failure",
        c: "A key from a different table",
        d: "A temporary key",
        correct: "a"
      },
      {
        question: "Which model contains details like column types, indexes, and storage specifications?",
        a: "Conceptual Model",
        b: "Logical Model",
        c: "Physical Model",
        d: "Relational Model",
        correct: "c"
      },
      {
        question: "Which database design technique involves reducing duplicated data?",
        a: "Denormalization",
        b: "Data mining",
        c: "Indexing",
        d: "Normalization",
        correct: "d"
      },
      {
        question: "What is a surrogate key?",
        a: "A natural key chosen by the user",
        b: "A generated key used as a substitute for a natural key",
        c: "A backup key used during crashes",
        d: "A duplicate key in multiple tables",
        correct: "b"
      },
      {
        question: "Which of the following represents a strong entity in ER diagrams?",
        a: "Dashed rectangle",
        b: "Diamond",
        c: "Double rectangle",
        d: "Rectangle",
        correct: "d"
      },
      {
        question: "Which of the following data models is closest to how the data is actually stored?",
        a: "Logical",
        b: "Conceptual",
        c: "Physical",
        d: "Hierarchical",
        correct: "c"
      },
      {
        question: "In ER diagrams, what shape is used to represent an attribute?",
        a: "Diamond",
        b: "Oval",
        c: "Rectangle",
        d: "Hexagon",
        correct: "b"
      },
      {
        question: "Which constraint ensures that every foreign key matches a primary key in the related table?",
        a: "Check Constraint",
        b: "Referential Integrity",
        c: "Not Null",
        d: "Default Constraint",
        correct: "b"
      },
      {
        question: "Which of the following is an example of a one-to-one relationship?",
        a: "Customer to Orders",
        b: "Country to Capital",
        c: "Student to Classes",
        d: "Teacher to Students",
        correct: "b"
      },
      {
        question: "What is the first step in building a data model?",
        a: "Creating stored procedures",
        b: "Identifying entities and relationships",
        c: "Setting up primary keys",
        d: "Writing backend logic",
        correct: "b"
      },
      {
        question: "Which of the following best explains the purpose of a star schema in data modeling?",
        a: "To handle complex relationships between tables",
        b: "To normalize data for transactional systems",
        c: "To optimize queries in data warehousing by denormalizing data",
        d: "To manage relational integrity across distributed databases",
        correct: "c"
      },
      {
        question: "Which situation most requires the use of a snowflake schema over a star schema?",
        a: "High-speed transactional processing",
        b: "Highly normalized dimension tables",
        c: "Flat file data reporting",
        d: "Unstructured document storage",
        correct: "b"
      },
      {
        question: "Which of the following statements is TRUE about dimensional modeling?",
        a: "It avoids redundancy at all costs",
        b: "It is optimized for transactional systems",
        c: "It supports faster read operations by using denormalized structure",
        d: "It does not support time-series data",
        correct: "c"
      },
      {
        question: "What kind of key is typically used in fact tables to link with dimension tables?",
        a: "Candidate Key",
        b: "Natural Key",
        c: "Surrogate Key",
        d: "Composite Key",
        correct: "c"
      },
      {
        question: "Which is a key characteristic of a conformed dimension in data modeling?",
        a: "It is used in only one data mart",
        b: "It is normalized for faster performance",
        c: "It is shared across multiple fact tables or data marts",
        d: "It contains foreign keys only",
        correct: "c"
      },
      {
        question: "What is the purpose of slowly changing dimensions (SCD) in dimensional modeling?",
        a: "To capture and manage changes in dimensional data over time",
        b: "To prevent changes in the dimension table",
        c: "To speed up fact table joins",
        d: "To normalize dimensions further",
        correct: "a"
      },
      {
        question: "Which SCD type preserves full history of changes in dimensional data?",
        a: "Type 0",
        b: "Type 1",
        c: "Type 2",
        d: "Type 3",
        correct: "c"
      },
      {
        question: "In data vault modeling, which component stores transactional data?",
        a: "Hub",
        b: "Satellite",
        c: "Link",
        d: "Fact",
        correct: "b"
      },
      {
        question: "Which technique is used in big data systems for distributing data models across nodes?",
        a: "Sharding",
        b: "Mirroring",
        c: "Replication",
        d: "Denormalization",
        correct: "a"
      },
      {
        question: "What is a surrogate key in a data warehouse used for?",
        a: "Generating random values",
        b: "Substituting a natural key with a unique identifier",
        c: "Encrypting database credentials",
        d: "Defining compound relationships",
        correct: "b"
      },
      {
        question: "In a dimensional model, which of the following represents a measurable event?",
        a: "Attribute",
        b: "Dimension",
        c: "Fact",
        d: "Primary Key",
        correct: "c"
      },
      {
        question: "Which of the following is a reason to use a bridge table in dimensional modeling?",
        a: "To increase redundancy in the dimension table",
        b: "To support many-to-many relationships between dimensions and facts",
        c: "To speed up inner joins",
        d: "To track changes in the primary key",
        correct: "b"
      },
      {
        question: "Which technique allows a data model to scale well in NoSQL databases?",
        a: "Snowflake schema",
        b: "Normalization",
        c: "Polyglot persistence",
        d: "Functional decomposition",
        correct: "c"
      },
      {
        question: "What is the purpose of anchor modeling?",
        a: "To remove all foreign keys",
        b: "To design systems with denormalized views",
        c: "To provide flexible and temporal data modeling for evolving schemas",
        d: "To visualize data mining results",
        correct: "c"
      },
      {
        question: "Which of the following is true about canonical data models?",
        a: "They are optimized for OLTP systems",
        b: "They standardize data exchange across systems",
        c: "They ignore business rules",
        d: "They are always physical models",
        correct: "b"
      },
      {
        question: "What is the purpose of a junk dimension?",
        a: "To eliminate duplicate records",
        b: "To store unrelated miscellaneous flags and indicators",
        c: "To act as a surrogate key for dimension tables",
        d: "To replace foreign key references",
        correct: "b"
      },
      {
        question: "What does a hybrid data model refer to?",
        a: "A combination of physical and logical models only",
        b: "Using normalized and denormalized tables depending on use-case",
        c: "A model that ignores relationships between entities",
        d: "Only used in document-based systems",
        correct: "b"
      },
      {
        question: "In which scenario would you most likely use a snowflake schema?",
        a: "For OLAP systems needing reduced disk space and maintainable dimensions",
        b: "In NoSQL flat-file storage",
        c: "In normalized transaction systems",
        d: "In mobile app caching",
        correct: "a"
      },
      {
        question: "Which of the following best defines a 'degenerate dimension'?",
        a: "A dimension with no surrogate key",
        b: "A dimension stored in JSON format",
        c: "A dimension that exists in the fact table but has no associated dimension table",
        d: "A corrupted dimension table",
        correct: "c"
      },
      {
        question: "What is the primary goal of NoSQL data modeling?",
        a: "Strict schema enforcement",
        b: "Minimizing flexibility",
        c: "Optimizing for specific access patterns and scalability",
        d: "Full normalization",
        correct: "c"
      },
      {
        question: "What is the main purpose of a data model?",
        a: "To visualize the user interface",
        b: "To store images in a system",
        c: "To organize and structure data logically",
        d: "To build wireframes",
        correct: "c"
      },
      {
        question: "Which type of data model shows high-level entities and relationships?",
        a: "Physical data model",
        b: "Conceptual data model",
        c: "Relational data model",
        d: "Logical data model",
        correct: "b"
      },
      {
        question: "Which of the following defines attributes and their data types?",
        a: "Physical data model",
        b: "Conceptual data model",
        c: "Logical data model",
        d: "Graph data model",
        correct: "c"
      },
      {
        question: "Which of these is NOT a component of a data model?",
        a: "Entity",
        b: "Attribute",
        c: "Relationship",
        d: "User interface",
        correct: "d"
      },
      {
        question: "What is an entity in a data model?",
        a: "A type of server",
        b: "A user interface element",
        c: "A thing or object in the real world",
        d: "A CSS file",
        correct: "c"
      },
      {
        question: "Which of the following is an example of an attribute?",
        a: "Student",
        b: "Enrollment",
        c: "Student Name",
        d: "School",
        correct: "c"
      },
      {
        question: "What does a primary key do in a data model?",
        a: "It encrypts data",
        b: "It ensures data redundancy",
        c: "It uniquely identifies each record",
        d: "It controls access to a database",
        correct: "c"
      },
      {
        question: "What type of relationship exists when one record in a table is linked to many in another?",
        a: "One-to-One",
        b: "One-to-Many",
        c: "Many-to-Many",
        d: "Loop",
        correct: "b"
      },
      {
        question: "Which symbol is typically used to represent relationships in an ER diagram?",
        a: "Circle",
        b: "Triangle",
        c: "Diamond",
        d: "Square",
        correct: "c"
      },
      {
        question: "Which data model defines how data is stored on disk?",
        a: "Logical",
        b: "Conceptual",
        c: "Physical",
        d: "Hierarchical",
        correct: "c"
      },
      {
        question: "Which of the following is a characteristic of a good data model?",
        a: "Ambiguous relationships",
        b: "Redundant attributes",
        c: "Clear and unambiguous structure",
        d: "Lack of documentation",
        correct: "c"
      },
      {
        question: "What is a foreign key used for in a relational model?",
        a: "To represent the database version",
        b: "To uniquely identify rows in a table",
        c: "To link two tables together",
        d: "To sort the results",
        correct: "c"
      },
      {
        question: "What is the main goal of normalization in data modeling?",
        a: "To denormalize data",
        b: "To create backups",
        c: "To eliminate data redundancy",
        d: "To encrypt sensitive data",
        correct: "c"
      },
      {
        question: "Which of the following is an example of a many-to-many relationship?",
        a: "One teacher teaches many subjects",
        b: "One student enrolls in many courses and one course has many students",
        c: "One customer has one invoice",
        d: "One department has many employees",
        correct: "b"
      },
      {
        question: "Which of the following is a basic step in designing a data model?",
        a: "Defining color schemes",
        b: "Identifying entities and their relationships",
        c: "Creating animation transitions",
        d: "Installing database drivers",
        correct: "b"
      },{
        question: "What is the role of an Entity-Relationship Diagram (ERD) in data modeling?",
        a: "Designing UI layouts",
        b: "Documenting project timelines",
        c: "Visually representing entities and relationships",
        d: "Defining system logic",
        correct: "c"
      },
      {
        question: "Which key activity occurs first in data model design?",
        a: "Defining indexes",
        b: "Identifying business rules and entities",
        c: "Writing SQL queries",
        d: "Creating triggers",
        correct: "b"
      },
      {
        question: "What type of key is used to establish relationships between tables?",
        a: "Candidate Key",
        b: "Foreign Key",
        c: "Super Key",
        d: "Index Key",
        correct: "b"
      },
      {
        question: "Why is normalization important in data model design?",
        a: "To improve UI design",
        b: "To allow duplicate data",
        c: "To eliminate data redundancy and improve consistency",
        d: "To speed up data entry",
        correct: "c"
      },
      {
        question: "What does the cardinality of a relationship define?",
        a: "The number of fields in a table",
        b: "The number of unique values in a column",
        c: "The number of relationships between entities",
        d: "The numerical relationship between entities",
        correct: "d"
      },
      {
        question: "Which of the following describes a weak entity?",
        a: "An entity with no attributes",
        b: "An entity that exists independently",
        c: "An entity that depends on another entity",
        d: "An entity used in backup operations",
        correct: "c"
      },
      {
        question: "In an ER diagram, a double rectangle is used to represent:",
        a: "Strong entity",
        b: "Weak entity",
        c: "Attribute",
        d: "Relationship",
        correct: "b"
      },
      {
        question: "Which of the following is true about composite attributes?",
        a: "They cannot be divided further",
        b: "They are always primary keys",
        c: "They can be broken into smaller subparts",
        d: "They must be foreign keys",
        correct: "c"
      },
      {
        question: "Which type of attribute derives its value from other attributes?",
        a: "Derived attribute",
        b: "Multivalued attribute",
        c: "Composite attribute",
        d: "Key attribute",
        correct: "a"
      },
      {
        question: "Which data modeling approach focuses on data abstraction and independence?",
        a: "Physical data modeling",
        b: "Object-oriented modeling",
        c: "Relational modeling",
        d: "Conceptual data modeling",
        correct: "d"
      },
      {
        question: "Which type of key can uniquely identify a tuple in a table?",
        a: "Foreign key",
        b: "Secondary key",
        c: "Primary key",
        d: "Derived key",
        correct: "c"
      },
      {
        question: "What is the benefit of using a logical data model?",
        a: "Increased UI responsiveness",
        b: "Simplified user interaction",
        c: "Platform-independent representation of data structure",
        d: "Faster coding speed",
        correct: "c"
      },
      {
        question: "In data modeling, what does 'domain' refer to?",
        a: "Internet address of a database",
        b: "A set of valid values an attribute can have",
        c: "Security level of a table",
        d: "The region where the data is stored",
        correct: "b"
      },
      {
        question: "Which of these would likely be a multivalued attribute?",
        a: "Email",
        b: "Student ID",
        c: "Phone Numbers",
        d: "Gender",
        correct: "c"
      },
      {
        question: "Which is NOT typically a step in designing a good data model?",
        a: "Identifying business rules",
        b: "Selecting a web framework",
        c: "Establishing data types",
        d: "Defining relationships",
        correct: "b"
      },
      {
        question: "Which technique is best for handling many-to-many relationships in a relational model?",
        a: "Creating redundant tables",
        b: "Using a bridge (junction) table",
        c: "Adding a composite key to one table",
        d: "Using multiple primary keys",
        correct: "b"
      },
      {
        question: "What is denormalization in the context of data model design?",
        a: "Splitting tables to reduce redundancy",
        b: "Optimizing the schema by adding redundant data for performance gains",
        c: "Applying third normal form",
        d: "Removing relationships between entities",
        correct: "b"
      },
      {
        question: "Which scenario best justifies denormalization?",
        a: "Need for faster write operations",
        b: "Enforcing referential integrity",
        c: "Reducing disk space usage",
        d: "Improving data consistency",
        correct: "a"
      },
      {
        question: "In complex systems, surrogate keys are preferred over natural keys because:",
        a: "They are more human-readable",
        b: "They are automatically generated and stable",
        c: "They reduce data types",
        d: "They prevent entity relationships",
        correct: "b"
      },
      {
        question: "Which is a drawback of using surrogate keys?",
        a: "They make joins easier",
        b: "They simplify indexing",
        c: "They can hide real-world uniqueness",
        d: "They improve query performance",
        correct: "c"
      },
      {
        question: "Which data modeling technique uses inheritance and encapsulation?",
        a: "Relational modeling",
        b: "Object-oriented data modeling",
        c: "Dimensional modeling",
        d: "Hierarchical modeling",
        correct: "b"
      },
      {
        question: "Which of the following best describes a snowflake schema?",
        a: "A fully denormalized dimensional model",
        b: "A normalized star schema with normalized dimensions",
        c: "An object-oriented data model",
        d: "A type of physical ER diagram",
        correct: "b"
      },
      {
        question: "Which modeling approach is more suited for OLAP systems?",
        a: "Conceptual modeling",
        b: "Hierarchical modeling",
        c: "Dimensional modeling",
        d: "Logical modeling",
        correct: "c"
      },
      {
        question: "In a data model, which component defines constraints and rules for data?",
        a: "Primary key",
        b: "Metadata",
        c: "Index",
        d: "Domain integrity",
        correct: "d"
      },
      {
        question: "Which type of dependency violates normalization rules and may lead to anomalies?",
        a: "Functional dependency",
        b: "Transitive dependency",
        c: "Referential dependency",
        d: "Key dependency",
        correct: "b"
      },
      {
        question: "What is the purpose of indexing in a physical data model?",
        a: "Maintaining referential integrity",
        b: "Avoiding data redundancy",
        c: "Speeding up data retrieval",
        d: "Creating relationships between tables",
        correct: "c"
      },
      {
        question: "Which of the following is TRUE about conceptual data models?",
        a: "They are tightly coupled to DBMS",
        b: "They are used for performance tuning",
        c: "They include implementation details",
        d: "They focus on high-level business entities",
        correct: "d"
      },
      {
        question: "Which is a key challenge when designing enterprise-level data models?",
        a: "Implementing CSS styles",
        b: "Managing high cardinality relationships",
        c: "Integrating with NoSQL",
        d: "Eliminating business logic",
        correct: "b"
      },
      {
        question: "Which artifact is usually created to validate and refine the data model design?",
        a: "Wireframe diagram",
        b: "Use case diagram",
        c: "Data dictionary",
        d: "Deployment diagram",
        correct: "c"
      },
      {
        question: "Which statement about data model versioning is accurate?",
        a: "It's not needed once a model is live",
        b: "It's only required for ER diagrams",
        c: "It ensures traceability and rollback of schema changes",
        d: "It's used only in NoSQL databases",
        correct: "c"
      },
      {
        question: "What does RDBMS stand for?",
        a: "Relational Database Management System",
        b: "Redundant Database Management System",
        c: "Remote Database Management Service",
        d: "Real-time Data Backup Management Software",
        correct: "a"
      },
      {
        question: "Which of the following is NOT a component of RDBMS?",
        a: "Tables",
        b: "Fields",
        c: "Hyperlinks",
        d: "Records",
        correct: "c"
      },
      {
        question: "What uniquely identifies a row in a table?",
        a: "Column",
        b: "Primary Key",
        c: "Index",
        d: "View",
        correct: "b"
      },
      {
        question: "What is a table in an RDBMS?",
        a: "A file with multiple folders",
        b: "A set of HTML elements",
        c: "A collection of rows and columns",
        d: "A mathematical model",
        correct: "c"
      },
      {
        question: "Which of the following is a popular RDBMS?",
        a: "MongoDB",
        b: "Oracle",
        c: "Redis",
        d: "Elasticsearch",
        correct: "b"
      },
      {
        question: "Which key is used to uniquely identify a record?",
        a: "Foreign Key",
        b: "Composite Key",
        c: "Primary Key",
        d: "Secondary Key",
        correct: "c"
      },
      {
        question: "What is a foreign key used for?",
        a: "To remove data from the table",
        b: "To uniquely identify a record",
        c: "To link two tables together",
        d: "To create indexes",
        correct: "c"
      },
      {
        question: "Which command is used to retrieve data from a database?",
        a: "DELETE",
        b: "UPDATE",
        c: "SELECT",
        d: "INSERT",
        correct: "c"
      },
      {
        question: "Which language is used to manipulate data in RDBMS?",
        a: "HTML",
        b: "SQL",
        c: "JavaScript",
        d: "PHP",
        correct: "b"
      },
      {
        question: "Which constraint prevents null values in a column?",
        a: "UNIQUE",
        b: "NOT NULL",
        c: "CHECK",
        d: "DEFAULT",
        correct: "b"
      },
      {
        question: "What does the term ‘relation’ refer to in RDBMS?",
        a: "JavaScript Object",
        b: "Table",
        c: "Column",
        d: "Constraint",
        correct: "b"
      },
      {
        question: "Which property ensures the correctness and validity of data?",
        a: "Integrity",
        b: "Redundancy",
        c: "Aggregation",
        d: "Abstraction",
        correct: "a"
      },
      {
        question: "Which type of key can accept null values?",
        a: "Primary Key",
        b: "Foreign Key",
        c: "Composite Key",
        d: "Unique Key",
        correct: "b"
      },
      {
        question: "Which of the following is NOT a DDL command?",
        a: "CREATE",
        b: "ALTER",
        c: "INSERT",
        d: "DROP",
        correct: "c"
      },
      {
        question: "In a relational model, data is organized into:",
        a: "Trees",
        b: "Arrays",
        c: "Graphs",
        d: "Tables",
        correct: "d"
      },{
        question: "Which normal form ensures there are no multivalued dependencies?",
        a: "3NF",
        b: "BCNF",
        c: "4NF",
        d: "5NF",
        correct: "c"
      },
      {
        question: "What is the purpose of the ACID properties in a transaction?",
        a: "To speed up data entry",
        b: "To ensure security",
        c: "To guarantee reliable database transactions",
        d: "To reduce storage cost",
        correct: "c"
      },
      {
        question: "What does the 'I' in ACID stand for?",
        a: "Isolation",
        b: "Integrity",
        c: "Independence",
        d: "Indexing",
        correct: "a"
      },
      {
        question: "What is a surrogate key?",
        a: "A natural key used from data",
        b: "A user-generated unique key",
        c: "An artificial key with no business meaning",
        d: "A primary key in a related table",
        correct: "c"
      },
      {
        question: "Which type of index improves performance by allowing faster retrieval of data?",
        a: "Primary Key",
        b: "Foreign Key",
        c: "Clustered Index",
        d: "Candidate Key",
        correct: "c"
      },
      {
        question: "What is the purpose of a view in a database?",
        a: "To permanently store data",
        b: "To physically create a new table",
        c: "To provide a virtual table based on query results",
        d: "To enhance normalization",
        correct: "c"
      },
      {
        question: "What is a materialized view?",
        a: "A view that executes every time it's called",
        b: "A temporary table",
        c: "A view that stores query results physically",
        d: "A view with no data",
        correct: "c"
      },
      {
        question: "Which isolation level prevents dirty reads?",
        a: "Read Uncommitted",
        b: "Read Committed",
        c: "Repeatable Read",
        d: "Serializable",
        correct: "b"
      },
      {
        question: "Which constraint ensures that a column cannot have NULL values?",
        a: "CHECK",
        b: "NOT NULL",
        c: "UNIQUE",
        d: "DEFAULT",
        correct: "b"
      },
      {
        question: "What is denormalization?",
        a: "A process of joining tables",
        b: "A process of increasing normalization",
        c: "A process to improve performance by adding redundancy",
        d: "A normalization technique",
        correct: "c"
      },
      {
        question: "What is the purpose of the COMMIT statement?",
        a: "To terminate a session",
        b: "To permanently save all changes made during the transaction",
        c: "To delete records",
        d: "To rollback a transaction",
        correct: "b"
      },
      {
        question: "Which of the following ensures atomicity in a transaction?",
        a: "COMMIT",
        b: "ROLLBACK",
        c: "ACID properties",
        d: "JOINs",
        correct: "c"
      },
      {
        question: "Which anomaly can occur if a database is not properly normalized?",
        a: "Data Consistency",
        b: "Insert, Update, and Delete Anomalies",
        c: "Redundancy Elimination",
        d: "Faster Query Execution",
        correct: "b"
      },
      {
        question: "What is the difference between TRUNCATE and DELETE?",
        a: "DELETE is faster",
        b: "TRUNCATE can be rolled back",
        c: "DELETE removes structure, TRUNCATE doesn't",
        d: "TRUNCATE is faster and cannot be rolled back",
        correct: "d"
      },
      {
        question: "Which of the following allows multiple transactions to read and write without conflict?",
        a: "Shared Locking",
        b: "Deadlock",
        c: "Concurrency Control",
        d: "Lock Escalation",
        correct: "c"
      },{
        question: "What does SQL stand for?",
        a: "Structured Query Language",
        b: "Standard Query Language",
        c: "Sequential Query Language",
        d: "Simple Query Language",
        correct: "a"
      },
      {
        question: "Which SQL command is used to retrieve data from a database?",
        a: "GET",
        b: "FETCH",
        c: "SELECT",
        d: "RETRIEVE",
        correct: "c"
      },
      {
        question: "Which clause is used to filter records in SQL?",
        a: "ORDER BY",
        b: "WHERE",
        c: "HAVING",
        d: "GROUP BY",
        correct: "b"
      },
      {
        question: "What keyword is used to sort the result-set in SQL?",
        a: "SORT",
        b: "ORDER",
        c: "ORDER BY",
        d: "ARRANGE",
        correct: "c"
      },
      {
        question: "Which SQL keyword is used to add new data?",
        a: "APPEND",
        b: "INSERT INTO",
        c: "ADD",
        d: "NEW",
        correct: "b"
      },
      {
        question: "Which command is used to remove rows from a table?",
        a: "REMOVE",
        b: "DELETE",
        c: "ERASE",
        d: "CUT",
        correct: "b"
      },
      {
        question: "Which clause groups rows that have the same values?",
        a: "ORDER BY",
        b: "HAVING",
        c: "WHERE",
        d: "GROUP BY",
        correct: "d"
      },
      {
        question: "Which function returns the number of rows?",
        a: "COUNT()",
        b: "SUM()",
        c: "NUMBER()",
        d: "TOTAL()",
        correct: "a"
      },
      {
        question: "Which symbol is used for a wildcard in the LIKE clause?",
        a: "@",
        b: "#",
        c: "%",
        d: "&",
        correct: "c"
      },
      {
        question: "What is the default sorting order of ORDER BY clause?",
        a: "Descending",
        b: "Random",
        c: "Ascending",
        d: "Custom",
        correct: "c"
      },
      {
        question: "Which SQL statement is used to remove a table?",
        a: "DELETE TABLE",
        b: "REMOVE TABLE",
        c: "DROP TABLE",
        d: "CLEAR TABLE",
        correct: "c"
      },
      {
        question: "Which SQL command is used to modify existing data?",
        a: "MODIFY",
        b: "CHANGE",
        c: "UPDATE",
        d: "REPLACE",
        correct: "c"
      },
      {
        question: "Which of the following is a valid SQL aggregate function?",
        a: "REPLACE()",
        b: "SUM()",
        c: "UPDATE()",
        d: "FILTER()",
        correct: "b"
      },
      {
        question: "What does the DISTINCT keyword do in a SELECT query?",
        a: "Shows duplicates",
        b: "Removes duplicates",
        c: "Adds unique values",
        d: "Sorts values",
        correct: "b"
      },
      {
        question: "Which keyword is used to rename a column in the result set?",
        a: "AS",
        b: "RENAME",
        c: "NEW",
        d: "LABEL",
        correct: "a"
      },
      {
        question: "Which of the following SQL statements is used to create a table?",
        a: "CREATE NEW TABLE",
        b: "BUILD TABLE",
        c: "CREATE TABLE",
        d: "MAKE TABLE",
        correct: "c"
      },
      {
        question: "Which command adds a new column to an existing table?",
        a: "INSERT COLUMN",
        b: "APPEND COLUMN",
        c: "ALTER TABLE ... ADD",
        d: "UPDATE COLUMN",
        correct: "c"
      },
      {
        question: "Which keyword is used to prevent duplicate entries in a column?",
        a: "DISTINCT",
        b: "PRIMARY KEY",
        c: "UNIQUE",
        d: "CHECK",
        correct: "c"
      },
      {
        question: "Which SQL constraint is used to ensure a field cannot be NULL?",
        a: "NOT NULL",
        b: "UNIQUE",
        c: "PRIMARY",
        d: "REQUIRED",
        correct: "a"
      },
      {
        question: "What does the JOIN clause do?",
        a: "Adds rows to a table",
        b: "Deletes data",
        c: "Combines rows from two or more tables",
        d: "Renames columns",
        correct: "c"
      },
      {
        question: "What is a foreign key?",
        a: "A primary key of another table",
        b: "An auto-increment column",
        c: "A unique constraint",
        d: "A default value",
        correct: "a"
      },
      {
        question: "What is the result of an INNER JOIN?",
        a: "All rows from both tables",
        b: "Only matched rows from both tables",
        c: "Only unmatched rows",
        d: "Duplicates removed",
        correct: "b"
      },
      {
        question: "What SQL clause is used to limit the number of rows returned?",
        a: "LIMIT",
        b: "STOP",
        c: "COUNT",
        d: "TOP",
        correct: "a"
      },
      {
        question: "Which statement is used to change data in SQL?",
        a: "MODIFY",
        b: "EDIT",
        c: "CHANGE",
        d: "UPDATE",
        correct: "d"
      },
      {
        question: "Which aggregate function returns the average value?",
        a: "SUM()",
        b: "TOTAL()",
        c: "AVG()",
        d: "MEAN()",
        correct: "c"
      },
      {
        question: "Which function is used to find the highest value in a column?",
        a: "MAX()",
        b: "HIGH()",
        c: "TOP()",
        d: "HIGHEST()",
        correct: "a"
      },
      {
        question: "Which command permanently removes all records from a table?",
        a: "REMOVE *",
        b: "DELETE",
        c: "DROP TABLE",
        d: "TRUNCATE TABLE",
        correct: "d"
      },
      {
        question: "What will the query SELECT COUNT(*) FROM Students return?",
        a: "Sum of all values in the Students table",
        b: "Total number of columns",
        c: "Total number of rows",
        d: "Number of NULL entries",
        correct: "c"
      },
      {
        question: "Which clause is used with GROUP BY to filter grouped rows?",
        a: "WHERE",
        b: "FILTER",
        c: "HAVING",
        d: "ORDER BY",
        correct: "c"
      },
      {
        question: "Which operator is used to filter values within a range?",
        a: "BETWEEN",
        b: "WITHIN",
        c: "IN",
        d: "LIMIT",
        correct: "a"
      },
      {
        question: "Which SQL clause is used to specify a condition for aggregate functions?",
        a: "WHERE",
        b: "HAVING",
        c: "ORDER BY",
        d: "GROUP BY",
        correct: "b"
      },
      {
        question: "What will the result be if you use LEFT JOIN and there are no matching rows in the right table?",
        a: "No rows will be returned",
        b: "Only right table data will appear",
        c: "NULLs will be shown for unmatched right table columns",
        d: "An error will occur",
        correct: "c"
      },
      {
        question: "Which SQL keyword is used to remove a table structure from the database permanently?",
        a: "DELETE",
        b: "ERASE",
        c: "DROP",
        d: "REMOVE",
        correct: "c"
      },
      {
        question: "Which keyword is used in SQL to create an alias for a column or table?",
        a: "LIKE",
        b: "AS",
        c: "ALIAS",
        d: "RENAME",
        correct: "b"
      },
      {
        question: "Which SQL command is used to prevent changes to a transaction until explicitly saved?",
        a: "HOLD",
        b: "LOCK",
        c: "SAVE",
        d: "BEGIN TRANSACTION",
        correct: "d"
      },
      {
        question: "Which SQL clause is used to retrieve rows that are not in another query?",
        a: "NOT EXIST",
        b: "NOT IN",
        c: "EXCEPT",
        d: "MINUS",
        correct: "c"
      },
      {
        question: "In SQL, what is the purpose of the 'WITH' clause?",
        a: "Rename columns temporarily",
        b: "Create a temporary result set (CTE)",
        c: "Define new tables",
        d: "Insert records in batches",
        correct: "b"
      },
      {
        question: "What is a correlated subquery?",
        a: "A subquery that runs once for the whole query",
        b: "A subquery that refers to columns from the outer query",
        c: "A subquery without a FROM clause",
        d: "A subquery that uses JOINs",
        correct: "b"
      },
      {
        question: "What does the RANK() function do in SQL?",
        a: "Ranks all rows without gaps",
        b: "Returns a unique ID",
        c: "Gives the rank of each row with possible gaps",
        d: "Counts duplicates",
        correct: "c"
      },
      {
        question: "Which of the following is true about window functions?",
        a: "They cannot use OVER() clause",
        b: "They are used only with SELECT DISTINCT",
        c: "They perform calculations across a set of table rows related to the current row",
        d: "They always require GROUP BY",
        correct: "c"
      },
      {
        question: "What does the SQL command COMMIT do?",
        a: "Cancels current transaction",
        b: "Saves all changes made in the transaction",
        c: "Deletes all temporary tables",
        d: "Starts a new session",
        correct: "b"
      },
      {
        question: "Which isolation level in SQL avoids dirty reads?",
        a: "READ UNCOMMITTED",
        b: "READ COMMITTED",
        c: "REPEATABLE READ",
        d: "SERIALIZABLE",
        correct: "b"
      },
      {
        question: "Which SQL concept ensures that either all operations of a transaction are completed or none are?",
        a: "Concurrency",
        b: "Durability",
        c: "Atomicity",
        d: "Isolation",
        correct: "c"
      },
      {
        question: "Which index type is commonly used for full-text search in SQL?",
        a: "B-Tree",
        b: "Bitmap",
        c: "Full-text",
        d: "Hash",
        correct: "c"
      },
      {
        question: "Which function returns the number of characters in a string (not bytes) in SQL?",
        a: "LENGTH()",
        b: "LEN()",
        c: "CHAR_LENGTH()",
        d: "SIZE()",
        correct: "c"
      },
      {
        question: "Which SQL clause is used to filter grouped records?",
        a: "WHERE",
        b: "GROUP BY",
        c: "HAVING",
        d: "ORDER BY",
        correct: "c"
      },
      {
        question: "Which phase in SDLC defines what the system is expected to do?",
        a: "Implementation",
        b: "Testing",
        c: "Requirement Analysis",
        d: "Maintenance",
        correct: "c"
      },
      {
        question: "What tag is used to define a paragraph in HTML?",
        a: "<p>",
        b: "<para>",
        c: "<paragraph>",
        d: "<text>",
        correct: "a"
      },
      {
        question: "What does the JSON format primarily use?",
        a: "Tables",
        b: "Objects and arrays",
        c: "Tags",
        d: "Functions",
        correct: "b"
      },
      {
        question: "Which method is used to join two tables in SQL by matching columns?",
        a: "MERGE",
        b: "UNION",
        c: "JOIN",
        d: "INSERT",
        correct: "c"
      },
      {
        question: "Which keyword is used in JavaScript to declare a variable?",
        a: "v",
        b: "var",
        c: "declare",
        d: "dim",
        correct: "b"
      },
      {
        question: "Which model is more flexible between Agile and Waterfall?",
        a: "Waterfall",
        b: "Agile",
        c: "Both equally",
        d: "None",
        correct: "b"
      },
      {
        question: "What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Cascading Style Sheets",
        c: "Colorful Style Sheets",
        d: "Computer Style Sheets",
        correct: "b"
      },
      {
        question: "Which SQL statement is used to remove all records from a table without logging individual row deletions?",
        a: "DELETE",
        b: "DROP",
        c: "REMOVE",
        d: "TRUNCATE",
        correct: "d"
      },
      {
        question: "In Scrum, who is responsible for removing obstacles that affect the development team?",
        a: "Product Owner",
        b: "Scrum Master",
        c: "Project Manager",
        d: "Client",
        correct: "b"
      },
      {
        question: "Which phase in SDLC involves feasibility study and project planning?",
        a: "Design",
        b: "Analysis",
        c: "Initiation",
        d: "Planning",
        correct: "d"
      },
      {
        question: "In Agile, what is a Sprint?",
        a: "A documentation process",
        b: "A fixed-length iteration for development",
        c: "A testing cycle",
        d: "A deployment stage",
        correct: "b"
      },
      {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<style>",
        b: "<script>",
        c: "<css>",
        d: "<link>",
        correct: "a"
      },
      {
        question: "What does JSON stand for?",
        a: "Java Structure Object Notation",
        b: "Java Source Open Notation",
        c: "JavaScript Object Notation",
        d: "JavaScript Open Notation",
        correct: "c"
      },
      {
        question: "Which JavaScript method is used to parse a JSON string?",
        a: "JSON.parse()",
        b: "JSON.convert()",
        c: "JSON.stringify()",
        d: "JSON.decode()",
        correct: "a"
      },
      {
        question: "Which requirement type describes how the system should behave under constraints?",
        a: "Functional",
        b: "Structural",
        c: "Performance",
        d: "Non-functional",
        correct: "d"
      },
      {
        question: "Which of the following is a conceptual data model?",
        a: "ER Diagram",
        b: "Normalized Table",
        c: "Database Schema",
        d: "SQL Script",
        correct: "a"
      },
      {
        question: "Which SQL command is used to retrieve data from a database?",
        a: "GET",
        b: "FETCH",
        c: "RETRIEVE",
        d: "SELECT",
        correct: "d"
      },
      {
        question: "What is the main difference between Agile and Waterfall models?",
        a: "Agile is document-heavy",
        b: "Waterfall uses iterations",
        c: "Agile is iterative and incremental",
        d: "Waterfall is more flexible",
        correct: "c"
      },
      {
        question: "Which Scrum role is responsible for maximizing the value of the product?",
        a: "Scrum Master",
        b: "Product Owner",
        c: "Stakeholder",
        d: "Developer",
        correct: "b"
      },
      {
        question: "What does CSS stand for?",
        a: "Computer Style Sheets",
        b: "Creative Style Sheets",
        c: "Cascading Style Sheets",
        d: "Colorful Style Sheets",
        correct: "c"
      },
      {
        question: "In JavaScript, which keyword is used to define a variable that cannot be reassigned?",
        a: "let",
        b: "const",
        c: "var",
        d: "define",
        correct: "b"
      },
      {
        question: "Which of these is an example of a non-functional requirement?",
        a: "User must be able to login",
        b: "System should respond within 2 seconds",
        c: "Admin can create reports",
        d: "Customer can reset password",
        correct: "b"
      },
      {
        question: "Which model type shows how data is logically connected?",
        a: "Conceptual",
        b: "Physical",
        c: "Logical",
        d: "Relational",
        correct: "c"
      },
      {
        question: "Which HTML5 element is used to play video files?",
        a: "<movie>",
        b: "<media>",
        c: "<video>",
        d: "<player>",
        correct: "c"
      },
      {
        question: "What does CRUD stand for in database operations?",
        a: "Create, Replace, Update, Delete",
        b: "Copy, Read, Update, Drop",
        c: "Create, Read, Update, Delete",
        d: "Connect, Read, Use, Drop",
        correct: "c"
      },
      {
        question: "Which lifecycle model is best for small projects with clear requirements?",
        a: "Agile",
        b: "Waterfall",
        c: "V-Model",
        d: "RAD",
        correct: "b"
      },
      {
        question: "Which Scrum artifact defines what will be delivered in the next release?",
        a: "Sprint Backlog",
        b: "Product Increment",
        c: "Product Backlog",
        d: "Definition of Done",
        correct: "c"
      },
      {
        question: "Which HTML element is used to define a table row?",
        a: "<td>",
        b: "<tr>",
        c: "<th>",
        d: "<table>",
        correct: "b"
      },
      {
        question: "Which SQL statement is used to remove duplicate rows from a result set?",
        a: "SELECT UNIQUE",
        b: "SELECT DISTINCT",
        c: "SELECT ONLY",
        d: "SELECT DIFFERENT",
        correct: "b"
      },
      {
        question: "Which JavaScript method converts a JavaScript object to a JSON string?",
        a: "JSON.convert()",
        b: "JSON.stringify()",
        c: "JSON.parse()",
        d: "Object.toJSON()",
        correct: "b"
      },
      {
        question: "Which of the following is a key characteristic of Agile methodology?",
        a: "Sequential execution",
        b: "Heavy documentation",
        c: "Iterative development",
        d: "Fixed requirements",
        correct: "c"
      },
      {
        question: "In RDBMS, which key uniquely identifies each record in a table?",
        a: "Foreign Key",
        b: "Unique Key",
        c: "Candidate Key",
        d: "Primary Key",
        correct: "d"
      },
      {
        question: "What tag is used in HTML5 to play audio files?",
        a: "<media>",
        b: "<music>",
        c: "<audio>",
        d: "<sound>",
        correct: "c"
      },
      {
        question: "Which SQL command is used to modify existing records?",
        a: "UPDATE",
        b: "MODIFY",
        c: "CHANGE",
        d: "ALTER",
        correct: "a"
      },
      {
        question: "What does the 'waterfall' model emphasize?",
        a: "Simultaneous development and testing",
        b: "Iterative sprints",
        c: "Sequential phase completion",
        d: "Pair programming",
        correct: "c"
      },
      {
        question: "What does JSON stand for?",
        a: "Java Standard Output Notation",
        b: "JavaScript Object Notation",
        c: "Java Source Object Notation",
        d: "JavaScript Output Network",
        correct: "b"
      },
      {
        question: "Which data model focuses on entities and relationships?",
        a: "Conceptual",
        b: "Logical",
        c: "Physical",
        d: "Hierarchical",
        correct: "a"
      },
      {
        question: "Which phase of SDLC involves end-user training and support?",
        a: "Design",
        b: "Implementation",
        c: "Testing",
        d: "Deployment",
        correct: "d"
      },
      {
        question: "Which HTML element is used for the largest heading?",
        a: "<h3>",
        b: "<h1>",
        c: "<heading>",
        d: "<title>",
        correct: "b"
      },
      {
        question: "Which of the following is not a non-functional requirement?",
        a: "Performance",
        b: "Scalability",
        c: "Security",
        d: "Data validation",
        correct: "d"
      },
      {
        question: "Which CSS property controls the text size?",
        a: "font-style",
        b: "text-decoration",
        c: "font-size",
        d: "text-align",
        correct: "c"
      },
      {
        question: "What keyword in SQL is used to ensure uniqueness of data in a column?",
        a: "PRIMARY",
        b: "NOT NULL",
        c: "UNIQUE",
        d: "DISTINCT",
        correct: "c"
      },
      {
        question: "Which Agile framework uses sprints and daily stand-ups?",
        a: "Waterfall",
        b: "RAD",
        c: "Scrum",
        d: "Lean",
        correct: "c"
      },
      {
        question: "Which JSON method is used to convert a string into an object?",
        a: "JSON.decode()",
        b: "JSON.convert()",
        c: "JSON.parse()",
        d: "JSON.stringify()",
        correct: "c"
      },
      {
        question: "Which SQL keyword is used to retrieve only unique values?",
        a: "ONLY",
        b: "UNIQUE",
        c: "DISTINCT",
        d: "FILTER",
        correct: "c"
      },
      {
        question: "In project management, what does a 'milestone' represent?",
        a: "Task owner",
        b: "Completion of a significant phase",
        c: "Bug in system",
        d: "User feedback",
        correct: "b"
      },
      {
        question: "Which CSS rule makes text bold?",
        a: "text-style: bold;",
        b: "font-style: bold;",
        c: "font-weight: bold;",
        d: "text-weight: bold;",
        correct: "c"
      },
      {
        question: "Which tool is used in data modeling to visually represent data relationships?",
        a: "ER Diagram",
        b: "Data Sheet",
        c: "Code Chart",
        d: "Flow Table",
        correct: "a"
      },
      {
        question: "Which lifecycle model is best when requirements are well understood and fixed?",
        a: "Agile",
        b: "Scrum",
        c: "Waterfall",
        d: "RAD",
        correct: "c"
      },
      {
        question: "In SDLC, which phase involves determining hardware and system requirements?",
        a: "Planning",
        b: "Design",
        c: "Implementation",
        d: "Requirement Analysis",
        correct: "b"
      },
      {
        question: "Which CSS property is used to change the background color of an element?",
        a: "color",
        b: "background-color",
        c: "bgcolor",
        d: "background",
        correct: "b"
      },
      {
        question: "What is the purpose of the 'GROUP BY' clause in SQL?",
        a: "To combine rows from two tables",
        b: "To arrange data in ascending order",
        c: "To summarize data by one or more columns",
        d: "To filter rows",
        correct: "c"
      },
      {
        question: "Which model provides a high-level overview of the data structure?",
        a: "Conceptual",
        b: "Logical",
        c: "Physical",
        d: "Tabular",
        correct: "a"
      },
      {
        question: "Which Scrum role is responsible for maximizing the value of the product?",
        a: "Scrum Master",
        b: "Developer",
        c: "Product Owner",
        d: "Stakeholder",
        correct: "c"
      },
      {
        question: "Which HTML5 element is used for navigation links?",
        a: "<nav>",
        b: "<link>",
        c: "<menu>",
        d: "<navigate>",
        correct: "a"
      },
      {
        question: "What is the full form of CRUD in database systems?",
        a: "Create, Read, Update, Delete",
        b: "Copy, Run, Update, Deploy",
        c: "Compile, Read, Upload, Delete",
        d: "Create, Retrieve, Undo, Delete",
        correct: "a"
      },
      {
        question: "Which type of requirement describes system performance, security, or usability?",
        a: "Functional",
        b: "Technical",
        c: "Structural",
        d: "Non-functional",
        correct: "d"
      },
      {
        question: "Which HTML tag is used to create a table row?",
        a: "<td>",
        b: "<th>",
        c: "<tr>",
        d: "<table>",
        correct: "c"
      },
      {
        question: "Which SQL keyword is used to retrieve data from a database?",
        a: "GET",
        b: "FETCH",
        c: "SELECT",
        d: "SHOW",
        correct: "c"
      },
      {
        question: "In JavaScript, which operator is used to compare both value and type?",
        a: "==",
        b: "!=",
        c: "===",
        d: "=!",
        correct: "c"
      },
      {
        question: "Which model in SDLC is best for projects with changing requirements?",
        a: "Waterfall",
        b: "V-Model",
        c: "Agile",
        d: "Incremental",
        correct: "c"
      },
      {
        question: "Which attribute is used in HTML to define inline CSS?",
        a: "style",
        b: "css",
        c: "class",
        d: "inline",
        correct: "a"
      },
      {
        question: "What is the main purpose of normalization in databases?",
        a: "To increase redundancy",
        b: "To speed up queries",
        c: "To reduce data anomalies",
        d: "To create more tables",
        correct: "c"
      },
      {
        question: "Which tool helps track tasks in Agile development?",
        a: "Gantt Chart",
        b: "Kanban Board",
        c: "PERT Chart",
        d: "Fishbone Diagram",
        correct: "b"
      },
      {
        question: "Which HTML tag is used to display a numbered list?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<dl>",
        correct: "b"
      },
      {
        question: "Which of the following is a functional requirement?",
        a: "User authentication",
        b: "System availability",
        c: "Data encryption",
        d: "System response time",
        correct: "a"
      },
      {
        question: "Which SQL keyword is used to sort the result set?",
        a: "SORT",
        b: "ORDER BY",
        c: "GROUP BY",
        d: "RANK",
        correct: "b"
      },
      {
        question: "Which JavaScript method is used to add an element at the end of an array?",
        a: "add()",
        b: "insert()",
        c: "push()",
        d: "append()",
        correct: "c"
      },
      {
        question: "Which project management model is most suitable for large teams and long-term projects with clear goals?",
        a: "Agile",
        b: "Scrum",
        c: "Waterfall",
        d: "RAD",
        correct: "c"
      },
      {
        question: "Which tag is used to define a dropdown list in HTML?",
        a: "<input>",
        b: "<select>",
        c: "<option>",
        d: "<dropdown>",
        correct: "b"
      },
      {
        question: "Which SQL clause eliminates duplicate rows from a result set?",
        a: "UNIQUE",
        b: "DISTINCT",
        c: "ONLY",
        d: "SEPARATE",
        correct: "b"
      },
      {
        question: "In Agile methodology, what is a 'sprint'?",
        a: "A testing tool",
        b: "A design framework",
        c: "A fixed time period for completing work",
        d: "A documentation process",
        correct: "c"
      },
      {
        question: "What does JSON stand for?",
        a: "JavaScript Online Notation",
        b: "Java Standard Object Notation",
        c: "JavaScript Object Notation",
        d: "Java Serializable Object Notation",
        correct: "c"
      },
      {
        question: "Which SQL command is used to remove all records from a table but keep the structure?",
        a: "DELETE",
        b: "REMOVE",
        c: "TRUNCATE",
        d: "DROP",
        correct: "c"
      },
      {
        question: "Which HTML tag is used to display an image?",
        a: "<img>",
        b: "<src>",
        c: "<image>",
        d: "<pic>",
        correct: "a"
      },
      {
        question: "What does the acronym RDBMS stand for?",
        a: "Relational Database Management System",
        b: "Redundant Database Management Structure",
        c: "Real-time Data Base Manipulation Syntax",
        d: "Relational Data Buffering Managed Storage",
        correct: "a"
      },
      {
        question: "Which JavaScript method removes the last element from an array?",
        a: "pop()",
        b: "remove()",
        c: "shift()",
        d: "delete()",
        correct: "a"
      },
      {
        question: "Which CSS property is used to set the text size?",
        a: "text-size",
        b: "font-size",
        c: "size",
        d: "text-style",
        correct: "b"
      },
      {
        question: "Which of the following is NOT a type of data model?",
        a: "Conceptual",
        b: "Logical",
        c: "Visual",
        d: "Physical",
        correct: "c"
      },
      {
        question: "Which JavaScript keyword is used to declare a variable with block scope?",
        a: "var",
        b: "let",
        c: "const",
        d: "define",
        correct: "b"
      },
      {
        question: "Which lifecycle model is also known as the linear-sequential life cycle model?",
        a: "Agile",
        b: "RAD",
        c: "Waterfall",
        d: "Scrum",
        correct: "c"
      },
      {
        question: "Which SQL command is used to change data in a table?",
        a: "CHANGE",
        b: "MODIFY",
        c: "UPDATE",
        d: "SET",
        correct: "c"
      },
      {
        question: "In Scrum, who facilitates the daily stand-up meetings?",
        a: "Developer",
        b: "Scrum Master",
        c: "Product Owner",
        d: "Client",
        correct: "b"
      },
      {
        question: "Which HTML element is used to define a clickable link?",
        a: "<a>",
        b: "<link>",
        c: "<href>",
        d: "<url>",
        correct: "a"
      },
      {
        question: "Which SQL keyword is used to fetch records with specific conditions?",
        a: "SELECT",
        b: "WHERE",
        c: "FILTER",
        d: "RETRIEVE",
        correct: "b"
      },
      {
        question: "Which part of SDLC defines the architecture of the system?",
        a: "Design",
        b: "Requirement Gathering",
        c: "Testing",
        d: "Deployment",
        correct: "a"
      },
      {
        question: "Which JavaScript function is used to parse a JSON string into an object?",
        a: "JSON.stringify()",
        b: "JSON.convert()",
        c: "JSON.parse()",
        d: "JSON.objectify()",
        correct: "c"
      },
      {
        question: "Which CSS property changes the text color of an element?",
        a: "color",
        b: "text-color",
        c: "font-color",
        d: "foreground-color",
        correct: "a"
      },
      {
        question: "Which SDLC model allows incremental development with feedback loops?",
        a: "V-Model",
        b: "Waterfall",
        c: "Spiral",
        d: "Big Bang",
        correct: "c"
      },
      {
    question: "Which tag is used to define a dropdown list in HTML?",
    a: "<input>",
    b: "<select>",
    c: "<option>",
    d: "<dropdown>",
    correct: "b"
  },
  {
    question: "Which SQL clause eliminates duplicate rows from a result set?",
    a: "UNIQUE",
    b: "DISTINCT",
    c: "ONLY",
    d: "SEPARATE",
    correct: "b"
  },
  {
    question: "In Agile methodology, what is a 'sprint'?",
    a: "A testing tool",
    b: "A design framework",
    c: "A fixed time period for completing work",
    d: "A documentation process",
    correct: "c"
  },
  {
    question: "What does JSON stand for?",
    a: "JavaScript Online Notation",
    b: "Java Standard Object Notation",
    c: "JavaScript Object Notation",
    d: "Java Serializable Object Notation",
    correct: "c"
  },
  {
    question: "Which SQL command is used to remove all records from a table but keep the structure?",
    a: "DELETE",
    b: "REMOVE",
    c: "TRUNCATE",
    d: "DROP",
    correct: "c"
  },
  {
    question: "Which HTML tag is used to display an image?",
    a: "<img>",
    b: "<src>",
    c: "<image>",
    d: "<pic>",
    correct: "a"
  },
  {
    question: "What does the acronym RDBMS stand for?",
    a: "Relational Database Management System",
    b: "Redundant Database Management Structure",
    c: "Real-time Data Base Manipulation Syntax",
    d: "Relational Data Buffering Managed Storage",
    correct: "a"
  },
  {
    question: "Which JavaScript method removes the last element from an array?",
    a: "pop()",
    b: "remove()",
    c: "shift()",
    d: "delete()",
    correct: "a"
  },
  {
    question: "Which CSS property is used to set the text size?",
    a: "text-size",
    b: "font-size",
    c: "size",
    d: "text-style",
    correct: "b"
  },
  {
    question: "Which of the following is NOT a type of data model?",
    a: "Conceptual",
    b: "Logical",
    c: "Visual",
    d: "Physical",
    correct: "c"
  },
  {
    question: "Which JavaScript keyword is used to declare a variable with block scope?",
    a: "var",
    b: "let",
    c: "const",
    d: "define",
    correct: "b"
  },
  {
    question: "Which lifecycle model is also known as the linear-sequential life cycle model?",
    a: "Agile",
    b: "RAD",
    c: "Waterfall",
    d: "Scrum",
    correct: "c"
  },
  {
    question: "Which SQL command is used to change data in a table?",
    a: "CHANGE",
    b: "MODIFY",
    c: "UPDATE",
    d: "SET",
    correct: "c"
  },
  {
    question: "In Scrum, who facilitates the daily stand-up meetings?",
    a: "Developer",
    b: "Scrum Master",
    c: "Product Owner",
    d: "Client",
    correct: "b"
  },
  {
    question: "Which HTML element is used to define a clickable link?",
    a: "<a>",
    b: "<link>",
    c: "<href>",
    d: "<url>",
    correct: "a"
  },
  {
    question: "Which SQL keyword is used to fetch records with specific conditions?",
    a: "SELECT",
    b: "WHERE",
    c: "FILTER",
    d: "RETRIEVE",
    correct: "b"
  },
  {
    question: "Which part of SDLC defines the architecture of the system?",
    a: "Design",
    b: "Requirement Gathering",
    c: "Testing",
    d: "Deployment",
    correct: "a"
  },
  {
    question: "Which JavaScript function is used to parse a JSON string into an object?",
    a: "JSON.stringify()",
    b: "JSON.convert()",
    c: "JSON.parse()",
    d: "JSON.objectify()",
    correct: "c"
  },
  {
    question: "Which CSS property changes the text color of an element?",
    a: "color",
    b: "text-color",
    c: "font-color",
    d: "foreground-color",
    correct: "a"
  },
  {
    question: "Which SDLC model allows incremental development with feedback loops?",
    a: "V-Model",
    b: "Waterfall",
    c: "Spiral",
    d: "Big Bang",
    correct: "c"
  },
  {
    question: "Which attribute in HTML is used to uniquely identify an element?",
    a: "class",
    b: "name",
    c: "id",
    d: "style",
    correct: "c"
  },
  {
    question: "Which SQL keyword is used to combine rows from two or more tables?",
    a: "GROUP",
    b: "MERGE",
    c: "JOIN",
    d: "LINK",
    correct: "c"
  },
  {
    question: "In Agile, what is a 'user story'?",
    a: "A document of client biography",
    b: "A task assigned to testers",
    c: "A requirement written from the end-user perspective",
    d: "A detailed project report",
    correct: "c"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    a: "#",
    b: "//",
    c: "<!-- -->",
    d: "/* */",
    correct: "b"
  },
  {
    question: "Which SQL function returns the number of rows in a result?",
    a: "COUNT()",
    b: "SUM()",
    c: "TOTAL()",
    d: "LENGTH()",
    correct: "a"
  },
  {
    question: "Which HTML tag is used to insert a line break?",
    a: "<lb>",
    b: "<br>",
    c: "<break>",
    d: "<line>",
    correct: "b"
  },
  {
    question: "What is the main difference between functional and non-functional requirements?",
    a: "Functional relates to business goals; non-functional to legal issues",
    b: "Functional defines what a system should do; non-functional defines how it should behave",
    c: "Both are technical specifications",
    d: "There is no difference",
    correct: "b"
  },
  {
    question: "Which JavaScript method is used to join all elements of an array into a string?",
    a: "concat()",
    b: "combine()",
    c: "join()",
    d: "merge()",
    correct: "c"
  },
  {
    question: "Which HTML5 tag is used to play video files?",
    a: "<media>",
    b: "<vid>",
    c: "<video>",
    d: "<movie>",
    correct: "c"
  },
  {
    question: "In RDBMS, what is a primary key?",
    a: "A field that stores password",
    b: "A unique identifier for each row in a table",
    c: "A foreign reference",
    d: "A summary column",
    correct: "b"
  },
  {
    question: "Which CSS property is used to set background color?",
    a: "background-color",
    b: "bg-color",
    c: "color",
    d: "background",
    correct: "a"
  },
  {
    question: "Which SDLC phase focuses on verifying the software against requirements?",
    a: "Testing",
    b: "Design",
    c: "Implementation",
    d: "Maintenance",
    correct: "a"
  },
  {
    question: "Which SQL clause is used to sort the result set?",
    a: "SORT BY",
    b: "ORDER",
    c: "ORDER BY",
    d: "GROUP BY",
    correct: "c"
  },
  {
    question: "Which Agile role ensures the product meets client needs?",
    a: "Scrum Master",
    b: "Team Lead",
    c: "Product Owner",
    d: "Tester",
    correct: "c"
  },
  {
    question: "What does the 'const' keyword do in JavaScript?",
    a: "Declares a variable with constant value",
    b: "Creates an unchangeable function",
    c: "Defines a class",
    d: "Starts a loop",
    correct: "a"
  },
  {
    question: "Which HTML tag defines a table row?",
    a: "<td>",
    b: "<tr>",
    c: "<th>",
    d: "<table-row>",
    correct: "b"
  },
  {
    question: "Which database model is based on tables and rows?",
    a: "Hierarchical",
    b: "Network",
    c: "Relational",
    d: "Object-Oriented",
    correct: "c"
  },
  {
    question: "Which JavaScript method adds a new element to the end of an array?",
    a: "push()",
    b: "append()",
    c: "insert()",
    d: "add()",
    correct: "a"
  },
  {
    question: "Which CSS property controls spacing outside an element?",
    a: "padding",
    b: "margin",
    c: "border",
    d: "spacing",
    correct: "b"
  },
  {
    question: "In project management, which phase includes risk management and budgeting?",
    a: "Planning",
    b: "Initiation",
    c: "Execution",
    d: "Closure",
    correct: "a"
  },
  {
    question: "Which tag is used to create a dropdown in HTML?",
    a: "<select>",
    b: "<dropdown>",
    c: "<option>",
    d: "<input type='dropdown'>",
    correct: "a"
  },
  {
    question: "Which SQL clause is used to filter groups of rows created by GROUP BY?",
    a: "WHERE",
    b: "GROUP BY",
    c: "ORDER BY",
    d: "HAVING",
    correct: "d"
  },
  {
    question: "Which Agile artifact contains the list of features to be implemented?",
    a: "Scrum Board",
    b: "Product Backlog",
    c: "Sprint Goal",
    d: "Velocity Chart",
    correct: "b"
  },
  {
    question: "Which method in JavaScript converts a JSON string into a JavaScript object?",
    a: "JSON.convert()",
    b: "JSON.parse()",
    c: "JSON.objectify()",
    d: "JSON.decode()",
    correct: "b"
  },
  {
    question: "Which phase of SDLC focuses on requirements gathering?",
    a: "Testing",
    b: "Design",
    c: "Analysis",
    d: "Deployment",
    correct: "c"
  },
  {
    question: "Which property in CSS sets the size of text?",
    a: "font-style",
    b: "font-size",
    c: "text-size",
    d: "text-style",
    correct: "b"
  },
  {
    question: "What does CRUD stand for in databases?",
    a: "Create, Read, Update, Delete",
    b: "Create, Run, Undo, Delete",
    c: "Create, Replace, Use, Delete",
    d: "Check, Run, Update, Drop",
    correct: "a"
  },
  {
    question: "What does the ‘let’ keyword do in JavaScript?",
    a: "Declares a constant variable",
    b: "Declares a block-scoped variable",
    c: "Declares a global variable",
    d: "Defines a loop",
    correct: "b"
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    a: "<ul>",
    b: "<ol>",
    c: "<li>",
    d: "<list>",
    correct: "a"
  },
  {
    question: "What is a foreign key in an RDBMS?",
    a: "A key used for internal table referencing",
    b: "A key that references the primary key of another table",
    c: "A randomly generated key",
    d: "A key used for encryption",
    correct: "b"
  },
  {
    question: "Which property in CSS sets the space between lines of text?",
    a: "spacing",
    b: "line-spacing",
    c: "line-height",
    d: "text-line",
    correct: "c"
  },
  {
    question: "Which JavaScript array method removes the last element from an array?",
    a: "pop()",
    b: "remove()",
    c: "delete()",
    d: "splice()",
    correct: "a"
  },
  {
    question: "What does a sprint typically end with in Scrum?",
    a: "Project Demo",
    b: "Sprint Review",
    c: "Client Meeting",
    d: "Testing Phase",
    correct: "b"
  },
  {
    question: "Which of the following is a non-functional requirement?",
    a: "Login functionality",
    b: "Payment processing",
    c: "System should load within 3 seconds",
    d: "Password change feature",
    correct: "c"
  },
  {
    question: "Which SQL keyword is used to update data in a table?",
    a: "INSERT",
    b: "MODIFY",
    c: "UPDATE",
    d: "CHANGE",
    correct: "c"
  },
  {
    question: "Which HTML tag is used to display a numbered list?",
    a: "<ol>",
    b: "<ul>",
    c: "<li>",
    d: "<dl>",
    correct: "a"
  },
  {
    question: "What is the primary role of the Scrum Master?",
    a: "Manage developers",
    b: "Remove obstacles and facilitate Scrum processes",
    c: "Create UI designs",
    d: "Write test cases",
    correct: "b"
  },
  {
    question: "Which SDLC phase involves regular software updates?",
    a: "Planning",
    b: "Maintenance",
    c: "Design",
    d: "Testing",
    correct: "b"
  },
  {
    question: "What is JSON primarily used for?",
    a: "Designing websites",
    b: "Storing images",
    c: "Data interchange between systems",
    d: "Styling documents",
    correct: "c"
  },
  {
    question: "Which SQL statement removes all rows but retains the table structure?",
    a: "DROP",
    b: "DELETE",
    c: "REMOVE",
    d: "TRUNCATE",
    correct: "d"
  },
  {
    question: "Which data model represents entities and their relationships pictorially?",
    a: "Physical Data Model",
    b: "Conceptual Data Model",
    c: "Logical Data Model",
    d: "Dimensional Data Model",
    correct: "b"
  },
  {
    question: "What does SQL stand for?",
    a: "Structured Question Language",
    b: "Simple Query Language",
    c: "Structured Query Language",
    d: "Sequential Query Language",
    correct: "c"
  },
  {
    question: "Which of these is used to apply CSS to a single element?",
    a: "ID selector",
    b: "Class selector",
    c: "Tag selector",
    d: "Group selector",
    correct: "a"
  },
  {
    question: "In which Agile ceremony are team members asked 'What did you do yesterday?'",
    a: "Sprint Review",
    b: "Sprint Planning",
    c: "Daily Scrum",
    d: "Retrospective",
    correct: "c"
  },
  {
    question: "Which tag is used to link an external CSS file in HTML?",
    a: "<style>",
    b: "<css>",
    c: "<link>",
    d: "<script>",
    correct: "c"
  },
  {
    question: "Which of the following is NOT a valid SQL constraint?",
    a: "PRIMARY KEY",
    b: "UNIQUE",
    c: "CHECK",
    d: "ASSUME",
    correct: "d"
  },
  {
    question: "What is the main focus of the Hybrid project management model?",
    a: "Waterfall phases only",
    b: "Agile sprints only",
    c: "Combining Agile and Waterfall practices",
    d: "Using traditional Gantt charts",
    correct: "c"
  },
  {
    question: "Which HTML tag defines a hyperlink?",
    a: "<a>",
    b: "<link>",
    c: "<url>",
    d: "<href>",
    correct: "a"
  },
  {
    question: "What is the function of the GROUP BY clause in SQL?",
    a: "To group data by row",
    b: "To count nulls",
    c: "To group rows sharing a property",
    d: "To order rows alphabetically",
    correct: "c"
  },
  {
    question: "What does RDBMS stand for?",
    a: "Relational Data Base Management System",
    b: "Random Database Management Service",
    c: "Remote Database Monitoring System",
    d: "Reliable Data Broadcast Model Service",
    correct: "a"
  },
  {
    question: "Which attribute is used to uniquely identify an HTML element?",
    a: "name",
    b: "id",
    c: "class",
    d: "ref",
    correct: "b"
  },
  {
    question: "Which JSON format is correct?",
    a: "{'name': 'John'}",
    b: "{name: John}",
    c: "{name: 'John'}",
    d: "{\"name\": \"John\"}",
    correct: "d"
  },
  {
    question: "Which lifecycle model is best suited for small projects with well-understood requirements?",
    a: "Agile",
    b: "Waterfall",
    c: "V-Model",
    d: "Spiral",
    correct: "b"
  },
  {
    question: "Which CSS unit is relative to the font-size of the root element?",
    a: "em",
    b: "px",
    c: "pt",
    d: "rem",
    correct: "d"
  },
  {
    question: "Which JavaScript method is used to convert a JavaScript object into a JSON string?",
    a: "JSON.convert()",
    b: "JSON.parse()",
    c: "JSON.stringify()",
    d: "JSON.encode()",
    correct: "c"
  },
  {
    question: "What is the purpose of indexes in RDBMS?",
    a: "To decrease data integrity",
    b: "To reduce redundancy",
    c: "To speed up data retrieval",
    d: "To create tables",
    correct: "c"
  },
  {
    question: "Which role is responsible for maximizing the value of the product in Scrum?",
    a: "Scrum Master",
    b: "Product Owner",
    c: "Team Lead",
    d: "Tester",
    correct: "b"
  },
  {
    question: "Which CSS property is used to make text bold?",
    a: "font-style",
    b: "text-decoration",
    c: "font-weight",
    d: "text-align",
    correct: "c"
  },
  {
    question: "Which SDLC phase includes writing code?",
    a: "Analysis",
    b: "Implementation",
    c: "Maintenance",
    d: "Deployment",
    correct: "b"
  },
  {
    question: "In JSON, data is represented as:",
    a: "Tables",
    b: "Arrays only",
    c: "Name/value pairs",
    d: "Methods",
    correct: "c"
  },
  {
    question: "Which SQL keyword is used to fetch only unique values?",
    a: "DISTINCT",
    b: "UNIQUE",
    c: "ONLY",
    d: "FILTER",
    correct: "a"
  },
  {
    question: "In HTML5, which tag is used to embed video content?",
    a: "<media>",
    b: "<embed>",
    c: "<video>",
    d: "<movie>",
    correct: "c"
  },
  {
    question: "In JavaScript, which keyword is used to declare a block-scoped variable?",
    a: "var",
    b: "const",
    c: "int",
    d: "define",
    correct: "b"
  },
  {
    question: "Which Agile artifact contains a list of all features, requirements, and fixes?",
    a: "Sprint backlog",
    b: "Product backlog",
    c: "Burn-down chart",
    d: "Epic",
    correct: "b"
  },
  {
    question: "Which SQL command is used to modify existing records?",
    a: "MODIFY",
    b: "CHANGE",
    c: "ALTER",
    d: "UPDATE",
    correct: "d"
  },
  {
    question: "What is the first phase of the Software Development Life Cycle?",
    a: "Design",
    b: "Analysis",
    c: "Requirement gathering",
    d: "Testing",
    correct: "c"
  },
  {
    question: "Which type of join returns rows when there is a match in one of the tables?",
    a: "INNER JOIN",
    b: "LEFT JOIN",
    c: "RIGHT JOIN",
    d: "FULL OUTER JOIN",
    correct: "d"
  },
  {
    question: "Which attribute in HTML5 specifies alternative text for an image?",
    a: "title",
    b: "desc",
    c: "alt",
    d: "caption",
    correct: "c"
  },
  {
    question: "Which data model focuses on the physical storage of data?",
    a: "Logical Data Model",
    b: "Physical Data Model",
    c: "Conceptual Data Model",
    d: "Relational Data Model",
    correct: "b"
  },
  {
    question: "Which SDLC phase involves testing the software for bugs and issues?",
    a: "Design",
    b: "Maintenance",
    c: "Implementation",
    d: "Testing",
    correct: "d"
  },
  {
    question: "What type of requirement is 'The system shall encrypt user passwords'?",
    a: "Functional",
    b: "Technical",
    c: "Security",
    d: "Non-functional",
    correct: "d"
  },
  {
    question: "Which symbol is used for comments in JSON?",
    a: "//",
    b: "#",
    c: "/* */",
    d: "JSON does not support comments",
    correct: "d"
  },
  {
    question: "Which project management model defines sequential phases?",
    a: "Agile",
    b: "Scrum",
    c: "Waterfall",
    d: "Kanban",
    correct: "c"
  },
  {
    question: "Which HTML tag is used for emphasizing text?",
    a: "<b>",
    b: "<strong>",
    c: "<em>",
    d: "<mark>",
    correct: "c"
  },
  {
    question: "In SQL, which function returns the number of rows in a result?",
    a: "SUM()",
    b: "COUNT()",
    c: "TOTAL()",
    d: "SIZE()",
    correct: "b"
  },
  {
    question: "Which CSS property controls the space between lines of text?",
    a: "spacing",
    b: "letter-spacing",
    c: "line-height",
    d: "text-spacing",
    correct: "c"
  },
  {
    question: "In RDBMS, normalization is used to:",
    a: "Speed up queries",
    b: "Reduce redundancy",
    c: "Improve indexes",
    d: "Increase replication",
    correct: "b"
  },
  {
    question: "What is a key principle of Agile?",
    a: "Strict timelines",
    b: "Heavy documentation",
    c: "Customer collaboration",
    d: "Fixed scope",
    correct: "c"
  },
  {
    question: "Which JSON method converts a string into an object?",
    a: "JSON.parse()",
    b: "JSON.convert()",
    c: "JSON.decode()",
    d: "JSON.stringify()",
    correct: "a"
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    a: "<ol>",
    b: "<list>",
    c: "<ul>",
    d: "<li>",
    correct: "c"
  }
    ];

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let usedQuestions = new Set();

function startQuiz(level) {
    document.querySelector('.levels').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    selectedQuestions = getRandomQuestions(allQuizData, 45);
    console.log('Selected Questions:', selectedQuestions); // Debugging log
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function getRandomQuestions(questions, num) {
    const availableQuestions = questions.filter(q => !usedQuestions.has(q));
    const shuffled = availableQuestions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, num);
    selected.forEach(q => usedQuestions.add(q));
    return selected;
}

function shuffleOptions(quizData) {
    const options = ['a', 'b', 'c', 'd'];
    const shuffledOptions = options.sort(() => 0.5 - Math.random());
    const shuffledQuizData = {};
    shuffledOptions.forEach((option, index) => {
        shuffledQuizData[option] = quizData[options[index]];
    });
    shuffledQuizData.question = quizData.question;
    shuffledQuizData.correct = shuffledOptions[options.indexOf(quizData.correct)];
    return shuffledQuizData;
}

function loadQuestion() {
    if (currentQuestion < selectedQuestions.length) {
        const currentQuizData = shuffleOptions(selectedQuestions[currentQuestion]);
        const questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = `
            <strong><div class="question-number">Question ${currentQuestion + 1}</div></strong> <br>
            <div class="question">${currentQuizData.question.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
            <div class="answers">
                <label class="answer-option"><input type="radio" name="answer" value="a"> ${currentQuizData.a.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</label>
                <label class="answer-option"><input type="radio" name="answer" value="b"> ${currentQuizData.b.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</label>
                <label class="answer-option"><input type="radio" name="answer" value="c"> ${currentQuizData.c.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</label>
                <label class="answer-option"><input type="radio" name="answer" value="d"> ${currentQuizData.d.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</label>
            </div>
        `;
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('submit-btn').style.display = 'none';
    } else {
        console.error('No more questions to load.');
    }
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

function nextQuestion() {
    const selectedAnswer = getSelected();
    if (selectedAnswer === selectedQuestions[currentQuestion].correct) {
        score++;
    }
    selectedQuestions[currentQuestion].selected = selectedAnswer;
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('submit-btn').style.display = 'block';
    }
}

function submitQuiz() {
    const results = document.getElementById('results');
    results.innerHTML = `You scored ${score} out of ${selectedQuestions.length}`;
    displayAnswers();
    document.getElementById('restart-btn').style.display = 'block';
    document.getElementById('retake-btn').style.display = 'block';
}

function displayAnswers() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';
    selectedQuestions.forEach((quizData, index) => {
        const isCorrect = quizData.selected === quizData.correct;
        const answerClass = isCorrect ? 'correct' : 'incorrect';
        questionContainer.innerHTML += `
           <strong> <div class="question-number">Question ${index + 1}</div></strong> <br>
            <div class="question">${quizData.question.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
            <div class="answers">
                <label class="answer-option ${answerClass}"><input type="radio" name="answer" value="a" disabled ${quizData.selected === 'a' ? 'checked' : ''}> ${quizData.a.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</label>
                <label class="answer-option ${answerClass}"><input type="radio" name="answer" value="b" disabled ${quizData.selected === 'b' ? 'checked' : ''}> ${quizData.b.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</label>
                <label class="answer-option ${answerClass}"><input type="radio" name="answer" value="c" disabled ${quizData.selected === 'c' ? 'checked' : ''}> ${quizData.c.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</label>
                <label class="answer-option ${answerClass}"><input type="radio" name="answer" value="d" disabled ${quizData.selected === 'd' ? 'checked' : ''}> ${quizData.d.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</label>
                <div class="correct-answer">Correct answer: ${quizData[quizData.correct].replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div> <br>
            </div>
        `;
    });
}

function restartQuiz() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.levels').style.display = 'block';
    document.getElementById('results').innerHTML = '';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('retake-btn').style.display = 'none';
}

function retakeQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedQuestions = selectedQuestions.map(shuffleOptions); // Shuffle options for each question
    selectedQuestions.forEach(q => q.selected = null); // Reset selected answers
    loadQuestion();
    document.getElementById('results').innerHTML = '';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('retake-btn').style.display = 'none';
}

function countQuestions() {
    const totalQuestions = allQuizData.length;
    document.getElementById('question-count').innerText = `Total number of questions: ${totalQuestions}`;
}

// Call the function to display the total number of questions
countQuestions();

// Hide the buttons initially
document.getElementById('restart-btn').style.display = 'none';
document.getElementById('retake-btn').style.display = 'none';

// Load the first question when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});
