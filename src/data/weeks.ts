import type { Week } from "../types";

const karelImg =
  "https://compedu.stanford.edu/karel-reader/docs/images/ch1/karelLarge.png";

export const week1: Week = {
  slug: "week-1",
  number: 1,
  title: "Week One Section",
  subtitle: "Welcome & Karel fundamentals",
  author: "Manoj Kumar Panda",
  slides: [
    {
      id: "s1",
      title: "Welcome",
      section: "Intro",
      layout: {
        kind: "title",
        accent: "SECTION MEETING",
        title: "Welcome to Section!<br/>Week One",
        subtitle: "Code in Place 2026 | Slides by Manoj Panda",
      },
    },
    {
      id: "s2",
      title: "Meet Each Other",
      section: "Community",
      layout: {
        kind: "tiles",
        title: "Let's Meet Each Other",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-user-tie",
            title: "Section Leader Intro",
            body: "Your Section Leader will introduce themselves and share a bit about their background.",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-users",
            title: "Section-Mate Intros",
            body: "Share your name, where you're from, and one thing you're excited about.",
          },
          {
            bg: "pink",
            icon: "fa-solid fa-comments",
            title: "Comfort First",
            body: "Use the chat if you prefer not to speak out loud — that's perfectly fine!",
          },
        ],
      },
    },
    {
      id: "s3",
      title: "About Me",
      section: "Leader",
      layout: {
        kind: "twoColumnBullets",
        title: "A Little About Me",
        bullets: [
          {
            icon: "fa-solid fa-signature",
            color: "yellow",
            html: "<strong>Name:</strong> Manoj Kumar Panda",
          },
          {
            icon: "fa-solid fa-laptop-code",
            color: "pink",
            html: "I'll be your Section Leader!",
          },
          {
            icon: "fa-solid fa-graduation-cap",
            color: "yellow",
            html: "BCS Student & Fullstack Dev.",
          },
          {
            icon: "fa-brands fa-linux",
            color: "pink",
            html: "Arch Linux & Neovim user.",
          },
          {
            icon: "fa-solid fa-terminal",
            color: "yellow",
            html: "Ready to code with you all!",
          },
        ],
        image: { src: "/profile.jpg", round: true, alt: "Manoj" },
      },
    },
    {
      id: "s4",
      title: "Breaking the Ice",
      section: "Activity",
      layout: {
        kind: "bleedImage",
        title: "Breaking the Ice",
        bg: "cyan",
        subheading: "Breakout Rooms",
        paragraphs: [
          "1. Share your names one more time so everyone remembers!",
          "2. <strong>Icebreaker:</strong> What's your dream project? Think big — app, game, art, research!",
          "<em>Tip: The person geographically closest to Stanford shares first!</em>",
        ],
        image: { src: "/ice.svg", alt: "Colorful shapes" },
      },
    },
    {
      id: "s5",
      title: "Lecture Review",
      section: "Recap",
      layout: {
        kind: "sectionTitle",
        badge: "RECAP TIME",
        badgeColor: "pink",
        title: "Lecture Review",
        subtitle: "Refreshing what we learned in the main lecture this week",
      },
    },
    {
      id: "s6",
      title: "Karel Overview",
      section: "Lecture",
      layout: {
        kind: "twoColumnBullets",
        title: "Karel Overview",
        heading: "Mighty Robot Commands",
        imageLeft: true,
        image: { src: karelImg, round: true, alt: "Karel" },
        bullets: [
          {
            icon: "fa-solid fa-arrow-right",
            color: "cyan",
            html: "<code>move()</code>",
          },
          {
            icon: "fa-solid fa-rotate-left",
            color: "pink",
            html: "<code>turn_left()</code>",
          },
          {
            icon: "fa-solid fa-hand-holding",
            color: "yellow",
            html: "<code>pick_beeper()</code>",
          },
          {
            icon: "fa-solid fa-hand-sparkles",
            color: "cyan",
            html: "<code>put_beeper()</code>",
          },
        ],
      },
    },
    {
      id: "s7",
      title: "Functions",
      section: "Lecture",
      layout: {
        kind: "tiles",
        title: "Functions Overview",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-bowl-food",
            title: "The Pasta Analogy",
            body: 'Think of making pasta: "Boil Water", "Add Salt", "Cook Pasta". Each is a function with a specific purpose.',
          },
          {
            bg: "pink",
            icon: "fa-solid fa-keyboard",
            title: "The Syntax",
            body: "Define with the <code>def</code> keyword. Write code below, properly indented.",
            code: "def function_name():\n    # Function code\n    # goes here!",
          },
        ],
      },
    },
    {
      id: "s8",
      title: "Control Flow",
      section: "Lecture",
      layout: {
        kind: "tiles",
        title: "Control Flow Overview",
        tiles: [
          {
            bg: "yellow",
            icon: "fa-solid fa-repeat",
            title: "For-Loop",
            body: "<strong>Definite Loop:</strong> Performs a block of code a specific number of times.",
          },
          {
            bg: "cyan",
            icon: "fa-solid fa-infinity",
            title: "While-Loop",
            body: "<strong>Indefinite Loop:</strong> Continuously runs until condition is false.",
          },
          {
            bg: "pink",
            icon: "fa-solid fa-toggle-on",
            title: "If-Statement",
            body: "<strong>Conditional:</strong> Runs code only when condition evaluates to true.",
          },
        ],
      },
    },
    {
      id: "s9",
      title: "Hospital Karel",
      section: "Challenge",
      layout: {
        kind: "sectionTitle",
        badge: "CHALLENGE",
        badgeColor: "cyan",
        title: "Hospital Karel",
        subtitle: "Let's put our skills to the test!",
      },
    },
    {
      id: "s10",
      title: "Let's Get to Work",
      section: "Challenge",
      layout: {
        kind: "bleedImage",
        title: "Let's Get<br/>to Work!",
        bg: "pink",
        paragraphs: [
          "Open your IDE and let's start building our hospitals!",
        ],
        image: { src: "/blocks.svg", alt: "Robot blocks" },
      },
    },
    {
      id: "s11",
      title: "Wrap Up",
      section: "Closing",
      layout: {
        kind: "qa",
        title: "End of Section",
        body: "Great work today! See you all next week.",
        note: "Don't forget to submit your assignment by the deadline. Questions? Reach out via Ed Discussion!",
        contact: "Manoj Kumar Panda | Code in Place 2026",
      },
    },
  ],
};

export const week2: Week = {
  slug: "week-2",
  number: 2,
  title: "Week Two Section",
  subtitle: "Karel Problem Solving & Console Programming",
  author: "Cameron Mohne and Maggie Lee",
  slides: [
    {
      id: "w2-s1",
      title: "Welcome",
      section: "Intro",
      layout: {
        kind: "title",
        accent: "SECTION MEETING",
        title: "Welcome to Section!<br/>Week 2",
        subtitle: "Code in Place 2026 | Slides by Cameron & Maggie",
      },
    },
    {
      id: "w2-s2",
      title: "Agenda",
      section: "Intro",
      layout: {
        kind: "tiles",
        title: "Today's Agenda",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-person-circle-check",
            title: "1. Check-In",
            body: "How are we all doing?",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-robot",
            title: "2. Section Problem",
            body: "Another fun, challenging, and engaging Karel problem",
          },
          {
            bg: "pink",
            icon: "fa-solid fa-plus",
            title: "3. Bonus Problems",
            body: "Expanding on Karel or diving into consoles!",
          },
        ],
      },
    },
    {
      id: "w2-s3",
      title: "Check-In",
      section: "Intro",
      layout: {
        kind: "bleedImage",
        title: "Before We Start...",
        bg: "cyan",
        subheading: "Quick Check-In",
        paragraphs: [
          "How are you all doing!? Hopefully your first week of CIP went well!",
          "Choose one of the following to answer:",
          "● What's one thing you have enjoyed or found fun about CiP so far?",
          "● What has been your favorite problem to work on so far?",
          "● What are you looking forward to using Python/CS for?",
        ],
        image: { src: "/ice.svg", alt: "Check-in" },
      },
    },
    {
      id: "w2-s-recap",
      title: "Recap",
      section: "Recap",
      layout: {
        kind: "sectionTitle",
        badge: "LECTURE RECAP",
        badgeColor: "pink",
        title: "Loops in Python",
        subtitle: "A quick refresher on how we repeat actions",
      },
    },
    {
      id: "w2-s-for",
      title: "For Loops",
      section: "Recap",
      layout: {
        kind: "tiles",
        title: "For Loops: Definite Iteration",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-repeat",
            title: "The Concept",
            body: "Use a <code>for</code> loop when you know <strong>exactly</strong> how many times to repeat.",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-code",
            title: "Syntax",
            body: "The <code>range()</code> function tells Python how many times to run.",
            code: "for i in range(5):\n    move()\n    put_beeper()",
          },
          {
            bg: "pink",
            icon: "fa-solid fa-gears",
            title: "How it Works",
            body: "1. Python looks at the range.<br/>2. Runs the block.<br/>3. Repeats until done!",
          },
        ],
      },
    },
    {
      id: "w2-s-while",
      title: "While Loops",
      section: "Recap",
      layout: {
        kind: "tiles",
        title: "While Loops: Conditional Iteration",
        tiles: [
          {
            bg: "pink",
            icon: "fa-solid fa-infinity",
            title: "The Concept",
            body: "Use <code>while</code> when you want to repeat <strong>as long as</strong> a condition is true.",
          },
          {
            bg: "cyan",
            icon: "fa-solid fa-code",
            title: "Syntax",
            body: "The loop continues until <code>front_is_clear()</code> becomes false.",
            code: "while front_is_clear():\n  move()\n  if beepers_present():\n\tpick_beeper()",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-shield-halved",
            title: "Safety First",
            body: "Ensure the condition <em>eventually</em> becomes false to avoid infinite loops!",
          },
        ],
      },
    },
    {
      id: "w2-s4",
      title: "Questions?",
      section: "Intro",
      layout: {
        kind: "qa",
        title: "Are there any questions?",
        body: "Before we dive into the problem, does anyone have questions about the material so far?",
      },
    },
    {
      id: "w2-s5",
      title: "Section Problem",
      section: "Challenge",
      layout: {
        kind: "sectionTitle",
        badge: "KAREL CHALLENGE",
        badgeColor: "yellow",
        title: "Section Problem: Spread Beepers",
        subtitle: "Let's solve something algorithmically interesting!",
      },
    },
    {
      id: "w2-s6",
      title: "Problem Overview",
      section: "Challenge",
      layout: {
        kind: "twoColumnBullets",
        title: "Spread Beepers",
        heading: "The Goal",
        image: { src: karelImg, round: true, alt: "Karel" },
        bullets: [
          {
            icon: "fa-solid fa-layer-group",
            color: "cyan",
            html: "Karel starts in front of a <strong>pile of beepers</strong>.",
          },
          {
            icon: "fa-solid fa-arrows-left-right",
            color: "pink",
            html: "Spread them out along the row (1 per cell).",
          },
          {
            icon: "fa-solid fa-equals",
            color: "yellow",
            html: "Use exactly as many cells as beepers in the pile.",
          },
          {
            icon: "fa-solid fa-location-dot",
            color: "cyan",
            html: "Start where the pile originated (Row 1, Column 2).",
          },
        ],
      },
    },
    {
      id: "w2-s7",
      title: "Key Details",
      section: "Challenge",
      layout: {
        kind: "tiles",
        title: "Key Problem Details",
        tiles: [
          {
            bg: "pink",
            icon: "fa-solid fa-infinity",
            title: "Beepers",
            body: "The 'catch'? Karel has <strong>infinite beepers</strong> in its bag. How will you track the original count?",
          },
          {
            bg: "cyan",
            icon: "fa-solid fa-border-all",
            title: "World Attributes",
            body: "Only one row. The world is wide enough for all beepers.",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-map-pin",
            title: "Locations",
            body: "The pile is on the second column, directly in front of Karel's start.",
          },
        ],
      },
    },
    {
      id: "w2-s8",
      title: "Any Questions?",
      section: "Challenge",
      layout: {
        kind: "qa",
        title: "Questions about the problem?",
        body: "Make sure you understand the requirements before we start coding!",
      },
    },
    {
      id: "w2-s9",
      title: "Let's Code!",
      section: "Coding",
      layout: {
        kind: "bleedImage",
        title: "Let's code this up!",
        bg: "pink",
        paragraphs: [
          "Would you all prefer to do this in breakout rooms or as a whole group?",
          "Remember to use <strong>decomposition</strong> and follow <strong>PEP 8</strong> naming conventions!",
        ],
        image: { src: "/blocks.svg", alt: "Coding" },
      },
    },
    {
      id: "w2-s10",
      title: "Reflection",
      section: "Coding",
      layout: {
        kind: "qa",
        title: "Reflecting on the Problem",
        body: "What were your thoughts on the problem? What was the hardest part?",
      },
    },
    {
      id: "w2-s11",
      title: "Bonus Challenges",
      section: "Bonus",
      layout: {
        kind: "tiles",
        title: "Bonus Time!",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-list-ol",
            title: "More Rows",
            body: "What if we add more rows with piles of beepers? Spread them all!",
          },
          {
            bg: "pink",
            icon: "fa-solid fa-terminal",
            title: "Console Programming",
            body: "<strong>Duplicate Messages:</strong> Ask for a message and print it 10 times!",
          },
        ],
      },
    },
    {
      id: "w2-s12",
      title: "Wrap Up",
      section: "Closing",
      layout: {
        kind: "qa",
        title: "End of Section 2",
        body: "Great job today! Keep practicing those loops and decomposition.",
        note: "Check out the recording and starter code in the CIP portal.",
        contact: "Cameron Mohne & Maggie Lee | Code in Place 2026",
      },
    },
  ],
};

export const week3: Week = {
  slug: "week-3",
  number: 3,
  title: "Week Three Section",
  subtitle: "Fly me to the moon Mars — Variables & Types",
  author: "Cameron Mohne and Maggie Lee",
  theme: "space",
  slides: [
    {
      id: "w3-s1",
      title: "Welcome",
      section: "Intro",
      layout: {
        kind: "title",
        accent: "GALAXY EXPLORATION",
        title: "Welcome to Section!<br/>Week 3",
        subtitle: "Fly me to the moon Mars | Code in Place 2026 | Slides by Cameron & Maggie",
      },
    },
    {
      id: "w3-s2",
      title: "Agenda",
      section: "Intro",
      layout: {
        kind: "tiles",
        title: "Today's Flight Plan",
        tiles: [
          {
            bg: "indigo",
            icon: "fa-solid fa-user-astronaut",
            title: "01 — Check-In",
            body: "How are all of you doing?",
          },
          {
            bg: "softmagenta",
            icon: "fa-solid fa-satellite",
            title: "02 — Recap",
            body: "Revisiting lecture content",
          },
          {
            bg: "indigo",
            icon: "fa-solid fa-rocket",
            title: "03 — To Mars!!!",
            body: "Section Problem #1",
          },
          {
            bg: "softmagenta",
            icon: "fa-solid fa-shuttle-space",
            title: "04 — To Infinity & Beyond",
            body: "Section Problem #2",
          },
        ],
      },
    },
    {
      id: "w3-s3",
      title: "Check-In",
      section: "Intro",
      layout: {
        kind: "bleedImage",
        title: "Pre-Flight Check",
        bg: "deepblue",
        subheading: "Welcome back to another week of Code in Place section!",
        paragraphs: [
          "I hope you all are doing well! Hopefully CiP hasn't been stressful.",
          "Let's do a quick check-in! Feel free to answer <em>any</em> of the following in the chat:",
          "&#9733; If you could teach Karel <strong>ONE</strong> more command, what would it be?",
          "&#9733; What is your favorite food?",
          "&#9733; What is a hobby of yours that you do in your free time?",
        ],
        image: { src: "/ice.svg", alt: "Check-in" },
      },
    },
    {
      id: "w3-s4",
      title: "Recap",
      section: "Recap",
      layout: {
        kind: "sectionTitle",
        badge: "STARMAP RECAP",
        badgeColor: "indigo",
        title: "Recap",
        subtitle: "Revisiting variables",
      },
    },
    {
      id: "w3-s5",
      title: "Defining and Using Variables",
      section: "Recap",
      layout: {
        kind: "tiles",
        title: "Defining and Using Variables",
        tiles: [
          {
            bg: "indigo",
            icon: "fa-solid fa-box-open",
            title: "Defining Variables",
            body: "We define variables by writing the variable's name, followed by an equals sign, and then what we want to store inside.",
            code: "var_name = value",
          },
          {
            bg: "softmagenta",
            icon: "fa-solid fa-suitcase-rolling",
            title: "Using Variables",
            body: "When we use the variable's name—unless we are changing its value—we essentially open the \"suitcase\" to use what's inside.",
            code: "print(var_name)\nsum = num1 + num2",
          },
        ],
      },
    },
    {
      id: "w3-s6",
      title: "Variable Types",
      section: "Recap",
      layout: {
        kind: "tiles",
        title: "Variable Types",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-meteor",
            title: "Types",
            body: "Variables have <em>types</em>. These types are what differentiates letters and numbers to our computers.",
          },
          {
            bg: "indigo",
            icon: "fa-solid fa-list-check",
            title: "Example Types",
            body: "<strong>Strings:</strong> Words/Sentences<br/><strong>Ints:</strong> Integers; numbers without decimals<br/><strong>Floats:</strong> Any other number that isn't an integer",
          },
          {
            bg: "softmagenta",
            icon: "fa-solid fa-flask-vial",
            title: "Casting",
            body: "Sometimes, we can <strong>change from one variable type to another</strong> via <em>typecasting</em>. For example, casting a number stored as a string so we can do math with it!",
          },
        ],
      },
    },
    {
      id: "w3-s7",
      title: "Numbers — Rounding",
      section: "Recap",
      layout: {
        kind: "tiles",
        title: "Numbers",
        tiles: [
          {
            bg: "indigo",
            icon: "fa-solid fa-calculator",
            title: "Rounding",
            body: "While we didn't cover this in lecture yet, there is a <code>round(float, num_decimals)</code> function which lets us round a floating-point number to a certain number of decimals.",
            code: "# 19.724555555 -> 19.725\nround(19.724555555, 3)",
          },
        ],
      },
    },
    {
      id: "w3-s8",
      title: "Before We Start",
      section: "Recap",
      layout: {
        kind: "qa",
        title: "Any Questions?",
        body: "Are there any questions about variables, types, or casting before we dive in?",
      },
    },
    {
      id: "w3-s9",
      title: "Section Problem #1",
      section: "Problem 1",
      layout: {
        kind: "sectionTitle",
        badge: "MISSION: MARS",
        badgeColor: "indigo",
        title: "To Mars!!!",
        subtitle: "Let's write our first Python program with variables",
      },
    },
    {
      id: "w3-s10",
      title: "Storytime",
      section: "Problem 1",
      layout: {
        kind: "sectionTitle",
        badge: "MISSION LOG",
        badgeColor: "softmagenta",
        title: "Storytime",
        subtitle: "Setting the scene for our problem...",
      },
    },
    {
      id: "w3-s11",
      title: "To Mars — Problem",
      section: "Problem 1",
      layout: {
        kind: "twoColumnBullets",
        title: "Section Problem #1: To Mars!!!",
        heading: "The Task",
        bullets: [
          {
            icon: "fa-solid fa-atom",
            color: "indigo",
            html: "Due to weaker gravity on Mars, an Earthling's weight on Mars is <strong>37.8%</strong> of their weight on Earth.",
          },
          {
            icon: "fa-solid fa-laptop-code",
            color: "cyan",
            html: "Write a Python program that <strong>prompts</strong> an Earthling to enter their weight on Earth.",
          },
          {
            icon: "fa-solid fa-satellite-dish",
            color: "softmagenta",
            html: "<strong>Print</strong> their calculated weight on Mars.",
          },
        ],
        image: { src: "https://images-assets.nasa.gov/image/PIA02653/PIA02653~large.jpg?w=240&h=240&fit=clip&crop=faces%2Cfocalpoint", alt: "Mars Rover" },
      },
    },
    {
      id: "w3-s12",
      title: "Problem #1 End Goal",
      section: "Problem 1",
      layout: {
        kind: "tiles",
        title: "Section Problem #1: End Goal",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-terminal",
            title: "Sample Input",
            body: "User is prompted and enters their Earth weight.",
            code: "Enter a weight on Earth: 100",
          },
          {
            bg: "indigo",
            icon: "fa-solid fa-microchip",
            title: "Sample Output",
            body: "Program prints the calculated Mars weight.",
            code: "The equivalent weight on Mars: 37.8",
          },
        ],
      },
    },
    {
      id: "w3-s13",
      title: "Pre-Code Discussion #1",
      section: "Problem 1",
      layout: {
        kind: "qa",
        title: "Pre-Code Discussion",
        body: "What are our inputs, constants, and types? Also — questions if you have them!!!",
      },
    },
    {
      id: "w3-s14",
      title: "Let's Code — Problem 1",
      section: "Problem 1",
      layout: {
        kind: "bleedImage",
        title: "Let's Code!",
        bg: "indigo",
        paragraphs: [
          "For this activity, you'll be working in breakout rooms with each other.",
          "Goal: Earth weight <strong>100</strong> → Mars weight <strong>37.8</strong>",
        ],
        image: { src: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000", alt: "Coding in Space" },
      },
    },
    {
      id: "w3-s15",
      title: "Section Problem #2",
      section: "Problem 2",
      layout: {
        kind: "sectionTitle",
        badge: "BEYOND THE HORIZON",
        badgeColor: "softmagenta",
        title: "To Infinity & Beyond",
        subtitle: "Planetary Weights",
      },
    },
    {
      id: "w3-s16",
      title: "Planetary Weights — Context",
      section: "Problem 2",
      layout: {
        kind: "tiles",
        title: "Section Problem #2: Planetary Weights",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-earth-asia",
            title: "The Concept",
            body: "Mars is not the only planet with its own unique gravity. <strong>Each planet</strong> has a <strong>different</strong> gravitational constant affecting how much an object weighs.",
          },
          {
            bg: "indigo",
            icon: "fa-solid fa-keyboard",
            title: "The Task",
            body: "Write a Python program that prompts an Earthling to enter their Earth weight and then the name of a planet. Print the equivalent weight on that planet.",
          },
        ],
      },
    },
    {
      id: "w3-s17",
      title: "Gravitational Constants",
      section: "Problem 2",
      layout: {
        kind: "twoColumnBullets",
        title: "Planetary Gravity Constants",
        heading: "% of Earth's gravity",
        bullets: [
          { icon: "fa-solid fa-circle-nodes", color: "indigo", html: "<strong>Mercury:</strong> 37.6%" },
          { icon: "fa-solid fa-circle-nodes", color: "cyan", html: "<strong>Venus:</strong> 88.9%" },
          { icon: "fa-solid fa-circle-nodes", color: "softmagenta", html: "<strong>Mars:</strong> 37.8%" },
          { icon: "fa-solid fa-circle-nodes", color: "indigo", html: "<strong>Jupiter:</strong> 236.0%" },
          { icon: "fa-solid fa-circle-nodes", color: "cyan", html: "<strong>Saturn:</strong> 108.1%" },
          { icon: "fa-solid fa-circle-nodes", color: "softmagenta", html: "<strong>Uranus:</strong> 81.5%" },
          { icon: "fa-solid fa-circle-nodes", color: "indigo", html: "<strong>Neptune:</strong> 114.0%" },
        ],
        image: { src: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1000", alt: "Solar System" },
      },
    },
    {
      id: "w3-s18",
      title: "Problem #2 End Goal",
      section: "Problem 2",
      layout: {
        kind: "tiles",
        title: "Section Problem #2: End Goals",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-database",
            title: "Sample Input (Mars)",
            body: "User enters Earth weight and planet name.",
            code: "Enter a weight on Earth: 120\nEnter a planet: Mars",
          },
          {
            bg: "indigo",
            icon: "fa-solid fa-calculator",
            title: "Sample Output (Mars)",
            body: "Calculated weight on the chosen planet.",
            code: "The equivalent weight on Mars: 45.36",
          },
          {
            bg: "softmagenta",
            icon: "fa-solid fa-brain",
            title: "Sample Output (Jupiter)",
            body: "Works for any valid planet name.",
            code: "# Input: 150, Jupiter\nThe equivalent weight on Jupiter: 354.0",
          },
        ],
      },
    },
    {
      id: "w3-s19",
      title: "Assumption",
      section: "Problem 2",
      layout: {
        kind: "qa",
        title: "One Important Assumption",
        body: "You can assume the user will always type in a planet with the first letter capitalized. You do <strong>not</strong> need to worry about invalid planet names.",
        note: "Hint: Think about what new concept from lecture lets us choose different behavior based on user input!",
      },
    },
    {
      id: "w3-s20",
      title: "Pre-Code Discussion #2",
      section: "Problem 2",
      layout: {
        kind: "qa",
        title: "Pre-Code Discussion",
        body: "What's different about this problem compared to Problem #1? Also — questions if you have them!!!",
      },
    },
    {
      id: "w3-s21",
      title: "Let's Code — Problem 2",
      section: "Problem 2",
      layout: {
        kind: "bleedImage",
        title: "Let's Code!",
        bg: "indigo",
        paragraphs: [
          "For this activity, we'll break out again, and then come back together!",
          "Remember: <strong>120 lbs on Earth → 45.36 lbs on Mars</strong>",
          "And: <strong>150 lbs on Earth → 354.0 lbs on Jupiter</strong>",
        ],
        image: { src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000", alt: "View from Orbit" },
      },
    },
    {
      id: "w3-s22",
      title: "Wrap Up",
      section: "Closing",
      layout: {
        kind: "qa",
        title: "End of Section 3",
        body: "Great work today! You've practiced variables, types, casting, and if-statements.",
        note: "Keep experimenting with Python in the sandbox. Questions? Reach out via Ed Discussion!",
        contact: "Cameron Mohne & Maggie Lee | Code in Place 2026",
      },
    },
  ],
};

export const week4: Week = {
  slug: "week-4",
  number: 4,
  title: "Week Four Section",
  subtitle: "Control Flow & Logic — High-Low",
  author: "Cameron Mohne and Maggie Lee",
  theme: "highlow",
  slides: [
    {
      id: "w4-s1",
      title: "Welcome",
      section: "Intro",
      layout: {
        kind: "title",
        accent: "LOGIC & CONTROL FLOW",
        title: "Welcome to Section!<br/>Week 4",
        subtitle: "High-Low | Code in Place 2026 | Slides by Cameron & Maggie",
      },
    },
    {
      id: "w4-s2",
      title: "Agenda",
      section: "Intro",
      layout: {
        kind: "tiles",
        title: "Today's Agenda",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-clipboard-check",
            title: "Check-in",
            body: "How is everyone doing?",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-arrows-rotate",
            title: "Recap",
            body: "Reviewing logic, logical operators, & comparison operators!",
          },
          {
            bg: "pink",
            icon: "fa-solid fa-trophy",
            title: "High-Low",
            body: "Section Problem!",
          },
        ],
      },
    },
    {
      id: "w4-s3",
      title: "Check-In",
      section: "Intro",
      layout: {
        kind: "bleedImage",
        title: "Check In",
        bg: "cyan",
        paragraphs: [
          "What’s your favorite sport or game to play/watch?",
        ],
        image: { src: "/ice.svg", alt: "Check-in" },
      },
    },
    {
      id: "w4-s4",
      title: "Questions?",
      section: "Intro",
      layout: {
        kind: "qa",
        title: "Questions?",
        body: "Does anyone have any questions before we move on to the recap?",
      },
    },
    {
      id: "w4-s5",
      title: "Recap",
      section: "Recap",
      layout: {
        kind: "sectionTitle",
        badge: "RECAP",
        badgeColor: "pink",
        title: "Logic Recap",
        subtitle: "Reviewing what we've learned so far",
      },
    },
    {
      id: "w4-s6",
      title: "If/Elif/Else Statements",
      section: "Recap",
      layout: {
        kind: "twoColumnBullets",
        title: "If/Elif/Else Statements",
        heading: "As a quick reminder:",
        bullets: [
          {
            icon: "fa-solid fa-check",
            color: "cyan",
            html: "<strong>If-Statements:</strong> take a condition and only runs a block of code if the condition evaluates to <code>True</code>.",
          },
          {
            icon: "fa-solid fa-arrow-right-long",
            color: "yellow",
            html: "<strong>Elif-Statements:</strong> take a condition and only tests it if the prior If-Statement (and all prior Elif-Statements) evaluate to <code>False</code>.",
          },
          {
            icon: "fa-solid fa-reply",
            color: "pink",
            html: "<strong>Else-Statements:</strong> take no condition and runs a block of code if the prior If-Statement (and Elif-Statements) evaluate to <code>False</code>.",
          },
        ],
        image: { src: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=640", alt: "Fork in the road" },
      },
    },
    {
      id: "w4-s7",
      title: "Comparison Operators",
      section: "Recap",
      layout: {
        kind: "tiles",
        title: "Comparison Operators",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-equals",
            title: "==",
            body: "Evaluates to <code>True</code> if both sides are equivalent.",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-greater-than",
            title: ">",
            body: "Evaluates to <code>True</code> if the left side is larger than the right.",
          },
          {
            bg: "pink",
            icon: "fa-solid fa-less-than",
            title: "<",
            body: "Evaluates to <code>True</code> if the left side is smaller than the right.",
          },
          {
            bg: "white",
            icon: "fa-solid fa-not-equal",
            title: "!=",
            body: "Evaluates to <code>True</code> if both sides are NOT equivalent.",
          },
        ],
      },
    },
    {
      id: "w4-s8",
      title: "Logical Operators",
      section: "Recap",
      layout: {
        kind: "tiles",
        title: "Logical Operators",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-link",
            title: "and",
            body: "Only runs code if <strong>both</strong> conditions evaluate to <code>True</code>.",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-link-slash",
            title: "or",
            body: "Runs code if <strong>either</strong> condition evaluates to <code>True</code>.",
          },
          {
            bg: "pink",
            icon: "fa-solid fa-circle-xmark",
            title: "not",
            body: "Swaps the condition’s evaluation (<code>True</code> ↔ <code>False</code>).",
          },
        ],
      },
    },
    {
      id: "w4-s-random",
      title: "Generating Numbers",
      section: "Recap",
      layout: {
        kind: "tiles",
        title: "Random Numbers",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-shuffle",
            title: "random.randint(a, b)",
            body: "Generates a random integer between <code>a</code> and <code>b</code> (inclusive).",
            code: "import random\n\nnum = random.randint(1, 100)",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-file-import",
            title: "The Import",
            body: "Don't forget to <code>import random</code> at the top of your file to use it!",
          },
        ],
      },
    },
    {
      id: "w4-s9",
      title: "Questions?",
      section: "Recap",
      layout: {
        kind: "qa",
        title: "Questions?",
        body: "What questions do you have before we start the section problem?",
      },
    },
    {
      id: "w4-s10",
      title: "High Low Section Problem",
      section: "Problem",
      layout: {
        kind: "sectionTitle",
        badge: "SECTION PROBLEM",
        badgeColor: "yellow",
        title: "High Low",
        subtitle: "Let's build a game!",
      },
    },
    {
      id: "w4-s11",
      title: "Setting Context",
      section: "Problem",
      layout: {
        kind: "twoColumnBullets",
        title: "Setting Context",
        heading: "You are a game developer!",
        bullets: [
          {
            icon: "fa-solid fa-dice",
            color: "cyan",
            html: "Two numbers are generated from 1 to 100.",
          },
          {
            icon: "fa-solid fa-user-secret",
            color: "yellow",
            html: "You see your number, but the computer's number is hidden.",
          },
          {
            icon: "fa-solid fa-comment-dots",
            color: "pink",
            html: "Guess if your number is <strong>higher</strong> or <strong>lower</strong>.",
          },
          {
            icon: "fa-solid fa-star",
            color: "cyan",
            html: "If you're right, you get a point!",
          },
        ],
        image: { src: "/blocks.svg", alt: "Game Dev" },
      },
    },
    {
      id: "w4-s12",
      title: "Example Round",
      section: "Problem",
      layout: {
        kind: "tiles",
        title: "Example Round",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-user",
            title: "Your Number",
            body: "88",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-hand-pointer",
            title: "Your Choice",
            body: "higher",
          },
          {
            bg: "pink",
            icon: "fa-solid fa-robot",
            title: "Computer's Number",
            body: "35",
          },
          {
            bg: "white",
            icon: "fa-solid fa-check",
            title: "Result",
            body: "You Win!!",
          },
        ],
      },
    },
    {
      id: "w4-s13",
      title: "Questions?",
      section: "Problem",
      layout: {
        kind: "qa",
        title: "Questions?",
        body: "What questions do you have before we begin coding the problem?",
      },
    },
    {
      id: "w4-s14",
      title: "Let's Code!",
      section: "Problem",
      layout: {
        kind: "bleedImage",
        title: "Let's Code!",
        bg: "pink",
        paragraphs: [
          "Time to jump into the IDE and build High-Low!",
        ],
        image: { src: "/blocks.svg", alt: "Let's Code" },
      },
    },
    {
      id: "w4-s15",
      title: "Extensions",
      section: "Bonus",
      layout: {
        kind: "tiles",
        title: "Extensions",
        tiles: [
          {
            bg: "cyan",
            icon: "fa-solid fa-shield-halved",
            title: "Safeguard User Input",
            body: "Ensure input can only be 'higher' or 'lower'.",
          },
          {
            bg: "yellow",
            icon: "fa-solid fa-message",
            title: "Conditional Ending",
            body: "Write different messages based on how many rounds were won.",
          },
        ],
      },
    },
    {
      id: "w4-s16",
      title: "Wrap Up",
      section: "Closing",
      layout: {
        kind: "qa",
        title: "End of Section 4",
        body: "Fantastic work on High-Low! You've mastered complex logic today.",
        note: "Keep practicing those conditions. See you next week!",
        contact: "Cameron Mohne & Maggie Lee | Code in Place 2026",
      },
    },
  ],
};

export const weeks: Week[] = [week1, week2, week3, week4];

export function getWeekBySlug(slug: string): Week | undefined {
  return weeks.find((w) => w.slug === slug);
}
