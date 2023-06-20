export interface TokenPair {
  access_token: string,
  refresh_token: string,
}

export interface UserDetails {
  id: number,
  name: string,
  username: string,
  email: string
}

export enum AuthenticationStatus {
  AUTHORIZED = 'authorized',
  UNAUTHORIZED = 'unauthorized',
}

export interface AuthenticatedUser {
  user: UserDetails | null | undefined,
  tokens: TokenPair | null | undefined,
  status: AuthenticationStatus
}

export interface Credentials {
  username: string,
  password: string,
}
