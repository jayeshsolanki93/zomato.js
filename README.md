# zomato.js [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travil-url]

[npm-image]: https://badge.fury.io/js/zomato.js.svg
[npm-url]: https://www.npmjs.com/package/zomato.js
[travis-image]: https://travis-ci.org/jayeshsolanki93/zomato.js.svg?branch=master
[travil-url]: https://travis-ci.org/jayeshsolanki93/zomato.js

zomato.js is a simple promise based JS wrapper for the Zomato API

## Requirements
- You will need node version **6** or greater
- An api key from https://developers.zomato.com/api

## Installation
```
npm install --save zomato.js
```

## Usage
```javascript
const Zomato = require('zomato.js');
const z = new Zomato('YOUR-API-KEY');

z
  .categories()
  .then()
  .catch()
```

## API Reference

### categories
Get lists of categories
##### Parameters
None
##### Returns
`Promise`
##### Example
```javascript
zomato
  .categories()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
[ { id: 1, name: 'Delivery' },
  { id: 2, name: 'Dine-out' },
  { id: 3, name: 'Nightlife' },
  { id: 4, name: 'Catching-up' },
  { id: 5, name: 'Takeaway' },
  { id: 6, name: 'Cafes' },
  { id: 7, name: 'Daily Menus' },
  { id: 8, name: 'Breakfast' },
  { id: 9, name: 'Lunch' },
  { id: 10, name: 'Dinner' },
  { id: 11, name: 'Pubs & Bars' },
  { id: 12, name: 'Premium Delivery' },
  { id: 13, name: 'Pocket Friendly Delivery' },
  { id: 14, name: 'Clubs & Lounges' } ]
```
---
### cities
Get city details
##### Parameters
| Name      | Type   | Description                             |
| :-------: | :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name       | Type   | Description                          | Required |
| :--------: | :----: | :----------------------------------: | :------: |
| `q`        | String | Query by city name                   | No       |
| `lat`      | Number | Latitude                             | No       |
| `lon`      | Number | Longitude                            | No       |
| `city_ids` | String | Comma separated `city_id` values     | No       |
| `count`    | Number | The number of max results to display | No       |

##### Returns
`Promise`
##### Example
```javascript
zomato
  .cities({
    q: 'New',
    count: 2
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
[ { id: 280,
    name: 'New York City, NY',
    country_id: 216,
    country_name: 'United States',
    discovery_enabled: 1,
    has_new_ad_format: 0,
    is_state: 0,
    state_id: 103,
    state_name: 'New York State',
    state_code: 'NY' },
  { id: 1,
    name: 'Delhi NCR',
    country_id: 1,
    country_name: 'India',
    discovery_enabled: 0,
    has_new_ad_format: 1,
    is_state: 0,
    state_id: 0,
    state_name: '',
    state_code: '' } ]
```
---
### collections
Get zomato collections in a city
##### Parameters
| Name      | Type   | Description                             |
| :-------: | :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name      | Type   | Description                          | Required |
| :--------:| :----: | :----------------------------------: | :-------:|
| `city_id` | Number | The id of the city                   | No       |
| `lat`     | Number | Latitude                             | No       |
| `lon`     | Number | Longitude                            | No       |
| `count`   | Number | The number of max results to display | No       |

##### Returns
`Promise`
##### Example
```javascript
zomato
  .collections({
    lat: 19.0895595,
    lon: 72.8634203,
    count: 5
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
[ { collection_id: 1,
    res_count: 30,
    image_url: 'https://b.zmtcdn.com/data/collections/e140962ec7eecbb851155fe0bb0cd28c_1463395649.jpg',
    url: 'https://www.zomato.com/mumbai/top-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    title: 'Trending this Week',
    description: 'The most popular restaurants in town this week',
    share_url: 'http://www.zoma.to/c-3/1' },
  { collection_id: 29,
    res_count: 38,
    image_url: 'https://b.zmtcdn.com/data/collections/4661c54a624d8a055119af2d0ccde724_1463399059.jpg',
    url: 'https://www.zomato.com/mumbai/best-new-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    title: 'New Restaurants you Probably Haven&#039;t Tried Yet',
    description: 'The best new places in town',
    share_url: 'http://www.zoma.to/c-3/29' },
  { collection_id: 17,
    res_count: 24,
    image_url: 'https://b.zmtcdn.com/data/collections/b2a9346ab0f03785350b96d983841902_1463635759.jpg',
    url: 'https://www.zomato.com/mumbai/shisha?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    title: 'Sheesha Lounges',
    description: 'Enjoy a great selection of sheesha',
    share_url: 'http://www.zoma.to/c-3/17' },
  { collection_id: 339,
    res_count: 30,
    image_url: 'https://b.zmtcdn.com/data/collections/8c42959a434bd9cabf283ac56872c996_1463635734.jpg',
    url: 'https://www.zomato.com/mumbai/happy-hours?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    title: 'Happy Hours',
    description: 'Great deals on booze. Happy hours indeed',
    share_url: 'http://www.zoma.to/c-3/339' },
  { collection_id: 225,
    res_count: 37,
    image_url: 'https://b.zmtcdn.com/data/collections/3eeb8a5d63844348a56f85c8db028418_1443673408_l.jpg',
    url: 'https://www.zomato.com/mumbai/fine-dining-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    title: 'Luxury Dining',
    description: 'The best restaurants in town for a complete fine-dining experience.',
    share_url: 'http://www.zoma.to/c-3/225' } ]
```
---
### cuisines
Get list of all cuisines in a city
##### Parameters
| Name      | Type   | Description                             |
| :--------:| :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name      | Type   | Description                                      | Required |
| :-------: | :----: | :----------------------------------------------: | :------: |
| `city_id` | Number | id of the city for which the cuisines are needed | No       |
| `lat`     | Number | Latitude                                         | No       |
| `lon`     | Number | Longitude                                        | No       |

##### Returns
`Promise`
##### Example
```javascript
zomato
  .cuisines({
    lat: 19.0895595,
    lon: 72.8634203
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
[ { cuisine_id: 6, cuisine_name: 'Afghani' },
  { cuisine_id: 152, cuisine_name: 'African' },
  { cuisine_id: 1, cuisine_name: 'American' },
  { cuisine_id: 2, cuisine_name: 'Andhra' },
  { cuisine_id: 4, cuisine_name: 'Arabian' },
  { cuisine_id: 175, cuisine_name: 'Armenian' },
  { cuisine_id: 3, cuisine_name: 'Asian' },
  { cuisine_id: 165, cuisine_name: 'Assamese' },
  { cuisine_id: 292, cuisine_name: 'Awadhi' },
  { cuisine_id: 193, cuisine_name: 'BBQ' },
  { cuisine_id: 5, cuisine_name: 'Bakery' },
  { cuisine_id: 227, cuisine_name: 'Bar Food' },
  { cuisine_id: 10, cuisine_name: 'Bengali' },
  { cuisine_id: 270, cuisine_name: 'Beverages' },
  { cuisine_id: 1013, cuisine_name: 'Bihari' },
  { cuisine_id: 7, cuisine_name: 'Biryani' },
  { cuisine_id: 133, cuisine_name: 'British' },
  { cuisine_id: 168, cuisine_name: 'Burger' },
  { cuisine_id: 22, cuisine_name: 'Burmese' },
  { cuisine_id: 30, cuisine_name: 'Cafe' },
  { cuisine_id: 994, cuisine_name: 'Charcoal Chicken' },
  { cuisine_id: 992, cuisine_name: 'Charcoal Grill' },
  { cuisine_id: 18, cuisine_name: 'Chettinad' },
  { cuisine_id: 25, cuisine_name: 'Chinese' },
  { cuisine_id: 161, cuisine_name: 'Coffee and Tea' },
  { cuisine_id: 35, cuisine_name: 'Continental' },
  { cuisine_id: 1014, cuisine_name: 'Cuisine Varies' },
  { cuisine_id: 100, cuisine_name: 'Desserts' },...]
```
---
### establishments
Get list of restaurant types in a city
##### Parameters
| Name      | Type   | Description                             |
| :-------: | :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name      | Type   | Description        | Required |
| :-------: | :----: | :----------------: | :------: |
| `city_id` | Number | The id of the city | No       |
| `lat`     | Number | Latitude           | No       |
| `lon`     | Number | Longitude          | No       |

##### Returns
`Promise`
##### Example
```javascript
zomato
  .establishments({
    lat: 19.0895595,
    lon: 72.8634203
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
[ { id: 16, name: 'Casual Dining' },
  { id: 21, name: 'Quick Bites' },
  { id: 31, name: 'Bakery' },
  { id: 23, name: 'Dessert Parlour' },
  { id: 291, name: 'Sweet Shop' },
  { id: 41, name: 'Beverage Shop' },
  { id: 20, name: 'Food Court' },
  { id: 7, name: 'Bar' },
  { id: 1, name: 'Café' },
  { id: 18, name: 'Fine Dining' },
  { id: 6, name: 'Pub' },
  { id: 5, name: 'Lounge' },
  { id: 61, name: 'Dhaba' },
  { id: 8, name: 'Club' },
  { id: 4, name: 'Kiosk' },
  { id: 51, name: 'Butcher Shop' },
  { id: 81, name: 'Food Truck' },
  { id: 161, name: 'Microbrewery' },
  { id: 278, name: 'Wine Bar' } ]
```
### geocode
Get location details based on coordinates
##### Parameters
| Name      | Type   | Description                             |
| :-------: | :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name  | Type   | Description | Required |
| :---: | :----: | :---------: | :------: |
| `lat` | Number | Latitude    | Yes      |
| `lon` | Number | Longitude   | Yes      |

##### Returns
`Promise`
##### Example
```javascript
zomato
  .geocode({
    lat: 19.0895595,
    lon: 72.8634203
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
{ location:
   { entity_type: '',
     entity_id: 0,
     title: 'Chakala',
     latitude: '19.1077300000',
     longitude: '72.8682890000',
     city_id: 3,
     city_name: 'Mumbai',
     country_id: 1,
     country_name: 'India' },
  popularity:
   { popularity: '3.62',
     nightlife_index: '2.84',
     nearby_res:
      [ '49886',
        '46084',
        '46595',
        '47796',
        '18281042',
        '49565',
        '35313',
        '47171',
        '18203295' ],
     top_cuisines:
      [ 'Chinese',
        'North Indian',
        'Fast Food',
        'Mughlai',
        'South Indian' ],
     popularity_res: '100',
     nightlife_res: '10',
     subzone: 'Santacruz East',
     subzone_id: 2205,
     city: 'Mumbai' },
  link: 'https://www.zomato.com/mumbai/chakala-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
  nearby_restaurants:
   { '1': { restaurant: [Object] },
     '2': { restaurant: [Object] },
     '3': { restaurant: [Object] },
     '4': { restaurant: [Object] },
     '5': { restaurant: [Object] },
     '6': { restaurant: [Object] },
     '7': { restaurant: [Object] },
     '8': { restaurant: [Object] },
     '9': { restaurant: [Object] } } }
```
### locations
Search for locations
##### Parameters
| Name      | Type   | Description                             |
| :-------: | :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name    | Type   | Description                     | Required |
| :-----: | :----: | :-----------------------------: | :------: |
| `query` | String | Suggestion for location name    | Yes      |
| `lat`   | Number | Latitude                        | No       |
| `lon`   | Number | Longitude                       | No       |
| `count` | Number | Max number of requests to fetch | No       |

##### Returns
`Promise`
##### Example
```javascript
zomato
  .locations({
    lat: 19.0895595,
    lon: 72.8634203,
    count: 3
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
[ { entity_type: 'subzone',
    entity_id: 2207,
    title: 'Vile Parle East, Mumbai',
    latitude: 19.0960056,
    longitude: 72.8552728,
    city_id: 3,
    city_name: 'Mumbai',
    country_id: 1,
    country_name: 'India' },
  { entity_type: 'group',
    entity_id: 39998,
    title: 'Taj Santacruz, Santacruz East, Mumbai',
    latitude: 19.0928003,
    longitude: 72.854062,
    city_id: 3,
    city_name: 'Mumbai',
    country_id: 1,
    country_name: 'India' },
  { entity_type: 'group',
    entity_id: 60,
    title: 'Sahara Star, Santacruz East, Mumbai',
    latitude: 19.095652,
    longitude: 72.853839,
    city_id: 3,
    city_name: 'Mumbai',
    country_id: 1,
    country_name: 'India' } ]
```
### locationDetails
Get Zomato location details
##### Parameters
| Name      | Type   | Description                             |
| :-------: | :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name          | Type   | Description                               | Required |
| :-----------: | :----: | :---------------------------------------: | :------: |
| `entity_id`   | Number | Location id obtained from locations api   | Yes      |
| `entity_type` | String | Location type obtained from locations api | Yes      |

##### Returns
`Promise`
##### Example
```javascript
zomato
  .locationDetails({
    entity_id: 2207,
    entity_type: 'subzone'
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
{ popularity: '4.30',
  nightlife_index: '4.14',
  nearby_res:
   [ '48323',
     '18245963',
     '47393',
     '48843',
     '48454',
     '18334488',
     '17754288',
     '42536',
     '35299' ],
  top_cuisines:
   [ 'North Indian',
     'Chinese',
     'Fast Food',
     'South Indian',
     'Mughlai' ],
  popularity_res: '100',
  nightlife_res: '10',
  subzone: 'Chakala',
  subzone_id: 162285,
  city: 'Mumbai',
  location:
   { entity_type: 'subzone',
     entity_id: '2207',
     title: 'Vile Parle East, Mumbai',
     latitude: 19.0960056,
     longitude: 72.8552728,
     city_id: 3,
     city_name: 'Mumbai',
     country_id: 1,
     country_name: 'India' },
  num_restaurant: 591,
  best_rated_restaurant:
   [ { restaurant: [Object] },
     { restaurant: [Object] },
     { restaurant: [Object] },
     { restaurant: [Object] },
     { restaurant: [Object] },
     { restaurant: [Object] },
     { restaurant: [Object] },
     { restaurant: [Object] },
     { restaurant: [Object] },
     { restaurant: [Object] } ],
  experts: [ { user: [Object] } ] }
```
### restaurant
Get restaurant details
##### Parameters
| Name      | Type   | Description                             |
| :-------: | :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name     | Type   | Description                                 | Required |
| :------: | :----: | :-----------------------------------------: | :------: |
| `res_id` | Number | Id of restaurant whose details are required | Yes      |

##### Returns
`Promise`
##### Example
```javascript
zomato
  .restaurant({
    res_id: 34383
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
{ R: { res_id: 34383 },
  apikey: 'YOUR-API-KEY',
  id: '34383',
  name: 'Leopold Cafe & Bar',
  url: 'https://www.zomato.com/mumbai/leopold-cafe-bar-colaba?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
  location:
   { address: 'S.B. Singh Road, Colaba Causeway, Colaba, Mumbai',
     locality: 'Colaba',
     city: 'Mumbai',
     city_id: 3,
     latitude: '18.9226700352',
     longitude: '72.8317061439',
     zipcode: '0',
     country_id: 1 },
  cuisines: 'Chinese, Continental, North Indian',
  average_cost_for_two: 1600,
  price_range: 3,
  currency: 'Rs.',
  offers: [],
  thumb: 'https://b.zmtcdn.com/data/pictures/3/34383/8e83b3c49d6eda58de51232a58b78674_featured_v2.jpg',
  user_rating:
   { aggregate_rating: '4.0',
     rating_text: 'Very Good',
     rating_color: '5BA829',
     votes: '5124' },
  photos_url: 'https://www.zomato.com/mumbai/leopold-cafe-bar-colaba/photos#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
  menu_url: 'https://www.zomato.com/mumbai/leopold-cafe-bar-colaba/menu#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
  featured_image: 'https://b.zmtcdn.com/data/pictures/3/34383/8e83b3c49d6eda58de51232a58b78674_featured_v2.jpg',
  has_online_delivery: 1,
  is_delivering_now: 1,
  deeplink: 'zomato://r/34383',
  order_url: 'https://www.zomato.com/mumbai/leopold-cafe-bar-colaba/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
  order_deeplink: '',
  events_url: 'https://www.zomato.com/mumbai/leopold-cafe-bar-colaba/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1' }
```
### dailymenu
Get daily menu of a restaurant
##### Parameters
| Name      | Type   | Description                             |
| :-------: | :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name     | Type   | Description                                 | Required |
| :------: | :----: | :-----------------------------------------: | :------: |
| `res_id` | Number | Id of restaurant whose details are required | Yes      |

##### Returns
`Promise`
##### Example
```javascript
zomato
  .dailymenu({
    res_id: 16507902
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
[{ daily_menu_id: 18285215,
  start_date: '2016-08-27 00:00:00',
  end_date: '2016-08-27 23:59:59',
  name: '',
  dishes: [ { dish: [Object] }, { dish: [Object] }, { dish: [Object] } ] }]
```
### reviews
Get restaurant reviews
##### Parameters
| Name      | Type   | Description                             |
| :-------: | :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name     | Type   | Description                                 | Required |
| :------: | :----: | :-----------------------------------------: | :------: |
| `res_id` | Number | Id of restaurant whose details are required | Yes      |
| `start`  | Number | Fetch results after this offset             | Yes      |
| `count`  | Number | Max number of results to retrieve           | Yes      |

##### Returns
`Promise`
##### Example
```javascript
zomato
  .reviews({
    res_id: 34383
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
[ { rating: 4,
    review_text: 'This place is special to anyone in Mumbai... I make it a point to visit this place every time I am in town... I remember last time I was there only for 24 hours but I travelled all the way from malad and made sure I visited this place... I love it... The food and drinks are great... I only wish the service was better... I don\'t know if they are less on staff or what but the service is really very slow... I love the cold coffee here... It\'s the original coffee without ice cream without chocolate ...',
    id: '28023184',
    rating_color: '5BA829',
    review_time_friendly: 'yesterday',
    rating_text: 'Great!',
    timestamp: 1472195871,
    likes: 1,
    user:
     { name: 'Swati Chaturvedi',
       foodie_level: 'Big Foodie',
       foodie_level_num: 4,
       foodie_color: 'ffae4f',
       profile_url: 'https://www.zomato.com/users/swati-chaturvedi-29252353?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
       profile_image: 'https://b.zmtcdn.com/data/user_profile_pictures/f73/f0cb65cf235ee6b35d99374fdd1c6f73.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
       profile_deeplink: 'zomato://u/29252353' },
    comments_count: 0 },
  { rating: 4,
    review_text: 'this place is an institution. its my moms favorite restaurant on a holiday, the beer tower is legend. the starters never disappoint. love this place!',
    id: '28018320',
    rating_color: '5BA829',
    review_time_friendly: 'yesterday',
    rating_text: 'Great!',
    timestamp: 1472137295,
    likes: 1,
    user:
     { name: 'Monish Rohra',
       foodie_level: 'Super Foodie',
       foodie_level_num: 8,
       foodie_color: 'f58552',
       profile_url: 'https://www.zomato.com/users/monish-rohra-1288030?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
       profile_image: 'https://b.zmtcdn.com/data/user_profile_pictures/b1d/96b944fba01dc15c7046ba0f5b3eeb1d.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
       profile_deeplink: 'zomato://u/1288030' },
    comments_count: 0 },
  { rating: 2,
    review_text: 'Pathetic experience twice in a row. Ordered a chicken pepper steak today which is basically a chicken patty pretty much like an oversized burger patty served in a bed of fries and veggies.',
    id: '28012061',
    rating_color: 'FF7800',
    review_time_friendly: '3 days ago',
    rating_text: 'Blah!',
    timestamp: 1472065364,
    likes: 0,
    user:
     { name: 'Srinayana Goswami',
       zomato_handle: 'srinayana',
       foodie_level: 'Foodie',
       foodie_level_num: 3,
       foodie_color: 'ffd35d',
       profile_url: 'https://www.zomato.com/srinayana?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
       profile_image: 'https://b.zmtcdn.com/data/user_profile_pictures/2c2/0e0696c35eab59cdef8ecaba998902c2.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
       profile_deeplink: 'zomato://u/356375' },
    comments_count: 0 },
  { rating: 4.5,
    review_text: 'Best place to hangout, space is limited.delicious salted peanuts :D, overall good ambience. Recommend to try at least once you will love it.',
    id: '28006197',
    rating_color: '3F7E00',
    review_time_friendly: '3 days ago',
    rating_text: 'Loved it!',
    timestamp: 1472016031,
    likes: 0,
    user:
     { name: 'Arun Prakash',
       foodie_level: 'Foodie',
       foodie_level_num: 3,
       foodie_color: 'ffd35d',
       profile_url: 'https://www.zomato.com/users/arun-prakash-1694606?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
       profile_image: 'https://b.zmtcdn.com/data/user_profile_pictures/391/c48ea2c531757fd8427084628e202391.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
       profile_deeplink: 'zomato://u/1694606' },
    comments_count: 0 },
  { rating: 3,
    review_text: 'Seems to be hyped. Seating is not very comfortable. Can get much better ambeince elsewhere. If you want to just hang out for a couple of drinks and snacks its fine but otherwise its expensive. Unless you want to empty your pocket and end up eating the entire menu.',
    id: '27996108',
    rating_color: 'CDD614',
    review_time_friendly: '5 days ago',
    rating_text: 'Average',
    timestamp: 1471890070,
    likes: 0,
    user:
     { name: 'Indrani Mitra',
       foodie_level: 'Big Foodie',
       foodie_level_num: 5,
       foodie_color: 'ffae4f',
       profile_url: 'https://www.zomato.com/users/indrani-mitra-15771833?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
       profile_image: 'https://b.zmtcdn.com/data/user_profile_pictures/5f6/cd607abd77d7e889bdda9326a7b955f6.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
       profile_deeplink: 'zomato://u/15771833' },
    comments_count: 0 } ]
```
### search
Search for restaurants
##### Parameters
| Name      | Type   | Description                             |
| :-------: | :----: | :-------------------------------------: |
| `options` | Object | `options` containing the params to send |
##### Options
| Name                 | Type   | Description                                                                  | Required |
| :------------------: | :----: | :--------------------------------------------------------------------------: | :------: |
| `entity_id`          | Number | The location id                                                              | No       |
| `entity_type`        | Number | The location type (`city`, `subzone`, `zone`, `landmark`, `metro`, `group`)  | No       |
| `q`                  | Number | Search keyword                                                               | No       |
| `start`              | Number | Fetch results after this offset                                              | No       |
| `count`              | Number | Max number of results to retrieve                                            | No       |
| `lat`                | Number | Latitude                                                                     | No       |
| `lon`                | Number | Longitude                                                                    | No       |
| `radius`             | Number | The radius around (`lat`,`lon`); to define search area, defined in meters(M) | No       |
| `cuisines`           | String | The list of cuisine id's separated by comma                                  | No       |
| `establishment_type` | String | The establishment id obtained from establishments call                       | No       |
| `collection_id`      | Number | The collection id obtained from collections call                             | No       |
| `category`           | String | The category ids obtained from categories call                               | No       |
| `sort`               | String | sort restaurants by `cost`, `rating`, `real_distance`                        | No       |
| `order`              | String | Used with 'sort' parameter to define ascending(`asc`) / descending(`desc`)   | No       |
##### Returns
`Promise`
##### Example
```javascript
zomato
  .search({
    q: 'Leopold Cafe & Bar',
    count: 3
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
```
##### Sample Response
```javascript
[ { R: { res_id: 18318085 },
    apikey: 'YOUR-API-KEY',
    id: '18318085',
    name: 'This & That Café',
    url: 'https://www.zomato.com/mumbai/this-that-café-goregaon-east?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    location:
     { address: 'Shop 3, Divine Co-operative Housing Society, General A.K. Vaidya Road, Next To Oberoi Mall, Goregaon East, Mumbai',
       locality: 'Goregaon East',
       city: 'Mumbai',
       city_id: 3,
       latitude: '19.1751704614',
       longitude: '72.8615309671',
       zipcode: '',
       country_id: 1 },
    cuisines: 'Cafe, Desserts',
    average_cost_for_two: 450,
    price_range: 1,
    currency: 'Rs.',
    offers: [],
    thumb: 'https://b.zmtcdn.com/data/pictures/5/18318085/f5774b774890f6c6059d6f70ded60871_featured_v2.jpg',
    user_rating:
     { aggregate_rating: '3.1',
       rating_text: 'Average',
       rating_color: 'CDD614',
       votes: '9' },
    photos_url: 'https://www.zomato.com/mumbai/this-that-café-goregaon-east/photos#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    menu_url: 'https://www.zomato.com/mumbai/this-that-café-goregaon-east/menu#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    featured_image: 'https://b.zmtcdn.com/data/pictures/5/18318085/f5774b774890f6c6059d6f70ded60871_featured_v2.jpg',
    has_online_delivery: 0,
    is_delivering_now: 0,
    deeplink: 'zomato://r/18318085',
    events_url: 'https://www.zomato.com/mumbai/this-that-café-goregaon-east/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    establishment_types: [] },
  { R: { res_id: 34383 },
    apikey: 'YOUR-API-KEY',
    id: '34383',
    name: 'Leopold Cafe & Bar',
    url: 'https://www.zomato.com/mumbai/leopold-cafe-bar-colaba?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    location:
     { address: 'S.B. Singh Road, Colaba Causeway, Colaba, Mumbai',
       locality: 'Colaba',
       city: 'Mumbai',
       city_id: 3,
       latitude: '18.9226700352',
       longitude: '72.8317061439',
       zipcode: '0',
       country_id: 1 },
    cuisines: 'Chinese, Continental, North Indian',
    average_cost_for_two: 1600,
    price_range: 3,
    currency: 'Rs.',
    offers: [],
    thumb: 'https://b.zmtcdn.com/data/pictures/3/34383/8e83b3c49d6eda58de51232a58b78674_featured_v2.jpg',
    user_rating:
     { aggregate_rating: '4.0',
       rating_text: 'Very Good',
       rating_color: '5BA829',
       votes: '5124' },
    photos_url: 'https://www.zomato.com/mumbai/leopold-cafe-bar-colaba/photos#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    menu_url: 'https://www.zomato.com/mumbai/leopold-cafe-bar-colaba/menu#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    featured_image: 'https://b.zmtcdn.com/data/pictures/3/34383/8e83b3c49d6eda58de51232a58b78674_featured_v2.jpg',
    has_online_delivery: 1,
    is_delivering_now: 1,
    deeplink: 'zomato://r/34383',
    order_url: 'https://www.zomato.com/mumbai/leopold-cafe-bar-colaba/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    order_deeplink: '',
    events_url: 'https://www.zomato.com/mumbai/leopold-cafe-bar-colaba/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    establishment_types: [] },
  { R: { res_id: 45212 },
    apikey: 'YOUR-API-KEY',
    id: '45212',
    name: 'Gossip The Cafe Bar',
    url: 'https://www.zomato.com/mumbai/gossip-the-cafe-bar-borivali-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    location:
     { address: '1, Ekta Elegance, Yogi Nagar, New Link Road, Borivali West, Mumbai',
       locality: 'Borivali West',
       city: 'Mumbai',
       city_id: 3,
       latitude: '19.2394027778',
       longitude: '72.8444444444',
       zipcode: '',
       country_id: 1 },
    cuisines: 'Cafe',
    average_cost_for_two: 500,
    price_range: 2,
    currency: 'Rs.',
    offers: [],
    thumb: 'https://b.zmtcdn.com/data/pictures/2/45212/3c0ead39f24f0d8ef2d0aa71d6a06cd7_featured_v2.jpg',
    user_rating:
     { aggregate_rating: '3.5',
       rating_text: 'Good',
       rating_color: '9ACD32',
       votes: '223' },
    photos_url: 'https://www.zomato.com/mumbai/gossip-the-cafe-bar-borivali-west/photos#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    menu_url: 'https://www.zomato.com/mumbai/gossip-the-cafe-bar-borivali-west/menu#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    featured_image: 'https://b.zmtcdn.com/data/pictures/2/45212/3c0ead39f24f0d8ef2d0aa71d6a06cd7_featured_v2.jpg',
    has_online_delivery: 0,
    is_delivering_now: 0,
    deeplink: 'zomato://r/45212',
    events_url: 'https://www.zomato.com/mumbai/gossip-the-cafe-bar-borivali-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
    establishment_types: [] } ]
```
## Tests
Clone this repo, then
```
npm install
API_KEY="YOUR-API-KEY" npm test
```
## Credits
* https://github.com/olalonde/node-yelp
* https://github.com/michael/github
* https://github.com/danillouz/devrant
