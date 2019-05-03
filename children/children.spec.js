const server = require('../api/server');
const request = require('supertest');
const db = require('../data/dbConfig');

describe('the children router', () => {

  describe('GET /', () => {
    xit('should return status 200', async () => {
      const res = await request(server).get('/api/children');
      expect(res.status).toBe(200);
    })
    
    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json')
    })
  })

  describe('children db helpers', () => {
    const testChild = {
      "name": "Jacob",
      "parentId": 16,
      "gigapetName": "Dino Doug"
    }
    describe('insert new user', () => {
      beforeEach(() => {
        // db('children').truncate();
        return db('children').truncate();
      })
  
      it('should insert a child into the db', async () => {
        await db('children').insert(testChild);
        const [id] = await db('children').insert(testChild);
        expect(id).toBe(2);
      })
  
    })
  })

})