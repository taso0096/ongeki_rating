let constants = {};
for (let i = 1; i <= $('.ui_article_entry table').length; i++) {
  let musicsData = $('.ui_article_entry table').eq(i);
  for (let j = 1; j < musicsData.find('tr').length; j++) {
    let musicData = musicsData.find('tr').eq(j).children('td');
    constants[musicData.eq(2)[0].textContent.replace(/[^a-zA-Z0-9\u30a0-\u30ff\u3040-\u309f\u30e0-\u9fcf]/g, '') + musicData.eq(0)[0].textContent] = musicData.eq(6)[0].textContent;
  }
}
console.log(constants);
