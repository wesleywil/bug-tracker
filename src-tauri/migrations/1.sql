CREATE TABLE projects (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(30),
    description TEXT,
    add_date TEXT,
    link VARCHAR(150)
);

CREATE TABLE tags (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(40)
);

CREATE TABLE status (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(40),
    description VARCHAR(200)
);

CREATE TABLE priorities (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(40),
    description VARCHAR(200)
);

CREATE TABLE bugs (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    info VARCHAR(300),
    tag_id INTEGER NOT NULL,
    status_id INTEGER NOT NULL,
    priority_id INTEGER NOT NULL,
    add_date TEXT,
    updated_date TEXT,
    FOREIGN KEY (project_id) REFERENCES projects (id) 
    ON UPDATE CASCADE 
    ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags (id) 
    ON UPDATE CASCADE 
    ON DELETE NO ACTION,
    FOREIGN KEY (status_id) REFERENCES status (id) 
    ON UPDATE CASCADE 
    ON DELETE NO ACTION,
    FOREIGN KEY (priority_id) REFERENCES priorities (id) 
    ON UPDATE CASCADE 
    ON DELETE NO ACTION
);

INSERT INTO tags (title) VALUES ("FrontEnd");
INSERT INTO tags (title) VALUES ("Backend");

INSERT INTO status (title, description) VALUES ("Open","A new bug or issue was registered");
INSERT INTO status (title, description) VALUES ("In Progress","The bug is not yet fixed, but is being worked on.");
INSERT INTO status (title, description) VALUES ("Reviewing","Verifyng if the problem persists");
INSERT INTO status (title, description) VALUES ("Closed","This bug has been resolved and is no longer an issue.");

INSERT INTO priorities (title, description) VALUES ("High","Fix this as soon as possible!");
INSERT INTO priorities (title, description) VALUES ("Normal","This bug should be completed within a few days, depending on the severity of the issue.");
INSERT INTO priorities (title, description) VALUES ("Low","A Fix that is not urgent and can be completed at a later time.");