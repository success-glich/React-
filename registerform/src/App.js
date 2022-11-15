import './App.css';
import './style.css';

function App() {
  return (
    <>
    <div className="wrapper">
    <div className="title">
      Registeration Form

    </div>
    <div className="form">
      <div className="input_field">
        <label> First Name</label>
        <input type="text" className="input"/>
      </div>
      <div className="input_field">
        <label> Last Name</label>
        <input type="text" className="input"/>
      </div>
      <div className="input_field">
        <label> Password</label>
        <input type="password" className="input"/>
      </div>
      <div className="input_field">
        <label> Confirm Password</label>
        <input type="password" className="input"/>
      </div>
      <div className="input_field">
        <label> Gender </label>
        <div className="custom_select">
          <select>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="input_field">
        <label> Email Address</label>
        <input type="text" className="input"/>
      </div>
      <div className="input_field">
        <label> Phone Number</label>
        <input type="text" className="input"/>
      </div>
      <div className="input_field">
        <label> Address</label>
        <textarea className="textarea"></textarea>
      </div>
      <div className="input_field">

        <label> Post Code</label>
        <input type="text" className="input"/>
      </div>
      <div className="input_field terms">

        <label className="check">
          <input type="checkbox"/>
          <span className="checkmark"></span>

        </label>
        <p>Agreed to terms and conditions</p>

      </div>
      <div className="input_field">
        <input type="submit" value="Registration" className="btn"/>


      </div>
      <div className="input_field">
        <input type="submit" value="cancel" className="btn btn-cancel"/>
      </div>
    </div>
  </div>
    </>
  );
}

export default App;
