"use client";
import { CATEGORY_COLORS, flashcards } from "@/data/flashcards";

interface Props {
  activeCategory: string;
  knownIds: Set<number>;
  onChange: (cat: string) => void;
  reviewing: boolean;
  onToggleReview: () => void;
  onReset: () => void;
}

export default function CategorySidebar({
  activeCategory, knownIds, onChange,
  reviewing, onToggleReview, onReset,
}: Props) {
  const totalKnown = knownIds.size;
  const total = flashcards.length;
  const overallPct = Math.round((totalKnown / total) * 100);

  return (
    <aside style={{
      width: 240, minWidth: 240,
      background: "var(--bg2)",
      borderRight: "1px solid var(--border)",
      display: "flex", flexDirection: "column",
      height: "100vh", position: "sticky", top: 0,
      overflow: "hidden",
    }}>
      {/* Logo */}
      <div style={{
        padding: "22px 20px 18px",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 18 }}>🔍</span>
          <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.3px" }}>RAG Flashcards</span>
        </div>
        <div style={{
          fontFamily: "var(--mono)", fontSize: 9,
          color: "var(--text3)", letterSpacing: 1,
          marginBottom: 12,
        }}>
          {total} CARDS · {Object.keys(CATEGORY_COLORS).length} TOPICS
        </div>

        {/* Overall progress */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          marginBottom: 6, fontSize: 11, color: "var(--text2)",
        }}>
          <span>Overall</span>
          <span style={{ fontFamily: "var(--mono)", color: "#10B981" }}>
            {totalKnown}/{total}
          </span>
        </div>
        <div style={{
          height: 5, background: "rgba(255,255,255,0.05)",
          borderRadius: 3, overflow: "hidden",
        }}>
          <div
            className="progress-bar"
            style={{
              height: "100%", borderRadius: 3,
              background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
              width: `${overallPct}%`,
            }}
          />
        </div>
        <div style={{
          fontFamily: "var(--mono)", fontSize: 10,
          color: overallPct === 100 ? "#10B981" : "var(--text3)",
          marginTop: 4,
        }}>
          {overallPct}% mastered
        </div>
      </div>

      {/* Actions */}
      <div style={{ padding: "12px 14px", borderBottom: "1px solid var(--border)", display: "flex", gap: 8 }}>
        <button
          onClick={onReset}
          style={{
            flex: 1, background: "transparent",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 8, padding: "7px 0",
            fontSize: 11, color: "var(--text3)",
            cursor: "pointer", fontFamily: "var(--sans)",
            transition: "all 0.15s",
          }}
          onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
          onMouseOut={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
        >
          ↺ Reset
        </button>
        {totalKnown > 0 && (
          <button
            onClick={onToggleReview}
            style={{
              flex: 1,
              background: reviewing ? "rgba(245,158,11,0.12)" : "transparent",
              border: `1px solid ${reviewing ? "rgba(245,158,11,0.4)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 8, padding: "7px 0",
              fontSize: 11,
              color: reviewing ? "#F59E0B" : "var(--text3)",
              cursor: "pointer", fontFamily: "var(--sans)",
              transition: "all 0.15s",
            }}
          >
            {reviewing ? "▶ All" : "📚 Review"}
          </button>
        )}
      </div>

      {/* Category list */}
      <div style={{ overflowY: "auto", flex: 1, padding: "10px 0" }}>
        {/* All */}
        <CategoryItem
          label="All Cards"
          count={total}
          known={totalKnown}
          color="#7C3AED"
          active={activeCategory === "All" && !reviewing}
          onClick={() => onChange("All")}
        />

        <div style={{
          fontFamily: "var(--mono)", fontSize: 8,
          color: "var(--text3)", letterSpacing: 2,
          padding: "12px 18px 6px",
          textTransform: "uppercase",
        }}>
          Topics
        </div>

        {Object.entries(CATEGORY_COLORS).map(([cat, col]) => {
          const catCards = flashcards.filter(c => c.category === cat);
          const catKnown = catCards.filter(c => knownIds.has(c.id)).length;
          return (
            <CategoryItem
              key={cat}
              label={cat}
              count={catCards.length}
              known={catKnown}
              color={col}
              active={activeCategory === cat && !reviewing}
              onClick={() => onChange(cat)}
            />
          );
        })}
      </div>
    </aside>
  );
}

function CategoryItem({
  label, count, known, color, active, onClick,
}: {
  label: string; count: number; known: number;
  color: string; active: boolean; onClick: () => void;
}) {
  const pct = Math.round((known / count) * 100);
  return (
    <button
      onClick={onClick}
      className="cat-pill"
      style={{
        width: "100%", textAlign: "left",
        background: active ? `${color}14` : "transparent",
        border: "none",
        borderLeft: `3px solid ${active ? color : "transparent"}`,
        padding: "8px 16px 8px 15px",
        cursor: "pointer",
        transition: "all 0.15s",
      }}
      onMouseOver={e => {
        if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.03)";
      }}
      onMouseOut={e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }}
    >
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: 4,
      }}>
        <span style={{
          fontSize: 12, fontWeight: active ? 600 : 400,
          color: active ? color : "var(--text2)",
        }}>
          {label}
        </span>
        <span style={{
          fontFamily: "var(--mono)", fontSize: 10,
          color: "var(--text3)",
        }}>
          {known}/{count}
        </span>
      </div>
      <div style={{
        height: 2, background: "rgba(255,255,255,0.04)",
        borderRadius: 1, overflow: "hidden",
      }}>
        <div style={{
          height: "100%", borderRadius: 1,
          background: color,
          width: `${pct}%`,
          transition: "width 0.4s ease",
        }} />
      </div>
    </button>
  );
}
