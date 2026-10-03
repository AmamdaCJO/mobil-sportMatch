import { validatePassword } from '../../utils/validation';

describe('Validación de contraseña', () => {

    test('debe mostrar un mensaje cuando la contraseña es menor a 8 caracteres', () => {
        try {
            const result = validatePassword('123456');

            expect(result).toBe(
                'La contraseña debe tener al menos 8 caracteres'
            );

            console.log(
                'Prueba exitosa: la contraseña menor a 8 caracteres muestra el mensaje de validación correcto'
            );
        } catch (error) {
            console.error(
                'Prueba fallida: la contraseña menor a 8 caracteres no muestra el mensaje esperado'
            );
            throw error;
        }
    });

    test('debe mostrar un mensaje cuando la contraseña está vacía', () => {
        try {
            const result = validatePassword('');

            expect(result).toBe(
                'La contraseña debe tener al menos 8 caracteres'
            );

            console.log(
                'Prueba exitosa: una contraseña vacía muestra el mensaje de validación correcto'
            );
        } catch (error) {
            console.error(
                'Prueba fallida: una contraseña vacía no muestra el mensaje esperado'
            );
            throw error;
        }
    });

    test('debe aceptar una contraseña de 8 caracteres', () => {
        try {
            const result = validatePassword('12345678');

            expect(result).toBeNull();

            console.log(
                'Prueba exitosa: una contraseña de 8 caracteres es aceptada correctamente'
            );
        } catch (error) {
            console.error(
                'Prueba fallida: una contraseña de 8 caracteres no fue aceptada correctamente'
            );
            throw error;
        }
    });

    test('debe aceptar una contraseña mayor a 8 caracteres', () => {
        try {
            const result = validatePassword('123456789');

            expect(result).toBeNull();

            console.log(
                'Prueba exitosa: una contraseña mayor a 8 caracteres es aceptada correctamente'
            );
        } catch (error) {
            console.error(
                'Prueba fallida: una contraseña mayor a 8 caracteres no fue aceptada correctamente'
            );
            throw error;
        }
    });

});
