//Init module if you need
let map = new Map();
let str = "";
function Init()
{
    // write code here    
    map = new Map();
    str = "";
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    str += ch
    if (map.has(ch))
        map.set(ch, map.get(ch) + 1);
    else 
        map.set(ch, 1);
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1)
            return str[i]
    }
    return '#'
}