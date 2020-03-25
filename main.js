function newElement() {
    var list = document.createElement("p");
    var span = document.createElement("SPAN");
    var btn = document.createTextNode("\u00D7");
    var myInput = document.getElementById("myInput").value;
    var t = document.createTextNode(myInput);
    list.appendChild(t);
    span.appendChild(btn);
    list.appendChild(span);
    span.className = "close";
    list.className = "strike";
    

    if (myInput === '') {
        alert("YOU MUST WRITE SOMETHING!");
    }

    else {
        document.getElementById("myUL").appendChild(list);
    }

    document.getElementById("myInput").value = "";

    var closebtns = document.getElementsByClassName("close"); 

    var i; 

    for(i = 0; i < closebtns.length; i++){
        closebtns[i].addEventListener("click", function(){
           this.parentElement.style.display = "none";
        });
    }
 
    var strike = document.getElementsByClassName("strike"); 
    for(var i = 0; i < strike.length; i++){
        strike[i].addEventListener("click", function(){
           list.style.setProperty("text-decoration", "line-through");
        });
    }

}

