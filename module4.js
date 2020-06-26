
	(function (window) {
    	var helloSpeaker = {};
	var name = new Array();
	name[0]= "john";
	name[1]= "Joseph";
	name[2]= "jonathon";
	name[3]= "Jerry";
	name[4]= "Christ";
	name[5]= "Ronaldo";
	name[6]= "Messi";
	
	for (i=0; i<name.length; i++)
	    {
		if (name[i].charAt(0) == "j" || name[i].charAt(0) == "J")
		   {
			console.log("Hello "+ name[i]);
		    }
		else{
			console.log("Goodbye "+ name[i]);
		     }
	     }
	}) (window);
