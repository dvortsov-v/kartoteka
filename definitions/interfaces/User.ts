import {Social} from "~/constants/socials";
import {Product} from "~/definitions/interfaces/Products";

export interface UserLogin {
    access_token: string,
    token_type: string,
    expires_in: number,
}
export interface UserInfo {
    company: string,
    surname: string,
    created_at: string,
    email: string,
    email_verified_at: null,
    id: number
    name: string
    phone: string | null
    socials: Social[] | null
    updated_at: string | null,
    favorites: Product[],
    orders: Product[],
}
export interface UserInfoUpdate {
    company?: string,
    surname?: string,
    name?: string,
    phone?: string,
    socials?: Social[],
}
