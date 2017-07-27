
//Pizza object constructor
function Order() {
  this.size = "";
  this.toppings = [];
  this.cost = 0;
}

//Pizza pricing set with conditions.
Order.prototype.calculateCost = function () {
  //return this.size + this.cost;
  if (this.size === "small"){
    this.cost += 15;
  }
  else if (this.size === "medium"){
    this.cost += 17;
  }
  else if (this.size === "large"){
    this.cost += 18;

  }else if (this.size === "jumbo"){
    this.cost += 19;
  }
  this.cost += this.toppings.length * 2;
}

//Interface logic
$(document).ready(function(){

  $("#cost").click(function(){
    var size = $("input:radio[name=size]:checked").val();
    var pizza = new Order();
    pizza.size = size;
    $("input:checkbox[name=toppings]:checked").each(function() {
      pizza.toppings.push($(this).val());
    });
    pizza.calculateCost();
    console.log(pizza);
    $("#balance").text("$" + pizza.cost);
  });
});


//  $("input:checkbox[name=toppings]:checked").each(function() {
//     var toppings = $(this).val();
//     pizza.toppings.push(toppings);
//     console.log($(pizza).val());
// });
