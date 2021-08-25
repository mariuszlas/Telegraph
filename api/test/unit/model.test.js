const Post = require('../models/post.js');
const pg = require('pg');
jest.mock('pg');

const db = require('../dbConfig.js');

describe('Post', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('findOne', () => {
        it('resolves with post object on successful db query', async () => {
            const testObj = {title: 'Test title', user: 'Test user', story: 'Text content', path:"Test title-20218213421"}
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [ testObj] });
            const result = await Post.findOne("Test title-20218213421");
            expect(result).toStrictEqual(testObj)
        })
    });

    describe('create', () => {
        it('resolves with post on successful db query', async () => {
            const testObj = {title: 'Test title', user: 'Test user', story: 'Text content', path:"Test title-20218213421"}
            const testObj2 = {author: 'Test user', body: 'Text content', path:"Test title-20218213421", title: 'Test title' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [testObj2] });
            const result = await Post.create(testObj);
            expect(result).toBeInstanceOf(Post)
        })
    });
})
