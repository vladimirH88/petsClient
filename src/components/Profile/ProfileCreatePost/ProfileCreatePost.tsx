import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ProfilePage } from '../../../enums/ProfilePage';
import { geEditingPostsSelector } from '../../../redux/profile/selectors';
import { region } from '../../../data/region';
import { category } from '../../../data/category';
import { SelectItem, Store, Post, User } from '../../../interfaces';
import { getUserSelector } from '../../../redux/common/selectors';
import { createPost, setCurrentProfilePage, editPost, setEditingPost } from '../../../redux/profile/actions';

type Props = {
    user: User | null,
    editingPost: Post | null;
    editPost: (post: any) => void;
    createPost: (post: any) => void;
    setEditingPost: (data: Post | null) => void;
    setCurrentProfilePage: (page: ProfilePage) => void;
};

const ProfileCreatePost: React.FC<Props> = ({ user, editingPost, editPost, createPost, setEditingPost }) => {
    const { t } = useTranslation();
    const [isShowAdditionalPhone, setIsShowAdditionalPhone] = useState(!!user && !!user.additionalPhoneNumber);

    const showAdditionalPhoneHandler = useCallback(() => {
        setIsShowAdditionalPhone(!isShowAdditionalPhone)
    }, [isShowAdditionalPhone, setIsShowAdditionalPhone]);
    

    const renderAdditionalPhoneInput = () => {
        if (isShowAdditionalPhone) {
            return (
                <fieldset className="form-group">
                    <input
                        className="form-control"
                        type="tel"
                        placeholder={t('profile.createPost.telPlaceholder')}
                        id="additionalPhone"
                        name="additionalPhone"
                        value={formData.additionalPhone}
                        onChange={inputHandler}
                    />
                </fieldset>
            );
        }
        return <></>;
    }

    const initialFormData: Post = {
        id: 0,
        createrId: user!.id,
        briefDescription: '',
        category: '',
        description: '',
        price: '',
        phone: user && user.phoneNumber ? user.phoneNumber : '',
        additionalPhone: user && user.additionalPhoneNumber ? user.additionalPhoneNumber : '',
        region: user && user.region ? user.region : '',
        city: user && user.city ? user.city : '',
        filingDate: new Date(),
        numberOfViews: 0,
        image: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>('');

    const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }, [formData, setFormData]);

    const submitHandler = useCallback((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        if (editingPost) {
            editPost(formData);
        } else {
            const { id, ...post } = formData;
            createPost(post);
        }
        setCurrentProfilePage(ProfilePage.POST_LIST);
    }, [editingPost, editPost, formData, createPost, setCurrentProfilePage]);

    const renderSelectItems = (arr: SelectItem[]) => {
        return arr.map(item =>
            <option key={item.id} value={item.value}>
                {item.name}
            </option>
        );
    };

    const previewImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setPreviewImage(reader.result);

            const objectURL = window.URL.createObjectURL(file);
            setFormData({
                ...formData,
                image: objectURL,
            });
        }
        if (file) {
            reader.readAsDataURL(file);

        } else {
            setPreviewImage('');
        }
    };

    useEffect(() => {
        if (editingPost) {
            setFormData(editingPost)
        }
        return () => setEditingPost(null)
    }, [editingPost, setEditingPost]);

    return (
        <>
            <form>
                <fieldset className="form-group">
                    <label htmlFor="briefDescription">{t('profile.createPost.briefDescriptionLabel')}</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder={t('profile.createPost.briefDescriptionPlaceholder')}
                        name="briefDescription"
                        id="briefDescription"
                        value={formData.briefDescription}
                        autoComplete="off"
                        required
                        onChange={inputHandler}
                    />
                </fieldset>

                <fieldset className="form-group">
                    <label>{t('profile.createPost.categoryLabel')}</label>
                    <select
                        className="selectpicker form-control"
                        name="category"
                        value={formData.category}
                        onChange={inputHandler}
                    >
                        <option value="" disabled>{t('profile.createPost.categoryLabel')}</option>
                        {renderSelectItems(category)}
                    </select>
                </fieldset>
                <fieldset className="form-group">
                    <label>{t('profile.createPost.addPhoto')}</label>
                    <input
                        className="form-control-file"
                        type="file"
                        name="image"
                        accept="image/*,image/jpeg"
                        onChange={previewImageHandler}
                    />
                    {previewImage ? <img style={{ width: '120px' }} className="p-2" src={previewImage as string} alt="previewImage" /> : <></>}
                </fieldset>
                <fieldset className="form-group">
                    <textarea
                        className="form-control"
                        rows={3}
                        cols={15}
                        name="description"
                        id="description"
                        placeholder={t('profile.createPost.description')}
                        required
                        value={formData.description}
                        onChange={inputHandler}
                    >
                    </textarea>
                </fieldset>

                <fieldset className="form-group">
                    <input
                        className="form-control"
                        type="number"
                        name="price"
                        id="costAnimal"
                        min="0"
                        placeholder={t('profile.createPost.price')}
                        required
                        value={formData.price}
                        onChange={inputHandler}
                    />
                </fieldset>

                <fieldset className="form-group">
                    <label htmlFor="phone">{t('profile.createPost.telLabel')}</label>
                    <input
                        className="form-control"
                        type="tel"
                        placeholder={t('profile.createPost.telPlaceholder')}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={inputHandler}
                    />
                </fieldset>
                <label htmlFor="additionalPhone">
                    {t('profile.createPost.additionaltelLabel')}
                    <span className="h5 text-primary ml-3" style={{ cursor: 'pointer' }} onClick={showAdditionalPhoneHandler}>
                        {isShowAdditionalPhone ? t('profile.createPost.remove') : t('profile.createPost.add')}
                    </span>
                </label>

                {renderAdditionalPhoneInput()}

                <fieldset className="form-group">
                    <label htmlFor="region">{t('profile.createPost.locationLabel')}</label>
                    <select
                        className="form-control"
                        id="region"
                        name="region"
                        value={formData.region}
                        required
                        onChange={inputHandler}
                    >
                        <option value="" disabled>{t('profile.createPost.locationLabel')}</option>
                        {renderSelectItems(region)}
                    </select>
                </fieldset>

                <fieldset className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder={t('profile.createPost.enterYourCity')}
                        name="city"
                        required
                        value={formData.city}
                        onChange={inputHandler}
                    />
                </fieldset>

                <fieldset className="form-group text-center">
                    <input
                        className="form-control btn btn-outline-success w-50"
                        type="button"
                        value={`${editingPost ? t('profile.createPost.saveСhanges') : t('profile.createPost.addPost')}`}
                        onClick={submitHandler}
                    />
                </fieldset>
            </form>
        </>
    );
};

const mapStateToProps = (store: Store) => {
    return {
        user: getUserSelector(store),
        editingPost: geEditingPostsSelector(store),
    };
};

const mapDispatchToProps = {
    createPost,
    setCurrentProfilePage,
    editPost,
    setEditingPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCreatePost);
