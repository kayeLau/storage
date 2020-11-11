const puppeteer = require("puppeteer");
const twitter = require("./fn/twitter");

(async () => {
  const USERNAME = "Twitter Email";
  const PASSWORD = "Password";
  let date = { since:"2020-03-10"}; //開始日期
  let count = 10; //爬多少天
  let yestheday = date.since;

  await twitter.initialize();

  //await twitter.login(USERNAME,PASSWORD);


  for (let i = 1; i < count; i++) {//循環爬取,因為twitter一次只會顯示一兩天的內容
	let a = date.since.split('-');
	a[2] = (a[2]*1+i);
	let to = a.join('-');
	console.log(yestheday,to);//打印日子
    await twitter.sreachTweet("chinesevirus",300,yestheday,to);//關鍵詞,條數,由,至
	yestheday = to;

  }
  await twitter.end();
  
  //整理內容
  // twitter.cleanUp('tweets3');
  // twitter.count('tweets3');

})();
