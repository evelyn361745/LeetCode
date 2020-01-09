/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map();
    for (let i = 0; i < cpdomains.length; i++) {
        let curnum = cpdomains[i].split(' ')[0];
        let cur = (cpdomains[i].split(' ')[1]).split('.')
        while(cur.length !== 0) {
            let x = cur.join('.')
            if (map.has(x))
                map.set(x, map.get(x) + parseInt(curnum))
            else    
                map.set(x, parseInt(curnum))
            cur.shift();
        }
    }
    let res = [];
    map.forEach(function(value, key) {
        let tmp = value + ' ' + key;
        res.push(tmp);
    })
    return res;
};
let domains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(domains))