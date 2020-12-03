# Random password generator
This random password generator generates random passwords that match a users set of requirements that they are prompted to answer when the application runs.

## Motivation
These days we need several passwords for different purposes, we need them to be unique and secure, and for some accounts we also need to change them regularly. Coming up with secure passwords all the time is not easy.

This application aims to solve that issue by randomly generating random and secure passwords that match the users requirements.

## Process
To code the functionality for this project in Javascript, I first deconstructed it to it's basic steps and set up the variables needed to generate the password. 

The possible characters were saved as string variables, which were then added (or not) to a 'possible characters' variable as the user was prompted to select them. The length of the generated password was also saved as a variable when the user is prompted.

Once we have the information we need, a random character is selected from the resulting 'possible characters' string for every character of the requested length. This new string is saved as a new variable.

Finally the generated password variable is displayed on the screen.

## Features
The password generator will prompt the user to input the desired length of the password and the type of characters to include to match the user's requirements. It will then print the randomly generated sequence onto the screen.

## [See deployed application here.](https://ferwicker.github.io/password-generator/)

![Password generator screenshot](assets/password-generator.png)