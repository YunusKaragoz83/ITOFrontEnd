--1- ulkesi ingiltere olan musterilerin listesi (customers)--
--2- Almanyaya gonderilen siparislerin listesi (orders)--
--3- categori_id'si 2 olan urunlerin fiyati 20$ dan buyuk olan larin listesi--
--4- Italyadan mal aldigim tedarikciler hangileridir. (Suppliers)--

SELECT * FROM customers WHERE country='UK';

SELECT * FROM orders WHERE ship_country='Germany';

SELECT * FROM products 
WHERE category_id=2
AND unit_price>20;

SELECT * FROM suppliers WHERE country='Italy';

