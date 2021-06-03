const functions = require("./functions");
const FormData = require("form-data");
const fs = require("fs");
const systemUser =
  "EAAOvYeYLMXgBAI2zBxaZCSznVzEWtG40JbQMHkb5Tc7Qvn5l1vYuTk9MjEmdADN7YzCqAQDLUsTmNjlkrM5S3OKZB8SLhg4hFqnfJz3EUKUMUu19x6T0wOqKCSm7hvtdZA1XOCIcjSxKOFGElEK9vi04h6cn7Oom2zphDISmns3sZAKhWtiDKHyeMVAqTD6tEdsZCNDXjGgZDZD";

//新台灣食堂
const userAccessToken =
  "EAAERSOBI6tkBALZAlZAmXgD9HzY9NsBqnnys6rk6Lyihz3se7HT9IOLSYxcVJzIzrsd8Du8BwbmO8qhSo28eINh1crezHwkAZBSGIC1gom6ZAnFoYWyZBKQOOHPGIEoBesASZAODcZA5Wsx1EEh1SdkkZB7RpmMinjOBa345IU2chrVLZBrH3nEx7";
// 跟著董事長遊台灣
// const userAccessToken = "EAAERSOBI6tkBAM2MZAvZAjgL3kcI4SRzYbuv5k1OZBIRznoexUie3W16WUylwZA5sDHOM10ZAZAYly9C9belUcdHcUEwpE9lF1aB2xt4vgvN2ARwcyUrqmyOu77Y8hQuZCpms05h00NXWFKajdTb2OatW6ufDIHvF4ZAzmj88ZCONrZB0MMQQZAeaRE";

//System user for Siloah App
// const userAccessToken = "EAAERSOBI6tkBAOsxHmKdBm8KKFWgcj4MNDArddAHXZA3RjUr4kM3HaDsMzAmeFJJxw2k1q7ZCAom1HZCpYexz0mdT5yBLp34kkxhfJVP49idZA6lpRZC3yS8qUkQLt1FP6u59YeZCNXvby3kVQKud4Nh83XjbNqCKgWDjFnxnQ9ODcogQCMTP7";

const catalogId = "889207771614903";
const baseUrl = "https://graph.facebook.com/v10.0";

// 新台灣食堂
const pageId = "100868584925473";

// 跟著董事長遊台灣
// const pageId = "321602281230511";

//Instagram User Id
const accessToken = "EAAERSOBI6tkBAEMooIecczpQ0KDFanPPJZA6YbWYSNO2bUgZB9TQ2TlPECXDhV1iW6KmU2ZChz9Trf60c8fuZChJwlNu9mLbZAfSPOk75IY3BRffRDp1GIVnErFKoTKe17QYsmb0ZCsk8Gh6TMbtHgTY8WI3VEAHnMQPkfZAaTBz6zBr0k7p27Y0fZAP1Bl9iWcqi5EgtHviVrYmgEZCYe2iamYqkgmSQVcTgynywdhjwvYC38IxgC71D"
const instaUser = "17841401990254990";

/** Product Catalog API */
//Get all product list
/*
test("should get list of products", async () => {
  const config = {
    method: "GET",
    url: `${baseUrl}/${catalogId}/products`,
    headers: { "Content-Type": "application/json" },
    params: {
      limit: 1000,
      fields: "category,name,availability,brand,description,price,currenct,condition,url,image_url,retailer_product_group_id,custom_label_0,custom_label_1,product_sets{id}",
      access_token: userAccessToken,
      
    }
  };
  const res = await functions.request(config);
  console.log(res);
  //expect(res.name).toEqual("Fendi Rusly");
});
*/
//Update
/*
test("Should update", async () => {
  const body = JSON.stringify({
    access_token: userAccessToken,
    requests: [
      {
        method: "UPDATE",
        retailer_id: "ALSM02",
        data: {
          availability: "out of stock",
        },
      },
    ],
  });
  const config = {
    method: "POST",
    url: `${baseUrl}/${catalogId}/batch`,
    headers: { "Content-Type": "application/json" },
    data: body,
  };
  const res = await functions.request(config);
  console.log(res);
});
*/
//Create
/*
test("Should create", async () => {
  const body = JSON.stringify({
    access_token: userAccessToken,
    requests: [
      {
        method: "CREATE",
        retailer_id: "WUL03",
        data: {
          availability: "in stock",
          brand: "希羅亞旅行社股份有限公司",
          category: "團體",
          description: "product description",
          image_url:
            "https://www.taiwanviptravel.com/wp-content/uploads/2020/09/%E7%A6%8F%E5%A3%BD%E5%B1%B1%E8%BE%B2%E5%A0%B4_0016.jpg",
          name: "wulingfarm",
          price: 3968800,
          currency: "TWD",
          condition: "new",
          url: "https://www.taiwanviptravel.com/wulingfarm/",
          retailer_product_group_id: "retailerGroup01",
          custom_label_0: "abc",
          custom_label_1: "def",
        },
      },
    ],
  });
  const config = {
    method: "POST",
    url: `${baseUrl}/${catalogId}/batch`,
    headers: { "Content-Type": "application/json" },
    data: body,
  };
  const res = await functions.request(config);
  console.log(res);
});
*/
//Delete item
/*
test("should delete", async () => {
  const body = {
    access_token: userAccessToken,
    requests: [
      {
        method: "DELETE",
        retailer_id: "WUL03",
      },
    ],
  };
  const config = {
    method: "POST",
    url: `${baseUrl}/${catalogId}/batch`,
    headers: { "Content-Type": "application/json" },
    data: body,
  };
  const res = await functions.request(config);
  console.log(res);
});
*/

/** --------------------------------------------------------- */

/** Product Set API */
//list all product sets
/*
test("should list out product sets", async () => {
  const config = {
    method: "GET",
    url: `${baseUrl}/${catalogId}/product_sets?fields=products.limit(1000){retailer_id}`,
    headers: { "Content-Type": "application/json" },
    params: {
      access_token: userAccessToken,
    },
  };
  const res = await functions.request(config);
  console.log(res);
});
*/
//create product sets
/*
test("should create product sets", async () => {
  const body = JSON.stringify({
    access_token: userAccessToken,
    name: "setTest01",
    filter: {
      retailer_id: {
        is_any: ["ALSM02", "PWM02"],
      },
    },
  });
  const config = {
    method: "POST",
    url: `${baseUrl}/${catalogId}/product_sets`,
    headers: { "Content-Type": "application/json" },   
    data: body,
  };
  const res = await functions.request(config);
  console.log(res);
});
*/
//Delete product sets
// test("should delete", async () => {
//   const config = {
//     method: "DELETE",
//     url: `${baseUrl}/3338560996270975`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

/** Page Api */
//Get page all page id
// test("List Test Id", async () => {
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/100053305697824/assigned_pages`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// })

// Get all page posts
// test("Get Page Posts", async () => {
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/${pageId}/feed`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Post and publish a photo to page using url
// test("Post Text", async () => {
//   const config = {
//     method: "POST",
//     url: `${baseUrl}/${pageId}/feed`,
//     headers: { "Content-Type": "application/json" },
//     params: { access_token: userAccessToken, message: "Hi all" },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Post and publish a photo to page using url
// test("Post photo", async () => {
//   const photoPath =
//     "https://www.taiwanviptravel.com/wp-content/uploads/2020/12/A7308401-1024x576.jpg";
//   const config = {
//     method: "POST",
//     url: `${baseUrl}/${pageId}/photos`,
//     headers: { "Content-Type": "application/json" },
//     params: { url: photoPath, access_token: userAccessToken, message: "Hi all" },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Post and publish multiple photos to page
// test("Post photo", async () => {
//   const pic = JSON.stringify ([{"media_fbid":"318509079828088"},{"media_fbid":"318509173161412"},{"media_fbid":"318509239828072"},{"media_fbid":"318509356494727"}]);
//   const config = {
//     method: "POST",
//     url: `${baseUrl}/${pageId}/feed`,
//     headers: { "Content-Type": "application/json" },
//     params: { access_token: userAccessToken, message: "Hi all from Siloah", attached_media: pic },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Create an unpublished page post
// test("Create unpublished post", async () => {
//   const msg = "Unpublised Post";
//   const config = {
//     method: "POST",
//     url: `${baseUrl}/${pageId}/feed`,
//     headers: { "Content-Type": "application/json" },
//     params: { access_token: userAccessToken, published: false, message: msg },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Publish an unpublished page post
// test("Publish unpublished post", async () => {
//   const postId = "100868584925473_318542293158100";
//   const config = {
//     method: "POST",
//     url: `${baseUrl}/${postId}/`,
//     headers: { "Content-Type": "application/json" },
//     params: { access_token: userAccessToken, is_published: true },
//   }
//   const res = await functions.request(config);
//   console.log(res);
// })

//Schedule a page post
// test("Create Schedule post", async () => {
//   const msg = 'A scheduled post'
//   const time = new Date("May  25, 2021 14:58:00").getTime()/1000.0
//    console.log(time)
//   const config = {
//     method: "POST",
//     url: `${baseUrl}/${pageId}/feed`,
//     headers: {"Content-Type":"application/json"},
//     params: { access_token: userAccessToken, published: false, scheduled_publish_time: time, message: msg }
//   }
//   const res = await functions.request(config)
//   console.log(res)
// })

// Schedule a page post with multiple photos
// test("Post photo", async () => {
//   const msg = 'Scheduling photos'
//   const time = new Date("May  25, 2021 16:15:00").getTime()/1000.0
//   const pic = JSON.stringify ([{"media_fbid":"318631413149188"},{"media_fbid":"318631483149181"},{"media_fbid":"318631516482511"},{"media_fbid":"318631569815839"}]);
//   const config = {
//     method: "POST",
//     url: `${baseUrl}/${pageId}/feed`,
//     headers: { "Content-Type": "application/json" },
//     params: { access_token: userAccessToken, message: msg, attached_media: pic, published: false, scheduled_publish_time: time, unpublished_content_type:'SCHEDULED' },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// GET Schedule a page post
// Still no success
// test("GET Schedule post", async () => {
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/${pageId}/feed`,
//     headers: {"Content-Type":"application/json"},
//     params: { access_token: userAccessToken, fields: 'is_published'}
//   }
//   const res = await functions.request(config)
//   console.log(res)
// })

// Upload a photo to page unpublished
// error need to use fetch
// test("Upload photo", async () => {
//   let formdata = new FormData();
//   formdata.append("source", fs.createReadStream("./images/katak.png"));

//   const config = {
//     method: "POST",
//     url: `${baseUrl}/${pageId}/photos/`,
//     headers: { "Content-Type": "multipart/form-data" },
//     params: { access_token: userAccessToken, published: false },
//     data: formdata,
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Get a page insights
// test("Get a Page insights", async () => {
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/${pageId}/insights`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       metric: 'page_impressions_unique,page_engaged_users',
//       access_token: userAccessToken,
//     },

//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Get a page post insights
// test("Get a Page insights", async () => {
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/321602281230511_4053630551360980/insights`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       metric: 'post_reactions_like_total,post_reactions_love_total,post_reactions_wow_total,post_impressions_unique,post_engaged_users',
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(JSON.stringify(res));
// });

// Get a page post Comment
// test("Get a Page post comment", async () => {
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/321602281230511_4049845858406116/comments`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       access_token: userAccessToken,
//     },

//   };
//   const res = await functions.request(config);
//   console.log(JSON.stringify(res));
// });

// Get a page post (fields=likes.summary(true), fields=reactions.summary(total_count))
// test("Get a Page Post", async () => {
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/321602281230511_4037821886275180/?fields=likes.summary(true)`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Update a page post
// test("Update a Page Post", async () => {
//   const msg = 'Videos changed'
//   const config = {
//     method: "POST",
//     url: `${baseUrl}/100868584925473_319127986432864?message=${msg}`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Post a page post
// test("Post a Page Post", async () => {
//   const msg = 'Hello From Siloah'
//   const config = {
//     method: "POST",
//     url: `${baseUrl}/${pageId}/feed`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       message: msg,
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Delete a page post
// test("Delete a Page Post", async () => {
//   const config = {
//     method: "DELETE",
//     url: `${baseUrl}/100868584925473_318601073152222`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });



/** Instagram API */

// Insights
// test("Instagram Insights", async () => {
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/${instaUser}/insights`,
//     params: {
//       // metric: "audience_gender_age,online_followers",
//       // period: "lifetime",
//       metric: "impressions,reach",
//       period: "days_28",
//       access_token: accessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Business account
// test("Instagram Insights", async () => {
//   const pgId = '321602281230511'
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/${pgId}`,
//     params: {
//       fields: "instagram_business_account",
//       access_token: accessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });


// IG Media 
test("Instagram Insights", async () => {
  const mediaId = '17909096878707403'
  const config = {
    method: "GET",
    url: `${baseUrl}/${mediaId}`,
    params: {
      fields: "like_count,media_product_type,comments_count,timestamp,media_type",
      access_token: accessToken,
    },
  };
  const res = await functions.request(config);
  console.log(res);
});