module.exports = {
    plugins: [
        require('./lib')({
            prefix: {
                className: '',
                cssVariable: ''
            }
        })
    ]
};
