export interface State {
  dataset?: Array<{ _id: string, text: string }>;
  addData?: Object;
  searchData?: Object;
  editData?: Object;
  deleteData?: Object;
  loading?: boolean;
}

export const API_LIST = `${process.env.API_URL}/__/text-list`;

export const INITIAL: State = {
  dataset: [],
  addData: { text: '' },
  searchData: { text: '' },
  editData: { _id: 0, text: '', dialog: false },
  deleteData: { _id: 0, dialog: false },
  loading: false,
};

export const MEMOIZE = rest => rest;

export const SUCCESS = '[REST] SUCCESS';
export const FAILURE = '[REST] FAILURE';

export const SET_DATA = '[REST] SET_DATA';

export const ADD_ITEM_SAGA = '[REST] ADD_ITEM_SAGA';
export const SEARCH_ITEM_SAGA = '[REST] SEARCH_ITEM_SAGA';
export const EDIT_ITEM_SAGA = '[REST] EDIT_ITEM_SAGA';
export const DELETE_ITEM_SAGA = '[REST] DELETE_ITEM_SAGA';

export const ADD_ITEM_EPIC = '[REST] ADD_ITEM_EPIC';
export const SEARCH_ITEM_EPIC = '[REST] SEARCH_ITEM_EPIC';
export const EDIT_ITEM_EPIC = '[REST] EDIT_ITEM_EPIC';
export const DELETE_ITEM_EPIC = '[REST] DELETE_ITEM_EPIC';
