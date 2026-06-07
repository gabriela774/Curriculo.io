const interactiveItems = document.querySelectorAll(
  ".button, .topbar a, .hero-badges span, .skill-card, .timeline-item, .course-list li, .pill-list span"
);

interactiveItems.forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    item.style.setProperty("--cursor-x", `${x}px`);
    item.style.setProperty("--cursor-y", `${y}px`);
  });

  item.addEventListener("pointerleave", () => {
    item.style.removeProperty("--cursor-x");
    item.style.removeProperty("--cursor-y");
  });
});
