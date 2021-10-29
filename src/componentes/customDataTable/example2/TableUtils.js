export const getColumnSpacing = (num, checkboxSelection = false) => checkboxSelection ? `50px repeat(${num}, 1fr)` : `repeat(${num}, 1fr)`;

export const delay = (callBack, _delay = 1000) => {
    const timer = setTimeout(() => {
      callBack();
      clearTimeout(timer);
    }, _delay);
    window.addEventListener('keydown', () => {
      clearTimeout(timer);
    });
  };
