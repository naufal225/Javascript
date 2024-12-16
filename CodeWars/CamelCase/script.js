function toCamelCase(str){
    let str2 = str.split('');
    str2.forEach((e,i,arr) => {
        if(e === "-" || e === "_") {
            arr[i+1] = arr[i+1].toUpperCase()
        }
    })
    str2.join('')
    return str2
}

console.log(toCamelCase("apa-apaan-ini"));