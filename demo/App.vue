<template>
    <div>
        <image-previewer
            class="image-plate"
            :imageArr="imageArr1"
            :options="optionObj1"
        ></image-previewer>
    </div>
</template>

<script>
    import { ImagePreviewer } from '../src/index.js';
    export default {
        data() {
            return {
                imageArr1: [{
                    src: require('./assets/images/1.jpg'),
                    name: 'a pic'
                }, {
                    src: require('./assets/images/2.jpg')
                }, {
                    src: require('./assets/images/3.jpg')
                }, {
                    src: require('./assets/images/4.jpg')
                }, {
                    src: require('./assets/images/5.jpg')
                }],
                optionObj1: {
                    tag: 'div'
                }
            }
        },
        components: {
            ImagePreviewer
        }
    };
</script>

<style>
    .image-plate .images {
        width: 120px;
        height: 120px;
        margin-right: 10px;
        display: inline-block;
    }
</style>