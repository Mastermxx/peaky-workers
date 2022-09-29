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
    default:
  }
  localStorage.setItem('localLevel', currentLevel);
}
