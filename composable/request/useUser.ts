import {useUserStore} from "~/store/useUserStore";
import {login, logout, me, register, update} from "~/api/UserApi";
import {UserInfoUpdate} from "~/definitions/interfaces/User";

export const useUser = () => {
    const {setUserName, setCountOrders} = useUserStore();

    const getUserData =  async (userToken: string | null | undefined) => {
        const res = await me(userToken);

        if(res) {
            setUserName(res.name);
            setCountOrders(res.orders.length || 0);
        }
    }
    const getProfile =  async (userToken: string | null | undefined) => {
        const res = await me(userToken);
    }
    const updateUserData =  async (userToken: string | null | undefined, updateDate: UserInfoUpdate) => {
        const res = await update(userToken, updateDate);

        if(res) {
            setUserName(res.name);
        }
    }

    const userLogout =  async (userToken: string | null | undefined) => {
        if(userToken) {
            await logout(userToken);
            setUserName('');
            setCountOrders(0);
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
