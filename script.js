const promises = [
  Math.floor(Math.random() * 5) + 1,
  Math.floor(Math.random() * 5) + 1,
  Math.floor(Math.random() * 5) + 1,
  Math.floor(Math.random() * 5) + 1,
  Math.floor(Math.random() * 5) + 1,
];

window.promises = promises;

Promise.any(
  promises.map(delay => new Promise(resolve => setTimeout(() => resolve(delay), delay * 1000)))
).then(result => {
  document.getElementById("output").textContent = result;
});