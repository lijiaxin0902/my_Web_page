# Jiaxin Li / 李佳欣 / リ ジアシン

A responsive academic website in Chinese, English, and Japanese. Plain HTML, CSS, and JavaScript; no dependencies or build step.

## Local development

From `/workspace/my_Web_page`, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Edit `index.html` for content, `style.css` for design, and `script.js` for language selection. Every translated element has `data-zh`, `data-en`, and `data-ja`. The top-right buttons work without reloading and remember the selected language when storage is available. Chinese is the default. Original research titles and author order are preserved across languages. A monogram is used in place of a personal photo.

## Content

The supplied CV and major research achievement sheet inform education, research topics, eight conference presentations, one manuscript under review, an award, and a research grant. In-review manuscripts are not represented as accepted or published papers. The Game Studies submission only appears in the separate dissertation sheet and is omitted pending status confirmation. Translated descriptions summarize the source material; original titles remain unchanged.

The source PDF and spreadsheet are intentionally not committed or linked as downloads because they contain private telephone and student-ID information. Contact uses the supplied email. The grant provider's Japanese name is retained in English to avoid implying an unverified official translation.

## GitHub Pages

Push to `main` in `lijiaxin0902/my_Web_page`. In repository **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**. `.github/workflows/pages.yml` deploys pushes to `main` and supports manual runs. The expected address after successful deployment is `https://lijiaxin0902.github.io/my_Web_page/`. Relative assets support the repository subpath. No custom domain or application secrets are required.
