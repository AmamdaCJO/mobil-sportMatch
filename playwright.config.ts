import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './e2e',
    fullyParallel: true,
    retries: 2, // Manejo automático de reintentos ante fallos intermitentes
    workers: 2,
    reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry', // Captura traza detallada si la prueba falla
        screenshot: 'only-on-failure', // Captura de pantalla en caso de error
        video: 'retain-on-failure',
    },
    projects: [
        { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
    ],
});