"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reviewsLeft = [
  {
    text: "I had a great experience with IBSFINCORP. Their service truly stands out in the loan market. The team was supportive, responsive, and made the entire loan process smooth and hassle-free. I highly recommend IBSFINCORP for anyone looking for reliable financial guidance.",
    initial: "G",
    name: "Giridharan Dhanapal",
    role: "Giri Enterprises, Chennai",
    image: "/assets/testimonialphotos/Giri.webp"
  },
  {
    text: "Excellent service overall! The entire team was highly efficient. A special thanks to Mr. Dinesh for coordinating seamlessly with both the bankers and clients. I highly recommend IBSFINCORP for their professional financial consulting services.",
    initial: "F",
    name: "Fayaz Ahamed",
    role: "Gulf Stone Engineering PVT LTD, Chennai",
    image: "/assets/testimonialphotos/fayaz.webp"
  },
  {
    text: "I had a great experience with IBSFINCORP. I was facing difficulty in getting a loan, but the team supported me throughout the process and made everything simple and hassle-free. Their guidance, quick response, and excellent service made all the difference. I strongly recommend IBSFINCORP.",
    initial: "R",
    name: "Raja Raja RRR",
    role: "RRR Chicken, Chennai",
    image: "/assets/testimonialphotos/rrrchicken.webp"
  },
  {
    text: "I struggled to get a Mortgage Loan after facing many rejections from banks. IBSFINCORP handled my case professionally, managed case-wise deviations, increased the LTV, and made the entire process easy. Highly satisfied with their expertise.",
    initial: "V",
    name: "Vinoth Babu",
    role: "APR Traders, Chennai",
    image: "/assets/testimonialphotos/VinothBabu.webp"
  },
  {
    text: "Excellent support from IBSFINCORP in structuring my loan despite DIP status. Their team guided me throughout the process, helped secure the maximum loan amount, and completed everything smoothly within just 10 days.",
    initial: "J",
    name: "Jagadeswari D",
    role: "ROAM BABY ROAM, Chennai",
    image: "/assets/testimonialphotos/Jagadheeshwari.webp"
  },
  {
    text: "I am extremely happy with the services provided by IBSFINCORP. They structured my loan in the best possible way, matching my financial needs and securing a higher loan amount than expected.",
    initial: "E",
    name: "EVP rajeswari",
    role: "EVP HOUSING CHENNAI PRIVATE LIMITED, Chennai",
    image: "/assets/testimonialphotos/Rajeshwari.webp"
  }
];

const reviewsRight = [
  {
    text: "Very professional team. Worked efficiently and got things done very fast. Full documents were scrutinized before submission, helping achieve the best possible results with no rejections.",
    initial: "A",
    name: "Aadesh K Chetty",
    role: "NATURES DESTINY, Chennai",
    image: "/assets/testimonialphotos/AdeeshChetty.webp"
  },
  {
    text: "We approached IBSFINCORP for our Business Improvement Loan. The entire experience was seamless from start to finish. They guided us through every step with professionalism and made the funding process stress-free.",
    initial: "M",
    name: "M Arasu",
    role: "Revaa Tours, Bengaluru",
    image: "/assets/testimonialphotos/Arasu.webp"
  },
  {
    text: "The team quickly understood our requirement, advised the right bank and the right loan product. They were knowledgeable, professional, and guided us throughout the process.",
    initial: "S",
    name: "Sailaja Karra",
    role: "Juniper solutions, Bengaluru",
    image: "/assets/testimonialphotos/Saijala.webp"
  },
  {
    text: "Very good service and guidance provided. The enthusiastic team reduced our EMI burden and helped us save approximately ₹9 lakh per annum by reducing our interest cost.",
    initial: "S",
    name: "Sri Viveka Vidyalaya 07",
    role: "Sri Viveka Vidyalaya Educational Trust, Bengaluru",
    image: "/assets/testimonialphotos/SriVivekaVidyalaya.webp"
  },
  {
    text: "IBSFINCORP, in my experience, are reliable, flexible and committed to clients. Their expertise in liaising with different financial institutions and banks to secure loans was exemplary. They were transparent, responsive and delivered exactly what they promised.",
    initial: "R",
    name: "Ravi Kumar",
    role: "Hotel Jade Garden, Bengaluru",
    image: "/assets/testimonialphotos/jade.webp"
  },
  {
    text: "I was trying to get a Loan Against Property but couldn't get the required funds. After contacting IBSFINCORP, my case was handled smoothly and my loan was sanctioned within the promised timeline.",
    initial: "C",
    name: "Chandrakanth Krishna",
    role: "Punarva Agrotech, Bengaluru",
    image: "/assets/testimonialphotos/punarva6.webp"
  }
];

const ReviewCard = ({ review }: { review: any }) => (
  <div className="relative overflow-hidden bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl lg:rounded-[2rem] p-4 lg:p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] w-[165px] sm:w-[220px] md:w-[300px] lg:w-full lg:max-w-[480px] pointer-events-auto">

    {/* Top Left Dark Vignette */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent pointer-events-none opacity-60"></div>

    <div className="relative z-10">
      <div className="text-gold-500 text-[10px] lg:text-lg mb-2 lg:mb-6 tracking-widest">★★★★★</div>
      <p className="text-dark-900 leading-snug lg:leading-relaxed mb-4 lg:mb-8 font-medium text-[10px] sm:text-xs lg:text-base line-clamp-4 lg:line-clamp-none">
        "{review.text}"
      </p>
      <div className="flex items-center gap-2 lg:gap-4">
        {review.image ? (
          <div className="relative w-8 h-8 lg:w-12 lg:h-12 rounded-full overflow-hidden shrink-0 border border-white/20">
            <Image src={review.image} alt={review.name} fill sizes="(max-width: 768px) 32px, 48px" className="object-cover" />
          </div>
        ) : (
          <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-[#1D1E1C] flex items-center justify-center text-gold-500 font-bold text-xs lg:text-lg shrink-0">
            {review.initial}
          </div>
        )}
        <div className="min-w-0">
          <h4 className="font-bold text-dark-900 text-[10px] lg:text-sm truncate">{review.name}</h4>
          <p className="text-[8px] lg:text-xs text-[#828282] truncate">{review.role}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 1024px)").matches;
      const staggerDelay = isMobile ? 0.4 : 0.6;
      const startY = isMobile ? "80vh" : "120vh";
      const endY = isMobile ? "-80vh" : "-120vh";

      const leftCards = gsap.utils.toArray<HTMLElement>('.card-left');
      const rightCards = gsap.utils.toArray<HTMLElement>('.card-right');

      // Entry State
      gsap.set(leftCards, { y: startY });
      gsap.set(rightCards, { y: startY });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=2000" : "+=5000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Left Column Animation
      leftCards.forEach((card, i) => {
        const delay = i * staggerDelay;
        // Continuous Linear Vertical Scroll
        tl.to(card, {
          y: endY,
          duration: 2, ease: "none"
        }, delay);
      });

      // Right Column Animation (Pairs exactly with left)
      rightCards.forEach((card, i) => {
        const delay = i * staggerDelay;
        // Continuous Linear Vertical Scroll
        tl.to(card, {
          y: endY,
          duration: 2, ease: "none"
        }, delay);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" className="bg-white relative">

      <div ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[900px]">

        {/* Pinned Title Layer */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="px-8 py-10 md:px-16 md:py-12 text-center max-w-2xl">
            <TextBlurReveal
              as="h2"
              text="Trusted By Prime Borrowers"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-dark-900 mb-4"
            />
            <TextBlurReveal
              as="p"
              text="Real Experiences From Clients Across South India."
              className="text-dark-900 font-normal text-lg"
              delay={0.3}
            />
          </div>
        </div>

        {/* Cards Layer */}
        <div className="absolute inset-0 z-10 w-full max-w-6xl mx-auto flex justify-between h-full pointer-events-none px-2 md:px-0">

          {/* Left Column Area */}
          <div className="flex w-1/2 relative h-full">
            {reviewsLeft.map((review, i) => (
              <div key={`left-${i}`} className="card-left absolute inset-0 flex items-center justify-end pr-2 md:pr-16 lg:pr-24 -mt-[10vh] lg:-mt-[25vh] pointer-events-none">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Right Column Area */}
          <div className="flex w-1/2 relative h-full">
            {reviewsRight.map((review, i) => (
              <div key={`right-${i}`} className="card-right absolute inset-0 flex items-center justify-start pl-2 md:pl-16 lg:pl-24 mt-[10vh] lg:mt-[25vh] pointer-events-none">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
