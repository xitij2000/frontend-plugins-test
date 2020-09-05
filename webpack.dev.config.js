const { createConfig } = require('@edx/frontend-build');

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const basePluginsPath = path.resolve(__dirname, 'plugins/');

const pluginTabs = fs.readdirSync(basePluginsPath).map(
    dir => {
        console.log(path.resolve(basePluginsPath, dir, 'package.json'));
        const meta = require(path.resolve(basePluginsPath, dir, 'package.json'));
        console.log(meta['open-edx-meta'].tabs);
        return {
            id: dir,
            ...meta['open-edx-meta'].tabs,
        };

    }
)

pluginTabs.sort((tab1, tab2) => tab1.order > tab2.order);


module.exports = createConfig('webpack-dev', {
    resolve: {
        alias: {
            plugins: basePluginsPath,
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'PLUGIN_TABS': JSON.stringify(pluginTabs),
        })
    ],
});

console.log(module.exports);