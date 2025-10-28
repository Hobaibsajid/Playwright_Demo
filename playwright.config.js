module.exports = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'retain-on-failure'
  },
  reporter: [['html', { outputFolder: 'reports' }]],
};
