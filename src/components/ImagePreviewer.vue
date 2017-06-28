<template>
    <div>
        <div>
            <div
                class="images"
                :is="options.tag"
                 v-for="(imageObj, index) in imageArr"
                 :key="index"
                 :src="isImg ? imageObj.src : false"
                 @click="imageClickHandler($event, index)"
                 :style="isImg ? {} : { backgroundImage: 'url(' + imageObj.src + ')' }"
            ></div>
            <previewer-dialog
                ref="previewer"
                :src="picSrc"
                :size="picSize"
                :name="picName"
                @next-pic="nextPic"
                @prev-pic="prevPic"
                @play-pic="playPic"
            ></previewer-dialog>
        </div>

    </div>
</template>

<script>
    import PreviewerDialog from '@/components/PreviewerDialog.vue';

    export default {
        name: 'ImagePreviewer',
        data() {
            return {
                currentIndex: 0,
                sizeArr: []
            }
        },
        created() {
            if (window.imagePreviewerVM === undefined) {
                window.imagePreviewerVM = [];
            }
            window.imagePreviewerVM.push(this);
        },
        mounted() {
            const vm = this;
            setTimeout(function () {
                vm.sizeArr = vm.imageArr.map((imageObj) => {
                    const image = new Image();
                    image.src = imageObj.src;
                    return {
                        width: image.width,
                        height: image.height
                    }
                });
            }, 100)
        },
        computed: {
            picSrc() {
                return this.imageArr[this.currentIndex].src;
            },
            picSize() {
                if (this.sizeArr.length !== 0) {
                    return this.sizeArr[this.currentIndex];
                } else {
                    return {
                        width: 0,
                        height: 0
                    }
                }
            },
            picName() {
                if (this.imageArr[this.currentIndex].name !== undefined) {
                    return this.imageArr[this.currentIndex].name;
                }
                return '';
            },
            isImg() {
                return this.options.tag === 'img';
            },
            picStyle() {
                return {

                }
            }
        },
        methods: {
            imageClickHandler(event, index) {
                this.$refs.previewer.show();
                this.currentIndex = index;
            },
            nextPic() {
                if (this.currentIndex < this.imageArr.length - 1) {
                    this.currentIndex++;
                }
            },
            prevPic() {
                if (this.currentIndex > 0) {
                    this.currentIndex--;
                }
            },
            playPic() {
                this.currentIndex = (this.currentIndex + 1 + this.imageArr.length) % this.imageArr.length;
            }
        },
        components: {
            PreviewerDialog
        },
        props: {
            imageArr: {
                type: Array,
                required: true
            },
            names: {
                type: Array,
                required: false
            },
            options: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style scoped="scoped">
    @import "../stylesheet/reset.less";
    .images {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>