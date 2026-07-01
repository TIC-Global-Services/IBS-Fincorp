"use client";
import { useGsapScroll } from "@/hooks/use-gsap-scroll";

export default function AnimationWrapper({ children }: { children: React.ReactNode }) {
  useGsapScroll();
  return <>{children}</>;
}
