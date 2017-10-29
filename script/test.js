// var flag = false;
// window.onload = function() {
// 	if (flag) {return;}
// 	flag= true;
// 	alert("load over");
// }

function doubleStr(num) {
	if (num >= 0 && num <= 9) {
		return "0" + num;
	} else {
		return num;
	}
}

function getCurrentTime() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	return date.getFullYear() + seperator1
	       + doubleStr(date.getMonth()) + seperator1
	       + doubleStr(date.getDate()) + " "
	       + doubleStr(date.getHours()) + seperator2
	       + doubleStr(date.getMinutes()) + seperator2
	       + doubleStr(date.getSeconds());
}