/* HTTP REQUESTS */


export class Ajax { 


    private static headers: object
    private static method: string


    public static async xhr(path: string, method: string, body?: object): Promise<any>
    {

        const format: any = await Ajax.request(method, body),
              request = { method: format.method, headers: format.headers, body: JSON.stringify(format['body']) },
              standardFetch = await fetch(path, request);

        if (!standardFetch.ok)
            return new Error;

        const data = await standardFetch.json();

        return data;
    }

    //-------------------------------------

    private static async request(type: string, body?: object): Promise<{method: string, headers: any}>
    {
        
        Ajax.headers = { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + localStorage.getItem('webtoken'),
            //'mode': 'no-cors'
            credentials: 'same-origin', //GET ONLY
        };

        switch (type)
        {
            case 'GET': Ajax.method = 'GET'; break;
            case 'POST': Ajax.method = 'POST'; break;
            case 'PUT': Ajax.method = 'PUT'; break;
        }

        const format: any = { method: Ajax.method, headers: Ajax.headers };

        type === 'POST' || type === 'PUT' ? 
            format['body'] = body : delete format['body'];

        return format;
    }  
} 






