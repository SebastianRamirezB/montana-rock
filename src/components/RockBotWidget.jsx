"use client";

import { useEffect } from "react";

export default function RockBotWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://rockbot-924631262984.southamerica-west1.run.app/widget.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return <div id="chat-widget"></div>;
}
