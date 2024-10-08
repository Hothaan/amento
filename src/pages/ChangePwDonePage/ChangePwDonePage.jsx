import FormHeader from "@components/form/FormHeader";
import CompleteMessage from "@components/form/CompleteMessage";
import Button from "@components/ui/Button";
import FormLink from "../../components/form/FormLink";
import GradientBack from "../../components/ui/GradientBack";
import { PageWrap } from "../../components/form/PageWrap";

export default function ChangePwDonePage() {
  return (
    <GradientBack>
      <PageWrap pb="362">
        <FormHeader label="비밀번호 변경" />
        <CompleteMessage
          text="비밀번호 변경이 완료되었습니다."
          highlight="새로운 비밀번호를 잘 기억해주세요."
        />
        <Button label={"확인"} link="/" />
        <FormLink
          label1="로그인"
          link1="/login"
          label2="회원정보 수정"
          link="/editUser"
        />
      </PageWrap>
    </GradientBack>
  );
}
