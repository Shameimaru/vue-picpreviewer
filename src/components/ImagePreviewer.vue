<template>
    <div>
        <div @click="imageClickHandler">
            <div
                v-if="isShowPlate"
                class="images"
                :is="tag"
                v-for="(imageObj, index) in imageArr"
                :key="index"
                :src="isImg ? imageObj.src : false"
                :style="isImg ? {} : { backgroundImage: 'url(' + imageObj.src + ')' }"
            ></div>
            <div class="slot-container">
                <slot></slot>
            </div>
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
        computed: {
            isShowPlate() {
                return this.tag !== 'none';
            },
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
                return this.tag === 'img';
            }
        },
        methods: {
            imageClickHandler(event) {
                const target = event.target;
                let allNodes = null;
                let isIndexChanged = false;

                if (target.tagName.toLowerCase() === this.tag.toLowerCase()) {
                    allNodes = target.parentNode.getElementsByClassName('images');
                    isIndexChanged = true;
                }
                else if (target.classList.contains(this.viewclass)) {
                    let closest = target.parentNode;
                    while (!closest.classList.contains('slot-container')) {
                        closest = closest.parentNode;
                    }
                    allNodes = closest.getElementsByClassName(this.viewclass);
                    isIndexChanged = true;

                }
                if(isIndexChanged) {
                    let index = -1;
                    for (let i = 0; i < allNodes.length; i++) {
                        if (allNodes[i] === target) {
                            index = i;
                        }
                    }
                    this.$refs.previewer.show();
                    this.currentIndex = index;
                }
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
            tag: {
                type: String,
                required: true
            },
            viewclass: {
                type: String,
                required: false
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