function checkValidEmail(emailToCheck) {
    var emailAddress = emailToCheck
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    if (emailPattern.test(emailAddress)) {
        console.log("This is a valid email address.");
    } else {
        console.log("Not a valid email address.");
        
    }
}
var checkPhoneNum = function (testNumber) {
        var phoneNumber = testNumber;
        var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if (pattern.test(phoneNumber)) { 
            var validPhoneNumber = phoneNumber.replace(pattern, "($1) $2-$3");
            console.log("Valid phone number!"); 
        } else {
            return console.log("Invalid phone number!");
			}
}            
            

function getSmallestNum() {
    function isBigEnough(element, index, array) {
        return (element >= 14);
    }
    var filtered = [756, 2, 9, 59, 48, 10, 4, 799, 1000].filter(isBigEnough);
    isBigEnough();
    filtered.sort(function (a, b) {
        return a - b;
    });
    return console.log(filtered.shift());
    
}
    
































checkValidEmail("g.armstrong00@gmail.com");
checkPhoneNum("800-223-9087");
getSmallestNum();
