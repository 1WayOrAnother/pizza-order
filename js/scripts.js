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

    var inputtedStyle = parseFloat($('#piStyle').val());
    var inputtedBread = parseFloat($('#piBread').val());
    var inputtedSize = parseFloat($('#piSize').val());
    var inputtedQuantity = parseFloat($('#piQuantity').val());

    var cartStyle = $('#piStyle option:selected').text();
    var cartBread = $('#piBread option:selected').text();
    var cartSize = $('#piSize option:selected').text();
    var cartQuantity = $('#piQuantity option:selected').text();

    var newOrder = new Order(inputtedStyle, inputtedBread, inputtedSize, inputtedQuantity);

    $('input[type=checkbox]:checked').each(function(index, checkbox) {
      newOrder.addTopping(parseFloat($(checkbox).val()), checkbox.name);
    });

    $('h4#receiptDescription').append('You ordered ' + cartQuantity + ' ' + cartSize + ' ' + cartBread + ' ' + cartStyle);

    $('h4#receiptToppings').append('with toppings: ' + newOrder.toppingDescription() + '.');

    $('h4#receiptTotal').append('Your total comes to ' + newOrder.totalPrice());
  });
});









// front-end logic
