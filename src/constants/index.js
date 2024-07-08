import {
  benefitImage2,
  chromecast,
  disc02,
  discord,
  github,
  figma,
  file02,
  framer,
  homeSmile,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,

  roadmap2,
  roadmap3,

  searchMd,
  slack,
  sliders04,
  twitter,
  django,
  reactjs,
  python,
  javascript,
  redux,
  linkedIN,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Open Source Projects",
    url: "#osprojects",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Blog",
    url: "https://blog.prashantpandey9.in/",
  },
  // {
  //   id: "3",
  //   title: "Life checklist",
  //   url: "#roadmap",
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [];

export const companyLogos = [python, django, javascript, reactjs, redux];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const osprojects = [
  {
    id: "0",
    title: "django/django",
    text: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Thanks for checking it out.",
    date: "Nov 2023",
    status: "done",
    imageUrl: roadmap2,
    colorful: true,
    githubURL: "https://github.com/django/django/pulls?q=is%3Apr+is%3Aclosed+author%3Aprashantpandey9+",
    icon: github,
  },
  {
    id: "1",
    title: "Kubernetes/Website",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "Oct 2021",
    status: "done",
    imageUrl: roadmap3,
    githubURL: "https://github.com/kubernetes/website/pulls?q=is%3apr+author%3aprashantpandey9",
    icon: github,
  },
  {
    id: "2",
    title: "GNU Mailman/HyperKitty",
    text: "HyperKitty is a Django-based application providing a web interface to access GNU Mailman v3 archives, and interact with the lists.",
    date: "March 2021",
    status: "done",
    imageUrl: roadmap3,
    githubURL: "https://gitlab.com/mailman/hyperkitty/-/merge_requests?scope=all&state=all&author_username=prashantpandey9",
    icon: github,
  },
  {
    id: "3",
    title: "GoogleChrome/chromium-dashboard",
    text: "chromestatus.com is the official tool used for for tracking feature launches in Blink (the browser engine that powers Chrome and many other web browsers).",
    date: "March 2021",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
    githubURL: "https://github.com/GoogleChrome/chromium-dashboard/issues/1197",
    icon: github,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Covid Help Dashboard",
    text: "An efficient system for local hospitals to manage COVID-19 patients and provide real-time health updates to families.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    techStack: "Django, React, Material UI, Redux",
    iconUrl: github,
    imageUrl: benefitImage2,
    githubURL: "https://github.com/kecians",
    liveUrl: "https://ukcovid.prashantpandey9.in/",
  },
  {
    id: "1",
    title: "Recreatly",
    text: "Online learning platform with integrated developer blog functionality.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    techStack: "Django, React, Bootstrap",
    iconUrl: github,
    imageUrl: benefitImage2,
    light: true,
    githubURL: "https://github.com/prashantpandey9/recreate",
    liveUrl: "https://recreatly.prashantpandey9.in/",
  },
  {
    id: "2",
    title: "Advirtiser",
    text: "A system to generate and publish creative ads",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    techStack: "Ruby, Ruby on Rails, ReactJS",
    iconUrl: github,
    imageUrl: benefitImage2,
    githubURL: "https://github.com/prashantpandey9/advertisement",
  },
];

export const socials = [
  {
    id: "0",
    title: "GitHub",
    iconUrl: github,
    url: "https://github.com/prashantpandey9",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/ppprashant9",
  },
  {
    id: "2",
    title: "LinkedIn",
    iconUrl: linkedIN,
    url: "https://linkedin.com/in/prashantpandey9",
  },
];
