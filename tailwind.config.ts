import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate"

export default {
    dummyMode: ["class"],
    content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'var(--background)',
    			foreground: 'var(--foreground)'
    		},
    		backgroundColor: {
    			primary: '#052F35'
    		},
    		borderColor: {
    			primary: '#0E464F'
    		},
    		fontFamily: {
				roadrage: ['var(--font-road-rage)'],
				regular: ['var(--font-roboto)'],
				alatsi: ['var(--font-alatsi)'],
    			jejumyeongjo: [
    				'var(--font-jejumyeongjo)'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [tailwindCssAnimate],
} satisfies Config;
