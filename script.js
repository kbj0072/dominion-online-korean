// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var english = /^[A-Za-z0-9' ]*$/;

var kingdom = document.getElementsByClassName('kingdom-viewer-card-container')

var timeout_delay = 20;

if (kingdom.length > 0) {
	for(var i=0; i< kingdom.length; ++i) {
		var full_card = kingdom[i].getElementsByClassName('full-card');
		if (typeof full_card[0] != 'undefined') {
			full_card[0].addEventListener('contextmenu', function(){setTimeout(full_card_translate, timeout_delay);}, false)
			var card_name = full_card[0].getElementsByClassName('full-card-name');
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
}

var mini_card_list = document.getElementsByClassName("mini-card");
var special_mini = false;

if (mini_card_list.length > 0) {	
	//console.log("mini_card_list count: " + mini_card_list.length);
	for(var i=0; i< mini_card_list.length; ++i) {
		mini_card_list[i].addEventListener('contextmenu', function(){setTimeout(full_card_translate, timeout_delay);}, false);
		var card_name = mini_card_list[i].getElementsByClassName('full-card-name');
		if (card_name.length > 0) {
			var original_name = card_name[0].innerText.trim();
			var changed_name = dictName[original_name];
			//console.log(original_name + " >> " + changed_name);
			if ( changed_name != null && english.test(original_name) ) {
				card_name[0].innerText = changed_name;
			}
			var bottom_text = mini_card_list[i].getElementsByClassName('pile-bottom-text');
			if (bottom_text.length > 0) {
				var original_text = bottom_text[0].innerText;
				var changed_text = dictBottom[original_text]
				if (typeof changed_text != 'undefined')
					bottom_text[0].innerText = changed_text;
				special_mini = true;
			}
		}
	}
}
else {
	//console.log("No Mini card...");
}

function landscape_translate() {
	var landscape = document.getElementsByClassName("landscape");
	for(var i=0; i< landscape.length; ++i) {
		var card_name = landscape[i].getElementsByClassName('landscape-name');
		if (card_name.length > 0) {
			var original_name = card_name[0].innerText.trim();
			var changed_name = dictName[original_name];
			//console.log(original_name + " >> " + changed_name);
			if ( changed_name != null && english.test(original_name) ) {
				card_name[0].innerText = changed_name;
				var card_text = landscape[i].getElementsByClassName('landscape-text');
				var new_text = dictText[original_name];
				//console.log(card_text);
				if (card_text.length > 0 && new_text != null)
					card_text[0].innerHTML = new_text;
			}
		}
	}
}

var landscape = document.getElementsByClassName("landscape");

if (landscape.length > 0) {
	//console.log("landscape count: " + landscape.length);
	for(var i=0; i< landscape.length; ++i) {
		landscape[i].addEventListener('contextmenu', function(){setTimeout(landscape_translate, timeout_delay);}, false);
	}
	landscape_translate();
}




function micro_card_translate() {
	var micro_card = document.getElementsByClassName("micro-card");
	for(var i=0; i< micro_card.length; ++i) {
		var card_name = micro_card[i].getElementsByClassName("full-card-name");
		if (card_name.length > 0) {
			var original_name = card_name[0].innerText.trim();
			var changed_name = dictName[original_name];
			//console.log(original_name + " >> " + changed_name);
			if ( changed_name != null && english.test(original_name) ) {
				card_name[0].innerText = changed_name;
				// var card_text = landscape[i].getElementsByClassName('landscape-text');
				// var new_text = dictText[original_name];
				// if (card_text.length > 0 && new_text != null)
				// 	card_text[0].innerHTML = new_text;
			}
		}
	}
}

// it's like 'PRIZE'
var micro_card = document.getElementsByClassName("micro-card");
if (micro_card.length > 0) {
	for(var i=0; i< micro_card.length; ++i) {
		micro_card[i].addEventListener('contextmenu', function(){setTimeout(micro_card_translate, timeout_delay);}, false);
	}
	micro_card_translate();
}



function check_play_cards() {
	var my_visible_hand = document.getElementsByClassName('my-visible-hand');
	for(var i=0; i< my_visible_hand.length; ++i) {
		var full_card = my_visible_hand[i].getElementsByClassName('full-card');
		if (typeof full_card[0] != 'undefined') {
			full_card[0].addEventListener('contextmenu', function(){setTimeout(full_card_translate, timeout_delay);}, false)
			var card_name = full_card[0].getElementsByClassName('full-card-name');
			var original_name = card_name[0].innerText.trim();
			var changed_name = dictName[original_name];
			if ( changed_name != null && english.test(original_name) ) {
				card_name[0].innerText = changed_name;
				var card_text = full_card[0].getElementsByClassName('card-text');
				var new_text = dictText[original_name];
				if (card_text.length > 0 && new_text != null)
					card_text[0].innerHTML = new_text;
			}
			var bottom_name = full_card[0].getElementsByClassName('types-text-full');
			var changed_bottom = dictBottom[bottom_name[0].innerText.trim()];
			if ( changed_bottom != null)
				bottom_name[0].innerText = changed_bottom;
		}
	}
}

function check_mini_cards() {
	var mini_card_list = document.getElementsByClassName("mini-card");
	for(var i=0; i< mini_card_list.length; ++i) {
		var bottom_text = mini_card_list[i].getElementsByClassName('pile-bottom-text');
		var card_name = mini_card_list[i].getElementsByClassName('full-card-name');
		if (bottom_text.length > 0) {
			var img_name = mini_card_list[i].getElementsByClassName('mini-card-art')[0].style.backgroundImage.split('/').slice(-1)[0].slice(0,-2);
			var changed_name = dictName[img_name];
			if (typeof changed_name != 'undefined') {
				card_name[0].innerText = changed_name;
				//console.log(img_name + " >> " + changed_name);
			}
		}
	}
}

function translate_cards(full_card) {
	for(var i=0; i< full_card.length; ++i) {
		var card_name = full_card[i].getElementsByClassName('full-card-name');
		var original_name = card_name[0].innerText.trim();
		var changed_name = dictName[original_name];
		if ( changed_name != null && english.test(original_name) ) {
			card_name[0].innerText = changed_name;
			var card_text = full_card[i].getElementsByClassName('card-text');
			var new_text = dictText[original_name];
			if (card_text.length > 0 && new_text != null)
				card_text[0].innerHTML = new_text;
		}
		var bottom_name = full_card[i].getElementsByClassName('types-text-full');
		var changed_bottom = dictBottom[bottom_name[0].innerText.trim()];
		if ( changed_bottom != null)
			bottom_name[0].innerText = changed_bottom;
	}
}

function full_card_translate() {
	var card_study_container = document.getElementsByClassName('card-study-container')[0]
	var full_card = card_study_container.getElementsByClassName('full-card')
	translate_cards(full_card);
	//reveal-container
	var reveal_container = document.getElementsByClassName('reveal-container')
	for (var i=0; i<reveal_container.length; ++i) {
		var full_card = reveal_container[i].getElementsByClassName('full-card')
		translate_cards(full_card);
	}
}

chrome.storage.local.get(["timer_state", "timerId1", "timerId2"], function(items) {
	if (typeof items.timer_state == 'undefined') {
		var temp_items = {"timer_state": false, "timerId1": 0, "timerId2": 0};
		chrome.storage.local.set(temp_items, function() {});
		items = temp_items;
	}
	
	if (items.timer_state == true) {
		if (items.timerId1 != 0)
			clearInterval(items.timerId1);
		if (items.timerId2 != 0)
			clearInterval(items.timerId2);
		//console.log("clearInterval: " + items.timerId);
	}
	var id1 = setInterval(check_play_cards, 300);
	var id2 = 0;
	if (special_mini)
		id2 = setInterval(check_mini_cards, 1000);
	//console.log("setInterval: " + id1 + ", " + id2);
	var temp_items = {"timer_state": true, "timerId1": id1, "timerId2": id2};
	chrome.storage.local.set(temp_items, function() {});
 });
