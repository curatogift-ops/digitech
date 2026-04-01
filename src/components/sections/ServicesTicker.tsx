"use client";

const tickerItems = [
  "Brand Strategy",
  "Web Design",
  "UI / UX",
  "Motion Design",
  "Development",
  "SEO & Growth",
  "Digital Products",
  "Brand Identity",
  "Brand Strategy",
  "Web Design",
  "UI / UX",
  "Motion Design",
  "Development",
  "SEO & Growth",
  "Digital Products",
  "Brand Identity",
];

export function ServicesTicker() {
  return (
    <div
      style={{
        overflow: "hidden",
        background: "#13132b",
        borderTop: "1px solid rgba(255,255,255,.06)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="animate-ticker"
        style={{ display: "flex", whiteSpace: "nowrap" }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {tickerItems.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(.78rem, 2vw, .92rem)",
              fontStyle: "italic",
              letterSpacing: ".04em",
              color: "rgba(255,255,255,.35)",
              padding: "16px 32px",
              display: "flex",
              alignItems: "center",
              gap: "32px",
              flexShrink: 0,
              transition: "color .3s",
              cursor: "default",
            }}
            className="hover:!text-white"
          >
            {item}
            {/* Separator — a small violet dash */}
            <span
              style={{
                display: "inline-block",
                width: "20px",
                height: "1px",
                background: "rgba(168,85,247,.4)",
                flexShrink: 0,
                verticalAlign: "middle",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
