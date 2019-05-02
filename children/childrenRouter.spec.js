const server = require('../api/server');
const request = require('supertest');
// const db = require('../data/dbConfig');

describe('the children router', () => {

  describe('GET /', () => {
    it('should return status 200', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    })
    
    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json')
    })
  })

})