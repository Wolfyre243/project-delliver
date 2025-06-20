-- HARD RESET --
DROP TABLE IF EXISTS userprofile; 
DROP TABLE IF EXISTS sessions; 
DROP TABLE IF EXISTS usermissioncompletion; 
DROP TABLE IF EXISTS mission; 
DROP TABLE IF EXISTS missioncategory; 
DROP TABLE IF EXISTS users; 

-- ENUM --
-- CREATE TYPE visibility AS ENUM ('private', 'public', 'restricted');

-- CREATE TABLES --
CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password CHAR(60) NOT NULL,
	is_verified BOOLEAN DEFAULT false,
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NULL
);

CREATE TABLE userprofile (
	profile_id SERIAL PRIMARY KEY,
	user_id INT UNIQUE NOT NULL,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NULL,
	exercise_duration VARCHAR(255) NOT NULL,
	history TEXT[] NOT NULL,
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

CREATE TABLE missioncategory (
	category_id VARCHAR(20) PRIMARY KEY,
	description TEXT
);

CREATE TABLE mission (
	mission_id SERIAL PRIMARY KEY,
	creator_id INT NOT NULL,
	category_id VARCHAR(20) NOT NULL,
	mission_text VARCHAR(150) UNIQUE NOT NULL,
	visibility visibility NOT NULL,
	is_community BOOLEAN DEFAULT false,
	timespan INT NOT NULL,
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

	FOREIGN KEY (creator_id)
		REFERENCES users(user_id)
		ON DELETE CASCADE,

	FOREIGN KEY (category_id)
		REFERENCES missioncategory(category_id)
		ON DELETE CASCADE
);

CREATE TABLE usermissioncompletion (
	missioncompletion_id SERIAL PRIMARY KEY,
	user_id INT NOT NULL,
	mission_id INT NOT NULL,
	completed BOOLEAN DEFAULT false,
	started_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	ended_at TIMESTAMPTZ NULL,

	FOREIGN KEY (user_id)
		REFERENCES users(user_id)
		ON DELETE CASCADE,

	FOREIGN KEY (mission_id)
		REFERENCES mission(mission_id)
		ON DELETE CASCADE
);

-- SEED DATA --

INSERT INTO users
(username, email, password, is_verified)
VALUES
('wolfyre', 'test@gmail.com', '$2b$10$ixJRiJvjY3tH0BOKYE3YaOcxQDlmyrc3Zg8K1OKbnGdL3LmLJn7fa', true),
('admin', 'shannaleeyeeshyan@gmail.com', '$2b$10$xV.WzzFTfDInZZYTsPltdeZ2ZS7UCGZnpUBIOgswyQeemaruP5j.O', true);

INSERT INTO userprofile
(user_id, first_name, last_name, exercise_duration, history)
VALUES
(1, 'John', 'Doe', 'no activity', '{"familyHistory", "screeningHistory"}'),
(2, 'Shanna', 'Lee', 'no activity', '{"familyHistory", "screeningHistory"}');










