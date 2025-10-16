import anime from 'animejs';

export const fadeIn = (target: string | HTMLElement, opts?: anime.AnimeParams) =>
  anime({
    targets,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: 'easeOutQuart',
    ...opts,
  });

export const countUp = (
  el: HTMLElement,
  to: number,
  { duration = 2000, suffix = '' } = {}
) =>
  anime({
    targets: { val: 0 },
    val: to,
    duration,
    round: 1,
    easing: 'easeOutQuart',
    update: (a) => (el.textContent = `${a.animatables[0].target.val}${suffix}`),
  });