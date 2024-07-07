const hiveClient = require('@hiveio/hive-js');
hiveClient.api.setOptions({ url: 'https://api.hive.blog/' });
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

var owner = '';
var activekey = '';
var signingkey = '';

readline.question('Input account name: ', account => {
    owner = account;
    //console.log('Account specified = ' + owner);
    readline.question('Input private active key: ', akey => {
        activekey = akey;
        //console.log('ActiveKey specified = ' + activekey);
        readline.question('Input witness signing key or null to disable: ', skey => {
            if(skey == 'null') {
                signingkey = 'STM1111111111111111111111111111111114T1Anm'
            } else {
                signingkey = skey;
            }
            hiveClient.broadcast.witnessUpdate(activekey, owner, "https://hive.blog/@"+owner, signingkey, {"account_creation_fee":"3.000 HIVE","maximum_block_size":65536,"hbd_interest_rate":1000}, "0.000 HIVE", function(err, result) {
                console.log(err, result);
            });
            readline.close();
        });
    });
});





