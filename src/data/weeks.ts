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

export const weeks: Week[] = [week1, week2];

export function getWeekBySlug(slug: string): Week | undefined {
  return weeks.find((w) => w.slug === slug);
}
