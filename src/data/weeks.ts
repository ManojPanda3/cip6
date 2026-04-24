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

export const weeks: Week[] = [week1];

export function getWeekBySlug(slug: string): Week | undefined {
  return weeks.find((w) => w.slug === slug);
}
