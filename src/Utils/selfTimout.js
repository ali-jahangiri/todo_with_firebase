const selfTimeout = (time) => (callback) => {
  let timer = setTimeout(() => {
    callback();
    clearTimeout(timer);
  }, time);
};

export default selfTimeout;
