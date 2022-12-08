function show(){
    
    let country = input.value 

    //2.make api call using fetch
    fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
    .then((result)=>{
       result.json()
       .then((data)=>{
        populationData(data);
       }) 
    })
}
function populationData(data){
    let country = data[0].name
    let capital = data[0].capital
    let population = data[0].population
    let timezones = data[0].timezones
    let currency = data[0].currencies[0].name
    let symbol = data[0].currencies[0].symbol
    let language = data[0].languages[0].name
    let flag = data[0].flag

    htmlData=`
    <div class="card mt-5 text-center" style="width: 100%;">
    <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
    <img src="${flag}" class="card-img-top" style="width:50%; alt="..."></div>
    <div class="col-2"></div>
    </div>

<div class="card-body">
<h5 class="card-title mt-3 text-uppercase">${country}</h5>
<p class="card-text"></p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">capital: ${capital}</li>
<li class="list-group-item">Time Zone: ${timezones}</li>
<li class="list-group-item">population: ${population}</li>
<li class="list-group-item">currency: ${symbol} ${currency}</li>
<li class="list-group-item">Language: ${language}</li>
</ul>
</div>`


     output.innerHTML = htmlData
}