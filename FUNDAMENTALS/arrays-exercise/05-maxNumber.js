function maxNum (arr){
    let topNums = [];
    for (let i = 0; i < arr.length; i ++){
        let num = arr[i];
        let isTop = true;

        for (let j = i+1; j <arr.length; j ++){
            let curNum = arr[j];

            if (curNum>=num){
                isTop= false;
                break;

            }
        }
        if (isTop){
            topNums.push(num)
        }
    }
    console.log(topNums.join(' '));
}
maxNum([1, 4, 3, 2])