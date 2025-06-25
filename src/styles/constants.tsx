import {
  Extension,
  TrackChanges,
  LayersClear,
  AccessTime,
  Handshake,
} from "@mui/icons-material";

export const DRAWER_WIDTH = 240;

export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const TRANSITION_DURATION = 300; // ms

export const principles = [
  {
    title: "UX is the sum of all things.",
    description:
      "We combine aesthetics and functionality to create designs that not only look great but also work flawlessly.",
    icon: <Extension fontSize="large" />,
  },
  {
    title: "Clients. Curated.",
    description:
      "We take on a limited number of projects so we can give each our full attention and effort.",
    icon: <TrackChanges fontSize="large" />,
  },
  {
    title: "Clean — In thinking, in style.",
    description:
      "We prioritize clean code, minimalist interfaces, and skilled execution—design as it ought to be.",
    icon: <LayersClear fontSize="large" />,
  },
  {
    title: "Perfection doesn’t do a 9–5.",
    description:
      "We go the extra mile regardless of time zones or desks—we’re committed to getting it right.",
    icon: <AccessTime fontSize="large" />,
  },
  {
    title: "Creator. Partner. Collaborator.",
    description:
      "We’re not just developers—we enhance and refine ideas at any stage of your product journey.",
    icon: <Handshake fontSize="large" />,
  },
];

export const panels = [
  {
    title: "Web Sites",
    description: `A website is the digital front door to your business—often the first impression potential customers have of who you are and what you offer.\n\nIn today’s market, having a modern, professional site is essential for credibility, visibility, and growth. It’s not just about looking good; it’s about being findable, functional, and aligned with your brand’s identity.\n\nAt Vertec Solutions, we craft websites that not only look sharp but are built with performance, mobile responsiveness, and user experience in mind. Whether you're starting fresh or rebranding, we'll deliver a web presence that reflects the professionalism of your business and supports your goals.`,
  },
  {
    title: "Web Applications",
    description: `Web applications are dynamic, interactive tools that power the core of modern digital businesses. Unlike traditional websites, they allow users to perform tasks, access data, and engage in meaningful ways—all through the browser.\n\nWhether it's a booking system, customer portal, internal dashboard, or full-scale SaaS platform, a web application streamlines operations and enhances user experience. It’s where functionality meets design, enabling efficiency, scalability, and performance.\n\nAt Vertec Solutions, we specialize in building custom web applications tailored to your business goals. With a focus on usability, security, and seamless integration, we help turn your ideas into powerful digital tools that solve real-world problems.`,
  },
  {
    title: "API Integrations",
    description: `In today's connected world, your business systems need to talk to each other. API integrations are the backbone of that communication—enabling your website, applications, and third-party services to seamlessly share data and functionality.\n\nWhether you're syncing with a CRM, automating workflows, connecting to payment processors, or pulling in external data, APIs eliminate silos and reduce manual work. They improve efficiency, accuracy, and the customer experience.\n\nAt Vertec Solutions, we design and implement robust API integrations that fit your ecosystem and scale with your needs. From off-the-shelf platforms to custom endpoints, we ensure your tools work together smoothly—so you can focus on what matters most: growing your business.`,
  },
];
