function getHTTPObject(){
	if (typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function(){
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			} catch(e) {
				// statements
				console.log(e);
			}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			} catch(e) {
				// statements
				console.log(e);
			}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				// statements
				console.log(e);
			}
		}
	}
	return new XMLHttpRequest();
}