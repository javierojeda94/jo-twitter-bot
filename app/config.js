/**
 * This file stands to register every code, key or 
 * any specific configuration of this kind needed 
 * to use in the rest of the app.
 */

// Deployment config
let PRODUCTION_ENV = process.env.NODE_ENV === 'production';

// Twitter config
let TWITTER_DEVELOPMENT_CONFIG = {
  consumer_key: 'YOUR-KEY-HERE',
  consumer_secret: 'YOUR-SECRET-KEY-HERE',
  access_token: 'YOUR-ACCESS-TOKEN',
  access_token_secret: 'YOUR-SECRET-ACCESS-TOKEN',
};
let TWITTER_PRODUCTION_CONFIG = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};
let search_queries = [
  { 
    q: '"web development" since:2017-01-31',
    lang: 'en', 
    count: 50 
  },
  { 
    q: '"entrepreneur" since:2017-01-31',
    lang: 'en', 
    count: 50
  },
  { 
    q: '"software engineering" since:2017-01-31',
    lang: 'en', 
    count: 50 
  }
]
let new_follower_responses = [
  'Hi, new_follower, thanks for the follow. I am a simple bot: someone follows me, I reply.',
];
let unfollow_responses = [
  'Someday we will meet again, drink a coffee and be happy, ex_follower :)',
];
let general_responses = [
  'Hi, emmiter. What\'s up?',
];
let twitter_user = 'bot_javierojeda';

module.exports.KEYS = (PRODUCTION_ENV)? TWITTER_PRODUCTION_CONFIG : TWITTER_DEVELOPMENT_CONFIG;
module.exports.SEARCH_QUERIES = search_queries;
module.exports.NEW_FOLLLOWER_RESPONSES = new_follower_responses;
module.exports.UNFOLLOW_RESPONSES = unfollow_responses;
module.exports.GENERAL_RESPONSES = general_responses;
module.exports.TWITTER_USER = twitter_user;