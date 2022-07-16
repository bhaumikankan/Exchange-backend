
# MOBILE EXCHANGE

useing this site users can find value of their old mobile.and admin can add the mobile company name and their respective model name and prices. 

#### Frontend Live link(user area)-> https://exchangemobile.netlify.app
#### Frontend Live link(admin area)-> https://exchangemobile.netlify.app/admin
#### Backend Live link->https://exchange123.herokuapp.com/

#### run on local->1.clone the backend and frontend code from github (link is in the below) 
#### backend->1. npm install 2. node index.js
#### frontened->1.npm install 2. node run dev


#### Frontend code link-> https://github.com/bhaumikankan/Exchange-frontened.git
#### Backend code link-> https://github.com/bhaumikankan/Exchange-backend.git

#### assigned on -> 15/07/2022  Submitted on ->16/07/2022 
# API Reference


# User api's
#### User Register and login

```http
  POST /user/auth/register
```

```http
  POST /user/auth/login
```

| Parameter | Type     | 
| :-------- | :------- | 
| `email` | `string`   |
| `password`| `string`| 

#### Verify user auttoken

```http
  GET /user/auth/verify
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `req.headers['x-auth-token']`      | `string` | **Required** |

#### get product depending on quary Parameter

```http
  GET /user/getproduct/models?cname=`mobile company name`& model=`model name`

  if company name and model name then we get prices
  if only company name then we get models belong to this company
  if nothing present then we get all models

  GET /user/getproduct/allcomp 

  to get all company names
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `req.headers['x-user-token']`      | `string` | **Required** |

# Admin api's

```http
  POST /admin/auth/login
```

| Parameter | Type     | 
| :-------- | :------- | 
| `email` | `string`   |
| `password`| `string`| 

#### Verify user auttoken

```http
  GET /admin/auth/verify
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `req.headers['x-auth-token']`      | `string` | **Required** |


#### get all users 

```http
  GET /admin/getuser/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `req.headers['x-admin-token']`      | `string` | **Required** |

#### Add new mobile company

```http
  Post /admin/product/addcompany
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `req.headers['x-admin-token']`      | `string` | **Required** |
| `comapny name` | `string`   | **Required** |

#### Add new mobile model

```http
  Post /admin/product/addmodel/:id of company
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `req.headers['x-admin-token']`      | `string` | **Required** |
| `model name` | `string`   | **Required** |
| `id of company` | `string`   | **Required** |














