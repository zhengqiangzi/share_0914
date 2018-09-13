
let path =require("path").resolve();
module.exports = {
    mode:"development",
    entry:"./index.ts",
    output:{

        filename:"index.js",
        path:path+"/dist"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'assemblyscript-typescript-loader',
                // include:/assemblyscript/,//to avoid a conflict with other ts file who use 'ts-load',so you can division them with prop 'include'

                options: {
                    sourceMap: false,
                }
            }
        ]
    },
};