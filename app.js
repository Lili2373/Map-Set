// What does the following code return?
//  Set {1,2,3,4}


// What does the following code return?
// [...new Set("referee")].join("") => "ref"

// What does the Map m look like after running the following code?

// let m = new Map();

// m.set([1,2,3] =>true);
// m.set([1,2,3] =>false);

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// const hasDuplicate = arr => new Set(arr).size !== arr.length;


// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// function vowelCount(str) {
    
//     str = str.toLowerCase();
  
//     const vowelCounts = new Map();
  
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

//     for (const char of str) {
//       if (vowels.has(char)) {
//         const count = vowelCounts.get(char) || 0;
//         vowelCounts.set(char, count + 1);
//       }
//     }
  
//     return vowelCounts;
//   }
  
  