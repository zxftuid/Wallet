module.exports = {
    elements: {
        header: by.xpath('//form/h3'),
        selectKeystore: by.xpath('//input[@type="file"]'),
        accountName: by.xpath('//input[@name="name"]'),
        accountPassword: by.xpath('//input[@name="password"]'),
        addButton: by.xpath('//button[.="Add"]'),
        preview: by.className('sonm-wallets-add-account__preview-ct'),
        fileField: by.xpath('//input[@type="file"]')
    },

    //wait for page loading according to displayed add account header

    waitDialogue: function () {
        return shared.wdHelper.findVisibleElement(this.elements.header).getText()
            .then(text => expect(text).to.equal('Add account'));
    },

    //upload account file

    uploadAccountFile: async function (filename = 'for_upload.json') {
        let targetFile = process.cwd() + '/features/shared_objects/' + filename;
        await driver.executeScript("document.querySelector('input[type=\"file\"]').style.display = 'inline'");
        return shared.wdHelper.findVisibleElement(this.elements.fileField).sendKeys(targetFile);
    },

    findPreview: function () {
        return shared.wdHelper.findVisibleElement(this.elements.preview);
    },

    //enter account name

    fillAccountName: function (name) {
        return shared.wdHelper.findVisibleElement(this.elements.accountName).sendKeys(name);
    },

    //enter account password

    fillPassword: function (password) {
        return shared.wdHelper.findVisibleElement(this.elements.accountPassword).sendKeys(password);
    },

    //click add account button

    clickAddButton: function () {
        return shared.wdHelper.findVisibleElement(this.elements.addButton).click();
    },
};
