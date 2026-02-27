@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --bg: #080C14;
  --bg2: #0D1424;
  --bg3: #111B2E;
  --bg4: #172238;
  --border: rgba(255, 255, 255, 0.07);
  --text: #E8EDF5;
  --text2: #8FA3BF;
  --text3: #435570;
  --mono: 'Space Mono', monospace;
  --sans: 'Outfit', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  min-height: 100vh;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--bg4); border-radius: 3px; }

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
  z-index: 0;
}

.flip-card { perspective: 1200px; }
.flip-inner {
  position: relative; width: 100%; height: 100%;
  transition: transform 0.55s cubic-bezier(0.4,0,0.2,1);
  transform-style: preserve-3d;
}
.flip-inner.flipped { transform: rotateY(180deg); }
.flip-front, .flip-back {
  position: absolute; inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 20px;
}
.flip-back { transform: rotateY(180deg); }

@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 1; }
}
@keyframes bounceX {
  0%,100% { transform: translateX(0); }
  50%      { transform: translateX(4px); }
}
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

.animate-slide-up  { animation: slideUp 0.4s ease forwards; }
.animate-fade-in   { animation: fadeIn  0.3s ease forwards; }
.animate-bounce-x  { animation: bounceX 1.2s ease infinite; }

.progress-bar { transition: width 0.4s cubic-bezier(0.4,0,0.2,1); }
.cat-pill { transition: all 0.18s ease; cursor: pointer; }
.cat-pill:hover { transform: translateY(-1px); }

kbd {
  font-family: var(--mono); font-size: 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 4px; padding: 2px 6px; color: var(--text3);
}
