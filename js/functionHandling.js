// check localstoage and update the display stats


applyJob();
actionMep();
stealAction();

setInterval( () => {
  updateStats();
  updateLocaltime();
}, 1000);

resetLocalstorage();
