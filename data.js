const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    ROLE:ROLE,
    users: [
        { id:1, name: 'Kyle', role: ROLE.ADMIN},
        { id:2, name: 'Sally', role: ROLE.BASIC},
        { id: 3, name: 'Joe', role: ROLE.BASIC}
    ],
    projects: [
        { id: 1, name: "Kyle's Projects", userId: 1 },
        { id: 2, name: "Sally's Projects", userId: 2},
        { id: 3, name: "Sally's Projects", userId: 3}
    ]
}