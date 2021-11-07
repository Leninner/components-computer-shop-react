# Computer Components Shop

> Para importar fuentes de google con sass podemos hacer esto:

```scss
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Quicksand:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Quicksand', sans-serif;
}
```

> Para importar variables globales en SCSS solo basta utilizar:

- @import './Vars.scss';

Vars.scss

```scss
:root {
  --white: #ffffff;
  --black: #000000;
  --very-light-pink: #c7c7c7;
  --text-input-field: #f7f7f7;
  --hospital-green: #acd9b2;
  --sm: 14px;
  --md: 16px;
  --lg: 18px;
}
```
