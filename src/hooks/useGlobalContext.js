import React, {useState, useCallback, useEffect} from 'react';
import {createContainer} from 'react-tracked';
import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from 'immer';

const initialState = {
  loggedIn: false,
};

const {
  Provider,
  useTrackedState: trackedStateCallback,
  useUpdate: updateCallback,
} = createContainer(() => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // (async () => setState({...state, ...JSON.parse(await AsyncStorage.getItem('cached'))}))();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('cached', JSON.stringify(state));
  }, [state]);

  return [state, setState];
});

export const GlobalStateProvider = ({children}) => {
  return <Provider>{children}</Provider>;
};

export const getFullGlobalState = () => {
  return trackedStateCallback();
};

// const subValue = getGlobalState('subValue', false);
export const getGlobalState = key => {
  const state = trackedStateCallback();
  return state[key];
};

// const here = getGlobalStateCallback(state => state.a.b[0].c);
export const getGlobalStateCallback = callback => {
  const state = trackedStateCallback();
  return callback(state);
};

// https://react-tracked.js.org/docs/tutorial-03/
export const setGlobalStateDraft = () => {
  const setState = updateCallback();
  return draft => setState(produce(draft));
};

export const setFullGlobalStateCallback = callback => {
  const setDraft = setGlobalStateDraft();
  return (...args) => setDraft(draft => callback.apply(null, [draft, ...args]));
};

// const alterLists = setGlobalStateCallback('lists', (lists, value) => {
//   lists.push(value);
// });
export const setGlobalStateCallback = (key, callback) => {
  const setDraft = setGlobalStateDraft();
  return (...args) => setDraft(draft => callback.apply(null, [draft[key], ...args]));
};

// const setSubValue = setGlobalState('subValue', false);
export const setGlobalState = key => {
  return setFullGlobalStateCallback((state, value) => {
    // cannot return state (immer)
    state[key] = value;
  });
};

// const [loggedIn, setLoggedIn] = useGlobalState('logedIn');
export const useGlobalState = (key, defaultValue: null) => {
  return [getGlobalState(key, defaultValue), setGlobalState(key)];
};
