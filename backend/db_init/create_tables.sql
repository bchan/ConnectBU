USE connectbudb;

CREATE TABLE student (
    email VARCHAR (40) PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    major1 TEXT NOT NULL,
    major2 TEXT,
    minor TEXT,
    school_year INT NOT NULL,
    has_ipad TEXT
);

CREATE TABLE class (
    class_name VARCHAR (10) PRIMARY KEY,
    credits INT NOT NULL
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

CREATE TABLE campus_job (
    job_name VARCHAR (40) PRIMARY KEY,
    company TEXT,
    building TEXT
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

CREATE TABLE takes_job (
    email VARCHAR (40),
    job_name VARCHAR (40),
    PRIMARY KEY (email, job_name),
    FOREIGN KEY (email) REFERENCES student(email) ON DELETE CASCADE,
    FOREIGN KEY (job_name) REFERENCES campus_job(job_name) ON DELETE CASCADE
);

SHOW TABLES;