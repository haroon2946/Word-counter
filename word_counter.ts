#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright("***Welcome to the word counter ***"));

let userAnswer :{
    sentence: string
} = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: chalk.bold.magenta("Enter your sentence to count the words."),

    }
]);

let words = userAnswer.sentence.trim().split(" ");

// print the array of words to the console
console.log(words);

// print the word count sentence to the console
console.log(chalk.bold.greenBright(`Your sentence word count is ${words.length}`));
