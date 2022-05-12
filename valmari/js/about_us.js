const about_us = document.querySelector(".about_us");

about_us.addEventListener("click", function about() {
    document.querySelector("main").innerHTML = `
            <div class="hero">
                <div class="main__container container">
                    <div class="content__head">
                        <div class="titles__header">
                            <div class="h6__style">
                                <h6>Клиника красоты и здоровья</h6>
                            </div>
                            <div class="h1__style">
                                <h1 class="logo__text">
                                    A<span>Y</span>LIN <br />
                                </h1>
                            </div>
                            <div class="paragraph__header">
                                <p>
                                    Приглашаем на бесплатный вебинар <br />
                                    для профессиональных косметологов <br />
                                    и интересующихся этой профессией
                                </p>
                            </div>
                        </div>
                        <div class="buttons__head">
                            <a href="#" class="btn-1 button">Записаться</a>
                            <a href="#" class="btn-2 button">Узнать подробнее</a>
                        </div>
                    </div>
                    <div class="img__head">
                        <img src="imgs/Logo Aylin png.png" alt="" />
                    </div>
                </div>
            </div>

            <!-- VALMARI  -->
            <section class="section-1">
                <div class="container">
                    <div class="wrap">
                        <div class="img__sec1">
                            <img src="aylin/byRanoGafurova-70323.jpg" alt="">
                        </div>
                        <div class="content-sec-1">
                            <h2>О нас</h2>
                            <h3>
                                <span class="logo__text">A<span>Y</span>LIN </span>
                                ВЕДУЩИЙ КОСМЕТОЛОГИЧЕСКИЙ <br />
                                ЦЕНТР ЭСТЕТИЧЕСКОЙ <br />
                                КОСМЕТОЛОГИИ
                            </h3>
                            <p>
                                Описание может быть любое. <br /><br />
                                Ведущий косметологический центр эстетической
                                косметологии.
                                <br /><br />
                                Более 5 лет мы проводим курсы
                                сертифицированные курсы профессионального
                                образования в области косметологии индустрии
                                красоты, здоровья молодости. <br>

                            </p>
                            <a href="#">
                                <h6>
                                    Подробнее ➡
                                </h6>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-2">
                <div class="container">
                    <div class="section-2__title title">
                        <h4>ВСЕГДА ЗАБОТЛИВЫЕ</h4>
                        <h3>Наши Специальности</h3>
                    </div>
                    <div class="section-2__grid">
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Неврология</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Кости</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Онкология</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Оториноларингология</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Офтальмология</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Кардиоваскуляр</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Пульмонология</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Почечная медицина</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>гастроэнтерология</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Урология</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Дерматология</p>
                        </a>
                        <a href="#" class="grid__item">
                            <div class="impulse_heart"></div>
                            <p>Гинекология</p>
                        </a>
                    </div>
                </div>
            </section>

            <!-- section last -->

            <section class="section__last">
                <div class="container">
                    <div class="title">
                        <h4>Связаться</h4>
                        <h3>Контакт</h3>
                    </div>
                    <div class="section__cards">
                        <div class="card">
                            <div class="call__icon"></div>
                            <h4 class="last__title">ЭКСТРЕННЫЙ</h4>
                            <a href="#" class="last__subtitle">(237) 681-812-255</a>
                            <br>
                            <a href="#" class="last__subtitle">(237) 666-331-894</a>
                        </div>
                        <div class="card">
                            <div class="location__icon"></div>
                            <h4 class="last__title">ЛОКАЦИЯ</h4>
                            <p class="last__subtitle">0123 Где-то</p>
                            <p class="last__subtitle">
                                9876 Какая-то страна
                            </p>
                        </div>
                        <div class="card">
                            <div class="email__icon"></div>
                            <h4 class="last__title">
                                ЭЛЕКТРОННЫЙ АДРЕС
                            </h4>
                            <a href="#" class="last__subtitle">пример@почты.com</a>
                            <a href="#" class="last__subtitle">пример@почты.com</a>
                        </div>
                        <div class="card">
                            <div class="clock__icon"></div>
                            <h4 class="last__title">
                                РАБОЧИЕ ДНИ
                            </h4>
                            <a href="#" class="last__subtitle">Пон-Суб 09:00-20:00</a>
                            <a href="#" class="last__subtitle">Воскресенье отдых</a>
                        </div>
                    </div>
                </div>
            </section>`;
});