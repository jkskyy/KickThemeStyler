const svgLogoString = `
<svg width="97" height="26" viewBox="0 0 97 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_405_17277)" fill="currentColor">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M0 0.0307312H8.34073V5.79423H11.1163V2.91248H13.8919V0.0307312H22.2326V8.69274H19.457V11.5745H16.6815V14.4562H19.457V17.338H22.2326V26H13.8919V23.1182H11.1163V20.2365H8.34073V26H0V0.0307312ZM55.6444 0.0307312H63.9852V5.79423H66.7608V2.91248H69.5363V0.0307312H77.8771V8.69274H75.1015V11.5745H72.3259V14.4562H75.1015V17.338H77.8771V26H69.5363V23.1182H66.7608V20.2365H63.9852V26H55.6444V0.0307312ZM25.039 0.0307312H33.3797V26H25.039V0.0307312ZM38.9462 0.0307312V2.91248H36.1706V23.1029H38.9462V25.9846H52.8535V17.3226H44.5128V8.66061H52.8535V0H38.9462V0.0307312Z"
      fill="#53FC18" />
    <path
      d="M80.4771 0.0153656H83.0543C83.4817 0.0153656 83.7862 0.107559 83.9846 0.304518C84.183 0.501477 84.2738 0.792027 84.2738 1.17337C84.2738 1.55472 84.2123 1.64552 84.1061 1.79917C84 1.9668 83.8617 2.07296 83.6941 2.13442C84.0447 2.22662 84.2738 2.45431 84.4107 2.82029C84.4567 2.95718 84.4721 3.10944 84.4721 3.27706C84.4721 3.70451 84.3659 4.00903 84.183 4.20738C83.9846 4.40574 83.6801 4.49653 83.2526 4.49653H80.4771V0V0.0153656ZM83.1157 1.31166C83.1157 1.05185 82.9789 0.930318 82.7344 0.930318H81.6365V1.8299H82.7344C82.9942 1.8299 83.1157 1.70838 83.1157 1.44856V1.32703V1.31166ZM83.3141 3.09547C83.3141 2.83565 83.1772 2.71412 82.9328 2.71412H81.6365V3.61371H82.9328C83.1926 3.61371 83.3141 3.49218 83.3141 3.23236V3.11084V3.09547Z"
      fill="currentColor" />
    <path
      d="M88.635 4.51331H85.052V0.0153809H88.635V0.914967H86.21V1.78382H88.1167V2.68341H86.21V3.61373H88.635V4.51331Z"
      fill="currentColor" />
    <path
      d="M91.3502 4.51356H90.1908V0.915211H88.833V0.015625H92.7065V0.915211H91.3488V4.51356H91.3502Z"
      fill="currentColor" />
    <path
      d="M92.2503 4.51331L93.9573 0.0153809H95.2536L96.962 4.51331H95.6964L95.4072 3.70452H93.791L93.5019 4.51331H92.2363H92.2517H92.2503ZM94.0802 2.88176H95.1167L94.5984 1.37174L94.0802 2.88176Z"
      fill="currentColor" />
  </g>
  <defs>
    <clipPath id="clip0_405_17277">
      <rect width="96.9619" height="26" fill="currentColor" />
    </clipPath>
  </defs>
</svg>
  
`;
let currentBgColor = '#1e1e2f';
let currentLogoColor = '#00ff88';

function applyBackgroundColor() {
  const elements = document.querySelectorAll('.sidebar, .chat-container, header, nav, .bg-green-500, .border-green-500');
  elements.forEach(el => {
    el.style.backgroundColor = currentBgColor;
    el.style.color = '#ffffff';
    el.style.borderColor = currentBgColor;
  });
  const ringElements = document.querySelectorAll('.ring-green-500');
  ringElements.forEach(rl => {
    rl.style.setProperty('--tw-ring-color', currentBgColor);
  });
  const textElements = document.querySelectorAll('.text-primary, .text-\\[rgb\\(83\\2c 252\\2c 24\\)\\], .text-green-200');
  textElements.forEach(tl => {
    tl.style.color = currentBgColor;
  });
  const borderElements = document.querySelectorAll('.box-border');
  borderElements.forEach(bl => {
    bl.style.borderColor = currentBgColor;
  });
}

function replaceLogo() {
  const imgLogo = document.querySelector('img[src="/img/kick-logo.svg"]');
  const existingSvg = document.querySelector('svg.kick-custom-logo');

  if (imgLogo && !existingSvg) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgLogoString, 'image/svg+xml');
    const svgElement = doc.querySelector('svg');

    if (svgElement) {
      svgElement.classList.add('kick-custom-logo');
      svgElement.style.width = imgLogo.width + 'px';
      svgElement.style.height = imgLogo.height + 'px';
      svgElement.querySelectorAll('[fill]').forEach(el => {
        el.setAttribute('fill', currentLogoColor);
      });

      imgLogo.replaceWith(svgElement);
    }
  } else if (existingSvg) {
    existingSvg.querySelectorAll('[fill]').forEach(el => {
      el.setAttribute('fill', currentLogoColor);
    });
  }

  const svgSubElement = document.querySelectorAll('svg.my-auto');
  svgSubElement.forEach(el => {
    el.setAttribute('fill', currentLogoColor);
  });

  const svgBorderElement = document.querySelectorAll('.px-\\[1px\\] svg');
  svgBorderElement.forEach(el => {
    el.style.fill = currentLogoColor;
  });

  const groups = document.querySelectorAll('g[clip-path*="clip0_162"]');
  groups.forEach(g => {
    const paths = g.querySelectorAll('path');
    paths.forEach((path, index) => {
    if (index === 2) {
      path.setAttribute('fill', currentLogoColor);
    } else {
      path.setAttribute('fill', currentBgColor);
    }
  });
  });
}

function loadAndApplyColors() {
  chrome.storage.local.get(['kickBgColor', 'kickLogoColor'], (result) => {
    currentBgColor = result.kickBgColor || currentBgColor;
    currentLogoColor = result.kickLogoColor || currentLogoColor;

    applyBackgroundColor();
    replaceLogo();
  });
}

const observer = new MutationObserver(() => {
  applyBackgroundColor();
  replaceLogo();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

chrome.storage.onChanged.addListener(() => {
  loadAndApplyColors();
});

loadAndApplyColors();
