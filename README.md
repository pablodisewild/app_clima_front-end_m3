# App Clima V.2 – Frontend Módulo 3

Aplicación web de pronóstico climático desarrollada como entrega final del **Módulo 3 – Front-End**.  
El proyecto muestra información del clima por ciudad y una vista de detalle con animaciones dinámicas según las condiciones climáticas.

Acceso directo:

👉 [https://pablodisewild.github.io/app_clima-front-end_m3/](https://pablodisewild.github.io/app_clima_front-end_m3/)

## Funcionalidades principales

- Listado de ciudades con información básica del clima
- Vista de detalle por ciudad
- Animaciones visuales según el clima:
  - ☀️ Soleado
  - 🌧️ Lluvioso
  - 💨 Ventoso
  - ☁️ Nublado
- Navegación entre vistas usando parámetros en la URL
- Estilos personalizados con **SASS (SCSS)** y **Bootstrap vía CDN**

## Tecnologías utilizadas

- HTML5
- CSS3 / SCSS
- JavaScript (ES6)
- Bootstrap 5 (CDN)
- Live Sass Compiler
- Git & GitHub

## ✅ Metodología de estilos (BEM)

Para mantener los estilos ordenados y escalables se utilizó **BEM (Block, Element, Modifier)**.

- **Block:** componente principal (ej: `.place-card`, `.weather-hero`)
- **Element:** partes internas del bloque (ej: `.place-card__name`, `.place-card__temp`)
- **Modifier:** variaciones del bloque según estado (ej: `.weather-hero--sunny`, `.weather-hero--rainy`)

Esto facilita mantener el CSS claro, evitar colisiones de nombres y preparar el proyecto para futuras mejoras (por ejemplo, cuando se conecte a una API).

## Estructura SASS (SCSS)

Se implementó una estructura modular con SASS para reutilizar código y mejorar mantenibilidad:

`assets/scss/main.scss`: archivo principal que **importa parciales** y compila a `assets/css/main.css`.
`assets/scss/base/_variables.scss`: variables globales (colores, tipografía, espaciados).
`assets/scss/base/_mixins.scss`: mixins reutilizables (por ejemplo, estilos repetidos/efectos en componentes).

El CSS final compilado se enlaza en los HTML mediante:

"assets/css/main.css"

## Estructura del proyecto

aplicacion_clima_m3/
├── index.html
├── detalle.html
├── assets/
│ ├── css/
│ │ └── main.css
│ ├── scss/
│ │ ├── main.scss
│ │ └── base/
│ │ ├── _variables.scss
│ │ └── _mixins.scss
│ └── js/
│ ├── app.js
│ └── detalle.js
└── README.md

## Detalles de diseño

- Animaciones realizadas solo con CSS (sin librerías externas)
- Uso de pseudo-elementos y keyframes
- Estructura SCSS modular
- Separación clara entre lógica (JS) y presentación (CSS)

## Estudiante

**Pablo Ignacio Muñoz García**  
Proyecto para Bootcamp - Front-End Sustantiva Spa

## Notas finales

Este proyecto se incluye levemente:
- mejoras visuales
- animaciones dinámicas
- estructura de código más ordenada y escalable
