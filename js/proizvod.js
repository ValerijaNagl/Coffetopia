$('.kafa').click(function() {
  let products = document.getElementsByClassName('coffee-box');
  for (let i = products.length - 1; i >= 0; --i) {
    products[i].onclick = function() {
      let src = this.getElementsByTagName('img')[0].src;
      let str = src.substring(src.indexOf('images/') + 7, src.lenght);
      let pic = str.substring(0, str.length - 5);
      let nameOfProduct = $(this).closest(this).find("h3").text();
      let price = $(this).closest(this).find("h4").text();
      document.location.href = 'proizvod.html#' + pic + "," + nameOfProduct + "," + price;
      location.reload();
    }
  }
});


function loadProduct() {
  var uri = window.location.href;
  if (uri.indexOf("#") > 0) {
    let info = uri.substring(uri.indexOf("#") + 1, uri.length);
    let infoArray = info.split(",");
    let img = infoArray[0];
    let nameOfProduct = infoArray[1];
    let price = infoArray[2];
    if (nameOfProduct.includes('%')) {
      let part1 = nameOfProduct.substring(0, nameOfProduct.indexOf('%'));
      let part2 = nameOfProduct.substring(nameOfProduct.indexOf('%') + 3, nameOfProduct.length);
      nameOfProduct = part1 + " " + part2;
    }
// if price is lower or not (if product is on sale or not)
    if (price.length > 7) {
      let price1 = price.substring(0, 6);
      let price2 = price.substring(6, price.length);

      let proizvodHtml = '<div class="col-lg-6 slika"><img id="slika" src="images/' + img + '2.png" alt="kafa1" class="kafa"></div><div class="col-lg-6"><h3 class="text">' +
        nameOfProduct + '</h3><h4 class="red-text text">' + price1 + '<h4 class="sale-price text">' + price2 + '</h4><p class="text">Kapsule sa kafom kompatibilne sa Nespresso® aparatima.Espreso sa intenzivnim i bogatim ukusom i veoma bogatom kremom.</p><img src="images/ukus.png" alt="kafa1" class="karakteristike-kafe-slika"><button type="button" class="btn btn-secondary btn-sm dugme" id="btn-cart">Dodaj u korpu</button>  <button type="button" class="btn btn-secondary btn-sm dugme" id="btn-learn-more">Saznaj više o proizvodu</button></div>';

      document.getElementById('proizvod').innerHTML += proizvodHtml;
      let image = document.getElementById("slika");
    } else {

      let proizvodHtml = '<div class="col-lg-6 slika"><img id="slika" src="images/' + img + '2.png" alt="kafa1" class="kafa"></div><div class="col-lg-6"><h3 class="text">' +
        nameOfProduct + '</h3><h4 class="text">' + price + '</h4><p class="text">Kapsule sa kafom kompatibilne sa Nespresso® aparatima.Espreso sa intenzivnim i bogatim ukusom i veoma bogatom kremom.</p><img src="images/ukus.png" alt="kafa1" class="karakteristike-kafe-slika"><button type="button" class="btn btn-secondary btn-sm dugme" id="btn-cart">Dodaj u korpu</button>  <button type="button" class="btn btn-secondary btn-sm dugme" id="btn-learn-more">Saznaj više o proizvodu</button></div>';

      document.getElementById('proizvod').innerHTML += proizvodHtml;
    }

    let image = document.getElementById("slika");

    image.addEventListener('mouseout', function() {
      image.src = "images/" + img + "2.png";
    });
    image.addEventListener('mouseover', function() {
      image.src = "images/" + img + ".jpg";
    });

    $('#btn-learn-more').click(function() {
        document.location.href = 'our-coffees.html#';
    });

  }
}



window.onload = loadProduct();
