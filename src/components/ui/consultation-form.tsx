"use client";

import { useSearchParams } from "next/navigation";

export function ConsultationForm() {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  // Optional: capture landing page and referrer
  if (typeof window !== "undefined") {
    params.set("landing_page", window.location.href);

    if (document.referrer) {
      params.set("referrer", document.referrer);
    }
  }

  const iframeSrc = `https://tally.so/embed/ob1EKx?transparentBackground=1&dynamicHeight=1&${params.toString()}`;

  return (
    <iframe
      src={iframeSrc}
      loading="lazy"
      width="100%"
      height="700"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="IBS Fincorp - Check Eligibility"
      style={{
        minHeight: 700,
        display: "block",
        width: "100%",
      }}
    />
  );
}