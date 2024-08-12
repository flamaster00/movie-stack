import { Country } from 'shared/const/countries';

export interface Profile {
    firstname: string,
    lastname: string,
    age: number,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

export interface ProfileSchema {
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
}
