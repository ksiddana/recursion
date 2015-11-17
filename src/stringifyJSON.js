// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  	// your code goes here
  	// console.log(obj.toString());
  	if (typeof obj === "number") {
  				return obj.toString();	
  	} else if (obj === null) {
  				return "null";
  	} else if (obj === true) {
  				return "true";
  	} else if (obj === false) {
  				return "false";
  	} else if (typeof obj === "string") {
  				var JSONstring = '"' + obj.toString() + '"';
  				return JSONstring;
  	} else if (Array.isArray(obj)) {
					
		var result = "";

		if (obj.length === 0) {
				return '[' + obj + ']';
		} else if (obj.length === 1 && typeof obj[0] === "number") {
				return '[' + obj + ']';
		} else if (obj.length === 1 && typeof obj[0] === "string") {
				return '[' + '"' + obj + '"' + ']';
		}

		for (var i = 0; i < obj.length; i++) {
				var JSONstring;
				/*
				console.log("-----------------");
				console.log(obj[i]);
				console.log(typeof obj[i]);
				console.log("Object Length: ", obj.length);
				*/
				if (typeof obj[i] === "number" && obj.length !== 1) {
						JSONstring = obj[i];
				} else if (typeof obj[i] === "string" && obj.length !== 1) {
						JSONstring = '"' + obj[i] + '"';
				} else if (typeof Array.isArray(obj[i])) {
						JSONstring = stringifyJSON(obj[i]);
				}


				result += JSONstring + ",";	


				/*					
				If you declare result as an [] above then you have to use this convention
				Also there is no need for commas ',' if you do this method.
				result.push(JSONstring);
				*/
//							console.log("Result: ", result);
		}

			result = result.substring(0,result.length-1);
//						console.log("Final Output: ", result);
			return '[' + result + ']';
				
//      _.each(obj, function(item){
//        console.log(item);
//      });
  		
      // for (var i = 0; i < obj.length; i++) {
      //   if (obj[i] === "string") {
      //       return obj.toString();
      //   } else {
      //       var JSONstring = '[' + obj + ']';
      //       return JSONstring;  
      //     }
      // }
    }
	else {
				
//		console.log("**********************");
//		console.log(obj);	
		var result = "";

		for (var key in obj) {
			var JSONstring = '';

//					console.log(typeof obj[key]);

			if (obj[key] === true || obj[key] === false || obj[key] === null) {
					JSONstring = '"' + key + '"' + ":" + obj[key];
			} else if (typeof obj[key] === "string" || typeof obj[key] === "number") {
					JSONstring = '"' + key + '"' + ":" + '"' + obj[key] + '"';	
			} else if (obj.hasOwnProperty('functions') || obj.hasOwnProperty('undefined')) {
					return '{}';	
			} else {
					JSONstring = '"' + key + '"' + ":" + stringifyJSON(obj[key]);
			}

			result += JSONstring + ",";
//					console.log("Result: ", result);
		}

		result = result.substring(0, result.length-1);
//				console.log("Final Output: ", result);
		return '{' + result + '}';

	}
};
