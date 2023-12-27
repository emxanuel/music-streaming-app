interface IUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    likedSongs: ISong[];
    likedArtists: IArtist[];
}

interface IArtist {
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
};

interface IAlbum {
    id: number;
    title: string;
    link: string;
    share: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    duration: string;
    artist: string;
    tracks: ISong[];
}

interface ISong {
    id: string;
    title: string;
    link: string;
    duration: number;
    explicitLyrics: boolean;
    preview: string;
    artist: IArtist;
    album: IAlbum;
}

interface IPlaylist {
    name: string;
    owner: {
        id: string;
        username: string;
    };
    createDate: string;
    songs: ISong[];
}

export type { IUser, IPlaylist, IArtist, ISong };
