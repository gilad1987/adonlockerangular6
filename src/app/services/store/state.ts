import {User} from '../../auth/user.interface';

export interface State {
    user: User;
    schools: [any];
    students: [any];
}
