const server = require('../api/server');
const request = require('supertest');
const db = require('../data/dbConfig');

const testUser = {
  "username": "bobtest",
  "password": "pass123"
}

describe('the auth router', () => {

  describe('insert new user', () => {
    beforeEach(() => {
      return db('parents').truncate();
    })

    it('should insert a user into the db', async () => {
      const [id] = await db('parents').insert(testUser);
      expect(id).toBe(1);
    })

  })

  describe('retrieve existing user', () => {
    const testUser2 = {
      "username": "bobtest",
      "password": "pass123"
    }

    beforeEach(() => {
      return db('parents').truncate();
    })

    it('should return existing user from db', async () => {
      const [id] = await db('parents').insert(testUser);
      const parent = await db('parents').where({id});
      console.log(parent)
      expect(id).toBe(1)
    })
  })

})