import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.test.chicguide',
  appName: 'google-login2',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      androidClientId: '824153985838-ng4e3ig620o55bb40j7ak1ooscclhjeb.apps.googleusercontent.com',
      serverClientId: '824153985838-ng4e3ig620o55bb40j7ak1ooscclhjeb.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
