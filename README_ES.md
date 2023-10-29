<h1 align="center">Complementos de ChatGPT</h1>

- [Implementado en Hugging Face](https://huggingface.co/login?next=%2Fspaces%2Fngoctuanai%2Fchatgptfree%3Fduplicate%3Dtrue)

Un clic para obtener una interfaz de usuario web ChatGPT multiplataforma bien diseñada.

## Índice
- [Características](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Features)
- [Hoja de ruta](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Roadmap)
- [Novedades](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Whats-New)
- [Comenzar](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Get-Started)
- [Mantener actualizado](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Keep-Updated)
- [Contraseña de acceso](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Access-Password)
- [Requisitos](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md/tree/main#requirements)
- [Desarrollo](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md/tree/main#development)
- MÁS...
## Características
- **Implemente gratis con un clic** en menos de 1 minuto
- Cliente compacto (~5 MB) en Linux/Windows/MacOS, [descárgalo ahora](https://github.com/Yidadaa/ChatGPT-Next-Web/releases)
- Totalmente compatible con llms autoimplementados, recomendado para usar con [RWKV-Runner](https://github.com/josStorer/RWKV-Runner) o [LocalAI](https://github.com/go-skynet/ IA local)
- Privacidad primero, todos los datos almacenados localmente en el navegador
- Soporte de Markdown: LaTex, sirena, resaltado de código, etc.
- Diseño responsivo, modo oscuro y PWA
- Rápida velocidad de carga de la primera pantalla (~100 kb), admite respuesta de transmisión
- Nuevo en v2: crea, comparte y depura tus herramientas de chat con plantillas de mensajes (máscara)
- Impresionantes indicaciones impulsadas por [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) y [awesome-chatgpt-prompts](https://github.com/ f/avisos-de-chatgpt-impresionantes)
- Comprime automáticamente el historial de chat para admitir conversaciones largas y al mismo tiempo guarda tus tokens
- I18n: inglés, 简体中文, 繁体中文, 日本語, Français, Español, Italiano, Türkçe, Deutsch, Tiếng Việt, Русский, Čeština, 한국어, Indonesia.
## Mapa vial
- [x] Mensaje del sistema: fijar un mensaje definido por el usuario como mensaje del sistema [#138](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/138)
- [x] Mensaje de usuario: el usuario puede editar y guardar mensajes personalizados en la lista de mensajes
- [x] Plantilla de mensaje: cree un nuevo chat con mensajes predefinidos en contexto [#993](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/993)
- [x] Compartir como imagen, compartir en ShareGPT [#1741](https://github.com/Yidadaa/ChatGPT-Next-Web/pull/1741)
- [x] Aplicación de escritorio con tauri
- [x] Modelo de autohospedaje: Totalmente compatible con [RWKV-Runner](https://github.com/josStorer/RWKV-Runner), así como con la implementación del servidor de [LocalAI](https://github.com /go-skynet/LocalAI): llama/gpt4all/rwkv/vicuna/koala/gpt4all-j/cerebras/falcon/dolly, etc.
- [] Complementos: admite búsqueda de red, calculadora, cualquier otra API, etc. [#165](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/165)
## Qué hay de nuevo
- 🚀 Se lanzó v2.0, ahora puedes crear plantillas dinámicas y convertir tus ideas en realidad. Lea esto: [Consejos de ingeniería de mensajes de ChatGPT: mensajes de cero, uno y pocos disparos](https://www.allabtai.com/prompt-engineering-tips-zero-one-and-few-shot-prompting/).
- 🚀 v2.7 ¡compartamos conversaciones como imagen o compartamos en ShareGPT!
- 🚀 v2.8 ¡ahora tenemos un cliente que se ejecuta en todas las plataformas!
## Empezar
1. Obtenga [Clave API de OpenAI](https://platform.openai.com/account/api-keys);
2. Haga clic en recordar que `CÓDIGO` es la contraseña de su página;
3. Disfruta :)
## Mantener actualizado
Si ha implementado su propio proyecto con solo un clic siguiendo los pasos anteriores, es posible que encuentre el problema de "Actualizaciones disponibles" que aparece constantemente. Esto se debe a que creará un nuevo proyecto para usted de forma predeterminada en lugar de bifurcar este proyecto, lo que resultará en la incapacidad de detectar las actualizaciones correctamente.

Le recomendamos que siga los pasos a continuación para volver a implementar:

- Eliminar el repositorio original;
- Utilice el botón de bifurcación en la esquina superior derecha de la página para bifurcar este proyecto;
- Elija e implemente nuevamente
## Contraseña de acceso
Este proyecto proporciona control de acceso limitado. Agregue una variable de entorno llamada "CÓDIGO" en la página de variables de entorno de Vercel. El valor debe ser contraseñas separadas por comas como esta:

```
código1, código2, código3
```

Después de agregar o modificar esta variable de entorno, vuelva a implementar el proyecto para que los cambios surtan efecto.
### `OPENAI_API_KEY` (obligatorio)

Su clave API de Openai.

### `CÓDIGO` (opcional)

Contraseña de acceso, separada por coma.

### `BASE_URL` (opcional)

> Predeterminado: `https://api.openai.com`

> Ejemplos: `http://tu-openai-proxy.com`

Anular la URL base de solicitud de la API de Openai.

### `OPENAI_ORG_ID` (opcional)

Especifique el ID de la organización OpenAI.

### `HIDE_USER_API_KEY` (opcional)

> Predeterminado: Vacío

Si no desea que los usuarios ingresen su propia clave API, establezca este valor en 1.

### `DISABLE_GPT4` (opcional)

> Predeterminado: Vacío

Si no desea que los usuarios utilicen G
