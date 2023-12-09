// App.js
import React from 'react';
import MyComponent from '../components/MyComponent';
import { UserProvider, ThemeProvider, LanguageProvider, ConfigProvider } from '../contexts';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <ConfigProvider>
            <MyComponent />
          </ConfigProvider>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
