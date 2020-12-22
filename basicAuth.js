
const Role = require('./models').Role;
const User = require('./models').User;
const UserRole = require('./models').UserRole;
const Permission = require('./models').Permission;

const checkPermission = (permission) => {
    return async (req, res, next) => {
           
        let user = await User.findOne({ where: { id: 1 } ,  include: [{
            model: UserRole,
            as: 'userRole'
          }], 
        });
        if(!user)
            return res.status(403).send('User not found.')

        let userRole = user.userRole ? user.userRole.roleId : null;
        if(!userRole)
            return res.status(403).send('You have not assigned a role yet.')

        let role = await Role.findOne({ where: { id: userRole } ,  include: [{
                        model: Permission,
                        as: 'permissions'
                    }], 
                });
        let permissions = role ? role.permissions : null;
                
        const isPermission = permissions.some(user => user.name === permission); 

        if(!isPermission)
            return res.status(403).send('You have no access to this page.')
        
        next()
    }
}

const checkRole =  (userRole) => {
    return async (req, res, next) => {
        let user = await User.findOne({ where: { id: 1 } ,  include: [{
            model: UserRole,
            as: 'userRole'
        }], 
        });
        if(!user)
            return res.status(403).send('User not found.')

        let userRoleId = user.userRole ? user.userRole.roleId : null;
        if(!userRoleId)
            return res.status(403).send('You have not assigned a role yet.')
        
        let role = await Role.findOne({ where: { id: userRoleId }});
        if(!role)
            return res.status(403).send('You have not assigned specific role.')
        
        let isHasRole = role.name === userRole;
        if(!isHasRole)
            return res.status(403).send('You have no access to this page.')

        next()
    }
}
  
module.exports = {
    checkPermission,
    checkRole
}
