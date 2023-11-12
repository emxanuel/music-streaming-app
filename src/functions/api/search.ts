import { axiosInstance } from "@/backend";
import { TSong } from "@/types";

const searchSong = async (
    value: string,
    setResults: React.Dispatch<React.SetStateAction<TSong[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
    setLoading(true)
    const request = await axiosInstance.get('/songs', {
        params: {
            song: value
        }
    })

    if (request.status === 200){
        setResults(request.data)
    }
    else{
        console.log(request.status)
    }
    setLoading(false)
}

export {
    searchSong
}