import { useEffect, useCallback } from 'react';
import { useAppContext } from '@contexts/AppContext';
import { Question } from '@internal-types/question';

type QuestionsReturn = {
  questions: Question[];
  loading: boolean;
  refreshQuestions: () => void;
  askQuestion: (text: string) => void;
  approveQuestion: (id: number) => void;
  voteQuestion: (id: number) => void;
};

type QuestionsState = {
  questions: Question[];
  questionsAreloading: boolean;
  questionsAreloaded: boolean;
};

const fetchQuestions = Promise.resolve([
  { id: 1, text: 'Makan apa sekarang?', score: 1, voted: false },
  { id: 2, text: 'Siapa tuanmu?', score: 1, voted: true },
]);

const useQuestions = (): QuestionsReturn => {
  const { state, setState } = useAppContext();
  const {
    questions = [],
    questionsAreloading = true,
    questionsAreloaded = false,
  } = state as QuestionsState;

  const refreshQuestions = useCallback(() => {
    setState({ questionsAreloading: true });
    fetchQuestions
      .then((newQuestions) => setState({ questions: newQuestions }))
      .finally(() =>
        setState({ questionsAreloading: false, questionsAreloaded: true })
      );
  }, [setState]);

  const askQuestion = useCallback(
    (text) => {
      Promise.resolve(text).finally(refreshQuestions);
    },
    [refreshQuestions]
  );

  const approveQuestion = useCallback(
    (id) => {
      Promise.resolve(id).finally(refreshQuestions);
    },
    [refreshQuestions]
  );

  const voteQuestion = useCallback(
    (id) => {
      console.log({ id });
      Promise.resolve(id).finally(refreshQuestions);
    },
    [refreshQuestions]
  );

  useEffect(() => {
    if (questionsAreloaded) {
      return;
    }
    refreshQuestions();
  }, [refreshQuestions, questionsAreloaded]);

  return {
    questions,
    loading: questionsAreloading,
    refreshQuestions,
    askQuestion,
    approveQuestion,
    voteQuestion,
  };
};

export default useQuestions;
