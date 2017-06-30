<template>
    <div class="demo">

        <div class="demo__header">
            <h3>img标签图片预览</h3>
            <p>将"img"传入tag，组件将自动创建img进行图片展示，并施加图片预览功能。</p>
        </div>
        <div>
            <image-previewer
                class="image-plate"
                :imageArr="imageArr1"
                tag="img"
            >
            </image-previewer>
        </div>
        <div class="demo__header">
            <h3>任意带有background-image属性的元素的图片预览</h3>
            <p>将标签名传入tag，组件将自动创建相应元素，并以background-image属性进行图片展示，同时施加图片预览功能。</p>
        </div>
        <div>
            <ul>
                <image-previewer
                    class="image-plate"
                    :imageArr="imageArr2"
                    tag="li"
                >
                </image-previewer>
            </ul>
        </div>
        <div class="demo__header">
            <h3>自定义任意结构的图片预览</h3>
            <p>将自定义的结构传入组件slot，同时指定搭载图片相应元素的class，以viewclass属性传入。tag传入"none"。</p>
        </div>
        <div>
            <ul>
                <image-previewer
                    class="image-plate"
                    :imageArr="imageArr3"
                    tag="none"
                    viewclass="image_view"
                >
                    <div class="article">
                        <img class="images image_view" src="./assets/images/5.jpg" />
                        <p class="article-header">右侧文字标题</p>
                        <p>
                            右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容
                        </p>
                    </div>
                    <div class="article">
                        <img class="images image_view" src="./assets/images/3.jpg" />
                        <p class="article-header">右侧文字标题</p>
                        <p>
                            右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容
                        </p>
                    </div>
                    <div class="article">
                        <img class="images image_view" src="./assets/images/8.jpg" />
                        <p class="article-header">右侧文字标题</p>
                        <p>
                            右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容
                        </p>
                    </div>
                    <div class="article">
                        <img class="images image_view" src="./assets/images/2.jpg" />
                        <p class="article-header">右侧文字标题</p>
                        <p>
                            右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容
                        </p>
                    </div>
                    <div class="article">
                        <img class="images image_view" src="./assets/images/6.jpg" />
                        <p class="article-header">右侧文字标题</p>
                        <p>
                            右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容
                        </p>
                    </div>
                </image-previewer>
            </ul>
        </div>
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
                imageArr2: [{
                    src: require('./assets/images/6.jpg')
                }, {
                    src: require('./assets/images/7.png')
                }, {
                    src: require('./assets/images/8.jpg')
                }, {
                    src: require('./assets/images/9.jpg')
                }, {
                    src: require('./assets/images/10.jpg')
                }],
                imageArr3: [{
                    src: require('./assets/images/5.jpg')
                }, {
                    src: require('./assets/images/3.jpg')
                }, {
                    src: require('./assets/images/8.jpg')
                }, {
                    src: require('./assets/images/2.jpg')
                }, {
                    src: require('./assets/images/6.jpg')
                }]
            }
        },
        components: {
            ImagePreviewer
        }
    };
</script>

<style lang="less">
    .demo {
        width: 1200px;
        margin: 0 auto;
        .demo__header {
            padding: 10px 0;
        }
    }
    .article {
        clear: both;
        margin: 10px 0;
        width: 400px;
        .images {
            float: left;
        }
        .article-header {
            font-weight: bold;
        }
    }
    .image-plate .images {
        width: 120px;
        height: 120px;
        margin: 0 10px 10px 0;
        display: inline-block;
    }
</style>