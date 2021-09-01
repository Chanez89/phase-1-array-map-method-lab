const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
  })
}

// tutorials.map(tutorial => {
//                                            //["what","does","the","this","keyword","mean?"]
//    tutorial.split(' ').map(word => {
//      return word.charAt(0).toUpperCase() + word.slice(1)
//    });
   //["what", "does", "the", "this", "keyword"].map{word = >}

//elements.join() joins strings together in an array

// const aolUsername = 'xXxCaNdIxXx';    EXAMPLE of capitalizing 1st letter and lowercasing the rest.
// //Xxxcandixxx


// console.log(aolUsername.charAt(0).toUpperCase() + aolUsername.slice(1).toLowerCase());

//   return titleCased;
// }




//split method

//const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words);



//let stepOne = tutorials.map(tutorial => tutorial.split(' '))
//let stepTwo = stepOne.map(tutorial => tutorial.map(word => word.charAt(0)))
//let stepThree = stepTwo.map(tutorialArray => tutorialArray.join(' '))