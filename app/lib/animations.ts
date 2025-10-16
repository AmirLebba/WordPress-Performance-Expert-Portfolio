import { animate } from 'animejs';

export const fadeIn = (
  target: string | HTMLElement,
  opts?: Parameters<typeof animate>[1]
) =>
  animate(target, {
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
) => {
  const obj = { val: 0 };
  animate(obj, {
    val: to,
    duration,
    round: 1,
    easing: 'easeOutQuart',
    update: () => (el.textContent = `${obj.val}${suffix}`),
  });
};