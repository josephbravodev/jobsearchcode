
const userInput = document.querySelector('#userSearch');

function scraperResults(userInput){
    const url = `https://www.indeed.com/jobs?q=${userInput}`; 
    setTimeout(function() {
      console.log("Unable To Retrieve Listings")
    }, 5000);
    return fetch(url)
    .then(response => response.text())
    .catch(error => {
      console.log(`Error fetching data: ${error}`); 
    });
  };  

  const form = document.querySelector('#searchForm');
  form.addEventListener('submit', (event) => {  
  event.preventDefault(); // prevent form from refreshing the page
  const searchTerm = userInput.value;
  scraperResults(searchTerm)
    .then(data => console.log(data)); // log data to console for testing purposes
});