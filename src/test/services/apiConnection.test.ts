describe('Conexión con API', () => {

    test('debe existir conexión con la API', async () => {
        const url = 'http://127.0.0.1:5000/api/health';

        const response = await fetch(url);

        console.log('URL:', url);
        console.log('Response completa:', response);
        console.log('Tipo de response:', typeof response);
        console.log('Status:', response?.status);
        console.log('OK:', response?.ok);

        expect(response?.ok).toBe(true);
    });

});
