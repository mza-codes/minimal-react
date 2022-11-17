import { extendTheme, theme as base } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: `Righteous, ${base?.fonts?.heading}`,
        body: `Kanit, ${base?.fonts?.body}`
    },
    colors: {
        brand: {
            0: '#fc5692',
            50: '#fc5462',
            100: '#fc7678',
            200: '#ff2c30;',
            300: '#2c5dff',
            400: '#79ff2c',
        }
    },
    textStyles: {
        h1: {
            fontSize: ['48px', '72px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
        h2: {
            fontSize: ['40px', '66px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '2%',
        },
        h3: {
            fontSize: ['35px', '60px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
        h4: {
            fontSize: ['30px', '55px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
        h5: {
            fontSize: ['25px', '50px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
        h6: {
            fontSize: ['20px', '45px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
    }

    // fontSizes: {
    //     xs: "0.75rem",
    //     sm: "0.875rem",
    //     md: "1rem",
    //     lg: "1.125rem",
    //     xl: "1.25rem",
    //     "2xl": "1.5rem",
    //     "3xl": "1.875rem",
    //     "4xl": "2.25rem",
    //     "5xl": "3rem",
    //     "6xl": "3.75rem",
    //     "7xl": "4.5rem",
    //     "8xl": "6rem",
    //     "9xl": "8rem",
    //     "10xl": "10rem",
    // },
    // fontWeights: {
    //     hairline: 100,
    //     thin: 200,
    //     light: 300,
    //     normal: 400,
    //     medium: 500,
    //     semibold: 600,
    //     bold: 700,
    //     extrabold: 800,
    //     black: 900,
    // },
    // lineHeights: {
    //     normal: "normal",
    //     none: 1,
    //     shorter: 1.25,
    //     short: 1.375,
    //     base: 1.5,
    //     tall: 1.625,
    //     taller: "2",
    //     "3": ".75rem",
    //     "4": "1rem",
    //     "5": "1.25rem",
    //     "6": "1.5rem",
    //     "7": "1.75rem",
    //     "8": "2rem",
    //     "9": "2.25rem",
    //     "10": "2.5rem",
    // },
    // letterSpacings: {
    //     tighter: "-0.05em",
    //     tight: "-0.025em",
    //     normal: "0",
    //     wide: "0.025em",
    //     wider: "0.05em",
    //     widest: "0.1em",
    // },
})