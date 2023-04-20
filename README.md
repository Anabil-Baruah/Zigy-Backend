
# StreamX (Assignment)

StreamX is a Node.js application that allows users to easily upload, stream, and download videos. With StreamX, users can upload their videos to the server, stream them online, download them for offline viewing, and even delete them if needed.

# Screen shots

![Home page](https://res.cloudinary.com/dudvqptv0/image/upload/v1681918602/samples/zigy-assignment-SC_ydoowb.png)

## Tech stack

- Node / Express.JS

- Mongo DB

- Bootstrap 5
## Features

- REST API architecture

- Upload videos

- Stream videos

- Download videos

- Delete videos

- UI included

## API Endpoints

#### Get all items

```http
  GET /videos
```
This endpoint allows users to retrieve a list of all video files stored on the server. When a request is sent to this endpoint, the server will retrieve all video files from the database and return them as a response to the client. The response will include information about each video file, such as its ID, filename, and URL.

#### Upload videos

```http
  POST /videos
```
This endpoint allows users to upload video files to the server using the multipart/form-data encoding type. When a request is sent to this endpoint, the server will receive the video file and store it in the server's directory. The server will also save the video file's metadata (name, size, and URL) in the database.

#### Download videos
```http
  GET /videos/download/:filename
```
This endpoint allows users to download video files by specifying the filename in the URL. When a request is sent to this endpoint, the server will search for the video file with the specified filename in the server's directory and send it as a response to the client. If the video file is not found, the server will respond with a 404 Not Found status code.

#### Delete videos
```http
  GET /videos/delete/:id
```
This endpoint allows users to delete video files by specifying the video ID in the URL. When a request is sent to this endpoint, the server will search for the video file with the specified ID in the database and delete it. If the video file is successfully deleted, the server will respond with a 204 No Content status code. If the video file is not found, the server will respond with a 404 Not Found status code.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL` = mongodb://localhost:27017/Zigy





## Installation

To use this app, you'll need to have Node.js , npm and mongoDB installed on your machine.

```bash
cd Zigy-Backend
```
Then install the node modules and all the dependencies by running -

```bash
 npm install
```
Start the server
```bash
 nodemon server.js
```
    