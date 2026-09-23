/* VENIS VISUAL ASSET ENGINE v1.7
   STATIC, LIGHTWEIGHT, GITHUB-PAGES SAFE
   ASSETS = STICKERS + ILLUSTRATIONS + PATTERNS + PHOTO TREATMENTS
*/
const VENIS_ASSETS={
  version:"1.7",
  catalog:{families:["Festivo","Romántico","Quince","Boda","Infantil","Bautismo","Elegante","Musical","Graduación","Aniversario","Moderno","Corporativo"],illustrationStyles:["line-art","hand-drawn","watercolor","flat","ornamental","poster","botanical","geometric","premium"],density:["quiet","balanced","rich","maximal"]},
  stickers:{
    cake:{label:"Torta",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M45 62h90v35H45z" fill="currentColor" opacity=".16" stroke="currentColor" stroke-width="3"/><path d="M38 62h104l-12-18H50z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M60 40V22m30 18V17m30 23V22" stroke="currentColor" stroke-width="3"/></svg>'},
    crown:{label:"Corona",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M28 32l27 27 35-45 35 45 27-27-9 64H37z" fill="currentColor" opacity=".16" stroke="currentColor" stroke-width="4"/><path d="M39 80h102" stroke="currentColor" stroke-width="5"/></svg>'},
    disco:{label:"Disco",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><circle cx="90" cy="60" r="35" fill="currentColor" opacity=".16" stroke="currentColor" stroke-width="3"/><path d="M63 36l54 48M117 36L63 84M90 25v70M55 60h70" stroke="currentColor" stroke-width="2"/></svg>'},
    fireworks:{label:"Fuegos artificiales",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><g fill="none" stroke="currentColor" stroke-width="3"><circle cx="60" cy="48" r="5"/><path d="M60 10v25M60 61v25M22 48h25M73 48h25M33 21l17 17M70 59l17 17M33 75l17-17M70 37l17-17"/></g></svg>'},
    ribbon:{label:"Cinta",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M22 58c35-31 76-31 136 0-60 31-101 31-136 0z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M57 57c15 16 25 31 24 50M123 57c-15 16-25 31-24 50" fill="none" stroke="currentColor" stroke-width="4"/></svg>'},
    flowers:{label:"Flores",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><g fill="none" stroke="currentColor" stroke-width="3"><path d="M35 110C44 75 54 54 72 30M145 110C136 75 126 54 108 30"/><circle cx="72" cy="30" r="13"/><circle cx="108" cy="30" r="13"/></g></svg>'},
    music:{label:"Música",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M75 26v55M75 26l55-12v55" fill="none" stroke="currentColor" stroke-width="5"/><ellipse cx="61" cy="87" rx="17" ry="11" fill="currentColor" opacity=".22"/><ellipse cx="116" cy="75" rx="17" ry="11" fill="currentColor" opacity=".22"/></svg>'},
    baby:{label:"Infantil",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><circle cx="90" cy="62" r="37" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="3"/><circle cx="77" cy="58" r="3" fill="currentColor"/><circle cx="103" cy="58" r="3" fill="currentColor"/><path d="M78 73c8 7 16 7 24 0" fill="none" stroke="currentColor" stroke-width="3"/></svg>'},
    graduate:{label:"Graduación",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M35 43l55-24 55 24-55 24z" fill="currentColor" opacity=".18" stroke="currentColor" stroke-width="3"/><path d="M57 54v26c19 14 47 14 66 0V54M145 43v38" fill="none" stroke="currentColor" stroke-width="3"/></svg>'},
    camera:{label:"Cámara",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><rect x="35" y="39" width="110" height="61" rx="10" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="4"/><circle cx="90" cy="69" r="22" fill="none" stroke="currentColor" stroke-width="4"/></svg>'},
    moon:{label:"Luna",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M112 19c-28 9-42 42-26 68 12 19 35 27 57 19-13 13-35 17-53 8-31-14-44-50-30-79 10-21 31-32 52-28z" fill="currentColor" opacity=".22"/></svg>'},
    sun:{label:"Sol",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><circle cx="90" cy="60" r="24" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="4"><path d="M90 15v20M90 85v20M45 60H25M155 60h-20M58 28L44 14M122 92l14 14M122 28l14-14M58 92l-14 14"/></g></svg>'},
    stars:{label:"Estrellas",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><g fill="none" stroke="currentColor" stroke-width="3"><path d="M35 17l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/><path d="M128 23l5 15 15 5-15 5-5 15-5-15-15-5 15-5z"/><path d="M88 69l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></g><circle cx="151" cy="87" r="4" fill="currentColor"/><circle cx="48" cy="91" r="3" fill="currentColor"/></svg>'},
    hearts:{label:"Corazones",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M90 92C72 78 35 56 35 31c0-12 9-20 21-20 15 0 25 12 34 24 9-12 19-24 34-24 12 0 21 8 21 20 0 25-37 47-55 61z" fill="currentColor" opacity=".16"/><path d="M90 91C74 78 43 58 43 37c0-9 7-16 16-16 13 0 21 11 31 25 10-14 18-25 31-25 9 0 16 7 16 16 0 21-31 41-47 54z" fill="none" stroke="currentColor" stroke-width="3"/></svg>'},
    botanical:{label:"Ramas botánicas",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M20 100C54 82 62 48 75 18M47 83C39 68 31 59 18 55M59 59C49 45 45 34 48 21M68 43C83 36 93 27 98 14M78 28c13 0 24-5 33-14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><g fill="currentColor"><ellipse cx="25" cy="54" rx="8" ry="4" transform="rotate(25 25 54)"/><ellipse cx="50" cy="44" rx="8" ry="4" transform="rotate(48 50 44)"/><ellipse cx="49" cy="24" rx="8" ry="4" transform="rotate(80 49 24)"/><ellipse cx="91" cy="28" rx="8" ry="4" transform="rotate(-20 91 28)"/><ellipse cx="106" cy="17" rx="8" ry="4" transform="rotate(-20 106 17)"/></g></svg>'},
    confetti:{label:"Confeti",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><g fill="currentColor"><circle cx="24" cy="25" r="5"/><circle cx="151" cy="30" r="4"/><circle cx="126" cy="92" r="5"/><circle cx="52" cy="93" r="4"/></g><g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"><path d="M52 23l10 13M95 14l-3 16M139 67l12-8M26 68l12 8M83 88l-10 12"/></g></svg>'},
    rings:{label:"Anillos",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><circle cx="75" cy="58" r="27" fill="none" stroke="currentColor" stroke-width="7"/><circle cx="106" cy="58" r="27" fill="none" stroke="currentColor" stroke-width="7" opacity=".62"/><path d="M50 91c19 9 55 11 82-2" fill="none" stroke="currentColor" stroke-width="2" opacity=".4"/></svg>'},
    balloon:{label:"Globos",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M46 67c0 18 3 30 0 39M90 61c0 20 5 29 1 45M133 70c0 14-4 25-2 37"/></g><ellipse cx="46" cy="42" rx="18" ry="25" fill="currentColor" opacity=".16" stroke="currentColor" stroke-width="3"/><ellipse cx="90" cy="34" rx="20" ry="28" fill="currentColor" opacity=".13" stroke="currentColor" stroke-width="3"/><ellipse cx="133" cy="46" rx="17" ry="24" fill="currentColor" opacity=".18" stroke="currentColor" stroke-width="3"/></svg>'},
    baptism:{label:"Luz",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M90 12c-7 18-18 25-18 43a18 18 0 0036 0c0-18-11-25-18-43z" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="3"/><path d="M90 27c-3 9-9 13-9 25a9 9 0 0018 0c0-12-6-16-9-25z" fill="currentColor" opacity=".65"/><circle cx="90" cy="90" r="18" fill="none" stroke="currentColor" stroke-width="2" opacity=".35"/></svg>'},
    geometry:{label:"Geometría",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M20 90L60 20l45 65 28-50 27 55H20z" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="3"/></svg>'},
    sparkle:{label:"Destello",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M90 8l8 31 31 8-31 8-8 31-8-31-31-8 31-8z" fill="currentColor" opacity=".18"/><path d="M90 24l4 15 15 4-15 4-4 15-4-15-15-4 15-4z" fill="currentColor"/></svg>'}
  },
  patterns:{
    paper:'radial-gradient(circle at 15% 20%,currentColor 0 1px,transparent 1.5px),radial-gradient(circle at 80% 70%,currentColor 0 1px,transparent 1.5px)',
    dots:'radial-gradient(circle,currentColor 0 1px,transparent 1.5px)',
    grid:'linear-gradient(currentColor 1px,transparent 1px),linear-gradient(90deg,currentColor 1px,transparent 1px)'
  },
  treatmentByTemplate:{
    editorial:{asset:"sparkle",position:"right top",mode:"editorial"},
    romance:{asset:"hearts",position:"center top",mode:"portrait"},
    celebration:{asset:"confetti",position:"right top",mode:"poster"},
    soft:{asset:"botanical",position:"left bottom",mode:"airy"},
    modern:{asset:"geometry",position:"right top",mode:"architectural"},
    minimal:{asset:"sparkle",position:"center top",mode:"quiet"}
  },
  styleFamilies:{
    festivo:["confetti","balloon","cake","fireworks","stars","sparkle"],
    romantico:["hearts","flowers","rings","ribbon","sparkle","botanical"],
    quince:["crown","sparkle","stars","ribbon","flowers","geometry"],
    boda:["rings","flowers","hearts","botanical","ribbon","sparkle"],
    bautismo:["baptism","botanical","sun","flowers","sparkle"],
    infantil:["baby","balloon","stars","cake","confetti","sun"],
    musical:["music","disco","stars","sparkle","geometry"],
    graduacion:["graduate","stars","ribbon","sparkle","geometry"],
    elegante:["sparkle","ribbon","botanical","geometry","moon","stars"],
    aniversario:["rings","flowers","hearts","ribbon","sparkle","stars"],
    moderno:["geometry","sparkle","moon","sun"],
    corporativo:["geometry","sparkle","ribbon"]
  },
  eventAssets:{
    cumple:"balloon",
    quince:"sparkle",
    boda:"rings",
    bautismo:"baptism",
    evento:"geometry"
  },
  dataUri(id,color="currentColor"){
    const item=this.stickers[id]||this.stickers.sparkle;
    return "data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(item.svg.replaceAll("currentColor",color));
  },
  sticker(id,color="currentColor"){
    return this.dataUri(id,color);
  },
  resolve(template,preset,assetOverride,density="balanced"){
    const base=this.treatmentByTemplate[template]||this.treatmentByTemplate.minimal;
    const event=this.eventAssets[preset];
    const chosen=assetOverride&&this.stickers[assetOverride]?assetOverride:(event||base.asset);
    return {...base,eventAsset:chosen,density};
  },
  family(preset){
    const map={cumple:"festivo",quince:"quince",boda:"boda",bautismo:"bautismo",evento:"moderno"};
    return this.styleFamilies[map[preset]]||this.styleFamilies.moderno;
  }
};
