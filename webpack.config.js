var path = require("path");

module.exports = {
    context: path.join(__dirname, "public", "javascripts"),
    entry: "index",
    output: {
        path: path.join(__dirname, "public", "javascripts"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: "html" }
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee'],
        root: [
            path.join(__dirname, "public", "javascripts"), 
            path.join(__dirname, "templates")
        ],
        modulesDirectories: ["node_modules"]
    }
};