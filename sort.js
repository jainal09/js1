let arr=[11, 10, 17, 5, 8, 21, 19];

for(let i =0; i<arr.length; i++){
    if(i+1<arr.length){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]> arr[j]){
            let intermVal = arr[i]
            arr[i] = arr[j]
            arr[j] = intermVal
        }
    }
    }
}
console.log(arr);
