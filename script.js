const slider = document.getElementById("slider");
const checkbox = document.getElementById("checkbox");
const box = document.querySelector(".slider-box");

slider.addEventListener("input", () => {
	const value = parseInt(slider.value);
	box.style.backgroundColor = `hsl(${value}, 100%, 50%)`;
});

checkbox.addEventListener("change", () => {
	let value;
	if (checkbox.checked) {
		value = 180;
	} else {
		value = 0;
	}
	box.style.backgroundColor = `hsl(${value}, 100%, 50%)`;
});
