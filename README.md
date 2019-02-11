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

1. rename the file to test (optional)
2. npm i
3. npm i -D chai
4. npm i -D mocha
5. Npx mocha

Cd into curriculum then copy and execute:
$ npx mocha js0/test
(or test a single file)
$ npx mocha js0/test/1.js




If you get stuck be sure to checkout the Lesson Doc & Lecture Video on the website’s curriculum.

Also! Once you’ve finished a full lesson in the curriculum be sure to git merge you changes to master branch.

Ex: (On master branch you would write)

Git merge p1
Git merge p2
Git merge p3
Git merge p4
…
…

(On branch p1 you would write)

Git merge master

(On branch p2 you would write)

Git merge master

(On branch p1 you would write)

Git merge master

(On branch p1 you would write)

Git merge master




——————— WHEN GIT ISN’T WORKING IN CURRICULUM  DIRECTORY —————

cp -r curriculum old_curriculum2 		// Copies the curriculum recursively

git clone /home/Shared/curriculum 		// clones the new repository


OR!


rm -rf old_curriculum			// deletes the curriculum

rm -rf old_curriculum2/

rm -rf  curriculum

rm -D curriculum/ ???

git clone /home/Shared/curriculum 		// clones the new repository



— Mobile App —

https://testflight.apple.com/join/B8wZp83I

 testflight.apple.com



— what web can do today ——

https://whatwebcando.today/


——		TMUX 		——

tmux ls shows tmux sessions. If you have no sessions, it will probably show you an error. tmux new -s name creates a new tmux session called name tmux a -t name attach to a tmux session
When you are in tmux: ctrl + b then c creates a new window ctrl + b then n switches between windows ctrl + b then % Creates a new pannel. ctrl + b then o Switches between pannels
