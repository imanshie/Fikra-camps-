/** Q20
   * A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
  
  [1, 3, 3, 5, 5, 5]
  // original array
  
  [1, 3, 5]
  // original array transformed into a set
  Create a function that sorts an array and removes all duplicate items from it.
  
  Examples
  set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
  
  set([4, 4, 4, 4]) ➞ [4]
  
  set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
  
  set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
  Notes
  For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
  See resources for a hint if you get stuck.
   */

  function sortArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return(arr)
}


let removeDuplicate = ((arr) => {
    arr = sortArray(arr)
    new_set = new Set()
    for(let i=0; i<arr.length; i++)
        if(arr[i] != arr[i+1])
            new_set.add(arr[i])
    return new_set
    //return new Set(arr)
});

console.log(removeDuplicate([4, 3, 1, 4]))