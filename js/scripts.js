$(function(){
  $("#wordForm").submit(function(event){
    var inputString = $("#sentence-input").val();

    function strToArray(string){
      return string.split(' ');
    }

    console.log(strToArray(inputString));

    function wordCounter(array) {
      var counter = 0;
      var compareWord = array.shift();
    }

    function wordCounter(array) {
      var counter = 0;
      var compareWord = array.shift();
      console.log(compareWord);
      array.forEach(function(word) {
        var words = array.filter(function(word) {
          return word === compareWord;
          counter = words.length;
          console.log(counter);
        });
      })
      console.log(words);
    }

    event.preventDefault();
  });
});
