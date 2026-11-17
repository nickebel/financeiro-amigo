"use client";

import GlyphPortal from "@/components/ui/glyph-portal";

const PHOTO_URL =
  "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&w=2200&q=85";

export default function RayGlyphPortalDemo() {
  return (
    <main style={{ background: "#FAFAFA", color: "#111111" }}>
      <GlyphPortal
        word="RAY"
        scrollLength={2.4}
        interactive
        annotations={false}
        enterLabel="Entrar no Ray"
        style={{
          "--gp-paper": "#FAFAFA",
          "--gp-ink": "#111111",
          "--gp-field": "#003459",
          "--gp-foreground": "#FFFFFF",
          fontFamily: '"Arial Black", Arial, sans-serif',
        }}
        background={
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            <img
              src={PHOTO_URL}
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 52%",
                filter: "saturate(.45)",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "#003459",
                opacity: 0.7,
                mixBlendMode: "multiply",
              }}
            />
          </div>
        }
        front={
          <div
            style={{
              position: "absolute",
              inset: "clamp(24px, 5vw, 56px)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 24,
              color: "#FFFFFF",
              pointerEvents: "none",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-.04em" }}>
              ray.
            </span>
            <span style={{ maxWidth: "22ch", textAlign: "right", fontSize: 12, lineHeight: 1.5 }}>
              Finanças pessoais, com clareza.
            </span>
          </div>
        }
      >
        <section
          style={{
            width: "min(100%, 1080px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(220px, .8fr)",
            alignItems: "end",
            gap: "clamp(32px, 7vw, 112px)",
            color: "#FFFFFF",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 20px",
                color: "#C7D9EA",
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              Organização sem ruído
            </p>
            <h2
              style={{
                maxWidth: "11ch",
                margin: 0,
                fontFamily: "Georgia, serif",
                fontSize: "clamp(42px, 7vw, 88px)",
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: "-.045em",
                textWrap: "balance",
              }}
            >
              Seu dinheiro, em perspectiva.
            </h2>
          </div>
          <div>
            <p
              style={{
                maxWidth: "34ch",
                margin: "0 0 24px",
                color: "#D7E4F0",
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              Acompanhe entradas, despesas, contas e metas em um só lugar.
              Seus registros continuam guardados neste aparelho.
            </p>
            <a
              href="https://nickebel.github.io/financeiro-amigo/#dashboard"
              style={{
                display: "inline-flex",
                minHeight: 46,
                alignItems: "center",
                gap: 16,
                padding: "0 18px",
                background: "#63B3FF",
                color: "#061A2D",
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Abrir painel <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </GlyphPortal>
      <p
        style={{
          margin: 0,
          padding: "12px 20px",
          color: "#707070",
          background: "#FAFAFA",
          fontSize: 11,
        }}
      >
        Imagem demonstrativa hospedada no Unsplash.
      </p>
    </main>
  );
}
