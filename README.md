# Curriculum

GarageScript 2.0

Look up Javascript template languages





LEETCODE CHALLENGES

Sliding Window Maximum 36.5%            Hard

225    Implement Stack using Queues 37.4%    Easy    

226    Invert Binary Tree 56.4%                Easy    

229    Majority Element II 31.0%            Medium    

230    Kth Smallest Element in a BST 49.2%     Medium


how to run locally with mocha:

1.  rename the file to test
2. npm i
3. npm i -D chai
4. npm i -D mocha
5. Npx mocha

Cd into curriculum then copy and execute:
$ npx mocha js0/test

// Part of the git hook
// Husky git hook

// Eslint
// prettier
// git add
// test files

“I work too hard and too much to put up with anyone else’s shit”

Prettier = option + shift + F
Turbo console =  ctrl + option + L (for log)


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








yarn test curriculum/js0/__tests__/1.js — test the file

Setup (after teaching): 
1. Sign up for an account in https://c0d3.com 
2. Access our remote server: 
1. Mac: open the terminal to and type (ssh username@c0d3.com, password is the same as your GS account password). 
2. Windows: download the chrome shell app (https://chrome.google.com/webstore/detail/secure-shell-app/pnhechapfaindjhompbnflcldabbghjo?hl=en) and do the asame as previous step 
3. Once you’ve accessed our remote server, run the following commands (in purple): 
1. git clone /home/Shared/curriculum gives you a copy of our curriculum folder 
2. Explain: ls, cd   
3. yarn installs a few libraries you need in order to run our tests 
4. Explain git (version control) 
1. multiple versions of the same file 
2. when something breaks, you can go back to older version 
3. master - Perfect code 
4. git checkout -b branchName creates a new branch off of master (you are expected to create a new branch off of master for every single Pull Request you make) 
5. Vim - text editor 
1. normal vs insert 
2. ctrl f -> js01 
3. 9gg (vertical) 
4. f; (horizontal) 
5. i to go into insert mode 
6. :w to save or write 
7. :q to quit 
8. Or ZZ to save following with quit 
6. Run test, submit

git reset --hard HEAD 
1. Yarn test 
2. git status lets you see the file path/name you just changed 
3. git add filePath gets the file you just changed ready to be save 
4. git commit -m “solves problem 1” gives the file you’re about to save a label (this label describes the change you just made) 
5. submit 
6. Note: you will be prompted to choose the exact lesson and challenge you are currently submitting. 
7. Go back to your student page/teacher page, refresh it and see the solution you just submitted! :) 
8. Git branch to check which branch you are on. Git status to see which files have been modified/added/ready to be committed 
