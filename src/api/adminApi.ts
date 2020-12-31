import axios from 'axios';
import {
    GET_POSTS,
    ADD_CATEGORY,
    GET_CATEGORIES,
    GET_REGIONS,
    ADD_REGION,
    DELETE_CATEGORY,
    DELETE_REGION,
    UPDATE_CATEGORY,
    UPDATE_REGION,
    GET_POST_BY_ID,
    APPROVE_POST,
} from '../constants/apiConstants';
import { SelectItem } from '../interfaces';

export const fetchPostList = (pageSize: number, pageNumber: number) =>
    axios.get(`${GET_POSTS}?pageSize=${pageSize}&pageNumber=${pageNumber}`);

export const fetchPostById = (id: number) => axios.get(`${GET_POST_BY_ID}?id=${id}`);

export const fetchCategories = () => axios.get(GET_CATEGORIES);

export const addCategory = (name: string) => axios.post(ADD_CATEGORY, { name });

export const deleteCategory = (id: number) => axios.delete(`${DELETE_CATEGORY}?id=${id}`);

export const updateCategory = (category: SelectItem) => axios.put(UPDATE_CATEGORY, category);

export const fetchRegions = () => axios.get(GET_REGIONS);

export const addRegion = (name: string) => axios.post(ADD_REGION, { name });

export const deleteRegion = (id: number) => axios.delete(`${DELETE_REGION}?id=${id}`);

export const updateRegion = (region: SelectItem) => axios.put(UPDATE_REGION, region);

export const approvePost = (postId: number) => axios.put(APPROVE_POST, { id: postId });
