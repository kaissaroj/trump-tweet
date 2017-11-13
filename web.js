
var fa = document.createElement('style');
    fa.type = 'text/css';
    fa.textContent = '@font-face { font-family: i eat crayons; src: url("'
        + chrome.extension.getURL('fonts/i eat crayons.ttf')
        + '"); }';
document.head.appendChild(fa);
function changeFont(){
	var content = document.getElementsByClassName('content');
	for(var i=0; i<content.length;i++){
		var c = content[i].childNodes[0].nextElementSibling;
		var username =  c.querySelectorAll('.account-group .username');
		if(!!username && username[0].innerText == '@realDonaldTrump' ){
			var tweets = content[i].querySelectorAll('.js-tweet-text-container .TweetTextSize');
			for(var j =0; j < tweets.length;j++){
				tweets[j].style.fontFamily = "'i eat crayons', sans-serif";
				tweets[j].style.color = 'darkred';
				tweets[j].style.fontSize = '24px';
			}
		}
	}
}
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    changeFont();
    // ...
});
// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});