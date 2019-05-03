const server = require('../api/server');
const request = require('supertest');
const db = require('../data/dbConfig');

describe('the foods router', () => {

  describe('GET /', () => {
    xit('should return status 200', async () => {
      const res = await request(server).get('/api/foods');
      console.log(res)
      expect(res.status).toBe(200);
    })
    
    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json')
    })
  })

  describe('foods db helpers', () => {
    const testFood = {
      "name": "banana",
      "value": 5,
      "categoryId": 1
  }
    describe('insert new food', () => {
      beforeEach(() => {
        return db('foods').truncate();
      })
  
      it('should insert a food into the db', async () => {
        const [id] = await db('foods').insert(testFood);
        console.log(id)
        expect(id).toBe(1);
      })
  
    })
  })

})