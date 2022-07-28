const expect = require('chai').expect
const request = require('supertest')
const app = require('../index')

const { invertText } = require('../Controllers/IechoController')

describe('Main Suite Test', function () {
  describe('IechoController - Test Cases', function () {
    it('Invert test is as espected', function () {
      expect(invertText('test')).to.eql({ text: 'tset' })
      expect(invertText('test').palindrome).to.eql(undefined)
    })
    it('add flag palindrome:true is as espected', function () {
      expect(invertText('oro').text).to.eql('oro')
      expect(invertText('oro').palindrome).to.eql(true)
    })
  })

  describe('IechoRoute - Test Cases', function () {
    it('responds with json', function (done) {
      request(app)
        .get('/iecho?text=test')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('responds {text: "tset"} espected ', function (done) {
      request(app)
        .get('/iecho?text=test')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
        .expect(function (res) {
          expect(res.body).to.eql({ text: 'tset' })
        })
    })

    it('responds {error: "no text"} espected ', function (done) {
      request(app)
        .get('/iecho?text=')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400, done)
        .expect(function (res) {
          expect(res.body).to.eql({ error: 'no text' })
        })
    })

    it('palindrome flag is as espected', function (done) {
      request(app)
        .get('/iecho?text=oro')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
        .expect(function (res) {
          expect(res.body).to.eql({ text: 'oro', palindrome: true })
        })
    })
  })
})
