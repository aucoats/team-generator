const Employee = require('../lib/Employee.js')

test('creates employee object', () => {
    const employee = new Employee('Stitch', '626', 'experiment@626.com')

    expect(employee.name).toBe('Stitch')
    expect(employee.id).toBe('626')
    expect(employee.email).toBe('experiment@626.com')
})

test('gets employee name', () => {
    const employee = new Employee('Stitch', '626', 'experiment@626.com')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()))
})

test('gets employee id', () => {
    const employee = new Employee('Stitch', '626', 'experiment@626.com')

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()))
})

test('gets employee email', () => {
    const employee = new Employee('Stitch', '626', 'experiment@626.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
})

test('gets employee role', () => {
    const employee = new Employee('Stitch', '626', 'experiment@626.com')

    expect(employee.getRole()).toBe(`Employee`)
})