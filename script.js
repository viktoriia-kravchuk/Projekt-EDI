$(document).ready(function(){
    function connect(){
        var method="GET";
        var URL="http://cors-anywhere.herokuapp.com/http://manishtamaria.com/storerental/api/v1/books";
        var request= new XMLHttpRequest;
        request.open(method,URL);
        request.onreadystatechange=function(){display(this)}
        request.send();
    }
    function display(x){
        if(x.readyState==4 && x.status==200){
            var data=x.responseText;
            var books=JSON.parse(data);
            for (var i=0;i<30;i++){
                var parentDiv=document.createElement('div');
                var childDiv=document.createElement("div");
                var thumbnail=document.createElement("img");
                var description=document.createElement("p");
    
                parentDiv.className="card";
                parentDiv.style.width="19em";
                parentDiv.style.height="25em";
               
                thumbnail.className="card-img-top";
                thumbnail.src=books[i].image.imageUrl;
    
                parentDiv.appendChild(thumbnail);
               
                childDiv.className="card-img-overlay";
                childDiv.style.visibility="hidden";
                
                description.className="card-text"
                description.innerHTML=books[i].description;
    
                childDiv.appendChild(description);
                parentDiv.append(childDiv)
    
                document.getElementById("container").appendChild(parentDiv);  
            }
            console.log("all done")
    
            
        }
        $(".card").hover( 
            function(){
                var $this = $(this);
                var currentElement = $this[0].lastElementChild;
                $(currentElement).css("visibility","visible")
                $(currentElement).css("background","rgba(0,0,0,0.7)")
                $(currentElement).css("color","white")
                $(currentElement).css("font-size","small")
                
        },
        function()
        {
            var $this = $(this);
            $($this[0].lastElementChild).css("visibility","hidden")
           
        });
        }
    
    connect();
    })
