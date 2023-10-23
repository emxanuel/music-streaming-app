# Sound Wave API Documentation

## Endpoints
* ### Users
    * **Get all users**
    ```javascript
        fetch(`${origin}/api/users`)
    ```
    * **Get single user**
    ```javascript
        fetch(`${origin}/api/users?id=${id}`)
        //or
        fetch(`${origin}/api/users?email=${email}`)
    ```
    * **Create an user**
    ```javascript
        fetch(`${origin}/api/users`, 
            method: 'post',
            body: user
        )
    ```
    * **Update an user**
    ```javascript
        fetch(`${origin}/api/users/:id`, 
            method: 'put',
            body: user
        )
    ```
    * **Delete an user**
    ```javascript
        fetch(`${origin}/api/users/:id`, 
            method: 'delete',
        )
    ```

* ### Playlists
    * **Get user's playlists**
    ```javascript
        fetch(`${origin}/api/playlists/:userId`)
    ```

    * **Create playlist**
    ```javascript
        fetch(`${origin}/api/playlists`, 
            method: 'post',
            body: {
                user,
                playlist
            }
        )
    ```

    * **Update playlist**
    ```javascript
        fetch(`${origin}/api/playlists/:id`,
            method: 'put',
            body: playlist
        )
    ```

    * **Delete playlist**
    ```javascript
        fetch(`${origin}/api/playlist/:id`,
            method: 'delete',
        )
    ```


* ### Auth
    * **Login**
    ```javascript
        fetch(`${origin}/api/auth/login`,
            method: 'post'
            body:
        )
    ```



# Responses
* **User object**
```typescript
    interface IUser{
        firstName: string,
        lastName: string,
        username: string,
        email: string,
        password: string
        phone: string,
        country: string
    }
```

* **Playlist object**
```typescript
    interface IPlaylist{
        name: string,
        owner: {
            id: string,
            username: string
        },
        createDate: Date(),
        songs: {
            title: string,
            artist: {
                name: string,
                link: string
            },
            album: {
                name: string,
                link: string
            }
        }
    }
```