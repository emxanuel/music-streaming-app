type TUser = {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    likedSongs: TSong[];
    likedArtists: TArtist[];
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

type TAlbum = {
    id: number;
    title: string;
    link: string;
    share: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    duration: number;
    artist: TArtist;
    tracks: {
        data: TSong[]
    };
}

type TSong = {
    id: string
    title: string;
    link: string;
    duration: number;
    explicitLyrics: boolean;
    preview: string;
    artist: TArtist;
    album: TAlbum;
}

type TPlaylist = {
    _id?: string;
    name: string;
    owner: {
        id: string;
        username: string;
    };
    createDate: string;
    songs: TSong[];
}


export type { TUser, TPlaylist, TArtist, TSong, TAlbum };
