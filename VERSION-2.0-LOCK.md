# VENIS · VERSION 2.0

## Estado
**AUDITORÍA + WHATSAPP EDITION**

V2.0 prioriza dos objetivos: facilidad extrema de producción y una invitación final que se sienta profesional al abrirse y al compartirse por WhatsApp.

## Flujo operador
**Evento → Estilo → Datos → Crear invitación → Compartir.**

La personalización avanzada permanece escondida para no cargar la experiencia principal.

## Entrega
La invitación final incorpora:
- presentación móvil centrada y limpia
- acciones claras para WhatsApp, compartir y copiar enlace
- botones de ubicación y confirmación cuando existen esos datos
- jerarquía visual orientada a nombre, fecha y lugar
- composición responsive para teléfono y escritorio
- metadatos Open Graph generales de VENIS para mejorar la identidad del enlace

## Auditoría estructural
- motor de diseño separado del formulario
- sistema de assets separado
- recetas visuales separadas de las familias profundas
- publicación autónoma mediante hash, sin backend
- guardado local preservado
- compatibilidad de enlaces anteriores preservada

## Limitación conocida
Como GitHub Pages publica un único HTML estático y los datos de cada invitación viven dentro del hash de la URL, WhatsApp no puede leer dinámicamente el nombre, fecha o foto de cada invitación para construir una tarjeta OG distinta antes de ejecutar JavaScript. V2.0 mejora la presentación al abrir el enlace y el texto de envío, pero una previsualización OG individual por invitación requeriría publicación server-side o generación de páginas individuales.

## Regla de producto
La profundidad permanece invisible para el cliente. La invitación debe parecer diseñada por una persona, no ensamblada por un configurador.
