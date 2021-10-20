import useUser from '@hooks/useUser';
import { css, cx } from '@emotion/css';
import useQuestions from '@hooks/useQuestions';
import React, { FC, useState } from 'react';

const qnaStyle = css({
  '.content': {
    width: '100%',
    maxWidth: 800,
  },
  '.question': {
    borderRadius: 8,
    border: 'solid 1px black',
  },
});

const QnAView: FC = () => {
  const {
    loading: questionsAreLoading,
    questions,
    voteQuestion,
    askQuestion,
  } = useQuestions();

  const { loading: userIsLoading, user } = useUser();

  const [inputText, setInputText] = useState('');

  if (userIsLoading) {
    return (
      <div className="p64">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={cx('flex justify-center', qnaStyle)}>
      <div className="content">
        <h1>Questions and Answers</h1>
        {questionsAreLoading && <small>Loading...</small>}
        {!user.admin && (
          <>
            <h2>Ask a Question</h2>
            <div className="flex">
              <textarea
                cols={60}
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
              ></textarea>
              <button className="ml16" onClick={() => askQuestion(inputText)}>
                Submit
              </button>
            </div>
          </>
        )}
        <h2>Submitted Questions</h2>
        {questions.map(({ id, text, score, voted }, index) => (
          <div className="flex justify-between question p16 my16" key={index}>
            <p>{text}</p>
            <div className="flex">
              {!voted && !user.admin && (
                <i
                  className="ri-arrow-up-circle-line mr16"
                  onClick={() => voteQuestion(id)}
                ></i>
              )}
              {user.admin && (
                <>
                  <i className="ri-close-circle-line  mr16"></i>
                  <i className="ri-checkbox-circle-line  mr16"></i>
                </>
              )}
              <p className="large">
                <b>{score}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnAView;
