<template>
    <div>
        <div>
            <img
                v-for="(src, index) in imageSrc"
                :key="index"
                :src="src"
                @click="imageClickHandler($event, index)"
            />
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
            if(window.imagePreviewerVM === undefined) {
                window.imagePreviewerVM = [];
            }
            window.imagePreviewerVM.push(this);
        },
        mounted() {
            const vm = this;
            setTimeout(function() {
                vm.sizeArr = vm.imageSrc.map((src) => {
                    const image = new Image();
                    image.src = src;
                    return {
                        width: image.width,
                        height: image.height
                    }
                });
            }, 100)
        },
        computed: {
            picSrc() {
                return this.imageSrc[this.currentIndex];
            },
            picSize() {
                if(this.sizeArr.length !== 0) {
                    return this.sizeArr[this.currentIndex];
                } else {
                    return {
                        width: 0,
                        height: 0
                    }
                }
            },
            picName() {
                if(this.names !== undefined && this.names[this.currentIndex] !== undefined) {
                    return this.names[this.currentIndex];
                }
                return '';
            }
        },
        methods: {
            imageClickHandler(event, index) {
                this.$refs.previewer.show();
                this.currentIndex = index;
            },
            nextPic() {
                if(this.currentIndex < this.imageSrc.length - 1) {
                    this.currentIndex++;
                }
            },
            prevPic() {
                if(this.currentIndex > 0) {
                    this.currentIndex--;
                }
            },
            playPic() {
                this.currentIndex = (this.currentIndex + 1 + this.imageSrc.length) % this.imageSrc.length;
            }
        },
        components: {
            PreviewerDialog
        },
        props: {
            imageSrc: {
                type: Array,
                required: true
            },
            names: {
                type: Array,
                required: false
            }
        }
    };
</script>

<style>
    @import "../stylesheet/reset.less";
</style>