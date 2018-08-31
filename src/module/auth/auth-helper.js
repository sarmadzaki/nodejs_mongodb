import ejs from 'ejs';
import { join } from 'path';

export const registerEmail = (email,username,verification_link) => {
    let folder_path = join(process.cwd(), `/templates/verification-email.ejs`);
    let template;
    let data = {
        username: username,
        email: email,
        verification_link: `${process.env.BASE_URL}/email-verification/?link=${verification_link}`
    };
    ejs.renderFile(folder_path, data, {}, (error, responsemain) => {
        if (error) return console.log("error", error);
        template = responsemain;
    });
    return template;
};