export const frameworks = [
    {
        id: 'nextjs',
        name: 'Nextjs',
        logo: '/images/frameworks/nextjs.png',
        guideDesc: 'Add the PrimeFlex CSS file to your project.',
        guide: [
            {
                stepId: '1',
                title: 'Create your project',
                description: 'Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use Create Next App.',
                code: `npx create-next-app@latest my-project --typescript --eslint
cd my-project
`
            },
            {
                stepId: '2',
                title: 'Install Primeflex',
                description: `Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.`,
                code: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
`
            },
            {
                stepId: '3',
                title: 'Configure your template paths',
                description: `Add the paths to all of your template files in your tailwind.config.js file.                `,
                code: `/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Or if using 'src' directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
}
`
            },
            {
                stepId: '4',
                title: 'Start your build process',
                description: `Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.`,
                code: `npm run dev
`
            },
            {
                stepId: '5',
                title: 'Start using Primeflex in your project',
                description: `Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.`,
                code: `export default function Home() {
    return (
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
    )
}
`
            }
        ]
    },
    {
        id: 'angular',
        name: 'Angular',
        logo: '/images/frameworks/nextjs.png',
        guideDesc: 'Add the PrimeFlex CSS file to your project.',
        guide: [
            {
                stepId: '1',
                title: 'Step 1 for Angular',
                description: 'Description for Step 1 for Angular.',
                code: `Code for Step 1 for Angular
                `
            }
        ]
    },
    {
        id: 'nuxt',
        name: 'Nuxt',
        logo: '/images/frameworks/nextjs.png',
        guideDesc: 'Add the PrimeFlex CSS file to your project.',
        guide: [
            {
                stepId: '1',
                title: 'Step 1 for Nuxt',
                description: 'Description for Step 1 for Nuxt.',
                code: `Code for Step 1 for Nuxt
                `
            },
            {
                stepId: '2',
                title: 'Step 2 for Nuxt',
                description: 'Description for Step 1 for Nuxt.',
                code: `Code for Step 1 for Nuxt
                `
            }
        ]
    }
];
