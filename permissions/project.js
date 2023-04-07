const { ROLE, projects } = require('../data')

function canViewProject(user, project){
    return (
        user.role === ROLE.ADMIN || 
        project.userId === user.id
    )
}

function scopeProject(user, projcets){
    if(user.role === ROLE.ADMIN) return projcets
    return projects.filter((project) =>project.userId === user.id)
}

function canDeleteProject(user, projcets){
    return projcets.userId === user.id
}

module.exports = {
    canViewProject,
    scopeProject,
    canDeleteProject
}