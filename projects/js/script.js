$(document).ready(function(){
	var player = document.getElementById("player");
// 	var map = [];

// 	map[0] = "01 - Is This It.mp3";
// 	map[1] = "02 - The Modern Age.mp3";
// 	map[2] = "03 - Soma.mp3";
// 	map[3] = "04 - Barely Legal.mp3";
// 	map[4] = "05 - Someday.mp3";
// 	map[5] = "06 - Alone, Together.mp3";
// 	map[6] = "07 - Last Night.mp3";
// 	map[7] = "08 - Hard To Explain.mp3";
// 	map[8] = "09 - When It Started.mp3";
// 	map[9] = "10 - Trying Your Luck.mp3";
// 	map[10] = "11 - Take It Or Leave It.mp3";
// 	console.log("hello");
// 	for(var i = 0; i < map.length; i++){
// 		$("#songList").append("<li><a href\"#play\">" + map[i] + "</a></li>");
// 	}

	$("#songList tr").each(function(index){
		$(this).dblclick(function(){
			var song = $(this).find("td:last").text();

			$("source").attr("src", song);
			player.load();
			player.play();
		});
	});
});


// helper function for cross-browser request object
function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e){
                return false;
            }
        }
    }
    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req .readyState == 4){
            return req.status === 200 ? 
                success(req.responseText) : error(req.status)
            ;
        }
    }
    req.open("GET", url, true);
    req.send(null);
    return req;
}