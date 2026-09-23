# VENIS · Fábrica de invitaciones

VENIS es una fábrica privada y liviana para producir invitaciones digitales desde GitHub Pages.

## Arquitectura inicial
- Presets: cumpleaños, 15 años, casamiento, bautismo y evento.
- Motor de datos: un único objeto de invitación alimenta formulario, vista previa y publicación.
- Persistencia local: los trabajos quedan guardados en el dispositivo del operador.
- Publicación sin backend: la invitación se serializa dentro del hash de la URL.
- Salida: vista móvil, confirmación por WhatsApp, ubicación, compartir y copia de enlace.

## Flujo
**Nueva invitación → modelo → datos → vista previa → compartir/publicar.**

No hay cuentas, pagos, base de datos ni dependencias externas en esta primera versión.

## Decisión técnica
GitHub Pages no puede escribir archivos nuevos en el repositorio desde el navegador sin exponer credenciales. Por eso esta versión usa URLs autónomas. La imagen de portada acepta una URL pública.

## Publicación
Activá GitHub Pages sobre la rama main y la carpeta raíz.