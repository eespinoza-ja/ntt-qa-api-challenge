const { I } = inject();

const timeout = 30;
const username = "test123456";
const updatedName = "Luci";
const updatedEmail = "lucidoe@opencart.com";
const createUserPayload = {
  id: 100000,
  username: username,
  firstName: "Jane",
  lastName: "Doe",
  email: "janedoe@opencart.com",
  password: "12312312312321",
  phone: "+23123456789",
  userStatus: 1,
};
const updateUserPayload = {
  id: 100000,
  username: username,
  firstName: updatedName,
  lastName: "Doe",
  email: updatedEmail,
  password: "12312312312321",
  phone: "+23123456789",
  userStatus: 1,
};

Feature("Create User - API Petstore Swagger").tag("@userApi").retry(2);

Scenario("Create User", async ({ I }) => {
  const newUserResponse = await I.sendPostRequest("/user", createUserPayload);
  await I.assertEqual(newUserResponse.status, 200);
});

Scenario("Search the New User", async ({ I }) => {
  const getUserResponse = await I.sendGetRequest("/user/" + username);
  await I.assertEqual(getUserResponse.status, 200);
});

Scenario("Update User", async ({ I }) => {
  const updateUserResponse = await I.sendPutRequest(
    "/user/" + username,
    updateUserPayload
  );
  await I.assertEqual(updateUserResponse.status, 200);
});

Scenario("Search the Updated User", async ({ I }) => {
  const getUserResponse = await I.sendGetRequest("/user/" + username);
  await I.assertEqual(getUserResponse.data.firstName, updatedName);
  await I.assertEqual(getUserResponse.data.email, updatedEmail);
  await I.assertEqual(getUserResponse.status, 200);
});

Scenario("Delete User", async ({ I }) => {
  const deleteUserResponse = await I.sendDeleteRequest("/user/" + username);
  await I.assertEqual(deleteUserResponse.status, 200);
  await I.assertEqual(deleteUserResponse.data.message, username);
});
