CREATE TABLE food (
    id   SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30) not NULL,
    category varchar(30) not NULL,
    calories FLOAT(30) not NULL,
    total_fat FLOAT(30) not NULL,
    saturated_fat FLOAT(30) not NULL,
    trans_fat FLOAT(30) not NULL,
    protein FLOAT(30) not NULL,
    carbohydrate FLOAT(30) not null
);

--Proteins
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('steak', 'Proteins', 300, 5.73, 2.183, 0.182, 29.44, 0.0);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('ground beef', 'Proteins', 200, 13.1, 5.3, 0.6, 15.18, 0.0);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('chicken', 'Proteins', 100, 9.3, 2.5, 0.1, 27.14, 0.0);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('chicken', 'Proteins', 100, 9.3, 2.5, 0.1, 27.14, 0.0);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('fish', 'Proteins', 80, 6.34, 1.0, 0.0, 19.84, 0.0);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('soy', 'Proteins', 50, 19.94, 2.884, 0.0, 36.49, 30.16);

--Fruits
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('orange', 'Fruits', 300, 0.12, 0.0, 0.0, 0.94, 11.75);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('banana', 'Fruits', 200, 0.33, 0.0, 0.0, 1.09, 22.84);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('pineapple', 'Fruits', 100, 0.12, 0.0, 0.0, 0.54, 13.12);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('grapes', 'Fruits', 80, 0.16, 0.0, 0.0, 0.72, 18.1);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('blueberries', 'Fruits', 50, 0.33, 0.0, 0.0, 0.74, 14.49);
--Vegetables
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('romaine', 'Vegetables', 30, 0.30, 0.0, 0.0, 1.2, 3.3);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('green beans', 'Vegetables', 40, 0.22, 0.0, 0.0, 1.83, 6.97);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('squash', 'Vegetables', 100, 0.2, 0.0, 0.0, 1.2, 3.4);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('spinach', 'Vegetables', 50, 0.4, 0.0, 0.0, 2.9, 3.6);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('kale', 'Vegetables', 10, 0.9, 0.0, 0.0, 4.3, 8.8);
--Dairy
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('milk', 'Dairy', 300, 3.9, 2.9, 0.0, 3.2, 4.8);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('yoghurt', 'Dairy', 200, 5.0, 0.0, 0.0, 9.0, 3.98);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('cheddar cheese', 'Dairy', 200, 9.0, 6.0, 0.0, 7.0, 0.0);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('skim milk', 'Dairy', 100, 0.2, 0.1, 0.0, 8.3, 12.5);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('cottage cheese', 'Dairy', 80, 4.3, 0.0, 0.0, 11.12, 3.38);
--Grain
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('bread', 'Grains', 200, 1.1, 0.0, 0.0, 4.0, 13.8);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('bagel', 'Grains', 300, 1.7, 0.1, 0.0, 13.8, 68);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('pita', 'Grains', 250, 1.7, 0.3, 0.0, 6.3, 35.2);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('naan', 'Grains', 210, 3.3, 0.1, 0.0, 2.7, 16.9);
INSERT INTO food(name, category, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)	
        VALUES ('tortilla', 'Grains', 120, 0.5, 0.1, 0.0, 1.1, 8.5);