const background = document.querySelector('.background');

background.addEventListener('click', () => {
   background.classList.add('remove');
});

const lamp = document.querySelector('.lampImage');
const light = document.querySelector('.light');
const figures = document.querySelector('.objectsFigures');

lamp.addEventListener('mousedown', () => {
   lamp.classList.add('mousedown');
});

lamp.addEventListener('mouseup', () => {
   lamp.classList.remove('mousedown');
});

lamp.addEventListener('click', () => {
   light.classList.toggle('on');
   figures.classList.toggle('display');
});

const rabbit = document.querySelector('.objectsRabbit');
const bird = document.querySelector('.objectsBird');

rabbit.addEventListener('click', () => {
   rabbit.classList.add('hide');
   bird.classList.remove('hide');
});

bird.addEventListener('click', () => {
   bird.classList.add('hide');
   rabbit.classList.remove('hide');
});
