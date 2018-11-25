from flask import Flask, render_template, redirect
from login import LoginForm

from checkout import Checkoutform


app = Flask(__name__)

app.config['SECRET_KEY'] = "A0Zr98j/6vC R~XHH!Hgb]LWX/,?RT"



@app.route('/')
def index():
    return redirect('/home')


@app.route('/home')
def home():
    return render_template('index.html')


@app.route('/cart/')
def cart():
    return render_template('cart.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()

    if form.validate_on_submit():
        return redirect('/home')
    return render_template('login.html', subtitle='Sign In', form=form)


@app.route('/checkout', methods=['GET', 'POST'])
def checkout():
    form = Checkoutform()

    if form.validate_on_submit():
        return redirect('/bought')
    return render_template('checkout.html', subtitle='Checkout', form=form)


@app.route('/bought')
def bought():
    return render_template('bought.html', subtitle='succes')

app.run(debug=True)
