-- PROCEDURES --
CREATE OR REPLACE PROCEDURE register_user(
	IN p_username VARCHAR(50),
	IN p_email VARCHAR(255),
	IN p_password CHAR(60),
	IN p_fname VARCHAR(100),
	IN p_lname VARCHAR(100),
	IN p_is_highrisk BOOLEAN,
	OUT o_user_id INT
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
	(user_id, first_name, last_name, is_highrisk) VALUES
	(new_user_id, p_fname, p_lname, p_is_highrisk)
	RETURNING user_id INTO o_user_id;
	
END;
$$ LANGUAGE plpgsql;