declare global {
  type User = {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string | null;
  };
  type InputInfo = {
    value: string;
    type: string;
    placeholder: string;
  };
  type Form = Record<string, InputInfo>;
}
export {};
