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

function urlToBase64(url) {
  return new Promise ((resolve,reject) => {
    let image = new Image();
    image.onload = function() {
      let canvas = document.createElement('canvas');
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      // 将图片插入画布并开始绘制
      canvas.getContext('2d').drawImage(image, 0, 0);
      // result
      let result = canvas.toDataURL('image/png')
      resolve(result);
    };
    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute("crossOrigin",'Anonymous');
    image.src = url;
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error('urlToBase64 error'));
    };
  })
}

urlToBase64('https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dee241d3dfe34563bbe95aa1cd638cad~tplv-k3u1fbpfcp-watermark.image').then(res => {
  console.log(res);
})