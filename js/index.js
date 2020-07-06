$("#btn2").click(function() {
    document.getElementById("added2").style.visibility = "visible";
});

$("#btn1").click(function() {
    document.getElementById("added1").style.visibility = "visible";
});

$("#btn3").click(function() {
    document.getElementById("added3").style.visibility = "visible";
});


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
       console.log(h4);
      }
  }
});
