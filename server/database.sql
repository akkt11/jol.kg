CREATE DATABASE website;

CREATE TABLE users (
    user_id UUID DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE tests (
    test_id SERIAL,
    user_id UUID,
    PRIMARY KEY(test_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE results (
    result_id SERIAL, 
    user_id UUID,
    test_id INT, 
    results VARCHAR(255),
    PRIMARY KEY(result_id),
    FOREIGN KEY(test_id) REFERENCES tests(test_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE images (
    image_id SERIAL,
    user_id UUID,
    test_id INT,
    base64 TEXT,
    PRIMARY KEY(image_id),
    FOREIGN KEY(test_id) REFERENCES tests(test_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('Aktan', 'aktan@gmail.com', '123');

INSERT INTO tests (user_id) VALUES ('a7d66bbb-3975-44a4-a44c-200350505131');

INSERT INTO results (test_id, results) VALUES ('1', '3 from 10') WHERE user_id = '1'; 

INSERT INTO images (test_id, base64) VALUES ('1', 'img1') WHERE user_id = '1';

SELECT * FROM images INNER JOIN results ON images.image_id = results.result_id WHERE user_id = '1';
