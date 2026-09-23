/* VENIS DESIGN SYSTEM v1.6
 TYPE → TEMPLATE → PALETTE → TYPOGRAPHY → DECORATION → ASSETS → COMPONENTS → ENGINE
*/
const VENIS_DESIGN={
  "version": "1.6",
  "quality": {
    "maxTitle": 34,
    "maxSubtitle": 72,
    "maxMessage": 220,
    "minContrast": 4.5
  },
  "tokens": {
    "radius": {
      "sharp": "4px",
      "soft": "18px",
      "round": "32px"
    },
    "density": {
      "compact": "12px",
      "comfortable": "20px",
      "airy": "32px"
    },
    "textScale": {
      "eyebrow": "10px",
      "title": "clamp(44px,9vw,88px)",
      "body": "15px",
      "small": "10px"
    }
  },
  "templates": {
    "editorial": {
      "label": "Editorial",
      "family": "editorial",
      "layout": "hero",
      "desc": "Tipográfico, sobrio y sofisticado",
      "cover": "immersive",
      "meta": "rail",
      "message": "quote"
    },
    "romance": {
      "label": "Romance",
      "family": "romance",
      "layout": "centered",
      "desc": "Emocional, clásico y delicado",
      "cover": "portrait",
      "meta": "center",
      "message": "quote"
    },
    "celebration": {
      "label": "Celebración",
      "family": "celebration",
      "layout": "bold",
      "desc": "Energético, grande y festivo",
      "cover": "poster",
      "meta": "tiles",
      "message": "center"
    },
    "soft": {
      "label": "Suave",
      "family": "soft",
      "layout": "airy",
      "desc": "Luminoso, orgánico y familiar",
      "cover": "airy",
      "meta": "soft",
      "message": "quote"
    },
    "modern": {
      "label": "Moderno",
      "family": "modern",
      "layout": "split",
      "desc": "Geométrico, actual y comercial",
      "cover": "split",
      "meta": "rail",
      "message": "plain"
    },
    "minimal": {
      "label": "Minimal",
      "family": "minimal",
      "layout": "clean",
      "desc": "Limpio, premium y con aire",
      "cover": "clean",
      "meta": "line",
      "message": "plain"
    }
  },
  "palettes": {
    "tierra": {
      "label": "Tierra",
      "bg": "#f3eee7",
      "surface": "#fffaf5",
      "ink": "#241c17",
      "accent": "#a86f46",
      "accent2": "#70482f",
      "soft": "#ead9c8"
    },
    "noche": {
      "label": "Noche",
      "bg": "#111217",
      "surface": "#1a1c23",
      "ink": "#f7f2eb",
      "accent": "#c7a46a",
      "accent2": "#e8d5ad",
      "soft": "#34343d"
    },
    "rosa": {
      "label": "Rosa polvo",
      "bg": "#f5eded",
      "surface": "#fff9fa",
      "ink": "#302327",
      "accent": "#b77f8e",
      "accent2": "#825662",
      "soft": "#ead1d7"
    },
    "botanica": {
      "label": "Botánica",
      "bg": "#edf0e9",
      "surface": "#fbfcf8",
      "ink": "#20271f",
      "accent": "#70856c",
      "accent2": "#4d624b",
      "soft": "#d6dfd1"
    },
    "azul": {
      "label": "Azul",
      "bg": "#edf2f7",
      "surface": "#fbfdff",
      "ink": "#1c2733",
      "accent": "#587b9d",
      "accent2": "#3d5b76",
      "soft": "#d3e0eb"
    },
    "lavanda": {
      "label": "Lavanda",
      "bg": "#f0edf5",
      "surface": "#fcfaff",
      "ink": "#292430",
      "accent": "#8170a4",
      "accent2": "#5f527d",
      "soft": "#ddd5eb"
    },
    "fiesta": {
      "label": "Fiesta",
      "bg": "#fff1dc",
      "surface": "#fffaf3",
      "ink": "#271c15",
      "accent": "#d17b37",
      "accent2": "#8d4c1d",
      "soft": "#f4d3a8"
    },
    "blanco": {
      "label": "Blanco",
      "bg": "#f7f7f5",
      "surface": "#ffffff",
      "ink": "#171717",
      "accent": "#77746d",
      "accent2": "#4d4b47",
      "soft": "#e7e5df"
    }
  },
  "typography": {
    "editorial": {
      "label": "Serif elegante",
      "display": "Georgia,'Times New Roman',serif",
      "text": "Inter,ui-sans-serif,system-ui,sans-serif",
      "accent": "Georgia,serif"
    },
    "classic": {
      "label": "Clásica",
      "display": "'Palatino Linotype',Palatino,Georgia,serif",
      "text": "Georgia,serif",
      "accent": "Georgia,serif"
    },
    "modern": {
      "label": "Sans moderna",
      "display": "Inter,ui-sans-serif,system-ui,sans-serif",
      "text": "Inter,ui-sans-serif,system-ui,sans-serif",
      "accent": "Inter,sans-serif"
    },
    "soft": {
      "label": "Suave",
      "display": "Georgia,serif",
      "text": "'Trebuchet MS',ui-sans-serif,sans-serif",
      "accent": "Georgia,serif"
    },
    "bold": {
      "label": "Editorial fuerte",
      "display": "Impact,Haettenschweiler,'Arial Narrow Bold',sans-serif",
      "text": "Inter,ui-sans-serif,system-ui,sans-serif",
      "accent": "Inter,sans-serif"
    }
  },
  "decorations": {
    "none": {
      "label": "Limpio",
      "className": "deco-none",
      "layers": 0
    },
    "ornaments": {
      "label": "Ornamentos",
      "className": "deco-ornaments",
      "layers": 2
    },
    "botanical": {
      "label": "Botánica",
      "className": "deco-botanical",
      "layers": 2
    },
    "stars": {
      "label": "Estrellas",
      "className": "deco-stars",
      "layers": 2
    },
    "geometry": {
      "label": "Geometría",
      "className": "deco-geometry",
      "layers": 1
    },
    "lines": {
      "label": "Líneas",
      "className": "deco-lines",
      "layers": 1
    }
  },
  "components": {
    "cover": {
      "required": true
    },
    "eventMeta": {
      "required": true
    },
    "details": {
      "optional": true
    },
    "message": {
      "optional": true
    },
    "actions": {
      "required": true
    },
    "footer": {
      "required": true
    }
  },
  "recipes": {
    "elegante": { "label":"Elegante", "family":"Elegante", "template":"editorial", "palette":"noche", "typography":"editorial", "decoration":"ornaments", "asset":"sparkle", "density":"quiet", "bestFor":["quince","evento"] },
    "romantico": { "label":"Romántico", "family":"Romántico", "template":"romance", "palette":"rosa", "typography":"classic", "decoration":"botanical", "asset":"hearts", "density":"rich", "bestFor":["boda","quince"] },
    "fiesta": { "label":"Fiesta", "family":"Festivo", "template":"celebration", "palette":"fiesta", "typography":"bold", "decoration":"stars", "asset":"confetti", "density":"maximal", "bestFor":["cumple","quince"] },
    "sereno": { "label":"Sereno", "family":"Bautismo", "template":"soft", "palette":"botanica", "typography":"soft", "decoration":"botanical", "asset":"baptism", "density":"quiet", "bestFor":["bautismo","evento"] },
    "moderno": { "label":"Moderno", "family":"Moderno", "template":"modern", "palette":"azul", "typography":"modern", "decoration":"geometry", "asset":"geometry", "density":"balanced", "bestFor":["evento","cumple"] },
    "limpio": { "label":"Minimal", "family":"Minimal", "template":"minimal", "palette":"blanco", "typography":"modern", "decoration":"lines", "asset":"sparkle", "density":"quiet", "bestFor":["boda","evento","cumple"] },
    "cumple-pop": { "label":"Cumple Pop", "family":"Festivo", "template":"celebration", "palette":"fiesta", "typography":"bold", "decoration":"stars", "asset":"balloon", "density":"maximal", "bestFor":["cumple"] },
    "cumple-dulce": { "label":"Dulce", "family":"Infantil", "template":"soft", "palette":"lavanda", "typography":"soft", "decoration":"stars", "asset":"cake", "density":"rich", "bestFor":["cumple"] },
    "cumple-noche": { "label":"Noche de Fiesta", "family":"Festivo", "template":"editorial", "palette":"noche", "typography":"bold", "decoration":"stars", "asset":"fireworks", "density":"rich", "bestFor":["cumple"] },
    "quince-glam": { "label":"Quince Glam", "family":"Quince", "template":"editorial", "palette":"lavanda", "typography":"classic", "decoration":"ornaments", "asset":"crown", "density":"rich", "bestFor":["quince"] },
    "quince-estelar": { "label":"Quince Estelar", "family":"Quince", "template":"celebration", "palette":"noche", "typography":"bold", "decoration":"stars", "asset":"sparkle", "density":"maximal", "bestFor":["quince"] },
    "quince-floral": { "label":"Quince Floral", "family":"Quince", "template":"romance", "palette":"rosa", "typography":"classic", "decoration":"botanical", "asset":"flowers", "density":"rich", "bestFor":["quince"] },
    "boda-clasica": { "label":"Boda Clásica", "family":"Boda", "template":"romance", "palette":"blanco", "typography":"classic", "decoration":"ornaments", "asset":"rings", "density":"quiet", "bestFor":["boda"] },
    "boda-botanica": { "label":"Boda Botánica", "family":"Boda", "template":"soft", "palette":"botanica", "typography":"soft", "decoration":"botanical", "asset":"botanical", "density":"rich", "bestFor":["boda"] },
    "boda-editorial": { "label":"Boda Editorial", "family":"Boda", "template":"editorial", "palette":"tierra", "typography":"editorial", "decoration":"lines", "asset":"ribbon", "density":"quiet", "bestFor":["boda"] },
    "bautismo-luz": { "label":"Luz", "family":"Bautismo", "template":"soft", "palette":"blanco", "typography":"soft", "decoration":"botanical", "asset":"sun", "density":"quiet", "bestFor":["bautismo"] },
    "bautismo-botanico": { "label":"Botánico", "family":"Bautismo", "template":"romance", "palette":"botanica", "typography":"classic", "decoration":"botanical", "asset":"flowers", "density":"balanced", "bestFor":["bautismo"] },
    "bautismo-sereno": { "label":"Clásico", "family":"Bautismo", "template":"minimal", "palette":"azul", "typography":"classic", "decoration":"lines", "asset":"baptism", "density":"quiet", "bestFor":["bautismo"] },
    "evento-pro": { "label":"Profesional", "family":"Corporativo", "template":"modern", "palette":"azul", "typography":"modern", "decoration":"geometry", "asset":"geometry", "density":"balanced", "bestFor":["evento"] },
    "evento-noche": { "label":"Noche", "family":"Elegante", "template":"editorial", "palette":"noche", "typography":"editorial", "decoration":"ornaments", "asset":"moon", "density":"quiet", "bestFor":["evento"] },
    "evento-creativo": { "label":"Creativo", "family":"Moderno", "template":"celebration", "palette":"lavanda", "typography":"bold", "decoration":"geometry", "asset":"sparkle", "density":"rich", "bestFor":["evento"] }
  },
  "eventDefaults": {
    "cumple": "fiesta",
    "quince": "elegante",
    "boda": "romantico",
    "bautismo": "sereno",
    "evento": "moderno"
  },
  "eventRules": {
    "cumple": {
      "titleLabel": "Nombre del cumpleañero/a",
      "subtitleHint": "Una frase breve y alegre",
      "messagePlaceholder": "Una noche para celebrar juntos.",
      "showDress": true
    },
    "quince": {
      "titleLabel": "Nombre de la quinceañera",
      "subtitleHint": "Una frase elegante y personal",
      "messagePlaceholder": "Quiero compartir este momento tan especial con vos.",
      "showDress": true
    },
    "boda": {
      "titleLabel": "Nombres de la pareja",
      "subtitleHint": "Una frase breve sobre el gran día",
      "messagePlaceholder": "Nos hace mucha ilusión compartir este día con ustedes.",
      "showDress": true
    },
    "bautismo": {
      "titleLabel": "Nombre del protagonista",
      "subtitleHint": "Una frase breve y familiar",
      "messagePlaceholder": "Los esperamos para compartir este momento en familia.",
      "showDress": false
    },
    "evento": {
      "titleLabel": "Nombre del evento",
      "subtitleHint": "Una frase que explique la ocasión",
      "messagePlaceholder": "Te esperamos para compartir este encuentro.",
      "showDress": true
    }
  }
};
function resolveVenisDesign(style={},preset="cumple"){const fallback=VENIS_DESIGN.eventDefaults[preset]||"limpio";const recipe=VENIS_DESIGN.recipes[style.recipe]||VENIS_DESIGN.recipes[fallback];const id=(group,value,fallbackId)=>VENIS_DESIGN[group][value]?value:fallbackId;const templateId=id("templates",style.template,recipe.template),paletteId=id("palettes",style.palette,recipe.palette),typographyId=id("typography",style.typography,recipe.typography),decorationId=id("decorations",style.decoration,recipe.decoration);return{recipe:style.recipe||fallback,templateId,paletteId,typographyId,decorationId,template:VENIS_DESIGN.templates[templateId],palette:VENIS_DESIGN.palettes[paletteId],typography:VENIS_DESIGN.typography[typographyId],decoration:VENIS_DESIGN.decorations[decorationId]};}
function validateVenisDesign(data){const warnings=[],q=VENIS_DESIGN.quality;if((data.name||"").length>q.maxTitle)warnings.push("Acortá el nombre para conservar una portada limpia.");if((data.subtitle||"").length>q.maxSubtitle)warnings.push("La bajada es larga y puede perder jerarquía.");if((data.message||"").length>q.maxMessage)warnings.push("El mensaje puede resultar pesado en móvil.");if(!data.date||!data.time||!data.place)warnings.push("Faltan datos esenciales del evento.");return{ok:warnings.length===0,warnings};}

/* V1.5 VISUAL ART DIRECTION LAYER: metadata only, no functional flow changes. */
VENIS_DESIGN.artDirection={hierarchy:{primary:"name",secondary:"date",tertiary:"place",support:"message"},composition:{focalPoint:"one",maxVisualMotifs:1,displayTypefaces:1,bodyTypefaces:1},imageTreatments:{immersive:"full-bleed",portrait:"centered-frame",poster:"high-impact",airy:"soft-frame",split:"architectural",clean:"quiet"},spacing:{micro:8,component:16,section:32,hero:48},qualityGate:["mobile-legibility","date-time-scan","venue-scan","contrast","overflow","visual-coherence"]};
VENIS_DESIGN.assetLayer={stickerRoles:["cover","corner","mini-preview","event-marker"],photoModes:["full-bleed","portrait-frame","soft-frame","architectural","quiet"],fallbackRule:"vector-first",maxMotifsPerCover:2,externalDependencies:0,visualFamilies:12,productDesigns:24};VENIS_DESIGN.version="1.7";
