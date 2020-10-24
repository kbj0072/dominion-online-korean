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
		// 번영
		dictName['Bank'] = '은행';
		dictText['Bank'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:15px;">이 카드를 플레이 할 때, 이 카드는</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">이 카드를 포함하여 이번 턴에</div></div><br><div style="display:inline;"><div style="display:inline; font-size:15px;">사용한 재화카드 한장당       의 가치가 있다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.15); top:70px; display: inline;left:160px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';
		dictName['Bishop'] = '주교';
		dictName['Contraband'] = '금제품';
		dictName['Counting House'] = '회계소';
		dictName['City'] = '도시';
		dictName['Expand'] = '확장';
		dictName['Forge'] = '대장간';
		dictName['Grand Market'] = '대시장';
		dictName['Goons'] = '불량배';
		dictName['Hoard'] = '숨겨진 재산';
		dictName["King's Court"] = '궁정';
		dictName['Loan'] = '차금';
		dictName['Mint'] = '조폐소';
		dictName['Monument'] = '기념비';
		dictName['Mountebank'] = '약장수';
		dictName['Peddler'] = '행상인';
		dictName['Quarry'] = '채석장';
		dictName['Rabble'] = '폭도';
		dictName['Royal Seal'] = '옥새';
		dictName['Talisman'] = '부적';
		dictName['Trade Route'] = '교역로';
		dictName['Vault'] = '보관고';
		dictName['Venture'] = '투기';
		dictName['Watchtower'] = '감시탑';
		dictName["Worker's Village"] = '노동자의 마을';

		dictName['Platinum'] = '백금';
		dictText['Platinum'] = "";
		dictName['Colony'] = '식민지';
		dictText['Colony'] = "";

		`
	});
});




		// dictName['Bishop'] = '주교';
		// dictName['Contraband'] = '금제품';
		// dictName['Counting House'] = '회계소';
		// dictName['City'] = '도시';
		// dictName['Expand'] = '확장';
		// dictName['Forge'] = '대장간';
		// dictName['Grand Market'] = '대시장';
		// dictName['Goons'] = '불량배';
		// dictName['Hoard'] = '숨겨진 재산';
		// dictName['King's Court'] = '궁정';
		// dictName['Loan'] = '차금';
		// dictName['Mint'] = '조폐소';
		// dictName['Monument'] = '기념비';
		// dictName['Mountebank'] = '약장수';
		// dictName['Peddler'] = '행상인';
		// dictName['Quarry'] = '채석장';
		// dictName['Rabble'] = '폭도';
		// dictName['Royal Seal'] = '옥새';
		// dictName['Talisman'] = '부적';
		// dictName['Trade Route'] = '교역로';
		// dictName['Vault'] = '보관고';
		// dictName['Venture'] = '투기';
		// dictName['Watchtower'] = '감시탑';
		// dictName['Worker's Village'] = '노동자의 마을';

		// 
		// dictText['Bishop'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:30px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+      </div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+      </div></div><br></div></div></div><div style="position:relative; top:0px;"><div style="line-height:20px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">손패의 카드 1장을 폐기한다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">폐기한 카드의    당 (내림)            </div></div><br></div></div><div style="position:relative; top:0px;"><div style="line-height:20px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">다른 플레이어들은 손패의 카드 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:20px;">1장을 폐기할 수 있다.</div></div><br></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.23); top:32px;left:143px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">1</div></div><div class="card-text-vp-icon"></div></div><div class="card-text-coin-icon" style="transform:scale(0.25); top:-2px; display: inline;left:130px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.18); top:88px;left:237px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">1</div></div><div class="card-text-vp-icon"></div></div><div class="card-text-coin-icon" style="transform:scale(0.15); top:89px; display: inline;left:125px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';
		// dictText['Contraband'] = '<div style="position: relative; left:-35px;top:-20px;"><div class="card-text-coin-icon" style="transform:scale(0.5); top:0px; display: inline;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">3</div></div></div></div><div style="position:relative; top:47px;"><div style="font-weight: bold;"><div style="line-height:19px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+구매 1번</div></div><br></div></div></div><div style="position:relative; top:50px;"><div style="line-height:21.5px;"><div style="display:inline;"><div style="display:inline; font-size:17px;">이 카드를 플레이 했을때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;">다음 사람이 카드 이름을 한 개 호명. </div></div><br><div style="display:inline;"><div style="display:inline; font-size:17px;">이번 차례에 그 카드를 살 수 없다.</div></div><br></div></div>';
		// dictText['Counting House'] = '<div style="position:relative; top:13px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">버린 카드 더미를 확인하여</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">원하는 수만큼의 동화를 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">패로 가져옵니다.</div></div></div></div>';

		// dictText['City'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+액션 2번</div></div><br></div></div></div><div style="position:relative; top:0px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">만약 공급처 하나가 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">고갈되었다면 <div style="display: inline; font-weight: bold;">+카드 1장</div>.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">두 개 이상 고갈시</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;"><div style="display: inline; font-weight: bold;">+구매 1번,  </div><div style="display: inline; font-weight: bold;">+</div>     .</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.19); top:133px; display: inline;left:189px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';

		// dictText['Expand'] = '<div style="position:relative; top:5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">손패의 카드 1장을 폐기한다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">그 카드의 코스트보다 최대    </div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">높은 범위내에서의 카드 1장을 얻는다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:32px; display: inline;left:244px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">3</div></div></div>';

		// dictText['Forge'] = '<div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:19px;">원하는 만큼 손패의</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19px;">카드들을 폐기합니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">폐기한 카드들의 코스트를 합한것과 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:19px;">똑같은       를 지닌</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19px;">카드 1장을 얻습니다.</div></div></div></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:87px; display: inline;left:122px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;"></div></div></div>';
		// dictText['Grand Market'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:27px;"><div style="display:inline;"><div style="display:inline; font-size:27px;">+카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:27px;">+액션 1번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:27px;">+구매 1번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:27px;">+    </div></div><br></div></div></div><div class="card-text-coin-icon" style="transform:scale(0.21); top:84px; display: inline;left:138px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div><div style="position:relative; top:7px;"><div style="line-height:20.5px;"><div style="display:inline;"><div style="display:inline; font-size:21.5px;">플레이 공간에 동화가 있다면,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:21.5px;">이 카드를 구입할 수 없습니다.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-42px;"></div>';

		// dictText['Goons'] = '<div style="position:relative; top:-6px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+구매 1번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+      </div></div><br></div></div></div><div style="position:relative; top:-4px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">다른 모든 플레이어들은 손패가</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">3장이 되도록 카드를 버린다.</div></div><br></div></div><div style="position:relative; top:5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">이 카드가 플레이 공간에 있는 동안, </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드를 구매할 때마다 <div style="display: inline; font-weight: bold;">+</div>.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.25); top:22px; display: inline;left:130px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div><div class="card-text-vp-icon-container" style="display:inline; transform:scale(0.19); top:138px;left:267px;"><div class="card-text-vp-text-container"><div class="card-text-vp-text" style="top:8px;">1</div></div><div class="card-text-vp-icon"></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-47px;"></div>';
		// dictText['Hoard'] = '<div style="position: relative; left:-35px;top:-40px;"><div class="card-text-coin-icon" style="transform:scale(0.5); top:0px; display: inline;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div></div><div style="position:relative; top:50px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">이 카드가 플레이 공간에 있을 때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">승점 카드를 사면 금을 1장 얻는다.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-10px;"></div>';

		// dictText['King's Court'] = '<div style="position:relative; top:8px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:16px;">손패의 액션 카드 1장을 선택할수있다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">그것을 3번 사용한다.</div></div><br></div></div>';

		// dictText['Loan'] = '<div style="position: relative; left:-35px;top:-20px;"><div class="card-text-coin-icon" style="transform:scale(0.5); top:0px; display: inline;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div></div><div style="position:relative; top:43px;"><div style="line-height:18px;"><div style="display:inline;"><div style="display:inline; font-size:16px;">이 카드를 플레이 했을 때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:16px;">덱에서 재화 카드가 나올 때까지 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:16px;">카드를 공개합니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:16px;">공개한 재화카드를 버리거나 폐기합니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:16px;">공개된 나머지 카드들은 전부 버립니다.</div></div></div></div>';

		// dictText['Mint'] = '<div style="position:relative; top:0px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:16px;">손패의 재화 카드 1장을 공개할 수 있다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:16px;">그 카드와 똑같은 카드 1장을 얻는다.</div></div><br></div></div><div style="position:relative; top:20px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:16px;">이 카드를 구입할 때, 플레이 공간에</div></div><br><div style="display:inline;"><div style="display:inline; font-size:16px;">있는 모든 재화 카드를 폐기한다.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-37px;"></div>';

		// dictText['Monument'] = '';
		// dictText['Mountebank'] = '<div style="position:relative; top:-6px;"><div style="font-weight: bold;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+      </div></div><br></div></div><div style="position:relative; top:10px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">다른 플레이어들은 손패의 저주 카드 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">1장을 버릴 수 있다. 아니면,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">저주와 동화를 각각 1장씩 얻는다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.26); top:-7px; display: inline;left:130px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';


		// dictText['Peddler'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+카드 1장</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+액션 1번</div></div><br><div style="display:inline;"><div style="display:inline; font-size:28px;">+    </div></div><br></div></div></div><div style="position:relative; top:7px;"><div style="line-height:18px;"><div style="display:inline;"><div style="display:inline; font-size:19px;">구매 페이즈 때 이 카드는</div></div><br><div style="display:inline;"><div style="display:inline; font-size:19px;">플레이 공간에 있는 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:19px;">액션카드 매수 당         씩 할인</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.22); top:59px; display: inline;left:140px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="card-text-coin-icon" style="transform:scale(0.18); top:137px; display: inline;left:168px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-61px;"></div>';
		// dictText['Quarry'] = '<div style="position: relative; left:-35px;top:-35px;"><div class="card-text-coin-icon" style="transform:scale(0.5); top:0px; display: inline;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div></div><div style="position:relative; top:45px;"><div style="line-height:21px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">이 카드가 플레이 공간에 있을 때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">액션 카드의 가격이        낮아집니다.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-10px;"></div><div class="card-text-coin-icon" style="transform:scale(0.2); top:72px; display: inline;left:154px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div>';

		// dictText['Rabble'] = '<div style="position:relative; top:5px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+카드 3장</div></div><br></div></div></div><div style="position:relative; top:5px;"><div style="line-height:25px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">다른 플레이어들은 덱 맨위에서</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">카드를 3장 공개하여 액션 카드와</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">재화카드는 버리고 나머지는 원하는</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">순서대로 덱 맨위로 되돌린다.</div></div><br><br></div></div>';

		// dictText['Royal Seal'] = '<div style="position: relative; left:-35px;top:-35px;"><div class="card-text-coin-icon" style="transform:scale(0.52); top:0px; display: inline;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">2</div></div></div></div><div style="position:relative; top:45px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:20px;">이 카드가 플레이 공간에 있을 때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">카드를 얻으면 그 카드를 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">덱 맨위로 올릴 수 있다.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-37px;"></div>';
		// dictText['Talisman'] = '<div style="position: relative; left:-35px;top:-35px;"><div class="card-text-coin-icon" style="transform:scale(0.52); top:0px; display: inline;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div></div><div style="position:relative; top:45px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:14px;">이 카드가 플레이 공간에 있을 때,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:14px;">가치가        이하이고 승점카드가 아닌 카드를</div></div><br><div style="display:inline;"><div style="display:inline; font-size:14px;">구매하면 그 카드를 1장 더 가져옵니다.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-35px;"></div><div class="card-text-coin-icon" style="transform:scale(0.14); top:76px; display: inline;left:50px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">4</div></div></div>';

		// dictText['Trade Route'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+구매 1번</div></div><br></div></div></div><div style="position:relative; top:-2px;"><div style="line-height:18px;"><div style="display:inline;"><div style="display:inline; font-size:18.2px;">손에 든 카드 1장을 폐기한다.</div><br><div style="display:inline;"><div style="display:inline; font-size:18.2px;">교역로 매트에 있는 토큰 1개당<div style="display: inline; font-weight: bold;"> +</div></div></div></div><br></div></div><div style="position:relative; top:8px;"><div style="line-height:18px;"><div style="display:inline;"><div style="display:inline; font-size:13px;">준비 : 게임을 시작하기 전에 승점 카드 더미에</div></div><br><div style="display:inline;"><div style="display:inline; font-size:13px;">교역로 토큰을 각각 1개씩 올립니다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:13px;">토큰이 올라간 카드 더미에 있는 카드를 얻은 사람은 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:13px;">카드 더미에 있던 토큰을 공급처에서 교역로 매트로 옮겨옵니다.</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.16); top:50px; display: inline;left:275px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div><div class="horizontal-line" style="width:200px; height:2px;margin-top:-90px;"></div>';

		// dictText['Vault'] = '<div style="position:relative; top:0px;"><div style="font-weight: bold;"><div style="line-height:28px;"><div style="display:inline;"><div style="display:inline; font-size:28px;">+카드 2장</div></div><br></div></div></div><div style="position:relative; top:5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:22px;">원하는 만큼 손패를 버린다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:22px;">버린 매수 만큼.<div style="display: inline; font-weight: bold;">   +</div></div></div><br><div style="display:inline;"><div style="display:inline; font-size:14px;">다른 플레이어들은 손패를 2장 버릴 수 있다. </div></div><br><div style="display:inline;"><div style="display:inline; font-size:14px;">손패를 2장 버린 사람에 한해 + 카드 1장</div></div><br></div></div><div class="card-text-coin-icon" style="transform:scale(0.19); top:60px; display: inline;left:236px;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div>';

		// dictText['Venture'] = '<div style="position: relative; left:-35px;top:-20px;"><div class="card-text-coin-icon" style="transform:scale(0.5); top:0px; display: inline;"><div class="card-text-coin-text-container" style="display:inline;"><div class="card-text-coin-text" style="color: black; display:inline; top:8px;">1</div></div></div></div><div style="position:relative; top:45px;"><div style="line-height:19.5px;"><div style="display:inline;"><div style="display:inline; font-size:16px;">이 카드를 플레이 할 때, 덱에서 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:16px;">재화 카드가 1장 나올 때까지 </div></div><br><div style="display:inline;"><div style="display:inline; font-size:14px;">카드를 공개하고 공개된 카드는 전부 버린다.</div></div><br><div style="display:inline;"><div style="display:inline; font-size:16px;">공개한 재화카드를 플레이한다.</div></div><br></div></div>';

		// dictText['Watchtower'] = '<div style="position:relative; top:5px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">손패가 6장이 될 때까지</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">카드를 뽑습니다.</div></div><br></div></div><div style="position:relative; top:15px;"><div style="line-height:22px;"><div style="display:inline;"><div style="display:inline; font-size:18px;">카드를 얻을 때, 이 카드를 손패에서</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">공개 할 수 있습니다. 그렇게 한다면,</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">그 카드를 폐기할지 아니면 덱 맨위로</div></div><br><div style="display:inline;"><div style="display:inline; font-size:18px;">올릴지 선택 합니다.</div></div><br></div></div><div class="horizontal-line" style="width:200px; height:3px;margin-top:-97px;"></div>';

		// dictText['Worker's Village'] = '';