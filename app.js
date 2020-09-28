import { countsAsAYes } from './counts-as-a-yes.js';

// 1) WHAT: We need these HTML elements:
// - We need some copy/content for the user to  (no id)
// - Button (needs an id)
//     - Why? Initiate the prompts
// - Span/Div/Section (needs an id) to inject the results text into to show the user their score
const button = document.getElementById('launch-button');
const results = document.getElementById('results');

// 1) WHEN: Add an event listener to the click of the button
button.addEventListener('click', () => {
    // 1) Ask the user's name. Their name should be used in subsequent prompts
    const userName = prompt('What is your name?');

    // 1) Confirm that the user really wants to take the quiz. If not, `return` from your event listener function.
    const userHasConfirmed = confirm('Do you really want to take this quiz?');

    if (!userHasConfirmed) {
        alert('you have opted out. congrats!');
        return;
    }

    let correctAnswers = 0;

    // 1) Three YES/NO questions (using `prompt` calls) about the subject. Use your `countsAsAYes` function to determine the user's response, then compare to the correct answer. Track number of correct responses.
    const villainResponse = prompt(`Okay ${userName}! Is the antagonist's name Gruntilda?`);

    // user is correct!
    if (countsAsAYes(villainResponse)) {
        // we need to track the STATE of their correct answers
        correctAnswers++;
    }

    const sisterResponse = prompt(`Okay ${userName}! Is Banjo's sister named Tooty?`);

    // user is correct!
    if (countsAsAYes(sisterResponse)) {
        // we need to track the STATE of their correct answers
        correctAnswers++;
    }
    
    const cliffordResponse = prompt(`Okay ${userName}! Is Banjo best friends with Clifford the dog?`);

    // user is correct!
    if (!countsAsAYes(cliffordResponse)) {
        // we need to track the STATE of their correct answers
        correctAnswers++;
    }
    

    // 1) Alert the user that the quiz is complete and their results will now be written to the webpage.

    alert('Quiz complete! Check the page for your results');

    // 1) Write a response to the page with their name and number correct out of the total. For example: "Okay Bernice, you got 2/3 correct".   

    results.textContent = `Hey ${userName}, you got ${correctAnswers} right out of 3.`;
});

