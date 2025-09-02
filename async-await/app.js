// async / await 
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block




/*
// demonstration of asynchronous code in a synchronous fashion

const example = async () => {
    return "hello there";
}

async function someFunc() {
    const result = await example();
    console.log(result);
    console.log('After returning promise');
}

someFunc();
*/



// more detailed example:

const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' }
]

const articles = [
    { userId: 1, articles: ['one', 'two', 'three']},
    { userId: 2, articles: ['four', 'five']},
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine']}
]

// console.log(getUser('john'))         // ---> Returns a promise <state> and <value>

/*
// Good old way of returning value from a promise
getUser('john')
    .then((value) => getArticle(value.id))
    .then((output) => console.log(output))
    .catch((err) => console.log(err))
*/



const getData = async (name) => {
    try{
        const user = await getUser(name);
        const articles = await getArticle(user.id)
        console.log(articles);
    } catch(err) {
        console.log(err);
    }
    
}

getData('john');



function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name)
        if (user) {
            resolve(user)
        }
        else {
            reject(`No user with name: ${name} found.`)
        }
    })
}

function getArticle(userId) {
    return new Promise((resolve, reject) => {
        const article = articles.find((article) => article.userId = userId)
        if (article) {
            resolve(article.articles)
        }
        else {
            reject('No article found, Id wrong')
        }
    })
}

