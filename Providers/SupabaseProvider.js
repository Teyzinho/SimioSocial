"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

const SupabaseProvider = ({ children }) => {
    // Utilizando o hook 'useState' para criar um estado chamado 'supabaseClient'
    // Inicializando-o com o resultado da função 'createClientComponentClient<Database>()'
    const [supabaseClient] = useState(() =>
        createClientComponentClient()
    );

    // Renderizando o componente 'SessionContextProvider' e passando o 'supabaseClient' como prop 'supabaseClient'
    // Incluindo os 'children' como conteúdo do 'SessionContextProvider'
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    );
};

export default SupabaseProvider;
