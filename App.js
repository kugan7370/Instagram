import React from 'react';
import { LogBox } from 'react-native';
import AuthNavigation from './AuthNavigation';





LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();


export default function App() {
     
      return (
            
     <AuthNavigation/>
  )}


