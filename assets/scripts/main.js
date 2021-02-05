// import info from '../data/myInfo.json';
// const myInfo = info;

fetch('../data/myInfo.json')
.then( response =>{
    if(!response.ok){
        throw new Error(`Fout!! ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log(`HALLELUYAAH: ${data}`);
});

