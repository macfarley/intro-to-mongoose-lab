require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const prompt = require('prompt-sync')();
const Customer = require('./models/customer');
const username = prompt('What is your name? ');
// Prompt user for input upon reset/start

function userInput () {
    console.log('\n', 'Please select an option:');
    console.log('1. Create a new customer');
    console.log('2. View all customers');
    console.log('3. Update a customer');
    console.log('4. Delete a customer');
    console.log('5. Quit');
    const option = prompt('Enter your choice: ');

switch (option) {
    case '1':
        // Code to create a new customer
        const newCustomer = async () => {
            const result = await Customer.create({
                name: prompt('Enter the name: '),
                age: prompt('Enter the age: ')
            });
            console.log(`Success! Customer profile created for`, result.name);
            // Prompt user for input upon reset/start
            userInput();
        };
        newCustomer();
        break;
    case '2':
        // Code to view all customers
        const findCustomers =  async () => {
            const result = await Customer.find({});
            console.log('Heres all the customers:' , result);
            userInput();
        }
        findCustomers();
        break;
    case '3':
        // Code to update a customer
        updateCustomer = async () => {
            const result = await Customer.find({});
            console.log('/n','Heres all the customers:' , result, 'Enter the ID of the customer you want to update');
            
            const userChanges = await Customer.findByIdAndUpdate(prompt('Enter the ID: '), {
                name: prompt('Enter the name: '),
                age: prompt('Enter the age: ')
            }
            , {new: true});
            console.log(`Success! updated`, userChanges);
            userInput();
        }
        updateCustomer();
        break;
    case '4':
        // Code to delete a customer
        deleteCustomer = async () => {
            const result = await Customer.find({});
            console.log('\n', 'Heres all the customers:' , result, 'Enter the ID of the customer you want to delete');
            
            const entryRemoved = await Customer.findByIdAndDelete(prompt('Enter the ID: '), );
            console.log(`Customer Deleted`, entryRemoved.name, '\n');
            userInput();
        }
        deleteCustomer();
        break;
    case '5':
        console.log('Goodbye!');
        process.exit();
        mongoose.connection.close()
    default:
        console.log('Invalid option');
}
    };

console.log(`Welcome to the CRM, ${username}`);
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, );
userInput();


