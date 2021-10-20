import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'qs';

import { useAppContext } from '@contexts/AppContext';
import { User } from '@internal-types/user';

type UserReturn = {
  user: User;
  loading: boolean;
};

type UserState = {
  user: User;
  userIsLoading: boolean;
  userIsLoaded: boolean;
};

const useUser = (): UserReturn => {
  const { state, setState } = useAppContext();
  const { search } = useLocation();
  const { user = { admin: false }, userIsLoading = true } = state as UserState;

  const refreshUser = useCallback(() => {
    setState({ userIsloading: true });
    Promise.resolve({ admin: true })
      .then((newUser) => setState({ user: newUser }))
      .finally(() => setState({ userIsLoading: false, userIsLoaded: true }));
  }, [setState]);

  useEffect(() => {
    const queryObject = parse(search, { ignoreQueryPrefix: true });
    const { magicWord } = queryObject;
    if (magicWord && window?.localStorage?.setItem) {
      window.localStorage.setItem('magicWord', magicWord as string);
    }
    refreshUser();
  }, [search, refreshUser]);

  console.log({ user, userIsLoading });

  return {
    user,
    loading: userIsLoading,
  };
};

export default useUser;
