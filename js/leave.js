const urlParams = new URLSearchParams(document.URL.split('?')[1]);

if (urlParams.has('time') && urlParams.has('origin')) {
  setTimeout(() => {
    location = decodeURIComponent(urlParams.get('origin'))
  }, urlParams.get('time') * 1000);
}

