convertDate = function (time){
		var date=new Date(e.currentTime);
    
    
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 	'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   var dayOfTheWeek=days[date.getDay()];
   var monthOfYear=months[date.getMonth()];
   
   var hours=date.getHours();
   var minutes=date.getMinutes();
   
   return dayOfTheWeek+ " "+date.getDay()+" "+monthOfYear+" at "+hours+"h"+minutes+ "min";
  
}
