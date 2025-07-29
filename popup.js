const bgColorInput = document.getElementById('bgColor');
const logoColorInput = document.getElementById('logoColor');

chrome.storage.local.get(['kickBgColor', 'kickLogoColor'], (result) => {
  if (result.kickBgColor) bgColorInput.value = result.kickBgColor;
  if (result.kickLogoColor) logoColorInput.value = result.kickLogoColor;
});

bgColorInput.addEventListener('input', () => {
  chrome.storage.local.set({ kickBgColor: bgColorInput.value });
});

logoColorInput.addEventListener('input', () => {
  chrome.storage.local.set({ kickLogoColor: logoColorInput.value });
});
