USE connectbudb;

CREATE TABLE student (
    email VARCHAR (40) PRIMARY KEY,
    unique_id VARCHAR (36) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    major1 VARCHAR (80) NOT NULL,
    major2 VARCHAR (80),
    minor VARCHAR (80),
    school_year INT NOT NULL,
    has_ipad INT,
    FOREIGN KEY (major1) REFERENCES major(major_name),
    FOREIGN KEY (major2) REFERENCES major(major_name),
    FOREIGN KEY (minor) REFERENCES minor(minor_name)
);

CREATE TABLE major (
    major_name VARCHAR (80) NOT NULL PRIMARY KEY
);

CREATE TABLE minor (
    minor_name VARCHAR (80) NOT NULL PRIMARY KEY
);

CREATE TABLE class (
    class_name VARCHAR (10) PRIMARY KEY,
    credits INT
);

CREATE TABLE club (
    club_name VARCHAR (60) PRIMARY KEY,
    category TEXT
);

CREATE TABLE lab (
	lab_name VARCHAR (60) PRIMARY KEY,
    school TEXT,
    department TEXT
);

CREATE TABLE interest (
    interest_name VARCHAR (40) PRIMARY KEY
);

CREATE TABLE takes_class (
    email VARCHAR (40),
    class_name VARCHAR (10),
    PRIMARY KEY (email, class_name),
    FOREIGN KEY (email) REFERENCES student(email) ON DELETE CASCADE,
    FOREIGN KEY (class_name) REFERENCES class(class_name) ON DELETE CASCADE
);

CREATE TABLE joins_club (
    email VARCHAR (40),
    club_name VARCHAR (60),
    PRIMARY KEY (email, club_name),
    FOREIGN KEY (email) REFERENCES student(email) ON DELETE CASCADE,
    FOREIGN KEY (club_name) REFERENCES club(club_name) ON DELETE CASCADE
);

CREATE TABLE joins_lab (
    email VARCHAR (40),
    lab_name VARCHAR (60),
    PRIMARY KEY (email, lab_name),
    FOREIGN KEY (email) REFERENCES student(email) ON DELETE CASCADE,
    FOREIGN KEY (lab_name) REFERENCES lab(lab_name) ON DELETE CASCADE
);

CREATE TABLE has_interest (
    email VARCHAR (40),
    interest_name VARCHAR (40),
    PRIMARY KEY (email, interest_name),
    FOREIGN KEY (email) REFERENCES student(email) ON DELETE CASCADE,
    FOREIGN KEY (interest_name) REFERENCES interest(interest_name) ON DELETE CASCADE
);

SHOW TABLES;
