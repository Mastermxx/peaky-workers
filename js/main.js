console.log('current version: 1.8');
// Selectors
const localtimeDisplay = document.querySelector('[data-counter="time"]');
const expDisplay = document.querySelector('[data-display="exp"]');
const cashDisplay = document.querySelector('[data-display="cash"]');
const bankDisplay = document.querySelector('[data-display="bank"]');
const levelDisplay = document.querySelector('[data-display="level"]');
const titleDisplay = document.querySelector('[data-display="title"]');
const activityDisplay = document.querySelector('[data-display="activity"]');

const becomeFactoryWorker = document.querySelector('[data-apply="factory"]');

const actionMepButton = document.querySelector('[data-action="mep"]');
const actionStealButton = document.querySelector('[data-action="steal"]');

const resetLocalstorageButton = document.querySelector('[data-action="reset"]');

let currentExp = localStorage.getItem('localExp');
let currentLevel = localStorage.getItem('localLevel');
let currentTitle = localStorage.getItem('localTitle');
let currentCash = localStorage.getItem('localCash');
let currentBank = localStorage.getItem('localBank');

if (!currentExp) localStorage.setItem('localExp', 0);
if (!currentLevel) localStorage.setItem('localLevel', 0);
if (!currentTitle) localStorage.setItem('localTitle', 'Scrub');
if (!currentCash) localStorage.setItem('localCash', 0);
if (!currentBank) localStorage.setItem('localBank', 0);

console.log('localExp', currentExp);
console.log('localLevel', currentLevel);
console.log('localTitle', currentTitle);
console.log('localCash', currentCash);
console.log('localBank', currentBank);

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
    let tempCash = parseInt(currentCash) + 1;
    let tempExp = parseInt(currentExp) + 10;
    localStorage.removeItem('localExp');
    localStorage.removeItem('localCash');
    currentExp = tempExp;
    currentCash = tempCash;
    localStorage.setItem('localExp', currentExp);
    localStorage.setItem('localCash', currentCash);
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
    localStorage.removeItem('localCash');
    localStorage.removeItem('localBank');
  })
}

function stealAction() {
   actionStealButton.addEventListener('click', function() {
     console.log('bla bla')
   })
}


//
// window.body.on('click', '[data-popup-open]', function () {
//   var id = $(this).data('popup-ref');
//   $('[data-popup-id="' + id + '"]').addClass("active");
// });
