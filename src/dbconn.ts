import { createConnection } from 'typeorm';

try {
    createConnection().then( () => {
        console.log("db connected...");
    }).catch( err => {
        console.error(err);
    });

} catch (err) {
    console.error(err);
}
