# JO-BOT
My first Twitter bot, inspired on [this post](https://medium.freecodecamp.com/easily-set-up-your-own-twitter-bot-4aeed5e61f7f#.ydwrcyi8m).

## Libs used
* For connecting to the Twitter API: [Twit](https://github.com/ttezel/twit)

## Features
* **F01:** Search tweets based on topics that I'm interested in
  * modify the variable ```search_queries``` from ```app/config.js``` to change the conditions for the search
* **F02:** RT and FV some of the tweets resulting on the previous search
* **F04:** Responds to new followers
* **F06:** Responds to the users that mention it

## TODO
* ~~**F01:** Search tweets based on topics that I'm interested in~~
* ~~**F02:** RT and FV some of the tweets resulting on the previous search~~
* **F03:** Follows other users based on certain conditions
  * Twit is not triggering events when someone else follows the account linked to this app
* ~~**F04:** Responds to new followers~~
* **F05:** Send mention to a user that unfollows it
  * Same issue that in F03. In this case, Twit is not sending an event when someone else unfollows it
* ~~**F06:** Responds to the users that mention it~~
* **F07:** Notifies me when someone DM the account
  * The DM only can happen when the two accounts follow each other. Since this account can't follow any other automatically, I can't develop this feature yet.
* **F08:** Do a reasonable small conversation with someone when it is DM'med
  * I'm working on this since this need something more sophisticated (I don't know if I need to implement some IA or something else).

## Issues
If you think something is wrong, don't hesitate and **please** open an issue to solve it :)

## Contributions
If you wish to fork this repo and do something cool, you are free to do it always that you follow the [LICENSE](https://github.com/javierojeda94/jo-bot/blob/master/LICENSE).