# Sound Wave API Documentation

## Endpoints
* users
    * Get all users
    ```javascript
        fetch(`${origin}/api/users`)
    ```
    * Get single user
    ```javascript
        fetch(`${origin}/api/users?id=${id}`)
        //or
        fetch(`${origin}/api/users?email=${email}`)
    ```
    * Create an user
    ```javascript
        fetch(`${origin}/api/users`, 
            method: 'POST',
            body: user
        )
    ```
    * Update an user
    ```javascript
        fetch(`${origin}/api/users/:id`, 
            method: 'PUT',
            body: user
        )
    ```
    * Delete an user
    ```javascript
        fetch(`${origin}/api/users/:id`, 
            method: 'DELETE',
        )
    ```