const Intern = require('../lib/Intern.js')

test('creates employee object', () => {
    const intern = new Intern('Stitch', '626', 'experiment@626.com', 'UNC')

    expect(intern.name).toBe('Stitch')
    expect(intern.id).toBe('626')
    expect(intern.email).toBe('experiment@626.com')
    expect(intern.school).toBe('UNC')
})

test('gets intern school', () => {
    const intern = new Intern('Stitch', '626', 'experiment@626.com', 'UNC')

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
})

test('gets intern role', () => {
    const intern = new Intern('Stitch', '626', 'experiment@626.com', 'UNC')

    expect(intern.getRole()).toBe(`Intern`)
})

