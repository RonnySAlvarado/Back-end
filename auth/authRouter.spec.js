const server = require('./authRouter.js');
const request = require('supertest');
const db = require('../data/dbConfig');

describe('the auth router', () => {

  describe('POST /', () => {
    beforeEach(() => {
      return db('parents').truncate();
    })
    xit('should return status 201', async () => {
      const res = await request(server).post('/register');
      expect(res.status).toBe(201);
    })
    xit('should return status 400 when body is not correct', async () => {
      const body = {
        "username": "tom",
        "password": "pass123"
      }
      const res = await request(server).post('/register')
      expect(res.status).toBe(400);
    })
    xit('should return { api: "up and running" }', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ 'api': 'up and running' })
    })
    xit('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json')
    })
  })

})