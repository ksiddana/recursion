// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) { 
/*//	var ptag = '<p class=""></p>';
		var expectedNodeList = [];
		console.log(typeof className);
//  var tmp = document.children();
		var tmp = document.getElementsByTagName("*");
//  var regex = new RegExp("(^|\s)" + className + "(\s|$)");
		var regex = new RegExp("(^|\s)" + className + "(\s|$)");
  	console.log(tmp);
		console.log(regex);
    
		for ( var i = 0; i < tmp.length; i++ ) {
	//		 	console.log(tmp[i]);
			if (regex.test(tmp[i].className)) {
				expectedNodeList.push(tmp[i]);
			}
		}
		console.log(expectedNodeList);
		return expectedNodeList;
	
//	console.log(document.getElementByTagName("p"));
//	expectedNodeList.push(document.getElementByTagName("p"));
//	console.log(expectedNodeList);*/
};

//------------------------------------------------------------------
/*var getElementsByClassName = function(className) {
	
  	console.log("---------------------");
	console.log("ClassName:", className);
	var expectedNodeList = [];
	var childNodes = document.body.childNodes;
	var nodes = document.body.children;
	
	if (document.body.className === className) {
		expectedNodeList.push(document.body);
	}
  	 
	for (var i = 0; i < nodes.length; i++) {
//		console.log(nodes[i].classList[1]);	
		  
	  for (var j = 0; j < nodes[i].classList.length; j++) {
			console.log(nodes[i].classList[j]);

			if (nodes[i].className === className || nodes[i].classList[j] === className) {
					expectedNodeList.push(nodes[i]);
			}
	  }
	  	  
	  if (nodes[i] !== null) {
			console.log("This " + nodes[i] + " element has Child Nodes");
			document.getElementsByClassName(className);
	  }
	}
	console.log("Output: ", expectedNodeList, "Length: ", expectedNodeList.length);
	return expectedNodeList;


};*/

//------------------------------------------------------------------

var getElementsByClassName = function(className) {
  
  	console.log("----------- Using Recursion -------------");
	var expectedNodeList = [];
//  	var children = document.body.children;
//    console.log(children);
	
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

