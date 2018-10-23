This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Introduction](#introduction)
- [Timeline](#timeline)
- [Result](#result)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Introduction

Due to a gap in between interviews and doing interviews' assignments, I have decided to work on a mini challenge for myself. I tried writing a calculator app with React.js in the shortest amount of time with my current knowledge. As I don't have any prior understanding on how to implement the logic of a calculator (with an exception that I built a console styled simple calculator with C# as the first app I built when learning how to code), this is a good opportunity to allow me to solve problems on the go and see how fast I can go to produce a working calculator. This challenge is mostly to build a prototype of a calculator that can solve simple mathimatic operation such as, addition, subtraction, multiplication, and division with standard calculator function such as numbers can be computed every time an operator button is pressed.

The challenge is completed if the following requirements are met:
- be able to add, substract, multiply and divide like a standard calculator
- operation can be repeated with computed numbers
- presentable design
- necessary feature of a calculator (e.g. AC and CE)

### How it is documented

I challanged myself on building a calculator with React.js and tracked the time I took to complete. I tried my very best to document time I took for each steps during the building process. However, as I am running a low-end PC, loading up of files and refreshing will take longer than expected.

Git commits were also done as a secondary method to monitoring the timeline

## Timeline

### 11:12 - 11:56 (44 minutes)

Initailise Create-react-app and updated this readme.

Install Meterial UI dependency and Update `index.html` to use Roboto fonts

Remove defaults from create-react-app and use Material UI for placeholder

Placeholder and initial design structure of calculator

### 11:56 - 13:18

break

### 13:18 - 13:44 (26 minutes)

Entering numbers with button

### 13:44 - 15:57

break during phone interview

### 15:57 - 16:20 (23 minutes)

Implemented single digit addtitive operation

### 16:20 - 17:30 

1 hour break running some errands

### 17:30 - 18:00 (30 minutes)

Implemented multiple digits addtitive operation

### 18:00 - 10:00

break

### 10:00 - 10:43 (43 minutes)

debugging, no progress

### 10:43 - 11:45

break

### 11:45 - 11:47 (2 minutes)

Implemented all operations for single use

### 11:53 - 12:30 (37 minutes)

add CE and AC for easy resetting numbers to ease debugging and feature implementation

calculator build success ready for further debug and design

### 12:30 - 14:00 (1 hours 30 minutes)

some refactoring, design and alignments 

## Result

In total, deducted all the breaks, I took 4 hours and 56 minutes to complete

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
