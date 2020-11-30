const functions = require("./functions");
const userAccessToken =
  "EAAOvYeYLMXgBAI2zBxaZCSznVzEWtG40JbQMHkb5Tc7Qvn5l1vYuTk9MjEmdADN7YzCqAQDLUsTmNjlkrM5S3OKZB8SLhg4hFqnfJz3EUKUMUu19x6T0wOqKCSm7hvtdZA1XOCIcjSxKOFGElEK9vi04h6cn7Oom2zphDISmns3sZAKhWtiDKHyeMVAqTD6tEdsZCNDXjGgZDZD";
const catalogId = "214542249143457";
const baseUrl = "https://graph.facebook.com/v9.0";

/** Product Items API */
//Get all product list

test("should get list of products", async () => {
  const config = {
    method: "GET",
    url: `${baseUrl}/${catalogId}/products?fields=["category", "name", "availability", "brand", "description", "price", "currency", "condition", "url", "image_url", "retailer_product_group_id", "custom_label_0", "custom_label_1"]`,
    headers: { "Content-Type": "application/json" },
    params: {
      limit: 200,
      access_token: userAccessToken,
      
    }
  };
  const res = await functions.request(config);
  console.log(res);
  //expect(res.name).toEqual("Fendi Rusly");
});

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
    url: `${baseUrl}/${catalogId}/product_sets`,
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
/*
test("should delete", async () => {
  const config = {
    method: "DELETE",
    url: `${baseUrl}/442739993383066`,
    headers: { "Content-Type": "application/json" },
    params: {
      access_token: userAccessToken,
    },   
  };
  const res = await functions.request(config);
  console.log(res);
});
*/