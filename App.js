import React, { useEffect } from 'react';


import AppNavigation from "./src/navigation/AppNavigation";
import { initializeFirebase } from './src/services/firebaseConfig';

import { AuthProvider } from './src/context/AuthContext';

function App() {

    useEffect(() => {
        initializeFirebase();
    })

    return (
       <AuthProvider>
        <AppNavigation />
         </AuthProvider>
    );
}

export default App;