/**
 * Created by suzanne on 5/10/17.
 */

// include the libraries we need
var request = require('request');
var cheerio = require('cheerio');

req = request.defaults({
  jar: true,                 // save cookies to jar
  rejectUnauthorized: false,
  followAllRedirects: true   // allow redirections
});

var postOptions = { method: 'POST',
  url: 'http://dev.totalimmersionacademy.com/members/login.php',
  qs: { do: 'login' },
  headers:
    { 'postman-token': '66c40a42-246f-e50e-c11a-51ac0c705ac4',
      'cache-control': 'no-cache',
      cookie: '_jsuid=656517229; no_trackyy_100677842=1; _ga=GA1.2.194027884.1494441457; _gid=GA1.2.78311076.1494449044; __utmt_UA-45928938-1=1; _first_pageview=1; bb_sessionhash=2864237aabc55363612f3f6e7aac0f94; bb_lastvisit=1494451593; bb_lastactivity=0; bb_np_notices_displayed=2; _vwo_uuid_v2=0D76F6A278D917293736DEDBA85AF772|312a803ee880c0efadffc0b204f7f075; __utma=1.194027884.1494441457.1494441457.1494448543.2; __utmb=1.30.10.1494448543; __utmc=1; __utmz=1.1494441457.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __ar_v4=LSRIDWDWMVAD3KHL6GHZNL%3A20170509%3A38%7C3BCD3BD7M5C3FPS3CM5544%3A20170509%3A40%7C2W4JLZS6EVHTXO5NBA4VXX%3A20170509%3A40%7CKI43T6TGRRELVDNG2DEWHX%3A20170509%3A2; _eventqueue=%7B%22heatmap%22%3A%5B%7B%22type%22%3A%22heatmap%22%2C%22href%22%3A%22%2Fmembers%2Flogin.php%22%2C%22x%22%3A1101%2C%22y%22%3A70%2C%22w%22%3A1208%7D%5D%2C%22events%22%3A%5B%5D%7D',
      'accept-language': 'en-US,en;q=0.8',
      'accept-encoding': 'gzip, deflate',
      referer: 'http://dev.totalimmersionacademy.com/members/login.php',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
      'upgrade-insecure-requests': '1',
      origin: 'http://dev.totalimmersionacademy.com' },
  form: {} };

var getOptions = {
  method: 'GET',
  url: 'http://dev.totalimmersionacademy.com/members/forum.php?s=9a478caa7fafff589735bf6410c87d80'
}


req(postOptions, function (error, response, body) {
  if (error) throw new Error(error);
  console.log("Post Response: ", response);
  //console.log(body);

  req(getOptions, function (err, resp, body) {
    console.log("Get Body: ", body);

  })



});