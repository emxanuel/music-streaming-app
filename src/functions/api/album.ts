import { axiosInstance } from "@/backend";
import { TAlbum } from "@/types";
import { emptyAlbum } from "@/utilities/emptyObjects";
import React, { useState, useEffect } from "react";

const useGetAlbum = (id: number) => {
    const [album, setAlbum] = useState<TAlbum | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axiosInstance
            .get("/album", {
                params: {
                    id,
                },
            })
            .then((response) => {
                setAlbum(response.data as TAlbum);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, [id]);

    return { album, loading };
};

export { useGetAlbum };
