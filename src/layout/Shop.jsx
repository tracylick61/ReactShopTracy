import { useState, useEffect } from "react";
import M from "materialize-css";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "../components/Preloader";
import { GoodsList } from "../components/GoodsList";
import { BasketList } from "../components/BasketList";
import { Cart } from "../components/Cart";
import { Alert } from "../components/Alert";

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  useEffect(() => {
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, { opacity: 0.5, preventScrolling: true });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL, {
        headers: { Authorization: API_KEY },
      });
      const data = await response.json();
      setGoods(data.shop);
      setLoading(false);
    };
    fetchData();
  }, []);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );
  
    let newOrder = [];
  
    if (itemIndex < 0) {
      newOrder = [...order, { ...item, quantity: 1 }];
    } else {
      newOrder = order.map((orderItem, index) =>
        index === itemIndex
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
    }
  
    setOrder(newOrder);
    setAlertName(item.displayName || "Товар"); // 🔔 алерт
  };
  

  const removeFromBasket = (mainId) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.mainId !== mainId));
  };

  const incrementQuantity = (mainId) => {
    setOrder((prevOrder) =>
      prevOrder.map((item) =>
        item.mainId === mainId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (mainId) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) => {
          if (item.mainId === mainId) {
            return item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  return (
    <main className="container content">
      {}
      <Cart
        quantity={order.length}
        handleBasketShow={() => {
          const modal = M.Modal.getInstance(
            document.getElementById("basket-modal")
          );
          modal.open();
        }}
      />

      {}
      <div id="basket-modal" className="modal">
        <div className="modal-content">
          <BasketList
            order={order}
            removeFromBasket={removeFromBasket}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        </div>
        <button
      className="modal-close close-icon"
      onClick={() =>
    M.Modal.getInstance(document.getElementById("basket-modal")).close()
      }   
    >
     &times;
    </button>
      </div>

      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
        
      )}
      {alertName && <Alert name={alertName} closeAlert={() => setAlertName("")} />}
    </main>
  );
}
