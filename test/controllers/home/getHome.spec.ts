import app from '../../../src/app'
import request from 'supertest'

describe('POST /candidate', () => {
  it('hit home index route and return with success message', async () => {
    const result = await request(app).get('/').expect(200)
    expect(result.text).toEqual('Hello World!')
  })
})
