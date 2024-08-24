export const lazyAPI = (api, limit) => {
  let called = 0;
  return async () => {
    console.log(`laxyAPI called for: ${called}`);
    const res = await api(limit, called * limit);
    called = called + 1;
    return res;
  };
};

export const throttle = (func, ...args) => {
  let lastCall = 0;
  return () => {
    const now = Date.now();
    if (now - lastCall > 300) {
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

export const getCompletedMessage = () => {
  const messages = [
    "Catch 'em all! You’ve reached the end of the Pokémon Trainer's journey. 🌟",
    "You've scrolled to the very last Pokémon card! 🎉",
    "No more Pokémon cards to discover, you’re a true master! 🏆",
    "Looks like you've explored every Pokémon card. Time to catch a break! 🌟",
    "The Pokémon journey ends here. But don’t worry, more adventures await! 🚀",
    "You've reached the final card in the Pokémon collection. Congrats, Trainer! 🥳",
    "All Pokémon cards have been revealed. Ready to catch more in the next update? 🎈",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};
