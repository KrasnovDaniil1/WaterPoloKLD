<script>
import Icons from "./Other/Icons.vue";
import BtnSignTraining from "./Btn/BtnSignTraining.vue";
import BtnToMain from "./Btn/BtnToMain.vue";

export default {
    components: {
        Icons,
        BtnSignTraining,
        BtnToMain,
    },
};
</script>
<template>
    <footer class="footer">
        <a class="footer__logo" href="#">
            <Icons icons="logo" class="logo__icon" />
            <p class="logo__label">Water Polo</p>
        </a>
        <div class="footer__icons">
            <p class="icons__info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <nav class="icons__block">
                <Icons icons="vk" class="block__icon" />
                <Icons icons="telegram" class="block__icon" />
                <Icons icons="youtube" class="block__icon" />
            </nav>
        </div>
        <div class="footer__block">
            <nav class="block__contacts">
                <h6 class="contacts__title">Контакты</h6>
                <a href="#" class="contacts__link">+7 888 888 88 88</a>
                <a href="#" class="contacts__link">waterpolo@gmail.com</a>
            </nav>
            <nav class="block__contacts">
                <h6 class="contacts__title">Адрес</h6>
                <a href="#" class="contacts__link">Тихоокеанская улица, 5</a>
                <a href="#" class="contacts__link">08:00 - 22:00</a>
            </nav>
        </div>
        <div class="footer__menu">
            <h6 class="menu__title">Меню</h6>
            <router-link class="menu__href" to="/children">Детям</router-link>
            <router-link class="menu__href" to="/amateurs"
                >Любителям</router-link
            >
            <router-link class="menu__href" to="/students"
                >Студентам</router-link
            >
            <router-link class="menu__href" to="/federation"
                >Федерация</router-link
            >
            <router-link class="menu__href" to="/news">Блог</router-link>
            <router-link class="menu__href" to="/contacts"
                >Контакты</router-link
            >
        </div>
        <div class="footer__right">
            <h6 class="right__title">Записаться на тренировку</h6>
            <p class="right__info">Lorem ipsum dolor sit amet, consectetur.</p>
            <BtnSignTraining class="right__btn-sign" />
            <BtnToMain />
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    // background: #041d56;
    display: flex;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 190px;
    color: #fffcf2;
    .footer__logo {
        max-width: 54px;
        display: flex;
        flex-direction: column;
        color: #ffd842;
        .logo__icon {
            width: 54px;
            height: 54px;
        }
        .logo__label {
            text-align: center;
            font-family: "Cruinn Bold";
            font-size: 12px;
            line-height: 85%;
        }
    }
    .footer__icons {
        margin-left: 51px;
        max-width: 331px;
        .icons__info {
            font-family: "Montserrat Regular";
            font-size: 20px;
            line-height: 150%;
            letter-spacing: 1.6px;
            opacity: 0.6;
        }
        .icons__block {
            margin-top: 49px;
            display: flex;
            .block__icon {
                margin-right: 24px;
                width: 40px;
                height: 40px;
            }
        }
    }
    .footer__block {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-left: 75px;
        .block__contacts {
            display: flex;
            flex-direction: column;
            font-size: 24px;
            letter-spacing: 0.48px;
            &:last-child {
                margin-top: 70px;
            }
            .contacts__title {
                font-family: "Cruinn Black";
                margin-bottom: 40px;
                opacity: 0.8;
            }
            .contacts__link {
                margin-left: 8px;
                font-family: "Cruinn Bold";
                opacity: 0.4;
                &:not(:last-child) {
                    margin-bottom: 16px;
                }
            }
        }
    }
    .footer__menu {
        display: flex;
        flex-direction: column;
        margin-left: 140px;
        font-size: 24px;
        letter-spacing: 0.48px;
        .menu__title {
            margin-bottom: 37px;
            font-family: "Cruinn Black";
            opacity: 0.8;
        }
        .menu__href {
            margin-left: 9px;

            font-family: "Cruinn Bold";
            opacity: 0.4;
            &:not(:last-child) {
                margin-bottom: 24px;
            }
        }
    }
    .footer__right {
        display: flex;
        flex-direction: column;
        margin-left: 126px;
        max-width: 250px;
        .right__title {
            margin-bottom: 24px;
            font-family: "Cruinn Black";
            font-size: 24px;
            letter-spacing: 0.48px;
            opacity: 0.8;
        }
        .right__info {
            margin-bottom: 40px;
            font-family: "Montserrat Regular";
            font-size: 16px;
            line-height: 150%;
            letter-spacing: 1.28px;
            opacity: 0.6;
        }
        .right__btn-sign {
            margin-bottom: 16px;
        }
    }
}
</style>
