const bacData = [190.15, 194.21, 191.07, 192.44, 129000]

const bacDataObject = {
    low: 190.15,
    high: 194.21,
    open: 191.07,
    close: 192.44,
    volume: 129000
};
//if close > open
    // if volume > 100000 → log ‘Strong Bullish’ in your console
    // else → log ‘Bullish’ in your console

if (bacDataObject.close > bacDataObject.open) {
    if (bacDataObject.volume > 100000) {
        console.log('Strong Bullish');
    } else {
        console.log('Bullish');
    }
}

if (bacDataObject.close < bacDataObject.open) {
    if (bacDataObject.volume > 10000) {
        console.log('Strong Bearish');
    } else {
        console.log('Bearish');
    }
}

if (bacDataObject.close === bacDataObject.open) {
    console.log('Neutral');
}