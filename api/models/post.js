const db = require('../dbConfig.js');
db.connect();

class Post {
    constructor(data) {
        this.author = data.author;
        this.title = data.title;
        this.path = data.path;
        this.body = data.body;
    }

    static create(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(`INSERT INTO posts (author, title, path, body)
                                                VALUES ($1, $2, $3, $4)
                                                RETURNING *`, [data.user, data.title, data.path, data.story]);
                const newPost = new Post(result.rows[0]);
                resolve(newPost);
            } catch (err) {
                reject(err);
            }
        });
    };

    static findOne(path) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(`SELECT * FROM posts WHERE path=$1`, [path] );
                resolve(result.rows[0]);
            } catch (err) {
                reject(err);
            }
        });
    };
}

module.exports = Post;
