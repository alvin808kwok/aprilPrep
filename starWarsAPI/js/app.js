console.log('test');

function getData(){

var random = Math.floor(Math.random() * 87);
var swApi = 'https://swapi.co/api/people/' + random;

axios.get(swApi).then(function (response) {
    console.log(response.data)
    showData(response.data)
})
.catch(function (error) {
    noData()
});

}

getData();

function showData(data){
    var divElem = document.createElement('div');
    divElem.id = 'character';
    divElem.innerHTML = data.name;
    profile.appendChild(divElem);

    var pElem = document.createElement('p');
    pElem.id = 'weight';
    pElem.innerHTML = data.mass;
    profile.appendChild(pElem);

}

function noData(){
    profile.innerHTML = 'Nobody home cus';
}


