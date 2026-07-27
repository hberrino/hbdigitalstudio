import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const distRoot = new URL("../dist/", import.meta.url);

test("genera una landing estática completa para Nginx", async () => {
  const html = await readFile(new URL("index.html", distRoot), "utf8");
  const assets = await readdir(new URL("assets/", distRoot));

  assert.match(html, /<html lang="es">/);
  assert.match(html, /HB Digital Studio \| Desarrollo web para negocios/);
  assert.match(html, /Diseñamos y desarrollamos páginas web/);
  assert.match(html, /terminás de abonar cuando el resultado cumple/);
  assert.match(html, /Web completa para tu negocio/);
  assert.match(html, /https:\/\/hbdigitalstudio\.com\/og-hb-digital-studio\.png/);
  assert.ok(assets.some((file) => file.endsWith(".js")));
  assert.ok(assets.some((file) => file.endsWith(".css")));
  await access(new URL("fonts/geist-latin.woff2", distRoot));
  await access(new URL("fonts/manrope-latin.woff2", distRoot));
  await assert.rejects(access(new URL("server/", distRoot)));
});

test("conserva los recursos comerciales utilizados por la interfaz", async () => {
  const requiredAssets = [
    "logohb.png",
    "og-hb-digital-studio.png",
    "icons8-amazon-web-services-48.png",
    "icons8-búsqueda-50.png",
    "icons8-candado-50.png",
    "icons8-cloudflare-48.png",
    "icons8-correo-50.png",
    "icons8-cursor-64.png",
    "icons8-instagram-50.png",
    "icons8-teléfono-celular-64.png",
    "icons8-whatsapp-50.png",
  ];

  await Promise.all(requiredAssets.map((asset) => access(new URL(`dist/${asset}`, projectRoot))));
});

test("incluye una configuración de Nginx sin servidor de aplicación", async () => {
  const nginx = await readFile(new URL("deploy/nginx/hbdigitalstudio.conf", projectRoot), "utf8");
  const packageJson = JSON.parse(await readFile(new URL("package.json", projectRoot), "utf8"));

  assert.match(nginx, /root \/var\/www\/hbdigitalstudio;/);
  assert.match(nginx, /try_files \$uri \$uri\/ \/index\.html;/);
  assert.doesNotMatch(nginx, /proxy_pass|fastcgi_pass/);
  assert.deepEqual(Object.keys(packageJson.dependencies).sort(), [
    "lucide-react",
    "react",
    "react-dom",
  ]);
});
