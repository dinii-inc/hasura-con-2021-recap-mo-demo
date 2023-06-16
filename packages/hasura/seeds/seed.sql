INSERT INTO category (name) VALUES ('フード');
INSERT INTO category (name) VALUES ('ドリンク');
INSERT INTO category (name) VALUES ('デザート');

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('ガパオライス', 
(SELECT id FROM category WHERE name = 'フード' limit 1),
500,
'rice.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('パスタ', 
(SELECT id FROM category WHERE name = 'フード' limit 1),
700,
'pasta.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('餃子', 
(SELECT id FROM category WHERE name = 'フード' limit 1),
600,
'gyozas.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('カレー', 
(SELECT id FROM category WHERE name = 'フード' limit 1),
900,
'curry.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('ハンバーガー', 
(SELECT id FROM category WHERE name = 'フード' limit 1),
900,
'burger.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('ハンバーガー', 
(SELECT id FROM category WHERE name = 'デザート' limit 1),
250,
'waffles.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('シュークリーム', 
(SELECT id FROM category WHERE name = 'デザート' limit 1),
250,
'cream-puff.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('カクテル', 
(SELECT id FROM category WHERE name = 'ドリンク' limit 1),
400,
'orange-strawberry-cocktail.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('モヒート', 
(SELECT id FROM category WHERE name = 'ドリンク' limit 1),
400,
'mojito.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('ブルーカクテル', 
(SELECT id FROM category WHERE name = 'ドリンク' limit 1),
400,
'blue-cocktail.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('ビール', 
(SELECT id FROM category WHERE name = 'ドリンク' limit 1),
500,
'beer.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('ワイン', 
(SELECT id FROM category WHERE name = 'ドリンク' limit 1),
600,
'wine.jpg'
);

INSERT INTO menu (name, "categoryId", price, image)
VALUES 
('ワイン', 
(SELECT id FROM category WHERE name = 'ドリンク' limit 1),
550,
'whiskey.jpg'
);

