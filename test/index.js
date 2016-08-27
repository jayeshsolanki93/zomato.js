import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Zomato from '../src/zomato.js';

chai.should();
chai.use(chaiAsPromised);

const apiKey = process.env.API_KEY;
const zomato = new Zomato(apiKey);

describe('.categories()', function() {
  it('should return an array of categories', function() {
    return zomato.categories({})
            .should.be.fulfilled
            .should.eventually.be.an('array')
            .should.eventually.have.length.of.at.least(14);
  });
});

describe('.cities(params)', function() {
  it('should return no location suggestions with missing params', function() {
    return zomato.cities({})
            .should.be.fulfilled
            .should.eventually.be.an('array')
            .should.eventually.have.length(0);
  });
});

describe('.collections(params)', function() {
  it('should be rejected with missing city_id or coordinates params', function() {
    return zomato.collections({})
            .should.be.rejected
            .should.eventually.have.property('message', 'Failed with status code: 400');
  });
});

describe('.cuisines(params)', function() {
  it('should be rejected with missing city_id or coordinates params', function() {
    return zomato.cuisines({})
            .should.be.rejected
            .should.eventually.have.property('message', 'Failed with status code: 400');
  });
});

describe('.establishments(params)', function() {
  it('should be rejected with missing city_id or coordinates params', function() {
    return zomato.establishments({})
            .should.be.rejected
            .should.eventually.have.property('message', 'Failed with status code: 400');
  });
});

describe('.geocode(params)', function() {
  it('should return with data for the given coordinates', function() {
    return zomato.geocode({
      lat: 19.0895595,
      lon: 72.8634203
    })
      .should.be.fulfilled
      .should.eventually.be.an('object')
      .should.eventually.have.a.deep.property('location.country_name', 'India');
  });
});

describe('.locations(params)', function() {
  it('should return with one location suggestion when query is \'Mumbai\'', function() {
    return zomato.locations({
      query: 'Mumbai'
    })
      .should.be.fulfilled
      .should.eventually.be.an('array')
      .should.eventually.have.length(1);
  });
});

describe('.locationDetails(params)', function() {
  it('should return with data for the given params', function() {
    return zomato.locationDetails({
      entity_id: 3,
      entity_type: 'city'
    })
      .should.be.fulfilled
      .should.eventually.be.an('object')
      .should.eventually.have.a.deep.property('location.city_name', 'Mumbai');
  });
});

describe('.restaurant(params)', function() {
  it('should return with data for the given params', function() {
    return zomato.restaurant({
      res_id: 34383
    })
    .should.be.fulfilled
    .should.eventually.be.an('object')
    .should.eventually.have.a.property('name', 'Leopold Cafe & Bar');
  });
});

describe('.dailymenu(params)', function() {
  it('should be rejected for the given params', function() {
    return zomato.dailymenu({
      res_id: 34383
    })
    .should.be.rejected
    .should.eventually.have.property('message', 'Failed with status code: 400');
  });
});

describe('.reviews(params)', function() {
  it('should return with reviews list with the given params', function() {
    return zomato.reviews({
      res_id: 34383
    })
    .should.be.fulfilled
    .should.eventually.be.an('array')
    .should.eventually.have.length(5);
  });
});

describe('.search(params)', function() {
  it('should return with list of restaurants for the given params', function() {
    return zomato.search({
      q: 'Leopold Cafe & Bar'
    })
    .should.be.fulfilled
    .should.eventually.be.an('array');
  });
});
