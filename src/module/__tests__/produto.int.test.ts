import * as request from 'supertest';

describe('int porduto', () => {
    it('##GET /', async () => {
        const response = await request('http://localhost:8080') 
        .get('/')
        expect(response.status).toBe(404)
    })
})

describe('int porduto', () => {
    it('##POST /', async () => {
        const response = await request('http://localhost:8080') 
        .post('/')
        expect(response.status).toBe(404)
    })
})