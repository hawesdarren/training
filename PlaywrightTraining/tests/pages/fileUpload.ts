import { Page, Locator, expect } from "@playwright/test";
import fs from 'fs';

export class FileUpload {
    readonly page: Page;
    readonly header: Locator;
    //readonly chooseFileButton: Locator;
    readonly uploadFilePath: Locator;
    readonly uploadButton: Locator;
    readonly uploadFileDragAndDrop: Locator;


    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h3').first();
        //this.chooseFileButton = page.getByRole('button', {name: 'Choose file'});
        this.uploadFilePath = page.locator('#file-upload');
        this.uploadButton = page.getByRole('button', {name: 'Upload'});
        this.uploadFileDragAndDrop = page.locator('#drag-drop-upload');
                
    }

    async uploadFileWithFileChooser(filePath: string){
        //await expect(this.chooseFileButton).toBeVisible();
        await expect(this.uploadButton).toBeVisible();
        //Set file upload path
        await this.uploadFilePath.setInputFiles(filePath);
        //Select Upload
        await this.uploadButton.click();
        await expect(this.header).toHaveText('File Uploaded!');
    }

    async drapFileToUploadArea(filePath: string){
        await expect(this.uploadFileDragAndDrop).toBeVisible();

    }
}