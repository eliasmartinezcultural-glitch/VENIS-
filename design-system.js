/* VENIS DESIGN SYSTEM v2.2
 TYPE → TEMPLATE → PALETTE → TYPOGRAPHY → DECORATION → ASSETS → COMPONENTS → ENGINE
*/
const VENIS_DESIGN={
  "version": "2.2",
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
  "productDirections": {
    "elegante": { "hero":"luxury-night", "alignment":"left", "frame":"fine-border", "motif":"sparkle", "motifScale":"small", "motifOpacity":0.42, "surface":"velvet", "rhythm":"wide", "dateTreatment":"editorial-rail", "messageTreatment":"signature" },
    "romantico": { "hero":"ceremonial", "alignment":"center", "frame":"soft-oval", "motif":"hearts", "motifScale":"medium", "motifOpacity":0.48, "surface":"paper", "rhythm":"airy", "dateTreatment":"ornamental", "messageTreatment":"love-note" },
    "fiesta": { "hero":"poster-burst", "alignment":"left", "frame":"none", "motif":"confetti", "motifScale":"large", "motifOpacity":0.7, "surface":"paper", "rhythm":"tight", "dateTreatment":"tiles", "messageTreatment":"headline" },
    "sereno": { "hero":"botanical-light", "alignment":"center", "frame":"soft-oval", "motif":"baptism", "motifScale":"medium", "motifOpacity":0.38, "surface":"linen", "rhythm":"airy", "dateTreatment":"soft-panel", "messageTreatment":"family-note" },
    "moderno": { "hero":"architectural", "alignment":"left", "frame":"hard-edge", "motif":"geometry", "motifScale":"large", "motifOpacity":0.28, "surface":"paper", "rhythm":"compact", "dateTreatment":"rail", "messageTreatment":"plain" },
    "limpio": { "hero":"quiet-gallery", "alignment":"center", "frame":"hairline", "motif":"sparkle", "motifScale":"small", "motifOpacity":0.18, "surface":"paper", "rhythm":"wide", "dateTreatment":"line", "messageTreatment":"plain" },
    "cumple-pop": { "hero":"balloon-cascade", "alignment":"left", "frame":"soft-card", "motif":"balloon", "motifScale":"large", "motifOpacity":0.72, "surface":"paper", "rhythm":"tight", "dateTreatment":"tiles", "messageTreatment":"headline" },
    "cumple-dulce": { "hero":"cake-studio", "alignment":"center", "frame":"soft-oval", "motif":"cake", "motifScale":"medium", "motifOpacity":0.52, "surface":"pastel-paper", "rhythm":"airy", "dateTreatment":"soft-panel", "messageTreatment":"warm-note" },
    "cumple-noche": { "hero":"fireworks-night", "alignment":"left", "frame":"fine-border", "motif":"fireworks", "motifScale":"large", "motifOpacity":0.66, "surface":"velvet", "rhythm":"wide", "dateTreatment":"dark-tiles", "messageTreatment":"headline" },
    "quince-glam": { "hero":"crown-editorial", "alignment":"center", "frame":"ornamental", "motif":"crown", "motifScale":"medium", "motifOpacity":0.5, "surface":"silk", "rhythm":"airy", "dateTreatment":"ceremonial", "messageTreatment":"signature" },
    "quince-estelar": { "hero":"starburst", "alignment":"left", "frame":"none", "motif":"sparkle", "motifScale":"large", "motifOpacity":0.68, "surface":"velvet", "rhythm":"tight", "dateTreatment":"dark-tiles", "messageTreatment":"headline" },
    "quince-floral": { "hero":"floral-portrait", "alignment":"center", "frame":"soft-oval", "motif":"flowers", "motifScale":"large", "motifOpacity":0.48, "surface":"paper", "rhythm":"airy", "dateTreatment":"ornamental", "messageTreatment":"love-note" },
    "boda-clasica": { "hero":"rings-ceremony", "alignment":"center", "frame":"hairline", "motif":"rings", "motifScale":"medium", "motifOpacity":0.45, "surface":"paper", "rhythm":"wide", "dateTreatment":"ceremonial", "messageTreatment":"signature" },
    "boda-botanica": { "hero":"garden-paper", "alignment":"center", "frame":"botanical", "motif":"botanical", "motifScale":"large", "motifOpacity":0.4, "surface":"linen", "rhythm":"airy", "dateTreatment":"soft-panel", "messageTreatment":"love-note" },
    "boda-editorial": { "hero":"modern-vows", "alignment":"left", "frame":"fine-border", "motif":"ribbon", "motifScale":"medium", "motifOpacity":0.3, "surface":"paper", "rhythm":"wide", "dateTreatment":"editorial-rail", "messageTreatment":"signature" },
    "bautismo-luz": { "hero":"morning-light", "alignment":"center", "frame":"hairline", "motif":"sun", "motifScale":"medium", "motifOpacity":0.3, "surface":"paper", "rhythm":"airy", "dateTreatment":"soft-panel", "messageTreatment":"family-note" },
    "bautismo-botanico": { "hero":"garden-baptism", "alignment":"center", "frame":"botanical", "motif":"flowers", "motifScale":"medium", "motifOpacity":0.38, "surface":"linen", "rhythm":"airy", "dateTreatment":"ornamental", "messageTreatment":"family-note" },
    "bautismo-sereno": { "hero":"classic-light", "alignment":"center", "frame":"hairline", "motif":"baptism", "motifScale":"small", "motifOpacity":0.24, "surface":"paper", "rhythm":"wide", "dateTreatment":"line", "messageTreatment":"family-note" },
    "evento-pro": { "hero":"corporate-architecture", "alignment":"left", "frame":"hard-edge", "motif":"geometry", "motifScale":"large", "motifOpacity":0.24, "surface":"paper", "rhythm":"compact", "dateTreatment":"rail", "messageTreatment":"plain" },
    "evento-noche": { "hero":"midnight-editorial", "alignment":"left", "frame":"fine-border", "motif":"moon", "motifScale":"large", "motifOpacity":0.35, "surface":"velvet", "rhythm":"wide", "dateTreatment":"dark-tiles", "messageTreatment":"signature" },
    "evento-creativo": { "hero":"creative-poster", "alignment":"left", "frame":"hard-edge", "motif":"sparkle", "motifScale":"large", "motifOpacity":0.55, "surface":"paper", "rhythm":"tight", "dateTreatment":"tiles", "messageTreatment":"headline" }
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

/* V2.2 VISUAL ART DIRECTION LAYER: metadata only, no functional flow changes. */
VENIS_DESIGN.artDirection={hierarchy:{primary:"name",secondary:"date",tertiary:"place",support:"message"},composition:{focalPoint:"one",maxVisualMotifs:1,displayTypefaces:1,bodyTypefaces:1},imageTreatments:{immersive:"full-bleed",portrait:"centered-frame",poster:"high-impact",airy:"soft-frame",split:"architectural",clean:"quiet"},spacing:{micro:8,component:16,section:32,hero:48},qualityGate:["mobile-legibility","date-time-scan","venue-scan","contrast","overflow","visual-coherence"]};
VENIS_DESIGN.assetLayer={stickerRoles:["cover","corner","mini-preview","event-marker"],photoModes:["full-bleed","portrait-frame","soft-frame","architectural","quiet"],fallbackRule:"vector-first",maxMotifsPerCover:2,externalDependencies:0,visualFamilies:12,productDesigns:21};VENIS_DESIGN.version="2.2";

/* V2.2 · DEEP PRODUCT ART SYSTEM */
VENIS_DESIGN.familyDepth={
"Festivo":{variants:["burst","confetti","spotlight"],compositions:["poster","cascade","stage"],patterns:["confetti-field","rays","dots"],frames:["none","soft-card","ticket"],ornaments:["confetti","balloon","fireworks"],photos:["full-bleed","color-pop","stage"],dates:["tiles","ticket","spotlight"]},
"Romántico":{variants:["ceremony","garden","letter"],compositions:["centered","portrait","editorial-center"],patterns:["paper-grain","petal-field","fine-lines"],frames:["soft-oval","botanical","hairline"],ornaments:["hearts","flowers","ribbon"],photos:["portrait","soft-frame","paper-frame"],dates:["ornamental","soft-panel","ceremonial"]},
"Quince":{variants:["glam","stellar","floral"],compositions:["crown","starburst","portrait"],patterns:["silk-noise","constellation","petals"],frames:["ornamental","none","soft-oval"],ornaments:["crown","sparkle","flowers"],photos:["portrait","full-bleed","soft-frame"],dates:["ceremonial","dark-tiles","ornamental"]},
"Boda":{variants:["classic","garden","editorial"],compositions:["ceremony","garden","vows"],patterns:["paper-grain","botanical-field","fine-grid"],frames:["hairline","botanical","fine-border"],ornaments:["rings","botanical","ribbon"],photos:["portrait","soft-frame","architectural"],dates:["ceremonial","soft-panel","editorial-rail"]},
"Infantil":{variants:["sweet","playful","storybook"],compositions:["studio","cascade","storybook"],patterns:["confetti-dots","soft-cloud","paper-cut"],frames:["soft-card","round","cutout"],ornaments:["cake","balloon","stars"],photos:["soft-frame","color-pop","paper-frame"],dates:["soft-panel","tiles","story"]},
"Bautismo":{variants:["light","botanical","classic"],compositions:["morning","garden","classic"],patterns:["sunwash","botanical-field","linen"],frames:["hairline","botanical","soft-oval"],ornaments:["sun","flowers","baptism"],photos:["soft-frame","portrait","paper-frame"],dates:["soft-panel","ornamental","line"]},
"Elegante":{variants:["luxury","midnight","gallery"],compositions:["velvet","midnight","gallery"],patterns:["velvet-noise","fine-stars","gallery-grid"],frames:["fine-border","fine-border","hairline"],ornaments:["sparkle","moon","ribbon"],photos:["full-bleed","full-bleed","portrait"],dates:["editorial-rail","dark-tiles","line"]},
"Musical":{variants:["stage","disco","acoustic"],compositions:["stage","disco","poster"],patterns:["soundwave","disco-grid","staff-lines"],frames:["none","soft-card","fine-border"],ornaments:["music","disco","stars"],photos:["full-bleed","color-pop","poster"],dates:["tiles","spotlight","rail"]},
"Graduación":{variants:["academic","spotlight","ceremony"],compositions:["certificate","spotlight","ceremony"],patterns:["paper-grid","rays","fine-lines"],frames:["fine-border","none","hairline"],ornaments:["graduate","stars","ribbon"],photos:["portrait","full-bleed","soft-frame"],dates:["tiles","spotlight","ceremonial"]},
"Aniversario":{variants:["classic","sparkle","letter"],compositions:["ceremony","gallery","letter"],patterns:["fine-lines","stars-field","paper-grain"],frames:["hairline","fine-border","soft-oval"],ornaments:["rings","sparkle","hearts"],photos:["portrait","full-bleed","paper-frame"],dates:["ceremonial","dark-tiles","ornamental"]},
"Moderno":{variants:["architecture","studio","poster"],compositions:["architecture","studio","poster"],patterns:["grid","blocks","diagonal"],frames:["hard-edge","none","ticket"],ornaments:["geometry","sparkle","sun"],photos:["architectural","full-bleed","poster"],dates:["rail","tiles","spotlight"]},
"Corporativo":{variants:["architecture","conference","executive"],compositions:["architecture","grid","editorial"],patterns:["grid","blocks","fine-grid"],frames:["hard-edge","fine-border","hairline"],ornaments:["geometry","ribbon","sparkle"],photos:["architectural","full-bleed","portrait"],dates:["rail","tiles","editorial-rail"]}
};
VENIS_DESIGN.depthFor=function(productKey){const r=VENIS_DESIGN.recipes[productKey]||{},family=r.family||"Moderno",d=VENIS_DESIGN.familyDepth[family]||VENIS_DESIGN.familyDepth.Moderno,index=Math.max(0,Object.keys(VENIS_DESIGN.recipes).indexOf(productKey))%3;return{family,variant:d.variants[index],composition:d.compositions[index],pattern:d.patterns[index],frame:d.frames[index],ornament:d.ornaments[index],photo:d.photos[index],date:d.dates[index]};};
VENIS_DESIGN.version="2.2";

VENIS_DESIGN.whatsappPresentation={priority:"link-first",actions:["whatsapp","native-share","copy-link"],recipientView:"clean"};
