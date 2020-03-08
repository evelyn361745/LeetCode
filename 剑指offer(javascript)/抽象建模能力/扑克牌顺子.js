function IsContinuous(numbers)
{
    // write code here
    let arr = [],
        cnt = 0,
        map = new Map();
    for (let i = 0; i < 5; i++) {
        if (numbers[i] === 'A')
            arr.push(1);
        if (numbers[i] === 'J')
            arr.push(11);
        if (numbers[i] === 'Q')
            arr.push(12);
        if (numbers[i] === "K")
            arr.push(13);
        else {
            if (numbers[i] === 0)
                cnt++;
            else {
                if (map.has(numbers[i]))
                    return false;
                else {
                    arr.push(numbers[i])
                    map.set(numbers[i], 1)
                }
            }
        }
    }
    arr.sort(function(a, b) {
        return a - b;
    });
    if (cnt === 5 || cnt === 4)
        return true;
    else {
        let cha = arr[arr.length - 1] - arr[0];
        if (cha > 4)
            return false;
    }
    return true;
}

let numbers = [1,0,0,1,0];
console.log(IsContinuous(numbers));
