<script>
import Icons from "./Other/Icons.vue";
export default {
    components: {
        Icons,
    },
    setup() {},
};
</script>

<template>
    <header>
        <div class="header-top">
            <nav class="top__left">
                <a href="#" class="left__email">waterpolo@gmail.com</a>
                <div class="left__decor-line"></div>
                <a href="#" class="left__phone">+7 888 888 88 88</a>
            </nav>
            <nav class="top__right">
                <a href="#" class="right__icon">
                    <Icons icons="vk" />
                </a>
                <a href="#" class="right__icon">
                    <Icons icons="telegram" />
                </a>
                <a href="#" class="right__icon">
                    <Icons icons="youtube" />
                </a>
            </nav>
        </div>
        <div class="header-bottom"></div>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: var(--px-content);
    font-size: 24px;
    color: #fffcf2;
    background: var(--bg-secondary);
    .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: "Cruinn Bold";
        font-size: 24px;
        .top__left {
            display: flex;
            align-items: center;
            .left__decor-line {
                width: 2px;
                height: 58px;
                margin: 0 40px;
                background: #fffcf2;
                opacity: 0.1;
            }
        }
        .top__right {
            display: flex;
            .right__icon:not(:first-child) {
                margin-left: 40px;
            }
        }
    }
    .header-bottom {
        font-family: "Cruinn Black";
    }
}
</style>
