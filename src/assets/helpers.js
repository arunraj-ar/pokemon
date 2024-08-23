export const lazyAPI = (api, limit) => {
  let called = 0;
  return async () => {
    console.log(`laxyAPI called for: ${called}`);
    const res = await api(limit, called * limit)
    called = called + 1;
    return res;
  };
};

export const throttle = (func, ...args) => {
  let lastCall = 0;
  return () => {
    const now = Date.now();
    if (now - lastCall > 1000) {
      func(...args);
      lastCall = now;
    }
  };
};

export const debounce = (func, ...args) => {
  let timeout = null;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, 1000);
  };
};
