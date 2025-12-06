# CONTEXTO MAESTRO: Proyecto Videojuego "El Camino de Keila" (v2.0)

**ESTE DOCUMENTO ES LA FUENTE ÚNICA DE VERDAD (SINGLE SOURCE OF TRUTH).**
Cualquier instrucción de desarrollo debe alinearse estrictamente con las decisiones aquí descritas.

---

## 1. Resumen Ejecutivo y Restricciones
Juego de plataformas 2D ("Giftware") para celebrar el 30 cumpleaños de **Keila**. Una travesía introspectiva sobre el crecimiento, la sombra y la integración del ser.

* **Título:** El camino de Keila.
* **Plazo:** 1 mes (Deadline: Cumpleaños de 30).
* **Distribución:** Web + Ejecutable Windows (`.exe` vía Electron).
* **Arquitectura:** Rama única (`main`).
* **Persistencia:** Sistema de Guardado Local (`localStorage`) para mantener el historial de avance entre sesiones.

---

## 2. Stack Tecnológico (Definitivo)

| Componente | Tecnología | Justificación |
| :--- | :--- | :--- |
| **Lenguaje** | JavaScript (ES6+) | Universalidad y compatibilidad con web/desktop. |
| **Motor** | **Kaplay.js** | Sintaxis ECS concisa, ideal para prototipado rápido e IA. |
| **Empaquetado** | **Electron Forge** | Conversión de la web app a `.exe` nativo. |
| **Audio** | **Howler.js / Kaplay** | Assets de *BloodPixelHero* (Freesound). |
| **Arte** | Mix Media | Sprites Pixel Art sobre **Fotos Reales** (Fondos/Tarot). |

---

## 3. "Ingeniería de las Obviedades" (Mecánicas de Juego)

### 3.1 Loop Principal (Vida y Daño)
* **Salud Total:** 5 Corazones.
* **Daño (El "Honguito Malo"):** El objeto dañino se llama paradójicamente **"Salud"** (representando hipocondría o pensamientos intrusivos). Si se toca, **resta** una vida.
* **Curación (Recuperar Vida):** Elementos que restauran corazones perdidos:
    * Ítem: *Sillón de Terapia*.
    * Ítem: *Lapicera y Cuaderno*.
    * Ítem: *Burbuja de texto "¿Cómo estás?"*.

### 3.2 El "Upside Down" (Modo Caos)
Una dimensión alternativa regida por **Camelia** (La Sombra/Evil Mica).
* **Activación:** Camelia aparece aleatoriamente: *"¿Deseas entrar en el caos?"*.
* **Efectos de Estado:**
    * Pantalla volteada verticalmente (Flip Y).
    * Inversión de colores (Negativo) u oscurecimiento severo.
    * **CONTROLES INVERTIDOS** (Izquierda es derecha, saltar es bajar).
    * **Aislamiento:** Las compañías desaparecen; el jugador está solo.
* **Salida (Condición de Victoria):**
    1.  Encontrar a **"Tu Yo del Upside Down"**.
    2.  Localizar el ítem **"Terapia"** (visible pero bloqueado por obstáculos/pinches).
    3.  [cite_start]**La Pregunta Poética:** Responder una pregunta existencial basada en *Caramelo de Trampas* [cite: 1] para volver:
        * [cite_start]*Ejemplo:* "Si todo es trampa y la trampa no..." -> **"...existe"** [cite: 278-279].
        * *Ejemplo:* "¿Qué es la sangre cuando su altar te deja de...?" [cite_start]-> **"...rodillas"** [cite: 166-167].

### 3.3 Sistema de Compañías y Sacrificio
* **Mecánica de Avance:** Para pasar de un "Mundo/Etapa" al siguiente, Keila debe **dejar atrás** a una de sus compañías activas.
* **Decisión Final:** En la última pantalla, debe elegir a quién deja definitivamente para cruzar el umbral de los 30 años.
* **Audio Dinámico:** La música cambia sutilmente según la compañía activa.

### 3.4 Mecánica de Siembra (Planting)
* **Evento:** Montículo de tierra en etapas tempranas. Decisión: Plantar o ignorar.
* **Consecuencia (Payoff):**
    * *Si plantó:* Aparece un **Puente de Planta** en una etapa avanzada para cruzar un abismo.
    * *Si NO plantó:* El puente no existe; se debe atravesar un camino peligroso de "Pensamientos Intrusivos".

---

## 4. Narrativa y Evolución (Ludonarrativa)

### 4.1 Intro: El Nacimiento
* Pantalla negra. Texto: *"La vida es caótica."*
* Prompt: *"¿Deseas nacer?"* (Sí / No).
* Al aceptar, el personaje cae al escenario con físicas activas.

### 4.2 Evolución del Personaje (Skins)
El personaje cambia según ítems y etapa, pero respeta una cronología base:
1.  **Maria Micaela** (Infancia).
2.  **Mica** (Adolescencia).
3.  **Srta. Entropía** (Juventud caótica).
4.  **Roja** (Madurez previa).
5.  **Keila** (Actualidad - Forma Final).

### 4.3 Clímax: La Fusión con la Sombra
* **Jefe Final:** No se derrota a golpes. Se resiste.
* **Revelación:** La figura encapuchada es **Camelia** (Evil Mica).
* **Resolución:** Keila debe abrazar a Camelia.
* **Efecto:** Revelacion del nombre Camelia, transformandose en Micaela,fusión épica, música triunfal, los colores se estabilizan. Integración de la sombra.

---

## 5. Activos y Estética
* **Estilo:** Pixel art sobrepuesto en **Fotografías Reales** (Fondos/Plataformas).
* **UI:** Barra de 5 corazones, Carta de Tarot (indicador de nivel/estado).
* [cite_start]**Textos:** Uso de *Caramelo de Trampas* [cite: 1] para narrativa y acertijos.