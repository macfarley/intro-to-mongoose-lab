require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const prompt = require('prompt-sync')();
const Customer = require('./models/customer');
const username = prompt('What is your name? ');


console.log(`Welcome to the CRM, ${username}`);
console.log('Please select an option:');
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
            await Customer.create({
                name: prompt('Enter the name: '),
                age: prompt('Enter the age: ')
            });
            console.log(`Success! ${Customer} created` );
        };
        newCustomer();
        break;
    case '2':
        // Code to view all customers
        const findCustomers =  async () => {
            await Customer.find({});
            console.log(Customers);
        }
        findCustomers();
        break;
    case '3':
        // Code to update a customer
        updateCustomer = async () => {
            await Customer.findByIdAndUpdate(prompt('Enter the ID: '), {
                name: prompt('Enter the name: '),
                age: prompt('Enter the age: ')
            });
            console.log(`Success! ${Customer} updated` );
        }
        updateCustomer();
        break;
    case '4':
        // Code to delete a customer
        deleteCustomer = async () => {
            await Customer.findByIdAndDelete(prompt('Enter the ID: '));
            console.log(`Success! ${Customer} deleted` );
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