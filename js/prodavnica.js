// if you click on product's picture, you will go to product.html where you can learn more about the selected product
$('.kafa').click(function() {
  console.log("usao sam ovde");
  let products = document.getElementsByClassName('coffee-box');
  for(let i = products.length - 1;i >= 0 ; --i) {
      products[i].onclick = function() {
       let src = this.getElementsByTagName('img')[0].src;
       let str = src.substring(src.indexOf('images/')+7, src.lenght);
       let pic = str.substring(0, str.length-5);
       let nameOfProduct = $(this).closest(this).find("h3").text();
       let price = $(this).closest(this).find("h4").text();
       document.location.href = 'product.html#' +  pic + "," + nameOfProduct + "," + price;
      }
  }
});

// imitates adding product to cart
$("#btn2").click(function() {
    document.getElementById("added2").style.visibility = "visible";
});

$("#btn1").click(function() {
    document.getElementById("added1").style.visibility = "visible";
});

$("#btn3").click(function() {
    document.getElementById("added3").style.visibility = "visible";
});

$("#btn4").click(function() {
    document.getElementById("added4").style.visibility = "visible";
});


$("#btn5").click(function() {
    document.getElementById("added5").style.visibility = "visible";
});

$("#btn6").click(function() {
    document.getElementById("added6").style.visibility = "visible";
});

$("#btn14").click(function() {
    document.getElementById("added14").style.visibility = "visible";
});

$("#btn7").click(function() {
    document.getElementById("added7").style.visibility = "visible";
});

$("#btn8").click(function() {
    document.getElementById("added8").style.visibility = "visible";
});

$("#btn9").click(function() {
    document.getElementById("added9").style.visibility = "visible";
});

$("#btn10").click(function() {
    document.getElementById("added10").style.visibility = "visible";
});

$("#btn11").click(function() {
    document.getElementById("added11").style.visibility = "visible";
});

$("#btn12").click(function() {
    document.getElementById("added12").style.visibility = "visible";
});

$("#btn13").click(function() {
    document.getElementById("added13").style.visibility = "visible";
});
