import Pagenav from "../components/Pagenav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <Pagenav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            I am Tanya Gupta,and I dream to Travel the world and that is why I
            have created this application. To easily store all the places I wish
            to Travel in the future. This application can be used in various
            ways to either make a collection of all your visited locatiosn, or
            as a to-visit -places List.
          </p>
          <p>
            Its an easy to use application. Just Login or signup . Then You can
            move on the map to find the city you visited and click on map at the
            city. Or set your Position button to add place you currently are
            located at. You can add notes about the place as a small reminder of
            your trip. Application shows you a list of cities visited and List
            of countries is also visible. Make Good use of this Application and
            Travell all the places on Your List!!🔥
          </p>
        </div>
      </section>
    </main>
  );
}
