
var quoteText='';
var quoteAuthor='';
function getQuote() {
  $.ajax({
    url:'https://api.forismatic.com/api/1.0/',
    jsonp: 'jsonp',
    dataType: 'jsonp',
    data: {
      method: 'getQuote',
      lang: 'en',
      format: 'jsonp'
    }
  }).done((response) => {
    quoteText=response.quoteText;
    quoteAuthor=response.quoteAuthor;
    $('#quote').html(quoteText + '<br>'+ '--' + quoteAuthor);
  });

}

function tweet() {
  var tweetLength=quoteText.length+quoteAuthor.length;
  console.log(tweetLength);
  if (tweetLength > 140) {
    alert("Quote too long to tweet");
  }
  else { 
    var url="https://twitter.com/intent/tweet";
    var text=quoteText+'--'+quoteAuthor;
    window.open(url+"?text="+text,width=500,height=30);
  }
 }

getQuote();