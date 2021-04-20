

const accordeonHead = document.querySelectorAll('.questions-accordeon__item-head');

	for(let i = 0; i < accordeonHead.length; i++){
		let accordeonBody = accordeonHead[i].nextElementSibling;

		accordeonHead[i].addEventListener('click', function(){
			accordeonHead[i].classList.toggle('active');
			accordeonBody.classList.toggle('open');
		});
	};

// -----------------------mobile menu-----------------------------

	const burger = document.querySelector('.button-burger');
	const navigation = document.querySelector('.header-nav__list');
	const closeButton = document.querySelector('.close-menu');

	burger.addEventListener('click', function(){
		navigation.classList.add('active');
	});

	closeButton.addEventListener('click', function(){
		navigation.classList.remove('active');
	});

// ----------------------smooth scrolling-------------------------
	const links = document.querySelectorAll('a[href^="#"]');

	for(let i = 0; i < links.length; i++){
		links[i].addEventListener('click', function(event){
			event.preventDefault();
			const blockId = event.target.getAttribute('href').substr(1);

			document.getElementById(blockId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}

// ----------------------test popups-------------------------

const overlay = document.querySelector('.overlay__pop-ups');
const close = document.querySelector('.popup-close-doc');


document.querySelector('#test1').addEventListener('click', function(){
	document.querySelector('.popup-short--documentation').classList.add('active');
		overlay.classList.add('active');
});

document.querySelector('.popup-close-doc').addEventListener('click', function(){
	document.querySelector('.popup-short--documentation').classList.remove('active');
		overlay.classList.remove('active');
});

document.querySelector('#test2').addEventListener('click', function(){
	document.querySelector('.popup-short--find-result').classList.add('active');
		overlay.classList.add('active');
});

document.querySelector('.popup-close-find').addEventListener('click', function(){
	document.querySelector('.popup-short--find-result').classList.remove('active');
		overlay.classList.remove('active');
});
