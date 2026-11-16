import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Easy Coder collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight text-white">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-mist">Effective date: June 1, 2025</p>

      <div className="prose-legal mt-10 space-y-4 text-sm">
        <p>
          Easy Coder (“us”, “we”, or “our”) operates the website and the Easy
          Coder mobile application (the “Service”). This page explains how we
          collect, use, and disclose personal data when you use the Service,
          and the choices you have. By using the Service, you agree to this
          policy.
        </p>

        <h2>Information collection and use</h2>
        <p>
          We collect several types of information to provide and improve the
          Service.
        </p>
        <h3>Personal data</h3>
        <p>
          We may ask you for personally identifiable information, including:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Profile picture</li>
          <li>Cookies and usage data</li>
        </ul>
        <h3>Usage data</h3>
        <p>
          We may collect information your browser or device sends when you use
          the Service. That can include IP address, browser type and version,
          pages visited, time spent, device type, unique device IDs, operating
          system, and diagnostic data.
        </p>
        <h3>Tracking and cookies</h3>
        <p>
          We use cookies and similar technologies to operate the Service,
          remember preferences, and keep things secure. You can refuse cookies
          in your browser, but some parts of the Service may not work.
        </p>
        <h3>In-app purchases and subscriptions</h3>
        <p>
          When you buy or subscribe, we collect purchase history, subscription
          status, renewal information, and order IDs so we can provide premium
          features and support. We do not store credit card numbers.
        </p>

        <h2>Use of data</h2>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes</li>
          <li>To enable interactive features you choose to use</li>
          <li>To provide customer care and support</li>
          <li>To process and manage purchases and subscriptions</li>
          <li>To analyze and improve the Service</li>
          <li>To monitor usage</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>

        <h2>Transfer of data</h2>
        <p>
          Your information may be transferred to and maintained on computers
          outside your province, country, or other jurisdiction. If you are
          located outside Canada and provide information to us, we transfer
          that data to Canada and process it there. We take reasonable steps
          to treat your data securely and in accordance with this policy.
        </p>

        <h2>Legal requirements</h2>
        <p>We may disclose personal data if we believe it is necessary to:</p>
        <ul>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of Easy Coder</li>
          <li>Prevent or investigate possible wrongdoing</li>
          <li>Work with payment processors and app stores to verify purchases</li>
          <li>Protect the personal safety of users or the public</li>
          <li>Protect against legal liability</li>
        </ul>

        <h2>Security of data</h2>
        <p>
          We strive to use commercially acceptable means to protect personal
          data, but no method of transmission or storage is 100% secure.
        </p>

        <h2>Deletion of data</h2>
        <p>
          You can request deletion of your profile. Deleted profiles cannot be
          reactivated. To delete your data:
        </p>
        <ul>
          <li>Open the app, go to your profile, then tap Delete Account</li>
          <li>
            Or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
        </ul>

        <h2>Subscription management</h2>
        <p>
          Manage subscriptions through Google Play or the Apple App Store.
          Canceling does not automatically refund you. Access continues until
          the end of the current billing period. We retain subscription records
          for accounting and legal compliance.
        </p>

        <h2>Service providers</h2>
        <p>
          We may use third parties to help operate the Service. They can access
          personal data only to perform work on our behalf. Purchases are
          processed by Google Play and Apple. Analytics and related tools we
          may use include Google Play Services, AdMob, Google Analytics for
          Firebase, and Firebase Crashlytics.
        </p>

        <h2>Links to other sites</h2>
        <p>
          The Service may contain links we do not operate. We are not
          responsible for the content or privacy practices of those sites.
        </p>

        <h2>Children’s privacy</h2>
        <p>
          The Service is not directed at anyone under 18. We do not knowingly
          collect personal data from children. If you believe a child has
          provided data, contact us and we will take steps to remove it.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy from time to time. We will post the new
          policy on this page and update the effective date. Please review it
          periodically.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions? Email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
