/* @flow */
import type { ThemeName } from 'types'

export type Theme = {
  name: ThemeName,
  background: string,
  backgroundSecondary: string,
  color: string,
  colorSecondary: string,
  colorMedium: string,
  map: string,
  borderColor: string
}

export const light: Theme = {
  name: 'light',
  background: '#f7f7f7',
  backgroundSecondary: '#ebe3d6',
  color: 'black',
  colorSecondary: '#3c3c3c',
  colorMedium: '#999',
  map: '#bfbca5',
  borderColor: '#cdc5ba'
}

export const dark: Theme = {
  name: 'dark',
  background: '#3c3c3c',
  backgroundSecondary: '#2b2b2b',
  color: '#eee',
  colorSecondary: '#cdc5ba',
  colorMedium: '#999',
  map: '#1a1a1a',
  borderColor: '#1a1a1a'
}
