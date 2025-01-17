import quantumLogo from "../assets/images/quantum.svg";
import acmeLogo from "../assets/images/acme-corp.svg";
import echoValleyLogo from "../assets/images/echo-valley.svg";
import pulseLogo from "../assets/images/pulse.svg";
import outsideLogo from "../assets/images/outside.svg";
import apexLogo from "../assets/images/apex.svg";
import celestialLogo from "../assets/images/celestial.svg";
import twiceLogo from "../assets/images/twice.svg";
 
 

import figmaLogo from '../assets/images/figma-logo.svg';
import notionLogo from '../assets/images/notion-logo.svg';
import slackLogo from '../assets/images/slack-logo.svg';
import relumeLogo from '../assets/images/relume-logo.svg';
import framerLogo from '../assets/images/framer-logo.svg';
import githubLogo from '../assets/images/github-logo.svg';
 export const faqs = [
  {
      question: "How is Layers different from other design tools?",
      answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
      question: "Is there a learning curve?",
      answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
      question: "How do you handle version control?",
      answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
      question: "Can I work offline?",
      answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
      question: "How does Layers handle collaboration?",
      answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];


export const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export type IntegrationType = {
  name:string;
  icon: string;
  description: string;
}
export const integrations:IntegrationType[] = [
  { name: "Figma", icon: figmaLogo, description: "Figma is a collaborative interface design tool." },
  { name: "Notion", icon: notionLogo, description: "Notion is an all-in-one workspace for notes and docs." },
  { name: "Slack", icon: slackLogo, description: "Slack is a powerful team communication platform." },
  { name: "Relume", icon: relumeLogo, description: "Relume is a no-code website builder and design system." },
  { name: "Framer", icon: framerLogo, description: "Framer is a professional website prototyping tool." },
  { name: "GitHub", icon: githubLogo, description: "GitHub is the leading platform for code collaboration." },
];

export const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];