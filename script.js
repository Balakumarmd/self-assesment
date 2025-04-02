const allQuizData = [
    // Level 1: Software Development Lifecycle
    {
        question: "What is the Software Development Lifecycle (SDLC)?",
        a: "A process for developing software",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "Which phase involves gathering requirements?",
        a: "Design",
        b: "Implementation",
        c: "Analysis",
        d: "Testing",
        correct: "c"
    },
    {
        question: "What is the main goal of the design phase?",
        a: "Writing code",
        b: "Creating architecture",
        c: "Testing software",
        d: "Deploying software",
        correct: "b"
    },
    {
        question: "What is implementation in SDLC?",
        a: "Writing code",
        b: "Creating architecture",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "Why is testing crucial in SDLC?",
        a: "To ensure software is functional",
        b: "To gather requirements",
        c: "To design the system",
        d: "To deploy the software",
        correct: "a"
    },
    {
        question: "What is deployment in SDLC?",
        a: "Writing code",
        b: "Creating architecture",
        c: "Releasing software to users",
        d: "Testing software",
        correct: "c"
    },
    {
        question: "What is the maintenance phase in SDLC?",
        a: "Updating and improving software",
        b: "Gathering requirements",
        c: "Designing the system",
        d: "Writing code",
        correct: "a"
    },
    {
        question: "What is a waterfall model in SDLC?",
        a: "A linear and sequential approach",
        b: "An iterative approach",
        c: "A flexible approach",
        d: "A risk management approach",
        correct: "a"
    },
    {
        question: "What are the advantages of the waterfall model?",
        a: "Clear structure and easy to manage",
        b: "Flexible and adaptive",
        c: "Iterative and incremental",
        d: "Risk management",
        correct: "a"
    },
    {
        question: "What are the disadvantages of the waterfall model?",
        a: "Inflexibility and late discovery of issues",
        b: "Clear structure and easy to manage",
        c: "Flexible and adaptive",
        d: "Iterative and incremental",
        correct: "a"
    },
    {
        question: "What is an iterative model in SDLC?",
        a: "A linear and sequential approach",
        b: "An iterative approach",
        c: "A flexible approach",
        d: "A risk management approach",
        correct: "b"
    },
    {
        question: "What is the agile model in SDLC?",
        a: "A linear and sequential approach",
        b: "An iterative and flexible approach",
        c: "A risk management approach",
        d: "A waterfall approach",
        correct: "b"
    },
    {
        question: "What are the key principles of agile development?",
        a: "Customer collaboration and adaptive planning",
        b: "Clear structure and easy to manage",
        c: "Inflexibility and late discovery of issues",
        d: "Risk management",
        correct: "a"
    },
    {
        question: "What is a prototype model in SDLC?",
        a: "Creating a preliminary version of the software",
        b: "A linear and sequential approach",
        c: "An iterative approach",
        d: "A risk management approach",
        correct: "a"
    },
    {
        question: "What is the V-model in SDLC?",
        a: "An extension of the waterfall model",
        b: "An iterative approach",
        c: "A flexible approach",
        d: "A risk management approach",
        correct: "a"
    },
    {
        question: "What is the spiral model in SDLC?",
        a: "Combines iterative development with risk management",
        b: "A linear and sequential approach",
        c: "A flexible approach",
        d: "A waterfall approach",
        correct: "a"
    },
    {
        question: "What is DevOps in SDLC?",
        a: "Combines software development and IT operations",
        b: "A linear and sequential approach",
        c: "An iterative approach",
        d: "A risk management approach",
        correct: "a"
    },
    {
        question: "What is the role of a project manager in SDLC?",
        a: "Oversees planning, execution, and delivery",
        b: "Writes code",
        c: "Tests software",
        d: "Deploys software",
        correct: "a"
    },
    {
        question: "What is a requirement specification in SDLC?",
        a: "Document outlining functional and non-functional requirements",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a use case in SDLC?",
        a: "Describes how users interact with the software",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a test plan in SDLC?",
        a: "Outlines strategy, resources, and schedule for testing",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a deployment plan in SDLC?",
        a: "Details steps and procedures for releasing software",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a maintenance plan in SDLC?",
        a: "Outlines activities for updating and improving software",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is project management?",
        a: "Planning, executing, and overseeing projects",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is the waterfall approach in project management?",
        a: "Linear and sequential method",
        b: "Iterative approach",
        c: "Flexible approach",
        d: "Risk management approach",
        correct: "a"
    },
    {
        question: "What are the key characteristics of the waterfall approach?",
        a: "Predictable, structured, and easy to manage",
        b: "Flexible and adaptive",
        c: "Iterative and incremental",
        d: "Risk management",
        correct: "a"
    },
    {
        question: "What is the agile approach in project management?",
        a: "Flexible and iterative method",
        b: "Linear and sequential method",
        c: "Risk management approach",
        d: "Waterfall approach",
        correct: "a"
    },
    {
        question: "What are the key principles of agile project management?",
        a: "Customer collaboration, adaptive planning",
        b: "Predictable, structured, and easy to manage",
        c: "Inflexibility and late discovery of issues",
        d: "Risk management",
        correct: "a"
    },
    {
        question: "What is a hybrid approach in project management?",
        a: "Combines waterfall and agile methodologies",
        b: "Linear and sequential method",
        c: "Risk management approach",
        d: "Iterative approach",
        correct: "a"
    },
    {
        question: "What are the advantages of the hybrid approach?",
        a: "Flexibility and adaptability",
        b: "Predictable, structured, and easy to manage",
        c: "Inflexibility and late discovery of issues",
        d: "Risk management",
        correct: "a"
    },
    {
        question: "What is a project charter?",
        a: "Document that formally authorizes a project",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project plan?",
        a: "Detailed document outlining tasks, timelines, resources",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project schedule?",
        a: "Timeline outlining start and end dates for tasks",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project budget?",
        a: "Financial plan outlining costs",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project scope?",
        a: "Defines boundaries and deliverables",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is risk management in project management?",
        a: "Identifying, assessing, and mitigating risks",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is stakeholder management in project management?",
        a: "Identifying and engaging stakeholders",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project milestone?",
        a: "Significant event marking progress",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project deliverable?",
        a: "Tangible or intangible output",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project team?",
        a: "Group of individuals working together",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project manager?",
        a: "Responsible for planning, executing, and overseeing",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project stakeholder?",
        a: "Individual or group with interest in the project",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project risk?",
        a: "Uncertain event impacting success",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project constraint?",
        a: "Limitation affecting planning and execution",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project objective?",
        a: "Specific goal or outcome",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project phase?",
        a: "Distinct stage in the lifecycle",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is a project lifecycle?",
        a: "Series of phases from initiation to completion",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is project closure?",
        a: "Final phase where deliverables are handed over",
        b: "Writing code",
        c: "Testing software",
        d: "Deploying software",
        correct: "a"
    },
    {
        question: "What is waterfall project management?",
        a: "Linear and sequential approach",
        b: "Iterative approach",
        c: "Flexible approach",
        d: "Risk management approach",
        correct: "a"
    },
    {
        question: "What are the main phases of waterfall project management?",
        a: "Requirements, Design, Implementation, Verification, Maintenance",
        b: "Planning, Analysis, Design, Implementation, Testing",
        c: "Initiation, Planning, Execution, Monitoring, Closing",
        d: "Concept, Development, Testing, Deployment, Maintenance",
        correct: "a"
    },
    {
        question: "What is the requirements phase in waterfall project management?",
        a: "Gathering and documenting stakeholder needs",
        b: "Designing the system architecture",
        c: "Writing code",
        d: "Testing the software",
        correct: "a"
    },
    {
        question: "What is the design phase in waterfall project management?",
        a: "Creating system architecture and detailed design",
        b: "Gathering requirements",
        c: "Writing code",
        d: "Testing the software",
        correct: "a"
    },
    {
        question: "What is the implementation phase in waterfall project management?",
        a: "Writing code based on design specifications",
        b: "Gathering requirements",
        c: "Designing the system",
        d: "Testing the software",
        correct: "a"
    },
    {
        question: "What is the verification phase in waterfall project management?",
        a: "Testing the software to ensure it meets requirements",
        b: "Gathering requirements",
        c: "Designing the system",
        d: "Writing code",
        correct: "a"
    },
    {
        question: "What is the maintenance phase in waterfall project management?",
        a: "Updating and improving the software after deployment",
        b: "Gathering requirements",
        c: "Designing the system",
        d: "Writing code",
        correct: "a"
    },
    {
        question: "What are the advantages of waterfall project management?",
        a: "Clear structure, easy to manage, well-documented phases",
        b: "Flexible and adaptive, iterative development",
        c: "Risk management, continuous improvement",
        d: "Customer collaboration, adaptive planning",
        correct: "a"
    },
    {
        question: "What are the disadvantages of waterfall project management?",
        a: "Inflexibility, difficulty in accommodating changes",
        b: "Clear structure, easy to manage",
        c: "Flexible and adaptive",
        d: "Iterative and incremental",
        correct: "a"
    },
    {
        question: "What is the role of a project manager in waterfall project management?",
        a: "Oversees planning, execution, and delivery",
        b: "Writes code",
        c: "Tests software",
        d: "Deploys software",
        correct: "a"
    },
    {
        question: "What is a Gantt chart?",
        a: "A visual representation of a project schedule",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a critical path in project management?",
        a: "The longest sequence of tasks that determines the project duration",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a work breakdown structure (WBS)?",
        a: "A hierarchical decomposition of the total scope of work",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project baseline?",
        a: "The original approved plan for the project",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is scope creep?",
        a: "Uncontrolled changes or continuous growth in a project's scope",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project milestone?",
        a: "A significant event or achievement in the project",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project deliverable?",
        a: "A tangible or intangible output produced as part of a project",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project risk?",
        a: "An uncertain event or condition that could impact the project",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project constraint?",
        a: "A limitation or restriction that affects the project",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project objective?",
        a: "A specific goal or outcome that the project aims to achieve",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project phase?",
        a: "A distinct stage in the project lifecycle",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project lifecycle?",
        a: "The series of phases that a project goes through from initiation to completion",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is project closure?",
        a: "The final phase of a project where deliverables are handed over",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project stakeholder?",
        a: "An individual or group with an interest or influence in the project",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project team?",
        a: "A group of individuals with diverse skills and roles who work together to complete a project",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project manager?",
        a: "Responsible for planning, executing, and overseeing a project",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project charter?",
        a: "A document that formally authorizes a project and outlines its objectives, scope, and stakeholders",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project plan?",
        a: "A detailed document that outlines the tasks, timelines, resources, and milestones for completing a project",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project schedule?",
        a: "A timeline that outlines the start and end dates for project tasks and milestones",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },
    {
        question: "What is a project budget?",
        a: "A financial plan that outlines the costs associated with completing a project",
        b: "A method for testing software",
        c: "A technique for deploying software",
        d: "A strategy for marketing software",
        correct: "a"
    },{
        question: "What is Scrum?",
        a: "An agile framework for managing work",
        b: "A linear project management approach",
        c: "A risk management technique",
        d: "A software testing method",
        correct: "a"
    },
    {
        question: "What are the three roles in Scrum?",
        a: "Product Owner, Scrum Master, Development Team",
        b: "Project Manager, Developer, Tester",
        c: "Stakeholder, Sponsor, User",
        d: "Analyst, Designer, Developer",
        correct: "a"
    },
    {
        question: "What is a Product Backlog?",
        a: "A prioritized list of work for the development team",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },
    {
        question: "What is a Sprint?",
        a: "A time-boxed period for completing a set of tasks",
        b: "A phase in the waterfall model",
        c: "A risk management technique",
        d: "A software testing method",
        correct: "a"
    },
    {
        question: "What is a Daily Scrum?",
        a: "A short daily meeting for the development team",
        b: "A weekly project status meeting",
        c: "A monthly review meeting",
        d: "A quarterly planning meeting",
        correct: "a"
    },
    {
        question: "What is a Sprint Review?",
        a: "A meeting to inspect the increment and adapt the Product Backlog",
        b: "A meeting to gather requirements",
        c: "A meeting to design the system",
        d: "A meeting to test the software",
        correct: "a"
    },
    {
        question: "What is a Sprint Retrospective?",
        a: "A meeting to reflect on the past Sprint and plan improvements",
        b: "A meeting to gather requirements",
        c: "A meeting to design the system",
        d: "A meeting to test the software",
        correct: "a"
    },
    {
        question: "What is a Scrum Master?",
        a: "A facilitator for the Scrum team",
        b: "A project manager",
        c: "A software tester",
        d: "A product designer",
        correct: "a"
    },
    {
        question: "What is a Product Owner?",
        a: "A person responsible for maximizing the value of the product",
        b: "A project manager",
        c: "A software tester",
        d: "A product designer",
        correct: "a"
    },
    {
        question: "What is a Development Team?",
        a: "A group of professionals who do the work of delivering a potentially releasable increment",
        b: "A group of project managers",
        c: "A group of software testers",
        d: "A group of product designers",
        correct: "a"
    },
    {
        question: "What is a Sprint Backlog?",
        a: "A list of tasks to be completed in a Sprint",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },
    {
        question: "What is an Increment?",
        a: "A usable and potentially releasable piece of the product",
        b: "A phase in the waterfall model",
        c: "A risk management technique",
        d: "A software testing method",
        correct: "a"
    },
    {
        question: "What is a Definition of Done?",
        a: "A shared understanding of what it means for work to be complete",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },
    {
        question: "What is a Sprint Planning meeting?",
        a: "A meeting to plan the work for the upcoming Sprint",
        b: "A meeting to gather requirements",
        c: "A meeting to design the system",
        d: "A meeting to test the software",
        correct: "a"
    },
    {
        question: "What is a Burndown Chart?",
        a: "A visual representation of work remaining in a Sprint",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },
    {
        question: "What is a Sprint Goal?",
        a: "A short, clear statement of what the team plans to achieve during the Sprint",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },
    {
        question: "What is a User Story?",
        a: "A description of a feature from the perspective of the end user",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },
    {
        question: "What is a Sprint Retrospective?",
        a: "A meeting to reflect on the past Sprint and plan improvements",
        b: "A meeting to gather requirements",
        c: "A meeting to design the system",
        d: "A meeting to test the software",
        correct: "a"
    },
    {
        question: "What is a Scrum Master?",
        a: "A facilitator for the Scrum team",
        b: "A project manager",
        c: "A software tester",
        d: "A product designer",
        correct: "a"
    },
    {
        question: "What is a Product Owner?",
        a: "A person responsible for maximizing the value of the product",
        b: "A project manager",
        c: "A software tester",
        d: "A product designer",
        correct: "a"
    },
    {
        question: "What is a Development Team?",
        a: "A group of professionals who do the work of delivering a potentially releasable increment",
        b: "A group of project managers",
        c: "A group of software testers",
        d: "A group of product designers",
        correct: "a"
    },
    {
        question: "What is a Sprint Backlog?",
        a: "A list of tasks to be completed in a Sprint",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },
    {
        question: "What is an Increment?",
        a: "A usable and potentially releasable piece of the product",
        b: "A phase in the waterfall model",
        c: "A risk management technique",
        d: "A software testing method",
        correct: "a"
    },
    {
        question: "What is a Definition of Done?",
        a: "A shared understanding of what it means for work to be complete",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },
    {
        question: "What is a Sprint Planning meeting?",
        a: "A meeting to plan the work for the upcoming Sprint",
        b: "A meeting to gather requirements",
        c: "A meeting to design the system",
        d: "A meeting to test the software",
        correct: "a"
    },
    {
        question: "What is a Burndown Chart?",
        a: "A visual representation of work remaining in a Sprint",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },
    {
        question: "What is a Sprint Goal?",
        a: "A short, clear statement of what the team plans to achieve during the Sprint",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },
    {
        question: "What is a User Story?",
        a: "A description of a feature from the perspective of the end user",
        b: "A list of completed tasks",
        c: "A document outlining project risks",
        d: "A schedule of project milestones",
        correct: "a"
    },{
        question: "What is the main difference between Agile and Waterfall?",
        a: "Agile is iterative, Waterfall is linear",
        b: "Agile is linear, Waterfall is iterative",
        c: "Agile is risk-based, Waterfall is time-based",
        d: "Agile is time-based, Waterfall is risk-based",
        correct: "a"
    },
    {
        question: "Which approach is more flexible to changes?",
        a: "Agile",
        b: "Waterfall",
        c: "Both are equally flexible",
        d: "Neither is flexible",
        correct: "a"
    },
    {
        question: "Which approach involves continuous delivery of software?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach requires detailed documentation before starting the project?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is better suited for projects with well-defined requirements?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach emphasizes customer collaboration?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to deliver a working product early in the project?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach follows a sequential design process?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more adaptable to changing requirements?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach uses sprints or iterations?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more suitable for projects with high uncertainty?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach requires a complete project plan before starting?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach focuses on delivering a complete product at the end of the project?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to involve frequent testing and feedback?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more rigid and structured?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is better for projects with evolving requirements?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach involves regular reflection and adaptation?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to have a fixed scope?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more suitable for projects with a clear end goal?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to involve cross-functional teams?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to involve detailed upfront planning?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more suitable for projects with a high level of complexity?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to involve regular customer feedback?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to involve a fixed budget?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to involve a fixed timeline?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to involve a fixed scope?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to involve regular reflection and adaptation?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to involve cross-functional teams?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more likely to involve detailed upfront planning?",
        a: "Waterfall",
        b: "Agile",
        c: "Both",
        d: "Neither",
        correct: "a"
    },
    {
        question: "Which approach is more suitable for projects with a high level of complexity?",
        a: "Agile",
        b: "Waterfall",
        c: "Both",
        d: "Neither",
        correct: "a"
    },{
        question: "What are functional requirements?",
        a: "Specifications of what the system should do",
        b: "Specifications of how the system should perform",
        c: "Specifications of the system's design",
        d: "Specifications of the system's deployment",
        correct: "a"
    },
    {
        question: "What are non-functional requirements?",
        a: "Specifications of how the system should perform",
        b: "Specifications of what the system should do",
        c: "Specifications of the system's design",
        d: "Specifications of the system's deployment",
        correct: "a"
    },
    {
        question: "Which of the following is an example of a functional requirement?",
        a: "The system shall allow users to log in",
        b: "The system shall respond within 2 seconds",
        c: "The system shall be available 99.9% of the time",
        d: "The system shall be secure",
        correct: "a"
    },
    {
        question: "Which of the following is an example of a non-functional requirement?",
        a: "The system shall respond within 2 seconds",
        b: "The system shall allow users to log in",
        c: "The system shall allow users to register",
        d: "The system shall allow users to reset their password",
        correct: "a"
    },
    {
        question: "What is the purpose of functional requirements?",
        a: "To define the specific behavior or functions of the system",
        b: "To define the performance and quality attributes of the system",
        c: "To define the system's design",
        d: "To define the system's deployment",
        correct: "a"
    },
    {
        question: "What is the purpose of non-functional requirements?",
        a: "To define the performance and quality attributes of the system",
        b: "To define the specific behavior or functions of the system",
        c: "To define the system's design",
        d: "To define the system's deployment",
        correct: "a"
    },
    {
        question: "Which of the following is NOT a non-functional requirement?",
        a: "The system shall allow users to log in",
        b: "The system shall be available 99.9% of the time",
        c: "The system shall be secure",
        d: "The system shall respond within 2 seconds",
        correct: "a"
    },
    {
        question: "Which of the following is NOT a functional requirement?",
        a: "The system shall be available 99.9% of the time",
        b: "The system shall allow users to log in",
        c: "The system shall allow users to register",
        d: "The system shall allow users to reset their password",
        correct: "a"
    },
    {
        question: "What is a usability requirement?",
        a: "A non-functional requirement specifying how easy the system is to use",
        b: "A functional requirement specifying what the system should do",
        c: "A design requirement specifying the system's architecture",
        d: "A deployment requirement specifying how the system should be deployed",
        correct: "a"
    },
    {
        question: "What is a performance requirement?",
        a: "A non-functional requirement specifying how well the system performs",
        b: "A functional requirement specifying what the system should do",
        c: "A design requirement specifying the system's architecture",
        d: "A deployment requirement specifying how the system should be deployed",
        correct: "a"
    },
    {
        question: "What is a security requirement?",
        a: "A non-functional requirement specifying how secure the system is",
        b: "A functional requirement specifying what the system should do",
        c: "A design requirement specifying the system's architecture",
        d: "A deployment requirement specifying how the system should be deployed",
        correct: "a"
    },
    {
        question: "What is a reliability requirement?",
        a: "A non-functional requirement specifying how reliable the system is",
        b: "A functional requirement specifying what the system should do",
        c: "A design requirement specifying the system's architecture",
        d: "A deployment requirement specifying how the system should be deployed",
        correct: "a"
    },
    {
        question: "What is a maintainability requirement?",
        a: "A non-functional requirement specifying how easy the system is to maintain",
        b: "A functional requirement specifying what the system should do",
        c: "A design requirement specifying the system's architecture",
        d: "A deployment requirement specifying how the system should be deployed",
        correct: "a"
    },
    {
        question: "What is a scalability requirement?",
        a: "A non-functional requirement specifying how well the system can scale",
        b: "A functional requirement specifying what the system should do",
        c: "A design requirement specifying the system's architecture",
        d: "A deployment requirement specifying how the system should be deployed",
        correct: "a"
    },
    {
        question: "What is an availability requirement?",
        a: "A non-functional requirement specifying how available the system is",
        b: "A functional requirement specifying what the system should do",
        c: "A design requirement specifying the system's architecture",
        d: "A deployment requirement specifying how the system should be deployed",
        correct: "a"
    },
    {
        question: "What is an interoperability requirement?",
        a: "A non-functional requirement specifying how well the system can interact with other systems",
        b: "A functional requirement specifying what the system should do",
        c: "A design requirement specifying the system's architecture",
        d: "A deployment requirement specifying how the system should be deployed",
        correct: "a"
    },
    {
        question: "What is a portability requirement?",
        a: "A non-functional requirement specifying how easily the system can be moved to different environments",
        b: "A functional requirement specifying what the system should do",
        c: "A design requirement specifying the system's architecture",
        d: "A deployment requirement specifying how the system should be deployed",
        correct: "a"
    },
    {
        question: "What is a compliance requirement?",
        a: "A non-functional requirement specifying how well the system adheres to regulations",
        b: "A functional requirement specifying what the system should do",
        c: "A design requirement specifying the system's architecture",
        d: "A deployment requirement specifying how the system should be deployed",
        correct: "a"
    },
    {
        question: "What is a functional requirement?",
        a: "A specification of what the system should do",
        b: "A specification of how the system should perform",
        c: "A specification of the system's design",
        d: "A specification of the system's deployment",
        correct: "a"
    },
    {
        question: "What is a non-functional requirement?",
        a: "A specification of how the system should perform",
        b: "A specification of what the system should do",
        c: "A specification of the system's design",
        d: "A specification of the system's deployment",
        correct: "a"
    },
    {
        question: "Which of the following is an example of a functional requirement?",
        a: "The system shall allow users to log in",
        b: "The system shall respond within 2 seconds",
        c: "The system shall be available 99.9% of the time",
        d: "The system shall be secure",
        correct: "a"
    },
    {
        question: "Which of the following is an example of a non-functional requirement?",
        a: "The system shall respond within 2 seconds",
        b: "The system shall allow users to log in",
        c: "The system shall allow users to register",
        d: "The system shall allow users to reset their password",
        correct: "a"
    },
    {
        question: "What is the purpose of functional requirements?",
        a: "To define the specific behavior or functions of the system",
        b: "To define the performance and quality attributes of the system",
        c: "To define the system's design",
        d: "To define the system's deployment",
        correct: "a"
    },
    {
        question: "What is the purpose of non-functional requirements?",
        a: "To define the performance and quality attributes of the system",
        b: "To define the specific behavior or functions of the system",
        c: "To define the system's design",
        d: "To define the system's deployment",
        correct: "a"
    },
    {
        question: "Which of the following is NOT a non-functional requirement?",
        a: "The system shall allow users to log in",
        b: "The system shall be available 99.9% of the time",
        c: "The system shall be secure",
        d: "The system shall respond within 2 seconds",
        correct: "a"
    },
    {
        question: "Which of the following is NOT a functional requirement?",
        a: "The system shall be available 99.9% of the time",
        b: "The system shall allow users to log in",
        c: "The system shall allow users to register",
        d: "The system shall allow users to reset their password",
        correct: "a"
    },{
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "HyperText Machine Language",
        c: "HyperText and links Markup Language",
        d: "HyperText Marking Language",
        correct: "a"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Colorful Style Sheets",
        c: "Computer Style Sheets",
        d: "Creative Style Sheets",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<style>",
        b: "<css>",
        c: "<script>",
        d: "<link>",
        correct: "a"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "style",
        b: "class",
        c: "id",
        d: "font",
        correct: "a"
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "body {color: black;}",
        b: "{body;color:black;}",
        c: "body:color=black;",
        d: "{body:color=black;}",
        correct: "a"
    },
    {
        question: "How do you insert a comment in a CSS file?",
        a: "/* this is a comment */",
        b: "// this is a comment",
        c: "' this is a comment",
        d: "<!-- this is a comment -->",
        correct: "a"
    },
    {
        question: "Which property is used to change the background color?",
        a: "background-color",
        b: "color",
        c: "bgcolor",
        d: "background",
        correct: "a"
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        a: "h1 {background-color: #FFFFFF;}",
        b: "h1 {color: #FFFFFF;}",
        c: "h1 {bg-color: #FFFFFF;}",
        d: "h1 {background: #FFFFFF;}",
        correct: "a"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        a: "color",
        b: "text-color",
        c: "fgcolor",
        d: "font-color",
        correct: "a"
    },
    {
        question: "Which CSS property controls the text size?",
        a: "font-size",
        b: "text-size",
        c: "font-style",
        d: "text-style",
        correct: "a"
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        a: "text-transform: capitalize;",
        b: "text-transform: uppercase;",
        c: "text-transform: lowercase;",
        d: "text-transform: capitalize-all;",
        correct: "a"
    },
    {
        question: "Which property is used to change the font of an element?",
        a: "font-family",
        b: "font-style",
        c: "font-weight",
        d: "font-size",
        correct: "a"
    },
    {
        question: "How do you make the text bold?",
        a: "font-weight: bold;",
        b: "font-style: bold;",
        c: "font-size: bold;",
        d: "text-weight: bold;",
        correct: "a"
    },
    {
        question: "How do you display a border like this: The top border = 10 pixels, the bottom border = 5 pixels, the left border = 20 pixels, and the right border = 1pixel?",
        a: "border-width: 10px 1px 5px 20px;",
        b: "border-width: 10px 20px 5px 1px;",
        c: "border-width: 10px 5px 20px 1px;",
        d: "border-width: 10px 1px 20px 5px;",
        correct: "a"
    },
    {
        question: "How do you make a list that lists its items with squares?",
        a: "list-style-type: square;",
        b: "list-type: square;",
        c: "list: square;",
        d: "list-style: square;",
        correct: "a"
    },
    {
        question: "How do you select an element with id 'demo'?",
        a: "#demo",
        b: ".demo",
        c: "demo",
        d: "*demo",
        correct: "a"
    },
    {
        question: "How do you select elements with class name 'test'?",
        a: ".test",
        b: "#test",
        c: "test",
        d: "*test",
        correct: "a"
    },
    {
        question: "How do you select all p elements inside a div element?",
        a: "div p",
        b: "div + p",
        c: "div.p",
        d: "div ~ p",
        correct: "a"
    },
    {
        question: "How do you group selectors?",
        a: "Separate each selector with a comma",
        b: "Separate each selector with a plus sign",
        c: "Separate each selector with a space",
        d: "Separate each selector with a dot",
        correct: "a"
    },
    {
        question: "What is the default value of the position property?",
        a: "static",
        b: "relative",
        c: "absolute",
        d: "fixed",
        correct: "a"
    },
    {
        question: "How do you make a flex container?",
        a: "display: flex;",
        b: "display: block;",
        c: "display: inline;",
        d: "display: grid;",
        correct: "a"
    },
    {
        question: "How do you center an element horizontally?",
        a: "margin: 0 auto;",
        b: "margin: auto 0;",
        c: "margin: 0;",
        d: "margin: auto;",
        correct: "a"
    },
    {
        question: "How do you make a grid container?",
        a: "display: grid;",
        b: "display: block;",
        c: "display: inline;",
        d: "display: flex;",
        correct: "a"
    },
    {
        question: "How do you create a responsive layout?",
        a: "Use media queries",
        b: "Use fixed widths",
        c: "Use absolute positioning",
        d: "Use inline styles",
        correct: "a"
    },
    {
        question: "How do you add a hover effect to an element?",
        a: "element:hover { /* styles */ }",
        b: "element:focus { /* styles */ }",
        c: "element:active { /* styles */ }",
        d: "element:visited { /* styles */ }",
        correct: "a"
    },
    {
        question: "How do you create a transition effect?",
        a: "transition: property duration;",
        b: "transform: property duration;",
        c: "animation: property duration;",
        d: "transition: duration property;",
        correct: "a"
    },{
        question: "What is JavaScript?",
        a: "A programming language for web development",
        b: "A markup language",
        c: "A database management system",
        d: "A web server",
        correct: "a"
    },
    {
        question: "Which company developed JavaScript?",
        a: "Netscape",
        b: "Microsoft",
        c: "Google",
        d: "Apple",
        correct: "a"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        a: "//",
        b: "/* */",
        c: "#",
        d: "<!-- -->",
        correct: "a"
    },
    {
        question: "How do you declare a variable in JavaScript?",
        a: "var",
        b: "let",
        c: "const",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        a: "=",
        b: "==",
        c: "===",
        d: "!=",
        correct: "a"
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function myFunction() {}",
        b: "function:myFunction() {}",
        c: "function = myFunction() {}",
        d: "function => myFunction() {}",
        correct: "a"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        a: "myFunction()",
        b: "call myFunction()",
        c: "execute myFunction()",
        d: "run myFunction()",
        correct: "a"
    },
    {
        question: "How do you write an 'if' statement in JavaScript?",
        a: "if (condition) {}",
        b: "if condition {}",
        c: "if [condition] {}",
        d: "if {condition} {}",
        correct: "a"
    },
    {
        question: "How do you write a 'for' loop in JavaScript?",
        a: "for (let i = 0; i < 5; i++) {}",
        b: "for i = 0 to 5 {}",
        c: "for (i = 0; i < 5; i++) {}",
        d: "for (i < 5; i++) {}",
        correct: "a"
    },
    {
        question: "How do you write a 'while' loop in JavaScript?",
        a: "while (condition) {}",
        b: "while condition {}",
        c: "while [condition] {}",
        d: "while {condition} {}",
        correct: "a"
    },
    {
        question: "How do you write a 'do...while' loop in JavaScript?",
        a: "do {} while (condition);",
        b: "do {} while condition;",
        c: "do {} while [condition];",
        d: "do {} while {condition};",
        correct: "a"
    },
    {
        question: "How do you create an array in JavaScript?",
        a: "let myArray = [];",
        b: "let myArray = ();",
        c: "let myArray = {};",
        d: "let myArray = <>;",
        correct: "a"
    },
    {
        question: "How do you access the first element of an array?",
        a: "myArray[0]",
        b: "myArray[1]",
        c: "myArray.first()",
        d: "myArray.get(0)",
        correct: "a"
    },
    {
        question: "How do you add an element to an array?",
        a: "myArray.push(element)",
        b: "myArray.add(element)",
        c: "myArray.insert(element)",
        d: "myArray.append(element)",
        correct: "a"
    },
    {
        question: "How do you remove the last element from an array?",
        a: "myArray.pop()",
        b: "myArray.remove()",
        c: "myArray.delete()",
        d: "myArray.shift()",
        correct: "a"
    },
    {
        question: "How do you find the length of an array?",
        a: "myArray.length",
        b: "myArray.size",
        c: "myArray.count",
        d: "myArray.total",
        correct: "a"
    },
    {
        question: "How do you convert a string to an integer?",
        a: "parseInt(string)",
        b: "parseFloat(string)",
        c: "Number(string)",
        d: "string.toInt()",
        correct: "a"
    },
    {
        question: "How do you convert an integer to a string?",
        a: "String(integer)",
        b: "integer.toString()",
        c: "integer.toStr()",
        d: "integer.toText()",
        correct: "a"
    },
    {
        question: "How do you check if a variable is an array?",
        a: "Array.isArray(variable)",
        b: "variable.isArray()",
        c: "variable.isArray",
        d: "Array.check(variable)",
        correct: "a"
    },
    {
        question: "How do you create an object in JavaScript?",
        a: "let myObject = {};",
        b: "let myObject = [];",
        c: "let myObject = ();",
        d: "let myObject = <>;",
        correct: "a"
    },
    {
        question: "How do you access a property of an object?",
        a: "myObject.property",
        b: "myObject[property]",
        c: "myObject.getProperty()",
        d: "myObject.property()",
        correct: "a"
    },
    {
        question: "How do you add a property to an object?",
        a: "myObject.property = value",
        b: "myObject.addProperty(value)",
        c: "myObject.insertProperty(value)",
        d: "myObject.appendProperty(value)",
        correct: "a"
    },
    {
        question: "How do you remove a property from an object?",
        a: "delete myObject.property",
        b: "myObject.removeProperty()",
        c: "myObject.deleteProperty()",
        d: "myObject.popProperty()",
        correct: "a"
    },
    {
        question: "How do you check if an object has a property?",
        a: "myObject.hasOwnProperty(property)",
        b: "myObject.checkProperty(property)",
        c: "myObject.propertyExists(property)",
        d: "myObject.propertyCheck(property)",
        correct: "a"
    },
    {
        question: "How do you create a class in JavaScript?",
        a: "class MyClass {}",
        b: "function MyClass() {}",
        c: "let MyClass = function() {}",
        d: "MyClass = class {}",
        correct: "a"
    },
    {
        question: "How do you create an instance of a class?",
        a: "let myInstance = new MyClass()",
        b: "let myInstance = MyClass()",
        c: "let myInstance = create MyClass()",
        d: "let myInstance = instance MyClass()",
        correct: "a"
    },{
        question: "What does JSON stand for?",
        a: "JavaScript Object Notation",
        b: "JavaScript Online Notation",
        c: "JavaScript Object Network",
        d: "JavaScript Online Network",
        correct: "a"
    },
    {
        question: "What is JSON primarily used for?",
        a: "Data interchange",
        b: "Styling web pages",
        c: "Database management",
        d: "Server configuration",
        correct: "a"
    },
    {
        question: "Which data format is JSON based on?",
        a: "JavaScript",
        b: "HTML",
        c: "XML",
        d: "CSS",
        correct: "a"
    },
    {
        question: "Which of the following is a valid JSON object?",
        a: '{"name": "John", "age": 30}',
        b: "{name: 'John', age: 30}",
        c: "{'name': 'John', 'age': 30}",
        d: "{name: 'John', age: 30}",
        correct: "a"
    },
    {
        question: "How do you write an array in JSON?",
        a: '["apple", "banana", "cherry"]',
        b: "['apple', 'banana', 'cherry']",
        c: "{'apple', 'banana', 'cherry'}",
        d: '{"apple", "banana", "cherry"}',
        correct: "a"
    },
    {
        question: "Which of the following is NOT a valid JSON data type?",
        a: "Date",
        b: "String",
        c: "Number",
        d: "Boolean",
        correct: "a"
    },
    {
        question: "How do you parse a JSON string in JavaScript?",
        a: "JSON.parse()",
        b: "JSON.stringify()",
        c: "JSON.decode()",
        d: "JSON.convert()",
        correct: "a"
    },
    {
        question: "How do you convert a JavaScript object to a JSON string?",
        a: "JSON.stringify()",
        b: "JSON.parse()",
        c: "JSON.encode()",
        d: "JSON.convert()",
        correct: "a"
    },
    {
        question: "Which of the following is a valid JSON array?",
        a: '[{"name": "John"}, {"name": "Jane"}]',
        b: "{'name': 'John'}, {'name': 'Jane'}",
        c: "{name: 'John'}, {name: 'Jane'}",
        d: '{"name": "John"}, {"name": "Jane"}',
        correct: "a"
    },
    {
        question: "What is the file extension for JSON files?",
        a: ".json",
        b: ".js",
        c: ".txt",
        d: ".xml",
        correct: "a"
    },
    {
        question: "Which method is used to read JSON data from a file in JavaScript?",
        a: "fetch()",
        b: "readFile()",
        c: "getJSON()",
        d: "loadJSON()",
        correct: "a"
    },
    {
        question: "Which of the following is a valid JSON boolean value?",
        a: "true",
        b: "'true'",
        c: "True",
        d: "'True'",
        correct: "a"
    },
    {
        question: "How do you access the value of the 'name' property in the following JSON object: {\"name\": \"John\", \"age\": 30}?",
        a: "object.name",
        b: "object['name']",
        c: "object.name()",
        d: "object'name'",
        correct: "a"
    },
    {
        question: "Which of the following is a valid JSON number?",
        a: "123",
        b: "'123'",
        c: "\"123\"",
        d: "123.45.67",
        correct: "a"
    },
    {
        question: "Which of the following is a valid JSON string?",
        a: "\"Hello, World!\"",
        b: "'Hello, World!'",
        c: "Hello, World!",
        d: "`Hello, World!`",
        correct: "a"
    },
    {
        question: "How do you add a new property to a JSON object?",
        a: "object.newProperty = value",
        b: "object.addProperty(value)",
        c: "object.insertProperty(value)",
        d: "object.appendProperty(value)",
        correct: "a"
    },
    {
        question: "How do you remove a property from a JSON object?",
        a: "delete object.property",
        b: "object.removeProperty()",
        c: "object.deleteProperty()",
        d: "object.popProperty()",
        correct: "a"
    },
    {
        question: "Which of the following is a valid JSON null value?",
        a: "null",
        b: "'null'",
        c: "\"null\"",
        d: "None",
        correct: "a"
    },
    {
        question: "How do you check if a JSON object has a specific property?",
        a: "object.hasOwnProperty(property)",
        b: "object.checkProperty(property)",
        c: "object.propertyExists(property)",
        d: "object.propertyCheck(property)",
        correct: "a"
    },
    {
        question: "Which of the following is a valid JSON nested object?",
        a: '{"person": {"name": "John", "age": 30}}',
        b: "{'person': {'name': 'John', 'age': 30}}",
        c: "{person: {name: 'John', age: 30}}",
        d: '{"person": {name: "John", age: 30}}',
        correct: "a"
    },
    {
        question: "How do you iterate over all properties of a JSON object?",
        a: "for (let key in object) {}",
        b: "for (let key of object) {}",
        c: "for (let key in object.keys()) {}",
        d: "for (let key of object.keys()) {}",
        correct: "a"
    },
    {
        question: "Which of the following is a valid JSON object with an array?",
        a: '{"fruits": ["apple", "banana", "cherry"]}',
        b: "{'fruits': ['apple', 'banana', 'cherry']}",
        c: "{fruits: ['apple', 'banana', 'cherry']}",
        d: '{"fruits": {apple, banana, cherry}}',
        correct: "a"
    },
    {
        question: "How do you merge two JSON objects?",
        a: "Object.assign(target, source)",
        b: "Object.merge(target, source)",
        c: "Object.combine(target, source)",
        d: "Object.append(target, source)",
        correct: "a"
    },
    {
        question: "Which of the following is a valid JSON object with a boolean value?",
        a: '{"isActive": true}',
        b: "{'isActive': true}",
        c: "{isActive: true}",
        d: "{\"isActive\": true}",
        correct: "a"
    },
    {
        question: "How do you stringify a JSON object?",
        a: "JSON.stringify(object)",
        b: "JSON.parse(object)",
        c: "JSON.encode(object)",
        d: "JSON.convert(object)",
        correct: "a"
    },{
        question: "What is a conceptual data model?",
        a: "A high-level representation of organizational data",
        b: "A detailed representation of database structure",
        c: "A physical implementation of a database",
        d: "A model for data processing",
        correct: "a"
    },
    {
        question: "What is a logical data model?",
        a: "A detailed representation of database structure",
        b: "A high-level representation of organizational data",
        c: "A physical implementation of a database",
        d: "A model for data processing",
        correct: "a"
    },
    {
        question: "What is a physical data model?",
        a: "A physical implementation of a database",
        b: "A high-level representation of organizational data",
        c: "A detailed representation of database structure",
        d: "A model for data processing",
        correct: "a"
    },
    {
        question: "Which data model focuses on the business and its requirements?",
        a: "Conceptual data model",
        b: "Logical data model",
        c: "Physical data model",
        d: "Data processing model",
        correct: "a"
    },
    {
        question: "Which data model includes entities, attributes, and relationships?",
        a: "Logical data model",
        b: "Conceptual data model",
        c: "Physical data model",
        d: "Data processing model",
        correct: "a"
    },
    {
        question: "Which data model includes tables, columns, and constraints?",
        a: "Physical data model",
        b: "Conceptual data model",
        c: "Logical data model",
        d: "Data processing model",
        correct: "a"
    },
    {
        question: "What is an entity in a data model?",
        a: "A real-world object or concept",
        b: "A characteristic of an object",
        c: "A relationship between objects",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is an attribute in a data model?",
        a: "A characteristic of an object",
        b: "A real-world object or concept",
        c: "A relationship between objects",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a relationship in a data model?",
        a: "A connection between entities",
        b: "A characteristic of an object",
        c: "A real-world object or concept",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a primary key in a data model?",
        a: "A unique identifier for a record",
        b: "A characteristic of an object",
        c: "A connection between entities",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a foreign key in a data model?",
        a: "A field that links to a primary key in another table",
        b: "A unique identifier for a record",
        c: "A characteristic of an object",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is normalization in a data model?",
        a: "The process of organizing data to reduce redundancy",
        b: "The process of creating a physical database",
        c: "The process of defining business requirements",
        d: "The process of creating a conceptual model",
        correct: "a"
    },
    {
        question: "What is denormalization in a data model?",
        a: "The process of combining tables to improve performance",
        b: "The process of organizing data to reduce redundancy",
        c: "The process of creating a physical database",
        d: "The process of defining business requirements",
        correct: "a"
    },
    {
        question: "What is an ERD?",
        a: "Entity-Relationship Diagram",
        b: "Entity-Relationship Data",
        c: "Entity-Relationship Design",
        d: "Entity-Relationship Development",
        correct: "a"
    },
    {
        question: "What is a schema in a data model?",
        a: "A blueprint of how the database is structured",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data dictionary?",
        a: "A repository of information about data",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data warehouse?",
        a: "A system used for reporting and data analysis",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a star schema?",
        a: "A type of database schema used in data warehousing",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a snowflake schema?",
        a: "A type of database schema used in data warehousing",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a fact table?",
        a: "A table that contains quantitative data for analysis",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a dimension table?",
        a: "A table that contains attributes related to dimensions",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a surrogate key?",
        a: "A unique identifier for a record that is not derived from application data",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a composite key?",
        a: "A key that consists of two or more attributes",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a candidate key?",
        a: "An attribute that can uniquely identify a record",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a unique key?",
        a: "A key that ensures all values in a column are unique",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data mart?",
        a: "A subset of a data warehouse focused on a specific area",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data lake?",
        a: "A storage repository that holds a vast amount of raw data",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data model?",
        a: "A conceptual representation of data structures",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },{
        question: "What is data modeling?",
        a: "The process of creating a visual representation of a system's data",
        b: "The process of designing a user interface",
        c: "The process of writing code",
        d: "The process of testing software",
        correct: "a"
    },
    {
        question: "What is the purpose of data modeling?",
        a: "To define and organize data structures",
        b: "To design a user interface",
        c: "To write code",
        d: "To test software",
        correct: "a"
    },
    {
        question: "What is an entity in data modeling?",
        a: "A real-world object or concept",
        b: "A characteristic of an object",
        c: "A relationship between objects",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is an attribute in data modeling?",
        a: "A characteristic of an object",
        b: "A real-world object or concept",
        c: "A relationship between objects",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a relationship in data modeling?",
        a: "A connection between entities",
        b: "A characteristic of an object",
        c: "A real-world object or concept",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a primary key in data modeling?",
        a: "A unique identifier for a record",
        b: "A characteristic of an object",
        c: "A connection between entities",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a foreign key in data modeling?",
        a: "A field that links to a primary key in another table",
        b: "A unique identifier for a record",
        c: "A characteristic of an object",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is normalization in data modeling?",
        a: "The process of organizing data to reduce redundancy",
        b: "The process of creating a physical database",
        c: "The process of defining business requirements",
        d: "The process of creating a conceptual model",
        correct: "a"
    },
    {
        question: "What is denormalization in data modeling?",
        a: "The process of combining tables to improve performance",
        b: "The process of organizing data to reduce redundancy",
        c: "The process of creating a physical database",
        d: "The process of defining business requirements",
        correct: "a"
    },
    {
        question: "What is an ERD?",
        a: "Entity-Relationship Diagram",
        b: "Entity-Relationship Data",
        c: "Entity-Relationship Design",
        d: "Entity-Relationship Development",
        correct: "a"
    },
    {
        question: "What is a schema in data modeling?",
        a: "A blueprint of how the database is structured",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data dictionary?",
        a: "A repository of information about data",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data warehouse?",
        a: "A system used for reporting and data analysis",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a star schema?",
        a: "A type of database schema used in data warehousing",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a snowflake schema?",
        a: "A type of database schema used in data warehousing",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a fact table?",
        a: "A table that contains quantitative data for analysis",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a dimension table?",
        a: "A table that contains attributes related to dimensions",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a surrogate key?",
        a: "A unique identifier for a record that is not derived from application data",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a composite key?",
        a: "A key that consists of two or more attributes",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a candidate key?",
        a: "An attribute that can uniquely identify a record",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a unique key?",
        a: "A key that ensures all values in a column are unique",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data mart?",
        a: "A subset of a data warehouse focused on a specific area",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data lake?",
        a: "A storage repository that holds a vast amount of raw data",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data model?",
        a: "A conceptual representation of data structures",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },{
        question: "What is the first step in designing a data model?",
        a: "Identifying entities",
        b: "Creating tables",
        c: "Defining relationships",
        d: "Writing SQL queries",
        correct: "a"
    },
    {
        question: "What is an entity in a data model?",
        a: "A real-world object or concept",
        b: "A characteristic of an object",
        c: "A relationship between objects",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is an attribute in a data model?",
        a: "A characteristic of an object",
        b: "A real-world object or concept",
        c: "A relationship between objects",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a relationship in a data model?",
        a: "A connection between entities",
        b: "A characteristic of an object",
        c: "A real-world object or concept",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a primary key in a data model?",
        a: "A unique identifier for a record",
        b: "A characteristic of an object",
        c: "A connection between entities",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a foreign key in a data model?",
        a: "A field that links to a primary key in another table",
        b: "A unique identifier for a record",
        c: "A characteristic of an object",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is normalization in a data model?",
        a: "The process of organizing data to reduce redundancy",
        b: "The process of creating a physical database",
        c: "The process of defining business requirements",
        d: "The process of creating a conceptual model",
        correct: "a"
    },
    {
        question: "What is denormalization in a data model?",
        a: "The process of combining tables to improve performance",
        b: "The process of organizing data to reduce redundancy",
        c: "The process of creating a physical database",
        d: "The process of defining business requirements",
        correct: "a"
    },
    {
        question: "What is an ERD?",
        a: "Entity-Relationship Diagram",
        b: "Entity-Relationship Data",
        c: "Entity-Relationship Design",
        d: "Entity-Relationship Development",
        correct: "a"
    },
    {
        question: "What is a schema in data modeling?",
        a: "A blueprint of how the database is structured",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data dictionary?",
        a: "A repository of information about data",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data warehouse?",
        a: "A system used for reporting and data analysis",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a star schema?",
        a: "A type of database schema used in data warehousing",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a snowflake schema?",
        a: "A type of database schema used in data warehousing",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a fact table?",
        a: "A table that contains quantitative data for analysis",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a dimension table?",
        a: "A table that contains attributes related to dimensions",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a surrogate key?",
        a: "A unique identifier for a record that is not derived from application data",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a composite key?",
        a: "A key that consists of two or more attributes",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a candidate key?",
        a: "An attribute that can uniquely identify a record",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a unique key?",
        a: "A key that ensures all values in a column are unique",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data mart?",
        a: "A subset of a data warehouse focused on a specific area",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data lake?",
        a: "A storage repository that holds a vast amount of raw data",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data model?",
        a: "A conceptual representation of data structures",
        b: "A real-world object or concept",
        c: "A characteristic of an object",
        d: "A connection between entities",
        correct: "a"
    },{
        question: "What is the purpose of a data model?",
        a: "To define and organize data structures",
        b: "To design a user interface",
        c: "To write code",
        d: "To test software",
        correct: "a"
    },
    {
        question: "What is a data flow diagram (DFD)?",
        a: "A graphical representation of data flow within a system",
        b: "A blueprint of database structure",
        c: "A diagram of user interface design",
        d: "A flowchart of software development process",
        correct: "a"
    },
    {
        question: "What is a conceptual schema?",
        a: "A high-level description of data requirements",
        b: "A detailed representation of database structure",
        c: "A physical implementation of a database",
        d: "A model for data processing",
        correct: "a"
    },
    {
        question: "What is a logical schema?",
        a: "A detailed representation of database structure",
        b: "A high-level description of data requirements",
        c: "A physical implementation of a database",
        d: "A model for data processing",
        correct: "a"
    },
    {
        question: "What is a physical schema?",
        a: "A physical implementation of a database",
        b: "A high-level description of data requirements",
        c: "A detailed representation of database structure",
        d: "A model for data processing",
        correct: "a"
    },
    {
        question: "What is a data entity?",
        a: "A real-world object or concept represented in a database",
        b: "A characteristic of an object",
        c: "A relationship between objects",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a data attribute?",
        a: "A characteristic of an object represented in a database",
        b: "A real-world object or concept",
        c: "A relationship between objects",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a data relationship?",
        a: "A connection between entities in a database",
        b: "A characteristic of an object",
        c: "A real-world object or concept",
        d: "A constraint on data",
        correct: "a"
    },
    {
        question: "What is a data constraint?",
        a: "A rule that limits the values that can be stored in a database",
        b: "A characteristic of an object",
        c: "A real-world object or concept",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data integrity?",
        a: "The accuracy and consistency of data stored in a database",
        b: "A characteristic of an object",
        c: "A real-world object or concept",
        d: "A connection between entities",
        correct: "a"
    },
    {
        question: "What is a data redundancy?",
        a: "The unnecessary duplication of data in a database",
        b: "A characteristic of an object",
        c: "A real-world object or concept",
        d: "A connection between entities",
        correct: "a"
    }
    // Add more questions for other levels here
];

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let usedQuestions = new Set();

function startQuiz(level) {
    document.querySelector('.levels').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    selectedQuestions = getRandomQuestions(allQuizData, 25);
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
