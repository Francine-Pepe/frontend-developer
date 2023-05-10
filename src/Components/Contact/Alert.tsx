import React from "react";
import swal from "sweetalert";

function Alert() {
  return (
    <div>
      <button
        // className={styles.product_modal_button}
        onClick={() =>
          swal({
            title: "Fresh Fruit at your door",
            text: "",
            icon: "success",
          })
        }
      ></button>
    </div>
  );
}

export default Alert;
