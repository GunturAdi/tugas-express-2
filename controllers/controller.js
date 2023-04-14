exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello World!</h1>');
};

exports.helloMoto = (req, res, next) => {
    res.send(`<h1>Hello My Guntur Adi Wijaya</h1>`)
}