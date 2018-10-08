/* JavaScript code here */
/* JavaScript code here */

// console.log("External");

function sumArray(arr)
{
    var sum = 0;
    
    arr.forEach(function(value, index)
    {
        sum = sum + value;
    });
    
    return sum;
}

// console.log(sumArray([1,2,3,4,5,6]));


function checkEmail(emailString)
{
    var emailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
;
    var match = emailFormat.test(emailString);
    
    return match;

}


// console.log(checkEmail(('asta@amas.com')));
// console.log(checkEmail(('asta@amas.org')));
// console.log(checkEmail(('asta.amas.org')));






var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];



function getReadingStatus(index)
{
    var book = library[index];
    
    return book.readingStatus;
}



console.log(getReadingStatus(2));




var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];



function addItem(newItem)
{
    cart.push(newItem);
    
    console.log(cart);
}

var newItem = {
    name : 'EzLyf',
    price : 666,
    quantity : 1000
};

addItem(newItem);