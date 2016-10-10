//ques-1
 
var answer1 = function(){
	var total=0;
	var allPrices = items.map(function(item) {
 		return item.price;
 	});
 	var addToTotal = function(price){
		total +=  price;
	}
	allPrices.forEach(addToTotal);
	var average = total/allPrices.length;
	var resultValue = average.toFixed(2);
	var resulti = "The average price is $"+resultValue;

	var result1 = document.getElementById("answer1");
	result1.innerHTML = resulti;
}

answer1();

	
// ques-2
var answer2 = function(){
 	var givenFilter = function(items){
 	var price = items.price;
 		if(price>14&&price<18){
 			return true;
 		}else{ return false;}
 	}
 	var sortedItems = items.filter(givenFilter);
 	var itemName = function(sortedItem){
 		var name = sortedItem.title;
 		return name;

 	}

 	var nameList = sortedItems.map(itemName);
 	var nameListHtml = nameList.join("<br>");
 	var result2 = document.getElementById("answer2");
 	result2.innerHTML = nameListHtml;
}
answer2();
//ques-3
var answer3 = function(){
	var searchCurrencyCode = function(item){
		if(item.currency_code === "GBP"){
			return true;
		}else return false;
	}
	var requiredCurrencyCode = items.filter(searchCurrencyCode);
	var name;
	var cost;
	var statements =[];
	var getData = function(object){
		name = object.title;
		cost = object.price;
		var statement = name + "costs &pound;" +cost;
		statements.push(statement);	
	}
		
	var requiredFields = requiredCurrencyCode.forEach(getData);
	var result3 = document.getElementById("answer3");
	result3.innerHTML = statements;
}
answer3();
//ques-4
var answer4 = function(){
	var getMaterialsMadeOfWood = function(material) {
		if(material == 'wood') {
			return true;
		}
		return false;
	}

	var getItemsMadeOfWood = function(item){
		var materialsMadeOfWood = item.materials.filter(getMaterialsMadeOfWood);

		if(materialsMadeOfWood.length == 0) {
			return false;
		}

		return true;
	}

	var itemsMadeOfWood = items.filter(getItemsMadeOfWood);
	
	var itemName =[];
	var getItemName = function(itemMadeOfWood){
		name = itemMadeOfWood.title;
		itemName.push(name);
	}

	var nameOfItems = itemsMadeOfWood.forEach(getItemName);
	var itemList = itemName.join("<br>");
	var result4 = document.getElementById("answer4");
	result4.innerHTML = itemList;
}
answer4();
//ques5
var answer5 = function(){
	var getMaterials = function(item){
		var listOfMaterials = item.materials;
		if (listOfMaterials.length>=8) {
			return true;
		}else { return false;}
	}
	var allMaterials = items.filter(getMaterials);
	var statements=[];
	var getRequiredFields = function(object){
		var title = object.title;
		var materials = object.materials;
		var statement = title + materials;
		statements.push(statement);
	}
	var requiredFields = allMaterials.map(getRequiredFields);
	var statementList = statements.join("<br>");
	var result5 = document.getElementById("answer5");
	result5.innerHTML = statementList;
}
answer5();
//ques6
var answer6 = function(){
	var checkWhoMade = function(item){
		var whoMade = item.who_made;
		if(whoMade =="i_did"){
			return true;
		}else {return false;}
	}
	var sellers = items.filter(checkWhoMade);
	var requiredresult = sellers.length;
	var resultStatement = requiredresult +" were made by sellers";
	var result6 = document.getElementById("answer6");
	result6.innerHTML = resultStatement;
}
answer6();

































