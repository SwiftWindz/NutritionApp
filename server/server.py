from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
from api.swen_344_db_utils import *
from api.endpoints import *

app = Flask(__name__) #create Flask instance

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

api = Api(app) #api router

api.add_resource(Foods,'/foods')
api.add_resource(GetProteins,'/proteins')
api.add_resource(GetVegetables,'/vegetables')
api.add_resource(GetFruits,'/fruits')
api.add_resource(GetDairy,'/dairy')
api.add_resource(GetGrains,'/grains')

if __name__ == '__main__':
    # print("Loading db");
    # exec_sql_file('food.sql');
    # print("Starting flask");
    app.run(debug=True), #starts Flask



    