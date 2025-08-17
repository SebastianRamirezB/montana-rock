"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function RockBotWidget() {
  useEffect(() => {
    // Crear el contenedor si no existe
    if (!document.getElementById("chat-widget")) {
      const div = document.createElement("div");
      div.id = "chat-widget";
      document.body.appendChild(div);
    }
  }, []);

  return (
    <>
      {/* Elimina este div si el script ya lo maneja */}
      <Script
        src="https://rockbot-924631262984.southamerica-west1.run.app/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("RockBot widget script loaded successfully.");
        }}
        onError={(e) => {
          console.error("Failed to load RockBot widget script:", e);
        }}
      />
    </>
  );
}
