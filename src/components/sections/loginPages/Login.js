import HeroImage from '../../../assets/images/food_ingredients.webp';
export default function Login() {
    return (
        <header className="reserve-table">
            <img className="header-reserve"src={HeroImage} alt="Little Lemon Ingredients"></img>
            <div className="reserve-header-text">
                <h1>Welcome to Little Lemon Login page</h1>
                <div className="reserve-form-text">
                    <form>
                        <label>
                            UserName:
                        <input type="username" name="username" />
                        </label>
                        <label>
                            Password:
                        <input type="password" name="password" />
                        </label>
                        <button type="Submit" aria-label="On Click" >Submit</button>
                    </form>
                </div>
            </div>
        </header>
    );
}