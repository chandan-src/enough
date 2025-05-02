import type { Config } from 'tailwindcss'

interface DaisyUIConfig {
    themes?: string[];
}

const config: Config & { daisyui?: DaisyUIConfig } = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light"], // You can add more themes here if needed
    },
}

export default config 