import type { Metadata } from "next";
import LegalPageLayout, { LegalSection, LegalList } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms, conditions, and cancellation policy for stays at The Dandelion – Colonels' Jungle Resort.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="Please take a moment to review our Terms & Conditions and Cancellation Policy below. Note that due to our small size we have to strictly adhere to the policies listed below and there can be no exceptions, even in the case of an emergency."
    >
      <LegalSection heading="Definitions">
        <LegalList
          items={[
            "Any one gender shall include the other two genders; and",
            "The singular shall include the plural and vice versa; and",
            "Natural persons include created entities (corporate and unincorporated) and the state and vice versa;",
            "Guest shall mean any person residing at the resort;",
            "Signing Guest shall mean any such person who is at least 18 years of age, possesses the legal authority to enter into a legal agreement constituted by acceptance of these Terms and Conditions, on his own behalf and/or on behalf of the resident guests including each and every guest in the accompanying party and who accepts and/or signs these terms and conditions at the time of reservation and/or at the time of check in at the resort.",
            "Invitee shall mean any person who is not residing in the resort but has been invited by a guest to the resort.",
            "Elevated Accommodation shall mean the tree house and the executive rooms located on the second floor, being structures built at a height above the ground level.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="General">
        <p>
          Children under 13 years of age are not permitted in the resort unless accompanied by
          an adult.
        </p>
        <p>
          Check-in time is 14:00 hrs &amp; Check-out time is 11:00 hrs. If guests need access
          to the rooms before 14:00 hrs, it must be upon written approval of the Reservations
          team. Similarly, late departures beyond 11:00 hrs must be upon approval, else the
          extra stay will be chargeable.
        </p>
      </LegalSection>

      <LegalSection heading="Payment">
        <LegalList
          items={[
            "The Guest and/or Signing Guest(s) and/or the principal agree to pay The Dandelion a partial advance towards the room tariff at the time of booking to confirm the reservation, with the balance of the room tariff payable in full before check-in.",
            "The Guest and/or Signing Guest(s) and/or the principal agree to pay The Dandelion, no later than the time of departure (unless prior written arrangements have been made with the resort), any food, beverage, chargeable activities, any other commodity, service charges and/or any other such state or central taxes and levies payable by the Guest(s) to the resort as determined by the resort.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Damages">
        <p>
          The Guest and/or Signing Guest(s) will be liable for damages caused to the resort
          and/or its property on account of any act, omission or negligence of the Guest(s).
          The Dandelion reserves the right to charge the Credit Card of the Guest(s) and/or
          the Signing Guest(s) with the cost of any such damage, or to send an invoice for the
          amount required to repair any such damage to the Guest(s) and/or the Signing
          Guest(s), including in the event that the damage is discovered after the Guest(s)
          have left.
        </p>
        <p>
          The Guest(s)/Signing Guest(s) acknowledge that the room rate may be subject to
          change without prior notice.
        </p>
        <p>The resort management reserves rights of admission.</p>
      </LegalSection>

      <LegalSection heading="Indemnity">
        <p>
          The Guest(s)/Signing Guest(s) acknowledges on his own behalf and on behalf of his
          accompanying party including any minors who may be a part of the accompanying party,
          that the Guest(s)/Signing Guest(s) and each and every Guest in the accompanying party
          and/or the invitees of the Guest(s) are well acquainted, fully aware of and
          appreciate the real dangers and risks that are associated with residing at the
          resort considering the presence of wild and dangerous animals, reptiles, birds and
          insects and the attendant real risk of suffering bodily harm, injury, death and/or
          loss to property which may arise as result of an encounter with and/or the presence
          of wild animals and/or reptiles and/or birds whilst on the premises or property of
          the resort.
        </p>
        <p>
          The Guest(s)/Signing Guest(s) acknowledges on his own behalf and on behalf of his
          accompanying party including any minors who may be a part of the accompanying party,
          that the Guest(s)/Signing Guest(s) and each and every member of the accompanying
          party are well acquainted, fully aware of the elevated nature of the structure of
          the tree house and the executive rooms located on the second floor and the inherent
          risk involved in living in such structures which are at a height above the ground
          and the attendant real risk of suffering bodily harm, injury, death and/or loss to
          property which may arise in the event of careless and/or reckless behaviour on part
          of the Guest(s)/Signing Guest(s) and/or invitees while residing in the resort.
        </p>
        <p>
          The Guest(s)/Signing Guest including guest(s) of the accompanying party and/or
          invitees hereby waives all claim or claims of whatsoever cause or nature howsoever
          arising and hereby indemnifies and continues to indemnify and hold harmless and
          free, the resort/management of the resort, their owners, directors, associates,
          partners, directors and employees and/or any person connected whether directly or
          indirectly with the running of the resort and fellow guest/invitee from any and all
          claims of whatsoever cause or nature by the guest(s)/signing Guest(s) and/or
          guest(s) in the accompanying party and/or invitees and/or by the spouse, common law
          wife, children, whether minor or adult, or relatives and/or authorised
          representatives of the Guest(s)/Signing Guest(s) and/or guest(s) in the accompanying
          party and/or invitees, for any harm, injury, death, or loss suffered by the
          Guest(s)/Signing Guest(s) and/or any guest of the accompanying party and/or invitees
          while on the resort and whether arising from an act or omission on the part of those
          hereby indemnified on anyone of them.
        </p>
        <p>
          The Guest(s)/Signing Guest(s) and guests in the accompanying party and/or invitees
          understand that in the event of an injury the resort may at its discretion and
          without prejudice and without admission of liability arrange and pay for emergency
          medical treatment for and on behalf of any Guest(s)/invitee and/or accompanying
          party; the same shall not however amount to admission of liability on the part of
          the owners/directors of the resort, their associates, servants, employees and/or any
          person connected whether directly or indirectly with the running of the resort.
        </p>
      </LegalSection>

      <LegalSection heading="Cancellations">
        <p>
          In the unfortunate event that you will not be able to join us, please review the
          cancellation policy below:
        </p>
        <LegalList
          items={[
            "Reservations cancelled 7 days or prior to the check-in date will incur a 10% administrative fee.",
            "No date changes or refunds will be entertained for any cancellations within 7 days of the scheduled check-in date.",
            "No date changes or refunds will be entertained for any stays during the Diwali, Christmas and New Year periods.",
            "All valid refund requests will be processed via UPI or NEFT.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Jurisdiction">
        <p>
          In the matter of enforcement of any rights or remedies hereunder, in pursuance of
          these Terms and Conditions, the Courts of Patna, Bihar alone shall have
          jurisdiction.
        </p>
        <p>
          The signing guest(s), on signing these Terms of Residence, warrants that he has read
          and understood and is duly authorized to sign and bind himself, his principal, as
          well as each and every guest in his accompanying party including invitees (if any),
          to these terms and conditions of residence; and failing such authority, the signing
          guest(s) agrees to be personally liable to pay for the residence of guests in his
          accompanying party including invitees (if any) and/or for any claim or claims of
          whatsoever nature that may arise against the owners/operators of the resort, their
          associates, servants, employees and/or any person connected whether directly or
          indirectly with the running of the resort and/or fellow guests/invitees which might
          have arisen out of harm, injury, death, or loss suffered whilst on the premises or
          property of the resort and whether arising from an act or omission on the part of
          the owners/operators of the resort, their associates, servants, employees and/or any
          person connected whether directly or indirectly with the running of the resort.
          These terms and conditions are required to be agreed to by the Signing Guest(s)
          and/or his/her authority at the time of booking.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
