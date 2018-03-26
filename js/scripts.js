$(function(){
  $("#wordForm").submit(function(event){
    var inputString = $("#sentence-input").val();

    function strToArray(string){
      return string.toLowerCase().split(' ');
    }

    var arrayOfWords = strToArray(inputString);
    var sortedArrayOfWords = arrayOfWords.sort();

    // wordCounter obj
    function wordCounter(array) {
      var obj = {};
      strToArray(inputString);
      array.forEach(function (word) {
        if(obj.hasOwnProperty(word)) {
          obj[word]++;
        } else {
          obj[word] = 1;
        }
      })
      return obj;
    }

    // version with arrays
    // var counts = [];
    // var next;
    // words.forEach(function(word) {
    //   if (word !== prev) {
    //     counts.push(1);
    //   } else {
    //     counts[count.length - 1]++;
    //   }
    //   prev = word;
    // });

    console.log(wordCounter(sortedArrayOfWords));

    //
    // wordCounter(arrayOfWords);
    event.preventDefault();
  });
});
