import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  Font,
  View,
  Svg,
  Line,
  // Polyline,
} from "@react-pdf/renderer";


Font.register({
  family: "Times-Bold",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 33,
    paddingBottom: 58,
    paddingHorizontal: 35,
  },
  bold: { fontFamily: "Times-Bold" },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    marginBottom: 8,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  text1: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 10,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  table: {
    marginLeft: 20,
    marginTop: 26,
    fontSize: 14,
    fontFamily: "Times-Bold",
  },
  textForSignature: {
    // marginTop: 120,
    fontFamily: "Times-Bold",
    fontSize: 14,
    marginLeft: 12,
    marginBottom: 10,
    marginTop: 13,
    textAlign: "justify",
  },
  textForSignature2: {
    // marginTop: 120,
    fontFamily: "Times-Bold",
    fontSize: 14,
    marginLeft: 12,
    marginBottom: 10,
    textAlign: "right",
  },
  textWitness: {
    marginTop: 40,
    marginBottom: 320,
  },
  image: {
    marginLeft: 52,
    marginBottom: 5,
    height: "10px",
    width: "70px",
  },
  textForTable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Times-Bold",
    marginHorizontal: 85,
    // margin: 12,
    // marginBottom: 8,
    fontSize: 13,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "black",
    fontFamily: "Times-Bold",
  },
});

const PDFFile = (props) => {
  function onlyOneSign() {
    return (
      <>
        <Text style={styles.textForSignature}>
          &nbsp;&nbsp;&nbsp;&nbsp;({props.formData.ten1gender}.
          {props.formData.tenOneName.toUpperCase()})
        </Text>
      </>
    );
  }

  function onlyTwoSign() {
    return (
      <>
        <Text style={styles.textForSignature}>
          &nbsp;&nbsp;&nbsp;&nbsp;({props.formData.ten1gender}.
          {props.formData.tenOneName.toUpperCase()})
        </Text>
        <Text style={styles.textForSignature}>
          &nbsp;&nbsp;&nbsp;&nbsp;({props.formData.ten2gender}.
          {props.formData.tenTwoName.toUpperCase()})
        </Text>
      </>
    );
  }

  function onlyThreeSign() {
    return (
      <>
        <Text style={styles.textForSignature}>
          &nbsp;&nbsp;&nbsp;&nbsp;({props.formData.ten1gender}.
          {props.formData.tenOneName.toUpperCase()})
        </Text>
        <Text style={styles.textForSignature}>
          &nbsp;&nbsp;&nbsp;&nbsp;({props.formData.ten2gender}.
          {props.formData.tenTwoName.toUpperCase()})
        </Text>
        <Text style={styles.textForSignature}>
          &nbsp;&nbsp;&nbsp;&nbsp;({props.formData.ten3gender}.
          {props.formData.tenThreeName.toUpperCase()})
        </Text>
      </>
    );
  }
  function onlyFourSign() {
    return (
      <>
        <Text style={styles.textForSignature}>
          &nbsp;&nbsp;&nbsp;&nbsp;({props.formData.ten1gender}.
          {props.formData.tenOneName.toUpperCase()})
        </Text>
        <Text style={styles.textForSignature}>
          &nbsp;&nbsp;&nbsp;&nbsp; ({props.formData.ten2gender}.{props.formData.tenTwoName.toUpperCase()})
        </Text>
        <Text style={styles.textForSignature}>
          &nbsp;&nbsp;&nbsp;&nbsp; ({props.formData.ten3gender}.{props.formData.tenThreeName.toUpperCase()})
        </Text>
        <Text style={styles.textForSignature}>
          &nbsp;&nbsp;&nbsp;&nbsp; ({props.formData.ten4gender}.{props.formData.tenFourName.toUpperCase()})
        </Text>
      </>
    );
  }

  function onlyOneTen() {
    return (
      <Text style={styles.text1}>
        1. <Text style={styles.bold}>{props.formData.ten1gender}.{props.formData.tenOneName.toUpperCase()}</Text>, {props.formData.tenOneGender.toUpperCase()}{" "}
        <Text style={styles.bold}>{props.formData.tenOneParent.toUpperCase()}</Text> , R/O{" "}
        <Text style={styles.bold}>{props.formData.tenOneAddress.toUpperCase()}</Text>.
      </Text>
    );
  }

  function onlyTwoTen() {
    return (
      <>
        <Text style={styles.text1}>
          1. <Text style={styles.bold}>{props.formData.ten1gender}.{props.formData.tenOneName.toUpperCase()}</Text>, {props.formData.tenOneGender.toUpperCase()}{" "}
          <Text style={styles.bold}>{props.formData.tenOneParent.toUpperCase()}</Text> , R/O{" "}
          <Text style={styles.bold}>{props.formData.tenOneAddress.toUpperCase()}</Text>.
        </Text>
        <Text style={styles.text1}>
          2. <Text style={styles.bold}>{props.formData.ten2gender}.{props.formData.tenTwoName.toUpperCase()}</Text>, {props.formData.tenTwoGender.toUpperCase()}{" "}
          <Text style={styles.bold}>{props.formData.tenTwoParent.toUpperCase()}</Text> , R/O{" "}
          <Text style={styles.bold}>{props.formData.tenTwoAddress.toUpperCase()}</Text>.
        </Text>
      </>
    );
  }

  function onlyThreeTen() {
    return (
      <>
        <Text style={styles.text1}>
          1. <Text style={styles.bold}>{props.formData.ten1gender}.{props.formData.tenOneName.toUpperCase()}</Text>, {props.formData.tenOneGender.toUpperCase()}{" "}
          <Text style={styles.bold}>{props.formData.tenOneParent.toUpperCase()}</Text> , R/O{" "}
          <Text style={styles.bold}>{props.formData.tenOneAddress.toUpperCase()}</Text>.
        </Text>
        <Text style={styles.text1}>
          2. <Text style={styles.bold}>{props.formData.ten2gender}.{props.formData.tenTwoName.toUpperCase()}</Text>, {props.formData.tenTwoGender.toUpperCase()}{" "}
          <Text style={styles.bold}>{props.formData.tenTwoParent.toUpperCase()}</Text> , R/O{" "}
          <Text style={styles.bold}>{props.formData.tenTwoAddress.toUpperCase()}</Text>.
        </Text>
        <Text style={styles.text1}>
          3. <Text style={styles.bold}>{props.formData.ten3gender}.{props.formData.tenThreeName.toUpperCase()}</Text>,{props.formData.tenThreeGender.toUpperCase()}{" "}
          <Text style={styles.bold}>{props.formData.tenThreeParent.toUpperCase()}</Text> , R/O{" "}
          <Text style={styles.bold}>{props.formData.tenThreeAddress.toUpperCase()}</Text>.
        </Text>
      </>
    );
  }
  function onlyFourTen() {
    return (
      <>
        <Text style={styles.text1}>
          1. <Text style={styles.bold}>{props.formData.ten1gender}.{props.formData.tenOneName.toUpperCase()}</Text>, {props.formData.tenOneGender.toUpperCase()}{" "}
          <Text style={styles.bold}>{props.formData.tenOneParent.toUpperCase()}</Text> , R/O{" "}
          <Text style={styles.bold}>{props.formData.tenOneAddress.toUpperCase()}</Text>.
        </Text>
        <Text style={styles.text1}>
          2. <Text style={styles.bold}>{props.formData.ten2gender}.{props.formData.tenTwoName.toUpperCase()}</Text>, {props.formData.tenTwoGender.toUpperCase()}{" "}
          <Text style={styles.bold}>{props.formData.tenTwoParent.toUpperCase()}</Text> , R/O{" "}
          <Text style={styles.bold}>{props.formData.tenTwoAddress.toUpperCase()}</Text>.
        </Text>
        <Text style={styles.text1}>
          3. <Text style={styles.bold}>{props.formData.ten3gender}.{props.formData.tenThreeName.toUpperCase()}</Text>, {props.formData.tenThreeGender.toUpperCase()}{" "}
          <Text style={styles.bold}>{props.formData.tenThreeParent.toUpperCase()}</Text> , R/O{" "}
          <Text style={styles.bold}>{props.formData.tenThreeAddress}</Text>.
        </Text>
        <Text style={styles.text1}>
          4. <Text style={styles.bold}>{props.formData.ten4gender}.{props.formData.tenFourName.toUpperCase()}</Text>, {props.formData.tenFourGender.toUpperCase()}{" "}
          <Text style={styles.bold}>{props.formData.tenFourParent.toUpperCase()}</Text> , R/O{" "}
          <Text style={styles.bold}>{props.formData.tenFourAddress.toUpperCase()}</Text>.
        </Text>
      </>
    );
  }
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header}> Rent Agreement</Text>
        <Text style={styles.text}>
          The Rent Agreement is executed at ROHINI, DELHI effective as of this
          {props.formData.shiftingDate};
        </Text>
        <Text style={styles.text}>
          {" "}
          <Text style={styles.bold}>BY AND BETWEEN</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>{props.formData.OwnerGender.toUpperCase()}.{props.formData.propertyOwnerName.toUpperCase()}</Text>,
           {props.formData.byOwnerGender.toUpperCase()} {" "}<Text style={styles.bold}>
          {props.formData.propertyByOwner.toUpperCase()}</Text> R/O{" "}
          <Text style={styles.bold}>{props.formData.ownerAddress.toUpperCase()}</Text>
          (Hereinafter called the{" "}
          <Text style={styles.bold}>“First Party / Landlord”</Text> which
          expression shall include her heirs, executors, successors, legal
          representatives, and assigns) of the One Part
        </Text>
        <Text style={styles.text}>AND</Text>
        {props.formData.tenTwoName === ""
          ? onlyOneTen()
          : props.formData.tenThreeName === ""
          ? onlyTwoTen()
          : props.formData.tenFourName === ""
          ? onlyThreeTen()
          : onlyFourTen()}
        
        <Text style={styles.text1}>
          (Hereinafter called the{" "}
          <Text style={styles.bold}>“Second Party / Tenant”</Text> which
          expression shall unless excluded by or repugnant to the context be
          deemed to include his heirs, successors, executors, legal
          representatives, and permitted assigns) of the Second Part.
        </Text>
        <Text style={styles.text}>
          WHEREAS the <Text style={styles.bold}>“First Party / Landlord”</Text>{" "}
          is the owner of property bearing, {props.formData.propertyAddress.toUpperCase()}.
        </Text>
        
        <Text style={styles.text}>
          WHEREAS the <Text style={styles.bold}>“First Party / Landlord”</Text>{" "}
          is absolutely seized and possessed of and or otherwise well and
          sufficiently entitled to all that constructed portion being unit
          described in Schedule I hereunder written and are hereafter for the
          sake of brevity called or referred to as Licensed Premises and is/are
          desirous of giving the said premises on Rent basis under Delhi Rent
          Control Laws.
        </Text>
        <View style={styles.imageContainer}>
          <div>
            <Text style={styles.textForSignature}>FIRST PARTY / LANDLORD</Text>
            {/* <Image style={styles.image} src={props.sigImg.src} /> */}
            <Text style={styles.textForSignature}>
              ({props.formData.OwnerGender.toUpperCase()}.{props.formData.propertyOwnerName.toUpperCase()})
            </Text>
          </div>
          <div>
            <Text style={styles.textForSignature}>SECOND PARTY / TENANT</Text>

            {props.formData.tenTwoName === ""
              ? onlyOneSign()
              : props.formData.tenThreeName === ""
              ? onlyTwoSign()
              : props.formData.tenFourName === ""
              ? onlyThreeSign()
              : onlyFourSign()}

          </div>
        </View>
      </Page>
      <Page style={styles.body}>
        <Text style={styles.text}>
          AND WHEREAS the{" "}
          <Text style={styles.bold}>“First Party / Landlord”</Text> has agreed
          to give on rent the said premises to the{" "}
          <Text style={styles.bold}>“Second Party / Tenant”</Text> and the
          “Second Party / Tenant” has agreed to take on rent the said premises
          on the following terms and conditions.
        </Text>
  
        <Text style={styles.text}>
          1. That the Rent Agreement will commence from{" "}
          <Text style={styles.bold}>
            {props.formData.shiftingDate}, and shall continue for{" "}
            11 &nbsp;&nbsp;&nbsp;&nbsp;Months i.e.,
            {props.formData.rentEnd}
          </Text>
          , and will cease to exist on this date.
        </Text>
        <Text style={styles.text}>
          {" "}
          2. That the rent of the said premises will be Rs.
          <Text style={styles.bold}>{props.formData.rent}/-</Text>
          per month starting from &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <Text style={styles.bold}>{props.formData.shiftingDate}</Text> to{" "}
          <Text style={styles.bold}>{props.formData.rentEnd}</Text>.
        </Text>
        

        <Text style={styles.text}>
          {" "}
          3. That the <Text style={styles.bold}>Second Party/ Tenant</Text> has
          already paid Rs.
          <Text style={styles.bold}>{props.formData.security}</Text>/- as
          interest-free security, &nbsp;&nbsp;&nbsp;&nbsp; to the First Party / Landlord, which will be refunded
          at the time of vacation of the said &nbsp;&nbsp;&nbsp;&nbsp; Premises
          after adjusting any outstanding dues or any amount of any
          damages, electricity &nbsp;&nbsp;&nbsp;&nbsp; dues, maintenance dues,
          etc.
        </Text>

        <Text style={styles.text}>
          {" "}
          4. That the monthly rent of the premises will be paid by the Second
          Party to the First &nbsp;&nbsp;&nbsp;&nbsp;Party in advance by online
          mode latest by the 5th day of each English calendar month.{" "}
          <Text style={styles.bold}>
            &nbsp;&nbsp;&nbsp;&nbsp;Default in payment after the due date shall
            be liable for a fine of Rs. 100/- per day.
          </Text>
        </Text>
        <Text style={styles.text}>
          {" "}
          5. That the <Text style={styles.bold}>Second Party/ Tenant</Text>{" "}
          shall handover vacant possession of the said premises
          &nbsp;&nbsp;&nbsp;&nbsp;and the facilities/furnishing items in
          question to the{" "}
          <Text style={styles.bold}>First Party / Landlord</Text> in the
          &nbsp;&nbsp;&nbsp;&nbsp;same condition as handed over to
          <Text style={styles.bold}> Second Party / Tenant</Text> at the time of
          entering into the &nbsp;&nbsp;&nbsp;&nbsp;agreement and
          <Text style={styles.bold}> First Party / Landlord</Text> will assess
          if there is any damage or any repairing &nbsp;&nbsp;&nbsp;&nbsp;is
          required at the time of termination of the above Rent hereby agrees
          and undertakes &nbsp;&nbsp;&nbsp;&nbsp;to make good any loss to the{" "}
          <Text style={styles.bold}></Text>First Party / Landlord if any damage
          has been done to the &nbsp;&nbsp;&nbsp;&nbsp;property during the
          period of Leave and License.
        </Text>
        <Text style={styles.text}>
          {" "}
          6. That the electricity, water, sewerage bills, etc. will be paid by
          the Second Party regularly &nbsp;&nbsp;&nbsp;&nbsp;to the concerned
          authorities which are not included in the above rent or security
          deposit.
        </Text>
        <View style={styles.imageContainer}>
          <div>
            <Text style={styles.textForSignature}>FIRST PARTY / LANDLORD</Text>
            <Text style={styles.textForSignature}>
              ({props.formData.OwnerGender.toUpperCase()}.{props.formData.propertyOwnerName.toUpperCase()})
            </Text>
          </div>
          <div>
            <Text style={styles.textForSignature}>SECOND PARTY / TENANT</Text>
            {props.formData.tenTwoName === ""
              ? onlyOneSign()
              : props.formData.tenThreeName === ""
              ? onlyTwoSign()
              : props.formData.tenFourName === ""
              ? onlyThreeSign()
              : onlyFourSign()}
          </div>
        </View>
      </Page>
      <Page style={styles.body}>
        <Text style={styles.text}>
          {" "}
          7. That the water and electricity connection are already provided by
          the First Party &nbsp;&nbsp;&nbsp;&nbsp;to Second Party in the
          above-said premises. With the prior intimation to the First
          &nbsp;&nbsp;&nbsp;&nbsp;Party due permission from the First Party, if
          any new connection is installed for water
          &nbsp;&nbsp;&nbsp;&nbsp;electricity, then in that case the Second
          Party shall bear the costs of the same.
        </Text>
        <Text style={styles.text}>
          {" "}
          8. That the Second Party has the right to enjoy the common entrance,
          common passages, &nbsp;&nbsp;&nbsp;&nbsp;common staircases, landing,
          and common right to use the park and other easements
          &nbsp;&nbsp;&nbsp;&nbsp;pertaining to the said premises.
        </Text>
        <Text style={styles.text}>
          {" "}
          9. That the Second Party shall not sublet the premises in whole or its
          part thereof including &nbsp;&nbsp;&nbsp;&nbsp;the parking area in any
          circumstances and the Property will be used by the Second Party
          &nbsp;&nbsp;&nbsp;&nbsp;strictly for Residential purposes.
        </Text>
        <Text style={styles.text}>
          {" "}
          10. That the Second Party shall not remove any sanitary fittings or
          any other fittings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;including
          articles and equipment attached to the rented premises and shall hand
          over &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all the fittings, articles,
          and equipment at the time of vacation of the said premises in
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;good working order.
        </Text>
        <Text style={styles.text}>
          {" "}
          11. That if the Second Party fails to abide by any of the terms and
          agreement stands &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;terminated and
          the Second Party shall hand over the vacant and peaceful possession
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of the said premises to the First
          Party.
        </Text>
        <Text style={styles.text}>
          {" "}
          12. That the Second Party shall permit the First Party or any of
          his/her authorized person &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to enter
          the said premises at reasonable times for inspection after giving
          prior notice of &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;at least 24 hours.
        </Text>
        <Text style={styles.text}>
          {" "}
          13. That the Rent agreement can be terminated by either First Party or
          Second Party by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;giving one-month
          advance notice without assigning any reason.
        </Text>
        <Text style={styles.text}>
          {" "}
          14. That the Second Party shall remain bound by the laws and bye-laws
          of the local &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;authorities and
          Jurisdiction of Delhi-NCT.
        </Text>
        <View style={styles.imageContainer}>
          <div>
            <Text style={styles.textForSignature}>FIRST PARTY / LANDLORD</Text>
            <Text style={styles.textForSignature}>
              ({props.formData.OwnerGender.toUpperCase()}.{props.formData.propertyOwnerName.toUpperCase()})
            </Text>
          </div>
          <div>
            <Text style={styles.textForSignature}>SECOND PARTY / TENANT</Text>

            {props.formData.tenTwoName === ""
              ? onlyOneSign()
              : props.formData.tenThreeName === ""
              ? onlyTwoSign()
              : props.formData.tenFourName === ""
              ? onlyThreeSign()
              : onlyFourSign()}
          </div>
        </View>
      </Page>
      <Page style={styles.body}>
        <Text style={styles.text}>
          {" "}
          15. That day-to-day repair such as fuse, leakage in water taps, will
          be carried out by the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Second Party
          at his own costs, but the major repairs such as cracks in the house,
          etc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;will be done by the First
          Party when informed by the Second Party in advance and with
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the prior permission from the
          Society.
        </Text>
        <Text style={styles.text}>
          {" "}
          16. That the Second Party shall use the above-said premises strictly
          in conformity with the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statutory
          authority’s rules prevailing in Delhi-NCT and in case of any defaults
          of levied &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attributable to the
          Second Party, the same shall be paid and borne by the Second Party.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The responsibility for any default
          or any penalty, levy, or consequences on this account
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shall be of the Second Party and
          First Party shall not be held liable for the same.
        </Text>
        <Text style={styles.text}>
          {" "}
          17. That this Rent agreement is not valid for any bank loan and Credit
          Card.
        </Text>
        <Text style={styles.text}>
          {" "}
          18. That the rent will be increased by 10% per annum after every
          <Text style={styles.bold}>11</Text> months
          commenc &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ing from{" "}
          <Text style={styles.bold}>{props.formData.shiftingDate}</Text>
          &nbsp;&nbsp;on the mutual understanding.
        </Text>
        <Text style={styles.text}>
          {" "}
          19. The Second Party hereby covenants with the First Party as follows:
        </Text>
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Not to place or keep or permit
          to be placed or kept on the said premises any offensive,
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dangerous
          or highly inflammable or explosive material or any other article or
          things,
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;which may
          constitute a danger, nuisance or annoyance to the demised or
          surrounding
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;premises
          or the owners or occupiers thereof.
        </Text>
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Not to transfer, assign, or
          part with the possession of the premises or any part thereof.
        </Text>
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. That the Second Party shall not
          make any structural alterations, additions, etc. in the
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;said
          premises without the written consent of the First Party.
        </Text>
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d. That the Second Party shall
          keep utmost care of the inventory items in the Licensed
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premises
          and shall not alienate/sell/create any third-party rights over the
          inventory
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;without
          the written consent from the First Party.
        </Text>
        <View style={styles.imageContainer}>
          <div>
            <Text style={styles.textForSignature}>FIRST PARTY / LANDLORD</Text>
            <Text style={styles.textForSignature}>
              ({props.formData.OwnerGender.toUpperCase()}.{props.formData.propertyOwnerName.toUpperCase()})
            </Text>
          </div>
          <div>
            <Text style={styles.textForSignature}>SECOND PARTY / TENANT</Text>

            {props.formData.tenTwoName === ""
              ? onlyOneSign()
              : props.formData.tenThreeName === ""
              ? onlyTwoSign()
              : props.formData.tenFourName === ""
              ? onlyThreeSign()
              : onlyFourSign()}
          </div>
        </View>
      </Page>
      <Page style={styles.body}>
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e. That the Second Party shall
          keep the premises in good tenantable conditions and
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shall not
          cause any loss/damage to it subject to a regular general wear/tear of
          the
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;premises
          in question. Any item damages will be replaced by the Second Party at
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;his/her
          own expense.
        </Text>
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f. That the Second Party shall not
          claim any tenancy right and shall not have any right
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to
          transfer, assign, and sublet or grant any license or sub-license in
          respect of the
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Licensed
          Premises or any part thereof and also shall not mortgage or raise any
          loan
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;against
          the said premises.
        </Text>
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;g. The Second Party shall not do
          anything in the said premises which is or is likely to
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cause a
          nuisance to the other occupants of the said locality or to the
          prejudice in any
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;manner to
          the rights of the First Party in respect of said premises or shall not
          do any
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unlawful
          activities prohibited by State or Central Government.
        </Text>
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;h. That in case of default or
          nonpayment of rent for 45 days, the Tenancy will
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;automatically
          stand terminated and the Tenant shall be under obligation to vacate
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the
          premises and hand over vacant possession immediately to the first
          party.
        </Text>
        <Text style={styles.text}>
          20. That the terms and conditions of this agreement are stated above
          shall be binding on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;both the
          parties. The terms and conditions are final and irrevocable.
        </Text>

        <Text style={styles.text}>
          21. In the event of any dispute or difference of any kind whatsoever
          between the parties, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arising
          out of operations of this agreement. In such cases, the matter shall
          be referred &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for arbitration
          to the Sole Arbitrator to be appointed by First Party. The decision of
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arbitrators shall be final
          and binding on the parties. In this connection the provisions
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of the Arbitration and
          Conciliation Act, 1996 shall apply to the arbitration. For the
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;purposes of jurisdiction,
          only the courts at Delhi shall have exclusive jurisdiction to
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deal with any matter arising
          out of this agreement.
        </Text>
        <View style={styles.imageContainer}>
          <div>
            <Text style={styles.textForSignature}>FIRST PARTY / LANDLORD</Text>
            <Text style={styles.textForSignature}>
              ({props.formData.OwnerGender.toUpperCase()}.{props.formData.propertyOwnerName.toUpperCase()})
            </Text>
          </div>
          <div>
            <Text style={styles.textForSignature}>SECOND PARTY / TENANT</Text>
            {props.formData.tenTwoName === ""
              ? onlyOneSign()
              : props.formData.tenThreeName === ""
              ? onlyTwoSign()
              : props.formData.tenFourName === ""
              ? onlyThreeSign()
              : onlyFourSign()}
          </div>
        </View>
      </Page>
      <Page style={styles.body}>
        <Text style={styles.text}>
          22. This Agreement is to be notarized and the expenditure of Stamp
          duty and notary fees &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and
          incidental charges, if any, shall be borne by the FIRST PARTY and
          SECOND &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PARTY equally.
        </Text>
        <Text style={styles.text}>
          23. The facilities/furnishing items provided by First Party to the
          Second Party shall &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;handover
          back to the First Party by the Second Party in the same condition, as
          stated &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in article 5 of this
          agreement. The list of facilities/furnishing items are given below:
        </Text>
        <View style={styles.table}>
          <Svg height="15" width="500">
            <Line
              x1="0"
              y1="0"
              x2="500"
              y2="0"
              strokeWidth={2}
              stroke="rgb(255,0,0)"
            />
          </Svg>
          <Text>
            FACILITES/FURNISHING ITEMS
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            NUMBER OF ITEMS
          </Text>
          <Text>&nbsp;</Text>
          <Svg height="10" width="500">
            <Line
              x1="0"
              y1="0"
              x2="500"
              y2="0"
              strokeWidth={2}
              stroke="rgb(255,0,0)"
            />
          </Svg>
          <Text>&nbsp;</Text>
        </View>
        {props.formData.thingsGiven.map((e,i) => {
          return (
            <View key={i} style={styles.textForTable}>
              <div>
                <Text style={styles.text}>{e.entity}</Text>
              </div>
              <div>
                <Text style={styles.text}>{e.units}</Text>
              </div>
            </View>
          );
        })}

        <View style={styles.imageContainer}>
          <div>
            <Text style={styles.textForSignature}>FIRST PARTY / LANDLORD</Text>
            <Text style={styles.textForSignature}>
              ({props.formData.OwnerGender.toUpperCase()}.{props.formData.propertyOwnerName.toUpperCase()})
            </Text>
          </div>
          <div>
            <Text style={styles.textForSignature}>SECOND PARTY / TENANT</Text>

            {props.formData.tenTwoName === ""
              ? onlyOneSign()
              : props.formData.tenThreeName === ""
              ? onlyTwoSign()
              : props.formData.tenFourName === ""
              ? onlyThreeSign()
              : onlyFourSign()}
          </div>
        </View>
      </Page>
      <Page style={styles.body}>
        <Text style={styles.text}>
          IN WITNESS whereof both the parties have set their respective hands to
          this deed on this{" "}
          <Text style={styles.bold}>{props.formData.shiftingDate}</Text>{" "}
          hereinabove written.
        </Text>
        <View style={styles.textWitness}>
          <Text style={styles.text}>WITNESSES:</Text>
          <Text style={styles.text}>1.({props.formData.witness1})</Text>
          <Text style={styles.text}>2.({props.formData.witness2})</Text>
        </View>
        <View style={styles.imageContainer}>
          <div>
            <Text style={styles.textForSignature}>FIRST PARTY / LANDLORD</Text>
            <Text style={styles.textForSignature}>
              ({props.formData.OwnerGender.toUpperCase()}.{props.formData.propertyOwnerName.toUpperCase()})
            </Text>
          </div>
          <div>
            <Text style={styles.textForSignature}>SECOND PARTY / TENANT</Text>

            {props.formData.tenTwoName === ""
              ? onlyOneSign()
              : props.formData.tenThreeName === ""
              ? onlyTwoSign()
              : props.formData.tenFourName === ""
              ? onlyThreeSign()
              : onlyFourSign()}

          </div>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
