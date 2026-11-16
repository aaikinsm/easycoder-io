export const site = {
  name: "Easy Coder",
  url: "https://easycoder.io",
  email: "easycoder@amensah.com",
  description:
    "Interactive programming lessons and AI-powered coding assistance. Write, run, and practice real code in Python, Java, and Web Development.",
  social: {
    youtube: "https://www.youtube.com/channel/UCqGcPops2jG9i-UAfwuQXmg",
    facebook: "https://www.facebook.com/theeasycoder/",
    tiktok: "https://www.tiktok.com/@easycoder.io",
    discord: "https://discord.gg/q9kyRJWP3X",
  },
  zdnet:
    "https://www.zdnet.com/education/computers-tech/best-computer-science-resource/",
} as const;

export const stores = {
  appleDeveloper:
    "https://apps.apple.com/us/developer/albert-aikins-mensah/id1496551792",
  playDeveloper:
    "https://play.google.com/store/apps/developer?id=AMensah+-+Learn+to+code",
} as const;

export type CourseId = "python" | "java" | "web";

export type Course = {
  id: CourseId;
  name: string;
  short: string;
  tag: string;
  color: string;
  accent: string;
  icon: string;
  href: string;
  description: string;
  summary: string;
  topics: string[];
  ios?: string;
  android: string;
};

export const courses: Course[] = [
  {
    id: "python",
    name: "Python",
    short: "Beginner-friendly, powerful everywhere.",
    tag: "Most popular",
    color: "#3776AB",
    accent: "#FFD43B",
    icon: "/icons/python.png",
    href: "/python",
    description:
      "Python is a versatile, beginner-friendly language with clear syntax. It excels in web development, data analysis, AI, and automation — perfect for first programs and serious projects.",
    summary:
      "Learn Python from basics to advanced scripts. Practice loops, functions, data structures, and more with AI support.",
    topics: [
      "Variables & types",
      "Strings & logic",
      "Data structures",
      "Loops & functions",
      "Object-oriented Python",
      "Files & modules",
      "Web APIs",
      "Algorithms",
      "Machine learning",
      "GUIs with Tkinter",
    ],
    ios: "https://apps.apple.com/us/app/learn-python-easycoder/id1532573220",
    android:
      "https://play.google.com/store/apps/details?id=com.amensah.easycoder.python",
  },
  {
    id: "java",
    name: "Java",
    short: "Build software that runs anywhere.",
    tag: "Career track",
    color: "#E76F00",
    accent: "#5382A1",
    icon: "/icons/java.png",
    href: "/java",
    description:
      "Java is a reliable, robust language used for Android apps and enterprise software. Its platform independence lets your code run on any device with a JVM.",
    summary:
      "Learn Java fundamentals and write programs in-app. The AI assistant helps you debug and understand code quickly.",
    topics: [
      "Syntax & types",
      "Control flow",
      "Methods & classes",
      "Object-oriented design",
      "Arrays & collections",
      "Exceptions",
      "File I/O",
      "Real programs",
    ],
    ios: "https://apps.apple.com/us/app/learn-java-easycoder/id1496551793",
    android: "https://play.google.com/store/apps/details?id=com.amensah.easycoder",
  },
  {
    id: "web",
    name: "Web Development",
    short: "HTML, CSS, and JavaScript — live.",
    tag: "Build in the browser",
    color: "#06B6D4",
    accent: "#A78BFA",
    icon: "/icons/web.png",
    href: "/web",
    description:
      "HTML provides structure, CSS adds design, and JavaScript brings pages to life. Learn to build everything from simple sites to interactive apps, with a live preview in the editor.",
    summary:
      "Build interactive pages, style with CSS, and add JavaScript — all in the editor with AI guidance.",
    topics: [
      "HTML structure",
      "CSS layout & design",
      "JavaScript interactivity",
      "DOM & events",
      "Forms & input",
      "Live web preview",
    ],
    android:
      "https://play.google.com/store/apps/details?id=com.amensah.easycoder.web",
  },
];

export const features = [
  {
    title: "Expert-led video lessons",
    body: "Complex ideas are broken into short, clear videos — often around 10 minutes — so you never get lost in a four-hour lecture.",
    icon: "play",
  },
  {
    title: "A real code editor",
    body: "Write, run, save, and share programs on your phone or tablet. Syntax highlighting, autocomplete, and multiple files included.",
    icon: "code",
  },
  {
    title: "AI that actually teaches",
    body: "Get personalized help, real-time error detection, and corrections that explain why — not just a red underline.",
    icon: "spark",
  },
  {
    title: "Challenges after every lesson",
    body: "Quizzes, matching games, and coding tasks lock in what you just learned before you move on.",
    icon: "target",
  },
  {
    title: "Community & Discord",
    body: "Share code, ask questions, and learn with other students — plus a global leaderboard to keep you honest.",
    icon: "users",
  },
  {
    title: "Certificates you can share",
    body: "Finish a course and post your certificate to LinkedIn so your work shows up where it matters.",
    icon: "award",
  },
];

export const steps = [
  {
    n: "01",
    title: "Watch a focused lesson",
    body: "Whiteboard-style teaching and on-screen walkthroughs make new ideas click.",
  },
  {
    n: "02",
    title: "Write the code yourself",
    body: "Open the editor, complete a challenge, or start a project from scratch.",
  },
  {
    n: "03",
    title: "Let the AI check your work",
    body: "Instant analysis, hints, and corrections — then level up to the next module.",
  },
];

export const reviews = [
  {
    quote:
      "Excellent app, best of the best. This one makes my coding journey very easy. I was almost giving up coding before I came across this ‘magic’ app. I like the video tutorials where they explain clearly on each topic. I thank the programmers of this app for giving me a new hope to become a programmer.",
    source: "Google Play",
  },
  {
    quote:
      "I find this app very useful. Absolutely recommend to try. I have completed the variables module and so far it’s easy to understand and easy to remember. Since the tutorial videos are divided into small ~10 min vids separated by quizzes, I don’t feel overwhelmed.",
    source: "Google Play",
  },
  {
    quote:
      "To be honest, I didn’t expect much from this app, perhaps because I had used SoloLearn. But I must admit that I was overblown by the entire features and learning processes. You do not want to bypass this app as a programming student.",
    source: "Google Play",
  },
  {
    quote:
      "Awesome app, easy to follow along and simplifies the concepts so well. Practical exercises at the end of lessons, a challenge section, as well as another section where you can create your own code, run it and save it. Think this is my best Python learning and mobile code platform thus far.",
    source: "Google Play",
  },
  {
    quote:
      "I’ve programmed in lots of languages from Basic to Assembly to Perl. I needed to come up to speed on Python and found this a great way to learn the language and brush up on things I struggled with like object-oriented programming.",
    source: "App Store",
    name: "Animal13",
  },
  {
    quote:
      "I started with almost no experience in any coding language. The lessons are easily understandable and thorough. The support team is very responsive. I highly recommend to anyone wanting to learn coding.",
    source: "Google Play",
    name: "Josh Badgley",
  },
];

export const stats = [
  { value: "580k+", label: "learners worldwide" },
  { value: "4.5★", label: "average app rating" },
  { value: "3 tracks", label: "Python, Java, and Web" },
  { value: "2022", label: "ZDNET Best CS resource" },
];

export function courseById(id: CourseId) {
  const course = courses.find((item) => item.id === id);
  if (!course) throw new Error(`Unknown course: ${id}`);
  return course;
}
