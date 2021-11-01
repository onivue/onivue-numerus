const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                darkTheme: '#171a23',
                lightTheme: '#ffffff',
                gray: {
                    700: '#8E8E8E',
                    900: '#363B49',
                },
                blue: {
                    700: '#7899FB',
                    900: '#3C6CFF',
                },
                black: {
                    900: '#000000',
                    700: '#404040',
                },
                pink: '#EEE8F6',
                cyan: colors.cyan,
                lime: colors.lime,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
