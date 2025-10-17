# 🛍️ Talento Tech - Pre-Entrega Node.js

## 📝 Descripción del proyecto

Sistema de gestión de productos (CRUD completo) desarrollado en Node.js que interactúa con la [FakeStore API](https://fakestoreapi.com/). Este proyecto implementa operaciones de Crear, Leer, Actualizar y Eliminar productos a través de una interfaz de línea de comandos (CLI).

El proyecto está estructurado siguiendo principios de arquitectura limpia, separando las capas de aplicación, dominio e infraestructura para mantener un código organizado y escalable.

## ✨ Características

- ✅ **GET** - Listar todos los productos o consultar por ID
- ✅ **POST** - Crear nuevos productos
- ✅ **PUT** - Actualizar productos existentes
- ✅ **DELETE** - Eliminar productos

## 🚀 Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/AgustinCardozo/talento-tech-pre-entrega-node.git
cd talento-tech-pre-entrega-node
```

2. Instalar dependencias (si las hubiera en el futuro):

```bash
npm install
```

## 💻 Uso

La aplicación se ejecuta desde la línea de comandos utilizando el siguiente formato:

```bash
npm run start <MÉTODO> <RECURSO> [parámetros]
```

### Ejemplos de uso

#### 1. Obtener todos los productos

```bash
npm run start GET products
```

#### 2. Obtener un producto específico por ID

```bash
npm run start GET products/1
```

#### 3. Crear un nuevo producto

```bash
npm run start POST products "Laptop Gaming" 1500 "electronics"
```

**Parámetros:**

- Título del producto (entre comillas si tiene espacios)
- Precio
- Categoría

#### 4. Actualizar un producto existente

```bash
npm run start PUT products/10 "Producto Actualizado" 999 "electronics"
```

**Parámetros:**

- ID del producto en la ruta (products/ID)
- Nuevo título
- Nuevo precio
- Nueva categoría

#### 5. Eliminar un producto

```bash
npm run start DELETE products/5
```

## 📁 Estructura del proyecto

``` bash
talento-tech-pre-entrega-node/
│
├── index.js                          # Punto de entrada de la aplicación
├── package.json                      # Configuración del proyecto y dependencias
├── README.md                         # Documentación del proyecto
│
└── src/
    ├── application/
    │   └── product.service.js        # Lógica de negocio y servicios
    │
    ├── domain/                       # Modelos y entidades del dominio
    │
    └── infraestructure/
        └── store.adapter.js          # Adaptador para comunicación con la API
```

### Descripción de las capas

- **application/**: Contiene la lógica de negocio y casos de uso
- **domain/**: Define las entidades y reglas de negocio del dominio
- **infraestructure/**: Implementa adaptadores para servicios externos (API, base de datos, etc.)

## 🛠️ Tecnologías utilizadas

- **Node.js** - Entorno de ejecución de JavaScript
- **ES Modules** - Sistema de módulos moderno de JavaScript
- **Fetch API** - Para realizar peticiones HTTP a la FakeStore API

## 📚 API Utilizada

Este proyecto consume la [FakeStore API](https://fakestoreapi.com/), una API REST gratuita para testing y prototipos.

- **Base URL**: `https://fakestoreapi.com`
- **Endpoint principal**: `/products`

## 👨‍💻 Autor

### Agustin Adrian Cardozo

## 📄 Licencia

ISC

## 🔮 Mejoras futuras

- [ ] Agregar validaciones más robustas de parámetros
- [ ] Implementar tests unitarios
- [ ] Añadir soporte para más entidades (usuarios, carritos)
- [ ] Crear una interfaz web
- [ ] Implementar autenticación
- [ ] Agregar manejo de errores más detallado
- [ ] Crear documentación de la API con Swagger

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias, por favor abre un issue en el repositorio de GitHub.

---
