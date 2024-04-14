export function getDurationFormat(seconds: number) {
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);

    return {
        hours,
        minutes
    };
}

export function getTimeOfDay(hour: number) {
    if (hour >= 6 && hour < 12) {
        return "morning";
    } else if (hour >= 12 && hour < 18) {
        return "afternoon";
    } else {
        return "night";
    }
}