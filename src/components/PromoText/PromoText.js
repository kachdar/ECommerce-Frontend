import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Online Book Store</h2>
      <p>
        Bookstore network has a special concept, a clearly defined position. We
        stand out among most book chains by promoting Ukrainian products. This
        position corresponds to society's expectations, because, as sociological
        studies testify, the majority of Ukrainians prefer Ukrainian-language
        books.
      </p>
      <p>
        Bookstore network is an encouragement not only for the buyer, but also
        for the Ukrainian publisher, as his books occupy a prominent place here.
      </p>
    </section>
  );
};

export default PromoText;
