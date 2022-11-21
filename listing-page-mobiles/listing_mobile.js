
const typeUrl = "http://localhost:1000/type"
const priceUrl = "http://localhost:1000/price?catagory_id=";

const getPhpneType = async() => {
    
    let response = await fetch(typeUrl,{method:'GET'});
    let data = await response.json();
    data.map((item) => {
        let createBlankOptions = document.createElement('option');
        let getText = document.createTextNode(item.type);
        createBlankOptions.appendChild(getText);
        createBlankOptions.value = item.id;
        document.getElementById('type').appendChild(createBlankOptions);
    })
}

const getPriceBand = async () => {
    let phoneTypeId = document.getElementById('type').value;
    let priceBand = document.getElementById('price');
    while(priceBand.length > 0){
        priceBand.remove(0);
    }
    let response = await fetch(`${priceUrl}${phoneTypeId}`,{method:'GET'});
    let data = await response.json();
    data.map((item) =>{
        let createBlankOptions = document.createElement('option');
        let getText = document.createTextNode(item.price_band);
        createBlankOptions.appendChild(getText);
        // createBlankOptions.value = item.id;  optional beacuse no depenent list ahead
        priceBand.appendChild(createBlankOptions);
    })

}