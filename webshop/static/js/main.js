var thingsincart = document.getElementById('inwinkelwagen');
var landendict = {"Afghanistan":"a","Albania":"a","Algeria":"a","Andorra":"a","Angola":"a","Antigua and Barbuda":"a","Argentina":"a","Armenia":"a","Australia":"a","Austria":"a","Azerbaijan":"a","Bahamas":"a","Bahrain":"a","Bangladesh":"a","Barbados":"a","Belarus":"a","Belgium":"a","Belize":"a","Benin":"a","Bhutan":"a","Bolivia":"a","Bosnia and Herzegovina":"a","Botswana":"a","Brazil":"a","Brunei":"a","Bulgaria":"a","Burkina":"a","Burundi":"a","Cabo":"a","Cambodia":"a","Cameroon":"a","Canada":"a","Chad":"a","Chile":"a","China":"a","Colombia":"a","Comoros":"a","Republic of the Congo":"a","Costa Rica":"a","Cote d'Ivoire":"a","Croatia":"a","Cuba":"a","Cyprus":"a","Czech Republic":"a","Denmark":"a","Djibouti":"a","Dominica":"a","Dominican Republic":"a","Ecuador":"a","Egypt":"a","El Salvador":"a","Equatorial Guinea":"a","Eritrea":"a","Estonia":"a","Eswatini":"a","Ethiopia":"a","Fiji":"a","Finland":"a","France":"a","Gabon":"a","Gambia":"a","Georgia":"a","Germany":"a","Ghana":"a","Greece":"a","Grenada":"a","Guatemala":"a","Guinea":"a","Guinea-Bissau":"a","Guyana":"a","Haiti":"a","Honduras":"a","Hungary":"a","Iceland":"a","India":"a","Indonesia":"a","Iran":"a","Iraq":"a","Ireland":"a","Israel":"a","Italy":"a","Jamaica":"a","Japan":"a","Jordan":"a","Kazakhstan":"a","Kenya":"a","Kiribati":"a","Kosovo":"a","Kuwait":"a","Kyrgyzstan":"a","Laos":"a","Latvia":"a","Lebanon":"a","Lesotho":"a","Liberia":"a","Libya":"a","Liechtenstein":"a","Lithuania":"a","Luxembourg":"a","Macedonia": "a","Madagascar":"a","Malawi":"a","Malaysia":"a","Maldives":"a","Mali":"a","Malta":"a","Marshall Islands":"a","Mauritania":"a","Mauritius":"a","Mexico":"a","Micronesia":"a","Moldova":"a","Monaco":"a","Mongolia":"a","Montenegro":"a","Morocco":"a","Mozambique":"a","Myanmar":"a","Namibia":"a","Nauru":"a","Nepal":"a","Netherlands":"a","New Zealand":"a","Nicaragua":"a","Niger":"a","Nigeria":"a","North Korea":"a","Norway":"a","Oman":"a","Pakistan":"a","Palau":"a","Palestine":"a","Panama":"a","Papua New Guinea":"a","Paraguay":"a","Peru":"a","Philippines":"a","Poland":"a","Portugal":"a","Qatar":"a","Romania":"a","Russia":"a","Rwanda":"a","Saint Kitts and Nevis":"a","Saint Lucia":"a","Saint Vincent and the Grenadines":"a","Samoa":"a","San Marino":"a","Sao Tome and Principe":"a","Saudi Arabia":"a","Senegal":"a","Serbia":"a","Seychelles":"a","Sierra Leone":"a","Singapore":"a","Slovakia":"a","Slovenia":"a","Solomon Islands":"a","Somalia":"a","South Africa":"a","South Korea":"a","South Sudan":"a","Spain":"a","Sri Lanka":"a","Sudan":"a","Suriname":"a","Swaziland":"a","Sweden":"a","Switzerland":"a","Syria":"a","Taiwan":"a","Tajikistan":"a","Tanzania":"a","Thailand":"a","Timor":"a","Togo":"a","Tonga":"a","Trinidad":"a","Tunisia":"a","Turkey":"a","Turkmenistan":"a","Tuvalu":"a","Uganda":"a","Ukraine":"a","United Arab Emirates (UAE)":"a","United Kingdom (UK)":"a","United States of America (USA)":"a","Uruguay":"a","Uzbekistan":"a","Vanuatu":"a","Vatican":"a","Venezuela":"a","Vietnam":"a","Yemen":"a","Zambia":"a"};

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
     table.innerHTML = "<div class=\"tablerow\"><label class=\"cartlabel\" for=\"" + key + "\">" + key + "</label><input class=\"aantalincart\" type=\"number\" name=\"" + key + "\" step=\"1\" value=\"" + cartdict[key] + "\" id=\"" + key + "\"></div>" + table.innerHTML;
   }

}



function clearcart() {
  localStorage.clear();
  location.reload();
}

reloadcart();
printcart();

function checkcountry() {
  inputveld = document.getElementById('landinput');
  gekozenland = inputveld.value;


  if (gekozenland in landendict) {
    document.checkoutformid.submit();
  } else {
    document.getElementById('errormessage').innerHTML = "Please fill in a valid country";
  }

}
