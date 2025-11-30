# CONTEXTO MAESTRO: Proyecto Videojuego Conmemorativo "30 Años" - KEILA'S JOURNEY

**ESTE DOCUMENTO ES LA FUENTE ÚNICA DE VERDAD (SINGLE SOURCE OF TRUTH).**
Cualquier instrucción generada por el Agente debe alinearse estrictamente con las decisiones de arquitectura, stack tecnológico y mecánicas de juego aquí descritas.

---

## 1. Resumen Ejecutivo y Restricciones
El objetivo es desarrollar un videojuego de plataformas 2D ("Giftware") para celebrar el 30 cumpleaños de **Keila**.

### Restricciones Críticas
* **Plazo:** 1 mes improrrogable.
* **Desarrollador:** 1 persona (asistida por Google Antigravity).
* **Distribución Dual:** Web (móvil/escritorio) + Ejecutable Windows (`.exe`).
* **Arquitectura:** Fuente Única (Single Source). NO bifurcar ramas por plataforma.

---

## 2. Stack Tecnológico (Selección Definitiva)

| Componente | Tecnología Seleccionada | Justificación Técnica |
| :--- | :--- | :--- |
| **Lenguaje** | JavaScript (ES6+) | Universalidad y compatibilidad con Electron. |
| **Motor** | **Kaplay.js** | Sintaxis ECS concisa (`add([body(), area()...])`) ideal para IA. |
| **IDE / IA** | Google Antigravity | Desarrollo agéntico (Gemini 3 Pro). |
| **Empaquetado** | **Electron Forge** | Convierte la web app en un `.exe` nativo. |
| **Hosting** | GitHub Pages | Despliegue automático. |
| **Repo** | GitHub | Trunk-Based Development (Rama `main` única). |

---

## 3. Diseño de Mecánicas y Ludonarrativa (CORE DEL JUEGO)

### 3.1 Filosofía de Diseño
* **"Todos los caminos llevan a Roma (30 años)":** Las decisiones del jugador (subir/bajar puentes, tomar desvíos) pueden alterar la dificultad o el tiempo de recorrido, pero el destino final (el cumpleaños de 30) es inevitable.

### 3.2 Sistema de Evolución y Personajes
El personaje principal es **Keila**, pero atraviesa distintas encarnaciones. La evolución/involución es dinámica (estilo Mario Bros) según los ítems recogidos, pero tiene restricciones por etapa.

**Línea Evolutiva:**
1.  **Maria Micaela** (Base más básica)
2.  **Mica**
3.  **Srta Entropía**
4.  **Roja**
# CONTEXTO MAESTRO: Proyecto Videojuego Conmemorativo "30 Años" - KEILA'S JOURNEY

**ESTE DOCUMENTO ES LA FUENTE ÚNICA DE VERDAD (SINGLE SOURCE OF TRUTH).**
Cualquier instrucción generada por el Agente debe alinearse estrictamente con las decisiones de arquitectura, stack tecnológico y mecánicas de juego aquí descritas.

---

## 1. Resumen Ejecutivo y Restricciones
El objetivo es desarrollar un videojuego de plataformas 2D ("Giftware") para celebrar el 30 cumpleaños de **Keila**.

### Restricciones Críticas
* **Plazo:** 1 mes improrrogable.
* **Desarrollador:** 1 persona (asistida por Google Antigravity).
* **Distribución Dual:** Web (móvil/escritorio) + Ejecutable Windows (`.exe`).
* **Arquitectura:** Fuente Única (Single Source). NO bifurcar ramas por plataforma.

---

## 2. Stack Tecnológico (Selección Definitiva)

| Componente | Tecnología Seleccionada | Justificación Técnica |
| :--- | :--- | :--- |
| **Lenguaje** | JavaScript (ES6+) | Universalidad y compatibilidad con Electron. |
| **Motor** | **Kaplay.js** | Sintaxis ECS concisa (`add([body(), area()...])`) ideal para IA. |
| **IDE / IA** | Google Antigravity | Desarrollo agéntico (Gemini 3 Pro). |
| **Empaquetado** | **Electron Forge** | Convierte la web app en un `.exe` nativo. |
| **Hosting** | GitHub Pages | Despliegue automático. |
| **Repo** | GitHub | Trunk-Based Development (Rama `main` única). |

---

## 3. Diseño de Mecánicas y Ludonarrativa (CORE DEL JUEGO)

### 3.1 Filosofía de Diseño
* **"Todos los caminos llevan a Roma (30 años)":** Las decisiones del jugador (subir/bajar puentes, tomar desvíos) pueden alterar la dificultad o el tiempo de recorrido, pero el destino final (el cumpleaños de 30) es inevitable.

### 3.2 Sistema de Evolución y Personajes
El personaje principal es **Keila**, pero atraviesa distintas encarnaciones. La evolución/involución es dinámica (estilo Mario Bros) según los ítems recogidos, pero tiene restricciones por etapa.

**Línea Evolutiva:**
1.  **Maria Micaela** (Base más básica)
2.  **Mica**
3.  **Srta Entropía**
4.  **Roja**
5.  **Keila** (Forma final/actual)

**Reglas por Pantalla (Etapa):**

| Etapa | Edad Aprox | Contexto Visual | Regla de Evolución |
| :--- | :--- | :--- | :--- |
| **1** | 0 - 10 | **Campestre / Colmenas** | **Libre.** Inicia como *Maria Micaela*. Puede evolucionar a todas y volver a la base. |
| **2** | 10 - 20 | **Escuela / Campo Mixto** | **Suelo elevado.** Inicia como *Mica*. NO puede involucionar a *Maria Micaela*. |
| **3** | 20 - 25 | **Ciudad / Cine / Fotos** | **Suelo elevado.** Inicia como *Mica*. NO puede involucionar a *Maria Micaela*. |
| **4** | 25 - 30 | **Abstracto / Final** | **Suelo elevado.** Inicia como *Mica*. |

> **Nota:** Cada versión tendrá un diseño visual distinto y un "Poder Único" (a definir en implementación, dejar placeholder en código).

### 3.3 Sistema de "Compañías" (Vidas y Debuffs)
No hay barra de vida tradicional. **La vida son las Compañías.**
Los compañeros no siempre están presentes. **Aparecen como EVENTOS** al interactuar con ciertos elementos del nivel.
*   Al activarse el evento, se le da a elegir al jugador quién quiere que lo acompañe (según las opciones disponibles en esa etapa).
*   Si la compañía desaparece (por proteger de un golpe), el jugador puede quedar solo un tiempo hasta el siguiente evento.

* **Compañía Protectora (Escudo):** Si el jugador choca con un obstáculo dañino, la compañía absorbe el golpe y desaparece (funciona como +1 Vida).
* **Compañía Dañina (Tóxica):** Al elegirlos o al recibir daño, penalizan al jugador (restan vida real o fallan en proteger).

```javascript
// Patrón de diseño obligatorio
function inputJump() {
   return isKeyPress("space") || uiJumpBtn.isClicked();
}
```