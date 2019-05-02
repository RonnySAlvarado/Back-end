const server = require('../api/server');
const request = require('supertest');
const db = require('../data/dbConfig');

describe('the foodEntries router', () => {

  describe('GET /', () => {
    xit('should return status 200', async () => {
      const res = await request(server).get('/foodEntries');
      expect(res.status).toBe(200);
    })
    
    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json')
    })
  })

  describe('foodEntries db helpers', () => {
    const testEntry = {
      "childId": 1,
      "foodId": 1,
      "date": "2019-04-24"
    }
    describe('insert new entry', () => {
      beforeEach(() => {
        return db('foodEntries').truncate();
      })
  
      it('should insert a child into the db', async () => {
        await db('foodEntries').insert(testEntry);
        const [id] = await db('foodEntries').insert(testEntry);
        expect(id).toBe(2);
      })
  
    })
  })

})