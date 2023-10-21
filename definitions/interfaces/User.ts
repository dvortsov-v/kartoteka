import {Social} from "~/constants/socials";

export interface UserLogin {
    access_token: string,
    token_type: string,
    expires_in: number,
}
export interface UserInfo {
    created_at: string,

    email: string,
    email_verified_at: null,
    id: number
    name: string

    phone: string | null
    socials: Social[] | null
    updated_at: string,
}
