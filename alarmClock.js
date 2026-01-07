// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

//Params
// two params of type Boolean, employed and vacation, which can either be true or false
//Returns
// true if user is employed and not on vacation. false otherwise
//Examples
    // employed | vacation 
    // true     | true     => false
    // true     | false    => true
    // false    | true     => false
    // false    | false    => false
//Pseudocode
// conditional statement to determine if user is employed AND not on vacation

function setAlarm (employed, vacation) {

    return employed && !vacation ? true : false;

}

console.log(setAlarm(true, false))