import {useUserStore} from "~/store/useUserStore";
import {logout, me} from "~/api/UserApi";

export const useUser = () => {
    const {setUserDate, deletUserDate} = useUserStore();

    const getUserData =  async (userToken: string | null | undefined) => {
        const res = await me(userToken);

        if(res) {
            setUserDate(res)
        }
    }

    const userLogout =  async (userToken: string | null | undefined) => {
        if(userToken) {
            await logout(userToken);
            deletUserDate();
            location.reload();
        }
    }

    return {
        getUserData,
        userLogout
    }
}
