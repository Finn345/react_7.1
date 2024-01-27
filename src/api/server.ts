const token = '04ce59bb17d979e05313'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-api-project.onrender.com/api/vehicles`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to retrieve data from server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://car-api-project.onrender.com/api/vehicles`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data for server')
        }

        return await response.json()
    },
    update: async (id: string, data:any ={}) => {
        const response = await fetch(`https://car-api-project.onrender.com/api/vehicles/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to update data')
        }

        return await response.json()
    },
    delete: async (id: string) => {
        const response = await fetch(`https://car-api-project.onrender.com/api/vehicles/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        });

        if (!response.ok){
            throw new Error('Failed to delete data')
        }

        return;
    }
}