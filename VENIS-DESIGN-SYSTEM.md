# VENIS · SISTEMA DE DISEÑO V1.1

## Principio
Muchísima estructura por debajo. Muy poca fricción por delante.

## Arquitectura visual
- Presets = tipo de evento.
- Plantillas = composición.
- Paletas = identidad cromática.
- Tipografías = personalidad.
- Decoración = atmósfera.
- Componentes = piezas reutilizables.
- Motor de render = salida única.

## Familias de plantillas
### Editorial
Elegante, tipográfica, sobria.
### Romance
Casamientos y aniversarios.
### Celebration
Cumpleaños y 15.
### Soft
Bautismos, comuniones y celebraciones familiares.
### Modern
Eventos, emprendimientos y celebraciones contemporáneas.
### Minimal
Pocas piezas, mucho espacio, alto contraste.

## Paletas iniciales
- Tierra: carbón + crema + terracota.
- Noche: negro + marfil + dorado suave.
- Rosa polvo: vino + rosa humo + crema.
- Botánica: verde profundo + arena + oliva.
- Azul: azul tinta + hielo + gris cálido.
- Lavanda: ciruela + lavanda + marfil.
- Fiesta: petróleo + coral + crema.
- Blanco: negro + blanco roto + gris piedra.

## Tipografía
El motor debe soportar tres roles:
- Display: títulos.
- Text: información.
- Accent: frases especiales.

La primera versión usa fuentes del sistema para conservar velocidad y cero dependencias. La arquitectura queda preparada para incorporar una biblioteca de fuentes web más adelante.

## Decoración
Elementos reutilizables, nunca obligatorios:
- líneas
- marcos
- estrellas
- puntos
- flores abstractas
- hojas
- ondas
- cintas
- brillos
- geometría
- ornamentos clásicos

## Regla de calidad
No agregar decoración por cantidad. Cada elemento debe reforzar el tipo de evento y mantener legibilidad en móvil.

## Regla comercial
Una plantilla debe poder cambiar radicalmente de aspecto mediante plantilla + paleta + tipografía + decoración sin duplicar el motor.
