$(document).ready(function(){
function connect(){
    var method="GET";
    var URL="http://manishtamaria.com/storerental/api/v1/books";
    var request= new XMLHttpRequest;
    request.onreadystatechange=function(){display(this)}
    request.open(method,URL);
    request.send();
}
function display(x){
    if(x.readyState==4 && x.status==200){
        var data=x.responseText;
        var books=JSON.parse(data);
        for (var i=0;i<20;i++){
            var div1=document.createElement('div');
            div1.className="card";
            div1.style.width="18em";
            div1.style.height="25em";
                var pic=document.createElement("img");
                pic.className="card-img-top";
                pic.src=books[i].image.imageUrl;
                div1.appendChild(pic);
                var div2=document.createElement("div");
                div2.className="card-img-overlay";
                div2.style.visibility="hidden";
                var text=document.createElement("p");
                text.className="card-text"
                text.innerHTML=books[i].description;
                div2.appendChild(text);
                document.getElementById("container").appendChild(div1);  
        }

        
    }
    $(".card").hover( 
        function(){
            var $this = $(this);
            $($this[0].lastElementChild).css("visibility","visible")
            $($this[0].lastElementChild).css("background","rgba(0,0,0,0.7)")
            $($this[0].lastElementChild).css("color","white")
            $($this[0].lastElementChild).css("font-size","small")
            $(".card").append(div2);
    },
    function()
    {
        var $this = $(this);
        $($this[0].lastElementChild).css("visibility","hidden")
        $(".card").append(div2);
    });
    }

connect();
})