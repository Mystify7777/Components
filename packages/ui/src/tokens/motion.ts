export const motion = {
  durations: {
    fastest: 100,
    fast: 150,
    normal: 250,
    slow: 400,
    slowest: 600,
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
  },
  springs: {
    default: { stiffness: 170, damping: 26 },
    soft: { stiffness: 100, damping: 14 },
    snappy: { stiffness: 300, damping: 20 },
  },
};
export default motion;
