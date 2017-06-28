<template>
    <ul class="buttons-container">
        <li @click.stop="$emit('zoom-in')">
            <icon name="plus"></icon>
        </li>
        <li @click.stop="$emit('zoom-out')">
            <icon name="minus"></icon>
        </li>
        <li @click.stop="$emit('reset-size')">
            <span>1:1</span>
        </li>
        <li @click.stop="$emit('rotate-left')">
            <icon name="rotate-left"></icon>
        </li>
        <li @click.stop="$emit('rotate-right')">
            <icon name="rotate-right"></icon>
        </li>
        <li @click.stop="$emit('reset-rotate')">
            <icon name="circle-o"></icon>
        </li>
        <li @click.stop="$emit('prev-pic')">
            <icon name="arrow-left"></icon>
        </li>
        <li @click.stop="togglePlay" :class="{ active: isPlay }">
            <icon name="play"></icon>
        </li>
        <li @click.stop="$emit('next-pic')">
            <icon name="arrow-right"></icon>
        </li>
        <li @click.stop="$emit('flip-x')">
            <icon name="arrows-h"></icon>
        </li>
        <li @click.stop="$emit('flip-y')">
            <icon name="arrows-v"></icon>
        </li>
    </ul>
</template>

<script>
    import 'vue-awesome/icons';
    import Icon from 'vue-awesome/components/Icon';
    export default {
        data() {
            return {
                isPlay: false
            }
        },
        methods: {
            togglePlay() {
                this.isPlay = !this.isPlay;
                this.$emit('play-pic')
            }
        },
        components: {
            Icon
        }
    };
</script>

<style lang="less" scoped="scoped">

    .buttons-container {
        text-align: center;
        position:relative;
        z-index: 2000;
        width: 800px;
        margin: 800px auto 0 auto;
        li {
            font-size: 18px;
            padding: 5px;
            box-sizing: border-box;
            width: 40px;
            height: 40px;
            line-height: 36px;
            text-align: center;
            color: #ffffff;
            background-color: #3C3C3C;
            border-radius: 50px;

            display: inline-block;
            margin: 0 10px;
            cursor: pointer;
        }

        .active {
            color: dodgerblue;
        }
    }
</style>