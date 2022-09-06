const key='3puo4EnGibgGzRtcNt9d0d1tn0BRhi2u';

//getweaher of that city
const getWeather= async (id)=>{
    const base='https://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;

    const response=await fetch(base+query);
    const data=await response.json();

    return data[0];
}

//getcity information
const getCity = async (city) =>{
    const base='https://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();
    //console.log(data);
    return data[0];
};

// getCity('london')
// .then(data=>{
//     return getWeather(data.Key);
// }).then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log('we have error:',err);
// })
