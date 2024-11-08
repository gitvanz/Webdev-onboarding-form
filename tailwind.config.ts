import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6A0B',
                secondary: '#E59600',
                accent: '#952A8B',
                darkOrange: '#E55000',
            },
        },
    },
    plugins: [],
} satisfies Config;
