import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from "../imgs/logo.png";

function Footer() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("Ivan99", "template_xv6x01b", form.current, "AerSVueVtA43Oy5Qw")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="footer-container" id="footer">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Ukoliko imaš pitanje, pošalji upit.
        </p>
        <p className="footer-subscription-text">
          Odgovaram u najkraćem mogućem roku.
        </p>
        <div className="input-areas">
          <form ref={form} onSubmit={sendEmail}>
            <div className="name-email">
              {" "}
              <input
                className="footer-input"
                name="user_name"
                type="text"
                placeholder="Ime"
              />{" "}
              <input
                className="footer-input"
                name="user_email"
                type="email"
                placeholder="Vaš Email"
              />{" "}
            </div>
            <input
              className="footer-input-question"
              name="question"
              type="text"
              placeholder="Pitanje"
            />{" "}
            <button className="button-submit" type="submit">
              Pošalji
            </button>{" "}
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          {/* <div class="footer-link-items">
            <h2>O meni</h2>
            <Link to="/omeni">Upoznaj me</Link>
         
          </div> */}
          <div class="footer-link-items">
            <h2>Kontakt</h2>
            <Link to="/">+385 99 999 9999</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Mreže</h2>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.facebook.com">Facebook</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>
          <small class="website-rights">Trainer for You © 2022</small>
          <div class="social-icons">
            <a
              href="https://www.facebook.com/Fitpromotion.hr"
              class="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <div className="empty-space">em</div>
            <a
              href="https://www.instagram.com/ivan_rajcic/"
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
