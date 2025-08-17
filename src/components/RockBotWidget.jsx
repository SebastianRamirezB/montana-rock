"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function RockBotWidget() {
  useEffect(() => {
    const check = setInterval(() => {
      // aseguramos que la función que inicializa exista
      if (typeof (window)._0xa13811 === "function") {
        clearInterval(check);
        console.log("Inicializando RockBot manualmente…");
        (window)._0xa13811(); // ejecuta la función que pinta el chat
      }
    }, 300);

    return () => clearInterval(check);
  }, []);

  return (
    <>
      <div id="chat-widget"></div>
      <Script
        src="https://rockbot-924631262984.southamerica-west1.run.app/widget.js"
        strategy="afterInteractive"
        onLoad={() => console.log("Script de RockBot cargado ✅")}
      />
    </>
  );
}
