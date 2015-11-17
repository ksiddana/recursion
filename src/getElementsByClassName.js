// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  
  	console.log("----------- Using Recursion -------------");
	var expectedNodeList = [];
	
  	function recursiveCall(node) {
	  if (node.className === className || node.classList.contains(className)) {
            console.log("Node:----: ", node);
		    expectedNodeList.push(node);
	  }
	  
      var children = node.children;
	  for (var i = 0; i < children.length; i++) {
		recursiveCall(children[i]);
	  }
    }
  	
    recursiveCall(document.body);
  	console.log(expectedNodeList);
  	return expectedNodeList;
  	
};

