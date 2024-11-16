import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Router} from "@/router";
import {AuthProvider} from "@/context/AuthContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <Router/>
                </AuthProvider>
            </QueryClientProvider>
        </AuthProvider>
    </StrictMode>,
)
