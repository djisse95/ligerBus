convertDate = function (time){
	var twenty=22*60*1000;
	var current=Date.now()+3600000-twenty;
	var delta=current-time;
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
