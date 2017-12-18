
// back-end logic
function Order(style, bread, size, quantity) {
   this.piStyle = style;
   this.piBread = bread;
   this.piSize = size;
   this.piQuantity = quantity;
   this.piToppings = 0;
   this.piToppingNames = [];
}

Order.prototype.totalPrice = function() {
   var total = '$' + ((this.piStyle + this.piBread + this.piSize + this.piToppings) * this.piQuantity);
   return total;
};

 Order.prototype.addTopping = function(value, name) {
  this.piToppings += value;
  this.piToppingNames.push(name);
};

 Order.prototype.toppingDescription = function() {
   return this.piToppingNames.join(', ');
}

// front-end logic
$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#receipt").empty(newOrder);
    $('#container1').slideUp();
    $('#container2').show(1000);























// front-end logic
