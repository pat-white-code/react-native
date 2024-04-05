import React from "react";
import { StyleSheet, SafeAreaView, FlatList, Text, View, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

const data = [
    {
        weather: {
            main: "Rain",
            description: "moderate rain",
        },
        main: {
            feels_like: 298.74,
            temp_min: 297.56,
            temp_max: 300.05,
        },
        dt: 1661870592,
    },
    {
        weather: {
            main: "Rain",
            description: "moderate rain",
        },
        main: {
            feels_like: 243.74,
            temp_min: 544.56,
            temp_max: 123.05,
        },
        dt: 1662070592,
    },
    {
        weather: {
            main: "Rain",
            description: "moderate rain",
        },
        main: {
            feels_like: 345.74,
            temp_min: 123.56,
            temp_max: 534.05,
        },
        dt: 1662270592,
    },
];

const EmptyWeather = () =>( 
    <View>
        <Text>No Weather Data Available</Text>
    </View>
)


const container = {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'red'
};

const item = {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: 'pink'
}

const styles = StyleSheet.create({
    container,
    item,
    date: {
        color: 'white',
        fontSize: 15,
    },
    temp: {
        color: 'white',
        fontSize: 18,
    }
});

const WeatherItem = (weather) => {
    const { dt, min, max, condition } = weather;
    return (
        <View style={styles.item}>
            <Feather name={"sun"} size={50} color={"white"} />
            <Text style={styles.date}>{dt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    );
};

const UpcomingWeather = () => {
    // const { container, item } = styles;
    const renderWeatherItem = ({ item }) => (
        <WeatherItem
            condition={item.weather.main}
            dt={item.dt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        ></WeatherItem>
    );
    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList
                data={data}
                renderItem={renderWeatherItem}
                keyExtractor={(item) => item.dt}
                ItemSeparatorComponent={() => <View style={{ backgroundColor: 'red', height: 2 }} />}
                ListEmptyComponent={<EmptyWeather />}
            ></FlatList>
        </SafeAreaView>
    );
};

export default UpcomingWeather;
