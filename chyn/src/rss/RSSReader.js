import '../App.css';
import React from 'react';
const axios = require("axios");
const corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
export const getFeedListing = url => axios.get(`${corsUrl}${url}`);

// Use for all inline RSS reading
// TODO: require video embedding in-post instead of hacky <youtube></youtube> tagging
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

                const urlLength = desc.match(youtube) ? desc.match(youtube)[1].length : 0
                const youtubeURL = desc.match(youtube) ? desc.match(youtube)[1].substring(1, urlLength-1): '';
                const youtubeDesc = desc.match(youtube) ? desc.match(youtube)[2]: '';
                if (youtubeURL !== ''){
                    return(
                        <div>                    
                        <iframe title={youtubeURL} width="560" height="315" src={youtubeURL} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        )
    }

    async componentDidMount(){
        try {
            const resp = await getFeedListing(this.state.url + this.state.query);
            console.log(resp)
            this.setState({
                listings: resp.data.items,
                data: resp.data.feed,
            })
        } catch (e) {
            console.log(e);
        }
    }
}

// This widget should be used for Tumblr posts where:
//    a) no prior text exists on the post
//    b) it is an image post
//    c) the layout should be text on the left, image on the right
class ImageRSS extends React.Component{
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
                        <div id="mainCard">
                            <div dangerouslySetInnerHTML={{ __html: listing.description.replace(/<img src=".*">/, "").replace(/<br><br>/, "") }} />
                        }
                        </div>
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

// This is a legacy widget and should only be used for the Met Gala page
// It doesn't deal properly with text in non-expected order, etc.
class MetGalaRSS extends React.Component{
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

export { MetGalaRSS, GenericRSS, ImageRSS };
