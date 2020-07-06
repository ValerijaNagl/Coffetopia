$('#carouselExample').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    console.log("IDX :  " + idx);

    var itemsPerSlide = 8;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');

            }
        }
    }
});


$('.d-block').click(function() {

  let products = document.getElementsByClassName('carousel-item');
  for (let i = products.length - 1; i >= 0; --i) {
      document.getElementById('proizvod').innerHTML = "";
      $('#proizvod').empty()
      products[i].onclick = function() {
      let src = this.getElementsByTagName('img')[0].src;
      let str = src.substring(src.indexOf('images/') + 7, src.lenght);
      let pic = str.substring(0, str.length - 4);
      let title = pic.toUpperCase()
      let proizvodHtml = '<div class="col-lg-6 slika"><img id="slika" src="images/' + pic + '2.png" alt="kafa1" class="kafa"></div><div class="col-lg-6"><h3 class="text">' +
          title + '</h3><p class="text">Kapsule sa kafom kompatibilne sa Nespresso® aparatima.Espreso sa intenzivnim i bogatim ukusom i veoma bogatom kremom.</p><img src="images/ukus.png" alt="kafa1" class="karakteristike-kafe-slika"><button type="button" class="btn btn-secondary btn-lg dugme" id="btn-cart">Dodaj u korpu</button>';

      document.getElementById('proizvod').innerHTML += proizvodHtml;
      let image = document.getElementById("slika");

      image.addEventListener('mouseout', function() {
        image.src = "images/" + img + "2.png";
      });
      image.addEventListener('mouseover', function() {
        image.src = "images/" + img + "3.png";
      });
    }
  }
});
