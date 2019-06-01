# jsMultiform
Animated Multiform library

Getting started
===============

Include Js and Css
```html
    <link rel="stylesheet" href="multiform.css">
    <script src="multiform-min.js"></script>
``` 

Init Library
============

```js
    jsMultiform.init(
        {
            "time": "Time in seconds"
        }
    )
```

Next and Previous Section
=========================


```js
jsMultiform.nextSection();
jsMultiform.previousSection();
```

HTML Setup
==========
There is no limit to no of sections

```html
<section id="multiform-js">
    <section class="multipart-sec">   
    .... section 1 content    
    </section>
    <section class="multipart-sec">
    .... section 2 content
    </section>
    <section class="multipart-sec">
    .... section 3 content
    </section>
    <section class="multipart-sec">
    .... section 4 content
    </section>
</section>
```