/* global window */
const canUseDOM = !!(
  typeof window !== 'undefined'
    && window.document
    && window.document.createElement
);

export default {
  canUseDOM,
};
