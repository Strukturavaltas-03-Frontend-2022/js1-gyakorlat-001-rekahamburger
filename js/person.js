'use strict';

const personDataLog = (user={firstname:'John' lastname:'Doe' age:33 } ) => {
    return 'My name is <firstname> <lastname>. I'm <age> years old.'
};

console.log(personDataLog(firstname,lastname,age));
