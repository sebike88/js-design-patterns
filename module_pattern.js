/* JavaScript modules are the most prevalently used design patterns for
 keeping particular pieces of code independent of other components.
 This provides loose coupling to support well-structured code */


var HTMLChanger = (function() {
  //Code outside of closure* is unable to access 
  //private variables since it is not in the same scope
  var contents = 'contents'

  var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  }



  return {
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };

})();

HTMLChanger.callChangeHTML();
console.log(HTMLChanger.contents);