
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

/**
 * skills.json Fetch
 */
 fetch('/app/js/data/skills.json')
 .then(response =>{
    if(!response.ok){
        throw new Error(`Fout!! ${response.status}`);
    }else{
        return response.json();
    }
 })
 .then(data =>{
     console.log(data.skills);
     data.skills.forEach(skill => {
        //  document.querySelector(".techology").querySelector("techName").textContent = skill.name
        //Technology node
        let element = document.createElement("div");
        element.className = "technology";


        // console.log(element);
        
        //Tech name
        const techName = document.createElement("div");
        techName.className = "techName";
        techName.textContent = skill.name;

        //icon
        const icon = document.createElement("div");
        icon.className = "icon";

        const icon_img = document.createElement("img");
        icon_img.setAttribute("href", skill.icon.href);
        icon_img.setAttribute("alt", skill.icon.alt);
        icon_img.setAttribute("title", skill.name);

        icon.appendChild(icon_img);
        
        //Rating
        const rating = document.createElement("div");
        rating.className = "techRating";
        rating.textContent = skill.rating;

        element.appendChild(techName);
        element.appendChild(icon)
        element.appendChild(rating);

        document.querySelector(".technologies").appendChild(element);
     });
 })