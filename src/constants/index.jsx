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
    text: "Discover Unique Destinations",
    description:
      "Explore off-the-beaten-path locations and iconic landmarks with expert-curated travel plans.",
  },
  {
    icon: <CalendarDays />,
    text: "Flexible Itineraries",
    description:
      "Plan trips with adjustable schedules, ensuring your travel fits perfectly into your lifestyle.",
  },
  {
    icon: <Ticket />,
    text: "Streamlined Booking",
    description:
      "Simplify your travel with one-stop booking for flights, accommodations, and activities.",
  },
  {
    icon: <DollarSign />,
    text: "Affordable Adventures",
    description:
      "Find exclusive deals and budget-friendly options to make your dream trip a reality.",
  },
  {
    icon: <Users />,
    text: "Group Travel Made Easy",
    description:
      "Coordinate with friends and family effortlessly for a memorable group travel experience.",
  },
  {
    icon: <Compass />,
    text: "Tailored Travel Experiences",
    description:
      "Customize your journey to match your preferences, interests, and pace.",
  },
];

export const checklistItems = [
  {
    title: "Pack Smart",
    description:
      "Get tips on what to pack for your destination and avoid overpacking.",
  },
  {
    title: "Plan Activities",
    description:
      "Ensure every day is filled with exciting adventures and relaxation opportunities.",
  },
  {
    title: "Set a Budget",
    description:
      "Track your expenses and enjoy a stress-free trip without overspending.",
  },
  {
    title: "Stay Connected",
    description:
      "Access guides, maps, and communication tools to stay connected wherever you are.",
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
  { href: "#", text: "Top Destinations" },
  { href: "#", text: "Best Travel Deals" },
  { href: "#", text: "Weather Insights" },
  { href: "#", text: "Flight Schedules" },
  { href: "#", text: "Travel Safety" },
];

export const communityLinks = [
  { href: "#", text: "Travel Stories" },
  { href: "#", text: "Meet Fellow Travelers" },
  { href: "#", text: "Destination Reviews" },
  { href: "#", text: "Cultural Exchanges" },
  { href: "#", text: "Local Guides" },
];