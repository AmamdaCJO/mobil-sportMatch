import http from 'node:http';

describe('Conexión con API', () => {
    test('debe existir conexión con la API', async () => {
        const response = await new Promise<{
            statusCode: number;
            body: string;
        }>((resolve, reject) => {
            const request = http.get(
                'http://127.0.0.1:5000/api/health',
                (response) => {
                    let body = '';

                    response.on('data', (chunk) => {
                        body += chunk;
                    });

                    response.on('end', () => {
                        resolve({
                            statusCode: response.statusCode ?? 0,
                            body,
                        });
                    });
                }
            );

            request.on('error', reject);
        });

        console.log('Status:', response.statusCode);
        console.log('Body:', response.body);

        expect(response.statusCode).toBe(200);
    });
});