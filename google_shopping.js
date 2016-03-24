var data = require("./products.json")

// Write your solutions below

// This one works!
// // 1.
// // var count = 0;

// // for (var i = 0; i < data['items'].length; i++) {
// // 	if (data['items'][i].kind === 'shopping#product') {
// // 		count++;
// // 	}
// // }

// // console.log(count);

// This one works!
// // 2.
// for (var i = 0; i < data['items'].length; i++) {
// 	if ((data['items'][i]['product']['inventories'][0].availability) === 'backorder') {
// 		console.log(data['items'][i]['product'].title);
// 	}
// }

// This one doesn't work. I'm not sure how to get it recognize when there is more than one array that contains a link within the images array.
// I'm tired, I give up.
// 3.
// var j;
// for (var i = 0; i < data['items'].length; i++) {
// 	if ((data['items'][i]['product']['images'][j].link) > 1) {
// 		console.log(data['items'][i]['product'].title);
// 	}
// }




// This one works!
// // 4.
// // for (var i = 0; i < data['items'].length; i++) {
// // 	if (data['items'][i]['product'].brand === 'Canon') {
// // 		console.log(data['items'][i]['product'].title);
// // 	}
// // } 


// This one doesn't work. When I console.log(data['items'][i]['product'].brand === 'Canon') and console.log(data['items'][i]['product']['author'].name == "eBay")
// they both print correctly, but iTerm seems to be having a problem with the && in the if statement. I can't figure it out :'(
// 5.
// for (var i = 0; i < data['items'].length; i++) {
// 	if (data['items'][i]['product'].brand === 'Canon') && (data['items'][i]['product']['author'].name == "eBay") {
// 		console.log(data['items'][i]['product'].title);
// 	}
// }


// This one works!
// 6.
// for (var i = 0; i < data['items'].length; i++) {
// 	console.log(data['items'][i]['product'].title);
// 	console.log(data['items'][i]['product'].brand);
// 	console.log(data['items'][i]['product']['inventories'][0].price);
// 	console.log(data['items'][i]['product']['images'][0].link);
// }


