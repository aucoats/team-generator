const fs = require('fs')
const inquirer = require('inquirer')

const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

const mock = {
    name: "manager",
    id: "managerID", 
    email: "manageremail",
    officeNumber: "managerOffice",
    members: { 
        engineers: [{
            name: "engineer1",
            id: "engi1id", 
            email: "engi1email",
            github: "engigithub1"
            }, 
            {
            name: "engi2",
            id: "engi2id",
            email: "engi2email",
            github: "engi2github"
             }]
    }
}

// initial prompt and calls promptMember
function init() {
    console.log(`
    =======================================================
    Thank you for choosing Team Builder!
    
    Please enter your team manager's details below to begin.
    =======================================================

    `)   

    inquirer
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
            promptMember(data)
        })
}

// prompts for team member type, calls completeTeam if user input is complete
function promptMember(team) {
    if (!team.members) {
        team.members = []
    }

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'memberType',
                message: 'Would you like to add an engineer, an intern, or complete your team profile?',
                choices: ['Engineer', 'Intern', 'Complete Team']
            }
        ])
        .then(member => {
            
            // calls next prompt or completeTeam based on user input
            if (member.memberType === 'Engineer') {
               genEngineer(team)
            } else if (member.memberType === 'Intern') {
               genIntern(team)
            } else {
                completeTeam(team)
            }
        })
        
        
}

// gens engineers with inquirer prompts
function genEngineer(team) {
    if (!team.members.engineers) {
        team.members.engineers = []
    }

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name', 
                message: "What is your engineer's name?"
            },
            {
                type: 'input',
                name: 'id', 
                message: "What is your engineer's' employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your engineer's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is your engineer's github username?"
            },
            {
                type: 'confirm',
                name: 'confirmAnotherEngi',
                message: 'Would you like to add another engineer?',
                validate: confirmAnotherEngiInput => {
                    if (confirmAnotherEngiInput) {
                        return true;
                    } else {
                        console.log('Please confirm that you are done adding engineers.')
                        return false;
                    }
                }
            }
        ])
        .then(engiData => {
            team.members.engineers.push(engiData)

            if (engiData.confirmAnotherEngi) {
                genEngineer(team)
            } else {
                promptMember(team)
            }
        })

}

// gens interns with inquirer prompts
function genIntern(team) {
    if (!team.members.interns) {
        team.members.interns = []
    }

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name', 
                message: "What is your intern's name?"
            },
            {
                type: 'input',
                name: 'id', 
                message: "What is your intern's' employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is your intern's school's name?"
            },
            {
                type: 'confirm',
                name: 'confirmAnotherIntern',
                message: 'Would you like to add another intern?',
                validate: confirmAnotherEngiInput => {
                    if (confirmAnotherEngiInput) {
                        return true;
                    } else {
                        console.log('Please confirm that you are done adding interns.')
                        return false;
                    }
                }
            }
        ])
        .then(internData => {
            team.members.interns.push(internData)

            if (internData.confirmAnotherIntern) {
                genIntern(team)
            } else {
                promptMember(team)
            }
        })
}

// creates js objects with classes
function completeTeam(team) {
    
    console.log('team:', team)
    console.log('team.members:', team.members)
    console.log('team.members.engineers:', team.members.engineers)
    console.log('team.members.interns:', team.members.interns)

    // creates manager object
    const manager = new Manager(team.name, team.id, team.email, team.officeNumber);
    
    console.log('manager:', manager)

    // arrays to hold engineer and intern classes 
    const engiArray = []
    const internArray = []

    // each iteration of engi/intern info into Engineer class and pushes into array
    if (team.members.engineers) {
        for (i = 0; i < team.members.engineers.length; i++) {
            const engineer = new Engineer(team.members.engineers[i].name, team.members.engineers[i].id,
            team.members.engineers[i].email, team.members.engineers[i].github)
        
            engiArray.push(engineer)
            
    }}

    if (team.members.interns) {
        for (i = 0; i < team.members.interns.length; i++) {
            const intern = new Intern(team.members.interns[i].name, team.members.engineers[i].id, 
            team.members.interns[i].email, team.members.interns[i].school)

            internArray.push(intern)  

    }}   

    console.log('engiArray:', engiArray)
    console.log('internArray:', internArray)    

    // generateHTML(manager, engiArray, internArray).then( file writing functions)
}

function generateHTML(manager, engineers, interns) {
    return `
     `
}

// init()
completeTeam(mock)
