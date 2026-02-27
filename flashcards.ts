"use client";
import { useState, useCallback } from "react";
import type { Flashcard } from "@/data/flashcards";

interface Props {
  card: Flashcard;
  cardNumber: number;
  total: number;
  isKnown: boolean;
  onNext: () => void;
  onPrev: () => void;
  onMarkKnown: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

export default function FlashCard({
  card, cardNumber, total, isKnown,
  onNext, onPrev, onMarkKnown,
  canGoNext, canGoPrev,
}: Props) {
  const [flipped, setFlipped] = useState(false);

  const handleNext = useCallback(() => {
    setFlipped(false);
    setTimeout(onNext, 120);
  }, [onNext]);

  const handlePrev = useCallback(() => {
    setFlipped(false);
    setTimeout(onPrev, 120);
  }, [onPrev]);

  const handleKnown = useCallback(() => {
    setFlipped(false);
    setTimeout(onMarkKnown, 120);
  }, [onMarkKnown]);

  const col = card.color;
  const progress = ((cardNumber) / total) * 100;

  return (
    <div className="animate-slide-up w-full max-w-2xl mx-auto" style={{ fontFamily: "var(--sans)" }}>
      {/* Card meta row */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-3">
          <span style={{
            fontFamily: "var(--mono)", fontSize: 11,
            color: "var(--text3)", letterSpacing: 1,
          }}>
            {String(cardNumber).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          {isKnown && (
            <span style={{
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: 20, padding: "2px 10px",
              fontSize: 10, color: "#10B981",
              fontFamily: "var(--mono)",
            }}>✓ known</span>
          )}
        </div>
        <div style={{
          background: `${col}18`,
          border: `1px solid ${col}44`,
          borderRadius: 20, padding: "3px 12px",
          fontSize: 11, color: col,
          fontFamily: "var(--mono)",
        }}>
          {card.category}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        height: 3, background: "rgba(255,255,255,0.05)",
        borderRadius: 2, marginBottom: 20, overflow: "hidden",
      }}>
        <div
          className="progress-bar"
          style={{
            height: "100%", borderRadius: 2,
            background: `linear-gradient(90deg, ${col}, ${col}99)`,
            width: `${progress}%`,
          }}
        />
      </div>

      {/* 3D Flip Card */}
      <div
        className="flip-card"
        style={{ height: 320, cursor: "pointer" }}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={`flip-inner${flipped ? " flipped" : ""}`}>
          {/* FRONT */}
          <div className="flip-front" style={{
            background: "var(--bg3)",
            border: `1px solid ${col}30`,
            display: "flex", flexDirection: "column",
            justifyContent: "space-between",
            padding: "28px 32px",
            boxShadow: `0 0 40px ${col}12, 0 8px 32px rgba(0,0,0,0.4)`,
          }}>
            {/* Top accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${col}, ${col}55)`,
              borderRadius: "20px 20px 0 0",
            }} />

            <div>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 9,
                color: "var(--text3)", letterSpacing: 2,
                textTransform: "uppercase", marginBottom: 20,
              }}>QUESTION</div>
              <div style={{
                fontSize: 20, fontWeight: 700, lineHeight: 1.55,
                color: "var(--text)",
              }}>
                {card.q}
              </div>
            </div>

            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              fontFamily: "var(--mono)", fontSize: 10, color: "var(--text3)",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: col, display: "inline-block",
                animation: "fadeIn 1s ease infinite alternate",
              }} />
              tap to reveal answer
            </div>
          </div>

          {/* BACK */}
          <div className="flip-back" style={{
            background: `${col}0e`,
            border: `1px solid ${col}55`,
            display: "flex", flexDirection: "column",
            justifyContent: "space-between",
            padding: "28px 32px",
            boxShadow: `0 0 60px ${col}20, 0 8px 32px rgba(0,0,0,0.4)`,
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${col}, ${col}99)`,
              borderRadius: "20px 20px 0 0",
            }} />

            <div style={{ overflowY: "auto", maxHeight: 240 }}>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 9,
                color: col, letterSpacing: 2,
                textTransform: "uppercase", marginBottom: 16,
              }}>ANSWER</div>
              <div style={{
                fontSize: 15, lineHeight: 1.8,
                color: "#CBD5E1", whiteSpace: "pre-line",
              }}>
                {card.a}
              </div>
            </div>

            <div style={{
              fontFamily: "var(--mono)", fontSize: 10,
              color: "var(--text3)",
            }}>
              tap to flip back
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{
        display: "flex", gap: 10, marginTop: 20,
        justifyContent: "center", alignItems: "center",
      }}>
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: "11px 22px",
            fontSize: 13, color: canGoPrev ? "var(--text2)" : "var(--text3)",
            cursor: canGoPrev ? "pointer" : "not-allowed",
            opacity: canGoPrev ? 1 : 0.35,
            fontFamily: "var(--sans)",
            transition: "all 0.15s",
          }}
        >
          ← Prev
        </button>

        <button
          onClick={handleKnown}
          style={{
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.35)",
            borderRadius: 12, padding: "11px 28px",
            fontSize: 13, fontWeight: 700,
            color: "#10B981", cursor: "pointer",
            fontFamily: "var(--sans)",
            transition: "all 0.15s",
          }}
          onMouseOver={e => (e.currentTarget.style.background = "rgba(16,185,129,0.18)")}
          onMouseOut={e => (e.currentTarget.style.background = "rgba(16,185,129,0.1)")}
        >
          ✓ Got it
        </button>

        <button
          onClick={handleNext}
          disabled={!canGoNext}
          style={{
            background: canGoNext ? `${col}1a` : "transparent",
            border: `1px solid ${canGoNext ? col + "55" : "rgba(255,255,255,0.08)"}`,
            borderRadius: 12, padding: "11px 22px",
            fontSize: 13, fontWeight: 600,
            color: canGoNext ? col : "var(--text3)",
            cursor: canGoNext ? "pointer" : "not-allowed",
            opacity: canGoNext ? 1 : 0.35,
            fontFamily: "var(--sans)",
            transition: "all 0.15s",
          }}
        >
          Next →
        </button>
      </div>

      {/* Keyboard hints */}
      <div style={{
        textAlign: "center", marginTop: 14,
        fontFamily: "var(--mono)", fontSize: 10,
        color: "var(--text3)", display: "flex",
        justifyContent: "center", gap: 12,
      }}>
        <span><kbd>Space</kbd> flip</span>
        <span><kbd>←</kbd><kbd>→</kbd> navigate</span>
        <span><kbd>G</kbd> got it</span>
      </div>
    </div>
  );
}
