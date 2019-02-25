var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!`;
};

module.exports = {
    'GET /hello/:name': fn_hello
};