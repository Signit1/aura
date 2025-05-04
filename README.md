# AURA - Análisis Unificado de Riesgos y Alertas 🛡️

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <!-- O la licencia que elijas -->

**La nueva inteligencia para combatir el lavado de dinero con IA + Blockchain.**

*(Proyecto presentado para el ETH Cinco de Mayo Hackathon)*

## Tabla de Contenidos

*   [Descripción Corta](#descripción-corta)
*   [Problema Solucionado](#problema-solucionado)
*   [Nuestra Solución: ¿Cómo funciona AURA?](#nuestra-solución-cómo-funciona-aura)
*   [Características Principales](#características-principales)
*   [Tecnologías Utilizadas](#tecnologías-utilizadas)
*   [Demo en Vivo](#demo-en-vivo)
*   [Contratos Inteligentes Desplegados](#contratos-inteligentes-desplegados)
*   [Documentación Adicional](#documentación-adicional)
*   [Presentación / Pitch Deck](#presentación--pitch-deck)
*   [Diagramas e Imágenes de Apoyo](#diagramas-e-imágenes-de-apoyo)
*   [Instalación y Ejecución Local](#instalación-y-ejecución-local)
*   [Equipo](#equipo)
*   [Tracks del Hackathon](#tracks-del-hackathon)

## Descripción Corta

AURA es una aplicación web construida con **React**, usando **Material UI (MUI)** para el diseño de la interfaz, **ethers.js** para la conexión e interacción con la blockchain, y **jsPDF** para generar y exportar reportes. Interactúa con **contratos inteligentes** desplegados (escritos en Solidity) y soporta **múltiples idiomas** (español e inglés).

Su objetivo principal es analizar el riesgo AML asociado a wallets de criptomonedas, presentando un score visual (🟢🟡🔴) para ayudar a los usuarios a operar de forma más segura en el ecosistema Web3.

## Problema Solucionado

El crecimiento exponencial de Web3 y las finanzas descentralizadas (DeFi) ha traído consigo enormes oportunidades, pero también ha abierto nuevas vías para actividades ilícitas como el lavado de dinero. Para el usuario promedio y las plataformas emergentes, es increíblemente difícil y complejo evaluar si una dirección de wallet desconocida ha estado involucrada en actividades sospechosas o está vinculada a fondos de origen ilegal. Interactuar inadvertidamente con estos fondos puede llevar a la congelación de activos en exchanges centralizados, pérdida de acceso a servicios, y exposición a riesgos regulatorios y de reputación. Falta una herramienta accesible e intuitiva para realizar una debida diligencia AML básica.

## Nuestra Solución: ¿Cómo funciona AURA?

AURA aborda este problema proporcionando una plataforma fácil de usar que realiza un análisis de riesgo AML preliminar sobre direcciones de wallets:

1.  **Autenticación y Acceso:** Los usuarios acceden a través de un sistema de login seguro.
2.  **Conexión Wallet:** Se conectan de forma segura usando su wallet Web3 (ej. MetaMask), gestionado mediante **ethers.js**.
3.  **Análisis On-Demand:** Ingresan la dirección de la wallet que desean investigar.
4.  **Evaluación de Riesgo:** AURA realiza un análisis que incluye:
    *   Consulta de Listas de Referencia (simuladas en MVP).
    *   Análisis básico de Actividad (simplificado en MVP).
5.  **Resultado Visual (Semáforo):** Se presenta un score de riesgo claro (🟢 Bajo, 🟡 Medio, 🔴 Alto) utilizando componentes de **Material UI**.
6.  **Historial y Reportes:** Las consultas quedan registradas y el usuario puede generar un reporte en PDF gracias a la librería **jsPDF**.
7.  **Suscripción (Opcional):** Acceso a funciones avanzadas mediante una suscripción pagadera en cripto (ETH o Token MXNB en Testnet) a través de un **Smart Contract** (Solidity) con el que se interactúa usando **ethers.js**.
8.  **Contenido Educativo:** Secciones de Blog y "Acerca de" para informar al usuario.
9.  **Multi-idioma:** Interfaz disponible en Español e Inglés, gestionado por [menciona tu librería i18n si la identificaste].

## Características Principales

*   Login de Usuario.
*   Dashboard principal intuitivo (Diseño con **MUI**).
*   Conexión segura con Wallet Web3 (Integración con **ethers.js**).
*   Análisis de riesgo AML de wallets.
*   Sistema de Semáforo de Riesgo (Verde/Amarillo/Rojo).
*   Indicador de pertenencia a Listas Negras (simuladas).
*   Historial de consultas realizadas.
*   Generación de Reporte en PDF (Usando **jsPDF**).
*   Pantalla de Suscripción con opciones Mensual/Anual.
*   Integración de pago con **Smart Contract** (ETH y Token MXNB en Testnet Arbitrum Sepolia vía **ethers.js**).
*   Sección "¿Qué es AURA?" informativa.
*   Sección "Blog" con contenido educativo.
*   **Soporte Multi-idioma** (Español/Inglés).

## Tecnologías Utilizadas

Las tecnologías principales usadas en AURA son:

*   ✅ **React:** Biblioteca principal para construir la interfaz de usuario.
*   ✅ **Material UI (MUI):** Librería de componentes para el diseño visual y la responsividad.
*   ✅ **ethers.js:** Para la interacción con la blockchain Ethereum (conexión de wallet, llamadas a contratos).
*   ✅ **Solidity:** Lenguaje para escribir los Smart Contracts desplegados en la blockchain.
*   ✅ **jsPDF:** Librería para generar los reportes en formato PDF del lado del cliente.
*   ✅ **Soporte Multi-idioma (i18n):** Implementación para ofrecer la interfaz en español e inglés.
*   **Vite:** Bundler y servidor de desarrollo rápido para el frontend. *(Añadido basado en interacciones previas)*
*   **Blockchain (Despliegue Contratos):** Arbitrum Sepolia (Testnet).
*   **Control de Versiones:** Git, GitHub.
*   **Despliegue Frontend:** [Menciona la plataforma, ej: Vercel, Netlify, GitHub Pages].

## Demo en Vivo

Puedes probar la aplicación AURA desplegada aquí:

➡️ **[Enlace a tu aplicación desplegada (ej. Vercel, Netlify)]**

*(Recuerda: Usa la red Arbitrum Sepolia Testnet y obtén fondos de prueba de los faucets correspondientes para probar la suscripción)*

## Contratos Inteligentes Desplegados

Nuestros contratos inteligentes (escritos en **Solidity**) están desplegados y verificados en la red **Arbitrum Sepolia Testnet**.

*   **Contrato de Suscripción (AuraSubscription):**
    *   **Dirección:** `[Pega aquí la dirección de tu contrato de suscripción]`
    *   **Enlace al Explorador (Arbiscan Sepolia):** `[Pega aquí el enlace directo a tu contrato verificado en Arbiscan Sepolia]`
    *   **Verificado:** Sí ✅
    *   *(Interactuamos con este contrato usando **ethers.js**)*

*   *...(Si tienes otros contratos relevantes, añádelos aquí de la misma forma)...*

## Documentación Adicional

*   **Documento de Diseño de Software (SDD):** [Enlace a tu SDD si lo tienes en Google Docs, Notion, o dentro del repo]
*   **Mockups / Diseño UI/UX (Figma, etc.):** [Enlace a tus diseños si los tienes]
*   *...(Cualquier otra documentación relevante)...*

## Presentación / Pitch Deck

Puedes ver nuestra presentación detallada del proyecto aquí:

➡️ **[Enlace a tu presentación (ej. Google Slides, Canva, PDF en el repo)]**

## Diagramas e Imágenes de Apoyo

*   **Diagrama de Arquitectura:**
    *   [Inserta aquí una imagen o enlace a tu diagrama de arquitectura]
    *   *Ejemplo:* `![Arquitectura AURA](ruta/a/tu/imagen/arquitectura.png)`
*   **Capturas de Pantalla Clave:**
    *   *Login:* `![Login](ruta/a/tu/imagen/login.png)`
    *   *Dashboard y Análisis:* `![Dashboard](ruta/a/tu/imagen/dashboard.png)`
    *   *Suscripción:* `![Suscripción](ruta/a/tu/imagen/suscripcion.png)`
    *   *Blog:* `![Blog](ruta/a/tu/imagen/blog.png)`
    *   *Reporte PDF (Ejemplo):* `![Reporte PDF](ruta/a/tu/imagen/reporte.png)` *(Si tienes una captura)*

*(Sube las imágenes a tu repositorio de GitHub y enlaza a ellas)*

## Instalación y Ejecución Local

Si deseas ejecutar AURA en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone [URL de tu repositorio GitHub]
    cd [Nombre de la carpeta del proyecto]
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    # o yarn install
    ```
3.  **Configura las variables de entorno:**
    *   Crea un archivo `.env` en la raíz del proyecto.
    *   Añade las variables necesarias (si las tienes), como:
        ```dotenv
        VITE_SUBSCRIPTION_CONTRACT_ADDRESS=DIRECCION_CONTRATO
        VITE_MXNB_TOKEN_ADDRESS=DIRECCION_TOKEN_MXNB_TESTNET
        # ...otras variables si usas RPC específico, API keys, etc.
        ```
    *   *(Asegúrate de explicar qué variables son necesarias)*
4.  **Ejecuta la aplicación en modo desarrollo (con Vite):**
    ```bash
    npm run dev
    # o yarn dev
    ```
5.  Abre tu navegador en `http://localhost:5173` (o el puerto que indique Vite).

## Tracks del Hackathon

Este proyecto participa en los siguientes tracks del ETH Cinco de Mayo Hackathon:

*   **Arbitrum:** [Breve justificación: Ej. Desplegado en Arbitrum Sepolia, usa su ecosistema.]
*   **Bitso:** [Breve justificación: Ej. Integra token MXNB en contrato y flujo de suscripción.]
*   **Mantle:** [Breve justificación: Ej. Tipo App Consumer/DeFi/AI (mencionar visión), potencial despliegue.]
*   *[Añade/quita tracks según corresponda]*
