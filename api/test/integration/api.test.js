const request = require('supertest');
const server = require('../../server.js');

describe('api', () => {
    let api;

    beforeAll(() => {
        api = server.listen(5000, () => console.log('Test server is running on port 5000'))
    })

    beforeEach( () => {
         resetTestDB();
    })

    afterAll(() => {
        api.close();
        console.log('Stopping the test server')
    })

    it('returns a post by ID', async () => {
        const res = await request(api).get('/title2-456');
        expect(res.body).toStrictEqual({'id': 2, author: 'Jonny', title: '1 The Strand', path: 'title2-456', body: 'Text of second' })
    });

    it('adds a new post to database', async () => {
        const res = await request(api).post('/').send({author: 'Jane', title: 'The Wave', path: 'title3-789', post: 'Text of third' })
        expect(res.body).toStrictEqual({author: 'Jane', title: 'The Wave', path: 'title3-789', body: 'Text of third' })
    });
})
