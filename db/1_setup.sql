DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
		id serial PRIMARY KEY,
		author varchar(100) NOT NULL,
		title varchar(100) NOT NULL,
		path varchar(1000) NOT NULL,
		body varchar(10000) NOT NULl
);
