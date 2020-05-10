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
            url: this.props.url,
            listings: [],
            data: {},
            pageTitle: this.props.title,
            query: (this.props.category === '' ? '' : '?category=' + props.cateogry),
        }
    }

    render(){
        const listings = this.state.listings.slice();

        function parseDescription(desc){
            const header = /<h1>(.*)<\/h1>/gi;
            const subheader = /<h2>(.*)<\/h2>/gi;
            const info = /<h3>(.*)<\/h3>/gi;

            const h1 = desc.match(header) ? desc.match(header)[0].replace(/<[a-z0-9\/]+>/gi, '') : 'Untitled';
            const h2 = desc.match(subheader) ? desc.match(subheader)[0].replace(/<[a-z0-9\/]+>/gi, '') : '';
            const p = desc.match(info) ? desc.match(info)[0].replace(/<[a-z0-9\/]+>/gi, '') : '';

            return(
                <div id="mainCard">
                    <h2>{h1}</h2>
                    <h3>{h2}</h3>
                    <p>{p}</p>
                </div>
            )
        }

        return(
            <div id="mainText">
                <div id="fullCard">
                    <h1>
                        {this.props.title}
                    </h1>
                </div>

                {listings.map((listing, item) => {
                    return(
                        <div id="fullCard">
                            {parseDescription(listing.description)}
                        <div id="mainCard">
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
            const resp = await getFeedListing(this.state.url +  '?category=' + this.props.cateogry);
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
