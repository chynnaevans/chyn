import '../App.css';
import React from 'react';
const axios = require("axios");
const corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
export const getFeedListing = url => axios.get(`${corsUrl}${url}`);

class GenericRSS extends React.Component{
        constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            listings: [],
            data: {},
            pageTitle: props.title,
            query: (props.category === '' ? '' : '?category=' + props.cateogry),
        }
    }
    render(){
        const listings = this.state.listings.slice()
                function parseDescription(desc){
            const youtube = /<youtube>(.*?)<\/youtube>(.*)/si;

            const urlLength = desc.match(youtube)[1].length
            const youtubeURL = desc.match(youtube) ? desc.match(youtube)[1].substring(1, urlLength-1): '';
            const youtubeDesc = desc.match(youtube) ? desc.match(youtube)[2]: '';
            if (youtubeURL !== ''){
                return(
                    
                    <div><iframe title={youtubeURL} width="560" height="315" src={youtubeURL} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div dangerouslySetInnerHTML={{ __html: youtubeDesc }} />
                    </div>
                    )
            }
            else{
                return(
                    <div dangerouslySetInnerHTML={{ __html: desc }} />
                    )
            }
        }

        return(
        <div id="mainText">
            <div id="fullCard">
             {listings.map((listing, item) => {
                        return(
                            <div id="fullCard">
                            {parseDescription(listing.description)}
                            <hr/>
                            </div>
                        );
                    })}
            </div>
        </div>
        )
    }

    async componentDidMount(){
        try {
            const resp = await getFeedListing(this.state.url + this.state.query);
            this.setState({
                listings: resp.data.items,
                data: resp.data.feed,
            })
        } catch (e) {
            console.log(e);
        }
    }
}

class RSSWidget extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            listings: [],
            data: {},
            pageTitle: props.title,
            query: (props.category === '' ? '' : '?category=' + props.cateogry),
        }
    }

    render(){
        const listings = this.state.listings.slice();

        function parseDescription(desc){
            const header = /<h1>(.*)<\/h1>/gi;
            const subheader = /<h2>(.*)<\/h2>/gi;
            const info = /<h3>(.*)<\/h3>/gi;

            const h1 = desc.match(header) ? desc.match(header)[0].replace(/<[a-z0-9/]+>/gi, '') : 'Untitled';
            const h2 = desc.match(subheader) ? desc.match(subheader)[0].replace(/<[a-z0-9/]+>/gi, '') : '';
            const p = desc.match(info) ? desc.match(info)[0].replace(/<[a-z0-9/]+>/gi, '') : '';

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
                        {this.state.pageTitle}
                    </h1>
                </div>

                {listings.map((listing, item) => {
                    return(
                        <div id="fullCard">
                            {parseDescription(listing.description)}
                        <div id="mainCard">
                            <img src={ listing.thumbnail } alt={""}/>
                        </div>
                        </div>
                    );
                })}

            </div>
        )
    }
    async componentDidMount(){
        try {
            const resp = await getFeedListing(this.state.url + this.state.query);
            this.setState({
                listings: resp.data.items,
                data: resp.data.feed,
            })
        } catch (e) {
            console.log(e);
        }
    }

}

export { RSSWidget, GenericRSS };
