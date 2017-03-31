var quoteText = "text";
$(document).ready(function(){

  var quotes = [
    "'But I'm a wonderlust king I stay on the run, let me out, let me be gone' - Gogol Bordello",
    "'Girl, you'll be a woman... soon' - Urge Overkill",
    "'Your sex is on fire' - Kings of Leon",
    "'There are 20 years to go, the best of all I hope' - Placebo",
    "'Tu me estas dando mala vida' - Mano Negra",
    "'But I could wait a thousand years or more'- Sivert Hoyem",
    "'Ain\'t no sunshine when she\'s gone' - Bill Whiters",
    "'Now and then I think of when we were together' - Gotye",
    "'Oh, Sinnerman, where you gonna run to?' - Nina Simone",
    "'Je veux d\'l\'amour, d\'la joie, de la bonne humeur'- Zaz",
    "'If every fool wore a crown I would be a king and not a clown'- Paolo Nutini",
    "'Do I wanna know?'- Arctic Monkeys",
    "'Si no fuera por la música, no nos salva ni Tarzán' - Pedro y Pablo"
  ];
  
function newQuote (index) {
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  quoteText = quotes[randomNumber];
  $("#quoteDisplay").html(quoteText);
}
  
$("#newQuote").click(newQuote);

newQuote();
});

$("#tweet").click(function () {
		var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = 'http://twitter.com/share?text=' + quoteText + '&hashtags=music,quotes,lyrics',
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
	    window.open(url, 'twitter', opts);
	});
