// IMPORT MODULES under test here:
import { countsAsAYes } from '../counts-as-a-yes.js';

const test = QUnit.test;

test('countsAsAYes should take in a yes-like and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'yaaa';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('countsAsAYes should take in a no-like and return false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const no = 'NOPE';
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes(no);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
