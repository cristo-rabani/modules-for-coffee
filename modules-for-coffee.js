using = function (...args) {
    let p;
    if (args.length < 2){
        p = System.import(args[0]);
        return fn => p.then( parm => fn(parm));
    }
    p = Promise.all(args.map( arg => System.import(arg)));
    return fn => p.then( params => fn(...params))
};