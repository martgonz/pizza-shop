
//business logic
function Order(pizza){

}

//Pizza object constructor
  function Order(size,toppings,cost) {
  this.size = size;
  this.toppings = toppings;
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
Order.calculateCost.balanceDue= function() {
  return this.size + this.cost + this.toppings + this.toppings.length;
};

//Interface logic
$(document).ready(function(){

  $("#cost").submit(function(event){
    event.preventDefault();
  });
  var size = $("input:radio[name=size]:checked").val();
  pizza.size = size;
  var toppings = [];
  $("input:checkbox[name=toppings]:checked").each(function() {
toppings.push($(this).val());
});

  console.log(size);

  //("Your Pizza Total is:"+ pizza.cost);
  //console.log("hi");
  //$("#cost").click(function() {


    // if (size === "small") {
    //   $("#small").show();
    //   console.log("hi");
  //   }
  //   else if (size === "medium") {
  //     $("#medium").show();
  //     console.log("hello");
  //   }
  //  $("input:checkbox[name=toppings]:checked").each(function() {
  //     var toppings = $(this).val();
  //     pizza.toppings.push(toppings);
  //     console.log($(pizza).val());
  // });
    });
