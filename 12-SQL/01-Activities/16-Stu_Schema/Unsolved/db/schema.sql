-- Write your schema here --
DROP DATABASE IF EXISTS inventory_db;

CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE products (
    id INT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(30) NOT NULL,
    price INT NOT NULL,
    in_stock BOOLEAN NOT NULL
);

CREATE TABLE categories (
    id INT NOT NULL,
    category_name VARCHAR(30) NOT NULL
);



-- mysql -u root -p
-- then password
-- SELECT * FROM inventory_db; / table name
-- SOURCE schema.sql
