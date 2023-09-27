const KEY = 'fu-AtAwwCz8K3N5CpWDa'; // API Key
url = `https://data.nasdaq.com/api/v3/datasets/LBMA/gold/data.json?limit=1&column_index=2&api_key=${KEY}`; //AI url
goldPrice = document.querySelector('#gold_price'); //span in index that says current ogld price
//Get gold info
fetch(url)
    .then(response => response.json()) // gets JSON
    .then(json => theData = json) //stores data from jason in global
    .catch(err => {
        console.log(err);
        goldPrice.textContent = "Error- " + err; // tells user if there is an error
    })
    .finally(() => {
        goldPrice.textContent = theData.dataset_data.data[0][1]; // puts gold price in document
    });

var convert = function() {
    let container = document.querySelector('.conversions');
    let newContainer = document.createElement('div');
    newContainer.setAttribute('class', 'conversion');
    let conversion = document.createElement('p');
    conversion.setAttribute('onclick', 'deleteConversion(this.parentElement)');

    let fromUnit = document.querySelector('#selected_unit').value;
    let weight = document.querySelector('#weight').value;
    fetch(`http://localhost:8000/unitconv?from=${fromUnit}&to=t_oz&value=${weight}`)
        .then(response => response.json()) // gets JSON
        .then(json => conversionData = json) //stores data from jason in global
        .catch(err => {
            let time = new Date()
            conversion.textContent = `${err} at ${time.getHours()}:${time.getMinutes()}`
        })
        .finally(() => {
            conversion.textContent = `You are worth $${conversionData.value * theData.dataset_data.data[0][1]}!!!`
        });
    newContainer.appendChild(conversion);
    container.appendChild(newContainer);
}


var deleteConversion = function(elem) {
    elem.remove();
}