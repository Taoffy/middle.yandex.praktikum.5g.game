export interface UserData {
  first_name: FormDataEntryValue | null,
  second_name: FormDataEntryValue | null,
  display_name: string,
  login: FormDataEntryValue | null,
  email: FormDataEntryValue | null,
  phone: FormDataEntryValue | null,
}

export enum actionsType {
  changeData = 'CHANGE_DATA',
}

type changeDataAction = {
  type: actionsType.changeData,
  payload: UserData,
}

export type actions = changeDataAction;
