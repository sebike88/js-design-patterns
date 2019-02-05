// A variation of the module pattern is called the 'Revealing Module Pattern'.
// The purpose is to maintain encapsulation and reveal certain variables
// and methods returned in an object literal.

var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();
Exposer.second();
Exposer.methodToExpose();