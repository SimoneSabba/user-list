import { Company } from './company.interface';

export interface UserApi {
  entry: User
}

export interface User {
    firstName: string,
    id: string,
    enabled: boolean,
    emailNotificationsEnabled?: boolean,
    company?: Company,
    lastName?: string,
    userStatus?: string,
    jobTitle?: string,
    statusUpdatedAt?: Date,
    mobile?: string,
    description?: string,
    telephone?: string,
    skypeId?: string,
    avatarId?: string,
    location?: string,
    email?: string
  }