const server = require('../api/server');
const request = require('supertest');
const db = require('../data/dbConfig');
const Parents = require('../parents/parentsModel');

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
      const [id] = await Parents.insert(testUser);
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
      const [id] = await db('parents').insert(testUser2);
      const parent = await Parents.getById(id);
      expect(id).toBe(1)
      expect(parent.username).toBe('bobtest')
    })
  })

})