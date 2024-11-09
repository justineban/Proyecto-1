# Biblioteca Digital - Desarrollo de Aplicaciones Web Backend

Backend de una plataforma de biblioteca que le permite a los usuarios/clientes registrarse, buscar, reservar libros y gestionar información de ellos y libros de forma segura y autenticada.

## Funcionalidades

### Modelos Principales
- **Usuarios**: Registro, autenticación y actualización de perfil.
- **Libros**: Agregar, actualizar, buscar y gestionar reservas con historial.

### Operaciones CRUD
#### Usuarios
- **Crear**: Registro de nuevos usuarios.
- **Leer**: Autenticación (login) por email y contraseña.
- **Actualizar**: Modificación del perfil (solo por el usuario o usuarios con permisos).
- **Eliminar (Soft Delete)**: Inhabilitación de cuenta (solo por el usuario o usuarios con permisos).

#### Libros
- **Crear y Actualizar**: Agregar o modificar detalles de libros (restringido a usuarios con permisos).
- **Leer**: Búsqueda de libros por ID o mediante filtros avanzados (género, autor, fecha, etc.).
- **Eliminar (Soft Delete)**: Inhabilitación de libros (solo usuarios con permisos).

### Historial de Reservas
- **Por Usuario**: Registro de libros reservados, fechas de reserva y entrega.
- **Por Libro**: Registro de quién reservó el libro y las fechas correspondientes.

## Autenticación y Permisos
- Autenticación requerida para todos los endpoints, excepto:
  - Registro de usuario.
  - Búsqueda de libros.
- Los permisos de usuario limitan el acceso a las operaciones de actualización y eliminación.

## Filtros y Seguridad
- Las búsquedas excluyen registros inhabilitados a menos que se especifique lo contrario.

## Configuración

1. Clonar el repositorio:
   ```bash
   git clone 
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Configurar las variables de entorno en un archivo `.env` en la raíz del proyecto.
4. Iniciar el servidor:
   ```bash
   npm run dev
   ```

## Requerimientos

- **Node.js**: Versión 14 o más.
- **Express**.
- **JWT**.
- - **MongoDB**.
