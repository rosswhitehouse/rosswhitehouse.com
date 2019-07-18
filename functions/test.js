exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: `path: ${event.path}, http: ${event.httpMethod}, headers: ${event.headers}, params: ${event.queryStringParameters}, body: ${event.body}`
  })
  return console.log('hello')
}