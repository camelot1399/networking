DROP TABLE IF EXISTS customer_host;
DROP TABLE IF EXISTS hosts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS customers;

CREATE TABLE hosts (
	id SERIAL PRIMARY KEY,
	ip VARCHAR(15) NOT NULL,
	mac VARCHAR(17) NOT NULL,
	created_at DATETIME DEFAULT NOW(),
	updated_at DATETIME DEFAULT NOW()
);

ALTER TABLE networking_db.hosts 
DEFAULT CHARSET=utf8;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,  -- SERIAL =  BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE
	login VARCHAR(100) NOT NULL,
	password_hash VARCHAR(100) NOT NULL,
	session_id VARCHAR(100) NOT NULL,
	created_at DATETIME DEFAULT NOW(),
	updated_at DATETIME DEFAULT NOW()
);

ALTER TABLE networking_db.users 
DEFAULT CHARSET=utf8;


CREATE TABLE customers (
	id SERIAL PRIMARY KEY,  -- SERIAL =  BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	second_name VARCHAR(100) NOT NULL,
	created_at DATETIME DEFAULT NOW(),
	updated_at DATETIME DEFAULT NOW()
);

ALTER TABLE networking_db.customers 
DEFAULT CHARSET=utf8;

CREATE TABLE customer_host (
	id SERIAL PRIMARY KEY,  -- SERIAL =  BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE
	host_id BIGINT NOT NULL,
	customer_id BIGINT NOT NULL,
	FOREIGN KEY (host_id) REFERENCES hosts(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (customer_id) REFERENCES customers(id) ON UPDATE CASCADE ON DELETE CASCADE,
	created_at DATETIME DEFAULT NOW(),
	updated_at DATETIME DEFAULT NOW()
);

ALTER TABLE networking_db.customer_host 
DEFAULT CHARSET=utf8;


SELECT * FROM hosts;