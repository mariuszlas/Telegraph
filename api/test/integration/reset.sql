TRUNCATE posts RESTART IDENTITY;    -- remove all records from the table but not the table itself

INSERT INTO posts (author, title, path, body)
VALUES
    ('Jon', 'South Pavillion', 'title1-123', 'Text of the first' ),
    ('Jonny', '1 The Strand', 'title2-456', 'Text of second' );
