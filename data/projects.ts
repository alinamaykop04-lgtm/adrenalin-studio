export type Category = 'space' | 'digital' | 'art';
export type Project = {slug:string; title:string; year:string; categories:Category[]; intro:string};
export const projects: Project[] = [
  {slug:'mariupol',title:'Mariupol Youth Center',year:'2026',categories:['space','art'],intro:'Large-scale spatial art and mural project for a youth center.'},
  {slug:'frame-one',title:'FRAME ONE',year:'2026',categories:['digital'],intro:'Art direction, web design, visual direction and development.'},
  {slug:'chemists',title:'Химики',year:'2026',categories:['space','art'],intro:'Industrial mural concept built around iconic figures of science.'},
  {slug:'graffiti-research',title:'Graffiti Research',year:'—',categories:['art'],intro:'Visual research and authored study of graffiti language and urban marks.'},
  {slug:'havana-club',title:'Havana Club',year:'—',categories:['art','space'],intro:'Independent brand-related art project and visual execution.'},
  {slug:'alupka',title:'Алупка',year:'—',categories:['space','art'],intro:'Site-specific visual project shaped by place, architecture and atmosphere.'},
  {slug:'tavrida-art',title:'Таврида.Арт',year:'—',categories:['space','art'],intro:'Art project developed for the Tavrida.Art environment.'},
  {slug:'valhalla',title:'Valhalla',year:'—',categories:['art','space'],intro:'Visual and spatial art project.'}
];
