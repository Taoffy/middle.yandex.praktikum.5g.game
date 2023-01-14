import { actionsType } from './types';

export function setAuth(payload: boolean) {
  return { type: actionsType.setAUTH, payload };
}
