const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the {string} page", async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When("I click on the Add element button {int} times", async (number) => {
    for(let i = 0; i < number; i++){
    await $('#content > div > button').click();
    }
});

Then("I should see a {int} Remove buttons", async (number) => {
    for(let i = 0; i < number; i++){
        await expect($(`#elements > button:nth-child(${number})`)).toBeExisting();
        }
    });

When("I click on the Add element button", async () => {
    await $('#content > div > button').click();
});

Then("I should see a Remove button, and remove it", async () => {
    await expect($("#elements > button")).toBeExisting();
    await $('#elements > button').click();
    await expect($("#elements > button")).not.toBeExisting();
    });

When("I click on the checkbox1 and checkbox2", async () => {
    await $('#checkboxes > input[type=checkbox]:nth-child(1)').click();
    await $('#checkboxes > input[type=checkbox]:nth-child(3)').click();

});

Then("I should see checked checkbox1 and unchecked checkbox2", async () => {
    await expect($('#checkboxes > input[type=checkbox]:nth-child(1)')).toBeChecked();
    await expect($('#checkboxes > input[type=checkbox]:nth-child(3)')).not.toBeChecked();
    });

When("I login with {word} and {word}", async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then("I should see a flash message saying {string}", async (message) => {
    const elem = await $('#flash');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(message);
});

When("I press {word}", async (Key) => {
    // await $('#target').setValue(Key); 
    browser.keys(Key);
    });

Then("I should see You entered: {word}", async (Result) => {
    const elem = await $('#result');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(Result);
});

When("I hover over the image {int}", async (image_number) => {
    await $(`#content > div > div:nth-child(${image_number + 2})`).moveTo();
    });

Then("I should see image {int} name: {word}" , async (image_number, name) => {
    const elem = await $(`#content > div > div:nth-child(${image_number + 2}) > div > h5`);
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(`name: ${name}`);
});
