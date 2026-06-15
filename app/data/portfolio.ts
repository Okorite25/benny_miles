export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "why", label: "Why Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export type Cat = "brand" | "church" | "birthday invitations" | "events" | "logos" | "others";

export const CATS: { id: Cat; label: string }[] = [
  { id: "brand", label: "Brand Flyers" },
  { id: "church", label: "Church Flyers" },
  { id: "birthday invitations", label: "Birthday Invitations" },
  { id: "events", label: "Event Flyers" },
  { id: "logos", label: "Logos" },
  { id: "others", label: "Others" },
];



export const PROJECTS: Record<Cat, { title: string; url: string }[]> = {
  brand: [
    { title: "Baking Therapy by Sky", url: "/images/bakingtherapy.png" },
    { title: "Kiki's Hair Luxe", url: "/images/kikihairs.png" },
    { title: "Mamii's Hairs", url: "/images/mamiihairs.png" },
    { title: "Sodi'z Luxury", url: "/images/sodizluxury.png" },
    { title: "Grand Opening", url: "/images/grandopening.png" },
    // { title: "Clean Room Laundry", url: "/images/cleanroom.png" },
  ],
  church: [
    { title: "Elevation Service", url: "/images/elevationservice.png" },
    { title: "Easter Program - No More Veil", url: "/images/easterservice.png" },
    { title: "God of Possibilities", url: "/images/godofpossibilities.png" },
    { title: "June Miracle Services", url: "/images/junemiracle.png" },
    { title: "Reign on Earth", url: "/images/reignonearth.png" },
    // { title: "June Miracle Services", url: "/images/church4.png" },
  ],
  "birthday invitations": [
    { title: "Makaveli", url: "/images/makaveli.png" },
    { title: "Sugar Daddy", url: "/images/sugardaddy.png" },
    { title: "Big Daddy", url: "/images/bigdaddy.png" },
    { title: "Homachi", url: "/images/homachi.png" },
    { title: "Anicarls", url: "/images/anicarls.png" },
  ],

  events: [
    { title: "Dance & Hype Lifestyle", url: "/images/dancehype.png" },
    { title: "A Night In Trans-Amadi", url: "/images/ykayplaylist.png" },
    { title: "Naija Food Festival", url: "/images/naijafood.png" },
    { title: "Friday Rush at Flash Lounge", url: "/images/fridayrush.png" },
    { title: "Gudi's Seaside", url: "/images/gudiseaside.png" },
    // { title: "Friday Rush at Flash Lounge", url: "/images/event4.png" },
  ],
  logos: [
    { title: "Miebi Empire", url: "/images/miebi.png" },
    { title: "Honey Oven", url: "/images/honeyoven.png" },
    { title: "Imma's Signature Hair", url: "/images/immahairs.png" },
    { title: "Safe Execution Program", url: "/images/safeexecution.png" },
    { title: "Visota Couture", url: "/images/visotah.png" },
    // { title: "Rola Cakes & Treats", url: "/images/logo4.png" },
  ],
  
  others: [
    { title: "Bole Fiesta", url: "/images/bolefiesta.png" },
    { title: "Grand Opening", url: "/images/grandopening.png" },
    { title: "Ely's Retirement BBQ", url: "/images/ely.png" },
    { title: "Happy New Year", url: "/images/happynewyear.png" },
    { title: "Christmas Kids Fiesta", url: "/images/christmasfiesta.png" },
  ],
};

export const WHY = [
  { t: "Client-focused solutions", d: "Every project starts with your goals, your audience, your voice." },
  { t: "Consistent quality & originality", d: "No templates. No shortcuts. Designs built from scratch, every time." },
  { t: "Strong attention to detail", d: "From kerning to color, the small things make the loud impression." },
  { t: "Creative yet strategic", d: "Beautiful work that's also built to convert and communicate clearly." },
  { t: "Clear communication, timely delivery", d: "You'll always know where your project stands - and it ships on time." },
];

export const REVIEWS = [
  { q: "Wow I love everything you sent. Packaged on a standard level - exactly the brief and more.", who: "Inner Labels" },
  { q: "Brilliant work, brilliant communication. You really packaged the write-up beautifully.", who: "Nylons Client" },
  { q: "He turned my idea into something I couldn't stop showing off. Originality is certain - for real.", who: "Kiki's Hair Luxe" },
];