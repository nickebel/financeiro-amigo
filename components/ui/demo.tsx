"use client";

import GlyphPortal from "@/components/ui/glyph-portal";
import "./demo.css";

const PHOTO_URL =
  "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&w=2200&q=85";

export default function RayGlyphPortalDemo() {
  return (
    <main className="ray-portal-demo">
      <GlyphPortal
        word="RAY"
        scrollLength={2.4}
        interactive
        annotations={false}
        enterLabel="Entrar no Ray"
        style={{
          "--gp-paper": "var(--ray-portal-paper)",
          "--gp-ink": "var(--ray-portal-ink)",
          "--gp-field": "var(--ray-portal-field)",
          "--gp-foreground": "var(--ray-portal-foreground)",
          fontFamily: '"Arial Black", Arial, sans-serif',
        }}
        background={
          <div className="ray-portal-image">
            <img
              src={PHOTO_URL}
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
            />
            <div className="ray-portal-image-overlay" aria-hidden="true" />
          </div>
        }
        front={
          <div className="ray-portal-front">
            <span className="ray-portal-logo">ray.</span>
            <span className="ray-portal-kicker">
              Finanças pessoais, com clareza.
            </span>
          </div>
        }
      >
        <section className="ray-portal-content">
          <div>
            <p className="ray-portal-eyebrow">Organização sem ruído</p>
            <h2>Seu dinheiro, em perspectiva.</h2>
          </div>
          <div className="ray-portal-description">
            <p>
              Acompanhe entradas, despesas, contas e metas em um só lugar.
              Seus registros continuam guardados neste aparelho.
            </p>
            <a
              className="ray-portal-entry"
              href="https://nickebel.github.io/financeiro-amigo/#dashboard"
            >
              Abrir painel <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </GlyphPortal>
      <p className="ray-portal-credit">
        Imagem demonstrativa hospedada no Unsplash.
      </p>
    </main>
  );
}
