"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function RockBotWidget() {
  useEffect(() => {
    // Si el script necesita que exista el contenedor
    if (!document.getElementById("chat-widget")) {
      const div = document.createElement("div");
      div.id = "chat-widget";
      document.body.appendChild(div);
    }
  }, []);

  return (
    <>
      {/* Si el widget ya se inyecta solo, puedes quitar este div */}
      <div id="chat-widget"></div> 
      <Script
        src="https://rockbot-924631262984.southamerica-west1.run.app/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
