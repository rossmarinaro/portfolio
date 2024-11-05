/*** MONGO DB ***/

require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

class Database {

    constructor() {
        this.cluster = {};
        this.collection = [];
    }

    /***
    * @param { Object[] } collection
    * @returns { Promise<Session> } 
    */

    async connect (collection)
    {

        return new Promise(res => {

            MongoClient.connect(process.env.MONGODB_ATLAS_URI, { useUnifiedTopology: true }, (err, client) => {

                if (err) 
                    res(console.log(`cannot connect to data cluster...${ err }`));

                else
                {
                    const cluster = client.db(process.env.DATABASE).collection(collection);

                    cluster.find({}).toArray((err, collection) => {

                        if (err) 
                            throw err;

                        res({ collection, cluster });
                    });

                    console.log(`connection to database ${ process.env.DATABASE } successful.`);
                }
            });
        });
    }

    /***
    * @param { Object[] } collection
    * @returns { Promise<Database> } 
    */

    static async query (collection)
    {
        const db = new Database,
              res = await db.connect(collection);

        if (res) {
            db.collection = res.collection; 
            db.cluster = res.cluster; 
    
            return db;
        }
        
        return null;
    }

    /***
    * @param { Object } add
    * @param { Object } remove
    */

    persist (add, remove)
    {
        if (add !== null) 
            this.cluster.insertOne(add);

        if (remove !== null) 
            this.cluster.deleteOne(remove);
    }

    /***
    * @param { string } updateType
    * @param { Object } entry
    * @param { Object } params
    */

    update (updateType, entry, params)
    {
        switch (updateType)
        {
            case 'add' : this.cluster.updateOne({ _id: entry }, { $set: params }, { upsert: true }); break;
            case 'remove' : this.cluster.replaceOne({ _id: entry }, params, { multi: true }); break;
            default: console.log('Error adding to collection.'); return;
        }

        console.log('Updating::\n Entry: ', entry, '\nParams: ', params);
    }
};

module.exports = { Database };


    