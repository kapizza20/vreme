const cityForm=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('.time');
const icon=document.querySelector('.icon img');



const updateUI= data=>{
    // const cityDets=data.cityDets;
    // const weather=data.weather;
        //Laksi nacin fora koja se zove Destucting
    const {cityDets, weather } = data;
    //ovo unutar se mora zvati istooo isto kao u data
    details.innerHTML=`
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `;

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    // let timeSrc=null;
    // if(weather.IsDayTime === true){
    //     timeSrc='img/day.svg';
    // }else{
    //     timeSrc='img/night.svg';
    // }

    let timeSrc= weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';


    time.setAttribute('src' , timeSrc);
    const iconSrc=`img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

};

const updateCity= async (city)=>{
    const cityDets=await getCity(city);
    const weather=await getWeather(cityDets.Key);
    //Short notaion, ako imamo naziv varijable i vredost istu
    //moze da pise samo to jedno ne mora kao dole oba(primer 1);
    return {
        cityDets,  // == citydets: citydets,
        weather: weather
    }
};


cityForm.addEventListener('submit', e=>{
    e.preventDefault();
    const city=cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then(data=>{
        console.log(data);
        updateUI(data);
    }).catch(err=>{
        console.log('We have f error:', err);
    })
});