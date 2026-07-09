"use client";
import { useEffect, useRef, RefObject } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
}

export function useIntersectionObserver<T extends Element>(
  ref: RefObject<T | null>,
  onIntersect: () => void,
  onLeave: () => void,
  options?: UseIntersectionObserverOptions
) {
  const onIntersectRef = useRef(onIntersect);
  const onLeaveRef = useRef(onLeave);

  onIntersectRef.current = onIntersect;
  onLeaveRef.current = onLeave;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersectRef.current();
        else onLeaveRef.current();
      },
      { threshold: options?.threshold ?? 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options?.threshold]);
}
