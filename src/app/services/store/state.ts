import {User} from '../../auth/user.interface';
import {Student} from '../../dashboard/models/student.interface';

export interface State {
    user: User;
    schools: [any];
    students: [Student];
}
