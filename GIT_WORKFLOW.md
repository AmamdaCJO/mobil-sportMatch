# 🚀 Git Workflow — Guía de trabajo del equipo

!Git !Main !Dev !Workflow

## 📌 1. Objetivo

Establecer un flujo de trabajo con Git para que los desarrolladores puedan trabajar en paralelo, compartir código de forma segura y reducir conflictos durante la integración.

### 🎯 Objetivos principales

- Mantener la rama `main` estable.
---

## 🌳 2. Estructura de ramas

El proyecto utiliza cuatro ramas principales:

|Rama|Propósito|Responsable|
|---|---|---|
|`main`|Código estable para producción|Equipo|
|`dev`|Integración y pruebas|Equipo|
|`devOmar`|Desarrollo individual|Omar|
|`devAmanda`|Desarrollo individual|Amanda|

### 🔄 Diagrama del flujo de trabajo

```
flowchart TD
    O[devOmar] -->|Pull Request| D[dev]
    A[devAmanda] -->|Pull Request| D
    D --> T[Pruebas y revisión]
    T -->|Aprobado| M[main]

    style O fill:#2563eb,color:#ffffff,stroke:#1d4ed8
    style A fill:#9333ea,color:#ffffff,stroke:#7e22ce
    style D fill:#16a34a,color:#ffffff,stroke:#15803d
    style T fill:#f59e0b,color:#111827,stroke:#d97706
    style M fill:#0f172a,color:#ffffff,stroke:#334155
```

### 📋 Reglas generales

- 🔴 **`main`****:** no realizar cambios directamente.
- 🟢 **`dev`****:** integrar funcionalidades y ejecutar pruebas.
- 🔵 **`devOmar`****:** trabajar exclusivamente en las tareas de Omar.
- 🟣 **`devAmanda`****:** trabajar exclusivamente en las tareas de Amanda.
- ✅ Integrar cambios mediante Pull Requests siempre que sea posible.

---

## 👨‍💻 4. Flujo de trabajo diario

### Paso 1. Actualizar la rama personal

Antes de comenzar una tarea, incorpora los últimos cambios de `dev`.

#### 🔵 Omar

```
git switch devOmar
git fetch origin
git merge origin/dev
git push origin devOmar
```

#### 🟣 Amanda

```
git switch devAmanda
git fetch origin
git merge origin/dev
git push origin devAmanda
```

**Resultado esperado:** la rama personal incorpora los cambios disponibles de `dev` antes de comenzar el desarrollo.

Si existen conflictos, resuélvelos antes de continuar.

### Paso 2. Desarrollar la funcionalidad

Cada desarrollador trabaja en su propia rama.

Verifica el estado antes de modificar archivos:

```
git status
```

Después de implementar los cambios, revisa qué archivos vas a incluir:

```
git diff
git status
```

Agrega los archivos correspondientes y crea un commit:

```
git add archivo-modificado
git commit -m "feat: descripción de la funcionalidad"
```

Finalmente, publica los cambios.

#### 🔵 Omar

```
git push origin devOmar
```

#### 🟣 Amanda

```
git push origin devAmanda
```

> 💡 Es preferible usar `git add archivo-modificado` o `git add` con rutas específicas para evitar incluir archivos temporales o secretos accidentalmente.

### Paso 3. Integrar los cambios en `dev`

Cuando una funcionalidad esté terminada, el desarrollador debe subir sus cambios y solicitar su integración en `dev`.

#### 🔵 Opción A. Integrar los cambios de Omar

**1. Actualizar la información del repositorio y subir los cambios**

```
git switch devOmar
git status
git push origin devOmar
```

> Si tienes cambios sin guardar en un commit, créalo antes de hacer `git push`.

**2. Crear un Pull Request**

En GitHub, crea un Pull Request con la siguiente configuración:

- **Base:** `dev`
- **Compare:** `devOmar`

Revisa el código y espera la aprobación antes de integrar los cambios.

**3. Alternativa: integrar mediante comandos**

Si el equipo permite hacer merges directamente por consola:

```
git fetch origin
git switch dev
git pull origin dev
git merge origin/devOmar
```

Ejecuta las pruebas antes de publicar la integración.

```
git push origin dev
```

#### 🟣 Opción B. Integrar los cambios de Amanda

**1. Subir los cambios de Amanda**

```
git switch devAmanda
git status
git push origin devAmanda
```

**2. Crear un Pull Request**

En GitHub, configura:

- **Base:** `dev`
- **Compare:** `devAmanda`

**3. Alternativa: integrar mediante comandos**

```
git fetch origin
git switch dev
git pull origin dev
git merge origin/devAmanda
```

Si las pruebas pasan y la integración es correcta:

```
git push origin dev
```

> ⚠️ No ejecutes las dos integraciones simultáneamente. Antes de integrar cada rama, actualiza `dev` y verifica que el merge anterior esté terminado.

---

### Paso 4. Verificar la integración

Después de integrar los cambios en `dev`, verifica el estado del repositorio.

**1. Actualizar la rama de integración**

```
git fetch origin
git switch dev
git pull origin dev
```

**2. Revisar el estado**

```
git status
```

**3. Ejecutar las pruebas**

Si el proyecto utiliza Node.js y tiene configurado el comando de pruebas:

```
npm install
npm test
```

Si utiliza otro gestor de paquetes o framework de pruebas, ejecuta el comando correspondiente al proyecto.

**4. Verificar los cambios integrados**

```
git log --oneline --graph -10
git diff origin/main...origin/dev
```

**5. Lista de verificación**

- [ ] El proyecto compila correctamente.
- [ ] Las nuevas funcionalidades funcionan.
- [ ] Las funcionalidades existentes continúan funcionando.
- [ ] Las pruebas automatizadas pasan.
- [ ] No se incluyen credenciales ni archivos sensibles.
- [ ] Los cambios fueron revisados.

> 🟢 Si todas las verificaciones son correctas, `dev` está listo para solicitar su integración en `main`.

---

### Paso 5. Publicar en `main`

Cuando `dev` esté estable y las pruebas hayan pasado, se prepara la publicación.

#### Opción A. Mediante Pull Request (recomendado)

**1. Actualizar la información remota**

```
git fetch origin
```

**2. Verificar los commits que se integrarán**

```
git log --oneline origin/main..origin/dev
```

**3. Crear un Pull Request en GitHub**

Configura:

- **Base:** `main`
- **Compare:** `dev`

**4. Revisar y aprobar**

- Revisar los cambios.
- Ejecutar las pruebas requeridas.
- Obtener las aprobaciones necesarias.
- Completar el merge en GitHub.

**5. Actualizar la rama local** **`main`**

Una vez integrado el Pull Request:

```
git switch main
git pull origin main
```

#### Opción B. Mediante comandos Git

Utiliza esta alternativa únicamente si el equipo permite integrar directamente por consola y no existen reglas que exijan Pull Requests.

**1. Actualizar las referencias remotas**

```
git fetch origin
```

**2. Cambiar a** **`main`** **y actualizarla**

```
git switch main
git pull origin main
```

**3. Integrar** **`dev`** **en** **`main`**

```
git merge origin/dev
```

**4. Ejecutar las pruebas**

```
npm test
```

**5. Publicar los cambios**

Si la integración es correcta:

```
git push origin main
```

> ⚠️ Si el repositorio exige Pull Requests o protege `main`, utiliza la opción A en lugar de hacer el merge y el push directamente.

---

### 🔄 Resumen de comandos del flujo completo

```
# 1. Omar trabaja en su rama
git switch devOmar
git add archivo-modificado
git commit -m "feat: agregar funcionalidad"
git push origin devOmar

# 2. Integrar Omar en dev
git fetch origin
git switch dev
git pull origin dev
git merge origin/devOmar

# 3. Verificar y publicar la integración
npm test
git push origin dev

# 4. Amanda trabaja en su rama
git switch devAmanda
git add archivo-modificado
git commit -m "feat: agregar otra funcionalidad"
git push origin devAmanda

# 5. Integrar Amanda en dev
git fetch origin
git switch dev
git pull origin dev
git merge origin/devAmanda

# 6. Verificar y publicar la integración
npm test
git push origin dev

# 7. Preparar la publicación en main
git fetch origin
git switch main
git pull origin main
git merge origin/dev

# 8. Probar y publicar (si está permitido)
npm test
git push origin main
```

**Importante:** el bloque anterior muestra la alternativa de integración por consola. Si el equipo utiliza Pull Requests, realiza los pasos de integración y publicación desde GitHub y utiliza Git para actualizar tus ramas locales. No mezcles ambos métodos para la misma integración.
## ⚠️ 5. Resolución de conflictos

Un conflicto aparece cuando Git no puede combinar automáticamente los cambios de dos ramas.

### Paso 1. Actualizar la información remota

```
git fetch origin
```

### Paso 2. Incorporar los cambios de `dev`

Por ejemplo, si Omar necesita actualizar su rama:

```
git switch devOmar
git merge origin/dev
```

### Paso 3. Identificar los archivos afectados

```
git status
```

Git mostrará los archivos que necesitan resolución.

### Paso 4. Resolver el conflicto

Un archivo puede contener marcadores como estos:

```
<<<<<<< HEAD
Cambios de devOmar
=======
Cambios de dev
>>>>>>> origin/dev
```

Edita el archivo y combina correctamente los cambios. Elimina todos los marcadores antes de guardar.

### Paso 5. Finalizar la resolución

```
git add archivo-modificado
git commit -m "fix: resolver conflicto de integración"
git push origin devOmar
```

Reemplaza `archivo-modificado` por la ruta real del archivo afectado.

### 🚨 Reglas importantes

- No seleccionar automáticamente una versión sin revisar el código.
- Conservar los cambios válidos de ambos desarrolladores cuando corresponda.
- Ejecutar las pruebas después de resolver el conflicto.
- Consultar al responsable si no se entiende una modificación.
- No utilizar `git push --force` como método para solucionar conflictos.

Si el conflicto ocurre durante la integración hacia `dev`, resuélvelo en el proceso de integración de esa rama.

---

## 🛡️ 6. Buenas prácticas

### Commits descriptivos

Usar mensajes que indiquen el propósito del cambio:

|Prefijo|Uso|Ejemplo|
|---|---|---|
|`feat`|Nueva funcionalidad|`feat: agregar autenticación`|
|`fix`|Corrección de errores|`fix: corregir validación`|
|`refactor`|Mejora interna del código|`refactor: simplificar servicio`|
|`docs`|Documentación|`docs: actualizar README`|
|`test`|Pruebas|`test: agregar pruebas de usuarios`|
|`chore`|Mantenimiento|`chore: actualizar dependencias`|

### Coordinación del equipo

- Comunicar qué funcionalidades está desarrollando cada persona.
- Evitar modificar simultáneamente las mismas líneas sin coordinación.
- Actualizar las ramas personales con frecuencia.
- Integrar cambios pequeños y frecuentes.
- Revisar el estado de Git antes de realizar merges.
- No subir contraseñas, tokens ni secretos.
- Crear ramas adicionales de funcionalidad cuando una tarea sea grande o requiera aislamiento.

### Protección del repositorio

Si la plataforma lo permite, configurar reglas para:

- 🔒 Proteger `main` contra cambios directos.
- ✅ Exigir Pull Requests.
- 👀 Exigir aprobación de otro integrante.
- 🧪 Ejecutar pruebas automatizadas antes del merge.
- 🔐 Restringir el acceso de escritura según las responsabilidades del equipo.

---

## 🧰 7. Comandos útiles

### Consultar el estado

```
git status
```

### Ver las ramas locales y remotas

```
git branch -a
```

### Consultar el historial

```
git log --oneline --graph --decorate --all
```

### Ver los commits de Omar que no están en `main`

```
git fetch origin
git log --oneline origin/main..origin/devOmar
```

### Comparar los archivos modificados

```
git diff origin/main...origin/devOmar
```

### Actualizar la información del repositorio remoto

```
git fetch origin
```

---

## 📌 8. Resumen del proceso

1. **Actualizar:** incorporar los últimos cambios de `dev` en la rama personal.
2. **Desarrollar:** implementar la funcionalidad de forma independiente.
3. **Guardar:** crear commits descriptivos.
4. **Publicar:** subir los cambios a la rama personal.
5. **Revisar:** crear un Pull Request hacia `dev`.
6. **Integrar:** resolver conflictos y ejecutar pruebas.
7. **Validar:** verificar que la integración sea estable.
8. **Publicar:** crear un Pull Request de `dev` hacia `main`.

### 🏁 Regla final

- 🔵 `devOmar`: desarrollo de Omar.
- 🟣 `devAmanda`: desarrollo de Amanda.
- 🟢 `dev`: integración y pruebas.
- ⚫ `main`: código estable para producción.

**La regla más importante es mantener las ramas personales separadas, integrar los cambios de forma frecuente y no publicar en** **`main`** **sin revisión y pruebas.**