const request = require('request');
const priceassets = require('./priceassets.controller');
const helpercontroller = require('./helper.controller.js');


module.exports = {

    presentAssets: (req, res) => {


      var address = req.body.assetaddress;
      var url = "https://counterpartychain.io/api/balances/" + address;


      request({
        method: 'GET',
        url: url,
      },
       function (error, response, body) {
         if (!error && response.statusCode == 200) {
          //  (priceassets.get_USD_AMNT(helpercontroller.parseBody(body)));
         }
      })



      var dummyData = [
        { name: 'LTBcoin',
          unit_price: 0.0000200385,
          asset_amount: 1209.32588510 },
        { name: 'FoldingCoin',
          unit_price: 0.000937106,
          asset_amount: 1.00000000 },
        { name: 'Bitcrystals',
          unit_price: 0.103968,
          asset_amount: 913.14157985 },
        { name: 'XCP',
          unit_price: 1.96375,
          asset_amount: 250.00000000 },
        { name: 'RarePepe',
          unit_price: 0.0000200385,
          asset_amount: 1209.32588510 }
        ];



      res.render('pages/assets', {assets: dummyData});


    }

}
