import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advencedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advencedSchema}
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput
              label="Kullanıcı adı"
              name="username"
              type="text"
              placeholder="Kullanıcı adnızı giriniz"
            />
            <CustomSelect 
            label="Okulunuz"
            name="university"
            placeholder="Lütfen üniversitenizi seçiniz"
            >
              <option value="">Lütfen üniversitenizi seçiniz</option>
              <option value="boğaziçi">Boğaziçi Üniversitesi</option>
              <option value="gsü">Galatasaray Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
              <option value="itü">İTÜ</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox"
            name="isAccepted"/>
            <button disabled={isSubmitting} type="submit" className="">Kaydet</button>
            <Link className="formLink" to={'/'}> Ana forma git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
