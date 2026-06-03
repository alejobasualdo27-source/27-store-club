# 27 Store

Tienda estatica con catalogo, carrito y pedido por WhatsApp.

## Edicion rapida

- `index.html`: tienda principal.
- `products.js`: productos, precios, imagenes y textos.
- `admin.html`: editor local para ordenar, crear, duplicar y exportar productos.

## Flujo de trabajo

1. Abrir `admin.html`.
2. Editar producto, imagen, precio, stock y tipo.
3. Guardar cambios.
4. Copiar o descargar `products.js` para publicar la version final.

## Publicacion

Se puede subir tal cual a Netlify, GitHub Pages o cualquier hosting estatico.

Archivos necesarios:

- `index.html`
- `products.js`
- carpeta `images`

## Notas

- El admin guarda cambios locales en el navegador.
- Si una imagen no existe, la tienda usa una imagen de respaldo local.