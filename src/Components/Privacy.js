import { Paper, Container } from "@material-ui/core";
import React from "react";

const Privacy = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Privacy</h1>
      <Container style={{ textAlign: "justify" }}>
        <p>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit the “Site”.
        </p>
        <h2>Personal Information We Collect</h2>
        <p>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information
          about how you interact with the Site. We refer to this
          automatically-collected information as “Device Information.”
        </p>
        <p>We collect Device Information using the following technologies:</p>
        <ul>
          <li>
            “Cookies” are data files that are placed on your device or computer
            and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit{" "}
            <a href="http://www.allaboutcookies.org" target="_blank">
              http://www.allaboutcookies.org
            </a>
            .
          </li>

          <li>
            “Log files” track actions occurring on the Site, and collect data
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps.
          </li>
          <li>
            “Web beacons,” “tags,” and “pixels” are electronic files used to
            record information about how you browse the Site.
          </li>
        </ul>
        <p>
          When we talk about “Personal Information” in this Privacy Policy, we
          are talking both about Device Information and Order Information.
        </p>
        <h2>How do we use your personal information?</h2>
        <p>
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site (for example, by generating
          analytics about how our customers browse and interact with the Site,
          and to assess the success of our marketing and advertising campaigns).
        </p>
        <h2>Sharing your personal information</h2>
        <p>
          We share your Personal Information with third parties to help us use
          your Personal Information, as described above. For example, we use
          Google Analytics to help us understand how our customers use the
          Site&#8211;you can read more about how Google uses your Personal
          Information here:{" "}
          <a
            href="https://www.google.com/intl/en/policies/privacy/"
            target="_blank"
          >
            https://www.google.com/intl/en/policies/privacy/
          </a>
          . You can also opt-out of Google Analytics here:{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">
            https://tools.google.com/dlpage/gaoptout
          </a>
          .
        </p>
        <h2>Behavioural Advertising</h2>
        <p>
          As described above, we use your Personal Information to provide you
          with targeted advertisements or marketing communications we believe
          may be of interest to you. For more information about how targeted
          advertising works, you can visit the Network Advertising Initiative’s
          (“NAI”) educational page at{" "}
          <a
            href="https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
            target="_blank"
          >
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
          </a>
          .
        </p>
        <p>
          You can opt out of targeted advertising by: <br />
          GOOGLE &#8211;{" "}
          <a
            href="https://www.google.com/settings/ads/anonymous"
            target="_blank"
          >
            https://www.google.com/settings/ads/anonymous
          </a>
        </p>
        <p>
          Additionally, you can opt out of some of these services by visiting
          the Digital Advertising Alliance’s opt-out portal at:{" "}
          <a href="http://optout.aboutads.info" target="_blank">
            http://optout.aboutads.info/
          </a>
          .
        </p>
        <h2>Do not track</h2>
        <p>
          Please note that we do not alter our Site’s data collection and use
          practices when we see a Do Not Track signal from your browser.
        </p>
        <h2>Changes</h2>
        <p>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
        </p>
        <h2>Contact Us</h2>
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by e-mail at
        shubhamkhunt08@gmail.com
      </Container>
    </div>
  );
};

export default Privacy;
