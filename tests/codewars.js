{
    // Which are in?
    const a1 = ["arp", "live", "strong"];
    const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

    const inArray = (array1,array2) => {
        const resArr = [];
        
        array1.forEach((target, i) => {
            array2.forEach((el, j) => {
            
            if (el.includes(array1[i])) {
                if (!resArr.includes(array1[i])) {
                resArr.push(array1[i]);
                }
            }
            })
        })
        
        return resArr.sort();
    }

    console.log(inArray(a1, a2));
}