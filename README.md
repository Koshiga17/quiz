# quiz
This code implements a multiple-choice quiz using CSS, JavaScript and HTML.
The quiz questions are defined in an array called questions. Each question object in the array contains a prompt (the question itself), an array of options, and the index of the correct option.

The code keeps track of the current question index and the score. It retrieves HTML elements representing the question, options, and submit button using getElementById().

The loadQuestion() function is responsible for loading the current question and its options into the HTML elements. It sets the question prompt and dynamically creates buttons for each option.

The selectAnswer() function is called when the user clicks on an option. It retrieves the selected option index and checks if it matches the index of the correct option for the current question. If it's a correct answer, the score is incremented.

After selecting an answer, the code moves to the next question by incrementing the currentQuestion variable. If there are more questions, the next question is loaded using loadQuestion(). Otherwise, the showResult() function is called to display the final score.

The showResult() function updates the question element with a completion message and displays the score.

Finally, the initial question is loaded by calling loadQuestion(). An event listener is added to the submit button to trigger the selectAnswer() function when clicked.

Overall, this code provides the functionality to display and navigate through multiple-choice questions, calculate the score, and display the final result to the user.
