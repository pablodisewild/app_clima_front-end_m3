# App Clima V.2 – Frontend Módulo 3

Aplicación web de pronóstico climático desarrollada como entrega final del **Módulo 3 – Front-End**.  
El proyecto muestra información del clima por ciudad y una vista de detalle con animaciones dinámicas según las condiciones climáticas.

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
Proyecto académico – Bootcamp Front-End

## Notas finales

Este proyecto se incluye levemente:
- mejoras visuales
- animaciones dinámicas
- estructura de código más ordenada y escalable
