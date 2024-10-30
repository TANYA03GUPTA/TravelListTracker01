// Uses the same styles as Product
import Pagenav from "../components/Pagenav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <Pagenav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $0/month.
          </h2>
          <p>Free to use as its Just in development Phase.</p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
