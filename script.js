/* JavaScript code here */

console.log("External");

function sumArray(arr)
{
    var sum = 0;
    
    arr.forEach(function(value, index)
    {
        sum = sum + value;
    });
    
    return sum;
}

console.log(sumArray([1,2,3,4,5,6]));


function checkEmail(emailString)
{
    var emailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
;
    var match = emailFormat.test(emailString);
    
    return match;

}


console.log(checkEmail(('asta@amas.com')));
console.log(checkEmail(('asta@amas.org')));
console.log(checkEmail(('asta.amas.org')));