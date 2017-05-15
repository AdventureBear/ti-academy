/**
 * Created by suzanne on 5/10/17.
 */

// include the libraries we need
var request = require('request');
var cheerio = require('cheerio');
var md5 = require('md5');
var dotenv = require('dotenv').config()

req = request.defaults({
  jar: true,                 // save cookies to jar
});

var username = process.env.username
var password = process.env.password

//console.log(username, password)

//console.log(md5(password))
var postOptions = { method: 'POST',
  url: 'http://dev.totalimmersionacademy.com/members/login.php',
  qs: { do: 'login'},
  headers:
    {
      //'cache-control': 'no-cache',
      //'accept-language': 'en-US,en;q=0.8',
      //'accept-encoding': 'gzip, deflate',
      //referer: 'http://dev.totalimmersionacademy.com/members/forum.php',
      //accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
      'upgrade-insecure-requests': '1',
      referer: 'http://dev.totalimmersionacademy.com/members/forumdisplay.php?102-FAST-FORWARD-Training-Program-led-by-Suzanne-Atkinson',
      origin: 'http://dev.totalimmersionacademy.com'
      },
  formData:
    { cookieuser: '1',
      do: 'login',
      s: '',
      securitytoken: 'guest',
      vb_login_md5password: md5(password),
      vb_login_md5password_utf: md5(password),
      vb_login_password: '',
      vb_login_password_hint: 'Password',
      vb_login_username: 'Suzanne Atkinson',
      url: 'http://dev.totalimmersionacademy.com/members/'} ,
gzip: true
}

req(postOptions, function (error, response, html) {
  if (error) throw new Error(error);

  var $ = cheerio.load(html)

  //am I logged in?
  var m = $('.blockrow.restore').text()
  console.log(m)

  //console.log(html)

  //parse session URL from the body using jquery/cheerio
  var url = $('noscript meta').attr('content').split("; ")[1]
  console.log(url)

  //get session ID from the URL using regex
  var sessionUrl = url.match(/s=([^&]*)/)[1]
  console.log("session regex:", sessionUrl)


  // //build new options object for next request (redirect)
  // var getOptions = { method: 'GET',
  //   url: 'http://dev.totalimmersionacademy.com/members/forumdisplay.php?102-FAST-FORWARD-Training-Program-led-by-Suzanne-Atkinson',
  //   qs: { s: sessionUrl },
  //   headers:
  //     { 'cache-control': 'no-cache',
  //       sessionurl: 's=' + sessionUrl + '&' }
  // }

  // var getOptions = { method: 'GET',
  //   //url: 'http://dev.totalimmersionacademy.com/members/forumdisplay.php',
  //   url: 'http://dev.totalimmersionacademy.com/members/',
  //   //qs: { '102-FAST-FORWARD-Training-Program-led-by-Suzanne-Atkinson': '' },
  //   headers:
  //     { 'cache-control': 'no-cache',
  //       'cache-control': 'no-cache',
  //       cookie: 'bb_np_notices_displayed=2; ' +
  //       'bb_np_notices_displayed=2; ' +
  //       'bb_lastvisit=1494617652; ' +
  //       'bb_lastactivity=0; ' +
  //       'bb_userid=6664; ' +
  //       'bb_password=2cc6ebf7f78c46cdc5e06e2bfaf6a0b6; ' ,
  //       //'bb_sessionhash=b8d7ed44067287027162cc4cd1a4c604; ',
  //       sessionurl: 's=' + sessionUrl + '&' }
  // }


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



  //check what I built
  //console.log(getOptions)

  //go for the money here
  req(options,
    function(err,resp,body){

     //console.log("Get Body: ", body);
      var $ = cheerio.load(body)
      //
       //$ = $('.threadtitle')
      // //console.log("test")
      //
      //
      //
      var m = $('.blockrow.restore').text()
      console.log(m)
      console.log($)

  })

});