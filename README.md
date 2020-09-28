# lab-01-quiz-page

### Plan

1) WHAT: We need these HTML elements:
    - We need some copy/content for the user to  (no id)
    - Button (needs an id)
        - Why? Initiate the prompts
    - Span/Div/Section (needs an id) to inject the results text into to show the user their score

1) WHEN: Add an event listener to the click of the button

1) WHAT HAPPENS: Quiz gets launched:
    1) Ask the user's name. Their name should be used in subsequent prompts
    1) Confirm that the user really wants to take the quiz. If not, `return` from your event listener function.
    1) Three YES/NO questions (using `prompt` calls) about the subject. Use your `countsAsAYes` function to determine the user's response, then compare to the correct answer. Track number of correct responses.
    1) Alert the user that the quiz is complete and their results will now be written to the webpage.
    1) Write a response to the page with their name and number correct out of the total. For example: "Okay Bernice, you got 2/3 correct". 