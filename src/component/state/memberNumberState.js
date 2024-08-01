import { atom } from 'recoil';
import { recoilPersist} from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const memberNumberState = atom({
  key: 'memberNumberState',
  default: {},
  effects_UNSTABLE: [persistAtom]
});