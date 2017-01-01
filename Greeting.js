    // Using document by id.

     if (new Date().getHours() < 10) 
     {
     document.getElementById("intro").innerHTML = "Good morning";
     } 
     else if (new Date().getHours() < 20) 
     {
     document.getElementById("intro").innerHTML = "Good afternoon";
     } 
     else 
     {
     document.getElementById("intro").innerHTML = "Good evening";
     }


   