function contact() {
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
                                <a
                                    href="#"
                                    onclick="about()"
                                    class="btn-2 button"
                                    >Узнать подробнее</a
                                >
                            </div>
                        </div>
                        <div class="img__head">
                            <img src="imgs/Logo Aylin png.png" alt="" />
                        </div>
                    </div>
                </div>
    <section class="section__last">
                    <div class="title">
                        <h4>Связаться</h4>
                        <h3>Контакт</h3>
                    </div>
                    <div class="container">
                        <div class="section__cards">
                            <div class="cards-top">
                                <div class="card">
                                    <div class="call__icon"></div>
                                    <h4 class="last__title">ЭКСТРЕННЫЙ</h4>
                                    <a href="#" class="last__subtitle"
                                        >(237) 681-812-255</a
                                    >
                                    <br />
                                    <a href="#" class="last__subtitle"
                                        >(237) 666-331-894</a
                                    >
                                </div>
                                <div onclick="locate()" class="card">
                                    <div class="location__icon"></div>
                                    <h4 class="last__title">ЛОКАЦИЯ</h4>
                                    <p class="last__subtitle">0123 Где-то</p>
                                    <p class="last__subtitle">
                                        9876 Какая-то страна
                                    </p>
                                </div>
                            </div>
                            <div class="cards-bottom">
                                <div class="card">
                                    <div class="email__icon"></div>
                                    <h4 class="last__title">
                                        ЭЛЕКТРОННЫЙ АДРЕС
                                    </h4>
                                    <a href="#" class="last__subtitle"
                                        >пример@почты.com</a
                                    >
                                    <a href="#" class="last__subtitle"
                                        >пример@почты.com</a
                                    >
                                </div>
                                <div class="card">
                                    <div class="clock__icon"></div>
                                    <h4 class="last__title">РАБОЧИЕ ДНИ</h4>
                                    <a href="#" class="last__subtitle"
                                        >Пон-Суб 09:00-20:00</a
                                    >
                                    <a href="#" class="last__subtitle"
                                        >Воскресенье отдых</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                `;
}
