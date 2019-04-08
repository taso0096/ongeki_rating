if (location.href.indexOf('https://ongeki-net.com/ongeki-mobile/home/ratingTargetMusic/') === -1) {
  alert("このページでは使用できません\nオンゲキネットのレーティング対象曲ページで実行してください");
  throw new Error();
}
let constants = {"OpferMASTER":"14.9","TitaniaMASTER":"14.9","YURUSHITEMASTER":"14.6","怒槌MASTER":"14.5","混沌を越えし我らが神聖なる調律主を讃えよMASTER":"14.5","MEGATONBLASTMASTER":"14.5","神威MASTER":"14.3","エンドマークに希望と涙を添えてMASTER":"14.2","DazzlehopMASTER":"14.2","EverlastingTodayMASTER":"14.1","NoRemorseLUNATIC":"14.0","7thSenseMASTER":"14.0","閃鋼のブリューナクMASTER":"13.9","初音ミクの激唱MASTER":"13.9","初音ミクの激唱LUNATIC":"13.9","GOODRAGEMASTER":"13.9","OshamaScrambleMASTER":"13.8","AiNovMASTER":"13.8","カミサマネジマキMASTER":"13.8","ナイト・オブ・ナイツLUNATIC":"13.8","CalamityFortuneMASTER":"13.8","DeathDollMASTER":"13.8","AMAZINGMIGHTYYYYMASTER":"13.7","ぼくらの16bit戦争MASTER":"13.7","DestinyRunnerMASTER":"13.7","最終鬼畜妹フランドール・MASTER":"13.7","初音ミクの消失MASTER":"13.7","SakuraFubukiLUNATIC":"13.7","HalcyonMASTER":"13.6","DolphikaMASTER":"13.6","MaqriteMASTER":"13.6","クイーンオブハートMASTER":"13.6","GateofDoomMASTER":"13.5","SwordofSecretMASTER":"13.5","今ぞ崇め奉れオマエらよ姫の秘メタル渇望MASTER":"13.5","オンゲキ全域アカネサマMASTER":"13.5","BrainPowerMASTER":"13.4","WeGonnaJourneyMASTER":"13.4","KattobiKEIKYURiderMASTER":"13.4","OpferEXPERT":"13.3","TitaniaEXPERT":"13.3","CyberozarMASTER":"13.2","幸せになれる隠しコマンドがあるらしいMASTER":"13.2","TAKEONTHEWORLDMASTER":"13.2","MEGATONBLASTEXPERT":"13.2","脳漿炸裂ガールMASTER":"13.1","ブツメツビーターズMASTER":"13.1","アンハッピーリフレインMASTER":"13.1","鬼KYOKANMASTER":"13.0","PaqqinMASTER":"13.0","幻想のサテライトMASTER":"13.0","ロボットプラネットユートピアMASTER":"13.0","ようこそジャパリパークへLUNATIC":"13.0","星屑ユートピアMASTER":"13.0","ChellyspLashMASTER":"13.5","PPPPがおーMASTER":"12.9","天火明命MASTER":"12.9","oboroMASTER":"12.9","OperaofthewastelandMASTER":"12.9","ゴーカごーかいファントムシーフMASTER":"12.9","混沌を越えし我らが神聖なる調律主を讃えよEXPERT":"12.9","LinkwithUMASTER":"12.9","TeAMASTER":"12.9","本能的SurvivorMASTER":"12.9","HyperActiveMASTER":"12.8","ロッキンピンクモンスターMASTER":"12.8","sweetlittlesisterMASTER":"12.8","GodknowsMASTER":"12.8","時の冒険者MASTER":"12.8","ロキMASTER":"12.8","DAYBREAKFRONTLINEMASTER":"12.8","からくりピエロMASTER":"12.8","WhatcolorMASTER":"12.7","GAMEISLIFEMASTER":"12.7","ventyrMASTER":"12.7","EnergyBooster上海紅茶館MASTER":"12.7","れみりあデスティニーMASTER":"12.7","チュルリラ・チュルリラ・ダッダッダMASTER":"12.7","怒槌EXPERT":"12.7","fulgenteMASTER":"12.7","ですのっWhiteBlackMASTER":"12.7","ヒバナMASTER":"12.7","KissMeKissMASTER":"","TheFormulaMASTER":"12.6","HereWeGoMASTER":"12.6","SWEETSHAKEMASTER":"12.6","ナイト・オブ・ナイツMASTER":"12.6","GranFatalitMASTER":"12.6","DragoonMASTER":"12.6","JumpJumpJumpMASTER":"12.6","ファッとして桃源郷MASTER":"12.5","かくしん的めたまるふぉぜっMASTER":"12.5","六兆年と一夜物語MASTER":"12.5","キミノヨゾラ哨戒班MASTER":"12.5","グリーンライツ・セレナーデMASTER":"12.5","BadApplefeatnomicoMASTER":"12.5","RedBattleMASTER":"12.5","Heyday狂騒曲カプリチオMASTER":"12.5","RedoMASTER":"12.5","超電磁少女DaysMASTER":"12.5","MareMarisMASTER":"12.4","木彫り鯰と右肩ゾンビMASTER":"12.4","四次元跳躍機関MASTER":"12.4","月に叢雲華に風MASTER":"12.4","STEPbySTEPUPMASTER":"12.4","LinkofDestinyMASTER":"12.4","GrandsymphonyMASTER":"12.4","炉心融解MASTER":"12.4","ラブリズムMASTER":"12.3","おこちゃま戦争MASTER":"12.3","砂の惑星featHATSUNEMIKUMASTER":"12.3","DazzlehopEXPERT":"12.3","YURUSHITEEXPERT":"12.3","ゆら・ゆらRingDongDanceMASTER":"12.3","HARMONIZEMASTER":"12.3","LoveisMYRAILMASTER":"12.3","流星MASTER":"12.3","LosLosLosMASTER":"12.2","SAVIOROFSONGMASTER":"12.2","心象蜃気楼MASTER":"12.2","ゴーストルールMASTER":"12.2","天ノ弱MASTER":"12.1","EverlastingTodayEXPERT":"12.1","ヒビカセMASTER":"12.1","sistersnoiseMASTER":"12.1","回レ雪月花MASTER":"12.0","ZestofBlueMASTER":"12.0","タテマエと本心の大乱闘MASTER":"12.0","オモイヨシノMASTER":"12.0","神威EXPERT":"12.0","GripBreakDownMASTER":"12.0","アクアテラリウムMASTER":"12.0","TOMORROWMASTER":"12.0","こころここからMASTER":"12.0","ようこそジャパリパークへMASTER":"11.9","RedreductiondivisioncrossroadsversionMASTER":"11.9","いーあるふぁんくらぶMASTER":"11.9","CiRCLINGMASTER":"11.9","CalamityFortuneEXPERT":"11.9","onlymyrailgunMASTER":"11.9","千本桜MASTER":"11.8","エンドマークに希望と涙を添えてEXPERT":"11.8","ハロープラネットMASTER":"11.8","シュガーソングとビターステップMASTER":"11.7","BLACKSHOUTMASTER":"11.7","7thSenseEXPERT":"11.7","ブリキノダンスMASTER":"11.7","カミサマネジマキEXPERT":"11.7","初音ミクの消失EXPERT":"","ThisgameMASTER":"11.6","カンペキWillMASTER":"11.6","GOODRAGEEXPERT":"11.5","TellYourWorldMASTER":"11.5","PerfectShiningMASTER":"11.4","みんなHappyMASTER":"11.4","FirstTwinkleMASTER":"11.4","わたし音頭MASTER":"11.4","檄帝国華撃団MASTER":"11.3","アンハッピーリフレインEXPERT":"11.3","AiNovEXPERT":"11.1","STARTLINERMASTER":"11.0","HyperActiveEXPERT":"11.0","HalcyonEXPERT":"11.0","ThatIsHowIRollMASTER":"11.0","鳥の詩MASTER":"11.0","secretbase君がくれたもの10yearsafterVerMASTER":"11.0","星屑ユートピアEXPERT":"","CreamMintMASTER":"","DeathDollEXPERT":"","SAKURAMASTER":"10.9","初音ミクの激唱EXPERT":"10.9","連れ去って・閉じ込めて・好きにしてMASTER":"10.9","GateofDoomEXPERT":"10.8","KattobiKEIKYURiderEXPERT":"10.8","DolphikaEXPERT":"10.7","ロッキンピンクモンスターEXPERT":"10.7","しゅわりんどりみんMASTER":"10.7","ChellyspLashEXPERT":"","オンゲキ全域アカネサマEXPERT":"","AMAZINGMIGHTYYYYEXPERT":"10.6","ときめきエクスペリエンスMASTER":"10.6","えがおのオーケストラっMASTER":"10.6","PPPPがおーEXPERT":"10.5","君の知らない物語MASTER":"10.4","WeGonnaJourneyEXPERT":"10.4","閃鋼のブリューナクEXPERT":"10.4","ぼくらの16bit戦争EXPERT":"10.4","ロボットプラネットユートピアEXPERT":"10.4","BrainPowerEXPERT":"10.3","OshamaScrambleEXPERT":"10.2","PaqqinEXPERT":"10.2","最終鬼畜妹フランドール・EXPERT":"10.1","脳漿炸裂ガールEXPERT":"10.0","鬼KYOKANEXPERT":"10.0","幻想のサテライトEXPERT":"10.0","DestinyRunnerEXPERT":"10.0","チュルリラ・チュルリラ・ダッダッダEXPERT":"10.0","TAKEONTHEWORLDEXPERT":"","TeAEXPERT":"","クイーンオブハートEXPERT":""};
let musicRate;
let newRate = 0;
let bestRate = 0;
let recentRate = 0;
for (let i = 0; i <= 74; i++) {
  let title_diff = $('.music_label').eq(i).text().replace(/[^a-zA-Z0-9\u30a0-\u30ff\u3040-\u309f\u30e0-\u9fcf]/g, '') + $('.basic_btn').eq(i).attr('class').replace(/((?!(advanced|expert|master|lunatic)).)*/, '').split('_score')[0].toUpperCase();
  let level = $('.score_level').eq(i);
  try {
    musicRate = Number(constants[title_diff]);
    if (!musicRate) {
      throw new Error();
    }
    level.text(musicRate.toFixed(1));
  } catch (e) {
    if (level.text().indexOf('+') !== -1) {
      musicRate = Number(level.text().slice(0, -1)) + 0.7;
    } else {
      musicRate = Number(level.text());
    }
    level.html( "<span style='color:red;'>" + musicRate.toFixed(1) + "</span>" );
  }

  let score = $('.score_value:not(.music_rate)').eq(i).text().replace(/,/g, '');
  if (score >= 1007500) {
    musicRate += 2;
  } else if (score >= 1000000) {
    musicRate += 1.5 + (score - 1000000)/15000;
  } else if (score >= 990000) {
    musicRate += 1 + (score - 990000)/20000;
  } else if (score >= 970000) {
    musicRate += (score - 970000)/20000;
  } else {
    musicRate += (score - 970000)/17500;
  }
  if (i < 15) {
    newRate += musicRate;
  } else if (i < 45) {
    if (i === 15) {
      var topRate = musicRate;
    }
    bestRate += musicRate;
  } else if (i < 55) {
    recentRate += musicRate;
  }
  $('.score_table').children().eq(i).append('<tr><td class="'+ $('.score_label:not(.music_rate)').eq(i).attr('class') +' music_rate">曲別レート</td><td class="' + $('.score_value:not(.music_rate)').eq(i).attr('class') + ' music_rate">' + musicRate.toFixed(2) + '</td></tr>');
}

let playerRate = (newRate + bestRate + recentRate)/55;
let canRate = (newRate + bestRate + topRate*10)/55;
newRate /= 15;
bestRate /= 30;
recentRate /= 10;

$('.rating_field [class*=rating_]').text(Math.floor(playerRate*1000)/1000);
$('.rating_field .f_11').text('（MAX ' + Math.floor(playerRate*1000)/1000 + '）');


$('.battle_rank_block').css('z-index', 1);
$('.user_data_container').after(`
  <hr class="gray_line">
  <div class="extra_user_data f_0">
    <table class="rating_silver f_20 f_b" style="height:130px;padding-left:90px;">
      <tr>
        <td class="t_l">到達可能レート</td><td>${Math.floor(canRate*1000)/1000}</td>
      </tr>
      <tr>
        <td class="t_l">新曲枠平均レート</td><td>${Math.floor(newRate*1000)/1000}</td>
      </tr>
      <tr>
        <td class="t_l">ベスト枠平均レート</td><td>${Math.floor(bestRate*1000)/1000}</td>
      </tr>
      <tr>
        <td class="t_l">リーセント枠平均レート</td><td>${Math.floor(recentRate*1000)/1000}</td>
      </tr>
    </table>
  </div>
`);
$('.border_block div').append(`
  <hr class="gray_line">
  曲別レートはよくわからないので四捨五入、<br>
  プレイヤーデータに表示しているレートは全て切り捨てです。<br>
  到達可能レートはベスト枠1位でリーセント枠を埋めた場合のレートです。<br>
  各曲のレベル部分は譜面定数に置き換わっていますが、データがない場合は<br>
  赤文字で推定レートが表示されます。(9は9.0、9+は9.7など)<br>
  おそらくAA以下のスコアには対応していません。<br>
  Gamerchの<a href="https://ongeki.gamerch.com/オンゲキ%20楽曲一覧（Lv順）高難易度" target="_blank" class="blue">オンゲキ攻略wiki</a>の譜面定数を使用しています。<br><br>
  開発者: たそ <a href="https://twitter.com/taso0096" target="_blank" class="blue">ツイッター</a>
`);
