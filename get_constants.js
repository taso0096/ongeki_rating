let constants = {};
$.ajax({
  type: 'GET',
  url: 'https://ongeki.gamerch.com/オンゲキ%20楽曲一覧（Lv順）高難易度',
  dataType:'html'
}).done(res => {
  for (let i = 0; i < $('.ui_article_entry table', res).length; i++) {
    let musicsData = $('.ui_article_entry table', res).eq(i);
    for (let j = 1; j < musicsData.find('tr').length; j++) {
      let musicData = musicsData.find('tr')[j];
      constants[musicData.children[3].textContent.replace(/[^a-zA-Z0-9\u30a0-\u30ff\u3040-\u309f\u30e0-\u9fcf]/g, '') + musicData.children[0].textContent] = musicData.children[6].textContent;
    }
  }
});
console.log(constants);
