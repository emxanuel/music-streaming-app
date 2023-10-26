# Sound Wave API Documentation

## Endpoints

-   ### Users

    -   **Get all users**
        ```javascript
        fetch(`${origin}/api/users`);
        ```
    -   **Get single user**
        ```javascript
        fetch(`${origin}/api/users?id=${id}`);
        //or
        fetch(`${origin}/api/users?email=${email}`);
        ```
    -   **Create an user**
        ```javascript
            fetch(`${origin}/api/users`,
                method: 'post',
                body: user
            )
        ```
    -   **Update an user**
        ```javascript
            fetch(`${origin}/api/users/:id`,
                method: 'put',
                body: user
            )
        ```
    -   **Delete an user**
        ```javascript
            fetch(`${origin}/api/users/:id`,
                method: 'delete',
            )
        ```

-   ### Playlists

    -   **Get user's playlists**

        ```javascript
        fetch(`${origin}/api/playlists/:userId`);
        ```

    -   **Create playlist**

        ```javascript
            fetch(`${origin}/api/playlists`,
                method: 'post',
                body: {
                    user,
                    playlist
                }
            )
        ```

    -   **Update playlist**

        ```javascript
            fetch(`${origin}/api/playlists/:id`,
                method: 'put',
                body: playlist
            )
        ```

    -   **Delete playlist**

        ```javascript
            fetch(`${origin}/api/playlist/:id`,
                method: 'delete',
            )
        ```

    -   **Get Generated Playlists**
        ```javascript
        fetch(`${origin}/api/playlists/generated`);
        //or
        fetch(`${origin}/api/playlists/generated?page=${page}`);
        ```

-   ### Artists

    -   **Get All Artists**

        ```javascript
        fetch(`${origin}/api/aritsts`);
        //or
        fetch(`${origin}/api/aritsts?page=${page}`);
        ```

    -   **Get Single Artist**
        ```javascript
        fetch(`${origin}/api/artists/:id`);
        ```
    -   **Get Artist By Genre**
        ```javascript
        fetch(`${origin}/api/artists?genre=${genre}`);
        //or
        fetch(`${origin}/api/artists?genre=${genre}&page=${page}`);
        ```
    -   **Get User Favorite Artists**
        ```javascript
        fetch(`${origin}/api/artists?user=${userId}`);
        ```

-   ### Songs

    -   **Get Songs By Artist**

        ```javascript
        fetch(`${origin}/api/songs?artist=${artist}`);
        //or
        fetch(`${origin}/api/songs?artist=${artist}&page=${page}`);
        ```

    -   **Get Songs By Genre**
        ```javascript
        fetch(`${origin}/api/songs?genre=${genre}`);
        //or
        fetch(`${origin}/api/songs?genre=${genre}&page=${page}`);
        ```
    -   **Get User Favorite Songs**
        ```javascript
        fetch(`${origin}/api/songs?user=${userId}`);
        ```

-   ### Auth
    -   **Login**
        ```javascript
            fetch(`${origin}/api/auth/login`,
                method: 'post'
                body: {
                    username,
                    password
                }
            )
        ```

# Data Types

-   **User object**

    ```typescript
    interface IUser {
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        password: string;
        phone: string;
        country: string;
    }
    ```

-   **Song object**

    ```typescript
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
        }[];
        album: {
            id: number;
            title: string;
            link: string;
        }[];
    }
    ```

-   **Playlist object**

    ```typescript
        interface IPlaylist{
            name: string,
            owner: {
                id: string,
                username: string
            },
            createDate: Date(),
            songs: ISong[]
        }
    ```