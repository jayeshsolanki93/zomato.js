import https from 'https';

/**
 * get - Makes a https get request
 *
 * @param {string} hostname A domain name
 * @param {string} path A request path
 * @param {Object} headers An object containing request headers
 * @return {Promise} p resolves with the https response
 */
function get(hostname, path, headers) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      hostname,
      path,
      headers
    };
    const req = https.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode > 299) {
        reject(new Error(`Failed with status code: ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(JSON.parse(Buffer.concat(chunks))));
    });
    req.on('error', (err) => reject(err));
    req.end();
  });
}

export default { get };
