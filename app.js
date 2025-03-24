const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);
