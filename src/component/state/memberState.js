import { atom } from 'recoil';
import { recoilPersist} from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const memberState = atom({
  key: 'memberState',
  // default: "날씨정보없음",
  default: {
    isAttendance: false,
    id: '',
    name: '',
    member_number: '',
    car_number: '',
    member_img: '',
    isParking: false,
    first_membership_period: '',
    second_membership_period: '',
    inProgress: true,
    client_date: '',
    in_time: ''

  },
  effects_UNSTABLE: [persistAtom]
});