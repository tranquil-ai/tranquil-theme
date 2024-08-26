const themeName = 'tranquil-ui';
const parent = document.querySelector('atom-workspace');

module.exports = {
  activate() {
    atom.config.observe(`${themeName}.lightmode`, toggleLightMode);
  },

  deactivate() {
    toggleLightMode();
  },
};

function toggleLightMode(darkmode) {
  darkmode ? parent.classList.add('light') : parent.classList.remove('light');
}
