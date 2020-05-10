import '../App.css';
import React, {useState} from 'react';
import querysearch from 'querystring'

const axios = require("axios");
const corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
export const getFeedListing = url => axios.get(`${corsUrl}${url}`);

class RSSWidget extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            listings: [],
            data: {},
            pageTitle: props.title,
        }
    }

    render(){
        const listings = this.state.listings.slice()
        return(
            <div id="mainText">
                <div id="mainHeader">
                    <h1>
                        {this.state.pageTitle}
                    </h1>
                </div>

                {listings.map((listing, item) => {
                    return(
                        <div id="fullCard">
                        <div id="mainCard">
                            <h2>{listing.title}</h2>
                        </div><div id="mainCard">
                            <img src={listing.thumbnail} />
                        </div>
                        </div>
                    );
                })}

            </div>
        )
    }
    async componentDidMount(){
        try {
            const resp = await getFeedListing(this.state.url);
            this.setState({
                listings: resp.data.items,
                data: resp.data.feed,
            })
        } catch (e) {
            console.log(e);
        }
    }

}
function RSS(feedURL) {
    const [initialised, setInitialised] = useState(false);
    const [url, setURL] = useState(feedURL);
    const [listings, setListings] = useState([]);
    const [data, setData] = useState({});

    const getListings = async url => {
        try {
            const resp = await getFeedListing(url);
            setListings(resp.data.items);
            setData(resp.data.feed);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <img src={data.image} /> {data.title}

        </div>
    );
}
export default RSSWidget;
