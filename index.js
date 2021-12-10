const fs = require('fs')
const inquirer = require('inquirer')

const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

function init() {
    console.log(`
    Thank you for choosing Team Builder!
    
    Please enter your team members' details below to generate your team page.
    `)   

    teamManager()
}

function teamManager() {
    return inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'Manager name: '
        })
        // {
        //     type: 'text', 
        //     name: 'id', 
        //     message: 'Manager ID number: '
        // },
        // {
        //     type: 'text', 
        //     name: 'email',
        //     message: 'Manager email: '
        // }, 
        // {
        //     type: 'text',
        //     name: 'officeNumber',
        //     message: "Manager's office number: "
        // })
        .then(data => {
            console.log(this)
            console.log(data)
            // const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            // console.log(manager);
        // })
})}

init()

