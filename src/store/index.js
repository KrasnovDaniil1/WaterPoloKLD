import { createStore } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
    pageAmateur: {
        trainers: [
            {
                id: "0",
                src: " https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bianchi_velez.jpg/170px-Bianchi_velez.jpg",
                name: "Иван Иванович Иванов",
                rank: "Помошник тренера",
                phone_number: "+79990001122",
            },
            {
                id: "1",
                src: "https://img.championat.com/s/735x490/news/big/i/n/sekrety-fitnesa-kak-vybrat-trenera-i-sostavit-trenirovochnyj-plan-samomu_156196697645614984.jpg",
                name: "Пётр Петрович Петров",
                rank: "Шлавный тренер",
                phone_number: "+79991110022",
            },
            {
                id: "2",
                src: "https://hb.bizmrg.com/st.mosmff.ru/news/60/6008265009926_606x451.jpg",
                name: "Глеб Глебыч Глебов",
                rank: "Тренер",
                phone_number: "+79992221100",
            },
        ],
        groups: [
            {
                id: "0",
                title: "Группа 1",
                data: [
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                ],
            },
            {
                id: "1",
                title: "Группа 2",
                data: [
                    "-",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "-",
                    "12.00-13.00",
                    "12.00-13.00",
                ],
            },
        ],
        price: [
            {
                id: "0",
                title: "Разовое занятие в будни",
                price: "700",
            },
            {
                id: "1",
                title: "Разовое занятие в выходные",
                price: "800",
            },
            {
                id: "2",
                title: "Абонемент на месяц",
                price: "3200",
            },
        ],
    },
    pageChildren: {
        trainers: [
            {
                id: "0",
                src: " https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bianchi_velez.jpg/170px-Bianchi_velez.jpg",
                name: "Иван Иванович Иванов",
                rank: "Помошник тренера",
                phone_number: "+79990001122",
            },
            {
                id: "1",
                src: "https://img.championat.com/s/735x490/news/big/i/n/sekrety-fitnesa-kak-vybrat-trenera-i-sostavit-trenirovochnyj-plan-samomu_156196697645614984.jpg",
                name: "Пётр Петрович Петров",
                rank: "Шлавный тренер",
                phone_number: "+79991110022",
            },
            {
                id: "2",
                src: "https://hb.bizmrg.com/st.mosmff.ru/news/60/6008265009926_606x451.jpg",
                name: "Глеб Глебыч Глебов",
                rank: "Тренер",
                phone_number: "+79992221100",
            },
        ],
        groups: [
            {
                id: "0",
                title: "Группа 1",
                data: [
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                ],
            },
        ],
        price: [
            {
                id: "0",
                title: "Разовое занятие в будни",
                price: "1000",
            },
            {
                id: "1",
                title: "Абонемент на месяц",
                price: "5600",
            },
        ],
    },
    pageStudent: {
        trainers: [
            {
                id: "0",
                src: " https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bianchi_velez.jpg/170px-Bianchi_velez.jpg",
                name: "Иван Иванович Иванов",
                rank: "Помошник тренера",
                phone_number: "+79990001122",
            },
            {
                id: "1",
                src: "https://img.championat.com/s/735x490/news/big/i/n/sekrety-fitnesa-kak-vybrat-trenera-i-sostavit-trenirovochnyj-plan-samomu_156196697645614984.jpg",
                name: "Пётр Петрович Петров",
                rank: "Шлавный тренер",
                phone_number: "+79991110022",
            },
            {
                id: "2",
                src: "https://hb.bizmrg.com/st.mosmff.ru/news/60/6008265009926_606x451.jpg",
                name: "Глеб Глебыч Глебов",
                rank: "Тренер",
                phone_number: "+79992221100",
            },
        ],
        groups: [
            {
                id: "0",
                title: "Группа 1",
                data: [
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                ],
            },
        ],
    },
    pageFederation: {
        trainers: [
            {
                id: "0",
                src: " https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bianchi_velez.jpg/170px-Bianchi_velez.jpg",
                name: "Иван Иванович Иванов",
                rank: "Заместитель",
                phone_number: "+79990001122",
            },
            {
                id: "1",
                src: "https://img.championat.com/s/735x490/news/big/i/n/sekrety-fitnesa-kak-vybrat-trenera-i-sostavit-trenirovochnyj-plan-samomu_156196697645614984.jpg",
                name: "Пётр Петрович Петров",
                rank: "Директор",
                phone_number: "+79991110022",
            },
            {
                id: "2",
                src: "https://hb.bizmrg.com/st.mosmff.ru/news/60/6008265009926_606x451.jpg",
                name: "Глеб Глебыч Глебов",
                rank: "Главный тренер",
                phone_number: "+79992221100",
            },
        ],
    },
    pageNews: {
        count: 3,
        page: 1,
        news: [
            {
                id: "0",
                title: "Балтика выйграла матч",
                msg: "Расстояние между стойками ворот должно быть 3 м. Если глубина бассейна составляет 1,8 м и более, как того требуют правила игры, то нижний край перекладины должен находиться на высоте 0,90 м над поверхностью воды (при игре любительских и профессиональных команд в бассейнах, в которых есть глубокая и мелкая часть, правилами предусмотрена установка ворот при глубине от 1,5 м и менее таким образом, чтобы перекладина отстояла от дна бассейна не менее чем на 2,4 м).",
                time: "27.08.2023",
                src: "https://cska.ru/upload/thumbs/920w0h761d9796630c96f1a2d27cb38dd6fb3e.jpg",
            },
            {
                id: "1",
                title: "Балтика выйграла матч",
                msg: "Расстояние между стойками ворот должно быть 3 м. Если глубина бассейна составляет 1,8 м и более, как того требуют правила игры, то нижний край перекладины должен находиться на высоте 0,90 м над поверхностью воды (при игре любительских и профессиональных команд в бассейнах, в которых есть глубокая и мелкая часть, правилами предусмотрена установка ворот при глубине от 1,5 м и менее таким образом, чтобы перекладина отстояла от дна бассейна не менее чем на 2,4 м).",
                time: "27.08.2023",
                src: "https://cska.ru/upload/thumbs/920w0h761d9796630c96f1a2d27cb38dd6fb3e.jpg",
            },
            {
                id: "2",
                title: "Балтика выйграла матч",
                msg: "Расстояние между стойками ворот должно быть 3 м. Если глубина бассейна составляет 1,8 м и более, как того требуют правила игры, то нижний край перекладины должен находиться на высоте 0,90 м над поверхностью воды (при игре любительских и профессиональных команд в бассейнах, в которых есть глубокая и мелкая часть, правилами предусмотрена установка ворот при глубине от 1,5 м и менее таким образом, чтобы перекладина отстояла от дна бассейна не менее чем на 2,4 м).",
                time: "27.08.2023",
                src: "https://cska.ru/upload/thumbs/920w0h761d9796630c96f1a2d27cb38dd6fb3e.jpg",
            },
        ],
    },
    newsId: {
        id: 1,
        title: "Прошли соревнования",
        time: "27.08.2023",
        images: [
            {
                id: 0,
                src: "https://i-fakt.ru/wp-content/uploads/2020/02/fakty-vodnoe-polo.jpg",
            },
            {
                id: 1,
                src: "https://sportstar.by/upload/medialibrary/da4/da47bef974f1b41d05e60c334c756b27.jpg",
            },
            {
                id: 2,
                src: "https://luxsolsport.ru/images/article/narusheniya-v-vaterpole.jpg",
            },
            {
                id: 3,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIMRVRYzKfuKk3qmJ6iZGx3jenj-GvnOPbw&usqp=CAU",
            },
            {
                id: 4,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWn7yLL5K64WIKHKdXVdRdFSrTZJ2kwnKdWw&usqp=CAU",
            },
            {
                id: 5,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOE4qXGiWy6yZz8GyIhGD94mGx50bZWGOqyQ&usqp=CAU",
            },
        ],
        msg: "В 1869 году водное поло было впервые представлено широкой публике в Лондоне, в то время игра называлась «футбол на воде» и не имела четко сформулированных правил. В 1870 году была созвана комиссия из знатоков спорта для формализации правил, но каких-то результатов комиссия не добилась. Лишь в 1876 году Уильям Уилсон составил правила игры в водное поло, которые оставались актуальными вплоть до 1890 года. С 1900 игра входит в список Олимпийских видов спорта, а первый мировой чемпионат по водному поло был проведён в 1973 году. Каждой команде выделяется всего 25 секунд на атаку, по истечении 25 секунд мяч переходит команде соперника. Правила позволяют каждой команде взять 4 тайм-аута за игру в основное время и 1 тайм-аут в дополнительное. Тайм-аут может взять только команда владеющая мячом. Одновременно на поле могут находиться 6 полевых игроков и 1 вратарь. В водном поло запрещено: Совершивший грубую ошибку, игрок удаляется из воды на 15 секунд или до конца времени атаки противника. По истечении штрафного времени игрок должен вернуться в игру. Негрубая ошибка наказывается свободным броском, который может быть направлен непосредственно в ворота противника, если нарушение произошло за пятиметровой игровой линией, или разыгран путём перепасовки. Игрок, заработавший 3 удаления, удаляется до конца игры с правом замены и садится на скамейку запасных с развязанной шапкой. В водном поло запрещено: Совершивший грубую ошибку, игрок удаляется из воды на 15 секунд или до конца времени атаки противника. По истечении штрафного времени игрок должен вернуться в игру. Негрубая ошибка наказывается свободным броском, который может быть направлен непосредственно в ворота противника, если нарушение произошло за пятиметровой игровой линией, или разыгран путём перепасовки. Игрок, заработавший 3 удаления, удаляется до конца игры с правом замены и садится на скамейку запасных с развязанной шапкой+",
        videos: [
            {
                id: 0,
                frame: '<iframe width="1056" height="594" src="https://www.youtube.com/embed/pQLGvi_byeg" title="Финал Азиады-2018 по водному поло. Япония - Казахстан" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            },
            {
                id: 1,
                frame: '<iframe width="1056" height="594" src="https://www.youtube.com/embed/VHYhbvoNCoA" title="Обзор матча Казахстан–Нидерланды - 2:30.Женщины.Водное поло. Чемпионат мира по водным видам спорта" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            },
            {
                id: 2,
                frame: '<iframe width="1056" height="594" src="https://www.youtube.com/embed/zhlHvMoQ1nE" title="Тренировка ватерполистов. Водное поло" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            },
            {
                id: 3,
                frame: '<iframe width="1056" height="594" src="https://www.youtube.com/embed/quTZd42O2SA" title="ЗАНИМАЙТЕСЬ СПОРТОМ, ИГРАЙТЕ В ВОДНОЕ ПОЛО!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            },
        ],
    },
    pageMedio: [
        {
            title: "Спартакиада",
            time: "26.02.2022 - 28.02.2022",
            place: "г. Калининград, ул. Чайковского",
            msg: "Что начало повседневной работы по формированию позиции требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что консультация с широким активом требуют от нас анализа существенных финансовых и административных условий. Не следует, однако забывать, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) у",
            images: [
                {
                    id: 0,
                    src: "https://i-fakt.ru/wp-content/uploads/2020/02/fakty-vodnoe-polo.jpg",
                },
                {
                    id: 1,
                    src: "https://sportstar.by/upload/medialibrary/da4/da47bef974f1b41d05e60c334c756b27.jpg",
                },
                {
                    id: 2,
                    src: "https://luxsolsport.ru/images/article/narusheniya-v-vaterpole.jpg",
                },
                {
                    id: 3,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIMRVRYzKfuKk3qmJ6iZGx3jenj-GvnOPbw&usqp=CAU",
                },
                {
                    id: 4,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWn7yLL5K64WIKHKdXVdRdFSrTZJ2kwnKdWw&usqp=CAU",
                },
                {
                    id: 5,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOE4qXGiWy6yZz8GyIhGD94mGx50bZWGOqyQ&usqp=CAU",
                },
            ],
        },
        {
            title: "Спартакиада",
            time: "26.02.2022 - 28.02.2022",
            place: "г. Калининград, ул. Чайковского",
            msg: "Что начало повседневной работы по формированию позиции требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что консультация с широким активом требуют от нас анализа существенных финансовых и административных условий. Не следует, однако забывать, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) у",
            images: [
                {
                    id: 0,
                    src: "https://i-fakt.ru/wp-content/uploads/2020/02/fakty-vodnoe-polo.jpg",
                },
                {
                    id: 1,
                    src: "https://sportstar.by/upload/medialibrary/da4/da47bef974f1b41d05e60c334c756b27.jpg",
                },
                {
                    id: 2,
                    src: "https://luxsolsport.ru/images/article/narusheniya-v-vaterpole.jpg",
                },
                {
                    id: 3,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIMRVRYzKfuKk3qmJ6iZGx3jenj-GvnOPbw&usqp=CAU",
                },
                {
                    id: 4,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWn7yLL5K64WIKHKdXVdRdFSrTZJ2kwnKdWw&usqp=CAU",
                },
                {
                    id: 5,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOE4qXGiWy6yZz8GyIhGD94mGx50bZWGOqyQ&usqp=CAU",
                },
            ],
        },
    ],
};

const store = createStore({
    state,
    getters,
    actions,
    mutations,
});

export default store;
