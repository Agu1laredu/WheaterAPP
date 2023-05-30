import { useState, useEffect } from "react";
import { Text, View } from "react-native";

const CardScreen = () => {
  const [temperatura, setTemperatura] = useState(0);
  const [days, setDays] = useState("");
  const [viento, setViento] = useState(0);

  const getWeather = async () => {
    const apikey = "c1d06cc4e26249ce64db6bc43825f35e";
    const url_geo = `history.openweathermap.org/data/2.5/aggregated/year?lat=${lat}&lon=${lon}&appid=${apikey}`;
    const response = await fetch(url_geo);
    const data = await response.json();
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    getCurrentWeatherData(lat, lon);
  };

  const getCurrentWeatherData = async (lat, lon) => {
    const apikey = "c1d06cc4e26249ce64db6bc43825f35e";
    const url_geo = `history.openweathermap.org/data/2.5/aggregated/year?lat=${lat}&lon=${lon}&appid=${apikey}`;
    const response = await fetch(url_geo);
    const datas = await response.json();
    setTemperatura(datas.main.temp);
    setDays(datas.day);
    setViento(datas.wind.speed);
  };

  useEffect(() => {
    getWeather();
    getCurrentWeatherData();
  }, []);

  return (
    <View>
      <Text>{temperatura}</Text>
      <Text>{days}</Text>
      <Text> {viento}</Text>
    </View>
  );
};

export default CardScreen;
