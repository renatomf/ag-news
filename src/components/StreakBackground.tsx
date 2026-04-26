"use client";

import { useRef, useEffect, type RefObject } from "react";
import { gsap } from "gsap";

const S1_PATHS = [
  "M 2280,-240 C 2110,-10 1500,120 1710,410 C 1920,700 1240,770 660,930 C 230,1055 -20,1170 -250,1330",
  "M 2340,-240 C 2170,10 1565,145 1775,440 C 1990,735 1300,805 720,965 C 280,1090 30,1200 -270,1365",
  "M 2230,-240 C 2060,-35 1450,95 1665,390 C 1865,675 1180,740 610,900 C 190,1025 -60,1145 -265,1295",
  "M 2385,-240 C 2215,25 1600,165 1815,465 C 2035,760 1355,830 770,995 C 340,1120 85,1230 -275,1390",
];

const S2_PATHS = [
  "M 2340,-235 C 2185,-15 1620,110 1800,365 C 1980,635 1350,700 770,865 C 350,990 110,1105 -170,1260",
  "M 2400,-235 C 2245,5 1680,130 1865,395 C 2045,670 1420,735 840,900 C 405,1025 165,1140 -190,1295",
  "M 2295,-235 C 2140,-30 1570,90 1750,345 C 1930,610 1290,680 710,840 C 300,970 70,1080 -195,1235",
  "M 2440,-235 C 2280,20 1725,145 1910,415 C 2095,695 1460,755 885,925 C 460,1050 215,1165 -185,1310",
];

const S3_PATHS = [
  "M 2205,-265 C 2065,-55 1545,65 1710,320 C 1875,590 1260,650 700,810 C 300,930 70,1035 -200,1185",
  "M 2265,-265 C 2120,-35 1600,90 1765,345 C 1935,620 1315,685 760,850 C 355,970 125,1075 -225,1225",
  "M 2160,-265 C 2020,-75 1490,50 1655,305 C 1825,565 1210,630 655,790 C 255,910 25,1015 -210,1165",
  "M 2300,-265 C 2155,-15 1635,105 1805,360 C 1970,640 1360,700 805,865 C 405,985 175,1090 -220,1245",
];

const HL_PATHS = [
  "M 2290,-240 C 2125,-10 1540,120 1745,405 C 1945,690 1260,760 685,925 C 265,1045 20,1160 -205,1315",
  "M 2345,-240 C 2180,10 1600,145 1805,435 C 2010,725 1315,790 740,955 C 315,1080 65,1190 -220,1350",
  "M 2245,-240 C 2080,-35 1495,100 1700,385 C 1895,665 1210,740 640,895 C 225,1020 -20,1135 -210,1285",
];

const GLOW_PATHS = [
  "M 2140,-300 C 1980,-70 1420,75 1610,360 C 1830,700 1195,760 615,930 C 195,1050 -45,1170 -290,1360",
  "M 2205,-300 C 2045,-50 1490,95 1685,390 C 1910,735 1260,800 680,965 C 250,1090 5,1205 -320,1395",
  "M 2085,-300 C 1925,-90 1360,55 1550,340 C 1770,675 1130,740 560,895 C 150,1015 -90,1130 -300,1330",
];

export default function StreakBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<SVGGElement>(null);
  const s1Ref = useRef<SVGPathElement>(null);
  const s2Ref = useRef<SVGPathElement>(null);
  const s3Ref = useRef<SVGPathElement>(null);
  const hlRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const animateMorph = (
      target: RefObject<SVGPathElement | null>,
      paths: string[],
      minDuration: number,
      maxDuration: number,
      delay = 0
    ) => {
      if (!target.current) return;
      const sequence = [...paths.slice(1), paths[0]];
      const tl = gsap.timeline({ repeat: -1, delay });
      sequence.forEach((d) => {
        tl.to(target.current, {
          attr: { d },
          duration: gsap.utils.random(minDuration, maxDuration),
          ease: "sine.inOut",
        });
      });
    };

    const ctx = gsap.context(() => {
      gsap.set(layerRef.current, {
        xPercent: 12,
        yPercent: 12,
        transformOrigin: "78% 52%",
      });
      gsap.to(layerRef.current, {
        xPercent: 18,
        yPercent: 16,
        rotate: -1.8,
        duration: 16,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      animateMorph(s1Ref, S1_PATHS, 6.2, 9.1);
      animateMorph(s2Ref, S2_PATHS, 7.4, 11.4, 1);
      animateMorph(s3Ref, S3_PATHS, 8.2, 12.4, 0.5);
      animateMorph(hlRef, HL_PATHS, 5.3, 8.2, 0.7);
      animateMorph(glowRef, GLOW_PATHS, 9.6, 13.8, 0.3);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="absolute top-0 right-0 w-full h-[75vh] sm:h-[130vh] md:h-[200vh] pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <svg
        className="absolute top-[-40%] right-[-30%] w-[160%] h-[160%]"
        viewBox="0 0 2900 1900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sg1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d4f5" />
            <stop offset="25%" stopColor="#00e896" />
            <stop offset="65%" stopColor="#7040f0" />
            <stop offset="100%" stopColor="#f040e8" />
          </linearGradient>
          <linearGradient id="sg2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="25%" stopColor="#7040f0" />
            <stop offset="60%" stopColor="#00e896" />
            <stop offset="100%" stopColor="#00d4f5" />
          </linearGradient>
          <linearGradient id="sf-edge-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="black" />
            <stop offset="16%" stopColor="white" />
            <stop offset="85%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <mask id="sf-side-mask">
            <rect x="0" y="0" width="2900" height="1900" fill="url(#sf-edge-fade)" />
          </mask>
          <filter id="sf-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.4" />
          </filter>
          <filter id="sf-glow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="24" />
          </filter>
        </defs>
        <g ref={layerRef} mask="url(#sf-side-mask)">
          <path ref={glowRef} d={GLOW_PATHS[0]} stroke="url(#sg1)" strokeWidth="340" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.16" filter="url(#sf-glow)" />
          <path ref={s1Ref} d={S1_PATHS[0]} stroke="url(#sg1)" strokeWidth="190" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.88" />
          <path ref={s2Ref} d={S2_PATHS[0]} stroke="url(#sg2)" strokeWidth="92" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.46" />
          <path ref={s3Ref} d={S3_PATHS[0]} stroke="url(#sg1)" strokeWidth="54" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.36" />
          <path ref={hlRef} d={HL_PATHS[0]} stroke="white" strokeWidth="24" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" filter="url(#sf-blur)" />
        </g>
      </svg>
    </div>
  );
}
