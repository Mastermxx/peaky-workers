// check localstoage and update the display stats


applyJob();
actionMep();

setInterval( () => {
  updateStats();
  updateLocaltime();
}, 1000);

resetLocalstorage();
