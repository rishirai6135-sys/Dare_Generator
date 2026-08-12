CREATE TABLE IF NOT EXISTS sumbitted_dare (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES user(id)
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    avatar VARCHAR(100) DEFAULT "default-user.png",
    password_hashed VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)