module.exports = {
  use: {
    // headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'on'
  },
  reporter: [['html', { outputFolder: 'reports' }]],
};
