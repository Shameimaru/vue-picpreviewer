<template>
    <image-previewer
        class="image-plate"
        :imageSrc="[
            require('./assets/images/1.jpg'),
            require('./assets/images/2.jpg'),
            require('./assets/images/3.jpg'),
            require('./assets/images/4.jpg'),
            require('./assets/images/5.jpg')
        ]"
        :names="['a pic']"
    ></image-previewer>
</template>

<script>
    import { ImagePreviewer } from '../src/index.js';
    export default {
        components: {
            ImagePreviewer
        }
    };
</script>

<style>
    .image-plate img {
        width: 120px;
        height: 120px;
        margin-right: 10px;
    }
</style>