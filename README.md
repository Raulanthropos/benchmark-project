# fs0422-build-week-1
 Raul, Damian and Alex creating an awesome benchmarking tool

 ## EPICODE Benchmark interface

### Application Flow

This is a copy of the EPICODE Benchmark interface, as close as possible to the original.

### Requirements

1. Create the layout

2. Put the Epicode logo on the top left of each page, and the background in the layout.

3. Implement button functionality

4. Add the pages:
– Welcome page
– Question page
– Results page
– Feedback page

### Application flow:

The buttons on the bottom right are to be used to proceed to pages after the one the user is viewing. All but the "MORE" button at the last page, have the same functionality - proceed to the next page.

1. Welcome page - user needs to click on the checkbox, in order for the "PROCEED" button to be enabled and clickable.

2. Benchmark/question page: A timer goes off with a static 30 second countdown, that renews automatically, each time a question is answered. The "NEXT" button is disabled until the user chooses an answer. Answers get highlighted when hovered over, and change color once clicked on. If the user has not yet decided which answer to submit, or the time runs out before pushing the "NEXT" button, the website takes the user to the next question - if the answer was chosen, the answer is considered, else being void, it doesn't count towards the score.

3. Results page - on the left is the score, on the right is the percentage of wrong answers, and in the middle we have an animation similar to the original, with text within it, stating the score and either congratulating the applicant, or expressing empathy and assuring that a 1-on-1 will be scheduled with a TA, to rectify.

4. Feedback page - interactive, with a star rating system in place, that changes color to the stars preciding the one the user chooses to score, and retains that color once the star is clicked. User can leave feedback in the input field below the stars, and click on the "MORE INFO" button to be redirected to another page.
