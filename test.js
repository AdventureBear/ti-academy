/**
 * Created by suzanne on 5/12/17.
 */
var request = require("request");

req = request.defaults({
  jar: true,                 // save cookies to jar
});

var j = request.jar()

var options = { method: 'POST',
  url: 'http://dev.totalimmersionacademy.com/members/login.php',
  qs: { do: 'login' },
  headers:
    { 'postman-token': '693fdd6b-4501-9017-f69a-669ae218d210',
      cookie: '_jsuid=656517229; no_trackyy_100677842=1; _ga=GA1.2.194027884.1494441457; _gid=GA1.2.78311076.1494449044; __utmt_UA-45928938-1=1; _first_pageview=1; bb_sessionhash=2864237aabc55363612f3f6e7aac0f94; bb_lastvisit=1494451593; bb_lastactivity=0; bb_np_notices_displayed=2; _vwo_uuid_v2=0D76F6A278D917293736DEDBA85AF772|312a803ee880c0efadffc0b204f7f075; __utma=1.194027884.1494441457.1494441457.1494448543.2; __utmb=1.30.10.1494448543; __utmc=1; __utmz=1.1494441457.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __ar_v4=LSRIDWDWMVAD3KHL6GHZNL%3A20170509%3A38%7C3BCD3BD7M5C3FPS3CM5544%3A20170509%3A40%7C2W4JLZS6EVHTXO5NBA4VXX%3A20170509%3A40%7CKI43T6TGRRELVDNG2DEWHX%3A20170509%3A2; _eventqueue=%7B%22heatmap%22%3A%5B%7B%22type%22%3A%22heatmap%22%2C%22href%22%3A%22%2Fmembers%2Flogin.php%22%2C%22x%22%3A1101%2C%22y%22%3A70%2C%22w%22%3A1208%7D%5D%2C%22events%22%3A%5B%5D%7D',
      'accept-language': 'en-US,en;q=0.8',
      'accept-encoding': 'gzip, deflate',
      //referer: 'http://dev.totalimmersionacademy.com/members/login.php',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
      'upgrade-insecure-requests': '1',
      origin: 'http://dev.totalimmersionacademy.com' },
  formData:
    { do: 'login',
      s: '',
      securitytoken: 'guest',
      vb_login_md5password: '63eb32b475a1e7f42ac2b55237480ed0',
      vb_login_md5password_utf: '63eb32b475a1e7f42ac2b55237480ed0',
      vb_login_password: 'EtPCu3vQ',
      vb_login_password_hint: 'Password',
      vb_login_username: 'Suzanne Atkinson' },
  gzip: true
  };



request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var setcookie = response.headers["set-cookie"];
  if ( setcookie ) {
    setcookie.forEach(
      function ( cookiestr ) {
        console.log( "COOKIE:" + cookiestr );
      }
    );
  }

   request('http://dev.totalimmersionacademy.com/members/forum.php', function(){
  //   console.log(body)

  var cookies = j.getCookies('http://dev.totalimmersionacademy.com/members');
  console.log(cookies)

   })
  //console.log(body);
});