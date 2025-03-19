# F1SURELY - Dashboard de Fórmula 1

F1SURELY es una aplicación web desarrollada en Angular que proporciona estadísticas interactivas sobre la Fórmula 1. La aplicación muestra información actualizada sobre los mejores pilotos y constructores, permitiendo comparar temporadas pasadas mediante gráficos dinámicos.

## 🏎️ Sobre la Fórmula 1

La F1 es un campeonato que cuenta con una serie de competencias o "Grandes Premios" celebrados en circuitos de todo el mundo. Su objetivo es determinar quién es el mejor piloto y el mejor equipo en cada temporada.

Cada equipo participante está compuesto por dos autos, sus respectivos pilotos y una escudería encargada del diseño y mantenimiento de los coches.

### Clasificaciones principales:
- **Campeonato de Pilotos:** Los pilotos suman puntos según su posición en cada carrera. El piloto con más puntos al final de la temporada es coronado campeón mundial.
- **Campeonato de Constructores:** Se premia a los equipos según el rendimiento de sus autos. El equipo con más puntos gana este campeonato.

### Ejecución de un Gran Premio:
- **Viernes:** Prácticas libres para ajustes del coche.
- **Sábado:** Clasificación para determinar las posiciones de salida.
- **Domingo:** Carrera principal, donde se distribuyen los puntos.

## 🎯 Objetivo del Desarrollo

Esta aplicación ha sido diseñada para defender en una entrevista técnica su diseño e implementación, cumpliendo con los siguientes requerimientos:
- Listar los equipos actuales con datos relevantes.
- Listar los pilotos actuales de un equipo en particular.
- Buscador de pilotos por:
  - **Año, nombre y/o apellido**.
  - La búsqueda por nombre y apellido se realiza cuando al menos se ingresan 4 caracteres.
  - Mostrar el año consultado, nombre, apellido y acceso a su Wikipedia (proporcionado por la API).
- Gráficos con los **Top 5 Pilotos** y **Top 5 Constructores** según el año consultado.

## 🚀 Tecnologías Utilizadas

- **Angular** v16.2.16
- **NG Zorro-Antd** v15
- **Chart.js** para visualización de datos
- **F1API.dev** como fuente de datos

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/) (versión recomendada: `v18.x` o superior)
- [Angular CLI](https://angular.io/cli) (versión: `16.2.16`)
- [Git](https://git-scm.com/)

## 🔧 Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu máquina local:

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/AleVzT/F1SURELY.git
cd F1SURELY
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Configurar las variables de entorno
Crea un archivo `.env` en la raíz del proyecto y agrega las credenciales necesarias si aplica.

### 4️⃣ Ejecutar el servidor de desarrollo
```sh
npm start
```
Por defecto, la aplicación correrá en `http://localhost:4200/`.

## 📡 APIs Utilizadas
Este proyecto obtiene datos en tiempo real desde la API de [F1API.dev](https://f1api.dev/). Algunos de los endpoints utilizados incluyen:

- **Clasificación de Pilotos:** `https://f1api.dev/api/drivers`
- **Clasificación de Constructores:** `https://f1api.dev/api/constructors`
- **Resultados de Carreras:** `https://f1api.dev/api/races`

## 📌 Características Clave
- Transiciones suaves y animaciones sutiles.
- Interactividad con gráficos dinámicos.
- Selector de año para comparar temporadas pasadas.
- Uso de directivas personalizadas y pipes para mejorar la presentación de datos.

## 📜 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

💡 _¡Contribuciones y mejoras son bienvenidas!_ Si deseas contribuir, por favor crea un _pull request_ con tus cambios.