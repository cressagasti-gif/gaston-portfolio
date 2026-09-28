# Gastón Cressa · Portfolio

Portfolio personal — sitio estático en HTML/CSS/JS puro, sin dependencias.

**Tema:** Acer Nitro (rojo `#FF2D2D` sobre negro `#0D0D0D`).

## Estructura

```
index.html          ← markup
style.css           ← tema y layout
main.js             ← scroll reveal, parallax, nav activo
assets/             ← SVG generados con gen_assets.py
  matrix-rain.svg     lluvia Matrix + nombre en pixel
  terminal.svg        terminal animada (escribe sola)
  profile-card.svg    tarjeta de perfil
  emblem-*.svg        emblemas (sharingan, shuriken, ojo, anillos)
  badge-linkedin.svg  badge de LinkedIn dibujado a mano
gen_assets.py       ← regenera los SVG (ver repo cressagasti-gif/cressagasti-gif)
```

## Los SVG son propios

`matrix-rain.svg` y los emblemas se generan con un script de Python, no se
diseñan a mano:

```powershell
python ..\github-profile\gen_assets.py
```

- **Fuente pixel 5×7 propia** para el nombre (`.#` por carácter)
- **Fuente CJK** para 神羅天征 en la terminal
- El binario de la franja codifica `Sekai ni itami o` (verificable)

Después de regenerar, si los subís a GitHub Pages conviene subir el
parámetro `?v=N` de los `<img>` para romper la caché.

## Desplegar

GitHub Pages sirve desde `main` / raíz. Para redeployar: push a `main`.

## Contacto

- GitHub — [@cressagasti-gif](https://github.com/cressagasti-gif)
- LinkedIn — [in/gaston-cressa](https://www.linkedin.com/in/gaston-cressa-9ba539250/)
- Instagram — [@gasti_98x](https://www.instagram.com/gasti_98x/)
