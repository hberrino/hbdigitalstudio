# HB Digital Studio

Landing comercial estática de HB Digital Studio. Está construida con React y
Vite, se pre-renderiza durante el build y puede servirse directamente con
Nginx, sin mantener Node.js ejecutándose en producción.

## Desarrollo local

Requiere Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

## Comprobar la versión de producción

```bash
npm test
```

El comando genera `dist/`, valida que el HTML incluya el contenido comercial y
comprueba los recursos utilizados por la página.

## Publicar en una VPS Ubuntu con Nginx

### 1. Instalar las herramientas

```bash
sudo apt update
sudo apt install -y nginx rsync
```

Node.js solo es necesario para generar `dist/`. Puede instalarse en la VPS o el
build puede generarse en otra computadora y copiarse ya compilado.

### 2. Generar y copiar la web

Desde la raíz del proyecto:

```bash
npm ci
npm run build
sudo mkdir -p /var/www/hbdigitalstudio
sudo rsync -a --delete dist/ /var/www/hbdigitalstudio/
```

### 3. Activar la configuración de Nginx

```bash
sudo cp deploy/nginx/hbdigitalstudio.conf /etc/nginx/sites-available/hbdigitalstudio
sudo ln -s /etc/nginx/sites-available/hbdigitalstudio /etc/nginx/sites-enabled/hbdigitalstudio
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

La configuración inicial usa `server_name _;`, por lo que funciona directamente
con la IP pública. Cuando el dominio apunte a la VPS, reemplazá `_` por el
dominio y su variante `www`, por ejemplo:

```nginx
server_name ejemplo.com www.ejemplo.com;
```

### 4. Agregar HTTPS cuando el dominio esté configurado

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d ejemplo.com -d www.ejemplo.com
```

Certbot obtiene el certificado, configura la redirección HTTPS y programa su
renovación automática.

## Actualizaciones posteriores

Después de cada cambio:

```bash
git pull origin main
npm ci
npm test
sudo rsync -a --delete dist/ /var/www/hbdigitalstudio/
sudo nginx -t
sudo systemctl reload nginx
```

Los archivos de la web se sirven con caché prolongada y nombres versionados.
El HTML no se cachea, así cada publicación aparece inmediatamente.
