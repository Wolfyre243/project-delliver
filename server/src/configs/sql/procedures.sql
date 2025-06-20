-- PROCEDURES --
CREATE OR REPLACE PROCEDURE register_user(
	p_username VARCHAR(50),
	p_email VARCHAR(255),
	p_password CHAR(60),
	p_fname VARCHAR(100),
	p_lname VARCHAR(100),
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
	(user_id, first_name, last_name, exercise_duration, history) VALUES
	(new_user_id, p_fname, p_lname, p_exercise_duration, p_history)
	RETURNING user_id INTO o_user_id;
	
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION retrieve_all_missions(
	IN p_search VARCHAR(100),
	IN p_category_arr VARCHAR(20)[],
	IN p_creator VARCHAR(50),
	IN p_page INT,
	IN p_limit INT
)
RETURNS TABLE (
	mission_id INT,
	creator_username VARCHAR(50),
	category VARCHAR(20),
	mission_text VARCHAR(150),
	is_community BOOLEAN,
	timespan INT,
	created_at TIMESTAMPTZ
)
AS $$
BEGIN
	
	RETURN QUERY
	SELECT
		m.mission_id, 
		u.username as creator_username,
		m.category_id as category, m.mission_text, m.is_community, m.timespan,
		m.created_at
	FROM mission m
	JOIN users u ON m.creator_id = u.user_id
	WHERE
		(COALESCE(p_creator, '') = '' OR u.username ILIKE '%' || p_creator || '%') AND
		(COALESCE(p_search, '') = '' OR m.mission_text ILIKE '%' || p_search || '%') AND
		(m.category_id = ANY(p_category_arr) OR array_length(p_category_arr, 1) IS NULL) AND
		m.visibility = 'public'
	ORDER BY m.mission_id ASC
	LIMIT p_limit
	OFFSET (p_page - 1) * p_limit;

END;
$$
LANGUAGE plpgsql;






















