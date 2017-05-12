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
  rejectUnauthorized: false,
  followAllRedirects: true   // allow redirections
});

var username = process.env.username
var password = process.env.password

console.log(username, password)

console.log(md5(password))
var postOptions = { method: 'POST',
  url: 'http://dev.totalimmersionacademy.com/members/login.php',
  qs: { do: 'login'},

  headers:
    {
      'cache-control': 'no-cache',
      'accept-language': 'en-US,en;q=0.8',
      'accept-encoding': 'gzip, deflate',
      referer: 'http://dev.totalimmersionacademy.com/members/forum.php',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
      'upgrade-insecure-requests': '1',
      origin: 'http://dev.totalimmersionacademy.com' },
  formData:
    { do: 'login',
      s: '',
      securitytoken: 'guest',
      vb_login_md5password: md5(password),
      vb_login_md5password_utf: md5(password),
      vb_login_password: '',
      vb_login_password_hint: 'Password',
      vb_login_username: 'Suzanne Atkinson' } ,
  gzip: true
};

req(postOptions, function (error, response, html) {
  if (error) throw new Error(error);

  var $ = cheerio.load(html)

  //am I logged in?
  var m = $('.blockrow.restore').text()
  console.log(m)

  //parse session URL from the body using jquery/cheerio
  var url = $('noscript meta').attr('content').split("; ")[1]
  console.log(url)

  //get session ID from the URL using regex
  var sessionUrl = url.match(/s=([^&]*)/)[1]
  console.log("session regex:", sessionUrl)


  //build new options object for next request (redirect)
  var getOptions = { method: 'GET',
    url: 'http://dev.totalimmersionacademy.com/members/forum.php',
    qs: { s: sessionUrl },
    headers:
      { 'cache-control': 'no-cache',
        sessionurl: 's=' + sessionUrl + '&' } ,
    gzip: true

  }

  //check what I built
  console.log(getOptions)

  //go for the money here
  req(getOptions,
    function(err,resp,body){

     //console.log("Get Body: ", body);

  })

});