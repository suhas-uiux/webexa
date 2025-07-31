import { MapPin } from "lucide-react";
import { DollarSign } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Ticket } from "lucide-react";
import { Users } from "lucide-react";
import { Compass } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Destinations", href: "#" },
  { label: "Planning", href: "#" },
  { label: "Deals", href: "#" },
  { label: "Reviews", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Adventure Seekers",
    image: user1,
    text: "I had the best vacation of my life! The itinerary was perfect, and the team made everything seamless from start to finish.",
  },
  {
    user: "Jane Smith",
    company: "Globetrotter Co.",
    image: user2,
    text: "Their recommendations made our trip unforgettable. Every destination was well-planned and tailored to our interests.",
  },
  {
    user: "David Johnson",
    company: "Wanderlust Adventures",
    image: user3,
    text: "Fantastic experience! They took care of every detail, and we got to explore hidden gems we would have missed on our own.",
  },
  {
    user: "Ronee Brown",
    company: "Travel Tales",
    image: user4,
    text: "From the flights to the hotels to the local activities, everything was perfect. This team really knows how to create amazing travel experiences.",
  },
  {
    user: "Michael Wilson",
    company: "Dream Journeys",
    image: user5,
    text: "I was amazed by the level of care and attention put into our travel plans. It was hassle-free, and we loved every moment.",
  },
  {
    user: "Emily Davis",
    company: "Explorer's Haven",
    image: user6,
    text: "Their expertise made all the difference. We were able to relax and truly enjoy our vacation knowing everything was handled perfectly.",
  },
];

export const features = [
  {
    icon: <MapPin />,
    text: " Enter Domain",
    description:
      "Provide any valid domain name",
  },
  {
    icon: <CalendarDays />,
    text: "Analyze Site",
    description:
      "We parse the HTML and assets using smart logic",
  },
  {
    icon: <Ticket />,
    text: " Detect Technologies",
    description:
      "Discover CMS, libraries, frameworks, and more",
  },
  {
    icon: <DollarSign />,
    text: " Export & Save",
    description:
      "Download results in multiple formats",
  },
  // {
  //   icon: <Users />,
  //   text: "Group Travel Made Easy",
  //   description:
  //     "Coordinate with friends and family effortlessly for a memorable group travel experience.",
  // },
  // {
  //   icon: <Compass />,
  //   text: "Tailored Travel Experiences",
  //   description:
  //     "Customize your journey to match your preferences, interests, and pace.",
  // },
];

export const checklistItems = [
  {
    title: "Fast & Accurate Detection",
    description:
      "Lightning-fast scans with pinpoint accuracy using pattern-based detection logic.",
  },
  {
    title: "Secure & Private",
    description:
      "We do not store your scans or share them—100% privacy-first design.",
  },
  {
    title: "Export & Share",
    description:
      "Download results as PDF, CSV, or JSON—perfect for audits or reporting.",
  },
  {
    title: "Scan History",
    description:
      "Your dashboard saves all your previous scans in one place.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Travel recommendations",
      "Free itineraries",
      "Community forums",
      "Travel tips & tricks",
    ],
  },
  {
    title: "Standard",
    price: "$50",
    features: [
      "Custom itineraries",
      "Priority support",
      "Exclusive travel deals",
      "Travel concierge services",
    ],
  },
  {
    title: "Premium",
    price: "$200",
    features: [
      "Personal travel advisor",
      "VIP bookings",
      "Luxury travel experiences",
      "Unlimited support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Travel Guides" },
  { href: "#", text: "Packing Tips" },
  { href: "#", text: "Visa Information" },
  { href: "#", text: "Budget Planning" },
  { href: "#", text: "Travel Blogs" },
];

export const platformLinks = [
  { href: "#", text: "About" },
  { href: "#", text: "Contact" },
  { href: "#", text: "GitHub" },
  { href: "#", text: "Privacy" },
];

export const communityLinks = [
  { href: "#", text: "Travel Stories" },
  { href: "#", text: "Meet Fellow Travelers" },
  { href: "#", text: "Destination Reviews" },
  { href: "#", text: "Cultural Exchanges" },
  { href: "#", text: "Local Guides" },
];



