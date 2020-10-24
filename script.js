// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var english = /^[A-Za-z0-9 ]*$/;

var kingdom = document.getElementsByClassName('kingdom-viewer-card-container')

if (kingdom.length == 0) {
	alert("Error: No card data...");
}
else {
	var kingdom = document.getElementsByClassName('kingdom-viewer-card-container')
	for(var i=0; i< kingdom.length; ++i) {
		var card_name = kingdom[i].getElementsByClassName('full-card-name');
		var original_name = card_name[0].innerText.trim();
		var changed_name = dictName[original_name];
		if ( changed_name != null && english.test(original_name) ) {
			card_name[0].innerText = changed_name;
			var card_text = kingdom[i].getElementsByClassName('card-text');
			var new_text = dictText[original_name];
			if (card_text != null && new_text != null)
				card_text[0].innerHTML = new_text;
		}
		var bottom_name = kingdom[i].getElementsByClassName('types-text-full');
		var changed_bottom = dictBottom[bottom_name[0].innerText.trim()];
		if ( changed_bottom != null)
			bottom_name[0].innerText = changed_bottom;
	}
}


var mini_card_list = document.getElementsByClassName("mini-card");
for (var i=0; i< mini_card_list.length; ++i) {
	mini_card_list[i].addEventListener('contextmenu', function(){setTimeout(full_card_translate,10);}, false)		
}

function check_play_cards() {
	var my_visible_hand = document.getElementsByClassName('my-visible-hand')
	for(var i=0; i< my_visible_hand.length; ++i) {
		var full_card = my_visible_hand[i].getElementsByClassName('full-card')
		var card_name = full_card[0].getElementsByClassName('full-card-name');
		var original_name = card_name[0].innerText.trim();
		var changed_name = dictName[original_name];
		if ( changed_name != null && english.test(original_name) ) {
			card_name[0].innerText = changed_name;
			var card_text = full_card[0].getElementsByClassName('card-text');
			var new_text = dictText[original_name];
			if (card_text != null && new_text != null)
				card_text[0].innerHTML = new_text;
		}
		var bottom_name = full_card[0].getElementsByClassName('types-text-full');
		var changed_bottom = dictBottom[bottom_name[0].innerText.trim()];
		if ( changed_bottom != null)
			bottom_name[0].innerText = changed_bottom;
	}
}

timerId = setInterval(check_play_cards, 300);

function full_card_translate() {
	var card_study_container = document.getElementsByClassName('card-study-container')[0]
	var full_card = card_study_container.getElementsByClassName('full-card')
	for(var i=0; i< full_card.length; ++i) {
		var card_name = full_card[i].getElementsByClassName('full-card-name');
		var original_name = card_name[0].innerText.trim();
		var changed_name = dictName[original_name];
		if ( changed_name != null && english.test(original_name) ) {
			card_name[0].innerText = changed_name;
			var card_text = full_card[i].getElementsByClassName('card-text');
			var new_text = dictText[original_name];
			if (card_text != null && new_text != null)
				card_text[0].innerHTML = new_text;
		}
		var bottom_name = full_card[i].getElementsByClassName('types-text-full');
		var changed_bottom = dictBottom[bottom_name[0].innerText.trim()];
		if ( changed_bottom != null)
			bottom_name[0].innerText = changed_bottom;
	}
}