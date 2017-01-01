<div id="overlay">
     <div>
          <p>Content you want the user to see goes here.</p>
     </div>
</div>

<!-- CSS -->
#overlay {
     visibility: hidden;
     position: absolute;
     left: 0px;
     top: 0px;
     width:100%;
     height:100%;
     text-align:center;
     z-index: 1000;
}


#overlay div {
     background-image:url(background-trans.png);
     width:300px;
     margin: 100px auto;
     background-color: #fff;
     border:1px solid #000;
     padding:15px;
     text-align:center;
}




body {
     height:100%;
     margin:0;
     padding:0;
}

<!-- Javascript -->

function overlay() 
{
    el = document.getElementById("overlay");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}
<!-- Somewhere on page add -->

<a href='#' onclick='overlay()'>Click here to show the overlay</a>

Click here to [<a href='#' onclick='overlay()'>close</a>]

