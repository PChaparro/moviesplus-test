import { SessionUser } from './definitions';

export type PersistedSessionUser = SessionUser & {
  exp: number; // Timestamp to simulate the expiration of the session
};
