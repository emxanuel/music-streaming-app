type TUser = {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    phone: string;
};

type TArtist = {
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
    radio: boolean;
    tracklist: string;
}

type TSong = {
    title: string;
    link: string;
    duration: number;
    explicitLyrics: boolean;
    preview: string;
    artist: TArtist;
    album: {
        id: number;
        title: string;
        link: string;
    };
}

type TPlaylist = {
    _id: string;
    name: string;
    owner: {
        id: string;
        username: string;
    };
    createDate: string;
    songs: TSong[];
}

export type { TUser, TPlaylist, TArtist, TSong };
