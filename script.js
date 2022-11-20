function onClickStation(stationID, StationName) {
    var url="https://www.youtube.com/results?search_query=станция+метро+"+StationName+"+Санкт-Петербург";
//    window.open(url, 'Поиск видео станции метро');
    location.assign(url);
    return false;
}