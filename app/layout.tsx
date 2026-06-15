import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TypeCode — Code Typing Practice with Real Repositories",
  description: "Practice typing by retyping popular open source code repositories. Track WPM, accuracy, and improve your coding speed."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4463692f-173c-4e0d-b4ee-5e34c21ef35d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
