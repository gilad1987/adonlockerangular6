import {User} from '../../auth/user.interface';
import {Student} from '../../dashboard/models/student.interface';

export interface State {
    user: User;
    users: [User];
    schools: [any];
    school: any;
    students: [Student];
    studentsSearchResults: [Student];
    transactions: [any];
    notifications: [any];
}
