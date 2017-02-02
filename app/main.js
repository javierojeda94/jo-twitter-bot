let config = require('./config')
let helpers = require('./helpers')
let Twitter = require('twit').call('constructor', config.KEYS)
let stream = Twitter.stream('user')
let every = require('./every')

let searchTweets = (callback) => {
  Twitter.get('search/tweets', helpers.getRandomFrom(config.SEARCH_QUERIES),
  function(err, data, response) {
    if(err){
      (callback)? callback(data.errors) : helpers.logError(data.errors);
    }else{
      (callback)? callback(data.statuses) : helpers.logInfo('Search done successfully!');      
    }
  });
}

let tweet = (response) => {
  Twitter.post('statuses/update', { 
    status: response
  }, function(err, data) {
    if(err){
        helpers.logError(data.errors);
      }else{
        helpers.logInfo(`TWEET. ${response}`);
      }
  })
}

let retweet = () => {
  searchTweets((tweets) => {
    let randomTweet = helpers.getRandomFrom(tweets);
    Twitter.post('statuses/retweet/:id', { 
      id: randomTweet.id_str 
    }, function (err, data, response) {
      if(err){
        helpers.logError(data.errors);
      }else{
        helpers.logInfo(`RT. https://twitter.com/${randomTweet.user.screen_name}/status/${randomTweet.id_str}`);
      }
    });
  });
}

let favorite = () => {
  searchTweets((tweets) => {
    let randomTweet = helpers.getRandomFrom(tweets);
    Twitter.post('favorites/create', { 
      id: randomTweet.id_str 
    }, function (err, data, response) {
      if(err){
        helpers.logError(data.errors);
      }else{
        helpers.logInfo(`FV. https://twitter.com/${randomTweet.user.screen_name}/status/${randomTweet.id_str}`);
      }
    });
  });
}

stream.on('follow', (event) => {
  helpers.logInfo('NF. Sending response immediately');  
  let emmiter = event.source.screen_name;
  if(emmiter !== config.TWITTER_USER){
    let response_tpl = helpers.getRandomFrom(config.NEW_FOLLLOWER_RESPONSES);
    let response = response_tpl.replace(/new_follower/g, `@${emmiter}`);
    tweet(response);
  }
  helpers.logInfo('NF. Response sent!');
});

stream.on('message', (event) => {
  if('user' in event){
    helpers.logInfo('MSG. New mention or tweet.');    
    let emmiter = event.user.screen_name;
    if(emmiter !== config.TWITTER_USER){
      let response_tpl = helpers.getRandomFrom(config.GENERAL_RESPONSES);
      let response = response_tpl.replace(/emmiter/g, `@${emmiter}`);
      tweet(response);
    }
    helpers.logInfo('MSG. Action taken.');
  }
});

retweet();
setInterval(retweet, every(60).minutes);
favorite();
setInterval(favorite, every(2).hours);