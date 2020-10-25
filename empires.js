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
		// 제국 카드들
		dictName['Enchantress'] = '여마법사';
		dictText['Enchantress'] = '<div style="position:relative; top:10px;"><div style="line-height:20px;"><div style="display:inline;"><div style="display:inline; font-size:20.5px;">당신의 다음 턴까지, 다른 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.5px;">플레이어들이 각자의 턴에</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.5px;">플레이한 첫번째 액션 카드는</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.5px;"><div style="display: inline; font-weight: bold;">+ 카드 1장</div> 과 <div style="display: inline; font-weight: bold;">+ 액션 1번</div> 이 됨.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.5px;">(본래의 효과를 대체)</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.5px;"></div></div><br></div></div><div style="position:relative; top:-11px;"><div style="line-height:20px;"><div style="display:inline;"><div style="display:inline; font-size:20.5px;">다음 당신의 턴을 시작할 때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.5px;"><div style="display: inline; font-weight: bold;">+ 카드 2장</div></div></div><br></div></div>';
		dictName['Archive'] = '기록 보관소';
		dictText['Archive'] = '<div style="position:relative; top:8px;"><div style="display:inline; font-size:28px;"><div style="font-weight: bold;"><div style="display:inline;">+ 액션 1번</div><br></div></div></div><div style="position:relative; top:10px;"><div style="line-height:21px;"><div style="display:inline;"><div style="display:inline; font-size:21px;">당신의 덱 맨 위 카드 3장을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">뒷면으로 따로 둠.(카드 확인</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">가능) 이 턴과 다음 두 턴을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">시작할 때, 한장씩 손에</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">듭니다.</div></div><br></div></div>';
		dictName['Capital'] = '자금';
		dictText['Capital'] = '<div style="position:relative; top:43px;"><div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 구입 1번</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:47px;"></div><div style="position:relative; top:0px;"><div style="line-height:19.5px;"><div style="display:inline;"><div style="display:inline; font-size:19.5px;">이 카드를 사용하고 버릴 때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19.5px;">빚 토큰      <div class="card-text-debt-icon" style="transform:scale(0.19); top:20px; display: inline;left:100px;"><div class="card-text-debt-text-container" style="display:inline;"><div class="card-text-debt-text" style="display:inline; top:48px;">6</div></div></div>개를 얻습니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19.5px;">그 뒤      을 변제해야 합니다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.45); top:-18px; display: inline;left:110px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">6</div></div></div><div class="card-text-debt-icon" style="transform:scale(0.19); top:124px; display: inline;left:68px;"><div class="card-text-debt-text-container" style="display:inline;"><div class="card-text-debt-text" style="display:inline; top:48px;"></div></div></div>';
		dictName['Charm'] = '장식품';
		dictText['Charm'] = '<div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">카드 사용 시, 둘 중 하나</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">선택: <div style="display: inline; font-weight: bold;">+ 구입 1장</div>과 <div style="display: inline; font-weight: bold;">+</div>     ; 혹은 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">이번 턴에 카드를 구입할 때</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">그 카드와 같은 가격의 다른</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드 한장을 얻을 수 있음.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">(이름이 다른 카드)</div></div><br></div>';
		dictName['Crown'] = '왕관';
		dictText['Crown'] = '<div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">액션 단계일 경우, 액션</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드를 패에서 2번 사용</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">할 수 있습니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">구입 단계일 경우, 재물</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드를 2번 사용할 수</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">있습니다.</div></div><br></div>';
		dictName['City Quarter'] = '도시 구역';
		dictText['City Quarter'] = '<div style="display:inline; font-size:28px;"><div style="font-weight: bold;"><div style="display:inline;">+ 액션 2번</div><br></div></div><br><div style="position:relative; top:-15px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">패를 공개합니다. 공개된<br><div style="display:inline;"><div style="display:inline; font-size:22px;">액션 카드 한 장당 </div><br><div style="display: inline; font-weight: bold;">+ 카드 1장</div></div></div></div><br></div></div>';
		dictName['Encampment'] = '야영지';
		dictText['Encampment'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 2장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 2번</div></div><br></div></div></div><div style="position:relative; top:0px;"><div style="line-height:21px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">패에서 금이나 약탈품을 공개</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">합니다. 그렇게 하지 않을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">경우, 이 카드를 따로 두고</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">정리 시 공급처로 되돌립니다.</div></div><br></div></div>';
		dictName['Plunder'] = '약탈품';
		dictText['Plunder'] = '<div style="display:inline;"><div style="position: relative; left:-35px;"><div class="card-text-coin-icon" style="transform:scale(0.5); top:0px; display: inline;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div></div></div><br><div style="display:inline;"><div style="position: relative; left:-2px;"><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.22); top:45px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">+1</div></div><div class="card-text-vp-icon"></div></div></div></div><br>';
		dictName['Castles'] = '성';
		dictText['Castles'] = '<div style="line-height:21px;"><div style="display:inline;"><div style="display:inline; font-size:21px;">성 더미를 비싼 카드가</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">바닥에 가도록 가격 순 정렬.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">2인 게임에서는, 각 성 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">1장씩만 사용한다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">성 더미의 맨 위 카드만</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">공개되어 구매하거나</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">얻을 수 있다.</div></div><br></div>';
		dictName['Humble Castle'] = '초라한 성';
		dictText['Humble Castle'] = '<div class="horizontal-line" style="width:200px; height:3px;margin-top:47px;"></div><div style="position:relative; top:12px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">당신이 가진 성 한장 당</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">승점       점으로 취급.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.53); top:-35px; display: inline;left:110px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.2); top:86px;left:100px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">1</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Catapult'] = '투석기';
		dictText['Catapult'] = '<div style="position: relative; left:-15px;top:-2px;"><div style="font-weight: bold;"><div style="display:inline;">+</div><br></div></div><div style="position:relative; top:0px;"><div style="line-height:20.5px;"><div style="display:inline;"><div style="display:inline; font-size:20.3px;">패에서 카드 1장을 폐기한다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.3px;">그 카드가     원 이상이라면,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.3px;">다른 플레이어들은 저주를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.3px;">얻고, 재물 카드라면 다른</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.3px;">플레이어는 패를 3장이</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.3px;">되도록 버린다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.25); top:-3px; display: inline;left:137px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="card-text-coin-icon" style="transform:scale(0.19); top:52px; display: inline;left:108px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">3</div></div></div>';
		dictName['Rocks'] = '바위';
		dictText['Rocks'] = '<div class="horizontal-line" style="width:200px; height:3px;margin-top:47px;"></div><div style="position:relative; top:2px;"><div style="line-height:18px;"><div style="display:inline;"><div style="display:inline; font-size:19px;">이 카드를 얻거나 폐기할 경우,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19px;">은 카드를 얻으며, 구입 단계일</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19px;">경우는 덱 맨 위에, 이외의 경우</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19px;">은 카드를 패에 넣습니다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.53); top:-25px; display: inline;left:110px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';
		dictName['Chariot Race'] = '전차 경주';
		dictText['Chariot Race'] = '<div style="display:inline; font-size:28px;"><div style="font-weight: bold;"><div style="display:inline;">+ 액션 1번</div><br></div></div><div style="position:relative; top:8px;"><div style="line-height:20px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">자신의 덱 맨 위의 카드를 공개</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">후 패에 넣습니다. 왼쪽 플레이</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">어의 덱 맨 위 카드를 공개하여</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">당신의 카드가 더 비쌀 경우, </div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;"><div style="display: inline; font-weight: bold;">+</div>      과          .</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.19); top:128px; display: inline;left:97px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.19); top:128px;left:175px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">+1</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Crumbling Castle'] = '붕괴된 성';
		dictText['Crumbling Castle'] = '<div class="horizontal-line" style="width:200px; height:3px;margin-top:37px;"></div><div style="position:relative; top:9px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">이 카드를 얻거나 폐기할</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">경우 승점         과 은 카드</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">1장을 얻습니다.</div></div><br></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.53); top:-40px;left:130px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">1</div></div><div class="card-text-vp-icon"></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.19); top:73px;left:142px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">+1</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Small Castle'] = '작은 성';
		dictText['Small Castle'] = '<div style="position:relative; top:-32px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">이 카드나 다른 성 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">패에서 폐기할 경우, 성</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드를 한 장 얻습니다.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-25px;"></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.53); top:55px;left:130px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">2</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Haunted Castle'] = '귀신 들린 성';
		dictText['Haunted Castle'] = '<div class="horizontal-line" style="width:200px; height:3px;margin-top:43px;"></div><div style="position:relative; top:4px;"><div style="line-height:18px;"><div style="display:inline;"><div style="display:inline; font-size:18.1px;">당신의 턴에 이 카드를 얻으면,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18.1px;">금 카드를 얻고, 패가 5장 이상인</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18.1px;">다른 플레이어들은 패에서 2장을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18.1px;">덱으로 되돌립니다.</div></div><br></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.53); top:-25px;left:130px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">2</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Opulent Castle'] = '호화로운 성';
		dictText['Opulent Castle'] = '<div style="position:relative; top:-38px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">승점 카드를 원하는만큼</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">패에서 버립니다. 버린</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드 한 장당 <div style="display: inline; font-weight: bold;">+    </div></div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-25px;"></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.53); top:55px;left:130px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">3</div></div><div class="card-text-vp-icon"></div></div><div class="card-text-coin-icon" style="transform:scale(0.22); top:10px; display: inline;left:203px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';
		dictName['Sprawling Castle'] = '뻗어나가는 성';
		dictText['Sprawling Castle'] = '<div class="horizontal-line" style="width:200px; height:3px;margin-top:47px;"></div><div style="position:relative; top:12px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">이 카드를 얻을 시, 공작령 한</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">장이나 사유지 세 장을 얻음.</div></div><br></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.53); top:-35px;left:130px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">4</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Grand Castle'] = '거대한 성';
		dictText['Grand Castle'] = '<div class="horizontal-line" style="width:200px; height:3px;margin-top:43px;"></div><div style="position:relative; top:4px;"><div style="line-height:21px;"><div style="display:inline;"><div style="display:inline; font-size:21px;">이 카드를 얻을 때 패를 공개,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">패나 플레이 공간의 승점 카드</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">한 장당 승점         .</div></div><br></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.53); top:-35px;left:130px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">5</div></div><div class="card-text-vp-icon"></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.18); top:98px;left:201px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">+1</div></div><div class="card-text-vp-icon"></div></div>';
		dictName["King's Castle"] = '왕의 성';
		dictText["King's Castle"] = '<div style="position:relative; top:12px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">당신이 가지고 있는 성 카드</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">한 장당 승점         .</div></div><br></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.19); top:37px;left:203px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">+2</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Gladiator'] = '검투사';
		dictText['Gladiator'] = '<div style="position: relative; left:-15px;top:6px;"><div style="font-weight: bold;"><div style="display:inline;">+</div><br></div></div><div style="position:relative; top:10px;"><div style="line-height:20px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">자신의 패를 한 장 공개합니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">왼쪽 플레이어는 같은 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">공개할 수 있습니다. 공개 안 할</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">경우, 공급처에서 검투사 한 장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">폐기하고, <div style="display: inline; font-weight: bold;">+</div>      .</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.25); top:5px; display: inline;left:137px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div><div class="card-text-coin-icon" style="transform:scale(0.19); top:133px; display: inline;left:177px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';
		dictName['Sacrifice'] = '제물';
		dictText['Sacrifice'] = '<div style="position:relative; top:0px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:19.5px;">패의 카드 한 장을 폐기함.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19.5px;">그 카드가...</div></div><br></div></div><div style="position:relative; top:5px;"><div style="line-height:26px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">액션 카드면, <div style="display: inline; font-weight: bold;">+ 카드 2장, + 액션 2번</div></div></div><br><div style="display:inline;"><div style="display:inline; font-size:19.5px;">재물 카드면, <div style="display: inline; font-weight: bold;">+</div>     </div></div><br><div style="display:inline;"><div style="display:inline; font-size:19.5px;">승점 카드면, <div style="display: inline; font-weight: bold;">+   </div>     </div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.19); top:90px; display: inline;left:195px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.2); top:118px;left:200px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">2</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Forum'] = '토론장';
		dictText['Forum'] = '<div style="position:relative; top:-10px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 3장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div><div style="position:relative; top:-5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">카드 2장을 버립니다.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:4px;"></div><div style="position:relative; top:0px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">이 카드 구입 시, <div style="display: inline; font-weight: bold;">+1 Buy</div>.</div></div><br></div>';
		dictName['Groundskeeper'] = '정원 관리인';
		dictText['Groundskeeper'] = '<div style="position:relative; top:-12px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br></div></div></div><div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">이 카드 사용 시, 승점 카드</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">를 살 때마다,         .</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-50px;"></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.19); top:93px;left:206px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">+1</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Legionary'] = '군단 병사';
		dictText['Legionary'] = '<div style="position: relative; left:-15px;top:6px;"><div style="font-weight: bold;"><div style="display:inline;">+</div><br></div></div><div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">패에서 금을 공개할 수 있음.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">공개하면, 다른 플레이어들은</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">패가 2장이 되도록 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">버리고, 카드를 한 장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">뽑습니다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.25); top:5px; display: inline;left:137px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">3</div></div></div>';
		dictName['Engineer'] = '기술자';
		dictText['Engineer'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">     원 이하의 카드 한 장 획득.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">이 카드를 폐기할 수 있음.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">그러면,     원 이하의 카드</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">한 장을 얻습니다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.19); top:59px; display: inline;left:94px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">4</div></div></div><div class="card-text-coin-icon" style="transform:scale(0.19); top:9px; display: inline;left:5px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">4</div></div></div>';
		dictName['Overlord'] = '대군주';
		dictText['Overlord'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">이 카드를 공급처에서 명령</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드가 아닌      원 이하의</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드로 취급하여 사용함,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">공급처 카드는 그대로 둔다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.19); top:32px; display: inline;left:143px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">5</div></div></div>';
		dictName['Royal Blacksmith'] = '왕실 대장장이';
		dictText['Royal Blacksmith'] = '<div style="position:relative; top:-10px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 5장</div></div><br></div></div></div><div style="position:relative; top:0px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">패를 공개합니다; 동을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">전부 버립니다.</div></div><br></div></div>';
		dictName['Patrician'] = '도시 귀족';
		dictText['Patrician'] = '<div style="display:inline; font-size:28px;"><div style="font-weight: bold;"><div style="display:inline;">+ 카드 1장</div><br></div><div style="font-weight: bold;"><div style="display:inline;">+ 액션 1번</div><br></div></div><br><div style="position:relative; top:-20px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">덱 맨 위의 카드를 공개하고,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">그 카드가      원   </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">이상이면, 패에 넣습니다.</div></div><br></div></div>';
		dictName["Farmers' Market"] = '농부의 가게';
		dictText["Farmers' Market"] = '<div style="display:inline; font-size:28px;"><div style="font-weight: bold;"><div style="display:inline;">+ 구입 1번</div><br></div></div><div style="position:relative; top:0px;"><div style="line-height:21px;"><div style="display:inline;"><div style="display:inline; font-size:20.2px;">농부의 가게 카드 더미에       </div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.2px;">점 이상의 토큰이 놓여있다면,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.2px;">전부 얻고, 이 카드를 폐기함.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.2px;">그렇지 않으면,       점의 토큰</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20.2px;">을 올리고 승점       마다 <div style="display: inline; font-weight: bold;">+</div>     .</div></div><br></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.18); top:100px;left:160px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">1</div></div><div class="card-text-vp-icon"></div></div><div class="card-text-coin-icon" style="transform:scale(0.18); top:123px; display: inline;left:240px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.18); top:123px;left:160px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">1</div></div><div class="card-text-vp-icon"></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.18); top:29px;left:250px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">4</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Emporium'] = '해외 상관';
		dictText['Emporium'] = '<div style="position:relative; top:-4px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 액션 1번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;"><div style="position: relative; left:-14px;top:2px;">+</div></div></div><br></div></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-25px;"></div><div style="position:relative; top:0px;"><div style="line-height:21px;"><div style="display:inline;"><div style="display:inline; font-size:21px;">이 카드를 얻을 때, 플레이</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">공간에 액션 카드가 5장 이상</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21px;">있다면 승점       .</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.24); top:54px; display: inline;left:137px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.19); top:139px;left:205px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">+2</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Fortune'] = '행운';
		dictText['Fortune'] = '<div style="position:relative; top:-5px;"><div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+ 구입 1번</div></div><br></div></div><div style="position:relative; top:0px;"><div style="line-height:20px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">카드를 사용하면, 당신의 사용</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">하지 않은       의 가치가 2배.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:10px;"></div><div style="position:relative; top:3px;"><div style="line-height:20px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">카드를 얻을 때, 당신의 플레이</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">공간의 검투사 한 장당 금 획득.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:53px; display: inline;left:110px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;"></div></div></div>';
		
		// 이벤트 카드
		dictName['Advance'] = '임명';
		dictText['Advance'] = '<div style="display:inline;"><div style="display:inline; font-size:20px;">패에서 액션 카드 한 장을 폐기할 수 있습니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">그럴 경우,     원 이하의 액션 카드 한 장을 얻음<div class="card-text-coin-icon" style="transform:scale(0.2); top:33px; display: inline;left:101px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">6</div></div></div>.</div></div><br>';
		dictName['Annex'] = '무력 합병';
		dictText['Annex'] = '<div style="display:inline;"><div style="display:inline; font-size:20px;">버린 카드 더미에서 5장을 골라 제외한 나머지를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">덱에 넣어 섞습니다. 이후 공작령을 얻습니다.</div></div><br>';
		dictName['Banquet'] = '성찬';
		dictText['Banquet'] = '<div style="display:inline;"><div style="display:inline; font-size:20px;">동 카드를 2장 얻고, 승점 카드가 아닌</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">     원 이하의 카드를 얻습니다<div class="card-text-coin-icon" style="transform:scale(0.2); top:33px; display: inline;left:82px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">5</div></div></div>.</div></div><br>';
		dictName['Conquest'] = '정복';
		dictText['Conquest'] = '<div style="display:inline;"><div style="display:inline; font-size:20px;">동 카드를 2장 얻고, 승점 카드가 아닌</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">     원 이하의 카드를 얻습니다<div class="card-text-coin-icon" style="transform:scale(0.2); top:33px; display: inline;left:82px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">5</div></div></div>.</div></div><br>';
		dictName['Donate'] = '기부';
		dictText['Donate'] = '<div style="line-height:17px;"><div style="display:inline;"><div style="display:inline; font-size:17px;">이 턴을 끝내고, 덱과 버린 카드 더미를 패에 넣습니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;">원하는만큼 카드를 폐기하고, 패를 모두 섞은 뒤 덱에</div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;">넣고 카드를 5장 뽑습니다.</div></div><br></div>';
		dictName['Delve'] = '수색';
		dictText['Delve'] = '<div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:22px;">+ 구입 1장</div></div><br></div><div style="display:inline;"><div style="display:inline; font-size:22px;">은을 한 장 얻습니다.</div></div><br>';
		dictName['Ritual'] = '의식';
		dictText['Ritual'] = '<div style="display:inline;"><div style="display:inline; font-size:19px;">저주 카드를 얻습니다. 그럴 경우, 패의 카드 1장을</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19px;">폐기하고 가격      마다 <div class="card-text-coin-icon" style="transform:scale(0.2); top:33px; display: inline;left:207px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>승점        </div></div><br><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.19); top:33px;left:340px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">+1</div></div><div class="card-text-vp-icon"></div></div>';
		dictName['Dominate'] = '군림';
		dictText['Dominate'] = '<div style="display:inline;"><div style="display:inline; font-size:21px;">속주를 한 장 얻습니다. 그렇게 하면, 승점        </div></div><br><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.18); top:4px;left:415px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">+9</div></div><div class="card-text-vp-icon"></div></div>';
		
		
		
		// 남은 카드가 아직 많음...
		
		// 백업
		//dictName[''] = '';
		//dictText[''] = '';
		
		dictBottom['Action - Duration - Attack'] = '액션 - 지속 - 공격';
		dictBottom['Action - Treasure'] = '액션 - 재물';
		dictBottom['Victory - Castle'] = '승점 - 성';
		dictBottom['Treasure - Victory - Castle'] = '재물 - 승점';
		dictBottom['Action - Victory - Castle'] = '액션 - 승점 - 성';
		dictBottom['Action - Command']= '액션 - 명령';
		dictBottom['Action - Gathering']= '액션 - 수집';
		
		console.log("Load Empires info...");
		`		
	});
});
