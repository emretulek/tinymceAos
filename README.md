# tinymceAos
Tinymce editor aos animation plugin

### Tinymce 5
[tinymce 5](https://github.com/tinymce/tinymce)

### Aos Animation

[Animate on scroll library](https://github.com/michalsnik/aos)

### Example
```
tinymce.init({
    selector: 'textarea',
    plugins: 'aosanimate',
    toolbar: 'aosanimate'
});
```

### View

![alt text](image)


### Page of content

```
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>
<body>
<h1>Tinymce content</h1>
<img src="image/png" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0" data-aos-offset="120" data-aos-once="true" data-aos-easing="ease" data-aos-anchor-placement="top-botom">

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
AOS.init();
</script>
</body>
</html>
```
