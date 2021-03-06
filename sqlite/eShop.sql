-- SQLite
CREATE TABLE sku (
id INTEGER PRIMARY KEY,
product_id INTEGER,
seller_sku TEXT,
available INTEGER,
quantity INTEGER,
color TEXT,
size INTEGER,
height INTEGER,
width INTEGER,
length INTEGER,
weight INTEGER,
price INTEGER,
FOREIGN KEY (product_id) REFERENCES product (id)
);

CREATE TABLE order_tbl (
id INTEGER PRIMARY KEY,
create_date TEXT,
update_date TEXT,
payment_method TEXT,
shipping_free INTEGER,
total_price INTEGER,
status TEXT );

CREATE TABLE order_item (
id INTEGER PRIMARY KEY,
order_id INTEGER,
sku_id INTEGER,
name TEXT,
variation TEXT,
item_price INTEGER,
quantity INTEGER,
FOREIGN KEY (order_id) REFERENCES order_tbl (id),
FOREIGN KEY (sku_id) REFERENCES sku (id) );

CREATE TABLE image (
id INTEGER PRIMARY KEY,
sku_id INTEGER,
image TEXT,
FOREIGN KEY (sku_id) REFERENCES sku (id)
);