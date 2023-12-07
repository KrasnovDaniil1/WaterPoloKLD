<script>
import youtubeIcon from "../assets/icons/youtube.svg";
export default {
    setup() {
        return {
            youtubeIcon,
        };
    },
};
// использовать для каждой иконки свой компонент
</script>


<template>
    <header>
        <div class="header-top">
            <div class="header-top__left">
                <a>waterpolo@gmail.com</a>
                <a>+7 888 888 88 88</a>
            </div>
            <nav class="header-top__right">
                <a href="">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.75">
                            <path
                                d="M13.6 19.8571L19.828 16L13.6 12.1429V19.8571ZM27.472 9.79C27.628 10.3943 27.736 11.2043 27.808 12.2329C27.892 13.2614 27.928 14.1486 27.928 14.92L28 16C28 18.8157 27.808 20.8857 27.472 22.21C27.172 23.3671 26.476 24.1129 25.396 24.4343C24.832 24.6014 23.8 24.7171 22.216 24.7943C20.656 24.8843 19.228 24.9229 17.908 24.9229L16 25C10.972 25 7.84 24.7943 6.604 24.4343C5.524 24.1129 4.828 23.3671 4.528 22.21C4.372 21.6057 4.264 20.7957 4.192 19.7671C4.108 18.7386 4.072 17.8514 4.072 17.08L4 16C4 13.1843 4.192 11.1143 4.528 9.79C4.828 8.63286 5.524 7.88714 6.604 7.56571C7.168 7.39857 8.2 7.28286 9.784 7.20571C11.344 7.11571 12.772 7.07714 14.092 7.07714L16 7C21.028 7 24.16 7.20571 25.396 7.56571C26.476 7.88714 27.172 8.63286 27.472 9.79Z"
                                fill="#FFFCF2"
                            />
                        </g>
                    </svg>
                </a>
                <a>+7 888 888 88 88</a>
                <a>+7 888 888 88 88</a>
                <a>+7 888 888 88 88</a>
            </nav>
        </div>
        <div class="header-bottom"></div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: var(--bg-secondary);
    padding: var(--px-content);
    color: #fffcf2;
    font-size: 24px;
    .header-top {
        font-family: "Cruinn Bold";
    }
    .header-bottom {
        font-family: "Cruinn Black";
    }
}
</style>
