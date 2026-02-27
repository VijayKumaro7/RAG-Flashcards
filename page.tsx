import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAG Pipeline Flashcards",
  description: "50 flashcards covering RAG, Embeddings, Vector Stores, RAGAS Evaluation, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
