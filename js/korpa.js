$('#delete1').click(function() {
  $("#item1").css("display", "none");
  let price = $('#price').html().split(" ");
  console.log(price[1]);
  let newPrice = parseInt(price[1]) - 300;
  console.log(newPrice);
  $('#price').text('Ukupno: ' + newPrice + ' rsd');
});

$('#delete2').click(function() {
  $("#item2").css("display", "none");
  $("#item2").css("display", "none");
  let price = $('#price').html().split(" ");
  console.log(price[1]);
  let newPrice = parseInt(price[1]) - 450;
  console.log(newPrice);
  $('#price').text('Ukupno: ' + newPrice + ' rsd');
});

$('#delete3').click(function() {
  $("#item3").css("display", "none");
  $("#item3").css("display", "none");
  let price = $('#price').html().split(" ");
  console.log(price[1]);
  let newPrice = parseInt(price[1]) - 450;
  console.log(newPrice);
  $('#price').text('Ukupno: ' + newPrice + ' rsd');
});

$('#delete4').click(function() {
  $("#item4").css("display", "none");
  $("#item4").css("display", "none");
  let price = $('#price').html().split(" ");
  console.log(price[1]);
  let newPrice = parseInt(price[1]) - 950;
  console.log(newPrice);
  $('#price').text('Ukupno: ' + newPrice + ' rsd');
});
