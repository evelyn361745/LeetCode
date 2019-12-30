/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0; 
    let ten = 0;
    while(bills[0]){
        if (bills[0] === 5){
            five++;
            bills.shift();
        }
        else if (bills[0] === 10) {
            if (five > 0) {
                five--;
                ten++;
                bills.shift();
            }else {
                return false;
            }
        }
        else {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
                bills.shift();
                
            }
            else if (five > 3) {
                five -= 3;
                bills.shift();
            }
            else {
                return false;
            }
        }
    }
    return true;
};
let bills = [5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5];
console.log(lemonadeChange(bills))