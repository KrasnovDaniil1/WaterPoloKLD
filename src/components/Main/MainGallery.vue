<script>
import Icons from "../Other/Icons.vue";
export default {
    components: { Icons },
    setup() {},
};
</script>

<template>
    <div class="galery">
        <div class="galery__left">
            <h2 class="left__title">Галерея</h2>
            <nav class="left__block-info">
                <p class="info__change">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus suscipit metus sit amet nisi lacinia condimentum.
                    Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo.
                    Donec hendrerit interdum mollis.
                </p>
            </nav>
            <BtnLearnMore class="left__btn-learn-more" />
            <nav class="left__check">
                <div class="check__block">
                    <p class="check__num">01/10</p>
                    <div class="check_btn">
                        <Icons
                            icons="arrow"
                            style="transform: rotate(180deg)"
                        />
                        <Icons icons="arrow" />
                    </div>
                </div>
            </nav>
        </div>
        <nav class="galery__right">
            <img class="left__image" />
            <img class="left__image" />
            <img class="left__image" />
        </nav>
    </div>
</template>
