function openPopup(url) {
    const width = 600;
    const height = 700;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    window.open(
        url,
        'popupWindow',
        `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
}

function updateCountdown() {
    const targetDate = new Date('2025-08-23T21:00:00');
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Показываем/скрываем кнопку при прокрутке
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1000) {
        scrollToTopBtn.classList.add('visible')
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});
window.addEventListener('scroll', () => {
    const buyTicketBtn = document.querySelector('.buy-ticket'); // Получаем саму кнопку
    if (window.pageYOffset > 1000) {
        buyTicketBtn.classList.add('visible');
    } else {
        buyTicketBtn.classList.remove('visible');
    }
});

// Плавная прокрутка вверх
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавный скролл
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');

    // Данные участников (12 человек)
    const participants = [
        {name: "Яна Кучерявая", description: "Саунд-продюсер, диджей, автор музыкальной программы и художественный руководитель Музыкального Перформанса. Самым главным увлечением всегда была музыка, в детстве Яна ходила на занятия по электрогитаре и гитаре, спустя года она начала заниматься диджеингом. На вопрос: «Как ты к этому пришла?» Она отвечает: «Мне просто не совсем нравилось, что делают другие представители этого течения, мне всегда хотелось сделать по-другому, я знала, что смогла бы лучше, вот так и получилось».", img: "assets/imgs/participants/par8.jpg"},
        {name: "Бронислав Фролов", description: "Автор и куратор компании «Музыкальный Перформанс». Идейный вдохновитель и конферансье Музыкального Перформанса. Работает управляющим Арт-кафе «Снежинка». Имеет опыт организации и проведения более 200 событий различных направлений: Концерты, Кинопоказы, Лекции, Спектакли, Театральные представления. Участник команды продюсерского агентства «Севастопольский бал». По образованию - Юрист в сфере Международных отношений.", img: "assets/imgs/participants/par1.jpg"},
        {name: "Иван Сыч", description: "Саксофонист, солист, руководитель духовой секции Музыкального Перформанса. Джазовый музыкант, саксофонист, кларнетист, солист brass band «StereoТипы». Образование: Московское военно-музыкальное училище им. В.М. Халилова. Работал с музыкальными коллективами в Швейцарии и Китае. Выступал на одной сцене с такими артистами, как: Игорь Бутман, Иосиф Кобзон, Сергей Мазаев, Олег Газманов и др. Участник фестиваля « Спасская башня».", img: "assets/imgs/participants/par3.jpg"},
        {name: "Руслан Сейдалиев", description: "Ритм-перкуссионная секция Музыкального Перформанса. Является лауреатом республиканских и международных конкурсов. Выпускник Донецкой музыкальной академии им. С. С. Прокофьева. В 2011 году закончил аспирантуру. Преподаватель высшей категории. Представитель состава членов жюри Республиканских и Международных конкурсов таких как Юный виртуоз г. Симферополь. Крымская весна г. Ялта и другие. Участник различных классических и эстрадных концертов и фестивалей в стране так и за рубежом.", img: "assets/imgs/participants/par11.jpg"},
        {name: "Ирина Гарифулина", description: "Участник команды медиа-группы компании «Музыкальный Перформанс». Руководитель по связи с общественностью. Амбассадор Музыкального Перформанса. Образование - Режиссер Драмы.", img: "assets/imgs/participants/par12.jpg"},
        {name: "Матвей Блюмин", description: "Cолист, первая скрипка Музыкального Перформанса. С 4 лет играет на скрипке. Учился в Музыкальной консерватории в Германии. Был первой скрипкой Московской Государственной консерватории. Гастролировал по всему миру, за его спиной более 2500 концертов. Его фигура освящена в  Википедии. Записал совместный трек с “Gruppa Skriptonit”. Победитель телевизионного конкурса «Синяя Птица», победитель телевизионного конкурса «Щелкунчик». Место работы - директор кафе общественного питания «Коробочка».", img: "assets/imgs/participants/par2.jpg"},
        {name: "Петр Андросов", description: "Трубач Музыкального Перформанса. Выпускник Крымско инженерно-педагогического университета, кафедра музыкально-инструментального искусства. Выступал в Греции и Испании. Солист группы \"StereoТипы\".", img: "assets/imgs/participants/par7.jpg"},
        {name: "Юрий Тараненко", description: "Активно концертирующий музыкант и композитор. Солист Санкт-Петербургской Филармонии Джазовой Музыки. Выпускник Санкт-Петербургского музыкального колледжа им. Мусоргского, многократный участник международного гитарного джазового фестиваля в СПБ. Участник фестивалей Close Encounters и Rajaton Jazz в Хельсинки. Дважды проходил стажировку в испании в рамках Begues Jazz Camp 2016, 2017, при участии звезд мирового джаза: Jordi Rossy, Mikhael Kanan и др. Преподаватель высшей категории. Также Юрий пишет статьи для гитарного журнала PIMA.", img: "assets/imgs/participants/par6.jpg"},
        {name: "Дарья Костенко", description: "Куратор медиа группы компании «Музыкальный  Перформанс». Специалист по социальному маркетингу. Амбассадор Музыкального Перформанса.", img: "assets/imgs/participants/par10.jpg"},
        {name: "Дмитрий Диско", description: "МС Музыкального Перформанса.", img: "assets/imgs/participants/par4.jpg"},
        {name: "Сергей Черешкевич", description: "Сузафонист Музыкального Перформанса. Музыкант группы \"StereoТипы\", выступал на музыкальных площадках в Крыму и Севастополе, в Москве и в Новосибирске.", img: "assets/imgs/participants/par9.jpg"},
        {name: "Вадим Гладких", description: "Тромбонист Музыкального Перформанса, музыкант группы \"StereoТипы\". Выступал на больших площадках в Белгороде, Москве и в Севастополе. Выпускник Белгородского Государственного Института Искусства и Культуры. Так же выступает в составе биг-бэнда.", img: "assets/imgs/participants/par5.jpg"},
        ];

    participants.forEach((person, index) => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.innerHTML = `
            <div class="card-content ${index === 1 ? 'center' : 'side'}">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${person.img}" alt="${person.name}">
                        <h3>${person.name}</h3>
                        <button class="flip-btn" onclick="flipCard(this)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                                <path d="M21 3v5h-5"/>
                                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                                <path d="M3 21v-5h5"/>
                            </svg>
                            ИНФОРМАЦИЯ
                        </button>
                    </div>
                    <div class="card-back">
                        <h3>${person.name}</h3>
                        <p class="description-text">${person.description}</p>
                        <button class="flip-btn" onclick="flipCard(this)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                                <path d="M21 3v5h-5"/>
                                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                                <path d="M3 21v-5h5"/>
                            </svg>
                            Назад
                        </button>
                    </div>
                </div>
            </div>
        `;
        track.appendChild(card);
    });

    const cards = document.querySelectorAll('.carousel-card');
    let currentIndex = 1;
    const visibleCards = 3;

    updateCarousel();

    document.addEventListener('click', (e) => {
        const clickedCard = e.target.closest('.card-content.side');
        if (!clickedCard) return;

        const cardIndex = Array.from(cards).findIndex(card =>
            card.querySelector('.card-content') === clickedCard
        );

        if (cardIndex === currentIndex - 1 ||
            (currentIndex === 0 && cardIndex === participants.length - 1)) {
            currentIndex = (currentIndex - 1 + participants.length) % participants.length;
        } else {
            currentIndex = (currentIndex + 1) % participants.length;
        }

        updateCarousel();
    });

    function updateCarousel() {
        cards.forEach((card, index) => {
            const content = card.querySelector('.card-content');
            content.classList.remove('center', 'side');

            if (index === currentIndex) {
                content.classList.add('center');
            } else {
                content.classList.add('side');
            }
        });

        const offset = -(currentIndex - 1) * (100 / visibleCards);
        track.style.transform = `translateX(${offset}%)`;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.our-events__item');
    const showMoreBtn = document.querySelector('.show-more-btn');
    const initialItemsToShow = 2;

    // Скрываем все элементы кроме первых двух
    function hideItems() {
        items.forEach((item, index) => {
            if (index >= initialItemsToShow) {
                item.style.display = 'none';
                item.classList.remove('visible');
            } else {
                item.style.display = 'flex'; // или ваш текущий display-режим
                item.classList.add('visible');
            }
        });

        // Если элементов меньше или равно 2, скрываем кнопку
        if (items.length <= initialItemsToShow) {
            showMoreBtn.style.display = 'none';
        }
    }

    // Показываем все элементы
    function showAllItems() {
        items.forEach(item => {
            item.style.display = 'flex'; // или ваш текущий display-режим
            item.classList.add('visible');
        });
        showMoreBtn.style.display = 'none';
    }

    // Инициализация
    hideItems();

    // Обработчик клика на кнопку
    showMoreBtn.addEventListener('click', function() {
        showAllItems();

        // Плавная прокрутка к последнему элементу
        items[items.length - 5].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    });
});

function flipCard(button) {
    const cardInner = button.closest('.card-inner');
    cardInner.classList.toggle('flipped');
}

setInterval(updateCountdown, 1000);
updateCountdown();
