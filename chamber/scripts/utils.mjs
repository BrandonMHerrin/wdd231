const utils = {
    qs: function(query) {
        return document.querySelector(query);
    },
    dateMapper: function(dayNumber) {
        switch(dayNumber) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2: 
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return 'Invalid'
        }
    },
    shuffleArray: function(array) {
        for (let iterator = array.length -1; iterator > 0; iterator--) {
            const randomIndex = Math.floor(Math.random() * (iterator + 1));
            [array[iterator], array[randomIndex]] = [array[randomIndex], array[iterator]];
            return array;
        }
    }
}

export default utils;