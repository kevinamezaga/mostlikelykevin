const contentful = require('contentful')

const client = contentful.createClient({
  space: '9y80q0f56ro2',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'n80PIGTjyXRlcFaMH7owsTw8kh_du78jG6T_iuppyNA'
})

client.getEntry('21iNV3cnZ6SlsZv9lT4d3D')
.then((entry) => console.log(entry))
.catch(console.error)