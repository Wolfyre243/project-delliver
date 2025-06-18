-- PROCEDURES --
CREATE OR REPLACE PROCEDURE register_user(
	p_username VARCHAR(50),
	p_email VARCHAR(255),
	p_password CHAR(60),
	p_fname VARCHAR(100),
	p_lname VARCHAR(100),
	p_is_highrisk BOOLEAN,
	p_exercise_duration VARCHAR(255),
	p_history TEXT[],
	o_user_id OUT INTEGER 
)
AS $$

DECLARE
	new_user_id INT;
BEGIN

	-- Insert the new user
	INSERT INTO users (username, email, password)
	VALUES (p_username, p_email, p_password)
	RETURNING user_id INTO new_user_id;

	INSERT INTO userprofile
	(user_id, first_name, last_name, is_highrisk, exercise_duration, history) VALUES
	(new_user_id, p_fname, p_lname, p_is_highrisk,p_exercise_duration,p_history)
	RETURNING user_id INTO o_user_id;
	
END;
$$
LANGUAGE PLPGSQL;