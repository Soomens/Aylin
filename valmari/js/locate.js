function locate() {
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
                            <a href="#" onclick="serv()" class="btn-1 button">Записаться</a>
                            <a href="#" onclick="about()" class="btn-2 button">Узнать подробнее</a>
                        </div>
                    </div>
                    <div class="img__head">
                        <img src="imgs/Logo Aylin png.png" alt="" />
                    </div>
                </div>
            </div>
            <!-- Кодиров Алишер, Гаипов Азизбек -->
            <section class="locate">
                <div class="locate__container container">
                    <div class="locate__title title">
                        <h4>Филиалы</h4>
                        <h3>Адрес</h3>
                    </div>
                    <div class="locate__cart">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.4748079029278!2d69.28651911538402!3d41.32028757927039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5b103d445a3%3A0x88a340bb5b81fb94!2sAylin%20Clinic!5e0!3m2!1sru!2s!4v1652363797904!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970.1359126225489!2d69.2613202468116!3d41.32344341056144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b84b29ca009%3A0xfa346566af1f2778!2sAylin%20Clinic!5e0!3m2!1sru!2s!4v1652362499200!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
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
                                <a href="#" class="last__subtitle">(237) 681-812-255</a>
                                <br />
                                <a href="#" class="last__subtitle">(237) 666-331-894</a>
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
                                <a href="#" class="last__subtitle">пример@почты.com</a>
                                <a href="#" class="last__subtitle">пример@почты.com</a>
                            </div>
                            <div class="card">
                                <div class="clock__icon"></div>
                                <h4 class="last__title">РАБОЧИЕ ДНИ</h4>
                                <a href="#" class="last__subtitle">Пон-Суб 09:00-20:00</a>
                                <a href="#" class="last__subtitle">Воскресенье отдых</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    `;
}
