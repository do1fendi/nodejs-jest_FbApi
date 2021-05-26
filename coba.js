const fetch = require("node-fetch");
const FormData = require("form-data");
const fs = require("fs");
//新台灣食堂
const kitchenToken =
  "EAAERSOBI6tkBALZAlZAmXgD9HzY9NsBqnnys6rk6Lyihz3se7HT9IOLSYxcVJzIzrsd8Du8BwbmO8qhSo28eINh1crezHwkAZBSGIC1gom6ZAnFoYWyZBKQOOHPGIEoBesASZAODcZA5Wsx1EEh1SdkkZB7RpmMinjOBa345IU2chrVLZBrH3nEx7";
//跟著董事長遊台灣
const siloahTravelToken =
  "EAAERSOBI6tkBAM2MZAvZAjgL3kcI4SRzYbuv5k1OZBIRznoexUie3W16WUylwZA5sDHOM10ZAZAYly9C9belUcdHcUEwpE9lF1aB2xt4vgvN2ARwcyUrqmyOu77Y8hQuZCpms05h00NXWFKajdTb2OatW6ufDIHvF4ZAzmj88ZCONrZB0MMQQZAeaRE";

// fetch(`https://graph.facebook.com/v10.0/100868584925473/feed?message=helloworld&access_token=${kitchenToken}`, { method: 'POST'})
//     .then(res => res.json())
//     .then(json => console.log(json));

// const longLived = "EAAERSOBI6tkBANwNY6YpSotV0znWZCqO313QUGuPbYyV9j1lbMI86S6ZBIT0xxOZB2dK25kydqUMZA2ARikmZALZBkPJqrZBl92IopCRtO4kmTvPxdMRZB2vYknscvjaENMZCYq7QzFBrOhWe0c5N6aRRdts2CLBnoGFMizNTeeDe3gZDZD";

// fetch(`https://graph.facebook.com/v10.0/10158707635299213/accounts?access_token=${longLived}`, { method: 'GET'})
//     .then(res => res.json())
//     .then(json => console.log(json));

// Upload photo unpublished
// var formdata = new FormData();
// formdata.append("source", fs.createReadStream("./images/katak.png"));

// var requestOptions = {
//   method: "POST",
//   body: formdata,
//   redirect: "follow",
// };
// //param "temporary=true" need to be put if photo is used in a scheduled post
// fetch(
//   `https://graph.facebook.com/v10.0/100868584925473/photos?access_token=${kitchenToken}&published=false&temporary=true`,
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

// Post multiple pics to a page
// let body = JSON.stringify ([{media_fbid:"317892853223044"},{media_fbid:"317892969889699"}]);

// var requestOptions = {
//   method: "POST",
//   // body: `message=Testing multi-photo post!&attached_media[0]={media_fbid:1002088839996}&attached_media[1]={media_fbid:1002088840149}&access_token=EAAERSOBI6tkBALZAlZAmXgD9HzY9NsBqnnys6rk6Lyihz3se7HT9IOLSYxcVJzIzrsd8Du8BwbmO8qhSo28eINh1crezHwkAZBSGIC1gom6ZAnFoYWyZBKQOOHPGIEoBesASZAODcZA5Wsx1EEh1SdkkZB7RpmMinjOBa345IU2chrVLZBrH3nEx7`,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
// };

// fetch(
//   `https://graph.facebook.com/v8.0/100868584925473/photos?message=Testing multi-photo post!&attached_media[0]={media_fbid:1002088839996}&attached_media[1]={media_fbid:1002088840149}&access_token=EAAERSOBI6tkBALZAlZAmXgD9HzY9NsBqnnys6rk6Lyihz3se7HT9IOLSYxcVJzIzrsd8Du8BwbmO8qhSo28eINh1crezHwkAZBSGIC1gom6ZAnFoYWyZBKQOOHPGIEoBesASZAODcZA5Wsx1EEh1SdkkZB7RpmMinjOBa345IU2chrVLZBrH3nEx7`,
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

// fetch("https://graph.facebook.com/v10.0/100868584925473/photos", {
//   body: "message=Testing multi-photo post!&attached_media[0]={media_fbid:1002088839996}&attached_media[1]={media_fbid:1002088840149}&access_token=EAAERSOBI6tkBALZAlZAmXgD9HzY9NsBqnnys6rk6Lyihz3se7HT9IOLSYxcVJzIzrsd8Du8BwbmO8qhSo28eINh1crezHwkAZBSGIC1gom6ZAnFoYWyZBKQOOHPGIEoBesASZAODcZA5Wsx1EEh1SdkkZB7RpmMinjOBa345IU2chrVLZBrH3nEx7",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
//   method: "POST"
// }).then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));


// post movie
// var formdata = new FormData();
// formdata.append("source", fs.createReadStream("./images/mov.mp4"));
// // formdata.append("message", "Hello world")

// var requestOptions = {
//   method: "POST",
//   body: formdata,
//   redirect: "follow",
// };

// fetch(
//   `https://graph.facebook.com/v10.0/100868584925473/videos?access_token=${kitchenToken}&description=hello videos`,
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));