import { LISTINGS } from "@/components/Landing/MarketplaceSnippet"
import type { Category, Condition, Listing } from "@/types/market.types"

export const CATEGORIES: Category[] = [
  "Textbooks & Reviewers",
  "Supplies & Stationery",
  "Scientific Calculators",
  "Gadgets & Tech",
  "Uniforms",
  "Project Materials",
  "Foods",
]
export const CONDITIONS: Condition[] = [
  "Brand New",
  "Used - Like New",
  "Used - Excellent",
  "Used - Good",
]
const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`
const sample = (
  id: string,
  title: string,
  category: Category,
  price: number,
  condition: Condition,
  description: string,
  image: string,
  name: string,
  program: string,
  location: string
): Listing => ({
  id,
  title,
  category,
  price,
  condition,
  description,
  image,
  seller: { name, program },
  location,
})

export const MARKETPLACE_LISTINGS: Listing[] = [
  {
    ...LISTINGS[0],
    title: "Casio fx-991ES Plus 2nd Gen Calculator",
    price: 850,
    condition: "Used - Good",
    seller: { name: "Angelo D.", program: "BS Pharmacy" },
    location: "Canteen",
  },
  {
    ...LISTINGS[1],
    id: "bates-physical-examination",
    title: "Bates’ Guide to Physical Examination 13th Ed",
    price: 1250,
    description: "Plastic covered",
    condition: "Used - Like New",
    seller: { name: "Sofia L.", program: "BS Nursing" },
    location: "Centennial Bldg",
  },
  sample(
    "female-uniform",
    "CEU Female Uniform Blouse & Skirt (Medium)",
    "Uniforms",
    500,
    "Used - Excellent",
    "Set (Size M)",
    photo("photo-1434389677669-e08b4cac3105"),
    "Camille M.",
    "BS Tourism",
    "Gate 1"
  ),
  {
    ...LISTINGS[3],
    id: "drafting-set",
    title: "Faber-Castell Technical Drafting Pen Set & T-Square",
    category: "Project Materials",
    price: 750,
    description: "Complete 4-pen set",
    seller: { name: "John R.", program: "BS Architecture" },
    location: "Library Lobby",
  },
  sample(
    "logitech-keyboard",
    "Logitech K380 Bluetooth Keyboard (Off-White)",
    "Gadgets & Tech",
    1100,
    "Used - Like New",
    "With AAA batteries",
    photo("photo-1587829741301-dc798b83add3"),
    "Kevin S.",
    "BS Info Tech",
    "IT Bldg Lobby"
  ),
  {
    ...LISTINGS[2],
    id: "laboratory-gown",
    title: "CEU White Laboratory Gown (Long Sleeve, Small)",
    price: 350,
    description: "Never worn (Small)",
    seller: { name: "Marian C.", program: "BS Biology" },
    location: "Science Hall",
  },
  sample(
    "matcha-cookies",
    "Matcha Dark Chocolate Cookies (Fresh Batch)",
    "Foods",
    180,
    "Brand New",
    "Freshly baked · Box of 6",
    photo("photo-1499636136210-6f4ee915583e"),
    "Patricia E.",
    "BS Hospitality Mgt",
    "Canteen Booth"
  ),
  {
    ...LISTINGS[1],
    id: "berne-levy",
    title: "Berne and Levy Physiology Student Textbook",
    price: 1800,
    description: "Original copy",
    seller: { name: "Miguel B.", program: "BS MedTech" },
    location: "Centennial Bldg",
  },
]
export const RECOMMENDED_LISTINGS: Listing[] = [
  sample(
    "reflex-hammer",
    "Taylor Reflex Hammer & Tuning Fork",
    "Supplies & Stationery",
    420,
    "Used - Good",
    "Hammer for doctors",
    photo("photo-1576091160399-112ba8d25d1d"),
    "Sofia L.",
    "BS Nursing",
    "Centennial Hall"
  ),
  {
    ...LISTINGS[2],
    title: "CEU Nursing Scrub Suit Set (Green)",
    location: "Nursing Dept Bldg",
  },
  sample(
    "pulse-oximeter",
    "Fingertip Pulse Oximeter w/ Pouch",
    "Gadgets & Tech",
    380,
    "Used - Like New",
    "To get your bpm",
    photo("photo-1631815588090-d4bfec5b1ccb"),
    "Bea R.",
    "BS Nursing",
    "Main Canteen"
  ),
  {
    ...LISTINGS[1],
    id: "pnle-reviewer",
    title: "PNLE Board Exam Comprehensive Reviewer",
    price: 550,
    description: "Complete set",
    location: "Centennial Hall",
  },
]
