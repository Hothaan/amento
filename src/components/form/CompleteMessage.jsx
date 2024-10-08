/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as CompleteIcon } from "@svgs/common/complete.svg";

export default function CompleteMessage({ text, highlight, remainingText }) {
  return (
    <div css={message_wrap}>
      <CompleteIcon />
      <p>{text}</p>
      <p>
        <span css={highlight_style}>{highlight}</span>
        {remainingText}
      </p>
    </div>
  );
}

const message_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 54px 0 44px;

  svg {
    padding: 0 0 12px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    color: #3c3c3c;
    text-align: center;
    word-break: keep-all;
    line-height: 140%;

    @media (max-width: 375px) {
      line-height: 1.3;
    }
  }

  @media (max-width: 375px) {
    padding: 44px 0 34px;

    p {
      font-size: 20px;
    }
  }
`;

const highlight_style = css`
  color: var(--primary);
`;
