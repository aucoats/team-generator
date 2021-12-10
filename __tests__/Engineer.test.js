const Engineer = require('../lib/Engineer.js')

test('creates engineer object', () => {
    const engineer = new Engineer('Stitch', '626', 'experiment@626.com', 'github')

    expect(engineer.name).toBe('Stitch')
    expect(engineer.id).toBe('626')
    expect(engineer.email).toBe('experiment@626.com')
    expect(engineer.github).toBe('github')
})

test('gets engineer name', () => {
    const engineer = new Engineer('Stitch', '626', 'experiment@626.com')

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()))
})

test('gets engineer id', () => {
    const engineer = new Engineer('Stitch', '626', 'experiment@626.com')

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()))
})

test('gets engineer email', () => {
    const engineer = new Engineer('Stitch', '626', 'experiment@626.com')

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()))
})

test('gets engineer role', () => {
    const engineer = new Engineer('Stitch', '626', 'experiment@626.com')

    expect(engineer.getRole()).toBe(`Engineer`)
})

test('gets engineer github', () => {
    const engineer = new Engineer('Stitch', '626', 'experiment@626.com', 'github')    

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
})