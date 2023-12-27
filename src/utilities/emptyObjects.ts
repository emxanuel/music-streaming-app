import { TUser, TArtist, TSong, TPlaylist, TAlbum } from "@/types";

const emptyUser: TUser = {
    _id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    likedSongs: [],
    likedArtists: []
};

const emptyArtist: TArtist = {
    id: 0,
    name: "",
    link: "",
    share: "",
    picture: "",
    picture_small: "",
    picture_medium: "",
    picture_big: "",
    picture_xl: "",
    nb_album: 0,
    nb_fan: 0,
    radio: false,
    tracklist: "",
};

const emptyAlbum: TAlbum = {
    id: 0,
    title: "",
    link: "",
    share: "",
    cover: "",
    cover_small: "",
    cover_medium: "",
    cover_big: "",
    cover_xl: "",
    duration: 0,
    artist: emptyArtist,
    tracks: {
        data: []
    },
};

const emptySong: TSong = {
    id: '',
    title: "",
    link: "",
    duration: 0,
    explicitLyrics: false,
    preview: "",
    artist: emptyArtist,
    album: emptyAlbum,
};

const emptyPlaylist: TPlaylist = {
    _id: "",
    name: "",
    owner: {
        id: "",
        username: "",
    },
    createDate: "",
    songs: [],
};

export { emptyUser, emptyPlaylist, emptySong, emptyAlbum, emptyArtist };
