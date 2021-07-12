const fetch = require("node-fetch");
const FormData = require("form-data");
const fs = require("fs");
//新台灣食堂
const kitchenToken =
  "EAAERSOBI6tkBALqBDMJuLBvWnAAyQAs5GbCAxNrJvk2HBS7i0W3R9jCZBlYnZBfNsqkCICWW6deQZACd03wR7WnYHaim4vg3fACxyDtPJnZB4uWUBx3l1EFgQiSii17hmtxDyL8JbIHib2djl7pcl2IVbBtOPsBV5KBZBBrRwOwbBAT7SiVEr";
//跟著董事長遊台灣
const siloahTravelToken = "";

// fetch(`https://graph.facebook.com/v10.0/100868584925473/feed?message=helloworld&access_token=${kitchenToken}`, { method: 'POST'})
//     .then(res => res.json())
//     .then(json => console.log(json));

// const longLived = "";

// fetch(`https://graph.facebook.com/v10.0/10158707635299213/accounts?access_token=${longLived}`, { method: 'GET'})
//     .then(res => res.json())
//     .then(json => console.log(json));

// Upload photo unpublished
// var formdata = new FormData();
// formdata.append("source", fs.createReadStream("./images/phone.png"));

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
// const time = new Date("July 2, 2021 17:30:00").getTime()/1000.0
// formdata.append("description", "Hello world")
// &scheduled_publish_time=${time}

// var requestOptions = {
//   method: "POST",
//   body: formdata,
//   redirect: "follow",
// };

// fetch(
//   `https://graph.facebook.com/v10.0/100868584925473/videos?access_token=${kitchenToken}&description=video is scheduled&published=false&scheduled_publish_time=${time}`,
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

// var formdata = {
//   recipient: {
//     id: "3757719384338269",
//   },
//   message: {
//     text: "hello, world!",
//   },
// };

// var requestOptions = {
//   method: "POST",
//   body: formdata,
//   redirect: "follow",
// };

// fetch(
//   `https://graph.facebook.com/v10.0/me/messages?recipient={
//     "id": "3757719384338269"
//   }&message={
//     "text": "I got your testing message"
//   }&access_token=EAAERSOBI6tkBAKO10DUkqtxJARL5DOL9G1oAkMmS3pwBETFQvuSqPbbADMd4RXh58qAlrUvxOd63nFeLGgEGP2sP8ZBtsSZAiQuURZBzvIXLynlnRY71QGOfsL4Kdjq1GQAjIBZCj37kvDkN3ZBIkinhrlmhVCJMjEl0YgLbkYLDTNCT98Kv3tQEAuNsD6DVDZAdF0T7grnAZDZD`,
//   requestOptions
// )
// fetch(
//   `https://graph.facebook.com/v10.0/me/messages?access_token=EAAERSOBI6tkBAKO10DUkqtxJARL5DOL9G1oAkMmS3pwBETFQvuSqPbbADMd4RXh58qAlrUvxOd63nFeLGgEGP2sP8ZBtsSZAiQuURZBzvIXLynlnRY71QGOfsL4Kdjq1GQAjIBZCj37kvDkN3ZBIkinhrlmhVCJMjEl0YgLbkYLDTNCT98Kv3tQEAuNsD6DVDZAdF0T7grnAZDZD`,
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

// const body = new FormData();
// body.append("filedata", fs.createReadStream("./images/ok.png"));

var formdata = new FormData();
formdata.append("source", fs.createReadStream("./images/ok.png"));
formdata.append("recipient", "{ id: \"3757719384338269\" }");
formdata.append("message", "{attachment: { type: \"image\", payload: { is_reusable: true}}}");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://graph.facebook.com/v8.0/me/messages?access_token=EAAERSOBI6tkBALqBDMJuLBvWnAAyQAs5GbCAxNrJvk2HBS7i0W3R9jCZBlYnZBfNsqkCICWW6deQZACd03wR7WnYHaim4vg3fACxyDtPJnZB4uWUBx3l1EFgQiSii17hmtxDyL8JbIHib2djl7pcl2IVbBtOPsBV5KBZBBrRwOwbBAT7SiVEr", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
