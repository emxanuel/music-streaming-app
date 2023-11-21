function getDurationFormat(seconds: number) {
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);

    return {
        hours,
        minutes
    };
}

export {
    getDurationFormat
}