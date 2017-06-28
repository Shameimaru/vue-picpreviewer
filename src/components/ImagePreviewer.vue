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
                :src="previewerSrc"
                :size="previewerSize"
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
            previewerSrc() {
                return this.imageSrc[this.currentIndex];
            },
            previewerSize() {
                if(this.sizeArr.length !== 0) {
                    return this.sizeArr[this.currentIndex];
                } else {
                    return {
                        width: 0,
                        height: 0
                    }
                }
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
            }
        }
    };
</script>

<style>

</style>