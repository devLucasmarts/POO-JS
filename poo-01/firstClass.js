function createNewPerson(name) {
    var obj = {};

    obj.name = name;
    obj.greeting = function() {
        console.log('Eae, me chamo ' + obj.name + '!')
    };

    return obj;
};

