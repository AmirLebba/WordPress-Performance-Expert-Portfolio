import anime from "animejs";

export const fadeIn = (
  target: string | HTMLElement,
  opts?: anime.AnimeParams
) =>
  anime({
    target, // ← fixed typo
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: "easeOutQuart",
    ...opts,
  });

export const countUp = (
  el: HTMLElement,
  to: number,
  { duration = 2000, suffix = "" } = {}
) => {
  // typed proxy object
  const obj = { val: 0 };

  anime({
    targets: obj,
    val: to,
    duration,
    round: 1,
    easing: "easeOutQuart",
    update: () => (el.textContent = `${obj.val}${suffix}`),
  });
};
