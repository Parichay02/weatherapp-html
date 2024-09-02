 let valueSearch= document.getElementById('valueSearch');
 let city=document.getElementById('city');

let temperature=document.getElementById('temperature');
 let description=document.querySelector('.description');
 let clouds=document.getElementById('clouds');
 let humidity=document.getElementById('humidity');
 let pressure=document.getElementById('pressure');
 let form=document.querySelector('form');
 let sunrisetime=document.querySelector('.sunrisetime');
 let sunsettime=document.querySelector('.sunsettime');
 let wspeed=document.querySelector('.wspeed');
 let minmax=document.getElementById('minmax');
let feels=document.getElementById('feels');

form.addEventListener("submit",(event) =>{
    
   event.preventDefault();
   if(valueSearch.value!=''){
      searchWeather();
   }
    
    
})

let id ='567a1479983432cd5085b4a6ba059643'; 
    let url='https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=567a1479983432cd5085b4a6ba059643';
    const searchWeather=() =>{

    fetch(url + '&q=' + valueSearch.value)
    
    .then(responsive =>responsive.json())
        .then(data => {
            console.log(data);
            if (data.cod==200)
            {
                city.querySelector('figcaption').innerText=data.name;
                city.querySelector('img').src="https://flagsapi.com/"+data.sys.country+"/shiny/32.png";
                temperature.querySelector('img').src="http://openweathermap.org/img/wn/"+data.weather[0].icon+"@4x.png";
                var celcius=Math.round(data.main.temp-273);
                temperature.querySelector('figcaption span').innerText=celcius;
                description.innerText=data.weather[0].description;
                clouds.innerText=data.clouds.all+"%";
                humidity.innerText=data.main.humidity+"%";
                pressure.innerText= data.main.pressure+"hPa" ;

              let sunTime = data.sys.sunrise; 
              let setTime = data.sys.sunset;
              let sunrise = new Date(sunTime * 1000); 
              let sunset = new Date(setTime * 1000); 
              var windinfo= data.wind.speed +"m/s   "+ data.wind.deg+"degs" ;
              var celM=Math.round(data.main.temp_max-273);
              var celm=Math.round(data.main.temp_min-273);
              var last=Math.round(data.main.feels_like-273);
             sunrisetime.innerText=sunrise.toTimeString();
             sunsettime.innerText=sunset.toTimeString();
             wspeed.innerText=windinfo;
            minmax.innerText=celM+"/"+celm+"degrees Celsius";
             feels.innerText="Feels like "+last+"degrees Celsius";

            }
        })
    }


         
