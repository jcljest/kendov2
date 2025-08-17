export const CATEGORIES = [
  "All",
  "Biohacking",
  "Self Care",
  "Yoga",
  "Meditation",
  "Pilates",
  "Endurance",
];

export const POSTS = [
  {
    id: "endurance-guide",
    title: "Build Endurance the Smart Way: A Practical Guide",
    excerpt:
      "Progressive overload, zone training, and recovery metrics you can actually stick with.",
    author: "Noah Kim",
    date: "2025-07-02",
    readMins: 9,
    category: "Endurance",
    image: "/placeholders/endurance.jpg",
  },
  {
    id: "flexibility-smarter",
    title: "Stretch Smarter: Mobility that Protects Your Training",
    excerpt:
      "Dynamic prep vs. static holds, and how to sequence mobility so it actually translates to performance.",
    author: "Liam Patel",
    date: "2025-06-18",
    readMins: 6,
    category: "Self Care",
    image: "/placeholders/flexibility.jpg",
  },
  {
    id: "biohacking-recovery",
    title: "Efficient Training Through Recovery Science",
    excerpt:
      "Sleep, HRV, and heat/cold exposure—evidence-backed levers for better sessions and fewer plateaus.",
    author: "Sophia Chen",
    date: "2025-06-08",
    readMins: 8,
    category: "Biohacking",
    image: "/placeholders/recovery.jpg",
  },
  {
    id: "pilates-vs-yoga",
    title: "Pilates vs. Yoga: Choose by Outcome, Not Hype",
    excerpt:
      "Core control, breath, and alignment—understanding the different adaptations each practice drives.",
    author: "Liam Patel",
    date: "2025-05-22",
    readMins: 7,
    category: "Pilates",
    image: "/placeholders/pilates-yoga.jpg",
  },
  {
    id: "mobility-keys",
    title: "Mobility That Lasts: Injury Prevention 101",
    excerpt:
      "Joint prerequisites, controlled articular rotations, and simple daily protocols to keep moving well.",
    author: "Maya Johnson",
    date: "2025-05-10",
    readMins: 5,
    category: "Self Care",
    image: "/placeholders/mobility.jpg",
  },
  {
    id: "cardio-myths",
    title: "Cardio Myths, Debunked",
    excerpt:
      "Fat loss zones, fasted cardio, HIIT every day—what the data actually says.",
    author: "Sophia Chen",
    date: "2025-04-28",
    readMins: 6,
    category: "Endurance",
    image: "/placeholders/cardio.jpg",
  },,
  {
    id: "sanity-check",
    title: "Sanity Check: One Post to Prove the Pipeline",
    excerpt:
      "A fake post to verify the grid, routing, and styles—no CMS required.",
    author: "Alex Rivera",
    date: "2025-08-16",
    readMins: 4,
    category: "Self Care",
    image: "/placeholders/sanity.jpg",
    body: [
      "This is a fake blog post used to confirm the list and detail views are wired correctly.",
      "It lives in the in-memory POSTS array. Later, you can replace this with JSON, MDX, or a CMS.",
      "Try the back link above to return to the grid. Then change the category filters or search to test UI states."
    ]
  }
];