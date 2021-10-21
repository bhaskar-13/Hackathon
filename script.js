 document.body.innerHTML=`
                          <div class="sidenav">
                          <div class="filter">
                          <h3>City Filter</h3>
                          <input class="city" placeholder="Enter Valid City"/>
                          <input class="btn btn-primary" type="submit" onclick="filtercity()">
                          <h3>Distance Filter</h3>
                          <input class="longitude" placeholder="Enter valid Longitude"/>
                          <input class="latitude" placeholder="Enter valid Latitude"/>
                          <input  onclick="filterdistance()" class="btn btn-primary" type="submit">
                          <h3>NameFilter</h3>
                          <input class="name" placeholder="Enter valid Name"/>
                          <input  onclick="filterName()" class="btn btn-primary" type="submit">
                          <h3>State Filter</h3>
                          <input class="state" placeholder="Enter valid State"/>
                          <input  onclick="filterState()" class="btn btn-primary" type="submit">
                          <h3>TypeFilter</h3>
                          <input class="type" placeholder="Enter type"/>
                          <input  onclick="filterType()" class="btn btn-primary" type="submit">
                          <h3>Postal Code Filter</h3>
                          <input class="pin" placeholder="Enter Valid Postal Code"/>
                          <input  onclick="filterpincode()" class="btn btn-primary" type="submit">
                          </div>
                          </div>
                          
                          </div>
                         <section class="breweries-list">
                         </section>`
async function getData(){

    const data=await fetch("https://api.openbrewerydb.org/breweries");
    const breweries= await data.json();

    const breweriesContainer=document.querySelector(".breweries-list");
    breweriesContainer.innerHTML="";
    breweries.forEach((brewerie) => {
        breweriesContainer.innerHTML+=`  
                                         <div class="brewries-container">
                                         <div class="innercontainer">
                                        <p>Name:${brewerie.name}</p>
                                        <p>Type:${brewerie.brewery_type}</p>
                                        <p>Address:${brewerie.city},${brewerie.state},
                                         ${brewerie.country},${brewerie.postal_code}</p>
                                        <p>Website:${brewerie.website_url}</p>
                                        </div> 
                                        </div>`
    
    });
    
}
getData();



async function filtercity(){
    let n1=document.querySelector(".city").value;
    const data=await fetch("https://api.openbrewerydb.org/breweries");
    const breweries= await data.json();


    const breweriesContainer=document.querySelector(".breweries-list");
    
    let filterledcity=breweries.filter((cities)=>cities.city===n1);
         console.log(filterledcity);
         if(filterledcity.length!==0){
        breweriesContainer.innerHTML="";
        filterledcity.forEach((filter)=>{
        breweriesContainer.innerHTML+=`<div class="brewries-container">
        <div class="innercontainer">
        <p>Name:${filter.name}</p>
        <p>Type:${filter.brewery_type}</p>
        <p>Address:${filter.city},${filter.state},
        ${filter.country},${filter.postal_code}</p>
        <p>Website:${filter.website_url}</p>
        </div> 
        </div>`
    })  
}
}

async function filterdistance(){
    let n1=document.querySelector(".latitude").value;
    let n2=document.querySelector(".longitude").value;

    
    const data=await fetch("https://api.openbrewerydb.org/breweries");
    const breweries= await data.json();


    const breweriesContainer=document.querySelector(".breweries-list");
    
    let filterdistance=breweries.filter((distances)=>distances.latitude===n1 && distances.longitude==n2);
         console.log(filterdistance);
         if(filterdistance.length!==0){
        breweriesContainer.innerHTML="";
        filterdistance.forEach((filter)=>{
        breweriesContainer.innerHTML+=`<div class="brewries-container">
        <div class="innercontainer">
        <p>Name:${filter.name}</p>
        <p>Type:${filter.brewery_type}</p>
        <p>Address:${filter.city},${filter.state},
        ${filter.country},${filter.postal_code}</p>
        <p>Website:${filter.website_url}</p>
        </div> 
        </div>`
    })  
}
}



async function filterName(){
    let n1=document.querySelector(".name").value;
   
    const data=await fetch("https://api.openbrewerydb.org/breweries");
    const breweries= await data.json();
      const breweriesContainer=document.querySelector(".breweries-list");
    
        let filterdName=breweries.filter((names)=>names.name===n1);
        
        if(filterdName.length!==0)
        {
        breweriesContainer.innerHTML="";
        filterdName.forEach((filter)=>{
        breweriesContainer.innerHTML+=`<div class="brewries-container">
        <div class="innercontainer">
        <p>Name:${filter.name}</p>
        <p>Type:${filter.brewery_type}</p>
        <p>Address:${filter.city},${filter.state},
        ${filter.country},${filter.postal_code}</p>
        <p>Website:${filter.website_url}</p>
        </div> 
        </div>`
    })  
}}


async function filterState(){
    let n1=document.querySelector(".state").value;
   
    const data=await fetch("https://api.openbrewerydb.org/breweries");
    const breweries= await data.json();
      const breweriesContainer=document.querySelector(".breweries-list");
    
        let filterdState=breweries.filter((states)=>states.state===n1);
        
        if(filterdState.length!==0)
        {
        breweriesContainer.innerHTML="";
        filterdState.forEach((filter)=>{
        breweriesContainer.innerHTML+=`<div class="brewries-container">
        <div class="innercontainer">
        <p>Name:${filter.name}</p>
        <p>Type:${filter.brewery_type}</p>
        <p>Address:${filter.city},${filter.state},
        ${filter.country},${filter.postal_code}</p>
        <p>Website:${filter.website_url}</p>
        </div> 
        </div>`
    })  
}}

async function filterType(){
    let n1=document.querySelector(".type").value;
   
    const data=await fetch("https://api.openbrewerydb.org/breweries");
    const breweries= await data.json();
      const breweriesContainer=document.querySelector(".breweries-list");
    
        let filteredtype=breweries.filter((types)=>types.brewery_type===n1);
        
        if(filteredtype.length!==0)
        {
        breweriesContainer.innerHTML="";
        filteredtype.forEach((filter)=>{
        breweriesContainer.innerHTML+=`<div class="brewries-container">
        <div class="innercontainer">
        <p>Name:${filter.name}</p>
        <p>Type:${filter.brewery_type}</p>
        <p>Address:${filter.city},${filter.state},
        ${filter.country},${filter.postal_code}</p>
        <p>Website:${filter.website_url}</p>
        </div> 
        </div>`
    })  
}}

async function filterpincode(){
    let n1=document.querySelector(".pin").value;
   
    const data=await fetch("https://api.openbrewerydb.org/breweries");
    const breweries= await data.json();
      const breweriesContainer=document.querySelector(".breweries-list");
    
        let filteredpin=breweries.filter((pin)=>pin.postal_code===n1);
        
        if(filteredpin.length!==0)
        {
        breweriesContainer.innerHTML="";
        filteredpin.forEach((filter)=>{
        breweriesContainer.innerHTML+=`<div class="brewries-container">
        <div class="innercontainer">
        <p>Name:${filter.name}</p>
        <p>Type:${filter.brewery_type}</p>
        <p>Address:${filter.city},${filter.state},
        ${filter.country},${filter.postal_code}</p>
        <p>Website:${filter.website_url}</p>
        </div> 
        </div>`
    })  
}}










    
    

