import {useUserStore} from "~/store/useUserStore";
import {login, logout, me, register, update} from "~/api/UserApi";
import {UserInfo, UserInfoUpdate} from "~/definitions/interfaces/User";

export const useUser = () => {
    const {setUserDate, deleteUserDate} = useUserStore();

    const getUserData =  async (userToken: string | null | undefined) => {
        const res = await me(userToken);

        if(res) {
            setUserDate(res)
        }
    }
    const updateUserData =  async (userToken: string | null | undefined, updateDate: UserInfoUpdate) => {
        const res = await update(userToken, updateDate);

        if(res) {
            setUserDate(res)
        }
    }

    const userLogout =  async (userToken: string | null | undefined) => {
        if(userToken) {
            await logout(userToken);
            deleteUserDate();
            location.reload();
        }
    }

    const userRegistration =  async (email: string, password: string) => {
        const userToken =  await register(email, password);

        getUserData(userToken);
    }
    const userLogin =  async (email: string, password: string) => {
        const userToken =  await login(email, password);

        getUserData(userToken);
    }

    return {
        getUserData,
        userLogout,
        updateUserData,
        userRegistration,
        userLogin,
    }
}
