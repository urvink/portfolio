let info;
function getData(info){
    fetch('/app/js/data/myInfo.json')
    .then( response =>{
        if(!response.ok){
            throw new Error(`Fout!! ${response.status}`);
        }else{
            info = response.json();
        }
    });
}

getData(info);
console.log(info);

// fetch("./app/js/data/myInfo.json")
// .then(response => response.json())
// .then(json => console.log(json));