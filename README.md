# Clonar el proyecto
1. Aceptar la invitación en el correo.
2. 🛑 OJO! Estar ubicado sobre la carpeta "home", esto se logra con el comando `cd`.<br>
![cd home](/img/.readme/cd-home.png)
3. Verificar que la ubicación actual no tenga un repo. Esto se puede verificar con el comando `git status`. Si aparece información de git, me escribes.
Lo correcto es que el resultado sea similar al siguiente:<br>
![git status](/img/.readme/git-status.png)
Si no tuviste problemas con git, procedemos a clonar.
4. `git clone git@github.com:iicarlosjimenez/devto_js.git`. Para clonar el proyecto
5. `cd practica_grupo3_G32`. Para acceder al proyecto
6. `git checkout development`. Para saltar a la rama con los cambios actuales.
7. Creamos una rama con el formato "feat/{nombre}" donde {nombre} debe ser reemplazado por el nombre de nuestro "feature". 
Por ejemplo si mi feature es "header", el comando que debo ejecutar debe ser `git checkout -b feat/header`. Si me feature es "posts", el comando que debo ejecutar debe ser `git checkout -b feat/posts`.

# Guiarse de la página de dev.to
1. Vamos a la página de [DEV.TO](https://dev.to)
1. Click secundario sobre la página y seleccionar la opción "Inspeccionar"<br>
![inspeccionar](/img/.readme/inspeccionar-firefox.png)
![inspeccionar](/img/.readme/inspeccionar-chrome.png)
1. Dar click sobre el botón inspeccionar elemento<br>
![inspeccionar](/img/.readme/btn-inspeccionar-firefox.png)<br>
![inspeccionar](/img/.readme/btn-inspeccionar-chrome.png)
1. Seleccionar el elemento que queremos obtener sus reglas de diseño
1. Analizar las reglas de diseña que aparecen en la pestaña "Reglas"

# Mezclar cambios en ramas

<p>Teniendo como ejemplo, queremos jalar los cambios de la rama 'development' a nuestra rama de trabajo 'feat/header'.</p>
<p><b>🛑 Recuerda estos nombres y ponles atención porque serán ocupados más adelante.</b></p>
<p><b>⚠️ Ten a la mano el nombre de la rama sobre la que vas a trabajar.</b></p>

## Opción 1.
1. Primero hay que moverse a la rama donde están los cambios más actuales, para ello, utilizamos el comando `git checkout development`. 
2. Bajar/descargar los cambios más recientes con los siguientes comandos:
      - primero, `git fetch`
      - luego, `git pull`
   Estos comandos hacen que los cambios que están actualmente en GitHub se descarguen a nuestro computadora.
3. Después, moverse a la rama en donde queremos mezclar los cambios. Como ejemplo, aplicar los cambios sobre la rama "feat/posts". Para ello, utilizamos el comando `git checkout feat/post`. Si la rama sobre la que se va a trabajar fuera "feat/icons", entonces se ejecuta el comando `git checkout feat/icons`.
4. Ejecutamos el comando `git merge development`. 🛑 OJO Utilizamos <b>"development"</b> porque es el nombre de ejemplo.
5. Resolver conflictos, en caso de tenerlos.

## Opción 2.
1. Moverse a la rama en donde queremos mezclar los cambios. Como ejemplo, aplicar los cambios sobre la rama "feat/posts". Para ello, utilizamos el comando `git checkout feat/post`. Si la rama sobre la que se va a trabajar fuera "feat/icons", entonces se ejecuta el comando `git checkout feat/icons`.
4. Ejecutamos el comando `git merge origin/development`. 🛑 OJO, nótose que ahora utilizamos <b>"origin/development"</b> porque estamos obteniendo directamente de lo que se encuentra en GitHub, no fue necesario ir a la rama y bajar cambios como lo hicimos en la opción 1.
