const fs = require('fs')
const inquirer = require('inquirer')

const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

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

            if (member.memberType === 'Engineer') {
               genEngineer(team)
            } else if (member.memberType === 'Intern') {
               genIntern(team)
            } else {
                completeTeam(team)
            }
        })
        
        
}


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

function completeTeam(team) {
    
    function createManager(team) {
        const {name, id, email, officeNumber, members} = team;
        console.log('name:', name)
        console.log('id:', id)
        console.log('email:', email)
        console.log('officeNumber:', officeNumber)
        console.log('members:', members)
        const managerObject = new Manager(name, id, email, officeNumber, members)
        return managerObject
    }
        const {}

    function createEngineer(team) {
        const {name, id, email, officeNumber, github} = team.members.engineers;
        console.log('name:', name)
        console.log('id:', id)
        console.log('email:', email)
        console.log('officeNumber:', officeNumber)
        console.log('github:', github)
        const engineerObject = new Engineer(name, id, email, officeNumber, github)
        return engineerObject
    } 
}

init()

// init()
//     .then((firstPrompt) => {
//         console.log('firstPrompt:', firstPrompt)
//         promptMember(firstPrompt)
        
    // })
    // .then((completed) => {
    //     console.log('completed:', completed)
    //     return new Promise((resolve, reject) => {
    //     resolve(console.log('completed:', completed))
    //     })
    // })


    // .then(completedTeam => {
    //     return writeHTMLFile(completedTeam)
    // })
    // .then(copyStyle => {
    //     console.log(copyStyle)
    //     return copyStyleFile();
    // })
    // .then(copyResponse => {
    //     console.log(copyResponse)
    // })
    // .catch(err => {
    //     console.log(err)
    // })