# 27 Store

Pagina estatica de 27 Store con catalogo, carrito y pedido directo por WhatsApp.

## Configuracion

- No usa login, Supabase ni Firebase.
- El archivo principal es `index.html`.
- Los productos, precios, imagenes, stock y tipo se editan en `products.js`.
- Tambien podes abrir `admin.html` para editar productos con una pantalla visual y exportar el nuevo `products.js`.

## Editor de productos

1. Abrir `admin.html` en el navegador.
2. Elegir o crear un producto.
3. Cambiar nombre, precio, imagen, categoria, stock y tipo visible: Cuenta, Key o Servicio.
4. Tocar "Guardar cambios". En ese navegador la tienda ya toma esos productos.
5. Para publicarlo online o dejarlo permanente, tocar "Copiar products.js" o "Descargar" y reemplazar el archivo `products.js`.

## Publicacion

Se puede publicar con GitHub Pages, Netlify o cualquier hosting estatico. Para publicar la tienda, subir `index.html`, `products.js` y la carpeta `images`.

Mantené `admin.html` como herramienta local para editar productos y cupones. No hace falta publicarlo online.
