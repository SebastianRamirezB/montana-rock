"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function RockBotWidget() {
  useEffect(() => {
    if (!document.getElementById("chat-widget")) {
      const div = document.createElement("div");
      div.id = "chat-widget";
      document.body.appendChild(div);
      console.log("Chat widget container created.");
    }
  }, []);

  return (
    <>
      <Script
        src="https://rockbot-924631262984.southamerica-west1.run.app/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("RockBot widget script loaded successfully.");
          if (window.RockBot) {
            window.RockBot.init(); // Llama a la función de inicialización si es necesaria
          }
        }}
        onError={(e) => {
          console.error("Failed to load RockBot widget script:", e);
        }}
      />
    </>
  );
}
