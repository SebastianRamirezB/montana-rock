"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function RockBotWidget() {
  useEffect(() => {
    // Forzar que el div exista antes de que el script lo use
    if (!document.getElementById("chat-widget")) {
      const div = document.createElement("div");
      div.id = "chat-widget";
      document.body.appendChild(div);
    }
  }, []);

  return (
    <>
      
      <Script
        src="https://rockbot-924631262984.southamerica-west1.run.app/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
