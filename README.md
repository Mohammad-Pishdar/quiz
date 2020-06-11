# Coding Quiz 

## Description 
The idea here is to build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes. The user has to answer the questions by clicking on the appropriate answer button before the time runs out. Failure to answer the question within the allocated time will result in a Game Over. Here we use the remaining time at the time of answering the last question as user's score. Each user's score will be rendered into a high scores table on a numerically descending order that will dynamically updated each time a user takes the test. The ranking will remain in browser's local storage and will be accessibile even after refreshing the page unless the user decides to clear the high score table. Behind the scenes, it uses JavaScript to render different screens based on user's actions and to update highscores table and keep it in local storage unless user decides to clear it. 

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

This projec is an inetrenet-based app that runs inside the browser so you don't need to install anything. All you need is an internet browser to run the app. 


## Usage 

Clicking the start button starts the countdown timer and takes the user straight to the quiz section that consists of multiple choice questions. If the user fails to answer the questions during the provided timeframe a Game Over screen will be shown that takes user back to the start screen again. Each incorrect answer will deduct 10 seconds from the countdown timer, hence the score since the reamining time at the end of answering the last question will be considered as useer's score. User will also be notified whether he chose the correct or incorret answer as he/she clicks the answers. If user manages to answer all the questions within the allocated time, an all done message will be shown with the user's final score and and input box that asks the user to put his/her initials.Upon entering the initials and clicking the submit button, the highscores table will be shown. This table will be updated as more and more users take the test and shows the results ranked on a descending order based on the socres. The highscore results will remain in user's browser local storage and will be accessible by cliking the view highscores link at the top left of the start page even after refreshing the page. When on highscores page, the user can either choose to clear highscores which remove the highscores from local storage so they will no longer be accessible or click on th go back button that takes the user back to the start page. 

![alt text](https://github.com/Mohammad-Pishdar/quiz/blob/master/ezgif.com-gif-maker.gif)


## Credits

The idea about how to structure the questions and answers array has been taken watching this video [YouTube](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1019s). I also want to thank my amazing instructor Karl Kassebaum and my extraoridnarily helful mentor Wagner Lopes for their great insights and immense help.

## License

You can see the license [here](https://github.com/Mohammad-Pishdar/password-generator/blob/master/LICENSE.txt).






