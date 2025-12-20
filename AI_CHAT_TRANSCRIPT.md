# AI Chat Transcript — Portfolio project

**Tarix:** 2025-12-20

Bu fayl söhbətimizin xülasəsini və bu repoda edilən dəyişikliklərin siyahısını ehtiva edir. Fayl insan oxunuşlu xülasədir — daxili sistem mesajları və alətlərdən çıxan xam loqlar daxil deyil.

## Məqsəd
Məqsəd: Jekyll əsasında peşəkar portfel saytı yaratmaq və onu GitHub Pages üçün uyğun etmək. Sayt dizaynı çapıq, modern və responsivdir; yüngül JS (vanilla) və Jekyll layouts/includes istifadə edilir.

## Nəticə: qısa xülasə
- Tam Jekyll skeleti yaradıldı: layout, includes (header/footer), səhifələr (index, about, projects, contact).
- CSS: `assets/css/style.css` — responsive, dizayn tokenləri, dark mode, scroll reveal, accordion→tab UX, premium polish.
- JS: `assets/js/main.js` — mobil menyu toggle (accessible), theme toggle (localStorage), scroll reveal (IntersectionObserver), active nav, tab keyboard UX, media fallback.
- CI: `.github/workflows/jekyll.yml` əlavə edildi — push/PR üçün `bundle exec jekyll build` və bundler caching.
- README.md yeniləndi, istifadəyə dair qısa təlimatlar və workflow badge əlavə edildi.
- Projects UX: başlanğıcda card → accordion → tabbed interface kimi təkamül etdi; indi professional tab/card layout var.
- Contact form: ön tərəf demo form; e-poçt istəyi göstərildi və sonda istifadəçinin verdiyi real e-poçt `amilisgndrov1@gmail.com` `mailto:` linki ilə əlavə edildi.

## Fayllar (dəyişdirilmiş / yaradılmış)
(Aşağıdakı fayllar repoda yaradılıb və ya dəyişdirilib):

- `_config.yml` — repo info, baseurl
- `Gemfile` — github-pages gem
- `README.md` — professional README + CI badge
- `.github/workflows/jekyll.yml` — CI workflow

- Layouts & includes:
  - `_layouts/default.html`
  - `_includes/header.html`
  - `_includes/footer.html` (Codecademy → LinkedIn, footer-e mail əlavə edildi)

- Səhifələr:
  - `index.md` — hero (subtitle, badges, CTAs), rounded profile image
  - `about.md` — akademik və iştirak məlumatı
  - `projects.md` — tabbed project UI, media blocks, links
  - `contact.md` — form laguout; e-poçt `mailto:amilisgndrov1@gmail.com`

- Assets:
  - `assets/css/style.css` — əsas üslub, dizayn tokenləri, hero/footer polish, tabs, cards, contact form
  - `assets/js/main.js` — nav, theme, reveal, tabs, media fallback
  - `assets/images/profile-placeholder.svg` (istifadə olunur)
  - `assets/images/project1-hardware.jpg` (placeholder SVG)
  - `assets/images/project2-hour-of-code.jpg` (placeholder SVG)

## Əməliyyatlar (qısa xronologiya)
- Başlanğıc: Jekyll skeleti və əsas fayllar yaradıldı.
- Stilin və JS-in tədrici inkişafı: mövzu/skelet → dark mode + toggle → scroll reveal → tabbed Projects UX → premium polish.
- CI əlavə edildi və README yeniləndi.

## Lokal şəkildə necə işə salmaq olar
1. Ruby və Bundler quraşdırın.
2. Repoda kök qovluğunda çalışın:

```bash
bundle install
bundle exec jekyll serve --host 0.0.0.0
```

3. Brauzerdə açın: `http://localhost:4000/site1101/` (əgər `_config.yml` içində `baseurl` saxlanılıbsa).

## Tövsiyələr / növbəti addımlar
- `_config.yml` içində `url`, `repo_url`, və `baseurl` sahələrini öz GitHub istifadəçi adınıza görə yeniləyin (məs: `USERNAME`).
- Profil şəklinizi `assets/images/` qovluğuna əlavə edin və `index.md`-dəki placeholder-ı əvəz edin.
- Əgər istəsəniz, mən CI-ə testlər əlavə edə və ya yerli build çıxışının (`_site/`) yoxlanmasını avtomatlaşdıra bilərəm.

---

Əgər istəyirsinizsə, bu faylı başqa dilə (ingilisə) çevirə və ya tam söhbət keçidinin (raw transcript) daha geniş versiyasını əlavə edə bilərəm. Hər hansı əlavə dəyişiklik tələb edirsinizmi?