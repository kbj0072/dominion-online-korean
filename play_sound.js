var timeId = null;


timerId = setInterval(get_hand, 500);
timerId2 = setInterval(mini_card, 2000);
timerId3 = setInterval(treasure, 500);

function get_hand() {
	hand_card_list = document.getElementsByClassName("my-visible-hand");
	if (hand_card_list.length !== 0){
		// clearInterval(timerId);
		addListener(hand_card_list, "card_down.mp3");
	}
}


function mini_card(){
	var mini_card_list = document.getElementsByClassName("mini-card");
	if (mini_card_list.length !== 0){
		// clearInterval(timerId);
		addListener(mini_card_list, "card_get.mp3");
	}
}


function treasure(){
	treasure_button_list = document.getElementsByClassName("game-button");
	if (treasure_button_list.length !== 0){
		// clearInterval(timerId);
		addListener(treasure_button_list, "treasure_down.mp3");
	}
}


function addListener(elem_list, sound){
	for(var i=0; i< elem_list.length; ++i) {
		element = elem_list[i];
		if (element.getAttribute('listen_sound') === null) {
			element.setAttribute('listen_sound', 'true');
			element.addEventListener('click', function (e) {				
				console.log('event has been attached');
				let url = chrome.runtime.getURL(sound);
				let a = new Audio(url);
				a.play();
			});
		}
	}
}
