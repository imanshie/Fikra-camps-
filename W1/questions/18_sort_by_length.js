/** Q18
   * Create a function that takes an array of strings and return an array, sorted from shortest to longest.
  
  Examples
  sortByLength(["Google", "Apple", "Microsoft"])
  ➞ ["Apple", "Google", "Microsoft"]
  
  sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
  ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
  
  sortByLength(["Turing", "Einstein", "Jung"])
  ➞ ["Jung", "Turing", "Einstein"]
  Notes
  All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.
   */

  let sortByLength = ((arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i].length>arr[j].length){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return(arr)
})


console.log(sortByLength(["Turing", "Einstein", "Jung"]))

