# Curriculum

## Setup

***1***. Clone the (garageScript/curriculum) repository locally

***2***. To install all of the dependencies, run `yarn` in the root curriculum directory

## Solve an Exercise
***1***. Pick an exercise that you would like to work on

***2***. Create a new branch for the exercise solution

***3***. Edit and save the solution file (e.g. `vim curriculum/js1/1.js`)

***4***. Test your solution using the appropriate script in `../tests`

> For example, to test your solution to `curriculum/js1/1.js`, run the following command:
> ```bash
> yarn run test curriculum/js1/tests/1.js
> ```

how to run locally with mocha:

1.  rename the file to test
2. npm i
3. npm i -D chai
4. npm i -D mocha
5. Npx mocha

Cd into curriculum then copy and execute:
$ npx mocha js0/test
or test a single file
$ npx mocha js0/test/1.js
