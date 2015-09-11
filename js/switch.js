var projectForm = document.querySelector('fieldset:nth-of-type(3)');
var stageForm = document.querySelector('fieldset:nth-of-type(4)');

stageForm.classList.add('is-invisible');

// eerste knop 
document.querySelector('input[type="radio"]').onclick = function() {
	projectForm.classList.add("is-visible"),
	projectForm.classList.remove("is-invisible"),
	stageForm.classList.add("is-invisible"),
	stageForm.classList.remove("is-visible");
}

// Laatste knop die gevonden wordt.
document.querySelector('input[type="radio"]:last-of-type').onclick = function() {
	projectForm.classList.add("is-invisible"),
	projectForm.classList.remove("is-visible"),
	stageForm.classList.add("is-visible"),
	stageForm.classList.remove("is-invisible");

}

