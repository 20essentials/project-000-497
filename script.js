let currentOrientation = window.screen.orientation.type;

function handleOrientation() {
  let newOrientation = window.screen.orientation.type;
  if (
    newOrientation.startsWith('portrait') &&
    currentOrientation.startsWith('landscape')
  ) {
    currentOrientation = newOrientation;
    location.reload();
  } else if (
    newOrientation.startsWith('landscape') &&
    currentOrientation.startsWith('portrait')
  ) {
    currentOrientation = newOrientation;
    location.reload();
  }
}

screen.orientation.addEventListener('change', handleOrientation);
