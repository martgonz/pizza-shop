//var pizzaPrice = {
//   "small": 15.00;
//   "medium": 17.00;
//   "large": 18.00;
//   "jumbo": 19.00;
// };
// var toppings
//business logic
  function Pizza (size,toppings,cost) {
  this.size = "";
  this.toppings = [];
  this.cost = 0;
}

Order.prototype.calculatecCost = function () {
  return this.size + this.cost;
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
  this.cost += this.toppings.length* 2;


$(document).ready(function(){

}
  var pizza = newPizza (size);
  order.calculateCost();
  $("#cost").append ("Your Pizza Total is:"+ pizza.cost);

  // $("#sizeSubmit").click(function() {
  //   var size = $("input:radio[name=size]:checked").val();
  //   pizza.size = size;
  //   console.log(size);
  //   if (size === "small") {
  //     $("#small").show();
  //     console.log("hi");
  //   }
  //   else if (size === "medium") {
  //     $("#medium").show();
  //     console.log("hello");
  //   }

  });

  //  $("input:checkbox[name=toppings]:checked").each(function() {
  //     var toppings = $(this).val();
  //     pizza.toppings.push(toppings);
  //     console.log($(pizza).val());
  // });


});
