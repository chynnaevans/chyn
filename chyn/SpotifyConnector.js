var express = require('express'); 
var request = require('request');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var querystring = require('querystring');

var secrets = require('./secrets.js')

var stateKey = 'spotify_auth_state';

var app = express();

function sessionKey(numChars) {
	value = ''
	letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

	for(var i = 0; i < numChars; i++){
		value += letters.charAt(Math.floor(Math.random() * letters.length))
	}

	return value
}

// Set up app
app.use(express.static(__dirname + '/public'))
	.use(cors())
	.use(cookieParser());

// Get auth
app.get('/login', (req, resp) => {

	var state = sessionKey(16);

	resp.cookie(stateKey, state)

	var scope = 'user-read-private user-read-email';

	resp.redirect('https://accounts.spotify.com/authorize?' + querystring.stringify({
		response_type: 'code',
		client_id: secrets.client_id,
		scope: scope,
		redirect_uri: 'http://localhost:8888/callback',
		state: state
	}));
});

// Trade auth code for token
app.get('/callback', (req, resp) => {
	var code = req.query.code || null;
	var state = req.query.state || null;
	var storedState = req.cookies ? req.cookies[stateKey] : null;

	if( state === null || state !== storedState ){
		resp.redirect('/#' + querystring.stringify({
			error: 'state_mismatch'
		}));
	} else {
		resp.clearCookie(stateKey);
		var authOpts = {
			url: 'https://accounts.spotify.com/api/token',
			form: {
				code: code,
				redirect_uri: secrets.redirect_uri,
				grant_type: 'authorization_code'
			},
			headers: {
				'Authorization': 'Basic ' + (Buffer.from(secrets.client_id + ':' + secrets.client_secret).toString('base64'))
			},
			json: true
		};

	request.post(authOpts, (err, response, body) => {
		if( !err && response.statusCode === 200 ){
			var access_token = body.access_token,
				refresh_token = body.refresh_token;

			var options = {
				url: 'https://api.spotify.com/v1/me',
	          	headers: { 'Authorization': 'Bearer ' + access_token },
	          	json: true
	      };

	      // Use access token to access API
	      request.get(options, (err, response, body) => {
	      	console.log(body);
	      });

	      // Pass token to browser so we can make requests from there
	      resp.redirect('/#' + querystring.stringify({
	      	access_token: access_token,
	      	refresh_token: refresh_token
	      }));

		} else {
			resp.redirect('/#' + querystring.stringify({
				error: 'invalid_token'
			}));
		}
	});

	}
});

// Refresh token
app.get('/refresh_token', (req, resp) => {
	var refresh_token = req.query.refresh_token;
	var authOpts = {
		url: 'https://accounts.spotify.com/api/token',
			form: {
				grant_type: 'refresh_token',
				refresh_token: refresh_token
			},
			headers: {
				'Authorization': 'Basic ' + (Buffer.from(secrets.client_id + ':' + secrets.client_secret).toString('base64'))
			},
			json: true
	};

	request.post(authOpts, (error, response, body) => {
		if( !error && response.statusCode === 200) {
			var access_token = body.access_token;
			res.send({
				'access_token': access_token
			});
		} else {
			resp.redirect('/#' + querystring.stringify({
				error: 'error'
			}))
		}
	});
});

console.log('Listening on 8888');
app.listen(8888);