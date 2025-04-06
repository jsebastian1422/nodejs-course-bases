
// const { emailTemplate } = require('./js-fundation/01-template');
// require('./js-fundation/02-destructuring');
// const { getUserById } = require('./js-fundation/03-callbacks');
const {getAge, getUUID} = require('./plugins');
const getPokemonById = require('./js-fundation/06-promises');
const info = getPokemonById(1)
    .then( ( pokemon ) => console.log({ pokemon }) )
    .catch( (err) => console.log('Por favor intenente de nuevo') )
    .finally( () => console.log('Proceso finalizado') );







// ! Reference to factory function & scalator patron
// const { builMakePerson } = require('./js-fundation/05-factory');
// const makePerson = builMakePerson({getAge, getUUID});
// const obj = {name: 'John', birthdate: '1999-09-15'};
// const jhon = makePerson( obj );
// console.log(jhon);
