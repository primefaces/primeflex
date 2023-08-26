module.exports = {
    plugins: [
        [
            require.resolve('./lib'),
            {
                prefix: {
                    className: '',
                    cssVariable: ''
                }
            }
        ]
    ]
};
