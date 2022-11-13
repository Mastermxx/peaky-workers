function updateLevel() {
  switch(currentExp) {
    case 0:
      currentLevel = 1;
      break;
    case 100:
      currentLevel = 2;
      break;
    case 200:
      currentLevel = 3;
      break;
    case 300:
      currentLevel = 4;
      break;
    case 400:
      currentLevel = 5;
      break;
    case 500:
    currentLevel = 6;
      break;
    default:
      currentLevel = 1;
  }
  localStorage.setItem('localLevel', currentLevel);
}
