import { useState } from "react";

import InputSlider from "../../../input/InputSlider";
import AlertHelper from "./AlertHelper";
import ConfigHeader from "./ConfigHeader";

export default function ConfigSlider({
  title,
  description,
  selected,
  inputProps,
  onChange = {},
  showAlert = false,
  alertDismissible = true,
  alertType = "info",
  alertMsg = null,
}) {
  const [alertDismissed, setAlertDismissed] = useState(false);
  const onClose = () => {
    setAlertDismissed(true);
  };

  return (
    <>
      <>
        <ConfigHeader
          title={title}
          description={description}
          selected={selected}
        />
        <InputSlider onChange={onChange} {...inputProps} />
      </>
      {showAlert && !alertDismissed && (
        <AlertHelper
          alertDismissible={alertDismissible}
          alertType={alertType}
          onClose={onClose}
        >
          {alertMsg}
        </AlertHelper>
      )}
    </>
  );
}
