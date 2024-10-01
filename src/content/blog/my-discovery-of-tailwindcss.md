---
title: "Backend Devs and CSS: A love-Hate Relationship"
description: "My discovery of tailwindCSS"
pubDate: 'Oct 01 2024'
heroImage: "../img/tailwindcss.webp"
---

![php image](/img/tailwindcss.webp)

## My discovery of tailwindCSS

### **Difference between tailwindCSS and other css framework**: 
Tailwind CSS is a CSS framework utility that lets you build modern, responsive designs efficiently. Unlike other frameworks, Tailwind only loads the styles you need, optimizing your application's performance.

### **Using Utilities**:
#### Example of an HTML Class

```html
<h1 class="text-center text-lg text-green-400">Hello world</h1>
```

#### Generated CSS styles

```css
.text-center {
  text-align: center;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(74, 222, 128 / var(--tw-text-opacity));
}
```

### **Creating Custom Classes**:
#### With Tailwind, you're not limited to the default classes. You can create your own CSS classes.

```html
<p class="text-[50px]">Hello world</p>
```

#### Generated CSS styles

```css
.text-\[50px\] {
  font-size: 50px;
}
```

### **Add custom classes to existing utilities**:
#### You can add custom classes in the configuration file to extend the default utilities.
```yaml
/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
        colors: {
            chesnut: '#973F20'
        }
        }
    },
    plugins: [],
}
```

#### Example of using the custom class
```html
<p class="text-lg text-chesnut bg-stone-100 p-4">Chesnut color</p>
```

### **Creating Custom Classes**:
#### Tailwind also makes it easy to implement a dark mode. Simply add the following configuration:
```yaml
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    theme: {
        extend: {
        // ...
        }
    },
    plugins: [],
}
```

#### Implementation example:

```html
<div class="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black">
  <h3 class="text-base font-medium tracking-tight text-slate-900 dark:text-white">This is a text element</h3>
  <p class="mt-2 text-sm text-slate-500 dark:text-blue-100">This is an even longer p tag element</p>
</div>

<button id="toggleDark" class="mt-8 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900" onclick="document.body.classList.toggle('dark')">Toggle dark mode</button>

<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", () => {
    const toggleDark = document.getElementById('toggleDark')
    toggleDark.addEventListener('click', function() {
      if(document.documentElement.classList.includes('dark')) {
        document.documentElement.classList.remove('dark')
      }
      else {
        document.documentElement.classList.add('dark')
      }
      alert("click!")
    });
  });
</script>
```

### **Creating layers**:
#### With Tailwind, you can create your own layers to simplify reading and use your own classes.

#### Example of Component Definition

```yaml
@layer components {
  .card {
    @apply m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black;
  }
}
```
