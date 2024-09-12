/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as HomeIcon } from "@svgs/common/home.svg";
import { ReactComponent as AngleRightIcon } from "@svgs/common/angleRight.svg";

export default function PageTitle({ title, hasBorder }) {
  return (
    <div css={title_wrap(hasBorder)}>
      <div css={icon_wrap}>
        <div css={home_wrap}>
          <HomeIcon />
          <p>홈</p>
        </div>
        <AngleRightIcon />
      </div>
      <h1 css={title_h1}>{title}</h1>
    </div>
  );
}

const title_wrap = (hasBorder) => css`
  display: flex;
  align-items: center;
  height: 200px;
  padding: 0 0 0 210px;
  background-color: var(--white);
  border-bottom: ${hasBorder ? "1px solid #DBDBDB" : "none"};

  @media (max-width: 1680px) {
    padding: 0 0 0 160px;
  }

  @media (max-width: 1520px) {
    padding: 0 0 0 140px;
  }

  @media (max-width: 1280px) {
    padding: 0 0 0 120px;
  }

  @media (max-width: 1024px) {
    padding: 0 0 0 100px;
  }
`;

const icon_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 18px;
  padding: 0 16px 0 0;
  font-size: 13px;
`;

const home_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    color: #58595b;
    font-weight: 400;
    font-size: 15px;
  }
`;

const title_h1 = css`
  font-size: 55px;
  font-weight: 500;
  line-height: 66px;
  color: var(--black-1);

  @media (max-width: 1280px) {
    font-size: 45px;
  }

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;
