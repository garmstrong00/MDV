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
function fixCase(fixThis) {
 
 
    String.prototype.toProperCase = function () {
 
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    fixThis.toProperCase();
    console.log(fixThis.toProperCase());
}

function checkUrl(testThisUrl) {
    var url = testThisUrl
    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    var isUrl = re.test(url);
    console.log("This is a " + isUrl + " url.");
    if (url.charAt(4) == "s") {
        console.log("This is a https url");
    }
    if (url.charAt(4) == ":") {
        console.log("This is a http url");
    }
    else console.log("This is not a valid URL");
}

function getDays(testDate) {
    var lastDayOfHockey = testDate;
    today = new Date(2012, 10, 18);
    var one_day = 1000 * 60 * 60 * 24;
    console.log(Math.ceil((today.getTime() - lastDayOfHockey.getTime()) / (one_day)) + " days have gone by without hockey since " + testDate)
}





























checkValidEmail("g.armstrong00@gmail.com");
checkPhoneNum("800-223-9087");
getSmallestNum();
fixCase("jon jones");
checkUrl("http://www.phandroid.com");
getDays(new Date(2012,6,11));