window.onload = function() {
    const startUp = [
        "Initializing system...",
        "Loading user profile...",
        "Establishing secure connection...",
        "Welcome, guest.",
        "Type 'help' to see available commands."
    ]

    const output = document.getElementById('output');
    const delays = [0, 2000, 1000, 500, 500];

    let cumulative = 0;
    const cumulativeDelays = delays.map(delay => {
        cumulative += delay;
        return cumulative
    });

    startUp.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.style.marginBottom = '10px';
            p.style.marginTop = '0';
            p.textContent = line;
            output.appendChild(p);
        }, cumulativeDelays[index]);
    });

}


const input = document.getElementById('command');

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = input.value.trim();
        handleCommand(command);
        input.value = '';
    }
});


function handleCommand(command) {
    if (command.startsWith('open ')) {
        const projectName = command.slice(5).trim();
        openProject(projectName);
        return;
    } else {
        switch(command.trim().toLowerCase()) {
        case 'help':
            helpText();
            break;
        case 'whoami':
            aboutMe();
            break;
        case 'ls projects':
            projects();
            break;
        case 'skills':
            skills();
            break;
        case 'contact':
            contactInfo();
            break;
        case 'clear':
            clearTerminal();
            break;
        default:
            commandNotFound(command);
        }
    }
}

function helpText() {
    const output = document.getElementById('output');
    
    const helpLines = [
         "", 
        "┌─ AVAILABLE COMMANDS ──────────────────┐",
        "│                                       │",
        "│  whoami      - About me               │",
        "│  ls projects - List all projects      │",
        "│  open (name) - Open a specific project│",
        "│  skills      - Skills and abilities   │",
        "│  contact     - Contact information    │",
        "│  clear       - Clear terminal screen  │",
        "│                                       │",
        "└───────────────────────────────────────┘",
    ];

    const spacer = document.createElement('p');
    spacer.style.height = '20px';
    output.appendChild(spacer);


    helpLines.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.style.margin = '0';
            p.textContent = line;
            output.appendChild(p);
        }, index * 50);
    });
}

function aboutMe() {
    const output = document.getElementById('output');
    const me = [
        "", 
        "┌─ About Me ────────────────────────────┐",
        "│                                       │",
        "│  Name: Adam Locke                     │",
        "│  Role: BCIT CST student, aspiring     │",
        "│  Cybersecurity dev                    │",
        "│                                       │",
        "│  Passionate about cybersecurity,      │",
        "│  pentesting, and building projects    │",
        "│                                       │",
        "└───────────────────────────────────────┘",
    ];

    const spacer = document.createElement('p');
    spacer.style.height = '20px';
    output.appendChild(spacer);


    me.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.style.margin = '0';
            p.textContent = line;
            output.appendChild(p);
        }, index * 50);
    });
}

function projects() {
    const output = document.getElementById('output');
    const built = [
        "", 
        "┌─ Projects built ───────────────────────────┐",
        "│                                            │",
        "│  Validalligator (JS based vs extension)    │",
        "│  Fifa app (Web app)                        │",
        "│                                            │",
        "│                                            │",
        "│                                            │",
        "│                                            │",
        "│  Type open (name) to view a project        │",
        "└────────────────────────────────────────────┘",
    ];

    const spacer = document.createElement('p');
    spacer.style.height = '20px';
    output.appendChild(spacer);

    built.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.style.margin = '0';
            p.textContent = line;
            output.appendChild(p);
        }, index * 50);
    });
}


function skills() {
    const output = document.getElementById('output');
    const skillLevel = [
        {name: "HTML",  Level: 8},
        {name: "CSS",  Level: 7},
        {name: "JS",  Level: 6},
        {name: "Java",  Level: 6},
        {name: "Python",  Level: 5},
    ];

    const buildBar = (Level) => {
        const filled = '█'.repeat(Level);
        const empty = '░'.repeat(10 - Level);
        return `[${filled}${empty}] ${Level}/10`;
    };

    const skillBar = [
        "",
        "┌─ SKILLS ─────────────────────────────┐",
        "│                                      │",
        ...skillLevel.map(s => `│  ${s.name.padEnd(12)} ${buildBar(s.Level)}   │`),
        "│                                      │",
        "└──────────────────────────────────────┘",
        "",
    ];

    skillBar.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = line;
            output.appendChild(p);
        }, index * 50);
    });
}

function contactInfo() {
    const output = document.getElementById('output');
    const contact = [
        "", 
        "┌─ Contact Me ────────────────────────────────────────┐",
        "│                                                     │",
        "│  Business Email: adamlocke.2007@gmail.com           │",
        "│  Github: adalocke7                                  │",
        "│  Linkedin: https://www.linkedin.com/in/adam-lockes  │",
        "│                                                     │",
        "│                                                     │",
        "│                                                     │",
        "│                                                     │",
        "└─────────────────────────────────────────────────────┘",
    ];

    const spacer = document.createElement('p');
    spacer.style.height = '20px';
    output.appendChild(spacer);

    contact.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.style.margin = '0';
            p.textContent = line;
            output.appendChild(p);
        }, index * 50);
    });
    
}

const projectList = [
    {
        name: "Validalligator",
        title: "First hackathon project",
        description: "A VS code extension that validates your HTML.",
        tech: "JavaScript",
        link: "https://github.com/LordMangoz/hack_the_break"
    },
    {
        name: "Fifa app",
        title: "BCIT projects app",
        description: "A web app to track Fifa cup games, quiz you on terms, and navigate the stadium.",
        tech: "HTML, CSS, JavaScript",
        link: "https://github.com/adalocke7/1800-202601-BBY-02"
    },
];

function openProject(name) {
    
    const output = document.getElementById('output');
    const project = projectList.find(p => p.name === name)
    
    if (!project) {
        const p = document.createElement('p');
        p.textContent = 'Error: project ' + name + ' not found.'
        output.appendChild(p);
        return;
    }

    const lines = [
        "",
        `┌─ ${project.title} `,
        `│  Description: ${project.description}`,
        `│  Tech:        ${project.tech}`,
        `│  Link:        ${project.link}`,
        "└───────────────────────────────────────┘",
        "",
    ];

    lines.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = line;
            output.appendChild(p);
        }, index * 50);
    });
}

function clearTerminal() {

    const output = document.getElementById('output');
    output.innerHTML = '';
}

function commandNotFound(command) {
    const notFound = [
        "Unable to process the command: " + command,
        "Please enter a valid command",
        "Type 'help' to see availible commands"
    ]

    const output = document.getElementById('output');
    
    notFound.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.style.marginBottom = '10px';
            p.style.marginTop = '0';
            p.textContent = line;
            output.appendChild(p);
        }, index * 50);
    });
}