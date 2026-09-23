/*
 VENIS DESIGN SYSTEM v1.1
 TYPE -> TEMPLATE -> PALETTE -> TYPOGRAPHY -> DECORATION -> COMPONENTS -> ENGINE
*/
const VENIS_DESIGN={
  version:"1.2",
  quality:{maxTitle:34,maxSubtitle:72,maxMessage:220,minContrast:4.5,rule:"mobile-first, readable, intentional"},
  templates:{
    editorial:{label:"Editorial",family:"editorial",layout:"hero",desc:"Tipográfico y sofisticado"},
    romance:{label:"Romance",family:"romance",layout:"centered",desc:"Clásico y emocional"},
    celebration:{label:"Celebración",family:"celebration",layout:"bold",desc:"Grande, alegre y expresivo"},
    soft:{label:"Suave",family:"soft",layout:"airy",desc:"Luminoso y delicado"},
    modern:{label:"Moderno",family:"modern",layout:"split",desc:"Geométrico y actual"},
    minimal:{label:"Minimal",family:"minimal",layout:"clean",desc:"Puro y con mucho aire"}
  },
  palettes:{
    tierra:{label:"Tierra",bg:"#f3eee7",surface:"#fffaf5",ink:"#241c17",accent:"#a86f46",accent2:"#70482f",soft:"#ead9c8"},
    noche:{label:"Noche",bg:"#111217",surface:"#1a1c23",ink:"#f7f2eb",accent:"#c7a46a",accent2:"#e8d5ad",soft:"#34343d"},
    rosa:{label:"Rosa polvo",bg:"#f5eded",surface:"#fff9fa",ink:"#302327",accent:"#b77f8e",accent2:"#825662",soft:"#ead1d7"},
    botanica:{label:"Botánica",bg:"#edf0e9",surface:"#fbfcf8",ink:"#20271f",accent:"#70856c",accent2:"#4d624b",soft:"#d6dfd1"},
    azul:{label:"Azul",bg:"#edf2f7",surface:"#fbfdff",ink:"#1c2733",accent:"#587b9d",accent2:"#3d5b76",soft:"#d3e0eb"},
    lavanda:{label:"Lavanda",bg:"#f0edf5",surface:"#fcfaff",ink:"#292430",accent:"#8170a4",accent2:"#5f527d",soft:"#ddd5eb"},
    fiesta:{label:"Fiesta",bg:"#fff1dc",surface:"#fffaf3",ink:"#271c15",accent:"#d17b37",accent2:"#8d4c1d",soft:"#f4d3a8"},
    blanco:{label:"Blanco",bg:"#f7f7f5",surface:"#ffffff",ink:"#171717",accent:"#77746d",accent2:"#4d4b47",soft:"#e7e5df"}
  },
  typography:{
    editorial:{label:"Serif elegante",display:"Georgia, 'Times New Roman', serif",text:"Inter, ui-sans-serif, system-ui, sans-serif",accent:"Georgia, serif"},
    classic:{label:"Clásica",display:"'Palatino Linotype', Palatino, Georgia, serif",text:"Georgia, serif",accent:"Georgia, serif"},
    modern:{label:"Sans moderna",display:"Inter, ui-sans-serif, system-ui, sans-serif",text:"Inter, ui-sans-serif, system-ui, sans-serif",accent:"Inter, sans-serif"},
    soft:{label:"Suave",display:"Georgia, serif",text:"'Trebuchet MS', ui-sans-serif, sans-serif",accent:"Georgia, serif"},
    bold:{label:"Editorial fuerte",display:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",text:"Inter, ui-sans-serif, system-ui, sans-serif",accent:"Inter, sans-serif"}
  },
  decorations:{
    none:{label:"Limpio",className:"deco-none"},
    ornaments:{label:"Ornamentos",className:"deco-ornaments"},
    botanical:{label:"Botánica",className:"deco-botanical"},
    stars:{label:"Estrellas",className:"deco-stars"},
    geometry:{label:"Geometría",className:"deco-geometry"},
    lines:{label:"Líneas",className:"deco-lines"}
  },
  componentRules:{
    cover:"hero",
    dateBox:"event-meta",
    details:"optional-detail",
    message:"editorial-message",
    actions:"conversion-actions",
    footer:"brand-signature"
  },
  recipes:{
    elegante:{label:"Elegante",template:"editorial",palette:"noche",typography:"editorial",decoration:"ornaments"},
    romantico:{label:"Romántico",template:"romance",palette:"rosa",typography:"classic",decoration:"botanical"},
    fiesta:{label:"Fiesta",template:"celebration",palette:"fiesta",typography:"bold",decoration:"stars"},
    sereno:{label:"Sereno",template:"soft",palette:"botanica",typography:"soft",decoration:"botanical"},
    moderno:{label:"Moderno",template:"modern",palette:"azul",typography:"modern",decoration:"geometry"},
    limpio:{label:"Minimal",template:"minimal",palette:"blanco",typography:"modern",decoration:"lines"}
  },
  eventDefaults:{
    cumple:"fiesta",
    quince:"elegante",
    boda:"romantico",
    bautismo:"sereno",
    evento:"moderno"
  }
};

function resolveVenisDesign(style={},preset="cumple"){
  const recipe=VENIS_DESIGN.recipes[style.recipe||VENIS_DESIGN.eventDefaults[preset]||"limpio"];
  const template=VENIS_DESIGN.templates[style.template||recipe.template]||VENIS_DESIGN.templates[recipe.template];
  const palette=VENIS_DESIGN.palettes[style.palette||recipe.palette]||VENIS_DESIGN.palettes[recipe.palette];
  const typography=VENIS_DESIGN.typography[style.typography||recipe.typography]||VENIS_DESIGN.typography[recipe.typography];
  const decoration=VENIS_DESIGN.decorations[style.decoration||recipe.decoration]||VENIS_DESIGN.decorations[recipe.decoration];
  return {
    recipe:style.recipe||VENIS_DESIGN.eventDefaults[preset]||"limpio",
    templateId:Object.keys(VENIS_DESIGN.templates).find(k=>VENIS_DESIGN.templates[k]===template)||recipe.template,
    paletteId:Object.keys(VENIS_DESIGN.palettes).find(k=>VENIS_DESIGN.palettes[k]===palette)||recipe.palette,
    typographyId:Object.keys(VENIS_DESIGN.typography).find(k=>VENIS_DESIGN.typography[k]===typography)||recipe.typography,
    decorationId:Object.keys(VENIS_DESIGN.decorations).find(k=>VENIS_DESIGN.decorations[k]===decoration)||recipe.decoration,
    template,palette,typography,decoration
  };
}


function validateVenisDesign(data){
  const warnings=[];
  const q=VENIS_DESIGN.quality;
  if((data.name||"").length>q.maxTitle) warnings.push("El nombre es demasiado largo para una portada limpia.");
  if((data.subtitle||"").length>q.maxSubtitle) warnings.push("La bajada puede perder jerarquía visual.");
  if((data.message||"").length>q.maxMessage) warnings.push("El mensaje puede resultar pesado en móvil.");
  return {ok:warnings.length===0,warnings};
}
