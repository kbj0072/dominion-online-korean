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
		// 시사이드		
		dictName['Ambassador'] = '대사';
		dictText['Ambassador'] = '<div style="position:relative; top:5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">손에서 카드 한 장을 공개한다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">공개한 카드를 최대 2장까지 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;">손에서 공급처로 되돌려 놓을 수 있다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">다른 플레이어들은 공개된 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">카드를 한 장씩 얻는다.</div></div><br></div></div>';

		dictName['Bazaar'] = '상점가';
		dictText['Bazaar'] = '<div style="position:relative; top:-2px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 2번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+    </div></div><br></div></div></div><div class="card-text-coin-icon" style="transform:scale(0.22); top:56px; display: inline;left:138px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';

 		dictName['Caravan'] = '대상';
 		dictText['Caravan'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div><div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">다음 턴을 시작할 때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;"><div style="display: inline; font-weight: bold;">+ 카드 1장</div>.</div></div><br></div></div>';

		dictName['Cutpurse'] = '소매치기';
		dictText['Cutpurse'] = '<div style="position:relative; top:-6px;"><div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:26px;">+     </div></div><br></div></div><div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">다른 플레이어들은 손패에서</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">동화를 한 장 버린다. </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">손패에 동화가 없다면</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">손패를 공개한다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.26); top:-6px; display: inline;left:135px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';

		dictName['Embargo'] = '입항 금지';
		dictText['Embargo'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:26px;">+     </div></div><br></div></div><div style="position:relative; top:5px;"><div style="line-height:20px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">이 카드를 폐기한다. 공급처의 카드</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">더미 가운데 하나에 출항금지 토큰을 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">놓는다. 누구든 카드를 살 때 그 카드</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">더미에 놓인 출항금지 토큰당 저주</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">카드 한 장을 받는다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.26); top:0px; display: inline;left:135px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';

		dictName['Explorer'] = '탐험가';
		dictText['Explorer'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">손패에서 속주 카드를 공개하고 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">금화 한 장을 손으로 가져온다. </div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">아니면 은화 한 장을 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">핸드로 가져온다.</div></div><br><div style="display:inline;"></div><br></div></div>';

		dictName['Fishing Village'] = '어촌';
		dictText['Fishing Village'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 2번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+    </div></div><br></div></div></div><div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">다음 턴을 시작할 때 :</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;"><div style="display: inline; font-weight: bold;">+ 액션 1번,</div><div style="display: inline; font-weight: bold;">   +  </div>.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.22); top:30px; display: inline;left:138px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:94px; display: inline;left:200px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';

		dictName['Ghost Ship'] = '유령선';
		dictText['Ghost Ship'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 2장</div></div><br></div></div></div><div style="position:relative; top:5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:21.7px;">다른 플레이어들은 손패가 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.7px;">3장 이하가 될 때까지</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.7px;">손패의 카드를 덱 위에</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.7px;">올려놓는다.</div></div><br></div></div>';
		
		dictName['Haven'] = '정박소';
		dictText['Haven'] = '<div style="position:relative; top:3px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div><div style="position:relative; top:5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">손에서 카드 한 장을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;"> 따로 빼놓는다. </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">따로 빼놓은 카드는 다음 턴을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">시작할 때 손으로 가져온다.</div></div><br></div></div>';

		dictName['Island'] = '섬';
		dictText['Island'] = '<div style="position:relative; top:-20px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">이 카드와 손패의 카드 한 장을 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">섬 매트에 빼놓는다.</div></div><br></div></div><div style="position:relative; top:0px;"><div style="display:inline;"><div style="position: relative; left:0px;"><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.55); top:5px;left:130px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">2</div></div><div class="card-text-vp-icon"></div></div></div></div><br></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-37px;"></div>';

 		dictName['Lighthouse'] = '등대';
 		dictText['Lighthouse'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div><div style="position:relative; top:0px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">지금과 다음 턴에 +      </div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:28px; display: inline;left:218px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div style="position:relative; top:19px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:15px;">이 카드가 플레이 공간에 있는 동안,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">다른 플레이어가 공격 카드를 사용했을 때</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">당신은 공격 카드의 효과를 받지 않는다.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:2px;margin-top:-67px;"></div';

		dictName['Lookout'] = '망루';
		dictText['Lookout'] = '<div style="position:relative; top:5px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div><div style="position:relative; top:7px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">덱 위의 카드 3장을 본다. </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">한 장은 폐기하고</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">한 장은 버린다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">나머지 한 장은 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">덱 위에 올려놓는다.</div></div><br></div></div>';

		dictName['Merchant Ship'] = '상선';
		dictText['Merchant Ship'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:26px;">+     </div></div><br></div></div><div style="position:relative; top:20px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">다음 턴을 시작할 때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;"><div style="display: inline; font-weight: bold;">+</div></div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.24); top:0px; display: inline;left:135px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div><div class="card-text-coin-icon" style="transform:scale(0.21); top:75px; display: inline;left:150px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';

		dictName['Native Village'] = '원주민 마을';
		dictText['Native Village'] = '<div style="position:relative; top:2px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 2번</div></div><br></div></div></div><div style="position:relative; top:0px;"><div style="line-height:20px;"><div style="display:inline;"><div style="display:inline; font-size:15px;">하나를 선택: 덱 가장 위의 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">원주민 마을 매트에 뒷면으로 올려놓는다;</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">원주민 마을 매트에 있는</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">모든 카드를 패로 가져온다;</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">(본인 매트 위 카드 확인 가능,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">점수 계산시 카드를 덱으로)</div></div><br></div></div>';

		dictName['Navigator'] = '항해사';
		dictText['Navigator'] = '<div style="position:relative; top:-6px;"><div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:26px;">+     </div></div><br></div></div><div style="position:relative; top:7px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">덱 위에서부터 5장의 카드를 본다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">본 카드를 모두 버리거나 본 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">모두 덱 위에 원하는</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">순서로 올려놓는다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.26); top:-6px; display: inline;left:135px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';

		dictName['Outpost'] = '전진기지';
		dictText['Outpost'] = '<div style="position:relative; top:7px;"><div style="line-height:21px;"><div style="display:inline;"><div style="display:inline; font-size:21.5px;">정리 단계 때 다섯 장이 아닌</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">세 장만 뽑고 추가 턴을 진행한다. </div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">이 카드를 여러번 사용해도</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">추가 턴은 최대 1번밖에</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">진행할 수 없다.</div></div><br><br></div></div>';

		dictName['Pearl Diver'] = '진주조개잡이';
		dictText['Pearl Diver'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div><div style="position:relative; top:7px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:21px;">덱 맨 밑의 카드 한 장을 본다. </div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">그 카드를 덱 맨 위로</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">올려놓을 수 있다.</div></div><br></div></div>';

		dictName['Pirate Ship'] = '해적선';
		dictText['Pirate Ship'] = '<div style="position:relative; top:2px;"><div style="line-height:16px;"><div style="display:inline;"><div style="display:inline; font-size:15px;">하나 선택 : *다른 플레이어들은</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">각각 덱에서 두 장의 카드를 공개하여,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">공개된 재화 카드 중 당신이</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">선택한 한 장을 폐기하고, 나머지</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">카드는 버린다. 한 명이라도 재화</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">카드를 제거하였다면 자신의 해적선</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">매트에 동전 토큰 하나를 올려놓는다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">*자신의 매트 위의 동전 토큰 하나당 +      </div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.17); top:150px; display: inline;left:260px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';

		dictName['Salvager'] = '인양작업';
		dictText['Salvager'] = '<div style="position:relative; top:-15px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 구입 1번</div></div><br></div></div></div><div style="position:relative; top:0px;"><div style="line-height:25px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">패의 카드 1장을 폐기한다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드의 가격      당</div><div style="display: inline; font-weight: bold;">  +</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:55px; display: inline;left:159px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:55px; display: inline;left:250px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';

		dictName['Sea Hag'] = '바다 마녀';
		dictText['Sea Hag'] = '<div style="position:relative; top:0px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:15px;">다른 플레이어들은 덱 맨 위의 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">카드 한 장을 버리고, 저주 카드</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">한 장을 받아 각자의 덱 위에 올려놓는다.</div></div><br></div></div>';

		dictName['Smugglers'] = '밀수업자';
		dictText['Smugglers'] = '<div style="position:relative; top:0px;"><div style="line-height:25px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">당신의 오른쪽 사람이 마지막 턴에 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">얻은      이하의 카드 하나를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">골라서 얻는다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:29px; display: inline;left:62px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">6</div></div></div>';

		dictName['Tactician'] = '책략가';
		dictText['Tactician'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:16px;">손패를 전부 버린다.이 카드를 사용해</div></div><br><div style="display:inline;"><div style="display:inline; font-size:16px;">한 장 이상의 카드를 버렸다면</div></div><br><div style="display:inline;"><div style="display:inline; font-size:16px;">다음 턴을 시작할 때</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;"><div style="display: inline; font-weight: bold;">+ 카드 5장</div>, <div style="display: inline; font-weight: bold;">+ 액션 1번</div>,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;"><div style="display: inline; font-weight: bold;">+ 구입 1번</div>.</div></div><br></div></div>';

		dictName['Treasure Map'] = '보물지도';
		dictText['Treasure Map'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:19px;">이 카드를 폐기한다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">손에 있는 보물지도 카드 한장을 폐기한다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">만약 이렇게 두 장을 폐기했다면 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">금화 4장을 덱 위에 올려놓는다.</div></div><br></div></div>';

		dictName['Treasury'] = '보물창고';
		dictText['Treasury'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:25px;"><div style="display:inline;"><div style="display:inline; font-size:26px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:26px;">+ 액션 1번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:26px;">+    </div></div><br></div></div></div><div style="position:relative; top:8px;"><div style="line-height:18px;"><div style="display:inline;"><div style="display:inline; font-size:19.2px;">이번 턴에 승점 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19.2px;">사지 않았다면,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19.2px;">정리 단계 때 이 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19.2px;">덱 위에 올려놓을 수 있다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:53px; display: inline;left:140px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-82px;"></div>';

		dictName['Warehouse'] = '창고';
		dictText['Warehouse'] = '<div style="position:relative; top:-10px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 3장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div><div style="position:relative; top:0px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">손에서 카드 3장을 버린다.</div></div><br></div></div>';

		dictName['Wharf'] = '부두';
		dictText['Wharf'] = '<div style="position:relative; top:7px;"><div style="line-height:23px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">지금과 다음 턴에</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;"><div style="display: inline; font-weight: bold;">+ 카드 2장, </div><div style="display: inline; font-weight: bold;">+ 구입 1번</div>.</div></div><br></div></div>';

		dictBottom['Action - Duration'] = '액션 - 지속';
		
		console.log("Load Seaside info...");
		`
	});
});