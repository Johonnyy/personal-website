

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6414d949.js","_app/immutable/chunks/scheduler.e5e7cd90.js","_app/immutable/chunks/index.f079ccf5.js"];
export const stylesheets = [];
export const fonts = [];
