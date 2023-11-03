import { axiosInstance } from "@/backend";
import type { TUser } from "@/types";
import { emptyUser } from "@/utilities/emptyObjects";

const getUserById = async (
    id: string
) => {
    let user: TUser = emptyUser
    try {
        const request = await axiosInstance.get(`/users/find?id=${id}`);

        if (request.status === 200) {
            user = request.data
            return user
        }
    } catch (e) {
        console.log(e);
        return user
    }

    return user
};

export { getUserById };
