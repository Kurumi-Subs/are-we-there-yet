// Consult https://www.snowpack.dev to learn about these options
module.exports = {
    extends: '@sveltejs/snowpack-config',
    packageOptions: {
        env: {
            TOKEN: true,
        },
    },
    plugins: [
        [
            '@snowpack/plugin-build-script',
            {
                cmd: 'postcss',
                input: ['.css', '.pcss'],
                output: ['.css'],
            },
        ],

        '@snowpack/plugin-typescript',
    ],
    mount: {
        'src/components': '/_components',
    },
    alias: {
        $components: './src/components',
    },
};
