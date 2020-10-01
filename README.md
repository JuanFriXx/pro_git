
==========================================[Comandos]==========================================
Descargar para ver mejor

tsc app.ts      - Compila el archivo app.ts a app.js cada vez que lo ejecutas
tsc app.ts --w  - Espera por cambios en el archivo app.js para compilarlo automaticamente
tsc --w         - Espera por cambios de archivos .ts en la carpeta actual
tsc             - Compila todo lo que pueda de la carpeta actual

git init        - Genera la carpeta .git para poder subirlo a la plataforma
tsc --init      - Crea el archivo tsconfig.json


git remote add origin https://github.com    - Añadimos el repositorio de forma remota
    /JuanFriXx/pro_git.git                  a la plataforma git
git add .                               - Selecciona todo el contenido del repositorio actual
git commit -m "primer commit"           - Añade una cabecera a lo seleccionado anteriormente
git branch -M master                    - Marca la rama actual como master
git push -u origin master               - Sube todo lo seleccionado a la plataforma

git pull                                - Descarga desde la plataforma

node .\ejercicio01.js                   - Ejecuta el archivo .js en la terminal