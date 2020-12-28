import React from 'react';
import './Corousel.css';

const Corousel: React.FC = () => {
    return (
        // <>
        //     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        //         <div className="carousel-inner">
        //             <div className="carousel-item active">
        //                 <div className="card text-center">
        //                     <img src="https://wallbox.ru/resize/640x480/wallpapers/main/201138/koshaki-kiski-zhivotnye-3541faa.jpg"
        //                         className="card-img-top" alt="avatar" />
        //                     <div className="card-body">
        //                         <h5 className="card-title">Котята</h5>
        //                         <p className="card-text mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing
        //                                     elit,mollit anim id est laborum.</p>
        //                         <p className="card-text mb-1">Гродненская обл., Гродно</p>
        //                         <p className="card-text mb-1">Цена: 100 руб.</p>
        //                     </div>
        //                 </div>
        //                 <div className="card text-center">
        //                     <img src="https://www.artleo.com/mini/201411/95264.jpg" className="card-img-top"
        //                         alt="avatar" />
        //                     <div className="card-body">
        //                         <h5 className="card-title">Котята</h5>
        //                         <p className="card-text mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing
        //                             elit,
        //                             sed do
        //                             eiusmod tempor
        //                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        //                             nostrud
        //                             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        //                             aute
        //                             irure
        //                             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        //                             pariatur.
        //                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        //                             deserunt
        //                                     mollit anim id est laborum.</p>
        //                         <p className="card-text mb-1">Гродненская обл., Гродно</p>
        //                         <p className="card-text mb-1">Цена: 100 руб.</p>
        //                     </div>
        //                 </div>

        //             </div>


        //             <div className="carousel-item">
        //                 <div className="card text-center mb-2">
        //                     <img src="https://mrskytor.nethouse.ru/static/img/0000/0002/4345/24345838.f0rjilzvfo.W215.jpg"
        //                         className="card-img-top" alt="avatar" />
        //                     <div className="card-body">
        //                         <h5 className="card-title">Котята</h5>
        //                         <p className="card-text mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing
        //                             elit,
        //                             sed do
        //                             eiusmod tempor
        //                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        //                             nostrud
        //                             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        //                             aute
        //                             irure
        //                             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        //                             pariatur.
        //                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        //                             deserunt
        //                                     mollit anim id est laborum.</p>
        //                         <p className="card-text mb-1">Гродненская обл., Гродно</p>
        //                         <p className="card-text">Цена: 145 руб.</p>
        //                     </div>
        //                 </div>

        //                 <div className="card text-center">
        //                     <img src="https://avatars.mds.yandex.net/get-pdb/989459/9dfeb27f-976a-4b43-917c-32127c0bf224/s1200"
        //                         className="card-img-top" alt="avatar" />
        //                     <div className="card-body">
        //                         <h5 className="card-title">Котята</h5>
        //                         <p className="card-text mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing
        //                             elit,
        //                             sed do
        //                             eiusmod tempor
        //                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        //                             nostrud
        //                             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        //                             aute
        //                             irure
        //                             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        //                             pariatur.
        //                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        //                             deserunt
        //                                     mollit anim id est laborum.</p>
        //                         <p className="card-text mb-1">Гродненская обл., Гродно</p>
        //                         <p className="card-text mb-1">Цена: 100 руб.</p>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>

        //         <a className="prev-button my-auto" href="#carouselExampleControls" role="button" data-slide="prev">
        //             <span className="text-primary" aria-hidden="true"><i className="fa fa-arrow-up"></i></span>
        //             <span className="sr-only">Previous</span>
        //         </a>
        //         <a className="next-button" href="#carouselExampleControls" role="button" data-slide="next">
        //             <span className="text-primary" aria-hidden="true"><i className="fa fa-arrow-down"></i></span>
        //             <span className="sr-only">Next</span>
        //         </a>
        //     </div>
        // </>

        <>
            <div id="carouselExampleControls" className="carousel slide fixed-bottom" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-deck">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="https://wallbox.ru/resize/640x480/wallpapers/main/201138/koshaki-kiski-zhivotnye-3541faa.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Название карточки</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="https://wallbox.ru/resize/640x480/wallpapers/main/201138/koshaki-kiski-zhivotnye-3541faa.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Название карточки</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="https://wallbox.ru/resize/640x480/wallpapers/main/201138/koshaki-kiski-zhivotnye-3541faa.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Название карточки</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-deck">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="https://wallbox.ru/resize/640x480/wallpapers/main/201138/koshaki-kiski-zhivotnye-3541faa.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Название карточки</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="https://wallbox.ru/resize/640x480/wallpapers/main/201138/koshaki-kiski-zhivotnye-3541faa.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Название карточки</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="https://wallbox.ru/resize/640x480/wallpapers/main/201138/koshaki-kiski-zhivotnye-3541faa.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Название карточки</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Corousel;