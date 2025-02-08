import SubmitHandler from '../components/form';
import ButtonHandler from '../components/timeslot';
import HoverHandler from '../components/wishlist';
import '../styles/style.css'; //import css file

export default function Home() {
    return (
        <div>
            <h1>Welcome to BookTable</h1>
            <p>Finding the perfect dining spot has never been easier. With BookTable, you can browse top-rated restaurants, check real-time availability, and reserve a table in just a few clicks. Whether you are planning a romantic dinner, a family gathering, or a business lunch, we ensure a seamless booking experience. Say goodbye to long wait times and enjoy hassle-free reservations at your favorite restaurants. Start exploring now and book your perfect table today!</p>

            <h1>Reserve table</h1>
            <ButtonHandler />
            <SubmitHandler />
            <HoverHandler />
        </div>
    )};