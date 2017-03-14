"use strict"
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
	// entryn asuma vor modol havaqi, mer depqum home-na
	entry: "./home",
	output: {
        // path: __dirname + "/dist",
        filename: "build.js",
        library: "home"
    },
// es parametr@ nenca anum vor amen popxutyunic heto avtomat webpack ashxati
watch: NODE_ENV == 'development',

watchOptions: {
	aggregateTimeout: 100
},

devtool: NODE_ENV == 'development' ? "cheap-inline-modume-source-map" : null,

plugins: [ 
new webpack.DefinePlugin({
	NODE_ENV: JSON.stringify(NODE_ENV) 
})

]

};

