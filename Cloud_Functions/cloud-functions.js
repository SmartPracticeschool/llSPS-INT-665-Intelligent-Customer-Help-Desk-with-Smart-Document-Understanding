
const assert = require('assert');

const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
function main(params) {

  return new Promise(function (resolve, reject) {

    let discovery;

    if (params.iam_apikey){

      discovery = new DiscoveryV1({

        'iam_apikey': params.iam_apikey,

        'url': params.url,

        'version': '2019-03-25'

      });

    }

    else {

      discovery = new DiscoveryV1({

        'username': params.username,

        'password': params.password,

        'url': params.url,

        'version': '2019-03-25'

      });

    }

    discovery.query({

      'environment_id': params.environment_id,

      'collection_id': params.collection_id,

      'natural_language_query': params.input,

      'passages': true,

      'count': 3,

      'passages_count': 3

    }, function(err, data) {

      if (err) {

        return reject(err);

      }

      return resolve(data);

    });

  });

}


