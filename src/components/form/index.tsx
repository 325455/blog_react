import React, { memo, useState } from "react";
import show from "@/assets/images/icons/眼睛_显示_o.png";
import hidden from "@/assets/images/icons/眼睛_隐藏_o.png";
import { FormWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  changeContentTrans,
  changeSignInforms,
  changeSignUpForms,
  changSignInImgCode,
  changSignUpImgCode,
} from "@/store/modules/sign";
import { StateType } from "@/store";
import Vcode from "react-vcode";
import { getRandom } from "@/utils/getRandom";

interface IFormData {
  title: string;
  items: {
    name: string;
    lab: string;
    icon: any;
    placehoder: string;
    hidden?: boolean;
    verity?: string;
  }[];
  footer: string;
  trans: number;
}

interface Ipropos {
  formdata: IFormData;
  confirmClick: Function;
}

const Form: React.FC<Ipropos> = (props) => {
  const dispatch = useDispatch();

  const { formdata, confirmClick } = props;
  const text = formdata.footer.split("？");
  const title = formdata.title.split(" ");

  // 小眼睛点击事件
  const [isHidden, setIsHidden] = useState<boolean[]>(
    formdata.title === "Sign In"
      ? [false, true, false]
      : [false, true, true, false]
  );
  const eyeClick = (index: number) => {
    const newArr = [...isHidden];
    newArr[index] = !newArr[index];
    setIsHidden(newArr);
  };

  //绑定表单
  let form: any;
  let imgCode: any;
  if (formdata.title === "Sign Up") {
    form = useSelector((state: StateType) => state.sign.signUpForm);
    imgCode = useSelector((state: StateType) => state.sign.signUpImgCode);
  } else {
    form = useSelector((state: StateType) => state.sign.signInForm);
    imgCode = useSelector((state: StateType) => state.sign.signInImgCode);
  }

  const handleInputChange = (index: number, e: any) => {
    const _form = [...form];
    _form[index] = e.target.value;
    dispatch(
      formdata.title === "Sign Up"
        ? changeSignUpForms(_form)
        : changeSignInforms(_form)
    );
  };

  return (
    <FormWrapper>
      <h3>
        {title[0]} <span>{title[1]}</span>
      </h3>
      {formdata.items.map((item, index) => {
        return (
          <div className="inputItem" key={item.placehoder}>
            {item.lab}
            <img src={item.icon} alt="" className="icon1" />
            <div className="other">
              <input
                type={isHidden[index] ? "password" : "text"}
                placeholder={item.placehoder}
                value={form[index]}
                onChange={(e) => handleInputChange(index, e)}
              />
              {item.hidden && (
                <img
                  src={isHidden[index] ? hidden : show}
                  alt=""
                  className="icon2"
                  onClick={() => eyeClick(index)}
                />
              )}
              {item.verity && (
                <div className="identy">
                  <Vcode
                    length={4}
                    height={30}
                    value={imgCode as any}
                    onClick={() => {
                      formdata.title === "Sign Up"
                        ? dispatch(changSignUpImgCode(getRandom(4)))
                        : dispatch(changSignInImgCode(getRandom(4)));
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
      <button onClick={() => confirmClick()}>确认</button>
      <div className="text">
        {text[0] + "？ "}
        <span onClick={() => dispatch(changeContentTrans(formdata.trans))}>
          {text[1]}
        </span>
      </div>
    </FormWrapper>
  );
};

export default memo(Form);
