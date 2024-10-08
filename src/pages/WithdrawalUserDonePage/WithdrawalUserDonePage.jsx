/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FormHeader from "@components/form/FormHeader";
import WarningMessage from "@components/form/WarningMessage";
import GradientBack from "@components/ui/GradientBack";
import Button from "@components/ui/Button";
import { PageWrap } from "@components/form/PageWrap";

export default function WithdrawalUserDonePage() {
  return (
    <GradientBack>
      <PageWrap pb="356">
        <FormHeader label="탈퇴하기" />
        <WarningMessage text="회원탈퇴가 완료되었습니다." />
        <div css={message}>
          그동안 저희 서비스를 이용해주셔서
          <br />
          진심으로 감사드립니다.
          <br />
          <br />
          문의사항이 있으시면 언제든지 고객센터로 연락해주시기 바랍니다.
        </div>
        <Button label="확인" link="/" />
      </PageWrap>
    </GradientBack>
  );
}

const message = css`
  display: flex;
  justify-content: center;x
  width: 100%;
  padding: 0 0 44px 0;

  color: #444;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 140%; 
  word-break: keep-all;

  @media (max-width: 375px) {
    font-size: 13px;
      padding: 0 0 34px 0;
  }
`;
