export type { default as SemanticTheme } from './semantic';
export { default as light } from './light';
export { default as dark } from './dark';

export type ThemeName = 'light' | 'dark';

export function getTheme(name: ThemeName) {
	if (name === 'dark') return require('./dark').default;
	return require('./light').default;
}
