function receivesAFunction(mySpy){
     console.log("Hi there !");
     mySpy();
}
function returnsANamedFunction(){
    return function Goodbye(){
        console.log("Goodbye!");
    }
}
function returnsAnAnonymousFunction(){
 return () => console.log("am the best developer!");
}

