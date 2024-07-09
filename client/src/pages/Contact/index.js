import React from "react";


const Contact = () => {


  


  return (
    <div>
      <h2 className="text-2xl text-black text-center cursor-pointer">Feel Free to Contact us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.554701642039!2d77.57569402523399!3d12.936316937375821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15913bcd56df%3A0x91ae0928b93a3a79!2sSurana%20College%2C%20S%20End%20Rd%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560070!5e0!3m2!1sen!2sin!4v1702873309886!5m2!1sen!2sin" width="1500" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="mb-3">
          <form
            className="mb-3 lg-5">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;