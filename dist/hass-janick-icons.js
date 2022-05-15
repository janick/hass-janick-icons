const JANICK_ICONS_MAP = {

  "rowing-machine":{
    path:"M229.241,170.738C229.241,110.78,278.021,62,337.98,62c5.247,0,9.5,4.253,9.5,9.5s-4.253,9.5-9.5,9.5 c-49.482,0-89.739,40.257-89.739,89.738c0,5.247-4.253,9.5-
    keywords: ["rower", "rowing", "exercise", "concept2"]
  }
};

async function getIcon(name) {
  let new_name;

  if (!(name in JANICK_ICONS_MAP)) {
    // try swapping the '_' for a '-'
    new_name = name.replace(/_/gm, `-`);
    if (!(new_name in JANICK_ICONS_MAP)) {
      console.log(`Icon "${name}" is not available`);
      return '';
    }else{
      console.log(`Aliased "${name}" with "${new_name}"`);
      return {path: JANICK_ICONS_MAP[new_name].path};
    }
  }
  return {path: JANICK_ICONS_MAP[name].path};
}
async function getIconList() {
  return Object.entries(JANICK_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords,
  }));
}
window.customIcons = window.customIcons || {};
window.customIcons["janick"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["janick"] = getIcon;


console.info(
    `%c HASS-JANICK-ICONS %c Version 1.0 `,
    "color: orange; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray"
);
