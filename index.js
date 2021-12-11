const fs = require('fs')
const inquirer = require('inquirer')

const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

const mock = {
    name: 'austin',
    id: '101',
    email: 'no thanks', 
    officeNumber: 'heck'
}

function init() {
    console.log(`
    =======================================================
    Thank you for choosing Team Builder!
    
    Please enter your team manager's details below to begin.
    =======================================================

    `)   

    return inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'Manager name: '
        },
        {
            type: 'text', 
            name: 'id', 
            message: 'Manager ID number: '
        },
        {
            type: 'text', 
            name: 'email',
            message: 'Manager email: '
        }, 
        {
            type: 'text',
            name: 'officeNumber',
            message: "Manager's office number: "
        }])
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            return manager
        })
}

function promptMember(team) {
    if (!team.members) {
        team.members = []
    }

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'memberType',
                message: 'Would you like to add an engineer, an intern, or complete your team profile?',
                choices: ['Engineer', 'Intern', 'Complete Team']
            }
        ])
        .then(member => {

            if (member.memberType === 'Engineer') {
                genEngineer(member);
            } else if (member.memberType === 'Intern') {
                // genIntern(intern)
            } else {
                return team
            }


        })
}

function genEngineer(team) {
    if (!team.members.engineers) {
        team.members.engineers = []
    }

    return inquirer
        .prompt(
        
        )
        .then(engiData => {
            if (engiData.confirmAnotherEngi) {
                return genEngineer(engiData)
            }
        })

}

// // function generateIntern(team) {

// // }

init()
    .then(manager => {
        // console.log(promptMember(manager))
        return promptMember(manager)
    })
