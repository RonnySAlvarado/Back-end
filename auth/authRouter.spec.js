const server = require('../api/server');
const request = require('supertest');
const db = require('../data/dbConfig');

const testUser = {
  "username": "bobtest",
  "password": "pass123"
}
describe('the auth router', () => {

  describe('POST /', () => {
    beforeEach(() => {
      return db('parents').truncate();
    })
    it('should return status 201', async () => {
      
      const res = await request(server)
        .post('/register')
        .send(testUser);
      expect(res.status).toBe(201);
    })

    xit('should return status 400 when body is not correct', async () => {
      const body = {}
      const res = await request(server)
        .post('/register')
        .send(body)
      expect(res.status).toBe(400);
    })

    xit('should return JSON', async () => {
      const res = await request(server).get('/');
      console.log(res)
      expect(res.type).toBe('application/json')
    })
  })

})