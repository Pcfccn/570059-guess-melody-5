const Path = {
  WELCOME_SCREEN: `/`,
  DEV_ARTIST: `/dev-artist`,
  DEV_GENRE: `/dev-genre`,
  LOGIN: `/login`,
  RESULT: `/result`,
  LOSE: `/lose`,
};

const GameType = {
  ARTIST: `artist`,
  GENRE: `genre`,
};

const MAX_MISTAKE_COUNT = 3;

const AuthorizationStatus = {
  AUTHORIZED: `AUTORIZED`,
  NOT_AUTHORIZED: `NOT_AUTHORIZED`,
};

export {Path, GameType, MAX_MISTAKE_COUNT, AuthorizationStatus};
