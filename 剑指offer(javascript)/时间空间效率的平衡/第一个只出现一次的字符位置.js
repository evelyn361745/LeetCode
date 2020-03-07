function FirstNotRepeatingChar(str)
{
    // write code here
	// fangfayi hash table
    let dist = {};
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1);
            dist[str[i]] = -1;
        }else {
            map.set(str[i], 1);
            dist[str[i]] = i;
        }
    }
    let min = str.length;
    for (var key in dist) {
        if (dist[key] !== -1) {
            if (min > dist[key])
                min = dist[key]
        }
    }
    if (min === str.length)
        return -1;
    else
        return min;
}

function FirstNotRepeatingChar(str)
{
    // write code here
    // 方法二 
    var length=str.length;
    for(var i=0;i<length;i++)
    {
       if(str.lastIndexOf(str[i])==str.indexOf(str[i]))
       {
           return i;
           break;
       }
 
    }
     
    return -1;
}

let str = "google";
console.log(FirstNotRepeatingChar(str));
