interface IUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    country: string;
}

interface IPlaylist {
    name: string;
    owner: {
        id: string;
        username: string;
    };
    createDate: string;
    songs: {
        title: string;
        artist: {
            name: string;
            link: string;
        }[];
        album: {
            name: string;
            link: string;
        };
    }[];
}

export type { IUser, IPlaylist };
