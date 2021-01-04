# codequiz.github.io
Homework 4 - Code Quiz


<body>

<h1>
# Code Quiz
</h1>

The link to the webpage is:
<a href="https://suziestephen.github.io/password-generator-hw.github.io/"> Code Quiz </a>


<b>Usage:</b>
Below is a screenshot of the final result with the generated password based on input criteria

![screenshot_generator](https://user-images.githubusercontent.com/74234842/100995489-f1f55900-35ab-11eb-8a4f-34ec45b6a431.png)

<b> My Process</b>
This project required many different elements that needed to work together. 

<i>Timer</i>
I had to find a way to ensure that when the Start button was pressed it would create an eventListener that would trigger the start of the timer. There was also considerable research that needed to be done to figure out how the remaining time would affect the users final score. This was very complicated but ultimately, with assistance from a developer who is a friend of mine, I was able to use the 

<i>Highscores</i>
I had to do considerable research on how to get the Highscores to function properly and found the answer on Stackoverflow that I could use a separate HTML file to host the highscores, linked to a separate script file. I could not get the Highscore script to function inside of my script file, perhaps due to the ordering and DOMS.



<b>Our Brief</b>
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

<b>Requirements</b>
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
