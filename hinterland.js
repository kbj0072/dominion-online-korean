// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, {
		code: 
		`
		// 오지의 사람들
		dictName['Border Village'] = '국경의 마을';
		dictName['Cache'] = '매장금';
		dictName['Cartographer'] = '지도 제작자';
		dictName['Crossroads'] = '교차로';
		dictName['Develop'] = '개발';
		dictName['Duchess'] = '공작부인';
		dictName['Embassy'] = '대사관';
		dictName['Farmland'] = '농지';
		dictName["Fool's Gold"] = '황철광';
		dictName['Haggler'] = '흥정가';
		dictName['Highway'] = '고속도로';
		dictName['Ill-Gotten Gains'] = '부정이득';
		dictName['Inn'] = '여관';
		dictName['Jack of all Trades'] = '해결사 잭';
		dictName['Mandarin'] = '관리';
		dictName['Noble Brigand'] = '의적';
		dictName['Nomad Camp'] = '유목민의 야영지';
		dictName['Oasis'] = '오아시스';
		dictName['Oracle'] = '신탁';
		dictName['Margrave'] = '국경관리자';
		dictName['Scheme'] = '획책';
		dictName['Silk Road'] = '실크로드';
		dictName['Spice Merchant'] = '향신료상';
		dictName['Stables'] = '마구간';
		dictName['Trader'] = '교역인';
		dictName['Tunnel'] = '터널';


		dictText['Border Village'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+액션 2번</div></div><br></div></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:10px;"></div><div style="position:relative; top:5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">이 카드를 얻을 때, 이 카드보다</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">코스트가 낮은 카드 1장을 얻는다.</div></div><br></div></div>';
		dictText['Cache'] = '<div class="card-text-coin-icon" style="transform:scale(0.55); top:-40px; display: inline;left:105px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">3</div></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:45px;"></div><div style="position:relative; top:4px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">이 카드를 얻을 때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">동화 2장을 얻습니다.</div></div><br></div></div>';
		dictText['Cartographer'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+액션 1번</div></div><br></div></div></div><div style="position:relative; top:2px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">덱 맨위의 카드 4장을 확인한다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">원하는 만큼 버리고 나머지를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">원하는 순서대로 덱 맨위로</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">되돌린다.</div></div><br></div></div>';
		dictText['Crossroads'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">손패를 공개합니다. 공개한</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">승점 카드 1장 당<div style="display: inline; font-weight: bold;"> +카드 1장</div></div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">이 카드가 이번 턴에 첫번째로</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">사용한 교차로 카드라면</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;"><div style="display: inline; font-weight: bold;"> +액션 3번</div>.</div></div><br></div></div>';

		// dictText['Develop'] = '';
		// dictText['Duchess'] = '';
		// dictText['Embassy'] = '';
		// dictText['Farmland'] = '';

		// dictText["Fool's Gold"] = '';
		// dictText['Haggler'] = '';
		// dictText['Highway'] = '';
		// dictText['Ill-Gotten Gains'] = '';

		// dictText['Inn'] = '';
		// dictText['Jack of all Trades'] = '';
		// dictText['Mandarin'] = '';
		// dictText['Noble Brigand'] = '';

		// dictText['Nomad Camp'] = '';
		// dictText['Oasis'] = '';
		// dictText['Oracle'] = '';
		// dictText['Margrave'] = '';

		// dictText['Scheme'] = '';
		// dictText['Silk Road'] = '';
		// dictText['Spice Merchant'] = '';
		// dictText['Stables'] = '';

		// dictText['Trader'] = '';
		// dictText['Tunnel'] = '';

		console.log("Load Hinterland info...");
		`
	});
});