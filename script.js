// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


(function() {
	var english = /^[A-Za-z0-9 ]*$/;
	var dictName = {};
	var dictText = {};
	var dictBottom = {};
	dictName['Cellar'] = '저장고';
	dictText['Cellar'] = '<div style="position:relative; top:-7px;"><div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div><div style="position:relative; top:3px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">카드를 원하는만큼 버림</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">+ 버린 카드 1장당 카드 1장</div></div><br></div></div>';
	dictName['Gardens'] = '정원';
	dictText['Gardens'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">덱의 카드 10장당 승점      </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">(소수점 이하는 버림)</div></div><br></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.21); top:11px;left:250px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">1</div></div><div class="card-text-vp-icon"></div></div>';
	dictName['Moneylender'] = '대금업자';
	dictText['Moneylender'] = '<div style="position:relative; top:8px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">손의 동 카드 1장을 폐기</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">그렇게 할 경우 <div style="display: inline; font-weight: bold;">+</div>      .</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:34px; display: inline;left:208px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">3</div></div></div>';
	dictName['Bandit'] = '노상강도';
	dictText['Bandit'] = '<div style="position:relative; top:18px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">금 1장을 얻습니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">다른 플레이어는 각자의 덱</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">맨 위 2장을 공개해서 나온,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">동이 아닌 재물카드를 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">폐기하고 나머지는 버림</div></div><br></div></div>';
	dictName['Council Room'] = '회의실';
	dictText['Council Room'] = '<div style="position:relative; top:-30px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 4장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 구입 1번</div></div><br></div></div></div><div style="position:relative; top:-22px;"><div style="display:inline;"><div style="display:inline; font-size:21.3px;">다른 플레이어들은 각자</div></div><br><div style="display:inline; font-size:21.3px;">자기 덱에서 카드 1장을</div><br><div style="display:inline; font-size:21.3px;">손으로 가져감</div><br><br></div>';
	dictName['Festival'] = '축제';
	dictText['Festival'] = '<div style="position:relative; top:-5px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 2번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 구입 1번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+    </div></div><br></div></div></div><div class="card-text-coin-icon" style="transform:scale(0.22); top:53px; display: inline;left:139px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';
	dictName['Moat'] = '해자';
	dictText['Moat'] = '<div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 2장</div></div><br></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:10px;"></div><div style="position:relative; top:9px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">다른 플레이어가 공격 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">사용할 때 손에서 이 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">를 공개할 수 있음. 공개하면</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">해당 공격 효과를 적용 안함</div></div><br></div></div>';
	dictName['Merchant'] = '무역상';
	dictText['Merchant'] = '<div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div><div style="position:relative; top:10px;"><div style="line-height:21px;"><div style="display:inline;"><div style="display:inline; font-size:21px;">이번 차례에 처음으로 은</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">카드를 사용했다면 <div style="display: inline; font-weight: bold;">+</div>     .</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.19); top:93px; display: inline;left:222px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';
	dictName['Vassal'] = '봉신';
	dictText['Vassal'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+      </div></div><br></div></div></div><div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">당신의 덱 맨 위 카드를 버림</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">그것이 액션 카드라면, 액션</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">횟수 소모 없이 사용 가능</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.24); top:0px; display: inline;left:130px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';
	dictName['Workshop'] = '작업장';
	dictText['Workshop'] = '<div style="position:relative; top:0px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">비용이     원 이하인</div><br><div style="display:inline; font-size:22px;">카드 1장을 얻음.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:0px; display: inline;left:116px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">4</div></div></div>';
	dictName['Laboratory'] = '실험실';
	dictText['Laboratory'] = '<div style="position:relative; top:-5px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 2장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div>';
	dictName['Library'] = '도서관';
	dictText['Library'] = '<div style="position:relative; top:12px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">손에 있는 카드가 7장이</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">될 때까지 덱에서 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">가져옴. 이 과정에서 액션</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드는 따로 두고 가져오기</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">를 마친 후 모두 버림.</div></div><br></div></div>';
	dictName['Market'] = '시장';
	dictText['Market'] = '<div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 구입 1번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+    </div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.22); top:87px; display: inline;left:139px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';
	dictName['Mine'] = '광산';
	dictText['Mine'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">손에 있는 재물 1장을 폐기할</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">수 있음. 폐기한 카드보다</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">     원 높은 비용 한도 내에서</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">원하는 재물 카드 1장을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">얻어 손에 듭니다.</div></div></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:56px; display: inline;left:10px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">3</div></div></div>';
	dictName['Artisan'] = '장인';
	dictText['Artisan'] = '<div style="position:relative; top:7px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">비용이      이하인 카드 한 장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">을 획득하여 손에 듭니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">손에서 카드 한장을 골라</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">덱 위로 올립니다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:2px; display: inline;left:76px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">5</div></div></div>';
	dictName['Chapel'] = '예배당';
	dictText['Chapel'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">손에 있는 카드를 4장까지</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">폐기합니다.</div></div><br></div></div>';
	dictName['Harbinger'] = '선구자';
	dictText['Harbinger'] = '<div style="position:relative; top:3px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div><div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:21.5px;">당신의 버린 카드더미를 본다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">그 곳에 있는 카드 1장을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">당신의 덱 위에 둘 수 있다.</div></div><br></div></div>';
	dictName['Bureaucrat'] = '관료';
	dictText['Bureaucrat'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">은 카드 1장을 얻어 덱 위에</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">놓습니다. 다른 플레이어들은</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">손에 있는 승점 카드 1장을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">공개하고 공개한 승점카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">덱 맨 위에 놓습니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">(승점카드가 없으면 다 공개)</div></div><br></div></div>';
	dictName['Militia'] = '민병대';
	dictText['Militia'] = '<div style="position:relative; top:-15px;"><div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+      </div></div><br></div></div><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">다른 플레이어들은 각자</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">손에 든 카드를 3장까지만</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">남기고 모두 버립니다.</div></div><br></div><div class="card-text-coin-icon" style="transform:scale(0.24); top:-15px; display: inline;left:130px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';
	dictName['Poacher'] = '밀렵꾼';
	
	dictText['Poacher'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+    </div></div><br></div></div></div><div style="position:relative; top:5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">비어있는 공급처 더미당</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드 1장을 버립니다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.22); top:58px; display: inline;left:138px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';
	dictName['Throne Room'] = '알현실';
	dictText['Throne Room'] = '<div style="position:relative; top:7px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">손에 있는 액션 카드 1장을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">골라 2번 사용할 수 있음.</div></div><br></div></div>';
	dictName['Sentry'] = '보초병';
	dictText['Sentry'] = '<div style="position:relative; top:3px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div><div style="position:relative; top:5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:21.5px;">당신의 덱 위의 카드 2장을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">보고 원하는만큼 폐기하거나</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">버린다. 나머지는 원하는</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">순서대로 덱 위에 둔다.</div></div><br></div></div>';
	dictName['Witch'] = '마녀';
	dictText['Witch'] = '<div style="position:relative; top:-5px;"><div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 2장</div></div><br></div></div><div style="position:relative; top:0px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:21px;">다른 플레이어들은 저주 카드</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">1장을 얻습니다.</div></div><br></div></div>';
	dictName['Village'] = '마을';
	dictText['Village'] = '<div style="position:relative; top:-5px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 2번</div></div><br></div></div></div>';
	dictName['Remodel'] = '개조';
	dictText['Remodel'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">손에 있는 카드 1장을 폐기</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">합니다. 폐기한 카드보다</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">    원 높은 한도까지 원하는</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드 1장을 얻습니다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:56px; display: inline;left:10px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';
	dictName['Smithy'] = '대장장이';
	dictText['Smithy'] = '<div style="position:relative; top:-7px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 3장</div></div><br></div></div></div>';
	dictName['Copper'] = '동';
	dictText['Copper'] = "";
	dictName['Silver'] = '은';
	dictText['Silver'] = "";
	dictName['Gold'] = '금';
	dictText['Gold'] = "";


	//장막 2nd
	dictName['Courtyard'] = '안마당'
	dictText['Courtyard'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+카드 3장</div></div><br></div></div></div><div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">손에서 카드 한 장을 골라</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">당신의 덱 위에 올려놓는다.</div></div><br></div></div>'
	dictName['Conspirator'] = '공모자'
	dictText['Conspirator'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+      </div></div><br></div></div></div><div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:17px;">만약 당신이 이번 턴에 지금까지</div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;">3장 이상의 액션 카드를 사용했다면,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;"><div style="display: inline; font-weight: bold;">+카드 1장</div> and <div style="display: inline; font-weight: bold;">+액션 1번</div>.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.24); top:-1px; display: inline;left:130px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>'
	dictName['Courtier'] = '신하'
	dictText['Courtier'] = '<div style="position:relative; top:15px;"><div style="line-height:21px;"><div style="display:inline;"><div style="display:inline; font-size:17px;">손에서 카드 1장을 공개한다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;">그 카드가 가진 종류만큼 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;">아래 4가지 중 하나씩 고른다:</div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;"><div style="display: inline; font-weight: bold;">+액션 1번</div>;<div style="display: inline; font-weight: bold;">+구매 1번</div>;</div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;"><div style="display: inline; font-weight: bold;">+</div>     ; 금 1장을 얻는다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;">모든 선택은 서로달라야 한다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.15); top:121px; display: inline;left:68px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">3</div></div></div>'


	dictBottom['Victory'] = '승점';
	dictBottom['Action'] = '액션';
	dictBottom['Action - Reaction'] = '액션 - 반응';
	dictBottom['Action - Attack'] = '액션 - 공격';
	dictBottom['Treasure'] = '재물'

	var kingdom = document.getElementsByClassName('kingdom-viewer-card-container')

	if (kingdom.length == 0)
		alert("Error: No card data...");
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

	
	

	function full_card_translate() {
		var full_card = document.getElementsByClassName('full-card')
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
})();