var sPizza = document.getElementById("sPizza");
var pPizza = document.getElementById("pPizza");
var total = 0;
//r1=rowposition for inserting menu items and additional charges
var r1 = 1;

function pizza_order() {
	var psPizza = 0;
	var piesize = document.querySelector('input[name="pizzasize"]:checked').value;
	var cruststyle = document.querySelector('input[name="crust"]:checked').value;
	var sauceoption = document.querySelector('input[name="sauce"]:checked').value;
	var cheeseoption = document.querySelector('input[name="cheese"]:checked').value;
	var meats = [];
	 $('input[name="meat"]:checked').each(function() {
		 meats.push($(this).val());
	 });
	var qmeats = meats.length;
	var veg = [];
	 $('input[name="veggie"]:checked').each(function() {
		 veg.push($(this).val());
	 });
	var qveg = veg.length;
	var table = document.getElementById("ordersummary");
	
	//Calculate pizza base price, add size name and price to order summary table
	if (piesize == "Personal"){
		psPizza += 6;
		total += 6;
	} else if (piesize == "Medium"){
		psPizza += 10;
		total += 10;
	} else if (piesize == "Large"){
		psPizza += 14;
		total += 14;
	} else if (piesize == "Extra Large"){
		psPizza += 16;
		total += 16;
	};
	
	var row = table.insertRow(r1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = piesize + " Pizza: " + cruststyle + " Crust, " + sauceoption + ", " + cheeseoption + ", Toppings: " + meats + "," + veg;
	cell2.innerHTML = psPizza.toFixed(2);
	r1 += 1;
	console.log("total: " + total);
	
	//Insert rows and increase total price for extras ordered
	console.log("crust" + cruststyle);
	console.log("r1: " + r1);
	if (cruststyle == "Cheese Stuffed"){
		var row = table.insertRow(r1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = "Cheese Stuffed Crust";
		cell2.innerHTML = "+3.00";
		total += 3;
		r1 += 1;
	};
	console.log("total: " + total);
	console.log(cheeseoption);
	console.log("r1: " + r1);
	if (cheeseoption == "Extra Cheese"){
		var row = table.insertRow(r1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = "Extra Cheese";
		cell2.innerHTML = "+3.00";
		total += 3;
		r1 += 1;
	};
	console.log("total: " + total);
	console.log("qmeats: " +qmeats);
	console.log("r1: " + r1);
	if (qmeats >= 2){
		var row = table.insertRow(r1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var pmeats = (qmeats-1).toFixed(2);
		cell1.innerHTML = "Extra Meats";
		cell2.innerHTML = ("+" + pmeats);
		total += (qmeats-1);
		r1 += 1;
	};
	console.log("total: " + total);
	console.log("qveg: " +qveg);
	console.log("r1: " + r1);
	if (qveg >= 2){
		var row = table.insertRow(r1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var pveg = (qveg-1).toFixed(2);
		cell1.innerHTML = "Extra Vegetables";
		cell2.innerHTML = ("+" + pveg);
		total += (qveg-1);
		r1 += 1;
	};
	console.log("total: " + total);
};


//Reset menu options for additional pizzas
$.fn.clearForm = function() {
	return this.each(function() {
		var type = this.type, tag = this.tagName.toLowerCase();
		if (tag == 'form')
			return $(':input',this).clearForm();
		if (type == 'text' || type == 'password' || tag == 'textarea')
			this.value = '';
		else if (type == 'checkbox') 
			this.checked = false;
		//else if (type == 'radio') 
			//this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = -1;
	});
};


function place_order() {  
	$("#fullmenu").hide();
	$("#popupBox").hide();
	$("#orderpizza").hide();
	$("#contactinfo").hide();
	//(not in use) $("#confirmationBox").show();
	alert("Thank you! Your pizza order has been placed. Please call the store with any questions or modifications.");
};

$(document).ready(function() {	
    
	$("#popupBox").hide();
	$("#checkout").hide();
	$("#confirmationBox").hide();
	
	$("#addpizza").click(function()
    {
        $("#addpizza").hide();
		$("#popupBox").show();
    });
    $("#morepizzaBtn").click(function()
    {
        $("#popupBox").hide();
		$("#addpizza").show();
		$(':input').clearForm();

    });

    $("#checkoutBtn").click(function()
    {
       $("#fullmenu").hide();
	   $("#popupBox").hide();
	   total = total.toFixed(2);
	   console.log("total: " + total);
	   document.getElementById("total").innerHTML = "<strong>$ " + total + "</strong>";
	   $("#checkout").show();
    });
	/*Additional functionality to add later (back button)
	$("#backtomenuBtn").click(function()
    {
        $("#fullmenu").show();
    });*/
});

