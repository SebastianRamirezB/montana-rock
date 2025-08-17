"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function RockBotWidget() {
  useEffect(() => {
    const interval = setInterval(() => {
      // El script define la función "_0xa13811"
      if (typeof (window)._0xa13811 === "function") {
        clearInterval(interval);
        (window)._0xa13811(); // forzamos la ejecución
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="chat-widget"></div>
      <Script
        src="https://rockbot-924631262984.southamerica-west1.run.app/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
