if (location.href.indexOf('https://ongeki-net.com/ongeki-mobile/home/ratingTargetMusic/') === -1) {
  alert("このページでは使用できません\nオンゲキネットのレーティング対象曲ページで実行してください");
  throw new Error();
}
$.getScript('https://cdn.jsdelivr.net/gh/taso0096/ongeki_rating/constants.js')
.done(() => {
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
});
