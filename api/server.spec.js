const server = require('./server.js');
const request = require('supertest');
// const db = require('../data/dbConfig');

describe('the server', () => {

  describe('GET /', () => {
    it('should return status 200', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    })
    it('should return { api: "up and running" }', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ 'api': 'up and running' })
    })
    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json')
    })
  })

})