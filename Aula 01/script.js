const getAdmins = (map) => {
    let admins = [];

    for ([key,value] of map) {
        if(value === 'ADMIN') {
                admins.push(key);
        }
    }

    return admins;    
};

const userRoles = new Map();

userRoles.set('Henrique', 'ADMIN');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));

