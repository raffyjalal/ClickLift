import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    slug: 'clicklift',
    name: 'ClickLift',
    version: '1.0.0',
    orientation: 'portrait',
    icon: "./src/assets/images/clickliftlogo.png",
    scheme: 'clicklift',
    userInterfaceStyle: 'automatic',
    splash: {
        image: "./src/assets/images/clickliftlogo.png",
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
        './src/assets/**/*',
    ],
    ios: {
        supportsTablet: true,
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./src/assets/images/clickliftlogo.png",
            backgroundColor: '#ffffff'
        }
    },
    web: {
        bundler: 'metro',
        favicon: "./src/assets/images/favicon.png",
    }
});
