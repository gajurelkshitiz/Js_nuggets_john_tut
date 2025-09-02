const url = 'https://www.course-api.com/react-tours-projects';


const getTours = async () => {
    try {
        const res = await fetch(url);
        if (!res.ok){
            throw new Error (`There was a error with url: ${res.status} - ${res.statusText}`)
        }
        const tours = await res.json();
        console.log(tours);
    } catch (error) {
        console.log(error);
    }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTours)