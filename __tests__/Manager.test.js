const Manager = require('../lib/Manager.js')

test('creates manager object', () => {
    const manager = new Manager('Stitch', '626', 'experiment@626.com', '06613')

    expect(manager.name).toBe('Stitch')
    expect(manager.id).toBe('626')
    expect(manager.email).toBe('experiment@626.com')
    expect(manager.officeNumber).toBe('06613')
})

test('gets manager name', () => {
    const manager = new Manager('Stitch', '626', 'experiment@626.com')

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()))
})

test('gets manager id', () => {
    const manager = new Manager('Stitch', '626', 'experiment@626.com')

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()))
})

test('gets manager email', () => {
    const manager = new Manager('Stitch', '626', 'experiment@626.com')

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()))
})

test('gets manager role', () => {
    const manager = new Manager('Stitch', '626', 'experiment@626.com')

    expect(manager.getRole()).toBe(`Manager`)
})

