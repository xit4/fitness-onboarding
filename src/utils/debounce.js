function debounce(func, wait) {
  let canRun = true;
  return function (...args) {
    const context = this;
    if (canRun) func.apply(context, args);
    canRun = false;
    setTimeout(() => (canRun = true), wait);
  };
}

export default debounce;
