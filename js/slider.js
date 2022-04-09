const slider = document.queryselector("#slider");
let slidersection = document.queryselectorAll(".slider__section");
let slidersectionlast = slidersection[slidersection.length -1];

const btnleft = document.queryselector("btn-left");
const btnright = document.queryselector("btn-right");

slider.insertAdjacentElement('afterbegin', slidersectionlast);

function next() {
let slidersectionfirst = document.queryselectorAll(".slider__section")[0];
slider.style.marginleft = "-200%";
slider.style.transition = "all 0.5s";
setTimeout(function(){
	slider.style.transition ="none";
	slider.insertAdjacentelement('beforeend', slidersectionfirst);
	slider.style.marginleft ="-100%";
}, 500);
}

function prev() {
	let slidersection = document.queryselectorAll(".slider__section");
	let slidersectionlast = slidersection[slidersection.length -1];
	slider.style.marginleft = "0";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentelement('afterbegin', slidersectionlast);
		slider.style.marginleft = "-100%";
	}, 500);
}

btnright.addEventListener('click', function(){
	next();
});
btnleft.addEventListener('click', function(){
	next();
});

setInterval(function(){
	next();
}, 5000);