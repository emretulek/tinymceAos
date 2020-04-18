# tinymceAos
Tinymce editor aos animation plugin

You can apply of the aos animations to the selected html element.

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
![aosanimate](https://user-images.githubusercontent.com/43541275/79665888-3ddec380-81be-11ea-82e0-b2e8a5e9c915.jpg)


### Page of content

```
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>
<body>
<h1>Tinymce content</h1>
<img src="https://user-images.githubusercontent.com/43541275/79665888-3ddec380-81be-11ea-82e0-b2e8a5e9c915.jpg" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0" data-aos-offset="120" data-aos-once="true" data-aos-easing="ease" data-aos-anchor-placement="top-botom">

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
AOS.init();
</script>
</body>
</html>
```
