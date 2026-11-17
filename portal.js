/* Ray Glyph Portal — comportamento nativo, sem React, TypeScript ou dependências. */
(() => {
  const stage = document.querySelector("[data-gp-section]");
  if (!stage) return;

  const pin = stage.querySelector("[data-gp-pin]");
  const field = stage.querySelector("[data-gp-field]");
  const clipGroup = document.getElementById("ray-glyph-transform");
  const glyph = document.getElementById("ray-glyph");
  const content = stage.querySelector("[data-gp-content]");
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!pin || !field || !clipGroup || !glyph || !content) return;

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const smooth = (from, to, value) => {
    const t = clamp((value - from) / (to - from));
    return t * t * (3 - 2 * t);
  };

  let width = 1;
  let height = 1;
  let travel = 1;
  let startScale = 1;
  let endScale = 1;
  let center = { x: 0, y: 0 };
  let target = { x: 0, y: 0 };
  let animationFrame = 0;
  let ready = false;

  const useStaticPresentation = () => {
    stage.dataset.gpReady = "true";
    stage.dataset.gpMotion = "off";
    stage.dataset.gpEntered = "true";
    field.style.clipPath = "none";
    content.style.opacity = "1";
    content.style.pointerEvents = "auto";
  };

  const layout = () => {
    width = Math.max(1, pin.clientWidth);
    height = Math.max(1, pin.clientHeight);

    let box;
    try {
      box = glyph.getBBox();
    } catch (_) {
      useStaticPresentation();
      return;
    }

    if (!box.width || !box.height) {
      useStaticPresentation();
      return;
    }

    center = {
      x: box.x + box.width / 2,
      y: box.y + box.height / 2
    };

    /* A câmera começa no conjunto RAY e atravessa o traço vertical da letra R. */
    target = {
      x: box.x + box.width * 0.055,
      y: box.y + box.height * 0.52
    };

    const wordHeight = height * 0.38;
    startScale = Math.min(width * 0.84 / box.width, wordHeight / box.height);
    endScale = Math.max(startScale, Math.hypot(width, height) / (box.height * 0.72));
    travel = height * 2.4;

    stage.dataset.gpReady = "true";
    stage.dataset.gpMotion = "on";
    ready = true;
    paint();
  };

  const paint = () => {
    if (!ready || motionPreference.matches) return;

    const rect = stage.getBoundingClientRect();
    const progress = clamp(-rect.top / travel);
    const t = clamp(progress / 0.78);
    const eased = t < 0.5
      ? 4 * t ** 3
      : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const scale = Math.exp(
      Math.log(startScale) + Math.log(endScale / startScale) * eased
    );

    const blend = endScale === startScale
      ? 0
      : (1 / scale - 1 / startScale) / (1 / endScale - 1 / startScale);

    const focusX = center.x + (target.x - center.x) * blend;
    const focusY = center.y + (target.y - center.y) * blend;
    const roll = -4 * smooth(0.06, 0.5, t) * (1 - smooth(0.62, 0.92, t));
    const cameraY = height * 0.46 + height * 0.04 * eased;

    clipGroup.setAttribute(
      "transform",
      "translate(" + width / 2 + " " + cameraY + ") " +
      "scale(" + scale + ") rotate(" + roll + ") " +
      "translate(" + -focusX + " " + -focusY + ")"
    );

    field.style.transform = "scale(" + (1 + 0.16 * smooth(0, 0.82, progress)) + ")";
    field.style.clipPath = progress >= 0.94 ? "none" : 'url("#ray-glyph-clip")';

    const captionOpacity = 1 - smooth(0.015, 0.17, progress);
    const reveal = smooth(0.78, 0.9, progress);
    stage.style.setProperty("--gp-caption", String(captionOpacity));
    stage.style.setProperty("--gp-reveal", String(reveal));

    const entered = progress >= 0.9;
    stage.dataset.gpEntered = String(entered);
    content.style.opacity = String(reveal);
    content.style.pointerEvents = entered ? "auto" : "none";
  };

  const schedulePaint = () => {
    if (animationFrame) return;
    animationFrame = window.requestAnimationFrame(() => {
      animationFrame = 0;
      paint();
    });
  };

  const handleMotionChange = () => {
    if (motionPreference.matches) {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      useStaticPresentation();
    } else {
      stage.dataset.gpReady = "false";
      ready = false;
      layout();
    }
  };

  if (motionPreference.matches) {
    useStaticPresentation();
  } else {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(layout).catch(layout);
    } else {
      layout();
    }
    window.addEventListener("scroll", schedulePaint, { passive: true });
    window.addEventListener("resize", layout);
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(layout);
      observer.observe(pin);
    }
  }

  motionPreference.addEventListener?.("change", handleMotionChange);
  window.addEventListener("pagehide", () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
  }, { once: true });
})();