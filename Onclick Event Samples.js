<!DOCTYPE html>
<html>
<body>

<button onclick="getElementById('demo').innerHTML=Date()">The time is?</button>

<p id="demo"></p>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<button onclick="this.innerHTML=Date()">The time is?</button>

</body>
</html>



<!DOCTYPE html>
<html>
<body>

<p>Click the button to display the date.</p>

<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() 
{
    document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

</body>
</html> 



// Common HTML Events
// Event 	    Description
// onchange 	An HTML element has been changed
// onclick 	    The user clicks an HTML element
// onmouseover 	The user moves the mouse over an HTML element
// onmouseout 	The user moves the mouse away from an HTML element
// onkeydown 	The user pushes a keyboard key
// onload 	    The browser has finished loading the page