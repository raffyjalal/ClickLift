module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            ['module:react-native-dotenv', {
                moduleName: '@env',
                path: '.env',
                blacklist: null,
                whitelist: null,
                safe: false,
                allowUndefined: false
            }],
            require.resolve('expo-router/babel'),
            ['module-resolver', {
                alias: {
                    "src": './src',
                    "@assets": "./src/assets",
                    "@components": "./src/components",
                    "@constants": "./src/constants",
                    "@context": "./src/context",
                    "@hooks": "./src/hooks",
                    "@navigation": "./src/navigation",
                    "@screens": "./src/screens",
                    "@config": "./src/config",
                }
            }],
            "nativewind/babel",
        ],
    };
};
