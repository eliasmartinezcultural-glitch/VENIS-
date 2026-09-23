/* VENIS VISUAL ASSET ENGINE v1.6
   STATIC, LIGHTWEIGHT, GITHUB-PAGES SAFE
   ASSETS = STICKERS + ILLUSTRATIONS + PATTERNS + PHOTO TREATMENTS
*/
const VENIS_ASSETS={
  version:"1.6",
  stickers:{
    stars:{label:"Estrellas",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><g fill="none" stroke="currentColor" stroke-width="3"><path d="M35 17l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/><path d="M128 23l5 15 15 5-15 5-5 15-5-15-15-5 15-5z"/><path d="M88 69l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></g><circle cx="151" cy="87" r="4" fill="currentColor"/><circle cx="48" cy="91" r="3" fill="currentColor"/></svg>'},
    hearts:{label:"Corazones",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M90 92C72 78 35 56 35 31c0-12 9-20 21-20 15 0 25 12 34 24 9-12 19-24 34-24 12 0 21 8 21 20 0 25-37 47-55 61z" fill="currentColor" opacity=".16"/><path d="M90 91C74 78 43 58 43 37c0-9 7-16 16-16 13 0 21 11 31 25 10-14 18-25 31-25 9 0 16 7 16 16 0 21-31 41-47 54z" fill="none" stroke="currentColor" stroke-width="3"/></svg>'},
    botanical:{label:"Ramas botánicas",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M20 100C54 82 62 48 75 18M47 83C39 68 31 59 18 55M59 59C49 45 45 34 48 21M68 43C83 36 93 27 98 14M78 28c13 0 24-5 33-14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><g fill="currentColor"><ellipse cx="25" cy="54" rx="8" ry="4" transform="rotate(25 25 54)"/><ellipse cx="50" cy="44" rx="8" ry="4" transform="rotate(48 50 44)"/><ellipse cx="49" cy="24" rx="8" ry="4" transform="rotate(80 49 24)"/><ellipse cx="91" cy="28" rx="8" ry="4" transform="rotate(-20 91 28)"/><ellipse cx="106" cy="17" rx="8" ry="4" transform="rotate(-20 106 17)"/></g></svg>'},
    confetti:{label:"Confeti",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><g fill="currentColor"><circle cx="24" cy="25" r="5"/><circle cx="151" cy="30" r="4"/><circle cx="126" cy="92" r="5"/><circle cx="52" cy="93" r="4"/></g><g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"><path d="M52 23l10 13M95 14l-3 16M139 67l12-8M26 68l12 8M83 88l-10 12"/></g></svg>'},
    rings:{label:"Anillos",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><circle cx="75" cy="58" r="27" fill="none" stroke="currentColor" stroke-width="7"/><circle cx="106" cy="58" r="27" fill="none" stroke="currentColor" stroke-width="7" opacity=".62"/><path d="M50 91c19 9 55 11 82-2" fill="none" stroke="currentColor" stroke-width="2" opacity=".4"/></svg>'},
    balloon:{label:"Globos",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M46 67c0 18 3 30 0 39M90 61c0 20 5 29 1 45M133 70c0 14-4 25-2 37"/></g><ellipse cx="46" cy="42" rx="18" ry="25" fill="currentColor" opacity=".16" stroke="currentColor" stroke-width="3"/><ellipse cx="90" cy="34" rx="20" ry="28" fill="currentColor" opacity=".13" stroke="currentColor" stroke-width="3"/><ellipse cx="133" cy="46" rx="17" ry="24" fill="currentColor" opacity=".18" stroke="currentColor" stroke-width="3"/></svg>'},
    baptism:{label:"Luz",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120"><path d="M90 12c-7 18-18 25-18 43a18 18 0 0036 0c0-18-11-25-18-43z" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="3"/><path d="M90 27c-3 9-9 13-9 25a9 9 0 0018 0c0-12-6-16-9-25z" fill="currentColor" opacity=".65"/><circle cx="90" cy="90" r="18" fill="none" stroke="currentColor" stroke-width="2" opacity=".35"/></svg>'},
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
  resolve(template,preset){
    const base=this.treatmentByTemplate[template]||this.treatmentByTemplate.minimal;
    const event=this.eventAssets[preset];
    return {...base,eventAsset:event||base.asset};
  }
};
