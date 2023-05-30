import { useState, useEffect } from "react";
import { BellSimple, MapPin } from "phosphor-react-native";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Soleado from "../../assets/clima.png";
import Atmosfera from "../../assets/atmosfera.png";
import Nublado from "../../assets/nublado.png";
import Lluvioso from "../../assets/lluvioso.png";
import Nieve from "../../assets/nieve.png";
import Tormenta from "../../assets/tormenta.png";
import Brisa from "../../assets/brisa.png";

const WeatherScreen = () => {
  const [temperatura, setTemperatura] = useState(0);
  const [desc, setDesc] = useState("");
  const [grupo, setGrupo] = useState("");
  const [viento, setViento] = useState(0);
  const [humedad, setHumedad] = useState(0);
  const [city, setCity] = useState("");
  let fondo;

  if (grupo === "Clouds") {
    fondo = Nublado;
  } else if (grupo === "Rain") {
    fondo = Lluvioso;
  } else if (grupo === "Clear") {
    fondo = Soleado;
  } else if (grupo === "Thunderstorm") {
    fondo = Tormenta;
  } else if (grupo === "Drizzle") {
    fondo = Brisa;
  } else if (grupo === "Snow") {
    fondo = Nieve;
  } else if (grupo === "Atmosphere") {
    fondo = Atmosfera;
  }

  const getWeather = async () => {
    const apikey = "f77f7118eccc6d8b140ee8d90792acd3";
    const url_geo = `https://api.openweathermap.org/data/2.5/weather?lat=-34.61&lon=-58.38&appid=${apikey}`;
    const response = await fetch(url_geo);
    const data = await response.json();
    console.log(data);
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    getCurrentWeatherData(lat, lon);
  };

  const getCurrentWeatherData = async (lat, lon) => {
    const apikey = "f77f7118eccc6d8b140ee8d90792acd3";
    const url_geo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
    const response = await fetch(url_geo);
    const data = await response.json();
    console.log(data);
    const temperatureKelvin = data.main.temp;
    const temperatureCelsius = Math.round(temperatureKelvin - 273.15);
    setTemperatura(temperatureCelsius);
    setDesc(data.weather[0].description);
    setGrupo(data.weather[0].main);
    setViento(data.wind.speed);
    setHumedad(data.main.humidity);
    setCity(data.name);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <ImageBackground source={fondo} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <BellSimple color="black" size={40} />
        </View>
        <View style={styles.info}>
          <View style={styles.headerLeft}>
            <MapPin color="black" size={40} />
            <View>
              <Text style={styles.infoDetailsCardWeekDay}>{city} </Text>
            </View>
          </View>
          <Text style={styles.infoText}>{temperatura}º C</Text>
          <Text style={styles.infoTextMaxMin}>Real state: {desc}</Text>
        </View>
      </View>
      <View style={styles.infoDetails}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Monday </Text>
            <View style={styles.infoDetailsCardWeekContent}>
              <Text style={styles.infoDetailsCardPreview}>
                {" "}
                Temperatura:{" "}
                <Text style={styles.infoDetailsCardPreview}>
                  {" "}
                  {temperatura}
                </Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Humedad:{" "}
                <Text style={styles.infoDetailsCardPreview}> {humedad}</Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Viento:{" "}
                <Text style={styles.infoDetailsCardPreview}> {viento}</Text>
              </Text>
            </View>
          </View>

          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Tuesday </Text>
            <View style={styles.infoDetailsCardWeekContent}>
              <Text style={styles.infoDetailsCardPreview}>
                {" "}
                Temperatura:{" "}
                <Text style={styles.infoDetailsCardPreview}>
                  {" "}
                  {temperatura}
                </Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Humedad:{" "}
                <Text style={styles.infoDetailsCardPreview}> {humedad}</Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Viento:{" "}
                <Text style={styles.infoDetailsCardPreview}> {viento}</Text>
              </Text>
            </View>
          </View>

          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Wednesday </Text>
            <View style={styles.infoDetailsCardWeekContent}>
              <Text style={styles.infoDetailsCardPreview}>
                {" "}
                Temperatura:{" "}
                <Text style={styles.infoDetailsCardPreview}>
                  {" "}
                  {temperatura}
                </Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Humedad:{" "}
                <Text style={styles.infoDetailsCardPreview}> {humedad}</Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Viento:{" "}
                <Text style={styles.infoDetailsCardPreview}> {viento}</Text>
              </Text>
            </View>
          </View>

          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Thursday </Text>
            <View style={styles.infoDetailsCardWeekContent}>
              <Text style={styles.infoDetailsCardPreview}>
                {" "}
                Temperatura:{" "}
                <Text style={styles.infoDetailsCardPreview}>
                  {" "}
                  {temperatura}
                </Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Humedad:{" "}
                <Text style={styles.infoDetailsCardPreview}> {humedad}</Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Viento:{" "}
                <Text style={styles.infoDetailsCardPreview}> {viento}</Text>
              </Text>
            </View>
          </View>

          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Friday </Text>
            <View style={styles.infoDetailsCardWeekContent}>
              <Text style={styles.infoDetailsCardPreview}>
                {" "}
                Temperatura:{" "}
                <Text style={styles.infoDetailsCardPreview}>
                  {" "}
                  {temperatura}
                </Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Humedad:{" "}
                <Text style={styles.infoDetailsCardPreview}> {humedad}</Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Viento:{" "}
                <Text style={styles.infoDetailsCardPreview}> {viento}</Text>
              </Text>
            </View>
          </View>

          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Saturday </Text>
            <View style={styles.infoDetailsCardWeekContent}>
              <Text style={styles.infoDetailsCardPreview}>
                {" "}
                Temperatura:{" "}
                <Text style={styles.infoDetailsCardPreview}>
                  {" "}
                  {temperatura}
                </Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Humedad:{" "}
                <Text style={styles.infoDetailsCardPreview}> {humedad}</Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Viento:{" "}
                <Text style={styles.infoDetailsCardPreview}> {viento}</Text>
              </Text>
            </View>
          </View>

          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Sunday</Text>
            <View style={styles.infoDetailsCardWeekContent}>
              <Text style={styles.infoDetailsCardPreview}>
                {" "}
                Temperatura:{" "}
                <Text style={styles.infoDetailsCardPreview}>
                  {" "}
                  {temperatura}
                </Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Humedad:{" "}
                <Text style={styles.infoDetailsCardPreview}> {humedad}</Text>
              </Text>
              <Text style={styles.infoDetailsCardPreview}>
                Viento:{" "}
                <Text style={styles.infoDetailsCardPreview}> {viento}</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
  },
  header: {
    width: "100%",
    marginTop: 44,
    marginLeft: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    position: "relative",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  headerLeftText: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  info: {
    backgroundColor: "rgba(255, 255, 255, 0.23)",
    borderRaidus: 20,
    marginTop: 10,
    height: "50%",
    paddingVertical: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontWeight: "400",
  },
  infoText: {
    marginTop: 10,
    fontSize: 80,
    fontWeight: "400",
    color: "black",
  },
  infoTextMaxMin: {
    fontSize: 22,
    marginLeft: 40,
    fontWeight: "600",
    color: "black",
  },
  infoDetails: {
    gap: 15,
    paddingLeft: 30,
    height: "100%",
  },

  infoDetailsCard: {
    marginRight: 20,
    width: 200,
    height: 250,
    backgroundColor: "rgba(255, 255, 255, 0.23)",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  infoDetailsCardWeekDay: {
    fontSize: 32,
    marginTop: 10,
    fontWeight: "500",
  },
  infoDetailsCardWeekContent: {
    marginBottom: -20,
    marginTop: 20,
    marginLeft: 10,
  },
  infoDetailsCardPreview: {
    width: 200,
    height: 60,
    fontSize: 16,
    fontWeight: "800",
  },
});
