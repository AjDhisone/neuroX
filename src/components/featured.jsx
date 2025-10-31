import React from "react";
import {
  BsCameraVideo,
  BsGraphUp,
  BsPeopleFill,
  BsHeadset,
  BsJournalCheck,
  BsCalendar2Week,
} from "react-icons/bs";

const highlights = [
  {
    title: "Live Interactive Classes",
    content: "Engage with India's top NEET mentors in real-time learning sessions.",
    icon: <BsCameraVideo size={28} />,
  },
  {
    title: "AI-Based Test Analytics",
    content: "Track your weak areas and get intelligent insights for faster improvement.",
    icon: <BsGraphUp size={28} />,
  },
  {
    title: "Top-Ranked NEET Faculty",
    content: "Learn directly from experienced teachers with 10+ years of proven success.",
    icon: <BsPeopleFill size={28} />,
  },
  {
    title: "24/7 Doubt Support",
    content: "Never stay stuck — instant chat and video explanations, anytime.",
    icon: <BsHeadset size={28} />,
  },
  {
    title: "500+ Mock Tests",
    content: "Boost confidence with topic-wise and full-length NEET test series.",
    icon: <BsJournalCheck size={28} />,
  },
  {
    title: "Personalized Study Plans",
    content: "Get a custom roadmap designed to target your specific learning needs.",
    icon: <BsCalendar2Week size={28} />,
  }
];

const midIndex = Math.ceil(highlights.length / 2);
const column1Items = highlights.slice(0, midIndex);
const column2Items = highlights.slice(midIndex);

export default function Highlights() {
  return (
    <section className="relative overflow-hidden bg-crisp-white py-16 text-charcoal font-poppins">
      <div className="absolute inset-0 rounded-t-[28px] rounded-b-[28px] border border-transparent shadow-[0_12px_40px_rgba(47,62,70,0.04)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">
            Highlights
          </h2>
        </div>

        <div className="hidden md:block space-y-8">
          <div className="flex gap-6 animate-marquee">
            {highlights.map((it, i) => (
              <Card key={i} {...it} />
            ))}
            {highlights.map((it, i) => (
              <Card key={`dup-${i}`} {...it} />
            ))}
          </div>
          <div className="flex gap-6 animate-marquee-reverse">
            {highlights.map((it, i) => (
              <Card key={`b-${i}`} {...it} />
            ))}
            {highlights.map((it, i) => (
              <Card key={`b-dup-${i}`} {...it} />
            ))}
          </div>
        </div>

        <div className="block md:hidden h-[46rem] overflow-hidden relative">
          <div className="flex justify-center gap-4 h-full">
            <div className="w-[45%] flex-shrink-0 flex flex-col gap-4 animate-marquee-up">
              {column1Items.concat(column1Items).map((item, i) => (
                <MobileCard key={`col1-${i}`} title={item.title} icon={item.icon} />
              ))}
            </div>
            <div className="w-[45%] flex-shrink-0 flex flex-col gap-4 animate-marquee-down">
              {column2Items.concat(column2Items).map((item, i) => (
                <MobileCard key={`col2-${i}`} title={item.title} icon={item.icon} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-crisp-white to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-crisp-white to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-scholarly-teal/8 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-scholarly-teal/8 to-transparent pointer-events-none" />
    </section>
  );
}

function Card({ title, content, icon }) {
  return (
    <div className="min-w-[280px] flex-shrink-0 bg-crisp-white rounded-2xl border border-scholarly-teal/10 p-6 shadow-[0_8px_30px_rgba(42,157,143,0.06)] transition-transform duration-300 hover:scale-[1.03]">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-scholarly-teal">{icon}</span>
        <h3 className="text-lg font-semibold text-scholarly-teal">{title}</h3>
      </div>
      <p className="text-sm text-charcoal">{content}</p>
    </div>
  );
}

function MobileCard({ icon, title }) {
  return (
    <div className="w-full flex-shrink-0 bg-crisp-white/80 backdrop-blur-sm border border-scholarly-teal/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 h-36 shadow-md">
      <span className="text-scholarly-teal">{icon}</span>
      <h4 className="text-sm font-semibold text-charcoal leading-tight">{title}</h4>
    </div>
  );
}