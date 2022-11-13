console.log('current version: 1.2');
// Selectors
const localtimeDisplay = document.querySelector('[data-counter="time"]');
const expDisplay = document.querySelector('[data-display="exp"]');
const levelDisplay = document.querySelector('[data-display="level"]');
const titleDisplay = document.querySelector('[data-display="title"]');
const becomeFactoryWorker = document.querySelector('[data-apply="factory"]');
const activityDisplay = document.querySelector('[data-display="activity"]');
const actionMepButton = document.querySelector('[data-action="mep"]');
const resetLocalstorageButton = document.querySelector('[data-action="reset"]');

let currentExp = localStorage.getItem('localExp');
let currentLevel = localStorage.getItem('localLevel');
let currentTitle = localStorage.getItem('localTitle');

if (!currentExp) localStorage.setItem('localExp', 0);
if (!currentLevel) localStorage.setItem('localLevel', 0);
if (!currentTitle) localStorage.setItem('localTitle', 'Scrub');

console.log('localExp', currentExp);
console.log('localLevel', currentLevel);
console.log('localTitle', currentTitle);

let activityLog = ''

function applyJob() {
  becomeFactoryWorker.addEventListener('click', function() {
    if (!currentTitle) {
      localStorage.removeItem('localTitle');
      localStorage.setItem('localTitle', 'Factory worker');
      titleDisplay.innerHTML = currentTitle;
      activityLog += `You've become a factory worker`;
      activityDisplay.innerHTML = activityLog;
      becomeFactoryWorker.style.display = 'none';
    } else {
      console.log('You already have a job');
    }
  })
}

function actionMep() {
  actionMepButton.addEventListener('click', function() {
    console.log(currentExp)
    let tempExp = currentExp + 10;
    console.log(tempExp)
    localStorage.removeItem('localExp');
    currentExp = tempExp;
    localStorage.setItem('localExp', currentExp);
    console.log('localExp', currentExp);
    updateStats();
  })
}

function updateStats() {
    expDisplay.innerHTML = currentExp;
    levelDisplay.innerHTML = currentLevel;
    titleDisplay.innerHTML = currentTitle;
    updateLevel();
}


function updateLocaltime() {
  const date = new Date();
  let currentTime = date.toLocaleTimeString('nl-NL');
  localtimeDisplay.innerHTML = currentTime;
}


function resetLocalstorage() {
  resetLocalstorageButton.addEventListener('click', function() {
    localStorage.removeItem('localExp');
    localStorage.removeItem('localLevel');
    localStorage.removeItem('localTitle');
  })
}


//
// window.body.on('click', '[data-popup-open]', function () {
//   var id = $(this).data('popup-ref');
//   $('[data-popup-id="' + id + '"]').addClass("active");
// });
