 // Functions make other functions
// const {getAge, getUUID} = require('../plugins');

const builMakePerson = ({ getUUID, getAge }) => {
    return ({name, birthdate}) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(new Date(birthdate))
        }
    } 
}
module.exports = {
    builMakePerson,
}