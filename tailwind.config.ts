import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
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
                accent: '#E55000',
                purple: '#952A8B',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
