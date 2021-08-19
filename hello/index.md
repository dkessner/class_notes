---
layout: page
title: Hello
permalink: /hello/
---

Blah blah blah

```javascript
function f() {
    console.log("Hello, world!");
}
```

$$ e^x = \sum_{n=0}^\infty \frac{x^n}{n!} $$

<br/>
<div class="sketch-container" id="sketch-container-2"></div>  
<br/>

```java
public class Hello
{
    public static void main(String[] args)
    {
        System.out.println("Hello, world!");
    }
}
```

<br/>

<div class="sketch-container" id="sketch-container"></div>  

<br/>

```console
# compile
javac Hello.java

# run
java Hello
```

<script src="unit_circle.js"></script>
<script src="pyramid.js"></script>

<script>
    new p5(unitCircleSketch, "sketch-container");
    new p5(pyramidSketch, "sketch-container-2");
</script>

