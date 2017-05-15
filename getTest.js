/**
 * Created by suzanne on 5/14/17.
 */
var request = require("request");
var cheerio = require("cheerio")

var options = { method: 'GET',
  url: 'http://dev.totalimmersionacademy.com/members/forumdisplay.php',
  qs: { '236852-Fast-Forward-Pace-Maintenance-Test': '' },
  headers:
    { 'postman-token': 'fe2bfad5-d6e0-8d6a-f729-909ebbc41784',
      'cache-control': 'no-cache',
      cookie: 'no_trackyy_100677842=1; bb_np_notices_displayed=2; _jsuid=656517229; __utmt_UA-45928938-1=1; __utma=1.962647414.1494617329.1494625778.1494645428.3; __utmb=1.5.10.1494645428; __utmc=1; __utmz=1.1494617329.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _first_pageview=1; __ar_v4=2W4JLZS6EVHTXO5NBA4VXX%3A20170511%3A9%7C3BCD3BD7M5C3FPS3CM5544%3A20170511%3A9%7CLSRIDWDWMVAD3KHL6GHZNL%3A20170511%3A10; _eventqueue=%7B%22heatmap%22%3A%5B%7B%22type%22%3A%22heatmap%22%2C%22href%22%3A%22%2Fmembers%2Fforumdisplay.php%3F102-FAST-FORWARD-Training-Program-led-by-Suzanne-Atkinson%22%2C%22x%22%3A980%2C%22y%22%3A84%2C%22w%22%3A1091%7D%5D%2C%22events%22%3A%5B%5D%7D; bb_lastvisit=1494617652; bb_lastactivity=0; bb_userid=6664; bb_password=2cc6ebf7f78c46cdc5e06e2bfaf6a0b6; bb_sessionhash=b8d7ed44067287027162cc4cd1a4c604; _vwo_uuid_v2=DA395DCF254D74C98D6D8D55BC4E55C4|c875abbf5f9dd112fbf32d17a8d9c3f9; bb_np_notices_displayed=2; _jsuid=656517229; bb_lastvisit=1494812538; bb_lastactivity=0; bb_userid=6664; bb_password=2cc6ebf7f78c46cdc5e06e2bfaf6a0b6; bb_sessionhash=aefed5d5fc58a40eace46953db7d6317; _vwo_uuid_v2=DA395DCF254D74C98D6D8D55BC4E55C4|c875abbf5f9dd112fbf32d17a8d9c3f9; __utma=1.962647414.1494617329.1494625778.1494645428.3; __utmb=1.6.10.1494645428; __utmc=1; __utmz=1.1494617329.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __ar_v4=2W4JLZS6EVHTXO5NBA4VXX%3A20170511%3A9%7C3BCD3BD7M5C3FPS3CM5544%3A20170511%3A9%7CLSRIDWDWMVAD3KHL6GHZNL%3A20170511%3A11; _eventqueue=%7B%22heatmap%22%3A%5B%5D%2C%22events%22%3A%5B%5D%7D',
      'accept-language': 'en-US,en;q=0.8',
      'accept-encoding': 'gzip, deflate, sdch',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
      'upgrade-insecure-requests': '1' },
  gzip: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  $ = cheerio.load(body)
  console.log($)
});