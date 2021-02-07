
/**
 * My Info details
 */
fetch('/app/js/data/myInfo.json')
.then( response =>{
    if(!response.ok){
        throw new Error(`Fout!! ${response.status}`);
    }else{
        return response.json();
    }
})
.then(data =>{
    console.log(data.personalia.name);
    document.querySelector(".lead").innerHTML = data.lead.NL;
    document.querySelector("h1").textContent = data.personalia.name;

});

// fetch("./app/js/data/myInfo.json")
// .then(response => response.json())
// .then(json => console.log(json));