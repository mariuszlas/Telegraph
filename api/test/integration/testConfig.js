const { Pool } = require('pg');
const fs = require('fs');

const reset = fs.readFileSync(__dirname + '/reset.sql').toString();

// reset the database with test data from reset.sql
function resetTestDB() {
    return new Promise(async (resolve, reject) => {
        try {
            const db = new Pool;
            await db.query(reset);
            resolve('Test db was reset')
        } catch (err) {
            reject(err);
        }
    })
}

global.resetTestDB = resetTestDB;
