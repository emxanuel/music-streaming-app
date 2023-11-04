import { TUser, TArtist, TSong, TPlaylist } from "@/types";

const emptyUser: TUser = {
    _id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
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

const emptySong: TSong = {
    title: "",
    link: "",
    duration: 0,
    explicitLyrics: false,
    preview: "",
    artist: emptyArtist,
    album: {
        id: 0,
        title: "",
        link: "",
    },
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

export { emptyUser, emptyPlaylist };
