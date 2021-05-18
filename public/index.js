//const baseURL = 'https://api.nasa.gov/planetary/apod?date=2020-06-15&api_key=8YcSQkaaopi7LlrwZRxSuAI0kitVUPhrKR0RnrWf'
const baseURL = 'https://api.nasa.gov/planetary/'

const date = document.getElementById('birthday');
const submitBtn = document.querySelector('form');
const resuts = document.querySelector('section');
submitBtn.addEventListener('submit', fetchdate);

console.log(baseURL);


function fetchdate(event){
    event.preventDefault();
    console.log('fetchdate called');
    console.log(date.value);
    url = `${baseURL}apod?date=2020-${date.value}&api_key=8YcSQkaaopi7LlrwZRxSuAI0kitVUPhrKR0RnrWf`
    fetch(url)
        .then(results =>{
            console.log(results);
            return results.json();
        })
        .then(json =>{
            console.log(json);
            displayResults(json);
        })
        .catch(err => console.log(err));
}

function displayResults(data){
    console.log('Display Results', data.media_type);
    if(data.media_type === "image"){
        let img = document.createElement('img');
        img.src = data.url;
        resuts.appendChild(img);
   } else{
       let vid = document.createElement('iframe');
       vid.src = data.url;
       resuts.appendChild(vid);
   }
}
