const circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(el => {

  if(el.dataset.percentage == 'true') {
    let progress = el.querySelector('.progress');
    let value = el.querySelector('.facts-element__value')
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let full = el.dataset.full;
    let current = el.dataset.current;
    let percentageProgress = Math.floor(current / full * 100);
    value.textContent = current;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  } else {
    let progress = el.querySelector('.progress');
    let value = el.querySelector('.facts-element__value')
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let percent = el.dataset.percent;
    let percentageProgress = Math.floor(percent);
    value.textContent = percent + '%';
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }
});
