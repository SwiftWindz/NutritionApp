from flask_restful import Resource
from flask_cors import CORS, cross_origin
from flask_restful import request
from flask_restful import reqparse
import json
from .swen_344_db_utils import *

class Foods(Resource):
    
    def get(self):
       result = exec_get_all("SELECT * FROM food")
       return result

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True, help='Name cannot be blank!')
        parser.add_argument('catagory', type=str, required=True, help='Catagory cannot be blank!')
        parser.add_argument('calories', type=float, required=True, help='Calories cannot be blank!')
        parser.add_argument('total_fat', type=float, required=True, help='Total Fat cannot be blank!')
        parser.add_argument('saturated_fat', type=float, required=True, help='Saturated fat Fat cannot be blank!')
        parser.add_argument('trans_fat', type=float, required=True, help='Trans fat Fat cannot be blank!')
        parser.add_argument('protein', type=float, required=True, help='Protein Fat cannot be blank!')
        parser.add_argument('carbohydrate', type=float, required=True, help='Carbohydrate cannot be blank!')
        args = parser.parse_args()
        exec_commit(f"INSERT INTO food (name, catagory, calories, total_fat, saturated_fat,\
            trans_fat, protein, carbohydrate) VALUES ({args['name']}, {args['catagory']}\
            {args['calories']}, {args['total_fat']}, {args['saturated_fat']}, {args['trans_fat']},\
            {args['protein']}, {args['carbohydrate']})")
        return exec_get_all("SELECT * FROM food")

    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True, help='Name cannot be blank!')
        parser.add_argument('catagory', type=str, required=True, help='Catagory cannot be blank!')
        parser.add_argument('new_value', type=float, required=True, help='New value cannot be blank!')
    
    def delete(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True, help='Name cannot be blank!')
        args = parser.parse_args()
        exec_commit(f"DELETE FROM food WHERE name = {args['name']}")
        return exec_get_all("SELECT * FROM food")

class GetProteins(Resource):
    def get(self):
       result = exec_get_all("SELECT * FROM food WHERE category = 'Proteins'")
       return result

class GetVegetables(Resource):
    def get(self):
       result = exec_get_all("SELECT * FROM food WHERE category = 'Vegetables'")
       return result

class GetFruits(Resource):
    def get(self):
         result = exec_get_all("SELECT * FROM food WHERE category = 'Fruits'")
         return result

class GetGrains(Resource):
    def get(self):
         result = exec_get_all("SELECT * FROM food WHERE category = 'Grains'")
         return result

class GetDairy(Resource):
    def get(self):
         result = exec_get_all("SELECT * FROM food WHERE category = 'Dairy'")
         return result

