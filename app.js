$(function(){
    $("#hello").click(function(){
        console.log("hello, jQuery"); 

        $("#name").addClass("display-1");

        $("#photo").attr("src", "image/496be793-9a17-470f-933b-f0d0cae102ad.jpg");
    });

    $("#getdom").click(function(){
        var name = $("#name").html();
        console.log(name);   
    });

    $("#setdom").click(function(){
        $("#name").html("New Name");
    });
    $("#addhobby").click(function(){
        var newhobby = $("#newhobby").val();
        $("#hobby").append("<li>" + newhobby +"</li>");
        $("#newhobby").val("");
    });
    $("#clearhobby").click(function(){
        $("#hobby").empty("");
    });
});



// function hello(){
//     console.log("Hello, JS");   
// }

// function getDOM(){
//     document.getElementById("name").innerHTML;
//     console.log(name);
// }

// function setDOM(){
//     document.getElementById("name").innerHTML="kunita";
// }

// function addHobby(){
//     var newhobby = document.getElementById("newhobby").value;
//     console.log( newhobby);
//     document.getElementById("hobby").innerHTML += "<li>" + newhobby + "</li>";
// }

// function clearHobby(){
//     document.getElementById("hobby").innerHTML="";
// }




