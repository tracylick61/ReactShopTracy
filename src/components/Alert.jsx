import { useEffect } from "react";

export function Alert({ name = "", closeAlert = Function.prototype }) {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => clearTimeout(timerId);
  }, [closeAlert]);

  return <div className="alert-toast">{name} добавлен в корзину</div>;
}
