import { useState } from "react";

import InputPicker from "../../../input/InputPicker";
import AlertHelper from "./AlertHelper";
import ConfigHeader from "./ConfigHeader";

export default function ConfigPicker({
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
        <InputPicker onChange={onChange} {...inputProps} />
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
