var quotes=["One good thing about music, when it hits you, you feel no pain.-Bob Marley ","All our dreams can come true, if we have the courage to pursue them.-Walt Disney",
"Those who dare to fail miserably can achieve greatly.-John F. Kennedy",
"It is hard to fail, but it is worse never to have tried to succeed.- Theordore Roosevelt",
"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.-Harriet Tubman",
"Success is not final, failure is not fatal: it is the courage to continue that counts.-Winston Churchill",
 "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.-Henry Ford"];

$(".button").click(function(){
    var random = Math.floor(Math.random() * quotes.length);
    $(".Generate").text(quotes[random]);
});
