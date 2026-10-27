# Jiaxin Li · Academic Website

A responsive bilingual academic homepage for GitHub Pages. Plain HTML, CSS, and JavaScript; no build step or package installation.

## Local development

From this checkout, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

The entry point is `index.html`. Edit content and both `data-en` / `data-zh` attributes there; styles are in `style.css`, language switching in `script.js`. A monogram is used until a portrait is supplied. Confirm the displayed name before publishing. Affiliation, biography, research, publications, and email still need real information; no publication records are invented.

## GitHub Pages

Push these files to the `main` branch of `lijiaxin0902/my_Web_page`. In GitHub repository **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**. The included workflow deploys pushes to `main` and supports manual runs. After a successful deployment the expected public address is `https://lijiaxin0902.github.io/my_Web_page/` (not live until deployed). No custom domain or secrets are required. Relative asset paths support this repository subpath.

Before publishing, replace placeholder personal information, verify all public details, and add paper/profile links only when available.
