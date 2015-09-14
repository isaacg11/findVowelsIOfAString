var vowel = function(str) {
	var matches = str.match(/[aeiou]/gi);
	var count = matches ? matches.length: 0;

	document.getElementById('p').innerHTML = "'"+str+"contains"+count+"vowel(s)";
	return false;
};