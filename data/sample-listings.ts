import type {
  Category,
  Condition,
  Listing,
  ListingStatus,
  Location,
} from "@/types/market.types"

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`

const sample = (
  id: string,
  title: string,
  category: Category,
  price: number,
  condition: Condition,
  status: ListingStatus,
  description: string,
  images: string[],
  name: string,
  program: string,
  location: Location[]
): Listing => ({
  id,
  title,
  category,
  price,
  condition,
  status,
  description,
  image: images,
  seller: {
    name,
    program,
  },
  location,
})

export const MARKETPLACE_LISTINGS: Listing[] = [
  sample(
    "casio-fx-991es",
    "Casio fx-991ES Plus 2nd Gen Calculator",
    "Scientific Calculators",
    850,
    "Used - Good",
    "Available",
    "Fully functional scientific calculator.",
    [photo("photo-1564473185935-58113cba1e80")],
    "Angelo D.",
    "BS Pharmacy",
    ["Canteen", "Gate 1"]
  ),

  sample(
    "bates-physical-examination",
    "Bates’ Guide to Physical Examination 13th Ed",
    "Textbooks & Reviewers",
    1250,
    "Used - Like New",
    "Pending",
    "Plastic covered and well maintained.",
    [photo("photo-1544947950-fa07a98d237f")],
    "Sofia L.",
    "BS Nursing",
    ["Library", "PHL Lobby"]
  ),

  sample(
    "female-uniform",
    "CEU Female Uniform Blouse & Skirt (Medium)",
    "Uniforms",
    500,
    "Used - Excellent",
    "Available",
    "Complete uniform set in size medium.",
    [photo("photo-1434389677669-e08b4cac3105")],
    "Camille M.",
    "BS Tourism",
    ["Gate 1", "Gate 3"]
  ),

  sample(
    "drafting-set",
    "Faber-Castell Technical Drafting Pen Set & T-Square",
    "Project Materials",
    750,
    "Used - Good",
    "Sold",
    "Complete 4-pen drafting set with T-square.",
    [photo("photo-1455390582262-044cdead277a")],
    "John R.",
    "BS Architecture",
    ["PHL Lobby", "CEU Square"]
  ),

  sample(
    "logitech-keyboard",
    "Logitech K380 Bluetooth Keyboard (Off-White)",
    "Gadgets & Tech",
    1100,
    "Used - Like New",
    "Available",
    "Includes AAA batteries and works properly.",
    [photo("photo-1587829741301-dc798b83add3")],
    "Kevin S.",
    "BS Info Tech",
    ["CEU Square", "Library"]
  ),

  sample(
    "laboratory-gown",
    "CEU White Laboratory Gown (Long Sleeve, Small)",
    "Uniforms",
    350,
    "Brand New",
    "Available",
    "Never worn laboratory gown in size small.",
    [photo("photo-1584982751601-97dcc096659c")],
    "Marian C.",
    "BS Biology",
    ["Gate 3", "Gate 4"]
  ),

  sample(
    "matcha-cookies",
    "Matcha Dark Chocolate Cookies (Fresh Batch)",
    "Foods",
    180,
    "Brand New",
    "Out of Stock",
    "Freshly baked box of 6 matcha dark chocolate cookies.",
    [photo("photo-1499636136210-6f4ee915583e")],
    "Patricia E.",
    "BS Hospitality Mgt",
    ["Canteen"]
  ),

  sample(
    "berne-levy",
    "Berne and Levy Physiology Student Textbook",
    "Textbooks & Reviewers",
    1800,
    "Used - Excellent",
    "Available",
    "Original copy with minimal markings.",
    [photo("photo-1543002588-bfa74002ed7e")],
    "Miguel B.",
    "BS MedTech",
    ["Library", "CEU Square"]
  ),
]

export const RECOMMENDED_LISTINGS: Listing[] = [
  sample(
    "reflex-hammer",
    "Taylor Reflex Hammer & Tuning Fork",
    "Supplies & Stationery",
    420,
    "Used - Good",
    "Available",
    "Reflex hammer and tuning fork set for clinical practice.",
    [photo("photo-1576091160399-112ba8d25d1d")],
    "Sofia L.",
    "BS Nursing",
    ["PHL Lobby", "Library"]
  ),

  sample(
    "nursing-scrub-suit",
    "CEU Nursing Scrub Suit Set (Green)",
    "Uniforms",
    650,
    "Used - Excellent",
    "Pending",
    "Complete nursing scrub suit set.",
    [photo("photo-1579684385127-1ef15d508118")],
    "Andrea M.",
    "BS Nursing",
    ["Gate 4", "Gate 3"]
  ),

  sample(
    "pulse-oximeter",
    "Fingertip Pulse Oximeter w/ Pouch",
    "Gadgets & Tech",
    380,
    "Used - Like New",
    "Available",
    "Portable pulse oximeter with protective pouch.",
    [photo("photo-1631815588090-d4bfec5b1ccb")],
    "Bea R.",
    "BS Nursing",
    ["Canteen", "CEU Square"]
  ),

  sample(
    "pnle-reviewer",
    "PNLE Board Exam Comprehensive Reviewer",
    "Textbooks & Reviewers",
    550,
    "Used - Good",
    "Available",
    "Complete reviewer set for PNLE preparation.",
    [photo("photo-1507842217343-583bb7270b66")],
    "Carla V.",
    "BS Nursing",
    ["Library", "PHL Lobby"]
  ),
]
