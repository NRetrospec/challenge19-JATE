const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt from showing
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
});

butInstall.addEventListener('click', async () => {
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }
});

window.addEventListener('appinstalled', (event) => {
  // Log the installation event
  console.log('App was installed');
});
