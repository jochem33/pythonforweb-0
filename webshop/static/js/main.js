thingsincart = document.getElementById('inwinkelwagen');

var cart = []

function reloadcart() {
  cart = []
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
     cart.push( localStorage.getItem( localStorage.key( i ) ) );
     console.log(localStorage.getItem( localStorage.key( i ) ))
   }

   thingsincart.innerHTML = cart.length;

}

function addtocart(item) {
  thingsincart.innerHTML = parseInt(thingsincart.innerHTML) + 1;
  console.log("added " + item + " to cart");

  cart.push(item);
  console.log(cart);

  localStorage.setItem((cart.length + 1), item);

  reloadcart();
}

function printcart() {
  table = document.getElementById('carttable');
  var cartdict = {};
  var item = "";

  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    item = localStorage.getItem( localStorage.key( i ) );
    // table.innerHTML = table.innerHTML + "<li>" + item + "</li>";
    if (item in cartdict) {
      cartdict[item]++;
    } else {
      cartdict[item] = 1;
    }

   }

   console.log(cartdict);

   for (var key in cartdict) {
     table.innerHTML = "<div class=\"tablerow\"><label class=\"cartlabel\" for=\"" + key + "\">" + key + "</label><input class=\"aantalincart\" type=\"number\" name=\"points\" step=\"1\" value=\"" + cartdict[key] + "\"></div>" + table.innerHTML;
   }

}



function clearcart() {
  localStorage.clear();
  location.reload();
}

reloadcart();
printcart();
