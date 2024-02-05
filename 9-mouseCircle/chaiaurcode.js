const cursor = document.querySelector('.cursor');
// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array


window.addEventListener('mousemove', (e) => {
  cursor.style.background=colors[Math.floor(Math.random()*colors.length)]
  cursor.style.left = e.clientX+6 + 'px';
  cursor.style.top = e.clientY+23 + 'px';
  cursor.style.boxShadow = `0 0 2px ${colors[Math.floor(Math.random()*colors.length)]}, 0 0 10px ${colors[Math.floor(Math.random()*colors.length)]}`;
})