// we don't want our function, any type of blockes scope for that matter, not get polluted by global scope,
// so we write IIFE, to protect it

// we wrap the function/blocked scope inside the function itself and then execute it at the same time:
// for eg:

(function coffee () {
    // this is a 'named' IIFE
    console.log(`Arabic`)
})();

( () => {
    // this is just an IIFE (un-named IIFE)
    console.log(`Indian`)
})();

( (name) => {
    // this is also just an IIFE (un-named IIFE)
    console.log(`My name is ${name}`)
})("Saksham");

// IIFE do not know where to end the contect, so we have to terminate the IIFE by ';' after every IIFE that we write
