var url = 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth/request_token'
//var params = 'oauth_callback=https%3A%2F%2Fnostalgic-lalande-f9f860.netlify.app%2FHome.html&oauth_nonce=K7ny27JTpKVsTgdyLdDfmQQWVLERj2zAK5BslRsqyw&oauth_signature_method=HMAC-SHA1&oauth_consumer_key=OsP4fYleWKJceK5CyPkQdscYa&oauth_signature=Pc%2BMLdv028fxCErFyi8KXFM%2BddU%3D';

var params = 'oauth_callback=https%3A%2F%2Fnostalgic-lalande-f9f860.netlify.app%2FHome.html&oauth_nonce=K7ny27JTpKVsTgdyLdDfmQQWVLERj2zAK5BslRsqyw&oauth_signature_method=HMAC-SHA1&oauth_consumer_key=OsP4fYleWKJceK5CyPkQdscYa&oauth_signature=Pc%2BMLdv028fxCErFyi8KXFM%2BddU%3D';

var apiKey = 'OsP4fYleWKJceK5CyPkQdscYa';
var apiSecretKey= 'MqHXvRV4YAWWtGIbIqZxtJwkIVNNpp4ZAWnFsj9XwTzF7JrBdw' ;
var accessToken = '449848553-G9OPRRYStA9WmDvS9iZcX3wBRNgvWQtplLHprmkD';
var accessTokenSecret = 'BNq9pwLXLdDSUAO1w2j2hAbYbRs7NDjt9AFzoZCuIoLPF';
var nonce = 'K7ny27JTpKVsTgdyLdDfmQQWVLERj2zAK5BslRsqyw';
var signature = 'Pc%2BMLdv028fxCErFyi8KXFM%2BddU%3D';
var callbackUrl = "https%3A%2F%2Fnostalgic-lalande-f9f860.netlify.app%2FHome.html";
//var callbackUrl = "C%3AUsersmangayarkarasi.jDocumentsGuviTwitter%20cloneHome.html";
var timestamp = '1364161424';

function loginRequest()
{
    // var http = new XMLHttpRequest();
    // http.open('POST', url, true);
    // http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    // http.setRequestHeader('Authorization', getAuthorization());
    // http.onreadystatechange = function() {//Call a function when the state changes.
    //     if(http.readyState == 4 && http.status == 200) {
    //         alert(http.responseText);
    //     }
    // }
    // http.send();

    fetch(url, {
       method : 'POST',
       headers : {
         'Content-type' : 'application/x-www-form-urlencoded',
         'Authorization' :   getAuthorization(),
         'Access-Control-Allow-Origin' : '*/*',
        "Access-Control-Allow-Headers":  "Origin, X-Requested-With, Content-Type, Accept"
       } 
    }).then((response) =>{
        console.log("response", response);
    }).catch((error) =>{
        console.log("error", error);
    });
}

//var auth = 'OAuth oauth_consumer_key="OsP4fYleWKJceK5CyPkQdscYa",oauth_token="449848553-G9OPRRYStA9WmDvS9iZcX3wBRNgvWQtplLHprmkD",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1603028813",oauth_nonce="IdGko9EXuZm",oauth_version="1.0",oauth_callback="https%3A%2F%2Fnostalgic-lalande-f9f860.netlify.app%2FHome.html",oauth_signature="0hD8frUYHuzDjcIXUBv9VgUf8MA%3D"'

function getAuthorization()
{
    return 'OAuth '                                         +
        'oauth_callback="' + encodeURIComponent('https://nostalgic-lalande-f9f860.netlify.app/Home.html')      + '", '+
        'oauth_consumer_key="'  + apiKey       + '", ' +
        'oauth_consumer_secret="'  + apiSecretKey       + '", ' +
        'oauth_nonce="'         + nonce             + '", ' +
        'oauth_signature="'     + signature         + '", ' +
        'oauth_signature_method="HMAC-SHA1", '              +
        // 'oauth_timestamp="'     + timestamp         + '", ' +
        // 'oauth_token="'         + accessToken       + '", ' +
        'oauth_version="1.0"'     
}