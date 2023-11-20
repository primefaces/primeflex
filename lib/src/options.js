module.exports = {
    important: false,
    prefix: {
        className: '',
        cssVariable: 'p-'
    },
    separator: '\\:',
    fixedRemLimit: {
        width: 50,
        height: 50
    },
    breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px'
    },
    grid: {
        gap: '0.5rem'
    },
    formLayout: {
        fieldGap: '1rem',
        fieldLabelGap: '.5rem',
        helperTextGap: '.25rem'
    },
    spacing: {
        0: 0,
        1: 0.25,
        2: 0.5,
        3: 1,
        4: 1.5,
        5: 2,
        6: 3,
        7: 4,
        8: 5,
        9: 6,
        10: 7,
        11: 8,
        12: 9,
        13: 10,
        14: 11,
        15: 12,
        16: 13,
        17: 14,
        18: 15,
        19: 16,
        20: 18,
        21: 20,
        22: 24,
        23: 28,
        24: 32,
        25: 36,
        26: 40,
        27: 44,
        28: 48,
        29: 52,
        30: 56,
        31: 60,
        32: 64
    },
    colors: {
        blue: {
            50: '#f5f9ff',
            100: '#d0e1fd',
            200: '#abc9fb',
            300: '#85b2f9',
            400: '#609af8',
            500: '#3b82f6',
            600: '#326fd1',
            700: '#295bac',
            800: '#204887',
            900: '#183462'
        },
        green: {
            50: '#f4fcf7',
            100: '#caf1d8',
            200: '#a0e6ba',
            300: '#76db9b',
            400: '#4cd07d',
            500: '#22c55e',
            600: '#1da750',
            700: '#188a42',
            800: '#136c34',
            900: '#0e4f26'
        },
        yellow: {
            50: '#fefbf3',
            100: '#faedc4',
            200: '#f6de95',
            300: '#f2d066',
            400: '#eec137',
            500: '#eab308',
            600: '#c79807',
            700: '#a47d06',
            800: '#816204',
            900: '#5e4803'
        },
        cyan: {
            50: '#f3fbfd',
            100: '#c3edf5',
            200: '#94e0ed',
            300: '#65d2e4',
            400: '#35c4dc',
            500: '#06b6d4',
            600: '#059bb4',
            700: '#047f94',
            800: '#036475',
            900: '#024955'
        },
        pink: {
            50: '#fef6fa',
            100: '#fad3e7',
            200: '#f7b0d3',
            300: '#f38ec0',
            400: '#f06bac',
            500: '#ec4899',
            600: '#c93d82',
            700: '#a5326b',
            800: '#822854',
            900: '#5e1d3d'
        },
        indigo: {
            50: '#f7f7fe',
            100: '#dadafc',
            200: '#bcbdf9',
            300: '#9ea0f6',
            400: '#8183f4',
            500: '#6366f1',
            600: '#5457cd',
            700: '#4547a9',
            800: '#363885',
            900: '#282960'
        },
        teal: {
            50: '#f3fbfb',
            100: '#c7eeea',
            200: '#9ae0d9',
            300: '#6dd3c8',
            400: '#41c5b7',
            500: '#14b8a6',
            600: '#119c8d',
            700: '#0e8174',
            800: '#0b655b',
            900: '#084a42'
        },
        orange: {
            50: '#fff8f3',
            100: '#feddc7',
            200: '#fcc39b',
            300: '#fba86f',
            400: '#fa8e42',
            500: '#f97316',
            600: '#d46213',
            700: '#ae510f',
            800: '#893f0c',
            900: '#642e09'
        },
        bluegray: {
            50: '#f7f8f9',
            100: '#dadee3',
            200: '#bcc3cd',
            300: '#9fa9b7',
            400: '#818ea1',
            500: '#64748b',
            600: '#556376',
            700: '#465161',
            800: '#37404c',
            900: '#282e38'
        },
        purple: {
            50: '#fbf7ff',
            100: '#ead6fd',
            200: '#dab6fc',
            300: '#c996fa',
            400: '#b975f9',
            500: '#a855f7',
            600: '#8f48d2',
            700: '#763cad',
            800: '#5c2f88',
            900: '#432263'
        },
        red: {
            50: '#fff5f5',
            100: '#ffd0ce',
            200: '#ffaca7',
            300: '#ff8780',
            400: '#ff6259',
            500: '#ff3d32',
            600: '#d9342b',
            700: '#b32b23',
            800: '#8c221c',
            900: '#661814'
        },
        gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121'
        }
    },
    themes: {
        'primeone-light': {
            //name: 'light',
            default: true,
            colorScheme: 'light',
            borderRadius: '6px',
            colors: {
                text: {
                    primary: '#495057',
                    secondary: '#6c757d'
                },
                surface: {
                    ground: '#eff3f8',
                    section: '#ffffff',
                    card: '#ffffff',
                    overlay: '#ffffff',
                    border: '#dfe7ef',
                    hover: '#f6f9fc',
                    0: '#ffffff',
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#EEEEEE',
                    300: '#E0E0E0',
                    400: '#BDBDBD',
                    500: '#9E9E9E',
                    600: '#757575',
                    700: '#616161',
                    800: '#424242',
                    900: '#212121'
                },
                primary: {
                    main: '#3B82F6',
                    invert: '#ffffff',
                    50: '#f5f9ff',
                    100: '#d0e1fd',
                    200: '#abc9fb',
                    300: '#85b2f9',
                    400: '#609af8',
                    500: '#3b82f6',
                    600: '#326fd1',
                    700: '#295bac',
                    800: '#204887',
                    900: '#183462'
                }
            }
        },
        'primeone-dark': {
            //name: 'dark',
            colorScheme: 'dark',
            borderRadius: '6px',
            colors: {
                text: {
                    primary: 'rgba(255, 255, 255, 0.87)',
                    secondary: 'rgba(255, 255, 255, 0.6)'
                },
                surface: {
                    ground: '#040d19',
                    section: '#040d19',
                    card: '#071426',
                    overlay: '#071426',
                    border: '#0b213f',
                    hover: 'rgba(255,255,255,.03)',
                    0: '#040d19',
                    50: '#1d2530',
                    100: '#1d2530',
                    200: '#4f565e',
                    300: '#686e75',
                    400: '#82868c',
                    500: '#9b9ea3',
                    600: '#b4b6ba',
                    700: '#cdcfd1',
                    800: '#e6e7e8',
                    900: '#ffffff'
                },
                primary: {
                    main: '#93C5FD',
                    invert: '#1c2127',
                    50: '#fafcff',
                    100: '#e5f1ff',
                    200: '#d1e6fe',
                    300: '#bcdbfe',
                    400: '#a8d0fd',
                    500: '#93c5fd',
                    600: '#7da7d7',
                    700: '#678ab1',
                    800: '#516c8b',
                    900: '#3b4f65'
                }
            }
        }
    },
    postcssResolver: {
        before(atRule, options, resolvers) {},
        after(atRule, options, resolvers) {}
    }
};
