import { atom } from 'recoil';
import { recoilPersist} from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const inTimeState = atom({
  key: 'inTimeState',
  default: {
    in_time: '',
    isRegister: false,
  },
  effects_UNSTABLE: [persistAtom]
});