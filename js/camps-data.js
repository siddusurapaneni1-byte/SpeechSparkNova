/**
 * camps-data.js
 * ============================================================
 * EDIT THIS FILE to add, remove, or update camps.
 *
 * Fields:
 *   id          – unique string, no spaces
 *   title       – camp name
 *   date        – full date string (e.g. "July 12–14, 2025")
 *   month       – 3-letter month for the calendar block ("JUL")
 *   day         – day number shown large ("12")
 *   location    – venue and/or city
 *   ages        – age range ("Ages 10–14")
 *   description – 1–2 sentence summary
 *   status      – "open" | "full" | "upcoming" | "closed"
 *   registerUrl – registration link, or "#" if not ready
 * ============================================================
 */

const CAMPS_DATA = [
  {
    id: "camp-summer-2025-fairfax",
    title: "Summer Speaking Camp — Fairfax",
    date: "July 14–18, 2025",
    month: "JUL",
    day: "14",
    location: "Fairfax County Public Library, Fairfax, VA",
    ages: "Ages 10–16",
    description: "A five-day intensive camp covering impromptu speaking, storytelling, and persuasion. Campers will give at least one speech each day.",
    status: "open",
    registerUrl: "#"
  },
  {
    id: "camp-weekend-1",
    title: "Weekend Workshop — Reston",
    date: "August 9–10, 2025",
    month: "AUG",
    day: "9",
    location: "Reston Community Center, Reston, VA",
    ages: "Ages 12–18",
    description: "A focused two-day weekend program for middle and high school students who want to sharpen their debate and presentation skills.",
    status: "upcoming",
    registerUrl: "#"
  },
  // Add more camps below — copy one block above and fill in the fields
];