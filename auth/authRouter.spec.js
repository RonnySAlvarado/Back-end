const server = require('../api/server');
const request = require('supertest');
const db = require('../data/dbConfig');
const Parents = require('../parents/parentsModel');

const testUser = {
  "username": "bobtest",
  "password": "pass123"
}

const testChild = {
  "name": "Jacob",
  "parentId": 1,
  "gigapetName": "Dino Doug"
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

  describe('POST /register and /login', () => {

    beforeEach(() => {
      return db('parents').truncate();
    })

    it('should return status 200 after registering', async () => {
      const res = await request(server)
        .post('/api/register')
        .send(testUser);
      expect(res.status).toBe(201);
    })

    it('should return status 200 after logging in', async () => {
      await request(server)
        .post('/api/register')
        .send(testUser);
      const res = await request(server)
        .post('/api/login')
        .send(testUser);
      const { id } = res.body;
      expect(res.status).toBe(200);
      expect(id).toBe(1);
    })

    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json')
    })
  })
  
  describe('Adding children', () => {

    beforeEach(() => {
      return db('parents').truncate();
      return db('children').truncate();
    })

    it('should return status 200 for children endpoint', async () => {
      const parent = await request(server)
      .post('/api/register')
      .send(testUser);
      
      const { id, token } = parent.body;

      const children = await request(server)
      .get(`/api/parents/${id}/children`)
      .set('Authorization', token);
        expect(children.status).toBe(200);
    })

    it('should return status 201 for adding child', async () => {
      const parent = await request(server)
      .post('/api/register')
      .send(testUser);
      
      const { id, token } = parent.body;

      const children = await request(server)
      .post(`/api/parents/${id}/children`)
      .send(testChild)
      .set('Authorization', token);
      
      const {newChild} = children.body;
      
      expect(children.status).toBe(201);
      expect(newChild.name).toBe('Jacob');
      expect(newChild.parentId).toBe(1);
    })

    it ('should return 500 when req body is not complete', async () => {
      const parent = await request(server)
      .post('/api/register')
      .send(testUser);
      
      const { id, token } = parent.body;

      const children = await request(server)
      .post(`/api/parents/${id}/children`)
      .send({})
      .set('Authorization', token);
          
      expect(children.status).toBe(500);
      
    })

  })

})