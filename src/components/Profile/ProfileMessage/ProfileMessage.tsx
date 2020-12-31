import React from 'react';
import s from './ProfileMessage.module.css';

const ProfileMessage: React.FC = () => (
    <div className={`${s.messageField}`}>
        <div className={`${s.autor}`}>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="media">
                        <span className={`h4 pt-2 mr-2 text-center ${s.avatar}`}>I</span>
                        <div className="media-body">
                            <div className="mb-0 h6 ">Ivan</div>
                            <p className="mb-0">Черепаха</p>
                            <small className="text-muted text-truncate mb-0">Какого цвета панцырь?</small>
                        </div>
                    </div>
                </li>
                <li className="list-group-item" style={{ background: 'rgb(168, 243, 94)' }}>
                    <div className="media">
                        <span className={`h4 pt-2 mr-2  text-center ${s.avatar}`}>A</span>
                        <div className="media-body">
                            <div className="mb-0 h6">
                                Anna <span className="badge badge-pill badge-info"> 1</span>
                            </div>
                            <p className="mb-0">Котята</p>
                            <small className="last-message text-muted text-truncate mb-0">
                                Оставьте мне одного, я вечером заберу
                            </small>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="media">
                        <span className={`h4 pt-2 mr-2 text-center ${s.avatar}`}>K</span>
                        <div className="media-body">
                            <div className="h6 mb-0">Kirill</div>
                            <p className="mb-0">Попугайчики</p>
                            <small className="last-message text-muted text-truncate mb-0">Готовы скинуть 30%?</small>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div className={`${s.message}`}>
            <div className={`${s.messageList}`}>
                <ul className={`${s.chat} list-unstyled`}>
                    <li className="media my-2 float-left">
                        <span className={`h4 pt-2 mr-2  text-center ${s.avatar}`}>A</span>
                        <div className={`${s.mark} ${s.mediaBody} media-body`}>
                            <div className={`${s.messageText} text-left`}>
                                <span className="">Здравствуйте, котята ещё продаются?</span>
                            </div>
                            <small className="text-muted">22.01.2020 10:40</small>
                        </div>
                    </li>

                    <li className="media float-right mr-2">
                        <div className={`${s.mark} ${s.mediaBody} media-body`}>
                            <div className={`${s.messageText} text-right`}>
                                <span>Здравствуйте, да</span>
                            </div>
                            <div className="text-right">
                                <small className="text-muted">22.01.2020 10:40</small>
                            </div>
                        </div>
                    </li>

                    <li className="media my-2 float-left">
                        <span className={`h4 pt-2 mr-2  text-center ${s.avatar}`}>A</span>
                        <div className={`${s.mark} ${s.mediaBody} media-body`}>
                            <div className={`${s.messageText} text-left`}>
                                <span>Сколько у вас осталось?</span>
                            </div>
                            <small className="text-muted">22.01.2020 10:40</small>
                        </div>
                    </li>
                    <li className="media float-right mr-2">
                        <div className={`${s.mark} ${s.mediaBody} media-body`}>
                            <div className={`${s.messageText} text-right`}>
                                <span>Два, но один забронирован, обещали забрать сегодня вечером</span>
                            </div>
                            <div className="text-right">
                                <small className="text-muted">22.01.2020 10:40</small>
                            </div>
                        </div>
                    </li>
                    <li className="media my-2 float-left">
                        <span className={`h4 pt-2 mr-2  text-center ${s.avatar}`}>A</span>
                        <div className={`${s.mark} ${s.mediaBody} media-body`}>
                            <div className={`${s.messageText} text-left`}>
                                <span>Оставьте мне одного, я вечером заберу</span>
                            </div>
                            <small className="text-muted">22.01.2020 10:48</small>
                        </div>
                    </li>
                    <li className="media float-right  mr-2">
                        <div className={`${s.mark} ${s.mediaBody} media-body`}>
                            <div className={`${s.messageText} text-right`}>
                                <span>Хорошо</span>
                            </div>
                            <div className="text-right">
                                <small className="text-muted">22.01.2020 10:40</small>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="send-message">
                <div className="input-group">
                    <input type="text" className="form-control form-control-sm" placeholder="Ответить" />
                    <span className="input-group-append">
                        <button className="btn btn-primary btn-sm" type="button">
                            Отправить
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default ProfileMessage;
