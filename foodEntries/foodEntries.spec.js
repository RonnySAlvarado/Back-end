const server = require('../api/server');
const request = require('supertest');
const db = require('../data/dbConfig');
const FoodEntries = require('../foodEntries/foodEntriesModel')

describe('the foodEntries router', () => {
  
  const testEntry = {
    "childId": 1,
    "foodId": 1,
    "date": "2019-04-24"
  }

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
    
    describe('insert new entry', () => {
      beforeEach(() => {
        return db('foodEntries').truncate();
      })
  
      it('should insert a food entry into the db', async () => {
        const [id] = await FoodEntries.insert(testEntry);
        expect(id).toBe(1);
      })
  
    })

    describe('edit existing entry', () => {
      beforeEach(() => {
        return db('foodEntries').truncate();
      })
      const editedEntry = {
        "childId": 1,
        "foodId": 3,
        "date": "2019-04-24"
      }
      it('should insert a food entry into the db', async () => {
        await FoodEntries.insert(testEntry);
        const foodEntry = await FoodEntries.editEntry(1, editedEntry)
        expect(foodEntry.foodId).toBe(3);
        expect(foodEntry.childId).toBe(1);
        expect(foodEntry.date).toBe("2019-04-24");
      })

    })
    
    describe('delete db helper', () => {
      beforeEach(() => {
        return db('foodEntries').truncate();
      })
      it('should delete an existing food entry', async () => {
        const [id] = await FoodEntries.insert(testEntry);
        const deleted = await FoodEntries.removeEntry(id)
        expect(deleted).toBe(id)
      })
    })

  })

})