/**
 * 数组快排
 *  快速排序的核心思想是分治：选择数组中某个数作为基数，通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数都比基数小，另外一部分的所有数都都比基数大，然后再按此方法对这两部分数据分别进行快速排序，循环递归，最终使整个数组变成有序。
 * @param {*} array 
 * @param {*} i 
 * @param {*} j 
 */
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

let array = [7, 1, 6, 5, 3, 2, 4]
let j = 0
let pivot = array[array.length - 1]
for (let i = 0; i < array.length; i++) {
  if (array[i] <= pivot) {
    swap(array, i, j++)
  }
}
console.log(array) // [ 1, 3, 2, 4, 7, 6, 5 ]

function partition(array,start,end){
    let pivot = array[array.length - 1]
    for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
        swap(array, i, j++)
    }
    } 
}