const request = require('request');

function getAssetUnitPrices(assetList, callback) {
    return Promise.all(function() {
        var url;
        for (var i = 0; i < assetList.length; i++) {
            url = "https://api.coinmarketcap.com/v1/ticker/" + assetList.asset.toLowerCase();
            request(url, function(error, response, body) {
                if (!error) {
                    var data = JSON.parse(body);
                    assetList.unitPrice = data[0].price_usd;
                } else {
                    asset.asset.unitPrice = 0;
                }
            });
        }
        callback(pricedAssets);
    });
}

module.exports = {

    getAssetData: function(address, callback) {
        var url = "https://counterpartychain.io/api/balances/" + address;
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var assetList = JSON.parse(body).data;
                getAssetUnitPrices(assetList, function(pricedAssets) {
                    callback(pricedAssets);
                });
            }
        });
    }
}
