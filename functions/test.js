exports.handler = function (event, context, callback) {
  const { name } = JSON.parse(event.body);

  if (name === 'Ross') {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: `hello ${name}` })
    })
  } else {
    callback(new Error("You're not Ross! Get out of here!"))
  }
}