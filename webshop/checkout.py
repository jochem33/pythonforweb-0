from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired, Email

class Checkoutform(FlaskForm):
    fullname = StringField('Fullname', validators=[DataRequired()])

    street = StringField('Street', validators=[DataRequired()])
    housenumber = StringField('Housenumber', validators=[DataRequired()])
    zipcode = StringField('Zipcode', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    country = StringField('Country', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    send = BooleanField('Send')
    buybuttonjs = SubmitField('Buy')
