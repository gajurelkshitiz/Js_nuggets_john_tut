// Fetch API = Browser API for HTTP (AJAX) Requests
// Default = GET Requests, supports other methods as well
// Returns Promise


const url = 'https://www.course-api.com/react-tours-project';


// This is a async/await method that makes look visually good.
const fetchAPI = async(url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log('Error is: ', err);
    }
}

fetchAPI(url);


// console.log(fetch(url));   // just for demo that, "YES" fetch returns a PROMISE.


/*
//  for good old promise returning method:
fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

*/
