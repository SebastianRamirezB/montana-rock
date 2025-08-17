"use client";

import { useEffect } from "react";

export default function RockBotWidget() {
  useEffect(() => {
    // Evita que se agregue más de una vez
    if (document.getElementById("rockbot-script")) return;

    const div = document.createElement("div");
    div.id = "chat-widget";
    document.body.appendChild(div);

    const script = document.createElement("script");
    script.id = "rockbot-script";
    script.src =
      "https://rockbot-924631262984.southamerica-west1.run.app/widget.js";
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.getElementById("rockbot-script")?.remove();
      document.getElementById("chat-widget")?.remove();
    };
  }, []);

  return null; // ya lo insertamos en body
}
