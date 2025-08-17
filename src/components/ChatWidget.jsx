"use client";

import Script from "next/script";

export default function ChatWidget() {
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
