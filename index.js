console.log("working");
$("button").click(function(){
    $("p").hide();
    // $("p").toggle();
})

$(".show").click(function(){
    $("p").show();
})

$(".print").click(function(){
$.ajax({
    url:"https://jsonplaceholder.typicode.com/todos/12",
    type :"GET",
    success:function(data){
console.log(data);
document.getElementById("head").innerText = data.title;
    }
})
})