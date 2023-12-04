import { axiosInstance } from "@/backend";
import type { TSong, TUser } from "@/types";
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

const addFavoriteSong = async (id: string, song: TSong) => {
    try{
        axiosInstance.post(`/songs/user/${id}/liked`, {
            song
        })
        .catch(e => {
            throw new Error(e)
        })
    }
    catch(e){
        console.log(e)
    }

}

export { getUserById, addFavoriteSong    };
