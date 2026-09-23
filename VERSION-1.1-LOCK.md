# VENIS V1.1 — DESIGN ENGINE LOCK

## Estado
V1.1 queda definida como la primera capa profesional sobre el núcleo V1.

## Arquitectura canónica
TIPO DE EVENTO
→ PLANTILLA
→ PALETA
→ TIPOGRAFÍA
→ DECORACIÓN
→ COMPONENTES
→ MOTOR
→ INVITACIÓN FINAL

## Lo construido
- Motor de diseño separado en `design-system.js`.
- 5 tipos de evento.
- 6 familias de plantilla.
- 8 paletas.
- 5 sistemas tipográficos.
- 6 sistemas de decoración.
- 6 recetas visuales de un clic.
- Ajuste fino de plantilla, paleta, tipografía y decoración.
- Renderizado por variables visuales y familias de composición.
- Compatibilidad con invitaciones V1 sin objeto `style`.
- El estilo queda almacenado dentro de cada invitación y viaja con su enlace.

## Regla de arquitectura
Una nueva invitación NO debe requerir duplicar el motor.
Los nuevos diseños deben entrar como datos/configuración dentro del sistema.

## Regla comercial
La fábrica debe multiplicar resultados mediante combinaciones controladas, no mediante pantallas innecesarias.

## Regla de evolución
V1 y V1.1 son bases protegidas. Las siguientes capas se agregan encima sin romper enlaces existentes ni el flujo de producción.

## Próxima escala
- biblioteca real de componentes;
- más plantillas profesionales;
- sistema tipográfico ampliable;
- biblioteca de ornamentos;
- reglas específicas por tipo de evento;
- presets comerciales;
- QA visual y responsive;
- duplicar/editar/reutilizar invitaciones;
- futura capa de imágenes/activos sin modificar el motor central.
