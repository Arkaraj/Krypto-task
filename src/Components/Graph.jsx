import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
export default function Graph() {
    return (
        <TradingViewWidget
            symbol="NASDAQ:AAPL"
            theme={Themes.DARK}
            locale="en"
            interval="D"
        />
    )
}
