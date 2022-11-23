function receivesAFunction (cb) {
    return cb();
}
receivesAFunction(function() {return "passing function as a argument"});

function returnsANamedFunction () {
    return function greet(){ return `Hello`};

}
function returnsAnAnonymousFunction () {
    return function(){return `Hi`};
}