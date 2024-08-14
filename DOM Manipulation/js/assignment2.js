window.onload=function(){

  document.getElementById("hide").style.visibility = "hidden";



  document.getElementById("highlight").addEventListener("click", function(){
    var all = document.getElementsByTagName("BODY")[0];
    recursiveFunction(all);
    document.getElementById("highlight").style.visibility = "hidden";
    document.getElementById("hide").style.visibility = "visible";
  });



  document.getElementById("hide").addEventListener("click", function(){
    var elements = document.getElementsByClassName("hoverNode");
    while(elements.length > 0){
       elements[0].parentNode.removeChild(elements[0]);
    }
    document.getElementById("highlight").style.visibility = "visible";
    document.getElementById("hide").style.visibility = "hidden";
  });

}

function recursiveFunction(node) {
  if(node.className != "hoverNode" && node.nodeType == 1){
    var child = document.createElement("SPAN");
    child.setAttribute("class", "hoverNode");
    var childText = document.createTextNode(node.nodeName);
    child.appendChild(childText);
    node.appendChild(child);
    child.addEventListener("click", function(){
      alert("Tag: "+ node.nodeName +"\nClass: "+ node.className +"\nID: "+ node.id +"\ninnerHTML: "+ node.innerHTML);
    });
    if(node.hasChildNodes()){
      var children = node.children;
      for (var i = 0; i < children.length; i++){
        recursiveFunction(children[i]);
      }
    }
  }
}
