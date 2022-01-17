
//document.querySelector(".btn").addEventListener("click",function(){document.querySelector(".p").append(document.querySelector(".inpt").value+"\n");})
//document.querySelector(".p").addEventListener("click",function(){document.querySelector(".p").remove(document.querySelector(".p").innerText);})

document.querySelector(".btn").addEventListener("click",function(){node = document.getElementById('c');
node.insertAdjacentHTML('afterend', '<div class="n"><h3></h3></div>');
document.querySelector(".btn").addEventListener("click",function(){document.querySelector(".n").innerHTML=("<textarea>" + document.querySelector(".inpt").value+ "</textarea>   <button >Delete</button>\n");})
})
document.querySelector(".n").addEventListener("click",function(){
  //document.querySelector(".n").innerText="bye"
alert("clicked");})

