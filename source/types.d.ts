interface IUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
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

type IArtist = {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    nb_album: number;
    nb_fan: number;
    radio: true;
    tracklist: string;
};

interface ISong {
    title: string;
    link: string;
    duration: number;
    explicitLyrics: boolean;
    preview: string;
    artist: {
        id: number;
        name: string;
        link: string;
    };
    album: {
        id: number;
        title: string;
        link: string;
    }[];
}

export type { IUser, IPlaylist, IArtist, ISong };
