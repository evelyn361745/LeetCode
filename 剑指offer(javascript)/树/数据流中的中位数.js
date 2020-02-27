let numbers = [];
function Insert(num)
{
    // write code here
    numbers.push(num);
}
function GetMedian(){
	// write code here
    numbers.sort();
    let n = numbers.length;
    let mid = parseInt(n / 2)
    if (n % 2 === 0) {
        let tmp = numbers[mid - 1] + numbers[mid];
        return tmp / 2;
    }else {
        return numbers[mid];
    }
}
