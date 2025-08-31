// get num of days between two date:


const date1 = new Date('Jan 7 2019');
const date2 = new Date('Apr 22 2022');

/*
// Detailed Implementation of Date:
const getDays = (...args) => {
    // Yes, you can read the values of date1 and date2 inside the function
    // via the args array
    console.log(args[0]); // date1
    console.log(args[1]); // date2

    const oneDay = 1000 * 60 * 60 * 24;
    const time1 = args[0].getTime();
    const time2 = args[1].getTime();
    const time = Math.abs(time2 - time1);
    const days = Math.round(time/oneDay);
    console.log(`No of days: ${days}`);
    return days;
}
*/


// simpler version:
const getDays = (date1, date2) => {
    return Math.round(Math.abs((date2-date1)/(1000*60*60*24)))
}

console.log(getDays(date1, date2));