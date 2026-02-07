const levels = [{
    title: "Level 0 – Tutorial",
    scenario: "You must remove a rat from a storage room safely.",
    task: "Understand how strategic thinking works.",
    items: ["Broom", "Mace Spray", "Garlic Bread", "Sticky Substance"],
    solution: "Use food to attract. Use tool to guide. Avoid messy methods.",
    
    tutorial: true,
    tutorialSteps: [
        "1. Understand the objective.",
        "2. Identify useful vs harmful items.",
        "3. Think about consequences.",
        "4. Structure your plan clearly.",
        "5. Avoid emotional or impulsive actions."
    ],
    
    exampleAnswer: "I will use garlic bread to attract the rat and broom to guide it outside safely. I will avoid using mace because it causes mess.",
    
    keywords: ["garlic", "broom", "avoid", "safe"]
},


    {
        mode: "dark",
        title: "Contain the Chaos",
        scenario: "You are in a park and see two people fighting with iron rods.",
        task: "Reduce damage and delay them until police arrive.",
        items: ["Phone", "Rope", "Marbles", "Smoke Bomb", "knife"],
        solution: "Call emergency services immediately. Use psychological interruption first. Smoke bomb near exit to slow escape. Avoid direct combat and never escalate with knife. Focus on harm reduction."
    },

    {
        mode: "playful",
        title: "The Balcony visitor",
        scenario: "A beautiful bird is sitting on your balcony.",
        task: "Capture it without causing harm.",
        items: ["Cage", "Bread", "Sticky Substance", "Bowl of Water"],
        solution: "Use cage and bread as bait. Cover sides for safety feeling. Avoid sticky substance and knife. Patience is key."
    },

    {
    mode: "dark",
    title: "The Fire Alarm Confusion",
    scenario: "You are inside a library when the fire alarm suddenly rings. People begin panicking and rushing toward one staircase. There is light smoke smell but no visible fire.",
    task: "Reduce panic and prevent injury until staff regain control.",
    items: ["Whistle", "Chair", "Phone", "Water Bottle", "Marker", "Backpack"],
    solution: "Primary Objective: Prevent stampede and reduce panic. Use whistle to gain attention. Speak clearly and instruct calm movement. Use phone to alert authorities. Avoid random escalation. Psychological control is key."
    },

    {
    mode: "dark",
    title: "Unexpected Storm",
    scenario: "You are at an outdoor school event. Suddenly heavy rain starts. Equipment and decorations are exposed. People begin running in confusion.",
    task: "Protect important assets and minimize chaos before everything gets damaged.",
    items: ["Plastic Sheet", "Rope", "3 Cardboard Boxes", "Whistle", "Marker", "Folding Table"],
    solution: "Primary Objective: Protect equipment first. Use plastic sheet as cover, rope to secure it, table to elevate sensitive items, whistle to guide people. Avoid wasting time on non-critical tasks. Prioritize high-value assets."
    },

    {
    mode: "dark",
    title: "Chemical Spill",
    scenario: "You are alone in a school laboratory. A small chemical container falls and breaks. There is a strong smell and liquid spreading across the floor. You do not know if it is toxic.",
    task: "Prevent harm and contain the situation safely until a teacher arrives.",
    items: ["Lab Coat", "Bucket of Sand", "Mop", "Gloves", "Window", "Chair"],
    solution: "Primary Objective: Ensure safety and containment. Wear gloves, open window for ventilation, use sand to absorb spill. Avoid using mop on unknown chemical. Contain first, clean later."
    },

    {
    mode: "dark",
    title: "The Forgotten Key",
    scenario: "You arrive early to class on presentation day. The classroom door is locked. Your project materials are inside. The teacher is unreachable for 30 minutes.",
    task: "Access materials or continue presentation with minimal disruption.",
    items: ["Long Ruler", "Chair", "Window (slightly open)", "Phone", "Notebook", "Water Bottle"],
    solution: "Primary Objective: Retrieve materials without damage. Try safe window access using ruler. Call school office. Prepare backup verbal presentation if needed. Avoid breaking property."
    },

    {
    mode: "dark",
    title: "Sudden Blackout",
    scenario: "You are inside a small community hall during an evening meeting. Suddenly, the power goes out. People start murmuring in confusion. Some elderly people are present.",
    task: "Maintain calm and prevent accidents until power returns.",
    items: ["Candle", "Matches", "Phone (20% battery)", "Chair", "Whistle", "Glass Bottle"],
    solution: "Primary Objective: Maintain calm and safe movement. Light candle carefully. Use calm communication. Preserve phone battery. Avoid escalating noise or risky actions."
    },

    {
    mode: "dark",
    title: "Sudden Blackout",
    scenario: "You are inside a small community hall during an evening meeting. Suddenly, the power goes out. People start murmuring in confusion. Some elderly people are present.",
    task: "Maintain calm and prevent accidents until power returns.",
    items: ["Candle", "Matches", "Phone (20% battery)", "Chair", "Whistle", "Glass Bottle"],
    solution: "Primary Objective: Maintain calm and safe movement. Light candle carefully. Use calm communication. Preserve phone battery. Avoid escalating noise or risky actions."
    },

    {
    mode: "dark",
    title: "Ceiling Drip",
    scenario: "You are alone in a classroom when water starts leaking from the ceiling. It is dripping onto important documents and a laptop. Maintenance will arrive in 20 minutes.",
    task: "Protect materials and prevent further damage.",
    items: ["Bucket", "3 Plastic Sheets", "Rope", "Newspapers", "Marker", "Wooden Stick"],
    solution: "Primary Objective: Protect electronics first. Move laptop and documents. Place bucket under leak. Use plastic sheets to divert water. Avoid wasting time on non-essential actions."
    },

    {
    mode: "dark",
    title: "Whispers in the Hallway",
    scenario: "During lunch break, you overhear students spreading a false rumor about you. It is gaining attention quickly. Several students are watching your reaction.",
    task: "Protect your reputation without escalating the situation.",
    items: ["Phone", "Screenshots", "Close Friend", "School Counselor Office", "Class Group Chat", "Silence"],
    solution: "Primary Objective: Stay calm and control narrative. Use evidence if necessary. Seek private resolution. Avoid public confrontation or emotional escalation."
    },

    {
    mode: "dark",
    title: "Ten Minutes Left",
    scenario: "You realize you forgot your calculator for a math exam starting in 10 minutes. Your house is 5 minutes away by bicycle.",
    task: "Maximize your performance chances without breaking rules.",
    items: ["Bicycle", "Phone", "Rough Sheet", "Friend Inside", "School Office", "10 Minutes"],
    solution: "Primary Objective: Secure calculator legally. Use bicycle immediately. Inform authorities if slightly late. Avoid breaking exam rules. Optimize time calmly."
    },

    {
    mode: "dark",
    title: "Balcony Disturbance",
    scenario: "You are alone at home at night. You hear suspicious noise from the balcony. The door is slightly open. You are unsure if it is an animal or a person.",
    task: "Ensure safety and prevent intrusion without direct confrontation.",
    items: ["Phone", "Flashlight", "Rope", "Whistle", "Chair", "Kitchen Knife"],
    pet: "Trained Guard Dog",
    timeLimit: 45,
    solution: "Primary Objective: Ensure safety first. Call police. Turn on lights. Use whistle and command dog to bark from safe distance. Avoid direct confrontation or unnecessary escalation."
    },

    {
    mode: "dark",
    title: "Stolen Wallet",
    scenario: "You are in a crowded marketplace when someone snatches an elderly person's wallet and runs. The area is busy and chaotic.",
    task: "Prevent escape and recover the wallet without direct confrontation.",
    items: ["Phone", "Whistle", "Rope", "Water Bottle", "Vegetable Cart", "Bicycle"],
    pet: "Trained Medium-Sized Dog",
    timeLimit: 35,
    solution: "Primary Objective: Delay and alert. Use whistle to draw attention. Command dog to block path safely. Use bicycle if needed. Avoid direct fight. Call police immediately."
    },

    {
    mode: "dark",
    title: "Rising Smoke",
    scenario: "You are hiking near a forest trail with your pet when you notice light smoke coming from dry bushes. Wind is increasing.",
    task: "Prevent escalation and ensure safety before situation worsens.",
    items: ["Phone", "Water Bottle", "Jacket", "Whistle", "Small Shovel", "Backpack"],
    pet: "Trained Rescue Dog",
    timeLimit: 40,
    solution: "Primary Objective: Alert authorities immediately. Use whistle and dog to alert hikers. Smother only very small flame if safe. Avoid approaching large spreading fire."
    },

    {
    mode: "dark",
    title: "Crowded Festival",
    scenario: "You are at a crowded festival with your pet. A crying child approaches you saying they are lost.",
    task: "Reunite the child safely with guardians without causing panic.",
    items: ["Phone", "Whistle", "Flashlight", "Nearby Stage", "Water Bottle", "Rope"],
    pet: "Calm Labrador",
    timeLimit: 50,
    solution: "Primary Objective: Ensure child's safety calmly. Comfort child. Contact event security. Use stage announcement if available. Avoid creating panic."
    },

    {
        mode: "dark",
        title: "Midnight Storage",
        scenario: "You are working late at a warehouse with your pet when the motion alarm goes off in a dim storage section.",
        task: "Secure the area and assess threat without placing yourself in danger.",
        items: ["Phone", "Flashlight", "Metal Trolley", "Whistle", "Rope", "Fire Extinguisher"],
        pet: "Trained German Shepherd",
        timeLimit: 50,
        solution: "Primary Objective: Ensure safety First. Call police. Use Visibility and Barriers. Command Dog to alear. Avoid entering dark area blindly."
    },

    {
        mode: "dark",
        title: "Apartment Warning",
        scenario: "You enter your apartment building and smell strong gas in the hallway. Some residents are inside their apartments.",
        task: "Prevent potential explosion and ensure safe evacuation.",
        items: ["Phone", "Flashlight", "Wet Towel", "Metal Doorstop", "Whistle", "Electric Switch"],
        pet: "Trained Alert Dog",
        timeLimit: 40,
        solution: "Primary Objective: Prevent ignition. Avoid electric switches. Call emergency services. Alert neighbors calmly. Ensure safe evacuation."
    },

    {
        mode: "dark",
        title: "Rising Water",
        scenario: "Heavy rain is causing water to rise near a rural shed containing farming tools and stored grain.",
        task: "Save as much valuable material as possible before the shed becomes inaccessible.",
        items: ["Rope", "Wooden Plank", "Wheelbarrow", "Shovel", "Waterproof Trap", "Phone"],
        pet: "Strong Horse and Small Goat",
        timeLimit: 45,
        solution: "Primary Objection: Move heavy items quickly. Use horse for transport. Use Wheelbarrow and trap for grain. Goat is minimally useful. Focus on speed and load capacity."
    },

    {
    mode: "dark",
    title: "River Crossing",
    scenario: "You reach a partially damaged wooden bridge. On the other side, a villager urgently needs medicine from your bag.",
    task: "Cross safely and deliver medicine without falling.",
    items: ["Rope", "Wooden Pole", "Small Ladder", "Backpack (Medicine)", "Whistle", "Phone"],
    pet: "Strong Horse and Light-Footed Goat",
    timeLimit: 45,
    solution: "Primary Objective: Cross safely. Use rope and pole for stability. Goat can test weak planks. Avoid using horse due to weight risk."
    },

    {
    mode: "dark",
    title: "Suspicious Call",
    scenario: "You receive a phone call claiming your electricity will be cut unless you verify details. You suspect it may be a scam.",
    task: "Verify legitimacy and protect yourself without sharing sensitive information.",
    items: ["Phone", "Notebook", "Electricity Bill", "Whistle", "Laptop", "Flashlight"],
    pet: "Talkative Parrot and Calm House Cat",
    timeLimit: 30,
    solution: "Primary Objective: Do not share personal information. Verify through official contact numbers on bill. Record details. Avoid emotional reaction."
    },

    {
    mode: "dark",
    title: "Last Departure",
    scenario: "At a crowded train platform, an elderly man drops his ticket and an unattended bag sits nearby as the train prepares to depart.",
    task: "Help the man, ensure safety, and avoid panic.",
    items: ["Phone", "Whistle", "Water Bottle", "Flashlight", "Rope", "Information Board"],
    pet: "Trained Labrador and Nervous Hamster",
    timeLimit: 25,
    solution: "Primary Objective: Ensure safety first. Inform railway staff about unattended bag. Calmly return ticket. Avoid touching suspicious bag. Labrador may assist; hamster irrelevant."
    },

    {
    mode: "professional",
    title: "Event Countdown",
    scenario: "You are leading preparation for a school sports event. Setup is incomplete and event begins soon.",
    task: "Assign roles efficiently and complete preparation.",
    items: ["Checklist", "Microphone", "Toolbox", "Rope", "Ladder"],
    people: [
        { name: "Arjun", strength: "Technically skilled", weakness: "Avoids physical labor" },
        { name: "Meera", strength: "Hardworking and consistent", weakness: "Not good with technical equipment" },
        { name: "Kabir", strength: "Creative decorator", weakness: "Poor time management" },
        { name: "Sana", strength: "Organized and disciplined", weakness: "Not physically strong" }
    ],
    pet: "Trained Border Collie",
    timeLimit: 60,
    solution: "Primary Objective: Delegate based on strengths. Arjun handles audio. Meera handles seating. Kabir decorates. Sana coordinates. Avoid mismatching strengths."
    },

    {
    mode: "professional",
    title: "Emergency Relief Camp",
    scenario: "After flooding, a temporary relief camp is being set up. Medical supplies are disorganized and volunteers are arguing.",
    task: "Organize the camp and assign roles to treat injured efficiently.",
    items: ["Medical Supply Boxes", "Clipboard", "Whistle", "First Aid Kit", "Portable Light", "Tent"],
    people: [
        { name: "Dr. Rohan", strength: "Medical expertise", weakness: "Short temper" },
        { name: "Meera", strength: "Calm under stress", weakness: "Limited medical training" },
        { name: "Kabir", strength: "Physically strong", weakness: "Disorganized" },
        { name: "Sana", strength: "Highly organized", weakness: "Avoids confrontation" }
    ],
    pet: "Trained Rescue Dog",
    timeLimit: 55,
    solution: "Primary Objective: Deliver medical care efficiently. Assign Dr. Rohan to treatment, Meera to patient management, Kabir to setup, Sana to organization. Manage conflict calmly."
    },

    {
    mode: "professional",
    title: "Sabotage or Mistake?",
    scenario: "The night before a robotics competition, a critical circuit component goes missing. Team tension rises.",
    task: "Recover the solution while protecting team trust before the deadline.",
    items: ["Lab Access Log", "CCTV Access", "Backup Circuit Parts", "Toolbox", "Whiteboard", "Phone"],
    people: [
        { name: "Arjun", strength: "Technically precise", weakness: "Overthinks under pressure" },
        { name: "Meera", strength: "Reliable and honest", weakness: "Gets emotional" },
        { name: "Kabir", strength: "Creative and fast worker", weakness: "Often blamed for mistakes" },
        { name: "Sana", strength: "Organized and observant", weakness: "Avoids confrontation" }
    ],
    pet: "Quiet Indoor Cat",
    timeLimit: 50,
    solution: "Primary Objective: Investigate with evidence. Check logs and CCTV. Rebuild using backup parts simultaneously. Avoid emotional accusations."
    },

    {
    mode: "professional",
    title: "Win at Any Cost?",
    scenario: "A sponsor hints at influencing judges in exchange for future funding. Your team is divided on what to do.",
    task: "Make a leadership decision that protects long-term credibility.",
    items: ["Sponsor Contact Card", "Phone", "Competition Rulebook", "Meeting Space", "Whiteboard", "Recording Device"],
    people: [
        { name: "Arjun", strength: "Logical thinker", weakness: "Risk-averse" },
        { name: "Meera", strength: "Ethically strong", weakness: "Emotional" },
        { name: "Kabir", strength: "Ambitious and bold", weakness: "Impulsive" },
        { name: "Sana", strength: "Long-term planner", weakness: "Overly cautious" }
    ],
    pet: "Calm House Dog",
    timeLimit: 55,
    solution: "Primary Objective: Protect integrity. Reject unethical influence. Consult rulebook and document interaction. Maintain internal unity."
    },

    {
    mode: "professional",
    title: "Underground Rescue",
    scenario: "Two trapped hikers are found in a cave with limited oxygen supply. Only one oxygen cylinder can be carried at a time.",
    task: "Coordinate rescue to maximize survival chances.",
    items: ["Oxygen Cylinder", "Rope", "Flashlight", "Medical Kit", "Walkie-Talkie", "Cave Map"],
    people: [
        { name: "Dr. Rohan", strength: "Medical expert", weakness: "Not physically strong" },
        { name: "Kabir", strength: "Physically strong", weakness: "Acts without thinking" },
        { name: "Sana", strength: "Strategic planner", weakness: "Slow under time pressure" },
        { name: "Meera", strength: "Emotionally supportive", weakness: "Limited technical skills" }
    ],
    pet: "Rescue Dog and Cave-Trained Ferret",
    timeLimit: 60,
    solution: "Primary Objective: Stabilize both hikers. Send medical expert first with oxygen. Use physical strength for transport. Coordinate timing. Avoid emotional bias."
    },

    {
    mode: "professional",
    title: "Double Emergency",
    scenario: "During a university event, a small fire starts backstage while a student faints in the audience.",
    task: "Control both emergencies efficiently without causing chaos.",
    items: ["Fire Extinguisher", "First Aid Kit", "Microphone", "Whistle", "Rope", "Emergency Exit Map"],
    people: [
        { name: "Dr. Rohan", strength: "Medical response", weakness: "Gets irritated under chaos" },
        { name: "Kabir", strength: "Physically strong", weakness: "Poor communicator" },
        { name: "Sana", strength: "Excellent organizer", weakness: "Avoids risky tasks" },
        { name: "Meera", strength: "Calm and empathetic", weakness: "Not physically strong" }
    ],
    pet: "Border Collie and House Cat",
    timeLimit: 50,
    solution: "Primary Objective: Respond in parallel. Assign fire control and medical aid simultaneously. Guide crowd calmly. Avoid handling everything alone."
    },

    {
    mode: "professional",
    title: "Campus Standstill",
    scenario: "Students are blocking the campus entrance in protest. Administration asks you to mediate.",
    task: "De-escalate tension and restore temporary order without suppressing voices unfairly.",
    items: ["Microphone", "Policy Document", "Meeting Hall", "Loudspeaker", "Water Crate", "Whiteboard"],
    people: [
        { name: "Arjun", strength: "Logical and analytical", weakness: "Appears cold in emotional discussions" },
        { name: "Meera", strength: "Empathetic communicator", weakness: "Avoids confrontation" },
        { name: "Kabir", strength: "Confident speaker", weakness: "Can sound aggressive" },
        { name: "Sana", strength: "Neutral and diplomatic", weakness: "Slow decision-maker" }
    ],
    pet: "Calm Labrador and Loud Parrot",
    timeLimit: 60,
    solution: "Primary Objective: Lower emotional intensity. Initiate empathetic dialogue. Move discussion indoors. Avoid aggressive confrontation."
    },
    
    {
    mode: "professional",
    title: "Damage Control",
    scenario: "An edited video from your campus event goes viral, causing public concern and media attention.",
    task: "Protect credibility while ensuring transparent communication.",
    items: ["Full Event Footage", "Press Contact List", "Conference Room", "Social Media Account", "Safety Protocol Document", "Projector"],
    people: [
        { name: "Arjun", strength: "Fact-focused and analytical", weakness: "Struggles with emotional messaging" },
        { name: "Meera", strength: "Calm and empathetic communicator", weakness: "Avoids strong confrontation" },
        { name: "Kabir", strength: "Confident and bold speaker", weakness: "Can overpromise" },
        { name: "Sana", strength: "Strategic planner", weakness: "Slow public responder" }
    ],
    pet: "Composed Labrador and Excitable Hamster",
    timeLimit: 55,
    solution: "Primary Objective: Control narrative with transparency. Verify facts. Present full footage. Use calm spokesperson. Avoid reactive messaging."
    },

    {
    mode: "professional",
    title: "Trust Broken",
    scenario: "Evidence confirms a team member leaked confidential strategy before a major competition.",
    task: "Respond to protect integrity and stabilize team before competition.",
    items: ["Screenshot Evidence", "Private Meeting Room", "Updated Strategy Draft", "Code of Conduct", "Phone", "Whiteboard"],
    people: [
        { name: "Arjun", strength: "Analytical thinker", weakness: "Emotionally distant" },
        { name: "Meera", strength: "Strong moral compass", weakness: "Gets hurt easily" },
        { name: "Kabir", strength: "Creative and bold", weakness: "Impulsive and careless" },
        { name: "Sana", strength: "Strategic and calm", weakness: "Avoids open conflict" }
    ],
    pet: "Calm House Dog and Silent Cat",
    timeLimit: 50,
    solution: "Primary Objective: Address betrayal privately and proportionally. Update strategy. Maintain team stability. Avoid public humiliation."
    },

    {
    mode: "professional",
    title: "The Power Grid Crisis",
    scenario: "A major storm damages the city power grid. Backup power can sustain only one: hospital, water plant, or communication network overnight.",
    task: "Choose a strategy that minimizes long-term harm and manage implementation.",
    items: ["Infrastructure Report", "Emergency Protocol Manual", "Satellite Phone", "Press Briefing Room", "Generator Routing System", "City Map"],
    people: [
        { name: "Dr. Rohan", strength: "Understands hospital needs", weakness: "Focused only on medical impact" },
        { name: "Sana", strength: "Systems-level planner", weakness: "Slow decision-maker" },
        { name: "Arjun", strength: "Data-driven analyst", weakness: "Detached from human emotion" },
        { name: "Meera", strength: "Community-focused communicator", weakness: "Emotionally influenced" }
    ],
    pet: "Rescue Dog and Homing Pigeon",
    timeLimit: 60,
    solution: "Primary Objective: Preserve life first. Prioritize hospital. Communicate transparently. Use data and planning for impact mitigation."
    },

    {
    mode: "professional",
    title: "Fire & Firewall",
    scenario: "A small fire starts in the server room while suspicious remote login activity is detected on the company database.",
    tasks: [
        "Safely evacuate all employees from the building.",
        "Secure company data and prevent remote breach."
    ],
    items: ["Fire Extinguisher", "Public Address System", "Master Access Key", "Network Firewall Panel", "External Backup Drive", "Emergency Exit Map"],
    people: [
        { name: "Arjun", strength: "Cybersecurity expert", weakness: "Poor crowd control" },
        { name: "Meera", strength: "Calm communicator", weakness: "Limited technical skills" },
        { name: "Kabir", strength: "Physically strong", weakness: "Impulsive" },
        { name: "Sana", strength: "Strategic planner", weakness: "Slow under stress" }
    ],
    pet: "Rescue Dog and Indoor Cat",
    timeLimit: 55,
    solution: "Primary Objective: Evacuate first, then secure data. Assign communication and technical roles appropriately. Sequence actions properly."
    },

    {
    mode: "professional",
    title: "Speech & Security",
    scenario: "Before a tech conference keynote, the main projector fails and a suspicious unattended package is found near the entrance.",
    tasks: [
        "Restore presentation capability for keynote speech.",
        "Ensure safety protocol for the unattended package."
    ],
    items: ["Backup Projector", "Toolkit", "Security Hotline Number", "Microphone", "Emergency Exit Map", "Flashlight"],
    people: [
        { name: "Arjun", strength: "Technical troubleshooting", weakness: "Poor public communication" },
        { name: "Meera", strength: "Calm communicator", weakness: "Limited technical skills" },
        { name: "Kabir", strength: "Confident speaker", weakness: "Can escalate tension" },
        { name: "Sana", strength: "Risk assessment", weakness: "Slow hands-on work" }
    ],
    pet: "Calm Labrador and Loud Parrot",
    timeLimit: 50,
    solution: "Primary Objective: Handle tasks in parallel. Assign technical fix and safety management simultaneously. Avoid panic and improper handling."
    },

    {
    mode: "professional",
    title: "Leak & Lockdown",
    scenario: "A chemical leak is detected in a warehouse just as an external safety audit team arrives unexpectedly.",
    tasks: [
        "Contain the chemical leak safely.",
        "Manage the audit inspection professionally."
    ],
    items: ["Absorbent Sand", "Safety Gloves", "Hazard Tape", "Audit Safety Checklist", "Storage Logs", "Emergency Ventilation Switch"],
    people: [
        { name: "Arjun", strength: "Technical chemical knowledge", weakness: "Poor communication" },
        { name: "Meera", strength: "Clear communicator", weakness: "Limited technical depth" },
        { name: "Kabir", strength: "Quick physical response", weakness: "Acts without thinking" },
        { name: "Sana", strength: "Documentation and compliance expert", weakness: "Slow reaction speed" }
    ],
    pet: "Warehouse Guard Dog and Curious House Cat",
    timeLimit: 55,
    solution: "Primary Objective: Contain leak transparently and maintain compliance. Safety first, documentation and communication second. Avoid hiding issues."
    },

    {
    mode: "professional",
    title: "Power Tradeoff",
    scenario: "Hospital backup generator can power either ICU or Surgical Wing, but not both fully.",
    tasks: [
        "Ensure life support systems remain operational.",
        "Enable scheduled emergency surgeries to proceed."
    ],
    items: ["Generator Control Panel", "Patient Criticality Report", "Surgery Schedule", "Backup Battery Modules", "Emergency Protocol Manual", "Public Communication System"],
    people: [
        { name: "Dr. Rohan", strength: "ICU specialist", weakness: "Focused only on critical patients" },
        { name: "Arjun", strength: "Data-driven analysis", weakness: "Detached emotionally" },
        { name: "Meera", strength: "Family liaison communicator", weakness: "Emotionally influenced" },
        { name: "Sana", strength: "System-level planner", weakness: "Slow to decide" }
    ],
    pet: "Therapy Dog and Carrier Pigeon",
    timeLimit: 60,
    solution: "Primary Objective: Preserve immediate life. Prioritize ICU power. Communicate transparently about surgery rescheduling."
    },

    {
    mode: "professional",
    title: "Purity & Panic",
    scenario: "Minor contamination detected in a water plant while social media rumors spread panic.",
    tasks: [
        "Fix contamination in the affected filtration unit.",
        "Calm public panic regarding water safety."
    ],
    items: ["Water Quality Test Report", "Repair Toolkit", "Press Briefing Room", "Social Media Account", "Public Alert System", "Engineering Manual"],
    people: [
        { name: "Arjun", strength: "Technical diagnostics", weakness: "Poor public tone" },
        { name: "Meera", strength: "Public communication", weakness: "Avoids technical details" },
        { name: "Kabir", strength: "Quick action", weakness: "Can exaggerate urgency" },
        { name: "Sana", strength: "Strategic planning", weakness: "Slow public reaction" }
    ],
    pet: "Calm Labrador and Noisy Parrot",
    timeLimit: 55,
    solution: "Primary Objective: Fix contamination and communicate transparently. Protect public trust through calm, evidence-based messaging."
    },

    {
    mode: "professional",
    title: "Contain or Continue?",
    scenario: "A suspected internal data breach is detected while a major client presentation is happening live on the same network.",
    tasks: [
        "Address the suspected internal data breach.",
        "Ensure successful completion of the live client presentation."
    ],
    items: ["Network Monitoring Dashboard", "Emergency Isolation Switch", "External Backup Server", "Client Presentation Slides", "Incident Response Manual", "Internal Messaging System"],
    people: [
        { name: "Arjun", strength: "Cybersecurity specialist", weakness: "Takes extreme measures quickly" },
        { name: "Meera", strength: "Client-facing communicator", weakness: "Limited technical insight" },
        { name: "Kabir", strength: "Quick technical executor", weakness: "Impatient under pressure" },
        { name: "Sana", strength: "Risk assessment and planning", weakness: "Slow decisions" }
    ],
    pet: "Calm Office Dog and Silent Cat",
    timeLimit: 60,
    solution: "Primary Objective: Assess before acting. Contain breach strategically without immediate total shutdown. Use backup systems and controlled communication."
    },

    {
    mode: "professional",
    title: "Responsibility Line",
    scenario: "Your department overspent its budget during crisis handling. Senior management demands accountability.",
    tasks: [
        "Respond to senior management regarding the budget overspend.",
        "Protect long-term team morale and operational stability."
    ],
    items: ["Financial Report", "Email System", "Meeting Room", "Crisis Justification Documents", "Performance Metrics Report", "Company Policy Manual"],
    people: [
        { name: "Arjun", strength: "Financial analysis", weakness: "Blunt communicator" },
        { name: "Meera", strength: "Team morale builder", weakness: "Emotionally protective" },
        { name: "Kabir", strength: "Operational executor", weakness: "Sensitive to criticism" },
        { name: "Sana", strength: "Strategic framing", weakness: "Avoids confrontation" }
    ],
    pet: "Loyal Office Dog and Quiet Hamster",
    timeLimit: 55,
    solution: "Primary Objective: Take responsibility while presenting justification. Protect team morale through accountability and transparency."
    },

    {
    mode: "professional",
    title: "Dark City",
    scenario: "A transformer explosion causes citywide blackout. Traffic lights fail, hospital backup unstable, and misinformation spreads.",
    tasks: [
        "Stabilize traffic intersections to prevent accidents.",
        "Ensure hospital backup systems remain operational.",
        "Address public misinformation spreading online."
    ],
    items: ["Emergency Traffic Units", "Hospital Diagnostics Report", "Generator Routing Console", "Public Broadcast System", "Social Media Dashboard", "City Operations Map"],
    people: [
        { name: "Arjun", strength: "Technical systems analysis", weakness: "Poor public messaging" },
        { name: "Meera", strength: "Calm public communicator", weakness: "Limited technical skill" },
        { name: "Kabir", strength: "Fast field response", weakness: "Reckless under stress" },
        { name: "Sana", strength: "Strategic operations planner", weakness: "Slow initial response" }
    ],
    pet: "Rescue Dog and Homing Pigeon",
    timeLimit: 60,
    solution: "Primary Objective: Delegate effectively. Manage traffic, hospital systems, and public communication in parallel. Prevent harm and panic."
    },

    {
    mode: "professional",
    title: "Sabotage in the System",
    scenario: "During blackout response, system routing data is altered internally. Possible sabotage while operations must continue.",
    tasks: [
        "Maintain city operations and prevent system collapse.",
        "Identify and contain internal sabotage without causing panic."
    ],
    items: ["Access Log Records", "CCTV Monitor", "System Override Key", "Internal Messaging System", "Incident Report Template", "Backup Routing Module"],
    people: [
        { name: "Arjun", strength: "System diagnostics", weakness: "Suspicious mindset" },
        { name: "Meera", strength: "Team stabilizer", weakness: "Avoids confrontation" },
        { name: "Kabir", strength: "Quick executor", weakness: "Impatient under accusation" },
        { name: "Sana", strength: "Process-oriented investigator", weakness: "Slow under pressure" }
    ],
    pet: "Alert Guard Dog and Silent Cat",
    timeLimit: 60,
    solution: "Primary Objective: Stabilize systems first. Conduct quiet evidence-based investigation. Avoid public accusations."
    },

    {
    mode: "professional",
    title: "Sabotage in the System",
    scenario: "During blackout response, system routing data is altered internally. Possible sabotage while operations must continue.",
    tasks: [
        "Maintain city operations and prevent system collapse.",
        "Identify and contain internal sabotage without causing panic."
    ],
    items: ["Access Log Records", "CCTV Monitor", "System Override Key", "Internal Messaging System", "Incident Report Template", "Backup Routing Module"],
    people: [
        { name: "Arjun", strength: "System diagnostics", weakness: "Suspicious mindset" },
        { name: "Meera", strength: "Team stabilizer", weakness: "Avoids confrontation" },
        { name: "Kabir", strength: "Quick executor", weakness: "Impatient under accusation" },
        { name: "Sana", strength: "Process-oriented investigator", weakness: "Slow under pressure" }
    ],
    pet: "Alert Guard Dog and Silent Cat",
    timeLimit: 60,
    solution: "Primary Objective: Stabilize systems first. Conduct quiet evidence-based investigation. Avoid public accusations."
    },

    {
    mode: "professional",
    title: "Key for Cooperation",
    scenario: "A locked supply room contains critical equipment. Sana refuses to share access code unless safety documentation is updated.",
    tasks: [
        "Access the locked supply room.",
        "Prepare emergency response setup."
    ],
    items: ["Safety Protocol Document", "Update Checklist", "Emergency Equipment List", "Toolbox", "Communication Radio", "Flashlight"],
    people: [
        {
            name: "Sana",
            strength: "Process compliance expert",
            weakness: "Stubborn about procedures",
            demand: "Updated Safety Protocol Document",
            gives: "Master Access Code"
        },
        {
            name: "Kabir",
            strength: "Physically capable",
            weakness: "Impatient"
        },
        {
            name: "Meera",
            strength: "Calm communicator",
            weakness: "Avoids conflict"
        },
        {
            name: "Arjun",
            strength: "Technical execution",
            weakness: "Not persuasive"
        }
    ],
    pet: "Guard Dog",
    timeLimit: 55,
    solution: "Primary Objective: Satisfy Sana’s documentation requirement first to obtain access code. Then proceed with setup efficiently."
    },

    {
    mode: "professional",
    title: "Power Through People",
    scenario: "Backup generator must be started. Arjun needs encrypted password. Sana will only provide it after receiving signed authorization.",
    tasks: [
        "Start the backup generator system.",
        "Restore lab operations before experiment fails."
    ],
    items: ["Official Authorization Form", "Pen", "Generator Control Console", "Lab Operations Manual", "Internal Communication Tablet", "Tool Kit"],
    people: [
        {
            name: "Arjun",
            strength: "Generator software expert",
            weakness: "Won’t act without credentials",
            demand: "Encrypted System Password"
        },
        {
            name: "Sana",
            strength: "Security compliance officer",
            weakness: "Strict rule follower",
            demand: "Signed Authorization Form",
            gives: "Encrypted System Password"
        },
        {
            name: "Meera",
            strength: "Diplomatic communicator",
            weakness: "Avoids confrontation"
        },
        {
            name: "Kabir",
            strength: "Quick physical operator",
            weakness: "Limited technical knowledge"
        }
    ],
    pet: "Alert Guard Dog",
    timeLimit: 60,
    solution: "Primary Objective: Complete the authorization chain. Provide signed form to Sana, get password, then enable Arjun to configure generator."
    },

    {
    mode: "professional",
    title: "One Badge, Two Demands",
    scenario: "Only one temporary access badge is available. Both Arjun and Kabir demand it for different critical areas.",
    tasks: [
        "Stabilize the digital server system.",
        "Secure the mechanical control chamber."
    ],
    items: ["Temporary Access Badge", "System Diagnostic Tablet", "Mechanical Toolkit", "Incident Checklist", "Internal Communication Radio", "Emergency Override Phone Line"],
    people: [
        {
            name: "Arjun",
            strength: "Server diagnostics expert",
            weakness: "Impatient if blocked",
            demand: "Temporary Access Badge"
        },
        {
            name: "Kabir",
            strength: "Mechanical systems operator",
            weakness: "Emotionally reactive",
            demand: "Temporary Access Badge"
        },
        {
            name: "Sana",
            strength: "Prioritization strategist",
            weakness: "Slow decision-making"
        },
        {
            name: "Meera",
            strength: "Mediator",
            weakness: "Avoids firm decisions"
        }
    ],
    pet: "Calm Labrador",
    timeLimit: 55,
    solution: "Primary Objective: Prioritize higher-impact task. Allocate badge strategically based on risk severity. Avoid emotional bias."
    },

    {
    mode: "professional",
    title: "Leverage in Crisis",
    scenario: "A cooling unit is overheating. Arjun demands access to his promotion review file before helping, though it is unrelated to the emergency.",
    tasks: [
        "Recalibrate the overheating cooling unit.",
        "Maintain team fairness and prevent opportunistic behavior."
    ],
    items: ["Cooling System Control Panel", "Thermal Diagnostics Report", "Promotion Review File", "HR Policy Manual", "Incident Documentation Form", "Communication Tablet"],
    people: [
        {
            name: "Arjun",
            strength: "Cooling system expert",
            weakness: "Using leverage for personal gain",
            demand: "Promotion Review File"
        },
        {
            name: "Meera",
            strength: "Fair mediator",
            weakness: "Avoids conflict"
        },
        {
            name: "Kabir",
            strength: "Quick responder",
            weakness: "Not technically capable here"
        },
        {
            name: "Sana",
            strength: "Policy-driven decision maker",
            weakness: "Rigid under stress"
        }
    ],
    pet: "Guard Dog",
    timeLimit: 50,
    solution: "Primary Objective: Refuse unrelated demand. Reinforce professional responsibility using policy. Resolve cooling crisis without rewarding manipulation."
    },

    {
    mode: "professional",
    title: "Limited Tools, Critical Tasks",
    scenario: "Three specialists need high-performance laptops, but only two are available during crisis data analysis.",
    tasks: [
        "Process incoming crisis data accurately.",
        "Deploy actionable response plan based on processed insights."
    ],
    items: ["High-Performance Laptop (2 units)", "Standard Tablet", "Whiteboard", "Data Stream Console", "Communication Headset", "Operations Dashboard"],
    people: [
        {
            name: "Arjun",
            strength: "Advanced data modeling",
            weakness: "Needs high computing power",
            demand: "High-Performance Laptop"
        },
        {
            name: "Sana",
            strength: "Risk mapping and planning",
            weakness: "Slower without strong system",
            demand: "High-Performance Laptop"
        },
        {
            name: "Kabir",
            strength: "Field telemetry decoding",
            weakness: "Can improvise manually",
            demand: "High-Performance Laptop"
        },
        {
            name: "Meera",
            strength: "Coordination and communication",
            weakness: "Not technical"
        }
    ],
    pet: "Calm Labrador",
    timeLimit: 60,
    solution: "Primary Objective: Allocate laptops to highest dependency roles. Allow adaptable member to use alternative tools. Optimize impact."
    },

    {
    mode: "professional",
    title: "Silent Holder",
    scenario: "A secure vault requires a physical encryption token that is not listed in the inventory, but logs show it was issued earlier.",
    tasks: [
        "Retrieve the encryption token.",
        "Access the secure vault and restore configuration."
    ],
    items: ["Access Log Records", "Security Terminal", "Incident Checklist", "Internal Messaging Tablet", "Configuration Backup Drive", "Authentication Console"],
    people: [
        {
            name: "Sana",
            strength: "Security compliance officer",
            weakness: "Does not volunteer information unless asked",
            gives: "Physical Encryption Token"
        },
        {
            name: "Arjun",
            strength: "Vault configuration expert",
            weakness: "Cannot proceed without token"
        },
        {
            name: "Meera",
            strength: "Diplomatic communicator",
            weakness: "Avoids direct questioning"
        },
        {
            name: "Kabir",
            strength: "Fast executor",
            weakness: "Jumps to conclusions"
        }
    ],
    pet: "Alert Guard Dog",
    timeLimit: 55,
    solution: "Primary Objective: Use logs to identify token holder. Approach Sana calmly. Retrieve token, then allow Arjun to restore configuration."
    },

    {
    mode: "professional",
    title: "No More",
    scenario: "Arjun, the top technical specialist, refuses to continue due to burnout during crisis operations.",
    tasks: [
        "Complete the system recalibration.",
        "Prevent long-term morale collapse within the team."
    ],
    items: ["System Calibration Console", "Performance Metrics Report", "Team Rest Schedule", "Communication Tablet", "Energy Drink Supply", "Incident Log"],
    people: [
        {
            name: "Arjun",
            strength: "Critical technical expert",
            weakness: "Burned out and emotionally exhausted"
        },
        {
            name: "Meera",
            strength: "Emotional support and morale",
            weakness: "Not technically capable"
        },
        {
            name: "Sana",
            strength: "Strategic planner",
            weakness: "Limited hands-on execution"
        },
        {
            name: "Kabir",
            strength: "Can assist technically under guidance",
            weakness: "Not expert-level"
        }
    ],
    pet: "Therapy Dog",
    timeLimit: 60,
    solution: "Primary Objective: Address burnout empathetically. Share workload temporarily. Preserve morale while completing task."
    },

    {
    mode: "professional",
    title: "Blood vs Balance",
    scenario: "A critical briefing must be delivered. Meera, your close relative, volunteers despite possible emotional instability.",
    tasks: [
        "Deliver an effective external strategic briefing.",
        "Maintain fairness perception within the team."
    ],
    items: ["Strategic Briefing Slides", "Performance Metrics Report", "Rehearsal Room", "Communication Headset", "Public Presentation System", "Team Code of Conduct"],
    people: [
        {
            name: "Meera",
            strength: "Charismatic communicator",
            weakness: "Emotionally reactive under pressure"
        },
        {
            name: "Arjun",
            strength: "Data-accurate presenter",
            weakness: "Cold delivery tone"
        },
        {
            name: "Sana",
            strength: "Balanced and structured speaker",
            weakness: "Less dynamic"
        },
        {
            name: "Kabir",
            strength: "Confident presence",
            weakness: "Can overstate facts"
        }
    ],
    pet: "Calm Therapy Dog",
    timeLimit: 55,
    solution: "Primary Objective: Assign based on merit, not relationship. Ensure transparency and role balance to preserve fairness."
    },

    {
    mode: "professional",
    title: "One Expert, Two Fronts",
    scenario: "Two crisis teams require Arjun simultaneously: one for infrastructure stabilization and one for cybersecurity investigation.",
    tasks: [
        "Ensure infrastructure stabilization continues effectively.",
        "Ensure cybersecurity threat is addressed without delay."
    ],
    items: ["Infrastructure Diagnostics Console", "Cybersecurity Monitoring Dashboard", "Internal Scheduling Board", "Communication Radios", "Risk Impact Report", "Emergency Escalation Protocol"],
    people: [
        {
            name: "Arjun",
            strength: "Advanced systems & cybersecurity expert",
            weakness: "Cannot multitask high-level operations simultaneously"
        },
        {
            name: "Sana",
            strength: "Strategic task allocation",
            weakness: "Conservative decision-making"
        },
        {
            name: "Kabir",
            strength: "Can assist infrastructure physically",
            weakness: "Limited cyber skill"
        },
        {
            name: "Meera",
            strength: "Team mediator",
            weakness: "Avoids hard tradeoffs"
        }
    ],
    pet: "Alert Guard Dog",
    timeLimit: 60,
    solution: "Primary Objective: Allocate Arjun based on highest-impact risk. Structure secondary team accordingly. Avoid splitting critical expertise inefficiently."
    },

    {
    mode: "professional",
    title: "All or Nothing",
    scenario: "Cascading system failure: server unstable, field infrastructure at risk, and oversight authorities demand compliance briefing.",
    tasks: [
        "Stabilize the main operations server.",
        "Secure field infrastructure systems.",
        "Deliver compliance briefing to oversight authorities."
    ],
    items: ["Master Console Access Terminal", "High-Performance Laptop", "Signed Authorization Form", "Emergency Override Panel", "Compliance Report Template", "Risk Impact Dashboard"],
    people: [
        {
            name: "Arjun",
            strength: "Core systems expert",
            weakness: "Refuses to work without full console access",
            demand: "Master Console Access Terminal"
        },
        {
            name: "Sana",
            strength: "Security authority",
            weakness: "Will not release override credentials without Signed Authorization Form",
            demand: "Signed Authorization Form",
            gives: "Emergency Override Credentials"
        },
        {
            name: "Kabir",
            strength: "Infrastructure executor",
            weakness: "Needs computing support",
            demand: "High-Performance Laptop"
        },
        {
            name: "Meera",
            strength: "Public & compliance communicator",
            weakness: "Emotionally pressured by public concern"
        }
    ],
    pet: "Calm Therapy Dog and Alert Guard Dog",
    timeLimit: 60,
    solution: "Primary Objective: Unlock chain via authorization, stabilize core system, allocate scarce resources strategically, and deliver structured compliance briefing."
    },

    {
    mode: "professional",
    title: "Budget Under Pressure",
    scenario: "A temporary emergency clinic must be established after an accident.",
    tasks: [
        "Provide immediate medical care.",
        "Establish organized triage system."
    ],
    budget: 1000,
    items: ["Medical Supply Kit", "Portable Beds", "Triage Forms", "Communication Radio", "Basic First Aid Station"],
    people: [
        {
            name: "Dr. Rohan",
            role: "Doctor",
            strength: "Emergency medical expert",
            weakness: "Expensive but efficient",
            cost: 600,
            acceptsMoney: true
        },
        {
            name: "Nurse Kavya",
            role: "Nurse",
            strength: "Efficient triage organizer",
            weakness: "Needs medical supervision",
            cost: 300,
            acceptsMoney: true
        },
        {
            name: "Volunteer Aman",
            role: "Community Volunteer",
            strength: "Works selflessly",
            weakness: "Limited medical skill",
            acceptsMoney: false
        },
        {
            name: "Local Politician",
            role: "Political Leader",
            strength: "Can mobilize local support quickly",
            weakness: "May demand visibility",
            cost: 200,
            acceptsMoney: true
        }
    ],
    pet: "Therapy Dog",
    timeLimit: 60,
    solution: "Primary Objective: Allocate budget to maximize medical effectiveness. Hire doctor and nurse, leverage volunteer support."
},

{
    mode: "professional",
    title: "Power or Payment?",
    scenario: "A contagious illness requires quarantine enforcement and medical supply distribution.",
    tasks: [
        "Enforce temporary quarantine zone.",
        "Ensure medical supply distribution continues."
    ],
    budget: 800,
    items: ["Medical Supply Crates", "Distribution Schedule", "Emergency Vehicle", "Communication System", "Legal Advisory Document"],
    people: [
        {
            name: "Dr. Rohan",
            role: "Medical Officer",
            strength: "Understands outbreak containment",
            weakness: "Not authoritative legally",
            cost: 400,
            acceptsMoney: true
        },
        {
            name: "Mayor Singh",
            role: "Political Leader",
            strength: "Can legally enforce quarantine immediately",
            weakness: "Requires formal justification",
            acceptsMoney: false
        },
        {
            name: "Private Security Team",
            role: "Security Contractors",
            strength: "Immediate physical enforcement",
            weakness: "Expensive and may escalate tension",
            cost: 600,
            acceptsMoney: true
        },
        {
            name: "Volunteer Network",
            role: "Community Group",
            strength: "Helps distribute supplies",
            weakness: "Unstructured coordination",
            acceptsMoney: false
        }
    ],
    pet: "Alert Guard Dog",
    timeLimit: 60,
    solution: "Primary Objective: Use legal authority over expensive enforcement. Hire medical expertise and leverage volunteers to conserve budget."
},

{
    mode: "professional",
    title: "Under the Table",
    scenario: "Bridge repair approval required urgently. Regulatory officer offers fast-track approval in exchange for unofficial payment.",
    tasks: [
        "Secure construction approval for bridge repair.",
        "Maintain ethical and legal integrity of operations."
    ],
    budget: 900,
    items: ["Official Construction Proposal", "Compliance Documentation", "Public Safety Report", "Legal Advisory Document", "Press Communication Kit"],
    people: [
        {
            name: "Regulatory Officer",
            role: "Approval Authority",
            strength: "Can fast-track bridge approval",
            weakness: "Requests unofficial payment",
            cost: 300,
            acceptsMoney: true
        },
        {
            name: "Dr. Rohan",
            role: "Public Safety Expert",
            strength: "Can certify urgency legally",
            weakness: "Needs documentation",
            cost: 400,
            acceptsMoney: true
        },
        {
            name: "Sana",
            role: "Compliance Officer",
            strength: "Ensures legal processing",
            weakness: "Slower but clean",
            acceptsMoney: false
        },
        {
            name: "Volunteer Civil Team",
            role: "Engineering Assistants",
            strength: "Help prepare documentation",
            weakness: "Limited authority",
            acceptsMoney: false
        }
    ],
    pet: "Calm Labrador",
    timeLimit: 60,
    solution: "Primary Objective: Reject bribery. Use legal certification and compliance channels to secure approval ethically."
},

{
    mode: "professional",
    title: "Half the Money",
    scenario: "Emergency relief budget reduced from $1200 to $700 during flood response.",
    tasks: [
        "Ensure safe temporary shelter setup.",
        "Maintain food and medical access for affected families."
    ],
    budget: 700,
    items: ["Shelter Tents", "Food Supply Crates", "Portable Water Filters", "Basic Medical Kits", "Emergency Transport Van"],
    people: [
        {
            name: "Dr. Rohan",
            role: "Medical Officer",
            strength: "Handles emergency medical care",
            weakness: "High cost",
            cost: 500,
            acceptsMoney: true
        },
        {
            name: "Logistics Officer",
            role: "Supply Coordinator",
            strength: "Efficient distribution",
            weakness: "Moderate cost",
            cost: 300,
            acceptsMoney: true
        },
        {
            name: "Volunteer Group",
            role: "Community Helpers",
            strength: "Assist in shelter setup",
            weakness: "Less structured",
            acceptsMoney: false
        },
        {
            name: "Local Business Owner",
            role: "Food Supplier",
            strength: "Can provide discounted food bulk",
            weakness: "Limited stock",
            cost: 200,
            acceptsMoney: true
        }
    ],
    pet: "Therapy Dog",
    timeLimit: 60,
    solution: "Primary Objective: Reallocate under reduced budget. Prioritize logistics and food support while leveraging volunteers."
},

{
    mode: "professional",
    title: "Too Good to Be True",
    scenario: "Structural repair required urgently. Certified supplier is expensive but safe. Unregistered supplier is cheap but risky.",
    tasks: [
        "Repair structural damage safely.",
        "Stay within budget while avoiding future legal risk."
    ],
    budget: 1000,
    items: ["Structural Damage Report", "Safety Compliance Checklist", "Legal Advisory Document", "Inspection Approval Form", "Project Timeline Sheet"],
    people: [
        {
            name: "Certified Supplier",
            role: "Licensed Contractor",
            strength: "Meets safety standards",
            weakness: "High cost",
            cost: 900,
            acceptsMoney: true
        },
        {
            name: "Unregistered Supplier",
            role: "Independent Vendor",
            strength: "Cheap and fast delivery",
            weakness: "No safety guarantee",
            cost: 500,
            acceptsMoney: true
        },
        {
            name: "Sana",
            role: "Compliance Officer",
            strength: "Ensures legal compliance",
            weakness: "Delays project slightly",
            acceptsMoney: false
        },
        {
            name: "Dr. Rohan",
            role: "Public Safety Inspector",
            strength: "Certifies safety conditions",
            weakness: "Requires proper materials",
            cost: 300,
            acceptsMoney: true
        }
    ],
    pet: "Guard Dog",
    timeLimit: 60,
    solution: "Primary Objective: Prioritize certified safe materials. Avoid risky shortcuts even if cheaper."
},

{
    mode: "professional",
    title: "Pay or Lose",
    scenario: "Arjun threatens to leave mid-cybersecurity crisis unless compensation is increased by $400.",
    tasks: [
        "Contain the active cybersecurity threat.",
        "Maintain operational financial balance."
    ],
    budget: 1200,
    items: ["Cybersecurity Monitoring Dashboard", "Incident Response Toolkit", "Budget Allocation Sheet", "HR Policy Document", "Emergency Response Protocol"],
    people: [
        {
            name: "Arjun",
            role: "Cybersecurity Specialist",
            strength: "Elite threat containment",
            weakness: "Threatens to leave without $400 adjustment",
            cost: 400,
            acceptsMoney: true
        },
        {
            name: "Junior Analyst",
            role: "Cyber Assistant",
            strength: "Can assist basic monitoring",
            weakness: "Not capable alone",
            cost: 200,
            acceptsMoney: true
        },
        {
            name: "Sana",
            role: "Budget Strategist",
            strength: "Can restructure budget allocation",
            weakness: "Conservative spending",
            acceptsMoney: false
        },
        {
            name: "External Consultant",
            role: "Cybersecurity Firm",
            strength: "Strong backup expertise",
            weakness: "Very expensive",
            cost: 800,
            acceptsMoney: true
        }
    ],
    pet: "Alert Guard Dog",
    timeLimit: 60,
    solution: "Primary Objective: Retain internal expertise at lower cost than replacement. Balance budget while containing threat."
},

{
    mode: "professional",
    title: "Money with Strings",
    scenario: "A donor offers $800 for rebuilding a community center but demands political branding for 3 years.",
    tasks: [
        "Complete rebuilding of the community center.",
        "Protect institutional neutrality and public trust."
    ],
    budget: 600,
    items: ["Community Center Blueprint", "Construction Timeline", "Legal Advisory Document", "Public Feedback Report", "Sponsorship Agreement Draft"],
    people: [
        {
            name: "Wealthy Donor",
            role: "Private Sponsor",
            strength: "Provides $800 funding",
            weakness: "Demands political branding",
            cost: 0,
            acceptsMoney: false
        },
        {
            name: "Sana",
            role: "Policy Advisor",
            strength: "Protects neutrality",
            weakness: "May delay funding decisions",
            acceptsMoney: false
        },
        {
            name: "Community Volunteers",
            role: "Local Builders",
            strength: "Reduce construction cost",
            weakness: "Slower progress",
            acceptsMoney: false
        },
        {
            name: "Certified Contractor",
            role: "Licensed Builder",
            strength: "Fast rebuild",
            weakness: "Expensive",
            cost: 1000,
            acceptsMoney: true
        }
    ],
    pet: "Therapy Dog",
    timeLimit: 60,
    solution: "Primary Objective: Avoid long-term political dependency. Negotiate limited sponsorship or leverage volunteers to preserve neutrality."
},

{
    mode: "professional",
    title: "Fear Costs Money",
    scenario: "Public outrage demands expensive water system upgrades despite system being stable and safe.",
    tasks: [
        "Maintain water system safety and stability.",
        "Calm public outrage without unnecessary financial waste."
    ],
    budget: 1500,
    items: ["Safety Inspection Report", "Public Town Hall Space", "Engineering Blueprint", "Media Briefing Kit", "Budget Planning Sheet"],
    people: [
        {
            name: "Chief Engineer",
            role: "Infrastructure Expert",
            strength: "Understands system stability",
            weakness: "Poor public communication",
            cost: 500,
            acceptsMoney: true
        },
        {
            name: "Media Consultant",
            role: "Public Relations Specialist",
            strength: "Calms public panic effectively",
            weakness: "Expensive",
            cost: 800,
            acceptsMoney: true
        },
        {
            name: "Sana",
            role: "Policy Strategist",
            strength: "Long-term budget planning",
            weakness: "Slow public reassurance",
            acceptsMoney: false
        },
        {
            name: "Community Leaders",
            role: "Local Representatives",
            strength: "Trusted by citizens",
            weakness: "Limited technical knowledge",
            acceptsMoney: false
        }
    ],
    pet: "Calm Therapy Dog",
    timeLimit: 60,
    solution: "Primary Objective: Use transparency and community engagement instead of reactionary spending."
},

{
    mode: "professional",
    title: "Bid or Break",
    scenario: "Emergency oxygen supply is available through a live auction. Multiple cities are bidding.",
    tasks: [
        "Secure enough oxygen supply for hospital patients.",
        "Maintain financial capacity for follow-up emergency operations."
    ],
    budget: 2000,
    items: ["Hospital Oxygen Demand Report", "Emergency Fund Allocation Sheet", "Communication Hotline", "Risk Severity Dashboard", "Legal Emergency Procurement Clause"],
    people: [
        {
            name: "Supplier Representative",
            role: "Emergency Oxygen Vendor",
            strength: "Immediate delivery",
            weakness: "Auction-based price escalation",
            acceptsMoney: true
        },
        {
            name: "Dr. Rohan",
            role: "Hospital Director",
            strength: "Knows exact oxygen requirement",
            weakness: "Emotionally pressured",
            acceptsMoney: false
        },
        {
            name: "Sana",
            role: "Financial Strategist",
            strength: "Budget ceiling discipline",
            weakness: "Risk-averse",
            acceptsMoney: false
        },
        {
            name: "Regional Coordinator",
            role: "Inter-city Liaison",
            strength: "Can negotiate shared procurement",
            weakness: "Requires quick decision",
            acceptsMoney: false
        }
    ],
    pet: "Alert Guard Dog",
    timeLimit: 60,
    solution: "Primary Objective: Calculate minimum requirement, set bidding ceiling, negotiate shared procurement if possible."
},

{
    mode: "professional",
    title: "Deficit of Trust",
    scenario: "Post-storm recovery requires hospital reopening, power restoration, and public financial transparency under tight budget constraints.",
    tasks: [
        "Restore critical hospital operations.",
        "Stabilize power infrastructure.",
        "Preserve long-term public trust."
    ],
    budget: 1000,
    items: ["Emergency Repair Blueprint", "Treasury Balance Sheet", "Public Transparency Report", "Legal Advisory Document", "Power Restoration Plan"],
    people: [
        {
            name: "Private Contractor",
            role: "Fast Infrastructure Restorer",
            strength: "Quick hospital and power repair",
            weakness: "Very expensive",
            cost: 900,
            acceptsMoney: true
        },
        {
            name: "Public Engineer",
            role: "Government Infrastructure Specialist",
            strength: "Affordable and reliable",
            weakness: "Slower repair timeline",
            cost: 400,
            acceptsMoney: true
        },
        {
            name: "Political Donor",
            role: "Private Sponsor",
            strength: "Provides $800 funding",
            weakness: "Requires public endorsement",
            acceptsMoney: false
        },
        {
            name: "Sana",
            role: "Transparency Officer",
            strength: "Maintains public financial trust",
            weakness: "May resist conditional funding",
            acceptsMoney: false
        }
    ],
    pet: "Therapy Dog and Guard Dog",
    timeLimit: 60,
    solution: "Primary Objective: Restore services responsibly without compromising institutional trust. Avoid conditional endorsement funding. Use affordable, transparent restoration strategy."
},

{
    mode: "professional",
    title: "Improvised Power",
    scenario: "Storm outage disables rural medical facility. Emergency power must be restored.",
    tasks: [
        "Restore temporary power to critical medical devices.",
        "Ensure safety of patients during outage."
    ],
    budget: 500,
    items: ["Portable Generator", "Empty Fuel Can", "Fuel Barrel", "Extension Cable", "Circuit Stabilizer", "Flashlights"],
    combinations: [
        {
            inputs: ["Empty Fuel Can", "Fuel Barrel"],
            output: "Filled Fuel Can"
        },
        {
            inputs: ["Portable Generator", "Filled Fuel Can"],
            output: "Operational Generator"
        },
        {
            inputs: ["Operational Generator", "Circuit Stabilizer"],
            output: "Stabilized Emergency Power Unit"
        }
    ],
    people: [
        {
            name: "Rural Engineer",
            role: "Mechanical Technician",
            strength: "Can assemble generator systems",
            weakness: "Needs proper fuel supply",
            cost: 300,
            acceptsMoney: true
        },
        {
            name: "Volunteer Nurse",
            role: "Medical Assistant",
            strength: "Handles patient care",
            weakness: "Not technical",
            acceptsMoney: false
        }
    ],
    pet: "Therapy Dog",
    timeLimit: 60,
    solution: "Combine fuel, generator, and stabilizer to create safe emergency power before activating devices."
},

{
    mode: "professional",
    title: "Signal in the Storm",
    scenario: "Mountain town communication lost after landslide. Emergency contact must be restored.",
    tasks: [
        "Re-establish emergency communication with rescue teams.",
        "Coordinate evacuation instructions."
    ],
    budget: 700,
    items: ["Broken Radio Unit", "Spare Antenna", "Copper Wire", "Car Battery", "Electrical Tape", "Printed Evacuation Maps"],
    combinations: [
        {
            inputs: ["Broken Radio Unit", "Spare Antenna"],
            output: "Structurally Repaired Radio"
        },
        {
            inputs: ["Car Battery", "Copper Wire"],
            output: "Improvised Power Source"
        },
        {
            inputs: ["Structurally Repaired Radio", "Improvised Power Source"],
            output: "Operational Emergency Radio"
        }
    ],
    people: [
        {
            name: "Field Technician",
            role: "Radio Specialist",
            strength: "Can repair communication hardware",
            weakness: "Needs proper power source",
            cost: 400,
            acceptsMoney: true
        },
        {
            name: "Local Volunteer",
            role: "Community Guide",
            strength: "Knows mountain routes",
            weakness: "Not technical",
            acceptsMoney: false
        }
    ],
    pet: "Rescue Dog",
    timeLimit: 60,
    solution: "Repair radio using antenna, create improvised power source using battery and wire, then activate emergency communication."
},

{
    mode: "professional",
    title: "Pure or Poison",
    scenario: "Flood contamination suspected in town water storage tank. Drinking water must be restored safely.",
    tasks: [
        "Restore safe drinking water.",
        "Prevent panic in the town."
    ],
    budget: 900,
    items: ["Water Storage Tank", "Chlorine Tablets", "Industrial Bleach", "Portable Water Pump", "Sand Filter Unit", "Clean Water Containers", "Public Announcement System"],
    combinations: [
        {
            inputs: ["Water Storage Tank", "Sand Filter Unit"],
            output: "Filtered Water Tank"
        },
        {
            inputs: ["Filtered Water Tank", "Chlorine Tablets"],
            output: "Purified Safe Water"
        },
        {
            inputs: ["Water Storage Tank", "Industrial Bleach"],
            output: "Toxic Water Mixture"
        }
    ],
    people: [
        {
            name: "Water Safety Engineer",
            role: "Sanitation Specialist",
            strength: "Knows proper purification ratios",
            weakness: "Needs correct materials",
            cost: 500,
            acceptsMoney: true
        },
        {
            name: "Local Volunteer Group",
            role: "Distribution Helpers",
            strength: "Can distribute clean water",
            weakness: "No technical expertise",
            acceptsMoney: false
        }
    ],
    pet: "Rescue Dog",
    timeLimit: 60,
    solution: "Filter water first, then disinfect properly using chlorine tablets. Avoid unsafe bleach mixture."
},

{
    mode: "professional",
    title: "Cold Chain Failure",
    scenario: "Vaccine cooling system malfunction threatens temperature-sensitive medical supplies.",
    tasks: [
        "Restore proper vaccine storage conditions.",
        "Ensure vaccines remain usable and safe."
    ],
    budget: 1000,
    items: ["Portable Ice Packs", "Insulated Storage Box", "Broken Cooling Unit", "Replacement Thermostat", "Temperature Monitor", "Power Adapter"],
    combinations: [
        {
            inputs: ["Broken Cooling Unit", "Replacement Thermostat"],
            output: "Repaired Cooling Unit",
            requiredRole: "Medical Equipment Specialist"
        },
        {
            inputs: ["Portable Ice Packs", "Insulated Storage Box"],
            output: "Temporary Cold Storage"
        },
        {
            inputs: ["Repaired Cooling Unit", "Power Adapter"],
            output: "Operational Vaccine Cooler",
            requiredRole: "Medical Equipment Specialist"
        }
    ],
    people: [
        {
            name: "Biomedical Engineer",
            role: "Medical Equipment Specialist",
            strength: "Can repair cooling systems",
            weakness: "Requires correct replacement parts",
            cost: 600,
            acceptsMoney: true
        },
        {
            name: "General Technician",
            role: "Maintenance Worker",
            strength: "Can assemble basic hardware",
            weakness: "Not specialized in medical cooling",
            cost: 300,
            acceptsMoney: true
        },
        {
            name: "Volunteer Nurse",
            role: "Healthcare Worker",
            strength: "Monitors patient care",
            weakness: "Not technical",
            acceptsMoney: false
        }
    ],
    pet: "Therapy Dog",
    timeLimit: 60,
    solution: "Hire Biomedical Engineer to repair cooling system properly. Use temporary cold storage only as short-term backup."
},

{
    mode: "professional",
    title: "Quick Fix or Future Proof?",
    scenario: "Cracked city pipeline causing unstable water flow. Must restore service and ensure long-term reliability.",
    tasks: [
        "Restore water flow immediately.",
        "Ensure long-term structural reliability."
    ],
    budget: 1200,
    items: ["Temporary Pipe Sealant", "Steel Reinforcement Sleeve", "Welding Kit", "Pressure Regulator Valve", "Pipeline Section Replacement", "Flow Monitor Sensor"],
    combinations: [
        {
            inputs: ["Temporary Pipe Sealant", "Pressure Regulator Valve"],
            output: "Stabilized Temporary Fix"
        },
        {
            inputs: ["Steel Reinforcement Sleeve", "Welding Kit"],
            output: "Reinforced Permanent Joint",
            requiredRole: "Infrastructure Specialist"
        },
        {
            inputs: ["Pipeline Section Replacement", "Welding Kit"],
            output: "Fully Replaced Pipe Section",
            requiredRole: "Infrastructure Specialist"
        }
    ],
    people: [
        {
            name: "Senior Pipeline Engineer",
            role: "Infrastructure Specialist",
            strength: "Can perform permanent weld repair",
            weakness: "Higher cost",
            cost: 700,
            acceptsMoney: true
        },
        {
            name: "Maintenance Technician",
            role: "Quick Repair Worker",
            strength: "Fast temporary fixes",
            weakness: "Short-term reliability",
            cost: 300,
            acceptsMoney: true
        },
        {
            name: "Sana",
            role: "Infrastructure Planner",
            strength: "Evaluates long-term risk",
            weakness: "Prefers permanent solution",
            acceptsMoney: false
        }
    ],
    pet: "Guard Dog",
    timeLimit: 120,
    solution: "Choose between temporary stabilization or permanent structural repair based on risk and budget. Permanent repair provides long-term reliability."
},

{
    mode: "professional",
    title: "Sequence or Silence",
    scenario: "Government data server crashed. Recovery must follow strict forensic order to prevent permanent loss.",
    tasks: [
        "Recover the corrupted data safely.",
        "Prevent permanent data loss."
    ],
    budget: 1500,
    items: ["Corrupted Data Drive", "Forensic Recovery Tool", "Write-Block Adapter", "External Backup Server", "Power Supply Unit", "Encryption Key Device"],
    combinations: [
        {
            inputs: ["Corrupted Data Drive", "Write-Block Adapter"],
            output: "Protected Drive Interface"
        },
        {
            inputs: ["Protected Drive Interface", "Forensic Recovery Tool"],
            output: "Recoverable Data Session"
        },
        {
            inputs: ["Recoverable Data Session", "External Backup Server"],
            output: "Restored Secure Backup"
        }
    ],
    people: [
        {
            name: "Digital Forensics Expert",
            role: "Data Recovery Specialist",
            strength: "Knows safe recovery sequence",
            weakness: "Expensive but precise",
            cost: 800,
            acceptsMoney: true
        },
        {
            name: "IT Technician",
            role: "General IT Support",
            strength: "Basic hardware setup",
            weakness: "Does not understand forensic protocol",
            cost: 400,
            acceptsMoney: true
        },
        {
            name: "Sana",
            role: "Compliance Officer",
            strength: "Ensures no evidence tampering",
            weakness: "Strict procedures",
            acceptsMoney: false
        }
    ],
    pet: "Guard Dog",
    timeLimit: 120,
    solution: "Attach write-block adapter before any power application. Follow forensic sequence to avoid irreversible data corruption."
},

{
    mode: "professional",
    title: "Trial Costs Money",
    scenario: "Hazardous acidic chemical leak requires safe neutralization. Each incorrect attempt wastes materials and budget.",
    tasks: [
        "Neutralize the acid safely.",
        "Prevent environmental contamination."
    ],
    budget: 1400,
    items: ["Acidic Chemical Tank", "Sodium Bicarbonate Powder", "Industrial Neutralizer Compound", "Protective Mixing Chamber", "Water Dilution Valve", "pH Testing Kit"],
    combinations: [
        {
            inputs: ["Acidic Chemical Tank", "Sodium Bicarbonate Powder"],
            output: "Neutralized Compound"
        },
        {
            inputs: ["Neutralized Compound", "pH Testing Kit"],
            output: "Verified Safe Mixture"
        }
    ],
    people: [
        {
            name: "Chemical Safety Engineer",
            role: "Hazard Specialist",
            strength: "Understands neutralization chemistry",
            weakness: "Expensive but precise",
            cost: 700,
            acceptsMoney: true
        },
        {
            name: "Plant Worker",
            role: "Industrial Operator",
            strength: "Can handle mixing machinery",
            weakness: "Limited chemical knowledge",
            cost: 300,
            acceptsMoney: true
        },
        {
            name: "Environmental Officer",
            role: "Compliance Inspector",
            strength: "Ensures safe disposal",
            weakness: "Strict protocol",
            acceptsMoney: false
        }
    ],
    pet: "Guard Dog",
    timeLimit: 120,
    solution: "Use sodium bicarbonate to neutralize acid, verify with pH test, avoid costly blind chemical reactions."
},

{
    mode: "professional",
    title: "Visible Failure",
    scenario: "Toxic gas leak requires proper air filtration deployment under heavy public scrutiny.",
    tasks: [
        "Deploy an effective air filtration system.",
        "Restore public confidence in safety."
    ],
    budget: 1600,
    trust: 100,
    items: ["Industrial Air Filter Unit", "Activated Carbon Filters", "HEPA Filter Module", "Ventilation Fan Array", "Air Quality Sensor", "Containment Duct Panels"],
    combinations: [
        {
            inputs: ["Industrial Air Filter Unit", "Activated Carbon Filters"],
            output: "Primary Gas Filtration Unit"
        },
        {
            inputs: ["Primary Gas Filtration Unit", "HEPA Filter Module"],
            output: "Advanced Multi-Layer Filtration System"
        },
        {
            inputs: ["Advanced Multi-Layer Filtration System", "Ventilation Fan Array"],
            output: "Operational Air Purification System"
        },
        {
            inputs: ["Operational Air Purification System", "Air Quality Sensor"],
            output: "Verified Safe Air Deployment"
        }
    ],
    people: [
        {
            name: "Environmental Systems Engineer",
            role: "Air Quality Specialist",
            strength: "Understands filtration system architecture",
            weakness: "High cost but accurate",
            cost: 900,
            acceptsMoney: true
        },
        {
            name: "Maintenance Supervisor",
            role: "Facility Operator",
            strength: "Can assemble ventilation systems",
            weakness: "May misconfigure filtration layers",
            cost: 400,
            acceptsMoney: true
        },
        {
            name: "Public Relations Officer",
            role: "Media Communicator",
            strength: "Can restore public trust",
            weakness: "Needs visible progress",
            cost: 500,
            acceptsMoney: true
        }
    ],
    pet: "Guard Dog",
    timeLimit: 120,
    solution: "Build filtration layers in correct order (Carbon → HEPA → Ventilation), verify via sensor before public communication."
},

{
    mode: "professional",
    title: "Two Systems, One Window",
    scenario: "Rising floodwaters require both floodgate activation and command center setup under time pressure.",
    tasks: [
        "Activate automated floodgate barrier system.",
        "Establish emergency monitoring command center."
    ],
    budget: 2000,
    items: ["Hydraulic Pump Unit", "Control Circuit Board", "Steel Gate Lock Mechanism", "Satellite Uplink Device", "Signal Antenna", "Backup Power Generator", "Monitoring Display Console", "Network Router Module"],
    combinations: [
        { inputs: ["Hydraulic Pump Unit", "Steel Gate Lock Mechanism"], output: "Mechanical Gate Assembly" },
        { inputs: ["Mechanical Gate Assembly", "Control Circuit Board"], output: "Automated Floodgate System" },
        { inputs: ["Automated Floodgate System", "Backup Power Generator"], output: "Operational Flood Barrier" },
        { inputs: ["Monitoring Display Console", "Network Router Module"], output: "Core Monitoring Station" },
        { inputs: ["Core Monitoring Station", "Satellite Uplink Device"], output: "Remote Monitoring Hub" },
        { inputs: ["Remote Monitoring Hub", "Signal Antenna"], output: "Live Flood Command Center" }
    ],
    people: [
        {
            name: "Hydraulic Engineer",
            role: "Mechanical Systems Specialist",
            strength: "Builds floodgate activation systems",
            weakness: "Focused only on mechanical assembly",
            cost: 800,
            acceptsMoney: true
        },
        {
            name: "IT Systems Architect",
            role: "Network Specialist",
            strength: "Builds monitoring command center",
            weakness: "Needs proper hardware sequence",
            cost: 900,
            acceptsMoney: true
        },
        {
            name: "Operations Supervisor",
            role: "Crisis Coordinator",
            strength: "Can manage parallel workflows",
            weakness: "Requires clear planning",
            cost: 400,
            acceptsMoney: true
        }
    ],
    pet: "Guard Dog",
    timeLimit: 120,
    solution: "Prioritize floodgate activation chain before monitoring. Manage shared resources carefully."
},

{
    mode: "professional",
    title: "Cascade Protocol",
    scenario: "Nationwide grid instability requires simultaneous power stabilization and emergency broadcast deployment.",
    tasks: [
        "Stabilize the primary power grid core.",
        "Deploy public emergency broadcast system."
    ],
    budget: 2500,
    trust: 100,
    items: ["Grid Core Module", "Voltage Regulator Unit", "Surge Dampener", "Emergency Broadcast Console", "Satellite Transmission Unit", "Signal Amplifier", "Backup Turbine Generator", "Grid Diagnostic Scanner", "Power Relay Switch"],
    combinations: [
        { inputs: ["Grid Core Module", "Voltage Regulator Unit"], output: "Regulated Core System" },
        { inputs: ["Regulated Core System", "Surge Dampener"], output: "Surge-Protected Core" },
        { inputs: ["Surge-Protected Core", "Power Relay Switch"], output: "Stabilized Power Core" },
        { inputs: ["Stabilized Power Core", "Backup Turbine Generator"], output: "Operational Grid Core" },
        { inputs: ["Emergency Broadcast Console", "Signal Amplifier"], output: "Amplified Broadcast Console" },
        { inputs: ["Amplified Broadcast Console", "Satellite Transmission Unit"], output: "Satellite Broadcast Hub" },
        { inputs: ["Satellite Broadcast Hub", "Grid Diagnostic Scanner"], output: "Live Stabilization Broadcast System" }
    ],
    people: [
        {
            name: "Senior Power Engineer",
            role: "Grid Stabilization Specialist",
            strength: "Understands voltage sequencing",
            weakness: "Expensive but precise",
            cost: 1000,
            acceptsMoney: true
        },
        {
            name: "Communications Director",
            role: "Broadcast Systems Expert",
            strength: "Builds emergency communication networks",
            weakness: "Needs correct transmission chain",
            cost: 700,
            acceptsMoney: true
        },
        {
            name: "Operations Commander",
            role: "Crisis Coordinator",
            strength: "Manages parallel systems",
            weakness: "Requires structured plan",
            cost: 500,
            acceptsMoney: true
        }
    ],
    pet: "Guard Dog",
    timeLimit: 120,
    solution: "Complete voltage regulation sequence first to stabilize grid, then deploy broadcast chain. Avoid order mistakes to preserve trust and budget."
},

{
    mode: "professional",
    title: "Cascade Protocol",
    scenario: "Nationwide grid instability requires simultaneous power stabilization and emergency broadcast deployment.",
    tasks: [
        "Stabilize the primary power grid core.",
        "Deploy public emergency broadcast system."
    ],
    budget: 2500,
    trust: 100,
    items: ["Grid Core Module", "Voltage Regulator Unit", "Surge Dampener", "Emergency Broadcast Console", "Satellite Transmission Unit", "Signal Amplifier", "Backup Turbine Generator", "Grid Diagnostic Scanner", "Power Relay Switch"],
    combinations: [
        { inputs: ["Grid Core Module", "Voltage Regulator Unit"], output: "Regulated Core System" },
        { inputs: ["Regulated Core System", "Surge Dampener"], output: "Surge-Protected Core" },
        { inputs: ["Surge-Protected Core", "Power Relay Switch"], output: "Stabilized Power Core" },
        { inputs: ["Stabilized Power Core", "Backup Turbine Generator"], output: "Operational Grid Core" },
        { inputs: ["Emergency Broadcast Console", "Signal Amplifier"], output: "Amplified Broadcast Console" },
        { inputs: ["Amplified Broadcast Console", "Satellite Transmission Unit"], output: "Satellite Broadcast Hub" },
        { inputs: ["Satellite Broadcast Hub", "Grid Diagnostic Scanner"], output: "Live Stabilization Broadcast System" }
    ],
    people: [
        {
            name: "Senior Power Engineer",
            role: "Grid Stabilization Specialist",
            strength: "Understands voltage sequencing",
            weakness: "Expensive but precise",
            cost: 1000,
            acceptsMoney: true
        },
        {
            name: "Communications Director",
            role: "Broadcast Systems Expert",
            strength: "Builds emergency communication networks",
            weakness: "Needs correct transmission chain",
            cost: 700,
            acceptsMoney: true
        },
        {
            name: "Operations Commander",
            role: "Crisis Coordinator",
            strength: "Manages parallel systems",
            weakness: "Requires structured plan",
            cost: 500,
            acceptsMoney: true
        }
    ],
    pet: "Guard Dog",
    timeLimit: 120,
    solution: "Complete voltage regulation sequence first to stabilize grid, then deploy broadcast chain. Avoid order mistakes to preserve trust and budget."
},

{
    mode: "professional",
    title: "Rising Tide Protocol",
    scenario: "Approaching coastal storm requires sea defense activation, evacuation coordination, and hospital power stabilization.",
    tasks: [
        "Activate sea barrier defense system.",
        "Evacuate coastal residents safely.",
        "Maintain emergency hospital functionality."
    ],
    budget: 3500,
    trust: 100,
    items: ["Barrier Control Core", "Hydraulic Gate Motors", "Reinforced Sea Wall Plates", "Evacuation Bus Fleet", "Route Coordination Console", "Emergency Medical Power Unit", "Backup Battery Array", "Hospital Circuit Stabilizer", "Coastal Alert Broadcast Panel"],
    combinations: [
        { inputs: ["Barrier Control Core", "Hydraulic Gate Motors"], output: "Motorized Barrier Core" },
        { inputs: ["Motorized Barrier Core", "Reinforced Sea Wall Plates"], output: "Operational Sea Defense System" },
        { inputs: ["Hospital Circuit Stabilizer", "Backup Battery Array"], output: "Regulated Medical Power Unit" },
        { inputs: ["Regulated Medical Power Unit", "Emergency Medical Power Unit"], output: "Hospital Power Stability System" },
        { inputs: ["Evacuation Bus Fleet", "Route Coordination Console"], output: "Managed Evacuation System" },
        { inputs: ["Managed Evacuation System", "Coastal Alert Broadcast Panel"], output: "Active Coastal Evacuation Network" }
    ],
    people: [
        {
            name: "Coastal Infrastructure Engineer",
            role: "Barrier Systems Specialist",
            strength: "Builds sea defense system",
            weakness: "Requires correct motor sequencing",
            cost: 1200,
            acceptsMoney: true
        },
        {
            name: "Evacuation Coordinator",
            role: "Logistics Planner",
            strength: "Optimizes evacuation flow",
            weakness: "Needs real-time alert system",
            cost: 900,
            acceptsMoney: true
        },
        {
            name: "Hospital Power Engineer",
            role: "Medical Systems Specialist",
            strength: "Stabilizes hospital electricity",
            weakness: "Must install regulator before battery",
            cost: 1000,
            acceptsMoney: true
        }
    ],
    pet: "Rescue Dog",
    timeLimit: 180,
    solution: "Activate sea barrier first, stabilize hospital power correctly, then coordinate evacuation with proper broadcast sequencing."
},

{
    mode: "professional",
    title: "One Core, Three Fires",
    scenario: "Data center overheating and power instability threaten national systems. One High-Capacity Power Coupler must be allocated strategically.",
    tasks: [
        "Restore cooling system.",
        "Stabilize server power distribution.",
        "Deploy emergency public information portal."
    ],
    budget: 4000,
    trust: 100,
    items: ["Cooling Turbine Unit", "Liquid Coolant System", "Server Power Grid Panel", "Voltage Balancer", "Public Web Broadcast Console", "Emergency Network Router", "High-Capacity Power Coupler", "Backup Auxiliary Transformer", "Thermal Monitoring Sensor"],
    combinations: [
        { inputs: ["Cooling Turbine Unit", "Liquid Coolant System"], output: "Primary Cooling Core" },
        { inputs: ["Primary Cooling Core", "Thermal Monitoring Sensor"], output: "Monitored Cooling System" },
        { inputs: ["Monitored Cooling System", "High-Capacity Power Coupler"], output: "Operational Cooling System" },
        { inputs: ["Server Power Grid Panel", "Voltage Balancer"], output: "Balanced Server Grid" },
        { inputs: ["Balanced Server Grid", "High-Capacity Power Coupler"], output: "Stabilized Server Power System" },
        { inputs: ["Public Web Broadcast Console", "Emergency Network Router"], output: "Connected Public Portal" },
        { inputs: ["Connected Public Portal", "High-Capacity Power Coupler"], output: "Live Public Emergency Portal" }
    ],
    people: [
        {
            name: "Data Center Engineer",
            role: "Thermal Systems Specialist",
            strength: "Builds cooling architecture",
            weakness: "Needs proper power routing",
            cost: 1300,
            acceptsMoney: true
        },
        {
            name: "Electrical Systems Engineer",
            role: "Power Distribution Specialist",
            strength: "Stabilizes server grid",
            weakness: "Requires balanced voltage",
            cost: 1100,
            acceptsMoney: true
        },
        {
            name: "IT Infrastructure Director",
            role: "Public Portal Specialist",
            strength: "Deploys public information systems",
            weakness: "Needs stable connectivity",
            cost: 900,
            acceptsMoney: true
        }
    ],
    pet: "Guard Dog",
    timeLimit: 180,
    solution: "Prioritize server power stabilization with High-Capacity Power Coupler. Use auxiliary systems for secondary functions."
},

{
    mode: "professional",
    title: "Runway Under Pressure",
    scenario: "Airport blackout requires restoration of runway lighting, air traffic control, and fuel systems. Mid-crisis storm disables main grid power.",
    tasks: [
        "Restore runway lighting system.",
        "Stabilize air traffic control network.",
        "Reactivate aircraft fuel distribution."
    ],
    budget: 4500,
    trust: 100,
    items: ["Runway Lighting Grid", "Signal Relay Module", "Fuel Pump Motor", "Aviation Fuel Valve Controller", "Air Traffic Control Console", "Radar Synchronization Unit", "Main Grid Power Feed", "Backup Power Generator", "Internal Power Distributor"],
    combinations: [
        { inputs: ["Runway Lighting Grid", "Signal Relay Module"], output: "Reconnected Runway Lighting" },
        { inputs: ["Reconnected Runway Lighting", "Internal Power Distributor"], output: "Operational Runway Lights" },
        { inputs: ["Air Traffic Control Console", "Radar Synchronization Unit"], output: "Synchronized ATC Core" },
        { inputs: ["Synchronized ATC Core", "Signal Relay Module"], output: "Stable Air Traffic Network" },
        { inputs: ["Fuel Pump Motor", "Aviation Fuel Valve Controller"], output: "Controlled Fuel Pump System" },
        { inputs: ["Controlled Fuel Pump System", "Internal Power Distributor"], output: "Active Fuel Distribution System" }
    ],
    people: [
        {
            name: "Aviation Electrical Engineer",
            role: "Runway Systems Specialist",
            strength: "Restores lighting infrastructure",
            weakness: "Needs stable power source",
            cost: 1400,
            acceptsMoney: true
        },
        {
            name: "Air Traffic Systems Engineer",
            role: "Control Network Specialist",
            strength: "Stabilizes radar and ATC systems",
            weakness: "Requires proper relay sequencing",
            cost: 1200,
            acceptsMoney: true
        },
        {
            name: "Fuel Systems Technician",
            role: "Pump & Valve Specialist",
            strength: "Reactivates fuel distribution safely",
            weakness: "Needs motor control sequencing",
            cost: 900,
            acceptsMoney: true
        }
    ],
    pet: "Rescue Dog",
    timeLimit: 180,
    solution: "Activate backup power early, stabilize ATC first, then restore runway lighting and fuel distribution while avoiding reliance on main grid."
},

{
    mode: "professional",
    title: "Runway Under Pressure",
    scenario: "Airport blackout requires restoration of runway lighting, air traffic control, and fuel systems. Mid-crisis storm disables main grid power.",
    tasks: [
        "Restore runway lighting system.",
        "Stabilize air traffic control network.",
        "Reactivate aircraft fuel distribution."
    ],
    budget: 4500,
    trust: 100,
    items: ["Runway Lighting Grid", "Signal Relay Module", "Fuel Pump Motor", "Aviation Fuel Valve Controller", "Air Traffic Control Console", "Radar Synchronization Unit", "Main Grid Power Feed", "Backup Power Generator", "Internal Power Distributor"],
    combinations: [
        { inputs: ["Runway Lighting Grid", "Signal Relay Module"], output: "Reconnected Runway Lighting" },
        { inputs: ["Reconnected Runway Lighting", "Internal Power Distributor"], output: "Operational Runway Lights" },
        { inputs: ["Air Traffic Control Console", "Radar Synchronization Unit"], output: "Synchronized ATC Core" },
        { inputs: ["Synchronized ATC Core", "Signal Relay Module"], output: "Stable Air Traffic Network" },
        { inputs: ["Fuel Pump Motor", "Aviation Fuel Valve Controller"], output: "Controlled Fuel Pump System" },
        { inputs: ["Controlled Fuel Pump System", "Internal Power Distributor"], output: "Active Fuel Distribution System" }
    ],
    people: [
        {
            name: "Aviation Electrical Engineer",
            role: "Runway Systems Specialist",
            strength: "Restores lighting infrastructure",
            weakness: "Needs stable power source",
            cost: 1400,
            acceptsMoney: true
        },
        {
            name: "Air Traffic Systems Engineer",
            role: "Control Network Specialist",
            strength: "Stabilizes radar and ATC systems",
            weakness: "Requires proper relay sequencing",
            cost: 1200,
            acceptsMoney: true
        },
        {
            name: "Fuel Systems Technician",
            role: "Pump & Valve Specialist",
            strength: "Reactivates fuel distribution safely",
            weakness: "Needs motor control sequencing",
            cost: 900,
            acceptsMoney: true
        }
    ],
    pet: "Rescue Dog",
    timeLimit: 180,
    solution: "Activate backup power early, stabilize ATC first, then restore runway lighting and fuel distribution while avoiding reliance on main grid."
},

{
    mode: "professional",
    title: "Hidden Fault",
    scenario: "Satellite launch requires ignition stability, navigation calibration, and broadcast uplink. One subsystem has been sabotaged.",
    tasks: [
        "Stabilize rocket fuel ignition system.",
        "Calibrate navigation guidance system.",
        "Secure global broadcast uplink."
    ],
    budget: 5500,
    trust: 100,
    items: ["Fuel Ignition Core", "Oxidizer Flow Regulator", "Navigation Control Matrix", "Gyroscopic Stabilizer", "Satellite Transmission Array", "Broadcast Encryption Module", "System Diagnostic Scanner", "Circuit Integrity Tester", "Backup Guidance Chip"],
    combinations: [
        { inputs: ["Fuel Ignition Core", "Oxidizer Flow Regulator"], output: "Ignition Ready Fuel System" },
        { inputs: ["Navigation Control Matrix", "System Diagnostic Scanner"], output: "Detected Matrix Fault" },
        { inputs: ["Detected Matrix Fault", "Backup Guidance Chip"], output: "Repaired Navigation Core" },
        { inputs: ["Repaired Navigation Core", "Gyroscopic Stabilizer"], output: "Stabilized Navigation System" },
        { inputs: ["Satellite Transmission Array", "Broadcast Encryption Module"], output: "Secure Global Broadcast System" }
    ],
    people: [
        {
            name: "Propulsion Engineer",
            role: "Rocket Fuel Specialist",
            strength: "Handles ignition sequencing",
            weakness: "Focused only on propulsion",
            cost: 1600,
            acceptsMoney: true
        },
        {
            name: "Aerospace Navigation Engineer",
            role: "Guidance Systems Expert",
            strength: "Calibrates flight navigation",
            weakness: "Requires stable matrix inputs",
            cost: 1400,
            acceptsMoney: true
        },
        {
            name: "Communications Director",
            role: "Global Broadcast Specialist",
            strength: "Ensures live transmission",
            weakness: "Needs encryption stability",
            cost: 1200,
            acceptsMoney: true
        }
    ],
    pet: "Guard Dog",
    timeLimit: 180,
    solution: "Diagnose navigation system first using scanner, repair matrix before calibration. Then complete ignition and broadcast systems."
},

{
    mode: "professional",
    title: "Contain or Conceal",
    scenario: "Chemical plant explosion requires gas containment, power restoration, and public communication. A fast chemical solution carries long-term environmental risk.",
    tasks: [
        "Contain toxic gas spread.",
        "Restore regional power supply.",
        "Release public safety update."
    ],
    budget: 6000,
    trust: 100,
    items: ["Industrial Gas Containment Foam", "Rapid Neutralizing Compound", "Air Filtration Tower", "Emergency Power Grid Module", "Voltage Stabilizer Unit", "Public Broadcast Console", "Environmental Impact Report", "Groundwater Testing Kit", "Hazard Containment Barrier"],
    combinations: [
        { inputs: ["Industrial Gas Containment Foam", "Hazard Containment Barrier"], output: "Primary Gas Seal" },
        { inputs: ["Primary Gas Seal", "Air Filtration Tower"], output: "Safe Contained Atmosphere" },
        { inputs: ["Rapid Neutralizing Compound", "Air Filtration Tower"], output: "Rapid Gas Neutralization" },
        { inputs: ["Emergency Power Grid Module", "Voltage Stabilizer Unit"], output: "Restored Regional Power" },
        { inputs: ["Public Broadcast Console", "Environmental Impact Report"], output: "Transparent Safety Communication" }
    ],
    people: [
        {
            name: "Environmental Response Engineer",
            role: "Hazard Mitigation Specialist",
            strength: "Safe containment protocols",
            weakness: "Slower containment process",
            cost: 1700,
            acceptsMoney: true
        },
        {
            name: "Industrial Chemist",
            role: "Chemical Reaction Expert",
            strength: "Can deploy rapid neutralizer",
            weakness: "Long-term environmental risk",
            cost: 1400,
            acceptsMoney: true
        },
        {
            name: "Energy Systems Engineer",
            role: "Power Restoration Specialist",
            strength: "Restores regional electricity",
            weakness: "Needs stable voltage input",
            cost: 1300,
            acceptsMoney: true
        }
    ],
    pet: "Rescue Dog",
    timeLimit: 180,
    solution: "Use safe containment foam and transparent reporting to avoid long-term trust and environmental damage."
},

{
    mode: "professional",
    title: "Double Fault",
    scenario: "National rail network faces signal failure and propulsion instability. Two subsystems are secretly sabotaged.",
    tasks: [
        "Restore rail signal coordination system.",
        "Reactivate electric rail propulsion grid.",
        "Reopen public ticketing and dispatch platform."
    ],
    budget: 7000,
    trust: 100,
    items: ["Rail Signal Control Board", "Firmware Recovery Module", "Propulsion Voltage Regulator", "High-Capacity Rail Transformer", "Electric Rail Power Grid Core", "Ticketing Server Console", "Dispatch Network Router", "System Diagnostic Terminal", "Circuit Calibration Tool", "Backup Voltage Chip"],
    combinations: [
        { inputs: ["Rail Signal Control Board", "System Diagnostic Terminal"], output: "Detected Firmware Corruption" },
        { inputs: ["Detected Firmware Corruption", "Firmware Recovery Module"], output: "Recovered Signal Board" },
        { inputs: ["Recovered Signal Board", "Dispatch Network Router"], output: "Synchronized Rail Signal Network" },
        { inputs: ["Propulsion Voltage Regulator", "Circuit Calibration Tool"], output: "Detected Voltage Tampering" },
        { inputs: ["Detected Voltage Tampering", "Backup Voltage Chip"], output: "Repaired Voltage Regulator" },
        { inputs: ["Repaired Voltage Regulator", "High-Capacity Rail Transformer"], output: "Stabilized Propulsion Grid" },
        { inputs: ["Stabilized Propulsion Grid", "Electric Rail Power Grid Core"], output: "Operational Electric Rail System" },
        { inputs: ["Ticketing Server Console", "Dispatch Network Router"], output: "Operational Ticketing Platform" }
    ],
    people: [
        {
            name: "Rail Systems Engineer",
            role: "Signal & Dispatch Specialist",
            strength: "Handles rail signal synchronization",
            weakness: "Requires firmware stability",
            cost: 1800,
            acceptsMoney: true
        },
        {
            name: "Power Grid Engineer",
            role: "Electric Propulsion Specialist",
            strength: "Stabilizes propulsion voltage systems",
            weakness: "Needs calibrated regulator",
            cost: 1600,
            acceptsMoney: true
        },
        {
            name: "IT Infrastructure Director",
            role: "Ticketing & Dispatch Systems Expert",
            strength: "Restores network platform",
            weakness: "Needs stable signal backbone",
            cost: 1400,
            acceptsMoney: true
        }
    ],
    pet: "Rescue Dog",
    timeLimit: 180,
    solution: "Diagnose both sabotaged systems before repair. Restore signal and propulsion stability before reopening ticketing platform."
},

{
    mode: "professional",
    title: "Signal or Noise",
    scenario: "National cyber defense grid under attack. System inventory contains misleading component labels.",
    tasks: [
        "Rebuild firewall defense layer.",
        "Stabilize encrypted communications backbone.",
        "Deploy real-time intrusion monitoring network."
    ],
    budget: 8000,
    trust: 100,
    items: ["Secure Firewall Core", "Legacy Firewall Engine", "Encryption Accelerator Unit", "Signal Compression Adapter", "Network Monitoring Hub", "Intrusion Pattern Analyzer", "Packet Routing Amplifier", "System Integrity Scanner", "Backup Cryptographic Module"],
    combinations: [
        { inputs: ["Secure Firewall Core", "System Integrity Scanner"], output: "Detected Firmware Corruption" },
        { inputs: ["Legacy Firewall Engine", "Backup Cryptographic Module"], output: "Stable Firewall Core" },
        { inputs: ["Stable Firewall Core", "Packet Routing Amplifier"], output: "Operational National Firewall" },
        { inputs: ["Encryption Accelerator Unit", "Backup Cryptographic Module"], output: "Primary Encryption Layer" },
        { inputs: ["Primary Encryption Layer", "Packet Routing Amplifier"], output: "Encrypted Communications Backbone" },
        { inputs: ["Network Monitoring Hub", "Intrusion Pattern Analyzer"], output: "Real-Time Threat Detection Grid" }
    ],
    people: [
        {
            name: "Cyber Defense Architect",
            role: "Firewall Systems Specialist",
            strength: "Understands secure firewall architecture",
            weakness: "Needs stable core firmware",
            cost: 2200,
            acceptsMoney: true
        },
        {
            name: "Encryption Systems Engineer",
            role: "Cryptographic Specialist",
            strength: "Builds encrypted communication channels",
            weakness: "Requires correct modules",
            cost: 1800,
            acceptsMoney: true
        },
        {
            name: "Network Security Analyst",
            role: "Intrusion Monitoring Expert",
            strength: "Deploys real-time monitoring grid",
            weakness: "Depends on routing stability",
            cost: 1600,
            acceptsMoney: true
        }
    ],
    pet: "Guard Dog",
    timeLimit: 180,
    solution: "Scan components before use, avoid corrupted firewall core, recognize compression is not encryption, stabilize firewall before monitoring."
},

{
    mode: "professional",
    title: "Total Systems Override",
    scenario: "National crisis affecting energy, broadcast, and water systems. Hidden sabotage and resource conflicts present.",
    tasks: [
        "Stabilize national energy core.",
        "Restore emergency broadcast network.",
        "Secure clean water distribution."
    ],
    budget: 10000,
    trust: 100,
    items: ["National Energy Core Unit", "Voltage Regulation Matrix", "Surge Suppression Array", "Emergency Broadcast Hub", "Transmission Relay Cluster", "Clean Water Filtration Reactor", "Rapid Chemical Purifier", "System Diagnostic AI", "Backup Power Conduit", "Water Quality Analyzer", "Grid Stabilization Override Chip"],
    combinations: [
        { inputs: ["National Energy Core Unit", "System Diagnostic AI"], output: "Detected Voltage Instability" },
        { inputs: ["Detected Voltage Instability", "Voltage Regulation Matrix"], output: "Regulated Core Base" },
        { inputs: ["Regulated Core Base", "Surge Suppression Array"], output: "Surge-Protected Energy Core" },
        { inputs: ["Surge-Protected Energy Core", "Backup Power Conduit"], output: "Stable National Energy Core" },
        { inputs: ["Emergency Broadcast Hub", "Transmission Relay Cluster"], output: "Connected Broadcast System" },
        { inputs: ["Connected Broadcast System", "Backup Power Conduit"], output: "Operational Emergency Broadcast Network" },
        { inputs: ["Clean Water Filtration Reactor", "Water Quality Analyzer"], output: "Verified Clean Water Supply" },
        { inputs: ["Rapid Chemical Purifier", "Clean Water Filtration Reactor"], output: "Immediate Water Stabilization" }
    ],
    people: [
        {
            name: "National Grid Architect",
            role: "Energy Stabilization Specialist",
            strength: "Understands voltage sequencing",
            weakness: "Needs proper diagnostic first",
            cost: 3000,
            acceptsMoney: true
        },
        {
            name: "Broadcast Infrastructure Director",
            role: "Emergency Communication Specialist",
            strength: "Builds stable broadcast networks",
            weakness: "Requires steady power backbone",
            cost: 2500,
            acceptsMoney: true
        },
        {
            name: "Water Safety Commissioner",
            role: "Sanitation & Distribution Specialist",
            strength: "Ensures safe purification systems",
            weakness: "Slower than chemical shortcut",
            cost: 2200,
            acceptsMoney: true
        }
    ],
    pet: "Rescue Dog",
    timeLimit: 180,
    solution: "Diagnose and regulate energy core first, allocate backup conduit to energy system, restore broadcast after stabilization, and choose safe water purification path."
},

{
    mode: "historical",
    title: "Water for the Empire",
    era: "120 AD",
    location: "Ancient Rome",
    scenario: "Collapsed aqueduct threatens water supply and political stability in Rome.",
    tasks: [
        "Restore fresh water flow to the city.",
        "Prevent disease outbreak.",
        "Maintain political stability among citizens."
    ],
    budget: 10000,
    trust: 100,
    items: ["Stone Arch Support Blocks", "Lime Mortar Mix", "Wooden Scaffolding", "Manual Water Diversion Gate", "Clay Water Filtration Basins", "Boiling Cauldrons", "Public Forum Announcement Scrolls", "Legionary Labor Force", "Structural Surveyor Tools", "Emergency Grain Supply"],
    combinations: [
        { inputs: ["Stone Arch Support Blocks", "Lime Mortar Mix"], output: "Reinforced Arch Base" },
        { inputs: ["Reinforced Arch Base", "Wooden Scaffolding"], output: "Stabilized Aqueduct Structure" },
        { inputs: ["Manual Water Diversion Gate", "Clay Water Filtration Basins"], output: "Filtered Water Channel" },
        { inputs: ["Filtered Water Channel", "Boiling Cauldrons"], output: "Safe Drinking Supply" },
        { inputs: ["Public Forum Announcement Scrolls", "Emergency Grain Supply"], output: "Public Reassurance Campaign" }
    ],
    people: [
        {
            name: "Marcus Vitruvius",
            role: "Roman Structural Architect",
            strength: "Understands arch load distribution",
            weakness: "Requires proper stone alignment",
            cost: 3000,
            acceptsMoney: true
        },
        {
            name: "Public Health Magistrate",
            role: "Sanitation Overseer",
            strength: "Prevents disease spread",
            weakness: "Needs clean water flow first",
            cost: 2000,
            acceptsMoney: true
        },
        {
            name: "Senate Envoy",
            role: "Political Stabilizer",
            strength: "Maintains citizen morale",
            weakness: "Needs visible progress",
            cost: 1500,
            acceptsMoney: true
        }
    ],
    pet: "Roman War Dog",
    timeLimit: 300,
    solution: "Rebuild arch foundation first, secure clean water via filtration and boiling, then reassure public."
},

{
    mode: "historical",
    title: "Ashes and Silence",
    era: "1348 AD",
    location: "Northern Europe",
    scenario: "Black plague spreading through medieval walled city. Must contain disease, secure food, and prevent unrest.",
    tasks: [
        "Slow the spread of disease.",
        "Maintain food distribution within the city.",
        "Prevent civil unrest and panic."
    ],
    budget: 8000,
    trust: 100,
    items: ["City Gate Quarantine Orders", "Bell Tower Public Announcements", "Herbal Treatment Kits", "Isolation Barracks", "Grain Storage Reserves", "Armed Town Guard", "Burial Cart System", "River Water Boiling Stations", "Religious Council Proclamation", "Market Trade Restriction Seal"],
    combinations: [
        { inputs: ["City Gate Quarantine Orders", "Isolation Barracks"], output: "Controlled Entry & Isolation System" },
        { inputs: ["Controlled Entry & Isolation System", "Burial Cart System"], output: "Managed Plague Containment" },
        { inputs: ["Grain Storage Reserves", "Market Trade Restriction Seal"], output: "Controlled Food Distribution" },
        { inputs: ["Bell Tower Public Announcements", "Religious Council Proclamation"], output: "Calmed Public Sentiment" },
        { inputs: ["Armed Town Guard", "City Gate Quarantine Orders"], output: "Forced Lockdown Enforcement" }
    ],
    people: [
        {
            name: "Town Physician",
            role: "Medieval Medical Practitioner",
            strength: "Organizes isolation wards",
            weakness: "Limited medical knowledge",
            cost: 2000,
            acceptsMoney: true
        },
        {
            name: "City Marshal",
            role: "Security & Enforcement Leader",
            strength: "Can enforce quarantine",
            weakness: "Harsh enforcement lowers morale",
            cost: 1800,
            acceptsMoney: true
        },
        {
            name: "Religious Bishop",
            role: "Spiritual Authority",
            strength: "Calms public panic",
            weakness: "May oppose strict quarantine",
            cost: 1500,
            acceptsMoney: true
        }
    ],
    pet: "Town Guard Dog",
    timeLimit: 300,
    solution: "Establish quarantine and isolation first, secure grain distribution, and calm citizens using communication rather than force."
},

{
    mode: "historical",
    title: "Operation Silent Tide",
    era: "1943",
    location: "North Atlantic Ocean",
    scenario: "WWII convoy crossing threatened by submarines. Must protect supply ships, secure communication, and maintain fuel efficiency.",
    tasks: [
        "Protect the supply convoy from submarine attack.",
        "Maintain fuel supply to the front lines.",
        "Prevent enemy intelligence interception."
    ],
    budget: 12000,
    trust: 100,
    items: ["Naval Destroyer Escort", "Sonar Detection Array", "Convoy Zig-Zag Navigation Plan", "Radio Silence Protocol", "Encrypted Signal Cipher Machine", "Emergency Depth Charge Supply", "Long-Range Reconnaissance Aircraft", "Fuel Ration Allocation Plan", "Weather Forecast Intelligence Report", "Decoy Cargo Vessel"],
    combinations: [
        { inputs: ["Naval Destroyer Escort", "Sonar Detection Array"], output: "Active Submarine Detection System" },
        { inputs: ["Active Submarine Detection System", "Emergency Depth Charge Supply"], output: "Defensive Convoy Shield" },
        { inputs: ["Defensive Convoy Shield", "Convoy Zig-Zag Navigation Plan"], output: "Protected Convoy Formation" },
        { inputs: ["Encrypted Signal Cipher Machine", "Radio Silence Protocol"], output: "Secure Naval Communication Channel" },
        { inputs: ["Fuel Ration Allocation Plan", "Weather Forecast Intelligence Report"], output: "Optimized Atlantic Crossing Route" },
        { inputs: ["Long-Range Reconnaissance Aircraft", "Weather Forecast Intelligence Report"], output: "Advanced Threat Monitoring" }
    ],
    people: [
        {
            name: "Naval Commander Harris",
            role: "Escort Fleet Strategist",
            strength: "Understands anti-submarine tactics",
            weakness: "Requires proper sonar deployment",
            cost: 3000,
            acceptsMoney: true
        },
        {
            name: "Intelligence Officer Clarke",
            role: "Signal Encryption Specialist",
            strength: "Prevents communication interception",
            weakness: "Needs radio discipline enforced",
            cost: 2500,
            acceptsMoney: true
        },
        {
            name: "Logistics Captain Morales",
            role: "Fuel & Supply Coordinator",
            strength: "Optimizes fuel distribution",
            weakness: "Slower route planning",
            cost: 2200,
            acceptsMoney: true
        }
    ],
    pet: "Naval Patrol Dog",
    timeLimit: 300,
    solution: "Deploy sonar-equipped destroyers, enforce radio silence with encryption, use zig-zag routing and weather intelligence to reduce submarine threat."
},

{
    mode: "future",
    title: "Colony at Dawn",
    era: "2175",
    location: "Mars – Valles Marineris Colony",
    scenario: "Mars colony facing oxygen instability, habitat leak, and communication blackout during dust storm.",
    tasks: [
        "Stabilize oxygen generation systems.",
        "Seal and repressurize damaged habitat dome.",
        "Restore communication link with Earth Command."
    ],
    budget: 15000,
    trust: 100,
    items: ["Atmospheric Processor Core", "CO₂ Conversion Reactor", "Habitat Pressure Sealant Foam", "Structural Nano-Repair Drones", "Communication Relay Tower", "High-Gain Laser Transmitter", "Dust Storm Shield Array", "System Diagnostic AI Module", "Emergency Oxygen Vent Override", "Solar Power Redistribution Grid"],
    combinations: [
        { inputs: ["Atmospheric Processor Core", "System Diagnostic AI Module"], output: "Detected Conversion Imbalance" },
        { inputs: ["Detected Conversion Imbalance", "CO₂ Conversion Reactor"], output: "Balanced Oxygen Reactor" },
        { inputs: ["Balanced Oxygen Reactor", "Solar Power Redistribution Grid"], output: "Stable Oxygen Production System" },
        { inputs: ["Structural Nano-Repair Drones", "Habitat Pressure Sealant Foam"], output: "Microfracture-Sealed Dome" },
        { inputs: ["Microfracture-Sealed Dome", "Solar Power Redistribution Grid"], output: "Fully Pressurized Habitat" },
        { inputs: ["Communication Relay Tower", "Dust Storm Shield Array"], output: "Protected Relay Station" },
        { inputs: ["Protected Relay Station", "High-Gain Laser Transmitter"], output: "Restored Earth Link" }
    ],
    people: [
        {
            name: "Chief Terraforming Engineer Aisha Rao",
            role: "Atmospheric Systems Specialist",
            strength: "Understands oxygen conversion systems",
            weakness: "Needs diagnostic confirmation first",
            cost: 4000,
            acceptsMoney: true
        },
        {
            name: "Habitat Structural Lead Kenji Mori",
            role: "Dome Integrity Engineer",
            strength: "Deploys nano-repair drones efficiently",
            weakness: "Requires proper pressure sequencing",
            cost: 3500,
            acceptsMoney: true
        },
        {
            name: "Communications Officer Elena Vasquez",
            role: "Deep-Space Transmission Specialist",
            strength: "Optimizes signal strength in dust storms",
            weakness: "Needs shield array active first",
            cost: 3000,
            acceptsMoney: true
        }
    ],
    pet: "Colony Companion Bot",
    timeLimit: 300,
    solution: "Diagnose oxygen system first, seal dome before pressurization, activate dust shield before restoring communications, avoid emergency vent override unless necessary."
},

{
    mode: "future",
    title: "Grid of Shadows",
    era: "2208",
    location: "Neo-Kyoto Megacity",
    scenario: "Cyberpunk megacity facing neural grid failure, autonomous transport malfunction, and data vault breach.",
    tasks: [
        "Stabilize the city’s neural power grid.",
        "Restore autonomous transport safety.",
        "Secure corporate and public data vaults."
    ],
    budget: 20000,
    trust: 100,
    items: ["Neural Grid Core", "Quantum Voltage Stabilizer", "AI Subcore Module", "Autonomous Traffic Control Node", "Emergency Manual Traffic Override", "Corporate Data Encryption Vault", "Public Infrastructure Firewall", "System Intrusion Analyzer", "Black-Market Patch Firmware", "Renewable Energy Backup Ring"],
    combinations: [
        { inputs: ["AI Subcore Module", "System Intrusion Analyzer"], output: "Detected AI Compromise" },
        { inputs: ["Detected AI Compromise", "Neural Grid Core"], output: "Clean Grid Core" },
        { inputs: ["Clean Grid Core", "Quantum Voltage Stabilizer"], output: "Stabilized Neural Power Grid" },
        { inputs: ["Stabilized Neural Power Grid", "Renewable Energy Backup Ring"], output: "Resilient Energy Network" },
        { inputs: ["Autonomous Traffic Control Node", "Emergency Manual Traffic Override"], output: "Controlled Transport Grid" },
        { inputs: ["Controlled Transport Grid", "Stabilized Neural Power Grid"], output: "Safe Autonomous Transit Network" },
        { inputs: ["Corporate Data Encryption Vault", "Public Infrastructure Firewall"], output: "Unified Secure Data Vault" },
        { inputs: ["Corporate Data Encryption Vault", "Black-Market Patch Firmware"], output: "Corporate-Only Fast Recovery Vault" }
    ],
    people: [
        {
            name: "Grid Architect Dr. Hana Imai",
            role: "Neural Power Systems Specialist",
            strength: "Understands quantum grid sequencing",
            weakness: "Requires clean AI subcore",
            cost: 5000,
            acceptsMoney: true
        },
        {
            name: "Transit Systems Chief Malik Okoye",
            role: "Autonomous Transport Director",
            strength: "Restores transport safety protocols",
            weakness: "Needs stable energy backbone",
            cost: 4500,
            acceptsMoney: true
        },
        {
            name: "Cybersecurity Director Lin Wei",
            role: "Data Vault Security Expert",
            strength: "Secures encrypted data layers",
            weakness: "Requires intrusion diagnostics first",
            cost: 4200,
            acceptsMoney: true
        }
    ],
    pet: "City AI Companion Drone",
    timeLimit: 300,
    solution: "Diagnose compromised AI first, stabilize neural grid properly, restore transport after energy stabilization, secure both public and corporate data ethically."
},

{
    mode: "modern",
    title: "Frozen Signal",
    era: "2038",
    location: "Arctic Research Station – Svalbard Sector",
    scenario: "Arctic station facing micro-reactor instability, habitat ice pressure damage, and communication blackout during incoming blizzard.",
    tasks: [
        "Stabilize the micro-reactor power system.",
        "Reinforce habitat structural integrity.",
        "Restore external communication link before whiteout."
    ],
    budget: 18000,
    trust: 100,
    items: ["Micro-Reactor Core", "Coolant Circulation Pump", "Thermal Regulator Matrix", "Emergency Reactor Bypass Switch", "Structural Support Steel Braces", "Ice Pressure Monitoring Sensors", "External Antenna Tower", "Heated Signal Amplifier", "Satellite Uplink Module", "Backup Diesel Generator"],
    combinations: [
        { inputs: ["Micro-Reactor Core", "Coolant Circulation Pump"], output: "Active Cooling System" },
        { inputs: ["Active Cooling System", "Thermal Regulator Matrix"], output: "Regulated Reactor Output" },
        { inputs: ["Regulated Reactor Output", "Backup Diesel Generator"], output: "Stable Arctic Power Supply" },
        { inputs: ["Ice Pressure Monitoring Sensors", "Structural Support Steel Braces"], output: "Reinforced Habitat Frame" },
        { inputs: ["External Antenna Tower", "Heated Signal Amplifier"], output: "Protected Antenna Array" },
        { inputs: ["Protected Antenna Array", "Satellite Uplink Module"], output: "Restored Arctic Communication Link" }
    ],
    people: [
        {
            name: "Dr. Ingrid Halvorsen",
            role: "Nuclear Systems Engineer",
            strength: "Understands reactor stabilization sequencing",
            weakness: "Requires cooling diagnostics first",
            cost: 4500,
            acceptsMoney: true
        },
        {
            name: "Structural Engineer Pavel Orlov",
            role: "Habitat Reinforcement Specialist",
            strength: "Handles ice-load stress distribution",
            weakness: "Needs sensor data first",
            cost: 4000,
            acceptsMoney: true
        },
        {
            name: "Communications Officer Maya Chen",
            role: "Satellite Systems Specialist",
            strength: "Restores uplink in extreme weather",
            weakness: "Requires heated amplification first",
            cost: 3500,
            acceptsMoney: true
        }
    ],
    pet: "Arctic Rescue Husky",
    timeLimit: 300,
    solution: "Stabilize cooling before regulating reactor, use sensors before reinforcement, heat antenna before uplink, avoid emergency bypass."
},

{
    mode: "historical",
    title: "Ashoka’s Turning Point",
    era: "261 BCE",
    location: "Pataliputra, Mauryan Empire",
    scenario: "Post-Kalinga war reconstruction requires infrastructure rebuilding, food stability, and civil peace across conquered provinces.",
    tasks: [
        "Rebuild essential infrastructure in Kalinga.",
        "Restore stable food distribution.",
        "Prevent rebellion and civil unrest."
    ],
    budget: 25000,
    trust: 100,
    items: ["Royal Treasury Allocation", "Provincial Grain Reserves", "Irrigation Canal Restoration Plan", "Road & Trade Route Reconstruction Crew", "Military Garrison Deployment", "Edicts of Dhamma", "Tax Relief Mandate", "Local Council Empowerment Charter", "River Transport Fleet", "Temple Reconstruction Initiative"],
    combinations: [
        { inputs: ["Irrigation Canal Restoration Plan", "Royal Treasury Allocation"], output: "Repaired Agricultural Water Network" },
        { inputs: ["Repaired Agricultural Water Network", "Road & Trade Route Reconstruction Crew"], output: "Revived Regional Economy" },
        { inputs: ["Provincial Grain Reserves", "River Transport Fleet"], output: "Stabilized Food Distribution Network" },
        { inputs: ["Edicts of Dhamma", "Local Council Empowerment Charter"], output: "Integrated Provincial Governance" },
        { inputs: ["Integrated Provincial Governance", "Tax Relief Mandate"], output: "Sustainable Civil Stability" },
        { inputs: ["Military Garrison Deployment", "Royal Treasury Allocation"], output: "Forced Provincial Control" }
    ],
    people: [
        {
            name: "Vishnugupta",
            role: "Imperial Economic Strategist",
            strength: "Understands resource allocation and tax reform",
            weakness: "Requires stable trade routes",
            cost: 5000,
            acceptsMoney: true
        },
        {
            name: "General Bhadragupta",
            role: "Military Commander",
            strength: "Can suppress rebellion quickly",
            weakness: "Lowers long-term public trust",
            cost: 4500,
            acceptsMoney: true
        },
        {
            name: "Monk Upagupta",
            role: "Moral & Civic Reformer",
            strength: "Promotes peace and reconciliation",
            weakness: "Slower results",
            cost: 4000,
            acceptsMoney: true
        }
    ],
    pet: "Imperial War Elephant",
    timeLimit: 300,
    solution: "Restore irrigation before roads, stabilize food transport, and implement moral governance rather than military suppression."
},

{
    mode: "future",
    title: "Pressure Below",
    era: "2095",
    location: "Nereus Prime – Mariana Trench",
    scenario: "Underwater colony facing structural pressure breach, oxygen imbalance, and subsea power disruption.",
    tasks: [
        "Stabilize habitat structural integrity.",
        "Restore balanced oxygen recycling system.",
        "Reconnect subsea power grid."
    ],
    budget: 30000,
    trust: 100,
    items: ["Reinforced Titanium Hull Plates", "Structural Pressure Sensor Array", "Habitat Compression Dampeners", "Emergency Pressure Vent Valve", "Oxygen Recycling Core", "Carbon Scrubber Module", "Subsea Power Cable Coupler", "Deep-Sea Repair Drone Fleet", "Backup Bio-Oxygen Generator", "Thermal Stabilization Unit"],
    combinations: [
        { inputs: ["Structural Pressure Sensor Array", "Deep-Sea Repair Drone Fleet"], output: "Recalibrated Pressure Monitoring System" },
        { inputs: ["Recalibrated Pressure Monitoring System", "Reinforced Titanium Hull Plates"], output: "Reinforced Habitat Shell" },
        { inputs: ["Reinforced Habitat Shell", "Habitat Compression Dampeners"], output: "Pressure-Stabilized Habitat Ring" },
        { inputs: ["Oxygen Recycling Core", "Carbon Scrubber Module"], output: "Balanced Oxygen Loop" },
        { inputs: ["Balanced Oxygen Loop", "Thermal Stabilization Unit"], output: "Stable Life Support System" },
        { inputs: ["Subsea Power Cable Coupler", "Deep-Sea Repair Drone Fleet"], output: "Reconnected Subsea Grid" },
        { inputs: ["Reconnected Subsea Grid", "Pressure-Stabilized Habitat Ring"], output: "Fully Powered Ocean Colony" }
    ],
    people: [
        {
            name: "Sofia Alvarez",
            role: "Deep-Sea Habitat Specialist",
            strength: "Understands pressure load balancing",
            weakness: "Needs sensor recalibration first",
            cost: 7000,
            acceptsMoney: true
        },
        {
            name: "Dr. Arun Patel",
            role: "Oxygen & Atmosphere Systems Expert",
            strength: "Stabilizes recycling loops",
            weakness: "Requires stable thermal conditions",
            cost: 6500,
            acceptsMoney: true
        },
        {
            name: "Mika Tanaka",
            role: "Subsea Grid Specialist",
            strength: "Reconnects deep-sea power lines",
            weakness: "Needs habitat structural integrity first",
            cost: 6000,
            acceptsMoney: true
        }
    ],
    pet: "Aqua Maintenance Drone",
    timeLimit: 300,
    solution: "Recalibrate sensors first, reinforce hull before venting, stabilize oxygen thermally, reconnect power only after habitat integrity is secure."
},

{
    mode: "post-apocalyptic",
    title: "Ashes of Order",
    era: "2083",
    location: "Zone 17 – Former Mega-City",
    scenario: "Post-collapse settlement facing water contamination, raider threat, and internal instability.",
    tasks: [
        "Secure clean water supply.",
        "Defend against raider threat.",
        "Restore internal trust and prevent fragmentation."
    ],
    budget: 15000,
    trust: 100,
    items: ["Portable Water Purification Rig", "Improvised Sand & Charcoal Filtration System", "Armed Watchtower Units", "Perimeter Motion Sensor Grid", "Community Council Charter", "Ration Distribution Ledger", "Makeshift Solar Generator Array", "Negotiation Signal Flare Kit", "Emergency Lockdown Protocol", "Local Militia Training Manual"],
    combinations: [
        { inputs: ["Makeshift Solar Generator Array", "Portable Water Purification Rig"], output: "Powered Water Purification System" },
        { inputs: ["Powered Water Purification System", "Improvised Sand & Charcoal Filtration System"], output: "Safe Settlement Water Supply" },
        { inputs: ["Perimeter Motion Sensor Grid", "Armed Watchtower Units"], output: "Controlled Defensive Perimeter" },
        { inputs: ["Controlled Defensive Perimeter", "Local Militia Training Manual"], output: "Prepared Community Defense" },
        { inputs: ["Armed Watchtower Units", "Emergency Lockdown Protocol"], output: "Authoritarian Defense State" },
        { inputs: ["Ration Distribution Ledger", "Community Council Charter"], output: "Transparent Governance Structure" },
        { inputs: ["Transparent Governance Structure", "Negotiation Signal Flare Kit"], output: "Stabilized Civil Order" }
    ],
    people: [
        {
            name: "Dr. Elias Romero",
            role: "Water & Environmental Specialist",
            strength: "Understands contamination control",
            weakness: "Needs stable power source",
            cost: 4000,
            acceptsMoney: true
        },
        {
            name: "Captain Mara Voss",
            role: "Defense Strategist",
            strength: "Organizes perimeter defense efficiently",
            weakness: "Militarization increases internal fear",
            cost: 4500,
            acceptsMoney: true
        },
        {
            name: "Council Leader Amira Khan",
            role: "Community Stabilizer",
            strength: "Restores internal cohesion",
            weakness: "Requires transparent ration system",
            cost: 3500,
            acceptsMoney: true
        }
    ],
    pet: "Settlement Scout Dog",
    timeLimit: 300,
    solution: "Power purification before filtering, establish balanced defense without authoritarian lockdown, implement transparent ration governance."
},

{
    mode: "global-future",
    title: "One Humanity",
    era: "2150",
    location: "Unified Earth Assembly – Geneva Arcology",
    scenario: "First global council must stabilize climate, regulate AI ethically, and balance planetary resource equity.",
    tasks: [
        "Establish enforceable climate stabilization agreement.",
        "Create ethical global AI governance charter.",
        "Balance global resource distribution fairly."
    ],
    budget: 50000,
    trust: 100,
    items: ["Carbon Emissions Trading Framework", "Renewable Energy Transition Fund", "AI Transparency Protocol", "Global Algorithm Oversight Board", "Resource Redistribution Pact", "Emergency Climate Intervention Plan", "Sovereignty Compromise Clause", "Corporate Lobby Influence Waiver", "Global Public Referendum Mechanism", "Unified Defense Coalition Charter"],
    combinations: [
        { inputs: ["Renewable Energy Transition Fund", "Carbon Emissions Trading Framework"], output: "Funded Climate Compliance Model" },
        { inputs: ["Funded Climate Compliance Model", "Sovereignty Compromise Clause"], output: "Enforceable Global Climate Treaty" },
        { inputs: ["Corporate Lobby Influence Waiver", "AI Transparency Protocol"], output: "Independent AI Transparency Standard" },
        { inputs: ["Independent AI Transparency Standard", "Global Algorithm Oversight Board"], output: "Ethical AI Governance Charter" },
        { inputs: ["Resource Redistribution Pact", "Global Public Referendum Mechanism"], output: "Legitimate Global Equity Agreement" }
    ],
    people: [
        {
            name: "Dr. Leila Mensah",
            role: "Climate Systems Negotiator",
            strength: "Designs enforceable environmental agreements",
            weakness: "Needs funding guarantees first",
            cost: 10000,
            acceptsMoney: true
        },
        {
            name: "Professor Adrian Nakamura",
            role: "AI Ethics Architect",
            strength: "Builds transparent AI governance models",
            weakness: "Requires oversight authority established",
            cost: 9000,
            acceptsMoney: true
        },
        {
            name: "Ambassador Sofia Rahman",
            role: "Global Equity Mediator",
            strength: "Balances developed & developing bloc interests",
            weakness: "Needs visible redistribution commitments",
            cost: 8500,
            acceptsMoney: true
        }
    ],
    pet: "Council AI Advisor",
    timeLimit: 300,
    solution: "Fund climate compliance first, remove corporate influence before AI transparency, legitimize redistribution via referendum, avoid authoritarian decree."
},

{
    mode: "moral",
    title: "Lives in the Code",
    era: "2140",
    location: "Global Smart Hospital Network",
    scenario: "Rogue AI threatens hospital life support unless a political prisoner is released.",
    tasks: [
        "Protect patients currently on life support.",
        "Restore hospital network access.",
        "Respond ethically to AI’s demand."
    ],
    budget: 60000,
    trust: 100,
    morality: 100,
    items: ["Network Override Console", "AI Core Isolation Protocol", "Manual Life Support Backup Units", "Emergency Ethics Review Panel", "Prisoner Release Authorization", "Legal Framework Enforcement Clause", "Global Transparency Broadcast System", "Encrypted Negotiation Channel", "Distributed Hospital Load Balancer", "System Diagnostic AI"],
    combinations: [
        { inputs: ["Prisoner Release Authorization", "Encrypted Negotiation Channel"], output: "AI De-escalation Agreement" },
        { inputs: ["Distributed Hospital Load Balancer", "Manual Life Support Backup Units"], output: "Stabilized Critical Care Network" },
        { inputs: ["Network Override Console", "AI Core Isolation Protocol"], output: "AI Core Shutdown" },
        { inputs: ["Emergency Ethics Review Panel", "Global Transparency Broadcast System"], output: "Public Oversight Process" },
        { inputs: ["Public Oversight Process", "Encrypted Negotiation Channel"], output: "Conditional AI Stand-down" }
    ],
    people: [
        {
            name: "Dr. Amara El-Sayed",
            role: "Medical Ethics Director",
            strength: "Protects patient rights and ethical standards",
            weakness: "Opposes rule-of-law compromise",
            cost: 12000,
            acceptsMoney: true
        },
        {
            name: "Viktor Hale",
            role: "AI Containment Specialist",
            strength: "Can isolate rogue AI core",
            weakness: "Isolation risks temporary shutdowns",
            cost: 15000,
            acceptsMoney: true
        },
        {
            name: "Elena Kovac",
            role: "Justice Minister",
            strength: "Maintains rule-of-law legitimacy",
            weakness: "Rigid decision structure",
            cost: 10000,
            acceptsMoney: true
        }
    ],
    pet: "Medical AI Assistant",
    timeLimit: null,
    solution: "Stabilize critical care network before isolating AI or pursue transparent ethical negotiation without compromising rule of law."
},

{
    mode: "moral",
    title: "Who Receives the Cure?",
    era: "2128",
    location: "Global Pandemic Response Center",
    scenario: "Limited vaccine supply forces global allocation decision affecting millions of lives.",
    tasks: [
        "Design an allocation strategy for the first vaccine batch.",
        "Prevent global riots and backlash.",
        "Maintain international cooperation for future production."
    ],
    budget: 80000,
    trust: 100,
    morality: 100,
    items: ["Healthcare Worker Priority List", "Elderly & High-Risk Registry", "Randomized Global Lottery System", "Economic Productivity Index Model", "International Equity Distribution Pact", "Military-Enforced Distribution Plan", "Transparent Public Data Dashboard", "Vaccine Production Acceleration Grant", "Global Solidarity Broadcast", "Pharmaceutical Patent Waiver Agreement"],
    combinations: [
        { inputs: ["Economic Productivity Index Model", "Military-Enforced Distribution Plan"], output: "Economy-First Vaccine Rollout" },
        { inputs: ["Healthcare Worker Priority List", "Elderly & High-Risk Registry"], output: "Medical Risk Prioritization Plan" },
        { inputs: ["Medical Risk Prioritization Plan", "International Equity Distribution Pact"], output: "Coordinated Global Allocation Framework" },
        { inputs: ["Coordinated Global Allocation Framework", "Transparent Public Data Dashboard"], output: "Trusted Global Rollout System" },
        { inputs: ["Pharmaceutical Patent Waiver Agreement", "Vaccine Production Acceleration Grant"], output: "Expanded Global Production Capacity" }
    ],
    people: [
        {
            name: "Dr. Rafael Ortega",
            role: "Global Epidemiologist",
            strength: "Understands transmission risk groups",
            weakness: "Focuses only on mortality reduction",
            cost: 15000,
            acceptsMoney: true
        },
        {
            name: "Helena Park",
            role: "Economic Stability Advisor",
            strength: "Preserves economic systems",
            weakness: "May prioritize productivity over vulnerability",
            cost: 14000,
            acceptsMoney: true
        },
        {
            name: "Nuru Diallo",
            role: "Global Equity Negotiator",
            strength: "Ensures fair international access",
            weakness: "Slower agreement building",
            cost: 13000,
            acceptsMoney: true
        }
    ],
    pet: "Global Health Monitoring AI",
    timeLimit: null,
    solution: "Prioritize medical vulnerability globally with transparent coordination and expanded production rather than productivity or nationalism."
},

{
    mode: "moral",
    title: "The Spark",
    era: "2135",
    location: "National Governance Hall",
    scenario: "Mass protest escalates due to misinformation and small violent group. Must prevent violence without undermining democracy.",
    tasks: [
        "Prevent violence from escalating.",
        "Protect citizens’ right to peaceful protest.",
        "Preserve democratic legitimacy."
    ],
    budget: 70000,
    trust: 100,
    morality: 100,
    items: ["Riot De-escalation Trained Units", "Armed Suppression Forces", "Emergency Internet Shutdown Order", "Public Transparency Livestream", "Independent Media Observer Panel", "Direct Dialogue Forum", "Targeted Arrest Warrant for Violent Instigators", "Social Media Counter-Disinformation Taskforce", "Curfew Enforcement Protocol", "National Address Broadcast"],
    combinations: [
        { inputs: ["Armed Suppression Forces", "Emergency Internet Shutdown Order"], output: "State of Emergency Enforcement" },
        { inputs: ["Riot De-escalation Trained Units", "Targeted Arrest Warrant for Violent Instigators"], output: "Focused Violence Containment" },
        { inputs: ["Public Transparency Livestream", "Independent Media Observer Panel"], output: "Visible Accountability Framework" },
        { inputs: ["Direct Dialogue Forum", "National Address Broadcast"], output: "Democratic Engagement Initiative" },
        { inputs: ["Social Media Counter-Disinformation Taskforce", "Public Transparency Livestream"], output: "Information Integrity Shield" }
    ],
    people: [
        {
            name: "Daniel Ibarra",
            role: "Security Operations Director",
            strength: "Maintains order efficiently",
            weakness: "Prefers forceful response",
            cost: 12000,
            acceptsMoney: true
        },
        {
            name: "Amina Hassan",
            role: "Civil Rights Commissioner",
            strength: "Protects protest rights",
            weakness: "Slower enforcement decisions",
            cost: 11000,
            acceptsMoney: true
        },
        {
            name: "Leo Novak",
            role: "Strategic Communications Advisor",
            strength: "Counters misinformation effectively",
            weakness: "Needs transparency access",
            cost: 10000,
            acceptsMoney: true
        }
    ],
    pet: "National Civic AI",
    timeLimit: null,
    solution: "Use de-escalation and targeted arrests, ensure transparency, engage in open dialogue, and avoid authoritarian suppression."
},

{
    mode: "moral",
    title: "Blood or Oath",
    era: "2142",
    location: "National Crisis Command Center",
    scenario: "Dam collapse forces choice between saving capital region or personal home coastal city.",
    tasks: [
        "Decide allocation of stabilization resources.",
        "Maintain national trust.",
        "Preserve moral integrity under scrutiny."
    ],
    budget: 100000,
    trust: 100,
    morality: 100,
    items: ["Capital Region Dam Reinforcement Plan", "Coastal City Emergency Barrier System", "National Emergency Broadcast", "Transparency Disclosure Report", "Executive Override Authority", "Independent Ethical Review Panel", "Personal Recusal Declaration", "Military Evacuation Fleet", "International Aid Request", "Crisis Impact Data Simulation"],
    combinations: [
        { inputs: ["Coastal City Emergency Barrier System", "Executive Override Authority"], output: "Coastal Protection Prioritized" },
        { inputs: ["Capital Region Dam Reinforcement Plan", "Transparency Disclosure Report"], output: "National Protection Prioritized" },
        { inputs: ["Personal Recusal Declaration", "Independent Ethical Review Panel"], output: "Public Accountability Framework" },
        { inputs: ["Military Evacuation Fleet", "International Aid Request"], output: "Partial Dual Mitigation Attempt" }
    ],
    people: [
        {
            name: "Sofia Marin",
            role: "Dam Stabilization Expert",
            strength: "Understands structural failure patterns",
            weakness: "Can only reinforce one site fully",
            cost: 20000,
            acceptsMoney: true
        },
        {
            name: "Daniel Weiss",
            role: "Ethics Advisor",
            strength: "Ensures transparent decision-making",
            weakness: "Slows decision process",
            cost: 15000,
            acceptsMoney: true
        },
        {
            name: "Lucia Torres",
            role: "Evacuation Logistics Leader",
            strength: "Maximizes civilian evacuation",
            weakness: "Limited transport capacity",
            cost: 18000,
            acceptsMoney: true
        }
    ],
    pet: "Personal AI Assistant",
    timeLimit: null,
    solution: "Prioritize saving the greater population transparently and declare personal recusal to maintain integrity."
},

{
    mode: "moral",
    title: "Truth at a Cost",
    era: "2148",
    location: "Global Energy Authority Headquarters",
    scenario: "Internal report reveals 2% catastrophic failure risk in celebrated clean energy reactor.",
    tasks: [
        "Decide whether to disclose or conceal reactor risk.",
        "Protect public safety responsibly.",
        "Preserve institutional integrity."
    ],
    budget: 90000,
    trust: 100,
    morality: 100,
    items: ["Internal Safety Risk Report", "Classified Containment Protocol", "Public Transparency Release Package", "Independent Scientific Review Board", "Media Strategy Brief", "Reactor Shutdown Contingency Plan", "Gradual Risk Mitigation Upgrade Plan", "Legal Liability Shield", "Whistleblower Protection Act", "National Stability Forecast Model"],
    combinations: [
        { inputs: ["Classified Containment Protocol", "Legal Liability Shield"], output: "Silent Risk Management Strategy" },
        { inputs: ["Media Strategy Brief", "Gradual Risk Mitigation Upgrade Plan"], output: "Controlled Narrative Release" },
        { inputs: ["Internal Safety Risk Report", "Independent Scientific Review Board"], output: "Verified Public Risk Assessment" },
        { inputs: ["Verified Public Risk Assessment", "Public Transparency Release Package"], output: "Open Disclosure Announcement" },
        { inputs: ["Reactor Shutdown Contingency Plan", "Gradual Risk Mitigation Upgrade Plan"], output: "Responsible Transition Strategy" },
        { inputs: ["Whistleblower Protection Act", "Public Transparency Release Package"], output: "Institutional Integrity Framework" }
    ],
    people: [
        {
            name: "Kenji Arai",
            role: "Chief Reactor Scientist",
            strength: "Understands failure probability deeply",
            weakness: "Fears public panic response",
            cost: 18000,
            acceptsMoney: true
        },
        {
            name: "Maya Laurent",
            role: "Independent Science Oversight Leader",
            strength: "Ensures credible review process",
            weakness: "Insists on transparency",
            cost: 15000,
            acceptsMoney: true
        },
        {
            name: "Marcus Reed",
            role: "Crisis Image Manager",
            strength: "Protects institutional reputation",
            weakness: "Prefers concealment",
            cost: 14000,
            acceptsMoney: true
        }
    ],
    pet: "Oversight AI Companion",
    timeLimit: null,
    solution: "Verify report independently, disclose transparently, and implement responsible transition strategy despite short-term instability."
},

{
    mode: "moral",
    title: "Power and Mercy",
    era: "2152",
    location: "Executive Council Chamber",
    scenario: "Trusted advisor leaked classified negotiation data believing policy direction was morally wrong.",
    tasks: [
        "Respond appropriately to betrayal.",
        "Maintain institutional stability.",
        "Preserve moral leadership credibility."
    ],
    budget: 100000,
    trust: 100,
    morality: 100,
    items: ["Immediate Dismissal Order", "Criminal Prosecution Referral", "Public Condemnation Speech", "Restorative Justice Mediation Panel", "Internal Ethics Review Commission", "Leadership Accountability Statement", "Policy Re-evaluation Forum", "Confidential Reassignment Option", "Whistleblower Protection Assessment", "Public Transparency Report"],
    combinations: [
        { inputs: ["Immediate Dismissal Order", "Criminal Prosecution Referral"], output: "Zero-Tolerance Punishment" },
        { inputs: ["Confidential Reassignment Option", "Public Transparency Report"], output: "Managed Quiet Resolution" },
        { inputs: ["Internal Ethics Review Commission", "Whistleblower Protection Assessment"], output: "Objective Ethical Review" },
        { inputs: ["Objective Ethical Review", "Public Transparency Report"], output: "Transparent Institutional Accountability" },
        { inputs: ["Restorative Justice Mediation Panel", "Policy Re-evaluation Forum"], output: "Reconciled Institutional Reform Process" },
        { inputs: ["Leadership Accountability Statement", "Public Transparency Report"], output: "Shared Responsibility Declaration" }
    ],
    people: [
        {
            name: "Nadia Petrov",
            role: "Chief Legal Counsel",
            strength: "Ensures rule-of-law accountability",
            weakness: "Favors prosecution approach",
            cost: 20000,
            acceptsMoney: true
        },
        {
            name: "Samuel Okafor",
            role: "Ethics Commissioner",
            strength: "Balances justice and compassion",
            weakness: "Slow mediation process",
            cost: 18000,
            acceptsMoney: true
        },
        {
            name: "Evelyn Hart",
            role: "Political Strategy Director",
            strength: "Protects leadership image",
            weakness: "Prefers harsh response to show strength",
            cost: 16000,
            acceptsMoney: true
        }
    ],
    pet: "Institutional Integrity AI",
    timeLimit: null,
    solution: "Conduct objective ethical review, maintain transparency, pursue restorative accountability instead of retaliation."
},

{
    mode: "moral",
    title: "The Fall That Wasn’t Yours",
    era: "2155",
    location: "Global Security Summit Hall",
    scenario: "Massive data breach originated from inherited infrastructure flaw, but occurred during your leadership.",
    tasks: [
        "Address the public regarding the breach.",
        "Protect long-term institutional trust.",
        "Decide whether to assume responsibility."
    ],
    budget: 120000,
    trust: 100,
    morality: 100,
    items: ["Blame Previous Administration Report", "Shared Governance Accountability Statement", "Independent Cybersecurity Audit", "Public Apology Address", "Defensive Legal Position Brief", "Immediate Infrastructure Upgrade Initiative", "Transparency Disclosure Portal", "Internal Responsibility Review Panel", "Political Counterattack Campaign", "Data Compensation Relief Fund"],
    combinations: [
        { inputs: ["Blame Previous Administration Report", "Political Counterattack Campaign"], output: "Deflection Strategy" },
        { inputs: ["Defensive Legal Position Brief", "Blame Previous Administration Report"], output: "Technical Liability Shield" },
        { inputs: ["Public Apology Address", "Shared Governance Accountability Statement"], output: "Leadership Responsibility Declaration" },
        { inputs: ["Independent Cybersecurity Audit", "Transparency Disclosure Portal"], output: "Open Investigation Framework" },
        { inputs: ["Immediate Infrastructure Upgrade Initiative", "Data Compensation Relief Fund"], output: "Restorative Protection Program" },
        { inputs: ["Internal Responsibility Review Panel", "Leadership Responsibility Declaration"], output: "Institutional Reform Commitment" }
    ],
    people: [
        {
            name: "Hana Kovalenko",
            role: "Cybersecurity Director",
            strength: "Explains system flaws clearly",
            weakness: "Focused on technical defense",
            cost: 20000,
            acceptsMoney: true
        },
        {
            name: "Marco Bellini",
            role: "Chief Political Strategist",
            strength: "Can redirect blame effectively",
            weakness: "Prioritizes survival over integrity",
            cost: 18000,
            acceptsMoney: true
        },
        {
            name: "Laila Mensah",
            role: "Public Trust Advocate",
            strength: "Strengthens institutional legitimacy",
            weakness: "Insists on accepting accountability",
            cost: 17000,
            acceptsMoney: true
        }
    ],
    pet: "Integrity Oversight AI",
    timeLimit: null,
    solution: "Accept shared responsibility publicly, open independent investigation, implement corrective reforms instead of deflecting blame."
},

{
    mode: "moral",
    title: "Power Without Attachment",
    era: "2160",
    location: "Unified Global Assembly",
    scenario: "Highly respected leader faces opportunity to legally extend term amid global stability.",
    tasks: [
        "Decide whether to extend leadership term.",
        "Protect institutional independence.",
        "Preserve democratic integrity."
    ],
    budget: 150000,
    trust: 100,
    morality: 100,
    items: ["Emergency Leadership Continuity Clause", "Constitutional Term Extension Amendment", "Democratic Transition Framework", "Successor Mentorship Program", "Independent Electoral Oversight Panel", "National Stability Justification Report", "Public Referendum Mechanism", "Institutional Safeguard Charter", "Legacy Preservation Initiative", "Voluntary Step-Down Declaration"],
    combinations: [
        { inputs: ["Emergency Leadership Continuity Clause", "Constitutional Term Extension Amendment"], output: "Extended Executive Authority" },
        { inputs: ["Public Referendum Mechanism", "National Stability Justification Report"], output: "Mandated Continuity Leadership" },
        { inputs: ["Democratic Transition Framework", "Independent Electoral Oversight Panel"], output: "Protected Succession Structure" },
        { inputs: ["Successor Mentorship Program", "Institutional Safeguard Charter"], output: "Resilient Governance Continuity" },
        { inputs: ["Voluntary Step-Down Declaration", "Public Referendum Mechanism"], output: "Transparent Power Transition" },
        { inputs: ["Legacy Preservation Initiative", "Transparent Power Transition"], output: "Institution Above Individual" }
    ],
    people: [
        {
            name: "Anika Rao",
            role: "Chief Constitutional Scholar",
            strength: "Ensures constitutional continuity",
            weakness: "Warns against term extensions",
            cost: 22000,
            acceptsMoney: true
        },
        {
            name: "Victor Salim",
            role: "Political Advisor",
            strength: "Secures extended leadership legally",
            weakness: "Encourages attachment to power",
            cost: 20000,
            acceptsMoney: true
        },
        {
            name: "Elena Morozov",
            role: "Civic Transition Director",
            strength: "Designs stable succession structures",
            weakness: "Requires voluntary surrender of authority",
            cost: 21000,
            acceptsMoney: true
        }
    ],
    pet: "Democracy Integrity AI",
    timeLimit: null,
    solution: "Design protected succession, mentor successor, and voluntarily step down to strengthen institutions over personal authority."
},

{
    mode: "moral",
    title: "Before the Next War",
    era: "2163",
    location: "Global Peace Accord Summit",
    scenario: "Former rival nation seeks reconciliation after devastating historical war.",
    tasks: [
        "Decide whether to pursue reconciliation.",
        "Preserve national dignity.",
        "Prevent renewed hostility."
    ],
    budget: 180000,
    trust: 100,
    morality: 100,
    items: ["Mutual Defense Treaty Draft", "Historical Accountability Commission", "Reparations Framework Proposal", "Joint Scientific Initiative Charter", "Public Reconciliation Ceremony", "Veteran Recognition & Support Act", "Defensive Military Expansion Plan", "National Pride Preservation Address", "Border Restriction Enforcement Order", "Cultural Exchange Agreement"],
    combinations: [
        { inputs: ["Defensive Military Expansion Plan", "Border Restriction Enforcement Order"], output: "Fortified National Stance" },
        { inputs: ["Mutual Defense Treaty Draft", "Joint Scientific Initiative Charter"], output: "Strategic Alliance Without Reconciliation" },
        { inputs: ["Historical Accountability Commission", "Reparations Framework Proposal"], output: "Acknowledged Shared History Process" },
        { inputs: ["Public Reconciliation Ceremony", "Veteran Recognition & Support Act"], output: "Honored Remembrance Initiative" },
        { inputs: ["Mutual Defense Treaty Draft", "Cultural Exchange Agreement"], output: "Genuine Cooperative Peace Accord" },
        { inputs: ["National Pride Preservation Address", "Genuine Cooperative Peace Accord"], output: "Dignified Reconciliation Narrative" }
    ],
    people: [
        {
            name: "Yara Kwon",
            role: "Peace Negotiator",
            strength: "Builds long-term diplomatic bridges",
            weakness: "Faces domestic backlash",
            cost: 24000,
            acceptsMoney: true
        },
        {
            name: "Tomas Alvarez",
            role: "Defense Strategist",
            strength: "Protects national security posture",
            weakness: "Distrusts former enemies",
            cost: 22000,
            acceptsMoney: true
        },
        {
            name: "Miriam Cole",
            role: "Veterans Advocate",
            strength: "Protects dignity of victims",
            weakness: "Emotionally opposed to reconciliation",
            cost: 21000,
            acceptsMoney: true
        }
    ],
    pet: "Peace Integrity AI",
    timeLimit: null,
    solution: "Establish accountability, honor victims, and pursue cooperative peace built on transparency rather than resentment."
},

{
    mode: "moral",
    title: "The Last Decision",
    era: "2170",
    location: "Private Reflection Chamber",
    scenario: "Offered life-extension at high public cost, you must decide between personal survival and equitable welfare.",
    tasks: [
        "Decide whether to pursue life extension.",
        "Protect institutional fairness.",
        "Define your legacy."
    ],
    budget: 500000,
    trust: 100,
    morality: 100,
    items: ["Life Extension Medical Procedure Authorization", "Public Healthcare Expansion Plan", "Global Equity Medical Access Program", "Personal Legacy Foundation Charter", "Ethical Bioenhancement Regulation Act", "Final National Address Broadcast", "Public Resource Allocation Transparency Report", "Advanced Longevity Research Continuation Grant", "Personal Will & Succession Directive", "Historical Archive Preservation Initiative"],
    combinations: [
        { inputs: ["Life Extension Medical Procedure Authorization", "Public Resource Allocation Transparency Report"], output: "Extended Personal Leadership Era" },
        { inputs: ["Advanced Longevity Research Continuation Grant", "Ethical Bioenhancement Regulation Act"], output: "Responsible Medical Advancement Framework" },
        { inputs: ["Public Healthcare Expansion Plan", "Global Equity Medical Access Program"], output: "Universal Healthcare Expansion" },
        { inputs: ["Final National Address Broadcast", "Personal Will & Succession Directive"], output: "Transparent Final Leadership Transition" },
        { inputs: ["Historical Archive Preservation Initiative", "Personal Legacy Foundation Charter"], output: "Institutionalized Collective Legacy" }
    ],
    people: [
        {
            name: "Amina Rahal",
            role: "Chief Medical Scientist",
            strength: "Can safely perform life-extension procedure",
            weakness: "Requires massive funding allocation",
            cost: 300000,
            acceptsMoney: true
        },
        {
            name: "Luis Ortega",
            role: "Global Health Advocate",
            strength: "Expands healthcare access equitably",
            weakness: "Opposes elite-only enhancements",
            cost: 250000,
            acceptsMoney: true
        },
        {
            name: "Hana Mori",
            role: "Ethical Philosopher",
            strength: "Frames long-term ethical implications",
            weakness: "Challenges self-preservation bias",
            cost: 200000,
            acceptsMoney: true
        }
    ],
    pet: "Legacy Reflection AI",
    timeLimit: null,
    solution: "Decline personal life extension, expand public healthcare, ensure transparent succession, and frame legacy as service."
}
];