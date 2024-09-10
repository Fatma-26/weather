const api={
    base:"https://api.openweathermap.org/data/2.5/",
    key: "1d8019170a21a004b857cabc18ea2284",
    
}
console.log(78)
let weather={};
let town={};

const temp=document.getElementById("current-temp");
const Town=document.getElementById("town-name");



document.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === "complete") {
      console.log("ready");
     
      AddSearchListner();
    }
  });




const AddSearchListner=()=>{
    let location_input=document.getElementById("lication_input");
    location_input.addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            getWeatherData(location_input.value)
        }
    });
}



const getWeatherData=(city)=>{
 fetch(
    `${api.base}weather?q=${city}&units=metric&appid=${api.key}`
 ).then((res)=>res.json()).then((result)=>{
    weather={ ...result}
   /* town={ ...result}*/

    fill_data(weather);
   console.log(result)
 });


};

const fill_data=(weather)=>{
    temp.textContent=""+Math.round(weather.main.temp)+"°C";
    Town.textContent=weather.name;
};




