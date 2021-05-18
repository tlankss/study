<script>
    var numAndInd = function(num,arr) {
        if(!arr.length) return
        let nums = 0
        for(let i=0; i< arr.length; i++) {
            nums+=arr[i]
            if(nums > num){
                return i
            }
        }
        return 'num大于数组之和'
    };
    console.log(numAndInd(6,[1,2]))
</script>