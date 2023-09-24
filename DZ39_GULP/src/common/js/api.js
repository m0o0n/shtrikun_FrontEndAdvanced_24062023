export const getWeather = async (city) =>{
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    return data.json()
}