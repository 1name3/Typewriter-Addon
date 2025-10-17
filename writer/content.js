
window.addEventListener('load', () => {
 
  const logoContainer = document.querySelector('.roundBox.logoFree');
  
  if (logoContainer) {
    
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('logo_no_frame.svg');
    img.alt = "Custom Logo";
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.display = 'block';

    
    logoContainer.innerHTML = '';
    
    logoContainer.appendChild(img);
  } else {
    console.log('Logo Container nicht gefunden.');
  }
});
