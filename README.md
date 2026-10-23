# Glosario Técnico

App de celular (Android / iOS) con el glosario de palabras técnicas en inglés que fuimos anotando durante el año en **Inglés Técnico II**. Además de consultarlas, sirve para practicarlas y escucharlas, con la ayuda de **Nena**, una gatita que reacciona a lo que hacés.

## Qué tiene

- **Glosario**: buscador (en inglés o en español) y filtro por categoría. Cada palabra tiene traducción, definición, un ejemplo de uso y botones para escuchar la palabra y el ejemplo con pronunciación en inglés.
- **Práctica**: tres minijuegos de 10 preguntas con las palabras del glosario:
  - *Inglés → Español*: elegir la traducción correcta.
  - *Español → Inglés*: elegir la palabra en inglés.
  - *Escucha*: Nena dice la palabra y hay que reconocerla.

  Al final se ve el puntaje y las palabras para repasar. Nena salta cuando acertás, se golpea cuando errás y se marea si errás varias seguidas.
- **Traductor**: primero busca la palabra en el glosario. Si no está, la traduce con la API de MyMemory.
- **Acerca de**: créditos del proyecto.

## Tecnologías

- [Expo](https://expo.dev) (SDK 57) + React Native + TypeScript
- Expo Router para la navegación por pestañas
- `expo-speech` para la pronunciación y `expo-haptics` para la vibración
- [MyMemory](https://mymemory.translated.net/) para las traducciones

## Cómo correrla

Hace falta [Node.js](https://nodejs.org) y la app **Expo Go** en el celular.

```bash
npm install
npx expo start
```

Escaneá el código QR con Expo Go (Android) o con la cámara (iOS). Si se queda trabada cargando, probá con:

```bash
npx expo start --offline   # si la PC no tiene buena conexión a internet
npx expo start --tunnel    # si el celular no llega a la PC por el Wi-Fi
```

## Cómo agregar palabras

Las palabras están en [`src/data/data.ts`](src/data/data.ts). Cada una tiene esta forma:

```ts
{
  id: "bandwidth",
  word: "Bandwidth",
  translation: "Ancho de banda",
  definition: "Cantidad de datos que pasan por segundo.",
  example: "Video calls need a lot of bandwidth.",
  category: "Networking",
},
```

Las categorías nuevas aparecen solas en el filtro del glosario, y las palabras nuevas entran automáticamente en los minijuegos.

## Estructura

```
src/
  app/          pantallas (cada archivo de app/(tabs) es una pestaña)
  components/   componentes reutilizables (tarjetas, botones, mascota, minijuegos)
  services/     lógica: búsqueda, quiz, traducción, voz y vibración
  data/         las palabras del glosario
  mascot/       animaciones de Nena
  constants/    colores y estilos compartidos
```

## Créditos

- Mascota: *Cat Sprite Pack* por julesleech (itch.io)
- Interpretación de la mascota: Negrita “Nena” (mascota de Tiziana Oldoni)
- Traducción: MyMemory
- Tipografía: Nunito (Google Fonts)
