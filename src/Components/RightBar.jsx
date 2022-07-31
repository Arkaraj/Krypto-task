import React, { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket';

export default function RightBar() {

    const [data, setData] = useState([]);
    const [bids, setBids] = useState([]);
    const [messageHistory, setMessageHistory] = useState([]);

    const { sendMessage, lastMessage, readyState } = useWebSocket('wss://api-betatestnet.brine.finance/liveorderbookwire');

    const compare = (a, b) => {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    }

    useEffect(() => {
        if (lastMessage !== null) {
            if (lastMessage.data !== "Connection established with Krypto") {
                let parsedData = JSON.parse(lastMessage.data);
                let mainData = parsedData.ethusdt.asks.sort(compare);
                setData(mainData);
                setBids(parsedData.ethusdt.bids);
            }

            setMessageHistory((prev) => prev.concat(lastMessage));
        }

    }, [lastMessage, setMessageHistory]);


    return (
        <div>
            <div className="mainRight">
                <div className="headings">
                    <div className="highlited">OrderBook</div>
                </div>
                <div className="headings">
                    <div>Trades</div>
                </div>
            </div>
            <hr />
            <div className="rightBlock">
                <div className="headings2">
                    <div>Amount (BTC)</div>
                    {data.length > 0 ? (<>{data.map((d, i) => (<p className='amtText'>{d[1]}</p>))}</>) : (<p>Loading...</p>)}
                </div>
                <div className="headings2">
                    <div>Price (USD)</div>
                    {data.length > 0 ? (<>{data.map((d, i) => (<p className='amtText2'>{d[0]}</p>))}</>) : (<p>Loading...</p>)}
                </div>
            </div>
            <hr />
            <div className='greenNum'>
                23,935.32 USDC
            </div>
            <hr />
            <br />
            <div className="rightBlock">
                <div className="headings2">
                    {bids.length > 0 ? (<>{bids.map((d, i) => (<p className='amtTextGreen'>{d[1]}</p>))}</>) : (<p>Loading...</p>)}
                </div>
                <div className="headings2">
                    {bids.length > 0 ? (<>{bids.map((d, i) => (<p className='amtText2'>{d[0]}</p>))}</>) : (<p>Loading...</p>)}
                </div>
            </div>
        </div>
    )
}
