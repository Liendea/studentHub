import rectangle20 from "../../../Images/Rectangle20.webp";
import rectangle21 from "../../../Images/rectangle21.webp";
import rectangle22 from "../../../Images/Rectangle22.webp";
import rectangle23 from "../../../Images/Rectangle23.webp";
import rectangle24 from "../../../Images/Rectangle24.webp";
import rectangle25 from "../../../Images/Rectangle25.webp";
import rectangle26 from "../../../Images/Rectangle26.webp";
import rectangle27 from "../../../Images/Rectangle27.webp";
import rectangle28 from "../../../Images/Rectangle28.webp";
import rectangle29 from "../../../Images/Rectangle29.webp";
import rectangle30 from "../../../Images/Rectangle30.webp";
import rectangle31 from "../../../Images/Rectangle31.webp";
import rectangle32 from "../../../Images/Rectangle32.webp";
import rectangle33 from "../../../Images/Rectangle33.webp";
import rectangle34 from "../../../Images/Rectangle34.webp";

const courses = [
  {
    id: 1,
    title: "UX-design",
    description:
      "Lär dig grunderna i användarcentrerad design, inklusive användarundersökningar, wireframing och prototyper för att skapa effektiva och användarvänliga digitala produkter.",
    image: rectangle21,
    duration: "12 veckor",
    lärare: "Don Norman",
    omLäraren: "Författare till 'The Design of Everyday Things'",
    location: "Distans",
    price: "320€",
    nivå: "Intermediate",
    ämne: "UX/UI-design",
  },
  {
    id: 2,
    title: "UI-design för Nybörjare",
    description:
      "Upptäck designprinciper, färgteori, typografi och layout för att skapa visuellt tilltalande och funktionella användargränssnitt.",
    image: rectangle22,
    duration: "8 veckor",
    lärare: "Jessica Walsh",
    omLäraren: "Känd designer & art director",
    location: "Distans",
    price: "180€",
    nivå: "Nybörjare",
    ämne: "UX/UI-design",
  },
  {
    id: 3,
    title: "HTML & CSS",
    description:
      "Lär dig bygga webbsidor med HTML och CSS. Fokus på struktur, stil och responsiv design för moderna webbplatser.",
    image: rectangle23,
    duration: "6 veckor",
    lärare: "Rachel Andrew",
    omLäraren: "Expert på CSS-layout och Grid",
    location: "Distans",
    price: "120€",
    nivå: "Nybörjare",
    ämne: "Webbutveckling",
  },
  {
    id: 4,
    title: "JavaScript för Nybörjare",
    description:
      "Kom igång med programmering i JavaScript för att skapa interaktiva webbsidor och förstå grunderna i programmeringslogik och DOM-manipulation.",
    image: rectangle24,
    duration: "10 veckor",
    lärare: "Wes Bos",
    omLäraren: "JavaScript-lärare och populär på YouTube",
    location: "Distans",
    price: "220€",
    nivå: "Nybörjare",
    ämne: "Webbutveckling",
  },
  {
    id: 5,
    title: "React",
    description:
      "Lär dig använda React för att bygga snabba och skalbara användargränssnitt med komponentbaserad utveckling.",
    image: rectangle25,
    duration: "16 veckor",
    lärare: "Kent C. Dodds",
    omLäraren: "Känd React-utbildare",
    location: "Distans",
    price: "400€",
    nivå: "Intermediate",
    ämne: "Webbutveckling",
  },
  {
    id: 6,
    title: "UX-research",
    description:
      "Fördjupa dig i metoder för att samla in och analysera användardata för att förbättra produkter och designbeslut.",
    image: rectangle26,
    duration: "14 veckor",
    lärare: "Erika Hall",
    omLäraren: "Författare av 'Just Enough Research'",
    location: "Distans",
    price: "280€",
    nivå: "Avancerad",
    ämne: "UX/UI-design",
  },
  {
    id: 7,
    title: "Design & innovation",
    description:
      "Utforska en kreativ process för problemlösning med fokus på empati, idéutveckling och prototypframtagning.",
    image: rectangle27,
    duration: "20 veckor",
    lärare: "Tim Brown",
    omLäraren: "CEO på IDEO, kopplad till design thinking",
    location: "Distans",
    price: "350€",
    nivå: "Intermediate",
    ämne: "Innovation & design thinking",
  },
  {
    id: 8,
    title: "Node.js",
    description:
      "Lär dig bygga serverdelar med Node.js, hantera databaser och skapa API:er för moderna webbapplikationer.",
    image: rectangle28,
    duration: "24 veckor",
    lärare: "Ryan Dahl",
    omLäraren: "Skapare av Node.js",
    location: "Distans",
    price: "650€",
    nivå: "Avancerad",
    ämne: "Backendutveckling",
  },
  {
    id: 9,
    title: "Responsiv design",
    description:
      "Behärska tekniker för att skapa flexibla och anpassningsbara layouter som fungerar på alla skärmstorlekar.",
    image: rectangle29,
    duration: "5 veckor",
    lärare: "Ethan Marcotte",
    omLäraren: "Myntade begreppet “responsive design”",
    location: "Distans",
    price: "100€",
    nivå: "Nybörjare",
    ämne: "Webbutveckling",
  },
  {
    id: 10,
    title: "Webbtillgänglighet",
    description:
      "Lär dig göra webbplatser och appar tillgängliga för alla användare, inklusive personer med funktionsnedsättningar.",
    image: rectangle20,
    duration: "7 veckor",
    lärare: "Marcy Sutton",
    omLäraren: "Tillgänglighetsexpert inom webbutveckling",
    location: "Distans",
    price: "140€",
    nivå: "Intermediate",
    ämne: "Webbutveckling",
  },
  {
    id: 11,
    title: "Cybersäkerhet för nybörjare",
    description:
      "Lär dig grunderna inom cybersäkerhet, inklusive nätverkssäkerhet, hotanalys och bästa praxis för att skydda data och system.",
    image: rectangle30,
    duration: "12 veckor",
    lärare: "Bruce Schneier",
    omLäraren: "Internationell expert inom IT-säkerhet",
    location: "Distans",
    price: "350€",
    nivå: "Nybörjare",
    ämne: "Cybersäkerhet",
  },
  {
    id: 12,
    title: "Introduktion till molnteknik",
    description:
      "Få en grundläggande förståelse för molntjänster, arkitektur och plattformar som AWS, Azure och Google Cloud.",
    image: rectangle31,
    duration: "10 veckor",
    lärare: "Kelsey Hightower",
    omLäraren: "Google Cloud expert och föreläsare",
    location: "Distans",
    price: "350€",
    nivå: "Nybörjare",
    ämne: "Molnteknik",
  },
  {
    id: 13,
    title: "AI & Maskininlärning",
    description:
      "En introduktion till artificiell intelligens och maskininlärning med praktiska exempel och grundläggande algoritmer.",
    image: rectangle32,
    duration: "16 veckor",
    lärare: "Andrew Ng",
    omLäraren: "AI-forskare och grundare av deeplearning.ai",
    location: "Distans",
    price: "550€",
    nivå: "Intermediate",
    ämne: "AI & Data Science",
  },
  {
    id: 14,
    title: "SQL & Databaser",
    description:
      "Lär dig att arbeta med relationsdatabaser, skriva effektiva SQL-frågor och hantera databasdesign och optimering.",
    image: rectangle33,
    duration: "8 veckor",
    lärare: "Ben Forta",
    omLäraren: "SQL-expert och författare",
    location: "Distans",
    price: "200€",
    nivå: "Nybörjare",
    ämne: "Databashantering",
  },
  {
    id: 15,
    title: "DevOps & CI/CD",
    description:
      "Utforska DevOps-principer och lär dig att sätta upp automatiserade pipelines för testning, deployment och leverans.",
    image: rectangle34,
    duration: "18 veckor",
    lärare: "Gene Kim",
    omLäraren: "Medförfattare till The Phoenix Project",
    location: "Distans",
    price: "500€",
    nivå: "Intermediate",
    ämne: "DevOps",
  },
];

export default courses;
