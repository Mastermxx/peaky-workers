// Selectors
const localtimeDisplay = document.querySelector('[data-counter="time"]');
const expDisplay = document.querySelector('[data-display="exp"]');
const levelDisplay = document.querySelector('[data-display="level"]');
const titleDisplay = document.querySelector('[data-display="title"]');
const becomeFactoryWorker = document.querySelector('[data-apply="factory"]');
const activityDisplay = document.querySelector('[data-display="activity"]');
const actionMepButton = document.querySelector('[data-action="mep"]');

let currentExp = localStorage.getItem('localExp');
const currentLevel = localStorage.getItem('localLevel');
const currentTitle = localStorage.getItem('localTitle');

if (!currentExp) localStorage.setItem('localExp', 0);
if (!currentLevel) localStorage.setItem('localLevel', 0);
if (!currentTitle) localStorage.setItem('localTitle', 'Scrub');

let activityLog = ''

function applyJob() {
  becomeFactoryWorker.addEventListener('click', function() {
    localStorage.removeItem('localTitle');
    localStorage.setItem('localTitle', 'Factory worker');

    titleDisplay.innerHTML = currentTitle;

    activityLog += `You've become a factory worker`;
    activityDisplay.innerHTML = activityLog;
  })
}

function actionMep() {
  actionMepButton.addEventListener('click', function() {
    let tempExp = currentExp + 10;
    localStorage.removeItem('localExp');
    localStorage.setItem('localExp', tempExp);
    console.log(currentExp)
  })
}

function updateStats() {
    expDisplay.innerHTML = currentExp;
    levelDisplay.innerHTML = currentLevel;
    titleDisplay.innerHTML = currentTitle;
}

function updateLocaltime() {
  const date = new Date();
  let currentTime = date.toLocaleTimeString('nl-NL');
  localtimeDisplay.innerHTML = currentTime;
}

applyJob();
actionMep();

setInterval( () => {
  updateStats();
  updateLocaltime();
}, 1000);




window.body.on('click', '[data-popup-open]', function () {
  var id = $(this).data('popup-ref');
  $('[data-popup-id="' + id + '"]').addClass("active");
});
