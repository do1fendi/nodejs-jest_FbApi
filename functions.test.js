const functions = require("./functions");
// const userAccessToken =
//   "EAAOvYeYLMXgBAI2zBxaZCSznVzEWtG40JbQMHkb5Tc7Qvn5l1vYuTk9MjEmdADN7YzCqAQDLUsTmNjlkrM5S3OKZB8SLhg4hFqnfJz3EUKUMUu19x6T0wOqKCSm7hvtdZA1XOCIcjSxKOFGElEK9vi04h6cn7Oom2zphDISmns3sZAKhWtiDKHyeMVAqTD6tEdsZCNDXjGgZDZD";
const userAccessToken =
  "EAAOvYeYLMXgBAC1je56QWvMa1IhrhthyTYsjoVkVTBiybvfiHujbeTt8cFk6wkCOrIBGDZCgQFXP0GoZAQ8iJh4NJaZBUZCbBRIVFNI42jr8g5tATpIBSk2pfp7bnUn0XbbA7SBcQ6WXX1Khr3lSX1bD5DMkKu5iEwlga9QhFEAdZCfusSiba";
const catalogId = "889207771614903";
const baseUrl = "https://graph.facebook.com/v9.0";

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
//     url: `${baseUrl}/321602281230511/feed`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Get a page post
// test("Get a Page Post", async () => {
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/321602281230511_3991498390907530`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });

// Get a page post (fields=likes.summary(true), fields=reactions.summary(total_count))
test("Get a Page Post", async () => {
  const config = {
    method: "GET",
    url: `${baseUrl}/321602281230511_4037821886275180/?fields=likes.summary(true)`,
    headers: { "Content-Type": "application/json" },
    params: {
      access_token: userAccessToken,
    },
  };
  const res = await functions.request(config);
  console.log(res);
});

// Update a page post
// test("Get a Page Post", async () => {
//   const msg = ''
//   const config = {
//     method: "GET",
//     url: `${baseUrl}/321602281230511_3991498390907530?message=${msg}`,
//     headers: { "Content-Type": "application/json" },
//     params: {
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
//     url: `${baseUrl}/...page-post-id...`,
//     headers: { "Content-Type": "application/json" },
//     params: {
//       access_token: userAccessToken,
//     },
//   };
//   const res = await functions.request(config);
//   console.log(res);
// });