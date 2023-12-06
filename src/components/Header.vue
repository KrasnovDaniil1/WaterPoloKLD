<script>
export default {
    setup() {},
};
</script>

<template>
    <header>
        <div class="header-top">
            <div class="header-top__left">
                <a>waterpolo@gmail.com</a>
                <a>+7 888 888 88 88</a>
            </div>
            <nav class="header-top__right">
                <a>waterpolo@gmail.com</a>
                <a>+7 888 888 88 88</a>
                <a>+7 888 888 88 88</a>
                <a>+7 888 888 88 88</a>
            </nav>
        </div>
        <div class="header-bottom"></div>
        <h1>Заголовок - 200 ExtraBold</h1>
        <h2>Меню - 24 Black</h2>
        <h3>Важная инфа - 24 Bold</h3>
        <h4>Кнопки со стрелкой - 24 Medium</h4>
        <h5>Инфа - 20 Regular</h5>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: var(--bg-secondary);
    color: #fffcf2;
    h1 {
        font-family: "Akrobat";
        font-size: 64px;
        font-style: normal;
        font-weight: 800;
        letter-spacing: 1.28px;
    }
    h2 {
        font-family: Cruinn;
        font-size: 64px;
        font-weight: 900;
        letter-spacing: 1.28px;
    }
    h3 {
        font-family: Cruinn;
        font-size: 64px;
        font-weight: 700;
        letter-spacing: 1.28px;
    }
    h4 {
        font-family: Cruinn;
        font-size: 64px;
        font-weight: 500;
        letter-spacing: 1.28px;
    }
    h5 {
        font-family: Montserrat;
        font-size: 64px;
        font-weight: 400;
        letter-spacing: 1.28px;
    }
}
</style>
