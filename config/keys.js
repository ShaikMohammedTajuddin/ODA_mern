if(Process.env.NODE_ENV == 'production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}