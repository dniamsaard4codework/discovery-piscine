function scrollToElement(elementId) {
    let targetElement = document.getElementById(elementId);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }  