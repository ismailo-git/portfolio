const swup = new Swup();

function loader() {
	document.querySelector(".loader").classList.add("fade-out");
}

function fadeOut() {
	setInterval(loader, 3000);
}

window.onload = fadeOut;
