import qs from 'querystring';
import https from './utils/https';

/**
 * Wrap the Zomato API
 */
class Zomato {

  /**
   * constructor - Constructs the api object
   *
   * @param {string} apiKey the user-key
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.hostname = 'developers.zomato.com';
    this.apiVersion = '/api/v2.1';
  }

  /**
   * get - Forms the path before making an https request
   *
   * @param {string} endpoint The api endpoint
   * @param {string} querystring The querystring
   * @return {Promise} p Resolves with the https response
   */
  get(endpoint, querystring) {
    let path = `${this.apiVersion}/${endpoint}`;
    if (querystring !== undefined) {
      path += `?${querystring}`;
    }
    const headers = {
      'user-key': this.apiKey
    };
    return https.get(this.hostname, path, headers);
  }

  /**
   * categories - Get list of categories
   * @see {@link https://developers.zomato.com/documentation#!/common/categories}
   *
   * @return {Promise} p Resolves with the list of categories
   */
  categories() {
    return this
            .get('categories')
            .then(data => data.categories.map((o) => o.categories));
  }

  /**
   * cities - Get city details
   * @see {@link https://developers.zomato.com/documentation#!/common/cities}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with the list of location suggestions
   */
  cities(params) {
    return this
            .get('cities', qs.stringify(params))
            .then(data => data.location_suggestions);
  }

  /**
   * collections - Get Zomato collections in a city
   * @see {@link https://developers.zomato.com/documentation#!/common/collections}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with a list of Zomato restaurant collections
   */
  collections(params) {
    return this
            .get('collections', qs.stringify(params))
            .then(data => data.collections.map((o) => o.collection));
  }

  /**
   * cuisines - Get a list of all cuisines of restaurants listed in a city
   * @see {@link https://developers.zomato.com/documentation#!/common/cuisines}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with a list of all cuisines of restaurants
   */
  cuisines(params) {
    return this
            .get('cuisines', qs.stringify(params))
            .then(data => data.cuisines.map((o) => o.cuisine));
  }

  /**
   * establishments - Get list of restaurant types in a city
   * @see {@link https://developers.zomato.com/documentation#!/common/establishments}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with a list of all restaurant types
   */
  establishments(params) {
    return this
            .get('establishments', qs.stringify(params))
            .then(data => data.establishments.map((o) => o.establishment));
  }

  /**
   * geocode - Get location details based on coordinates
   * @see {@link https://developers.zomato.com/documentation#!/common/geocode}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with the location details
   */
  geocode(params) {
    return this.get('geocode', qs.stringify(params));
  }

  /**
   * locations - Search for locations
   * @see {@link https://developers.zomato.com/documentation#!/location/locations}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with list of location suggestions
   */
  locations(params) {
    return this
            .get('locations', qs.stringify(params))
            .then(data => data.location_suggestions);
  }

  /**
   * locationDetails - Get Zomato location details
   * @see {@link https://developers.zomato.com/documentation#!/location/location_details}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with the the location details
   */
  locationDetails(params) {
    return this.get('location_details', qs.stringify(params));
  }

  /**
   * restaurant - Get restaurant details
   * @see {@link https://developers.zomato.com/documentation#!/restaurant/restaurant_0}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with the restaurant details
   */
  restaurant(params) {
    return this.get('restaurant', qs.stringify(params));
  }

  /**
   * dailymenu - Get daily menu of a restaurant
   * @see {@link https://developers.zomato.com/documentation#!/restaurant/restaurant}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with the list of daily menus
   */
  dailymenu(params) {
    return this
            .get('dailymenu', qs.stringify(params))
            .then(data => data.daily_menus.map((o) => o.daily_menu));
  }

  /**
   * reviews - Get restaurant reviews
   * @see {@link https://developers.zomato.com/documentation#!/restaurant/reviews}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with the list of reviews
   */
  reviews(params) {
    return this
            .get('reviews', qs.stringify(params))
            .then(data => {
              let reviews = data.user_reviews.map((o) => o.review);
              data.user_reviews = reviews;
              return data;
            });
  }

  /**
   * search - Search for restaurants
   * @see {@link https://developers.zomato.com/documentation#!/restaurant/search}
   *
   * @param {Object} params Parameters that will be sent
   * @return {Promise} p Resolves with the list of restaurants
   */
  search(params) {
    return this
            .get('search', qs.stringify(params))
            .then(data => {
              let restaurants = data.restaurants.map((o) => o.restaurant);
              data.restaurants = restaurants;
              return data;
            });
  }

}

export default Zomato;
