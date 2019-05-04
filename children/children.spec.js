const db = require('../data/dbConfig');

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
