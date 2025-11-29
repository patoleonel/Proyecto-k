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
El jugador elige quién lo acompaña. Estos NPCs flotan/siguen al jugador.

* **Compañía Protectora (Escudo):** Si el jugador choca con un obstáculo dañino, la compañía absorbe el golpe y desaparece (funciona como +1 Vida).
* **Compañía Dañina (Tóxica):** Al elegirlos o al recibir daño, penalizan al jugador (restan vida real o fallan en proteger).

#### Tabla de Lógica de Compañías por Etapa

| Etapa | Compañía | Efecto (Mecánica) |
| :--- | :--- | :--- |
| **1 (0-10)** | Abeja, Madre, Padre, Hermana | **PROTECTOR.** Absorben 1 golpe y desaparecen. (Elección libre). |
| **2 (10-20)** | Abeja, Madre | **PROTECTOR.** Absorben 1 golpe y desaparecen. |
| **2 (10-20)** | Padre, Hermana | **DAÑINO.** Al elegirlos, la vitalidad baja 1 punto inmediatamente. |
| **3 (20-25)** | Juli, Iva, Conde Patula, Cris, Marti, Luz | **PROTECTOR.** Absorben 1 golpe y desaparecen. |
| **3 (20-25)** | Hermana, Un Varón | **DAÑINO (Traición).** No protegen. Al topar con obstáculo, desaparecen Y Keila pierde 1 vida (Daño x2 o Escudo fallido). |
| **4 (25-30)** | Conde Patula (Voz/Box) | **GUÍA.** Solo diálogo/acompañamiento narrativo. |
| **4 (25-30)** | Algún Varón | **DAÑINO.** Resta vida al impactar y desaparece. |

---

## 4. Control Híbrido (Input Adapter)
El código debe abstraer la entrada para soportar Teclado y Táctil simultáneamente.

```javascript
// Patrón de diseño obligatorio
function inputJump() {
   return isKeyPress("space") || uiJumpBtn.isClicked();
}