from flask import Flask, render_template, redirect, request
from login import LoginForm

from checkout import Checkoutform
from cart import CartForm


app = Flask(__name__)

app.config['SECRET_KEY'] = "A0Zr98j/6vC R~XHH!Hgb]LWX/,?RT"

productsandpricing = {"mocha":3, "pumpkin":2.4, "macchiato":5, "krokecino":3.4}
pricing = [3, 2.4, 5, 3.4]
btw = 1.21


@app.route('/', methods=['GET'])
def index():
    return redirect('/home')


@app.route('/home', methods=['GET'])
def home():
    return redirect('/home/btw-true')


@app.route('/home/btw-<btwtrue>', methods=['GET'])
def homebtw(btwtrue):
    if btwtrue == "true":
        return render_template('index.html', pricing=pricing, btw=btw)
    if btwtrue == "false":
        return render_template('index.html', pricing=pricing, btw=1)
    else:
        return render_template('index.html', pricing=pricing, btw=btw)


@app.route('/cart/', methods=['GET', 'POST'])
def cart():
    form = CartForm()

    if request.method == 'POST':
        price = 0
        for i in range(len(request.form)):
            print("_________")
            currentproduct = [*productsandpricing][i]
            if request.form.get([*productsandpricing][i]) is not None:
                productcount = float(request.form.get([*productsandpricing][i]))
                print(currentproduct + ": " + str(productcount))
                price = price + (productsandpricing[currentproduct] * productcount)

        print(price)
        return render_template('cart.html', price=price, btw=btw)
    else:
        return render_template('cart.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()

    if request.method == 'POST':
        print(request.form.get('username'))
        print(request.form.get('password'))

        return redirect('/home')
    elif request.method == 'GET':
        return render_template('login.html', subtitle='Sign In', form=form)


@app.route('/checkout', methods=['GET', 'POST'])
def checkout():
    form = Checkoutform()

    if form.validate_on_submit():
        return redirect('/bought')
    return render_template('checkout.html', subtitle='Checkout', form=form)


@app.route('/bought', methods=['GET'])
def bought():
    return render_template('bought.html', subtitle='succes')

app.run(debug=True)