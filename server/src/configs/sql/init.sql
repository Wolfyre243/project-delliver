DROP TABLE IF EXISTS userprofile; 
DROP TABLE IF EXISTS sessions; 
DROP TABLE IF EXISTS users; 

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password CHAR(60) NOT NULL,
	is_verified BOOLEAN DEFAULT false,
	is_deleted BOOLEAN DEFAULT false,
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NULL
);

CREATE TABLE userprofile (
	profile_id SERIAL PRIMARY KEY,
	user_id INT NOT NULL,
	is_highrisk BOOLEAN NOT NULL,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NULL,

	FOREIGN KEY (user_id)
	REFERENCES users(user_id)
		ON DELETE CASCADE
);

CREATE TABLE sessions (
	session_id SERIAL PRIMARY KEY,
	user_id INT NOT NULL,
	access_token VARCHAR(255),
	is_active BOOLEAN DEFAULT true,
	login_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	logout_at TIMESTAMPTZ,

	FOREIGN KEY (user_id)
		REFERENCES users(user_id)
		ON DELETE CASCADE
);














